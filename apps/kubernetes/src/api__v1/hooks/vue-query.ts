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

export function getApiV1IndexQueryKey() {
  return ['api', '/api/v1/'] as const
}

export function getApiV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>
          >,
          ReturnType<typeof getApiV1IndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ComponentstatusesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.componentstatuses.$get>>,
) {
  return ['api', '/api/v1/componentstatuses', toValue(args)] as const
}

export function getApiV1ComponentstatusesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.componentstatuses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ComponentstatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.componentstatuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Componentstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.componentstatuses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ComponentstatusesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ComponentstatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ComponentstatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.componentstatuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ComponentstatusesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.componentstatuses)[':name']['$get']>
  >,
) {
  return ['api', '/api/v1/componentstatuses/:name', toValue(args)] as const
}

export function getApiV1ComponentstatusesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.componentstatuses)[':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ComponentstatusesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.componentstatuses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ComponentstatusesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.componentstatuses)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.componentstatuses)[':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.componentstatuses)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.componentstatuses)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ComponentstatusesNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.componentstatuses)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ComponentstatusesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ComponentstatusesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.componentstatuses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigmapsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.configmaps.$get>>,
) {
  return ['api', '/api/v1/configmaps', toValue(args)] as const
}

export function getApiV1ConfigmapsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.configmaps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigmapsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.configmaps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Configmaps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.configmaps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ConfigmapsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigmapsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigmapsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.configmaps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EndpointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.endpoints.$get>>,
) {
  return ['api', '/api/v1/endpoints', toValue(args)] as const
}

export function getApiV1EndpointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.endpoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.endpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Endpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.endpoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>
            >
          >,
          ReturnType<typeof getApiV1EndpointsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.endpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.events.$get>>,
) {
  return ['api', '/api/v1/events', toValue(args)] as const
}

export function getApiV1EventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
          >,
          ReturnType<typeof getApiV1EventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LimitrangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.limitranges.$get>>,
) {
  return ['api', '/api/v1/limitranges', toValue(args)] as const
}

export function getApiV1LimitrangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.limitranges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LimitrangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.limitranges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Limitranges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.limitranges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LimitrangesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LimitrangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LimitrangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.limitranges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1NamespacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.namespaces.$get>>,
) {
  return ['api', '/api/v1/namespaces', toValue(args)] as const
}

export function getApiV1NamespacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.namespaces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Namespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.namespaces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>
            >
          >,
          ReturnType<typeof getApiV1NamespacesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesMutationKey() {
  return ['api', '/api/v1/namespaces', 'POST'] as const
}

export function getPostApiV1NamespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.namespaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.namespaces.$post>) {
      return parseResponse(client.api.v1.namespaces.$post(args, options))
    },
  })
}

export function usePostApiV1Namespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.namespaces.$post>,
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
  const mutationDefaults = getPostApiV1NamespacesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1NamespacesNamespaceBindingsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/bindings', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceBindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['bindings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['bindings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceBindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['bindings']['$post']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].bindings.$post(args, options))
    },
  })
}

export function usePostApiV1NamespacesNamespaceBindings<
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['bindings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['bindings']['$post']>,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceBindingsMutationOptions<
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

export function getApiV1NamespacesNamespaceConfigmapsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/configmaps', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceConfigmapsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceConfigmapsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].configmaps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceConfigmaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceConfigmapsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceConfigmapsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceConfigmapsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].configmaps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespaceConfigmapsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/configmaps', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceConfigmapsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceConfigmapsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['configmaps']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].configmaps.$post(args, options))
    },
  })
}

export function usePostApiV1NamespacesNamespaceConfigmaps<
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$post']>,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceConfigmapsMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceConfigmapsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/configmaps', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceConfigmapsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceConfigmapsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['configmaps']['$delete']
      >,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].configmaps.$delete(args, options))
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceConfigmaps<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['configmaps']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['configmaps']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceConfigmapsMutationOptions<
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

export function getApiV1NamespacesNamespaceConfigmapsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/configmaps/:name', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceConfigmapsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceConfigmapsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].configmaps[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceConfigmapsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']>
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
                    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceConfigmapsNameQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceConfigmapsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceConfigmapsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].configmaps[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceConfigmapsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/configmaps/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceConfigmapsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceConfigmapsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].configmaps[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceConfigmapsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceConfigmapsNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceConfigmapsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/configmaps/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceConfigmapsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceConfigmapsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].configmaps[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceConfigmapsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceConfigmapsNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceConfigmapsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/configmaps/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceConfigmapsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceConfigmapsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].configmaps[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceConfigmapsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceConfigmapsNameMutationOptions<
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

export function getApiV1NamespacesNamespaceEndpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/endpoints', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceEndpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].endpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceEndpointsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].endpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespaceEndpointsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/endpoints', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$post']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].endpoints.$post(args, options))
    },
  })
}

export function usePostApiV1NamespacesNamespaceEndpoints<
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$post']>,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceEndpointsMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceEndpointsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/endpoints', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['endpoints']['$delete']
      >,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].endpoints.$delete(args, options))
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceEndpoints<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['endpoints']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceEndpointsMutationOptions<
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

export function getApiV1NamespacesNamespaceEndpointsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/endpoints/:name', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceEndpointsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceEndpointsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].endpoints[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceEndpointsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']>
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
                    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceEndpointsNameQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceEndpointsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceEndpointsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].endpoints[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceEndpointsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/endpoints/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceEndpointsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceEndpointsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].endpoints[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceEndpointsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceEndpointsNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceEndpointsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/endpoints/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceEndpointsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceEndpointsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].endpoints[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceEndpointsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceEndpointsNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceEndpointsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/endpoints/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceEndpointsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceEndpointsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].endpoints[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceEndpointsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceEndpointsNameMutationOptions<
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

export function getApiV1NamespacesNamespaceEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/events', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespaceEventsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/events', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$post']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].events.$post(args, options))
    },
  })
}

export function usePostApiV1NamespacesNamespaceEvents<
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$post']>,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceEventsMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceEventsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/events', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$delete']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].events.$delete(args, options))
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceEvents<
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceEventsMutationOptions<
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

export function getApiV1NamespacesNamespaceEventsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/events/:name', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceEventsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceEventsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].events[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceEventsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']>
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
                    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceEventsNameQueryKey>
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
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceEventsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceEventsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].events[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceEventsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/events/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceEventsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceEventsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].events[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceEventsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceEventsNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceEventsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/events/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceEventsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceEventsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].events[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceEventsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceEventsNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceEventsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/events/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceEventsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceEventsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].events[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceEventsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceEventsNameMutationOptions<
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

export function getApiV1NamespacesNamespaceLimitrangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/limitranges', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceLimitrangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceLimitrangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].limitranges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceLimitranges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceLimitrangesQueryKey>
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
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceLimitrangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceLimitrangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].limitranges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespaceLimitrangesMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/limitranges', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceLimitrangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceLimitrangesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['limitranges']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].limitranges.$post(args, options))
    },
  })
}

export function usePostApiV1NamespacesNamespaceLimitranges<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['limitranges']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$post']>,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceLimitrangesMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceLimitrangesMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/limitranges', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceLimitrangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceLimitrangesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['limitranges']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].limitranges.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceLimitranges<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['limitranges']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['limitranges']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceLimitrangesMutationOptions<
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

export function getApiV1NamespacesNamespaceLimitrangesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/limitranges/:name', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceLimitrangesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceLimitrangesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].limitranges[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceLimitrangesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceLimitrangesNameQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceLimitrangesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceLimitrangesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].limitranges[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceLimitrangesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/limitranges/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceLimitrangesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceLimitrangesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].limitranges[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceLimitrangesName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceLimitrangesNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceLimitrangesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/limitranges/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceLimitrangesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceLimitrangesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].limitranges[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceLimitrangesName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceLimitrangesNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceLimitrangesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/limitranges/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceLimitrangesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceLimitrangesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].limitranges[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceLimitrangesName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceLimitrangesNameMutationOptions<
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

export function getApiV1NamespacesNamespacePersistentvolumeclaimsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePersistentvolumeclaimsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePersistentvolumeclaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePersistentvolumeclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePersistentvolumeclaimsQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePersistentvolumeclaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePersistentvolumeclaimsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespacePersistentvolumeclaimsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims', 'POST'] as const
}

export function getPostApiV1NamespacesNamespacePersistentvolumeclaimsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespacePersistentvolumeclaimsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespacePersistentvolumeclaims<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespacePersistentvolumeclaimsMutationOptions<
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

export function getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespacePersistentvolumeclaims<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsMutationOptions<
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

export function getApiV1NamespacesNamespacePersistentvolumeclaimsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name',
    toValue(args),
  ] as const
}

export function getApiV1NamespacesNamespacePersistentvolumeclaimsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePersistentvolumeclaimsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePersistentvolumeclaimsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePersistentvolumeclaimsNameQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePersistentvolumeclaimsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePersistentvolumeclaimsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespacePersistentvolumeclaimsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespacePersistentvolumeclaimsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$delete']
          >,
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
  const mutationDefaults =
    getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespacePersistentvolumeclaimsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$patch']
          >,
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
  const mutationDefaults =
    getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameMutationOptions<
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

export function getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status',
    toValue(args),
  ] as const
}

export function getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePersistentvolumeclaimsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status',
    'PUT',
  ] as const
}

export function getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespacePersistentvolumeclaimsNameStatus<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$put']
          >,
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
  const mutationDefaults =
    getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusMutationOptions<
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

export function getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatus<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$patch']
          >,
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
  const mutationDefaults =
    getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusMutationOptions<
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

export function getApiV1NamespacesNamespacePodsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespacePodsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods', 'POST'] as const
}

export function getPostApiV1NamespacesNamespacePodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespacePodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$post']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].pods.$post(args, options))
    },
  })
}

export function usePostApiV1NamespacesNamespacePods<
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$post']>,
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
  const mutationDefaults = getPostApiV1NamespacesNamespacePodsMutationOptions<
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

export function getDeleteApiV1NamespacesNamespacePodsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespacePodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespacePodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$delete']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].pods.$delete(args, options))
    },
  })
}

export function useDeleteApiV1NamespacesNamespacePods<
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespacePodsMutationOptions<
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

export function getApiV1NamespacesNamespacePodsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsNameQueryKey>
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
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespacePodsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespacePodsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespacePodsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$put']
      >,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].pods[':name'].$put(args, options))
    },
  })
}

export function usePutApiV1NamespacesNamespacePodsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespacePodsNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespacePodsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespacePodsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespacePodsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespacePodsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespacePodsNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespacePodsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespacePodsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespacePodsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespacePodsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespacePodsNameMutationOptions<
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

export function getApiV1NamespacesNamespacePodsNameAttachQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/attach', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodsNameAttachQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsNameAttachQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].attach.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodsNameAttach<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsNameAttachQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsNameAttachQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodsNameAttachQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].attach.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespacePodsNameAttachMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/attach', 'POST'] as const
}

export function getPostApiV1NamespacesNamespacePodsNameAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespacePodsNameAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].attach.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespacePodsNameAttach<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespacePodsNameAttachMutationOptions<
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

export function getPostApiV1NamespacesNamespacePodsNameBindingMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/binding', 'POST'] as const
}

export function getPostApiV1NamespacesNamespacePodsNameBindingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['binding']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['binding']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespacePodsNameBindingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['binding']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].binding.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespacePodsNameBinding<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['binding']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['binding']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespacePodsNameBindingMutationOptions<
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

export function getApiV1NamespacesNamespacePodsNameDynamicQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/dynamic', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodsNameDynamicQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsNameDynamicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodsNameDynamic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsNameDynamicQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsNameDynamicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodsNameDynamicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespacePodsNameDynamicMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/dynamic', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespacePodsNameDynamicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespacePodsNameDynamicMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespacePodsNameDynamic<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespacePodsNameDynamicMutationOptions<
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

export function getPatchApiV1NamespacesNamespacePodsNameDynamicMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/dynamic', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespacePodsNameDynamicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespacePodsNameDynamicMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespacePodsNameDynamic<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespacePodsNameDynamicMutationOptions<
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

export function getApiV1NamespacesNamespacePodsNameEphemeralcontainersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers',
    toValue(args),
  ] as const
}

export function getApiV1NamespacesNamespacePodsNameEphemeralcontainersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsNameEphemeralcontainersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodsNameEphemeralcontainers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsNameEphemeralcontainersQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsNameEphemeralcontainersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1NamespacesNamespacePodsNameEphemeralcontainersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespacePodsNameEphemeralcontainersMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespacePodsNameEphemeralcontainersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespacePodsNameEphemeralcontainersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespacePodsNameEphemeralcontainers<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespacePodsNameEphemeralcontainersMutationOptions<
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

export function getPatchApiV1NamespacesNamespacePodsNameEphemeralcontainersMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespacePodsNameEphemeralcontainersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespacePodsNameEphemeralcontainersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespacePodsNameEphemeralcontainers<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$patch']
          >,
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
  const mutationDefaults =
    getPatchApiV1NamespacesNamespacePodsNameEphemeralcontainersMutationOptions<
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

export function getPostApiV1NamespacesNamespacePodsNameEvictionMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/eviction', 'POST'] as const
}

export function getPostApiV1NamespacesNamespacePodsNameEvictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['eviction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['eviction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespacePodsNameEvictionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['eviction']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].eviction.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespacePodsNameEviction<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['eviction']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['eviction']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespacePodsNameEvictionMutationOptions<
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

export function getApiV1NamespacesNamespacePodsNameExecQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/exec', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodsNameExecQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsNameExecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].exec.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodsNameExec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsNameExecQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsNameExecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodsNameExecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].exec.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespacePodsNameExecMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/exec', 'POST'] as const
}

export function getPostApiV1NamespacesNamespacePodsNameExecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespacePodsNameExecMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].exec.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespacePodsNameExec<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespacePodsNameExecMutationOptions<
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

export function getApiV1NamespacesNamespacePodsNameLogQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/log', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodsNameLogQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsNameLogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].log.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodsNameLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsNameLogQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsNameLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodsNameLogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].log.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1NamespacesNamespacePodsNamePortforwardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/portforward', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodsNamePortforwardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsNamePortforwardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].portforward.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodsNamePortforward<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsNamePortforwardQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsNamePortforwardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodsNamePortforwardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].portforward.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespacePodsNamePortforwardMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/portforward', 'POST'] as const
}

export function getPostApiV1NamespacesNamespacePodsNamePortforwardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespacePodsNamePortforwardMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].portforward.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespacePodsNamePortforward<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespacePodsNamePortforwardMutationOptions<
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

export function getApiV1NamespacesNamespacePodsNameProxyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodsNameProxyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsNameProxyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodsNameProxy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsNameProxyQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsNameProxyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodsNameProxyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespacePodsNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespacePodsNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespacePodsNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespacePodsNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespacePodsNameProxyMutationOptions<
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

export function getPostApiV1NamespacesNamespacePodsNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'POST'] as const
}

export function getPostApiV1NamespacesNamespacePodsNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespacePodsNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespacePodsNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespacePodsNameProxyMutationOptions<
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

export function getDeleteApiV1NamespacesNamespacePodsNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespacePodsNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespacePodsNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespacePodsNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespacePodsNameProxyMutationOptions<
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

export function getOptionsApiV1NamespacesNamespacePodsNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'OPTIONS'] as const
}

export function getOptionsApiV1NamespacesNamespacePodsNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$options']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$options']
    >,
    TOnMutateResult
  >({
    mutationKey: getOptionsApiV1NamespacesNamespacePodsNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$options']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$options(args, options),
      )
    },
  })
}

export function useOptionsApiV1NamespacesNamespacePodsNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$options']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$options']
          >,
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
  const mutationDefaults = getOptionsApiV1NamespacesNamespacePodsNameProxyMutationOptions<
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

export function getHeadApiV1NamespacesNamespacePodsNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'HEAD'] as const
}

export function getHeadApiV1NamespacesNamespacePodsNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadApiV1NamespacesNamespacePodsNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$head']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$head(args, options),
      )
    },
  })
}

export function useHeadApiV1NamespacesNamespacePodsNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$head']
          >,
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
  const mutationDefaults = getHeadApiV1NamespacesNamespacePodsNameProxyMutationOptions<
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

export function getPatchApiV1NamespacesNamespacePodsNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespacePodsNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespacePodsNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespacePodsNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespacePodsNameProxyMutationOptions<
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

export function getApiV1NamespacesNamespacePodsNameProxyPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodsNameProxyPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsNameProxyPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodsNameProxyPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsNameProxyPathQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsNameProxyPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodsNameProxyPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespacePodsNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespacePodsNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespacePodsNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
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

export function getPostApiV1NamespacesNamespacePodsNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'POST'] as const
}

export function getPostApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespacePodsNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespacePodsNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
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

export function getDeleteApiV1NamespacesNamespacePodsNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespacePodsNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespacePodsNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
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

export function getOptionsApiV1NamespacesNamespacePodsNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'OPTIONS'] as const
}

export function getOptionsApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$options']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$options']
    >,
    TOnMutateResult
  >({
    mutationKey: getOptionsApiV1NamespacesNamespacePodsNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$options']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$options(args, options),
      )
    },
  })
}

export function useOptionsApiV1NamespacesNamespacePodsNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$options']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$options']
          >,
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
  const mutationDefaults = getOptionsApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
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

export function getHeadApiV1NamespacesNamespacePodsNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'HEAD'] as const
}

export function getHeadApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadApiV1NamespacesNamespacePodsNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$head']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$head(args, options),
      )
    },
  })
}

export function useHeadApiV1NamespacesNamespacePodsNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$head']
          >,
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
  const mutationDefaults = getHeadApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
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

export function getPatchApiV1NamespacesNamespacePodsNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespacePodsNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespacePodsNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespacePodsNameProxyPathMutationOptions<
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

export function getApiV1NamespacesNamespacePodsNameResizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/resize', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodsNameResizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsNameResizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].resize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodsNameResize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsNameResizeQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsNameResizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodsNameResizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].resize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespacePodsNameResizeMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/resize', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespacePodsNameResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespacePodsNameResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].resize.$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespacePodsNameResize<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespacePodsNameResizeMutationOptions<
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

export function getPatchApiV1NamespacesNamespacePodsNameResizeMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/resize', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespacePodsNameResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespacePodsNameResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].resize.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespacePodsNameResize<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespacePodsNameResizeMutationOptions<
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

export function getApiV1NamespacesNamespacePodsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/status', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodsNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodsNameStatusQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodsNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespacePodsNameStatusMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/status', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespacePodsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespacePodsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].status.$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespacePodsNameStatus<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespacePodsNameStatusMutationOptions<
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

export function getPatchApiV1NamespacesNamespacePodsNameStatusMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/status', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespacePodsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespacePodsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespacePodsNameStatus<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespacePodsNameStatusMutationOptions<
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

export function getApiV1NamespacesNamespacePodtemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodtemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodtemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].podtemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodtemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>
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
                    (typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodtemplatesQueryKey>
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
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodtemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodtemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].podtemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespacePodtemplatesMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates', 'POST'] as const
}

export function getPostApiV1NamespacesNamespacePodtemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespacePodtemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].podtemplates.$post(args, options))
    },
  })
}

export function usePostApiV1NamespacesNamespacePodtemplates<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespacePodtemplatesMutationOptions<
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

export function getDeleteApiV1NamespacesNamespacePodtemplatesMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespacePodtemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespacePodtemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].podtemplates.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespacePodtemplates<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespacePodtemplatesMutationOptions<
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

export function getApiV1NamespacesNamespacePodtemplatesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates/:name', toValue(args)] as const
}

export function getApiV1NamespacesNamespacePodtemplatesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespacePodtemplatesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].podtemplates[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespacePodtemplatesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespacePodtemplatesNameQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespacePodtemplatesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespacePodtemplatesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].podtemplates[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespacePodtemplatesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespacePodtemplatesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespacePodtemplatesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].podtemplates[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespacePodtemplatesName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespacePodtemplatesNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespacePodtemplatesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespacePodtemplatesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespacePodtemplatesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].podtemplates[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespacePodtemplatesName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespacePodtemplatesNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespacePodtemplatesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespacePodtemplatesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespacePodtemplatesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].podtemplates[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespacePodtemplatesName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespacePodtemplatesNameMutationOptions<
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

export function getApiV1NamespacesNamespaceReplicationcontrollersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceReplicationcontrollersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceReplicationcontrollersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceReplicationcontrollers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceReplicationcontrollersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespaceReplicationcontrollersMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceReplicationcontrollersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceReplicationcontrollersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespaceReplicationcontrollers<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceReplicationcontrollersMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceReplicationcontrollersMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceReplicationcontrollersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceReplicationcontrollersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceReplicationcontrollers<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceReplicationcontrollersMutationOptions<
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

export function getApiV1NamespacesNamespaceReplicationcontrollersNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/replicationcontrollers/:name',
    toValue(args),
  ] as const
}

export function getApiV1NamespacesNamespaceReplicationcontrollersNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceReplicationcontrollersNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceReplicationcontrollersName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersNameQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceReplicationcontrollersNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceReplicationcontrollersNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceReplicationcontrollersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceReplicationcontrollersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceReplicationcontrollersName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceReplicationcontrollersNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceReplicationcontrollersNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceReplicationcontrollersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceReplicationcontrollersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceReplicationcontrollersName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$delete']
          >,
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
  const mutationDefaults =
    getDeleteApiV1NamespacesNamespaceReplicationcontrollersNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceReplicationcontrollersNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceReplicationcontrollersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceReplicationcontrollersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceReplicationcontrollersName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$patch']
          >,
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
  const mutationDefaults =
    getPatchApiV1NamespacesNamespaceReplicationcontrollersNameMutationOptions<
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

export function getApiV1NamespacesNamespaceReplicationcontrollersNameScaleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale',
    toValue(args),
  ] as const
}

export function getApiV1NamespacesNamespaceReplicationcontrollersNameScaleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1NamespacesNamespaceReplicationcontrollersNameScaleQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceReplicationcontrollersNameScale<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersNameScaleQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersNameScaleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1NamespacesNamespaceReplicationcontrollersNameScaleQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceReplicationcontrollersNameScaleMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceReplicationcontrollersNameScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceReplicationcontrollersNameScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceReplicationcontrollersNameScale<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$put']
          >,
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
  const mutationDefaults =
    getPutApiV1NamespacesNamespaceReplicationcontrollersNameScaleMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceReplicationcontrollersNameScaleMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale',
    'PATCH',
  ] as const
}

export function getPatchApiV1NamespacesNamespaceReplicationcontrollersNameScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceReplicationcontrollersNameScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceReplicationcontrollersNameScale<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$patch']
          >,
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
  const mutationDefaults =
    getPatchApiV1NamespacesNamespaceReplicationcontrollersNameScaleMutationOptions<
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

export function getApiV1NamespacesNamespaceReplicationcontrollersNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/replicationcontrollers/:name/status',
    toValue(args),
  ] as const
}

export function getApiV1NamespacesNamespaceReplicationcontrollersNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1NamespacesNamespaceReplicationcontrollersNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceReplicationcontrollersNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersNameStatusQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1NamespacesNamespaceReplicationcontrollersNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceReplicationcontrollersNameStatusMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/replicationcontrollers/:name/status',
    'PUT',
  ] as const
}

export function getPutApiV1NamespacesNamespaceReplicationcontrollersNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceReplicationcontrollersNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceReplicationcontrollersNameStatus<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$put']
          >,
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
  const mutationDefaults =
    getPutApiV1NamespacesNamespaceReplicationcontrollersNameStatusMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceReplicationcontrollersNameStatusMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/replicationcontrollers/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApiV1NamespacesNamespaceReplicationcontrollersNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceReplicationcontrollersNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceReplicationcontrollersNameStatus<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$patch']
          >,
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
  const mutationDefaults =
    getPatchApiV1NamespacesNamespaceReplicationcontrollersNameStatusMutationOptions<
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

export function getApiV1NamespacesNamespaceResourcequotasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceResourcequotasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceResourcequotasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceResourcequotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>
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
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceResourcequotasQueryKey>
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
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceResourcequotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceResourcequotasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespaceResourcequotasMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceResourcequotasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceResourcequotasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespaceResourcequotas<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceResourcequotasMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceResourcequotasMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceResourcequotasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceResourcequotasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceResourcequotas<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceResourcequotasMutationOptions<
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

export function getApiV1NamespacesNamespaceResourcequotasNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceResourcequotasNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceResourcequotasNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceResourcequotasName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceResourcequotasNameQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceResourcequotasNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceResourcequotasNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceResourcequotasNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceResourcequotasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceResourcequotasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceResourcequotasName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceResourcequotasNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceResourcequotasNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceResourcequotasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceResourcequotasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceResourcequotasName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceResourcequotasNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceResourcequotasNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceResourcequotasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceResourcequotasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceResourcequotasName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceResourcequotasNameMutationOptions<
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

export function getApiV1NamespacesNamespaceResourcequotasNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/resourcequotas/:name/status',
    toValue(args),
  ] as const
}

export function getApiV1NamespacesNamespaceResourcequotasNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceResourcequotasNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceResourcequotasNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceResourcequotasNameStatusQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceResourcequotasNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceResourcequotasNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceResourcequotasNameStatusMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name/status', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceResourcequotasNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceResourcequotasNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceResourcequotasNameStatus<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceResourcequotasNameStatusMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceResourcequotasNameStatusMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name/status', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceResourcequotasNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceResourcequotasNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceResourcequotasNameStatus<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceResourcequotasNameStatusMutationOptions<
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

export function getApiV1NamespacesNamespaceSecretsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/secrets', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceSecretsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].secrets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceSecretsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespaceSecretsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/secrets', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$post']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].secrets.$post(args, options))
    },
  })
}

export function usePostApiV1NamespacesNamespaceSecrets<
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$post']>,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceSecretsMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceSecretsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/secrets', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$delete']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].secrets.$delete(args, options))
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceSecrets<
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceSecretsMutationOptions<
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

export function getApiV1NamespacesNamespaceSecretsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/secrets/:name', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceSecretsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceSecretsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].secrets[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceSecretsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']>
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
                    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceSecretsNameQueryKey>
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
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceSecretsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceSecretsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].secrets[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceSecretsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/secrets/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceSecretsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceSecretsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].secrets[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceSecretsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceSecretsNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceSecretsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/secrets/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceSecretsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceSecretsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].secrets[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceSecretsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceSecretsNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceSecretsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/secrets/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceSecretsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceSecretsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].secrets[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceSecretsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceSecretsNameMutationOptions<
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

export function getApiV1NamespacesNamespaceServiceaccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceServiceaccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceServiceaccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].serviceaccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceServiceaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']>
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
                    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceServiceaccountsQueryKey>
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
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceServiceaccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceServiceaccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].serviceaccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespaceServiceaccountsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceServiceaccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceServiceaccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].serviceaccounts.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespaceServiceaccounts<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceServiceaccountsMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceServiceaccountsMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceServiceaccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceServiceaccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].serviceaccounts.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceServiceaccounts<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceServiceaccountsMutationOptions<
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

export function getApiV1NamespacesNamespaceServiceaccountsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts/:name', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceServiceaccountsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceServiceaccountsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceServiceaccountsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceServiceaccountsNameQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceServiceaccountsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceServiceaccountsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceServiceaccountsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceServiceaccountsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceServiceaccountsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceServiceaccountsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceServiceaccountsNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceServiceaccountsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceServiceaccountsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceServiceaccountsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceServiceaccountsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceServiceaccountsNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceServiceaccountsNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceServiceaccountsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceServiceaccountsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceServiceaccountsName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceServiceaccountsNameMutationOptions<
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

export function getPostApiV1NamespacesNamespaceServiceaccountsNameTokenMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts/:name/token', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceServiceaccountsNameTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceServiceaccountsNameTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['token']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].token.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespaceServiceaccountsNameToken<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['token']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceServiceaccountsNameTokenMutationOptions<
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

export function getApiV1NamespacesNamespaceServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceServicesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NamespacesNamespaceServicesMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$post']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].services.$post(args, options))
    },
  })
}

export function usePostApiV1NamespacesNamespaceServices<
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$post']>,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceServicesMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceServicesMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services']['$delete']
      >,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].services.$delete(args, options))
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceServices<
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
                  ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceServicesMutationOptions<
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

export function getApiV1NamespacesNamespaceServicesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceServicesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceServicesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceServicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']>
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
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceServicesNameQueryKey>
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
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceServicesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceServicesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceServicesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceServicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceServicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceServicesName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceServicesNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceServicesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceServicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceServicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceServicesName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceServicesNameMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceServicesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceServicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceServicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceServicesName<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceServicesNameMutationOptions<
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

export function getApiV1NamespacesNamespaceServicesNameProxyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceServicesNameProxyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceServicesNameProxyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceServicesNameProxy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceServicesNameProxyQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceServicesNameProxyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceServicesNameProxyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceServicesNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceServicesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy.$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceServicesNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
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

export function getPostApiV1NamespacesNamespaceServicesNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceServicesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy.$post(args, options),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespaceServicesNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceServicesNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceServicesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceServicesNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
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

export function getOptionsApiV1NamespacesNamespaceServicesNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'OPTIONS'] as const
}

export function getOptionsApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$options']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$options']
    >,
    TOnMutateResult
  >({
    mutationKey: getOptionsApiV1NamespacesNamespaceServicesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$options']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy.$options(args, options),
      )
    },
  })
}

export function useOptionsApiV1NamespacesNamespaceServicesNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$options']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$options']
          >,
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
  const mutationDefaults = getOptionsApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
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

export function getHeadApiV1NamespacesNamespaceServicesNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'HEAD'] as const
}

export function getHeadApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadApiV1NamespacesNamespaceServicesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$head']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy.$head(args, options),
      )
    },
  })
}

export function useHeadApiV1NamespacesNamespaceServicesNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$head']
          >,
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
  const mutationDefaults = getHeadApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceServicesNameProxyMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceServicesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceServicesNameProxy<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceServicesNameProxyMutationOptions<
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

export function getApiV1NamespacesNamespaceServicesNameProxyPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceServicesNameProxyPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceServicesNameProxyPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceServicesNameProxyPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceServicesNameProxyPathQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceServicesNameProxyPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceServicesNameProxyPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceServicesNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceServicesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceServicesNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
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

export function getPostApiV1NamespacesNamespaceServicesNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceServicesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1NamespacesNamespaceServicesNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$post']
          >,
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
  const mutationDefaults = getPostApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceServicesNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceServicesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV1NamespacesNamespaceServicesNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
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

export function getOptionsApiV1NamespacesNamespaceServicesNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'OPTIONS'] as const
}

export function getOptionsApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$options']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$options']
    >,
    TOnMutateResult
  >({
    mutationKey: getOptionsApiV1NamespacesNamespaceServicesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$options']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$options(
          args,
          options,
        ),
      )
    },
  })
}

export function useOptionsApiV1NamespacesNamespaceServicesNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$options']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$options']
          >,
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
  const mutationDefaults = getOptionsApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
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

export function getHeadApiV1NamespacesNamespaceServicesNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'HEAD'] as const
}

export function getHeadApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadApiV1NamespacesNamespaceServicesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$head']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$head(
          args,
          options,
        ),
      )
    },
  })
}

export function useHeadApiV1NamespacesNamespaceServicesNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$head']
          >,
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
  const mutationDefaults = getHeadApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceServicesNameProxyPathMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceServicesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceServicesNameProxyPath<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceServicesNameProxyPathMutationOptions<
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

export function getApiV1NamespacesNamespaceServicesNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
    >
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/status', toValue(args)] as const
}

export function getApiV1NamespacesNamespaceServicesNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNamespaceServicesNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNamespaceServicesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
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
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNamespaceServicesNameStatusQueryKey>
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
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceServicesNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNamespaceServicesNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNamespaceServicesNameStatusMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/status', 'PUT'] as const
}

export function getPutApiV1NamespacesNamespaceServicesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNamespaceServicesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].status.$put(args, options),
      )
    },
  })
}

export function usePutApiV1NamespacesNamespaceServicesNameStatus<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$put']
          >,
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
  const mutationDefaults = getPutApiV1NamespacesNamespaceServicesNameStatusMutationOptions<
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

export function getPatchApiV1NamespacesNamespaceServicesNameStatusMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/status', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNamespaceServicesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNamespaceServicesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1NamespacesNamespaceServicesNameStatus<
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
                  ReturnType<
                    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1NamespacesNamespaceServicesNameStatusMutationOptions<
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

export function getApiV1NamespacesNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.namespaces)[':name']['$get']>>,
) {
  return ['api', '/api/v1/namespaces/:name', toValue(args)] as const
}

export function getApiV1NamespacesNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.namespaces)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.namespaces)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:name', 'PUT'] as const
}

export function getPutApiV1NamespacesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$put']>) {
      return parseResponse(client.api.v1.namespaces[':name'].$put(args, options))
    },
  })
}

export function usePutApiV1NamespacesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':name']['$put']>,
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
  const mutationDefaults = getPutApiV1NamespacesNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1NamespacesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:name', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$delete']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':name'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1NamespacesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1NamespacesNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1NamespacesNameMutationKey() {
  return ['api', '/api/v1/namespaces/:name', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$patch']>) {
      return parseResponse(client.api.v1.namespaces[':name'].$patch(args, options))
    },
  })
}

export function usePatchApiV1NamespacesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':name']['$patch']>,
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
  const mutationDefaults = getPatchApiV1NamespacesNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV1NamespacesNameFinalizeMutationKey() {
  return ['api', '/api/v1/namespaces/:name/finalize', 'PUT'] as const
}

export function getPutApiV1NamespacesNameFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['finalize']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['finalize']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNameFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['finalize']['$put']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':name'].finalize.$put(args, options))
    },
  })
}

export function usePutApiV1NamespacesNameFinalize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['finalize']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':name']['finalize']['$put']>,
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
  const mutationDefaults = getPutApiV1NamespacesNameFinalizeMutationOptions<
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

export function getApiV1NamespacesNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>
  >,
) {
  return ['api', '/api/v1/namespaces/:name/status', toValue(args)] as const
}

export function getApiV1NamespacesNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NamespacesNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.namespaces[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NamespacesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NamespacesNameStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NamespacesNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.namespaces[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NamespacesNameStatusMutationKey() {
  return ['api', '/api/v1/namespaces/:name/status', 'PUT'] as const
}

export function getPutApiV1NamespacesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NamespacesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$put']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':name'].status.$put(args, options))
    },
  })
}

export function usePutApiV1NamespacesNameStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$put']>,
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
  const mutationDefaults = getPutApiV1NamespacesNameStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1NamespacesNameStatusMutationKey() {
  return ['api', '/api/v1/namespaces/:name/status', 'PATCH'] as const
}

export function getPatchApiV1NamespacesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NamespacesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$patch']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':name'].status.$patch(args, options))
    },
  })
}

export function usePatchApiV1NamespacesNameStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$patch']>,
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
  const mutationDefaults = getPatchApiV1NamespacesNameStatusMutationOptions<
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

export function getApiV1NodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.nodes.$get>>,
) {
  return ['api', '/api/v1/nodes', toValue(args)] as const
}

export function getApiV1NodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.nodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.nodes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.nodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
          >,
          ReturnType<typeof getApiV1NodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1NodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NodesMutationKey() {
  return ['api', '/api/v1/nodes', 'POST'] as const
}

export function getPostApiV1NodesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.nodes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.nodes.$post>) {
      return parseResponse(client.api.v1.nodes.$post(args, options))
    },
  })
}

export function usePostApiV1Nodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.nodes.$post>,
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
  const mutationDefaults = getPostApiV1NodesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1NodesMutationKey() {
  return ['api', '/api/v1/nodes', 'DELETE'] as const
}

export function getDeleteApiV1NodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.nodes.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.nodes.$delete>) {
      return parseResponse(client.api.v1.nodes.$delete(args, options))
    },
  })
}

export function useDeleteApiV1Nodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.nodes.$delete>,
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
  const mutationDefaults = getDeleteApiV1NodesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1NodesNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.nodes)[':name']['$get']>>,
) {
  return ['api', '/api/v1/nodes/:name', toValue(args)] as const
}

export function getApiV1NodesNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.nodes)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NodesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.nodes[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NodesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.nodes)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NodesNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NodesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NodesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.nodes[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NodesNameMutationKey() {
  return ['api', '/api/v1/nodes/:name', 'PUT'] as const
}

export function getPutApiV1NodesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NodesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$put']>) {
      return parseResponse(client.api.v1.nodes[':name'].$put(args, options))
    },
  })
}

export function usePutApiV1NodesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['$put']>,
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
  const mutationDefaults = getPutApiV1NodesNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1NodesNameMutationKey() {
  return ['api', '/api/v1/nodes/:name', 'DELETE'] as const
}

export function getDeleteApiV1NodesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NodesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$delete']>) {
      return parseResponse(client.api.v1.nodes[':name'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1NodesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1NodesNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1NodesNameMutationKey() {
  return ['api', '/api/v1/nodes/:name', 'PATCH'] as const
}

export function getPatchApiV1NodesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NodesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$patch']>) {
      return parseResponse(client.api.v1.nodes[':name'].$patch(args, options))
    },
  })
}

export function usePatchApiV1NodesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['$patch']>,
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
  const mutationDefaults = getPatchApiV1NodesNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1NodesNameProxyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>,
) {
  return ['api', '/api/v1/nodes/:name/proxy', toValue(args)] as const
}

export function getApiV1NodesNameProxyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NodesNameProxyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.nodes[':name'].proxy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NodesNameProxy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NodesNameProxyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NodesNameProxyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NodesNameProxyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.nodes[':name'].proxy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NodesNameProxyMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'PUT'] as const
}

export function getPutApiV1NodesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NodesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$put']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy.$put(args, options))
    },
  })
}

export function usePutApiV1NodesNameProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$put']>,
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
  const mutationDefaults = getPutApiV1NodesNameProxyMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1NodesNameProxyMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'POST'] as const
}

export function getPostApiV1NodesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NodesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$post']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy.$post(args, options))
    },
  })
}

export function usePostApiV1NodesNameProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$post']>,
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
  const mutationDefaults = getPostApiV1NodesNameProxyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1NodesNameProxyMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'DELETE'] as const
}

export function getDeleteApiV1NodesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NodesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$delete']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy.$delete(args, options))
    },
  })
}

export function useDeleteApiV1NodesNameProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1NodesNameProxyMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsApiV1NodesNameProxyMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'OPTIONS'] as const
}

export function getOptionsApiV1NodesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsApiV1NodesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$options']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy.$options(args, options))
    },
  })
}

export function useOptionsApiV1NodesNameProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$options']>,
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
  const mutationDefaults = getOptionsApiV1NodesNameProxyMutationOptions<TError, TOnMutateResult>(
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

export function getHeadApiV1NodesNameProxyMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'HEAD'] as const
}

export function getHeadApiV1NodesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadApiV1NodesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$head']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy.$head(args, options))
    },
  })
}

export function useHeadApiV1NodesNameProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$head']>,
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
  const mutationDefaults = getHeadApiV1NodesNameProxyMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1NodesNameProxyMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'PATCH'] as const
}

export function getPatchApiV1NodesNameProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NodesNameProxyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$patch']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy.$patch(args, options))
    },
  })
}

export function usePatchApiV1NodesNameProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$patch']>,
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
  const mutationDefaults = getPatchApiV1NodesNameProxyMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1NodesNameProxyPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>
  >,
) {
  return ['api', '/api/v1/nodes/:name/proxy/:path', toValue(args)] as const
}

export function getApiV1NodesNameProxyPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NodesNameProxyPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.nodes[':name'].proxy[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NodesNameProxyPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NodesNameProxyPathQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NodesNameProxyPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NodesNameProxyPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.nodes[':name'].proxy[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NodesNameProxyPathMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'PUT'] as const
}

export function getPutApiV1NodesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NodesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$put']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$put(args, options))
    },
  })
}

export function usePutApiV1NodesNameProxyPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$put']>,
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
  const mutationDefaults = getPutApiV1NodesNameProxyPathMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1NodesNameProxyPathMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'POST'] as const
}

export function getPostApiV1NodesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NodesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$post']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$post(args, options))
    },
  })
}

export function usePostApiV1NodesNameProxyPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$post']>,
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
  const mutationDefaults = getPostApiV1NodesNameProxyPathMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1NodesNameProxyPathMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'DELETE'] as const
}

export function getDeleteApiV1NodesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NodesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$delete']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1NodesNameProxyPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1NodesNameProxyPathMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsApiV1NodesNameProxyPathMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'OPTIONS'] as const
}

export function getOptionsApiV1NodesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsApiV1NodesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$options']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$options(args, options))
    },
  })
}

export function useOptionsApiV1NodesNameProxyPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$options']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$options']>,
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
  const mutationDefaults = getOptionsApiV1NodesNameProxyPathMutationOptions<
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

export function getHeadApiV1NodesNameProxyPathMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'HEAD'] as const
}

export function getHeadApiV1NodesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadApiV1NodesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$head']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$head(args, options))
    },
  })
}

export function useHeadApiV1NodesNameProxyPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$head']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$head']>,
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
  const mutationDefaults = getHeadApiV1NodesNameProxyPathMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1NodesNameProxyPathMutationKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'PATCH'] as const
}

export function getPatchApiV1NodesNameProxyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NodesNameProxyPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$patch']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$patch(args, options))
    },
  })
}

export function usePatchApiV1NodesNameProxyPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$patch']>,
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
  const mutationDefaults = getPatchApiV1NodesNameProxyPathMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1NodesNameStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>,
) {
  return ['api', '/api/v1/nodes/:name/status', toValue(args)] as const
}

export function getApiV1NodesNameStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NodesNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.nodes[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NodesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NodesNameStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NodesNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NodesNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.nodes[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NodesNameStatusMutationKey() {
  return ['api', '/api/v1/nodes/:name/status', 'PUT'] as const
}

export function getPutApiV1NodesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NodesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$put']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].status.$put(args, options))
    },
  })
}

export function usePutApiV1NodesNameStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$put']>,
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
  const mutationDefaults = getPutApiV1NodesNameStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1NodesNameStatusMutationKey() {
  return ['api', '/api/v1/nodes/:name/status', 'PATCH'] as const
}

export function getPatchApiV1NodesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1NodesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$patch']>,
    ) {
      return parseResponse(client.api.v1.nodes[':name'].status.$patch(args, options))
    },
  })
}

export function usePatchApiV1NodesNameStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$patch']>,
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
  const mutationDefaults = getPatchApiV1NodesNameStatusMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PersistentvolumeclaimsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.persistentvolumeclaims.$get>>,
) {
  return ['api', '/api/v1/persistentvolumeclaims', toValue(args)] as const
}

export function getApiV1PersistentvolumeclaimsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.persistentvolumeclaims.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PersistentvolumeclaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.persistentvolumeclaims.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Persistentvolumeclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.persistentvolumeclaims.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1PersistentvolumeclaimsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PersistentvolumeclaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PersistentvolumeclaimsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.persistentvolumeclaims.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PersistentvolumesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.persistentvolumes.$get>>,
) {
  return ['api', '/api/v1/persistentvolumes', toValue(args)] as const
}

export function getApiV1PersistentvolumesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.persistentvolumes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PersistentvolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.persistentvolumes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Persistentvolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.persistentvolumes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PersistentvolumesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PersistentvolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PersistentvolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.persistentvolumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PersistentvolumesMutationKey() {
  return ['api', '/api/v1/persistentvolumes', 'POST'] as const
}

export function getPostApiV1PersistentvolumesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.persistentvolumes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PersistentvolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.persistentvolumes.$post>) {
      return parseResponse(client.api.v1.persistentvolumes.$post(args, options))
    },
  })
}

export function usePostApiV1Persistentvolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.persistentvolumes.$post>,
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
  const mutationDefaults = getPostApiV1PersistentvolumesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1PersistentvolumesMutationKey() {
  return ['api', '/api/v1/persistentvolumes', 'DELETE'] as const
}

export function getDeleteApiV1PersistentvolumesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.persistentvolumes.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1PersistentvolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.persistentvolumes.$delete>) {
      return parseResponse(client.api.v1.persistentvolumes.$delete(args, options))
    },
  })
}

export function useDeleteApiV1Persistentvolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.persistentvolumes.$delete>,
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
  const mutationDefaults = getDeleteApiV1PersistentvolumesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PersistentvolumesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>
  >,
) {
  return ['api', '/api/v1/persistentvolumes/:name', toValue(args)] as const
}

export function getApiV1PersistentvolumesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PersistentvolumesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.persistentvolumes[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PersistentvolumesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PersistentvolumesNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PersistentvolumesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PersistentvolumesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.persistentvolumes[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1PersistentvolumesNameMutationKey() {
  return ['api', '/api/v1/persistentvolumes/:name', 'PUT'] as const
}

export function getPutApiV1PersistentvolumesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PersistentvolumesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$put']>,
    ) {
      return parseResponse(client.api.v1.persistentvolumes[':name'].$put(args, options))
    },
  })
}

export function usePutApiV1PersistentvolumesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$put']>,
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
  const mutationDefaults = getPutApiV1PersistentvolumesNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1PersistentvolumesNameMutationKey() {
  return ['api', '/api/v1/persistentvolumes/:name', 'DELETE'] as const
}

export function getDeleteApiV1PersistentvolumesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1PersistentvolumesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$delete']>,
    ) {
      return parseResponse(client.api.v1.persistentvolumes[':name'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1PersistentvolumesName<
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
                Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1PersistentvolumesNameMutationOptions<
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

export function getPatchApiV1PersistentvolumesNameMutationKey() {
  return ['api', '/api/v1/persistentvolumes/:name', 'PATCH'] as const
}

export function getPatchApiV1PersistentvolumesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1PersistentvolumesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$patch']>,
    ) {
      return parseResponse(client.api.v1.persistentvolumes[':name'].$patch(args, options))
    },
  })
}

export function usePatchApiV1PersistentvolumesName<
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
                Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$patch']>,
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
  const mutationDefaults = getPatchApiV1PersistentvolumesNameMutationOptions<
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

export function getApiV1PersistentvolumesNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>
  >,
) {
  return ['api', '/api/v1/persistentvolumes/:name/status', toValue(args)] as const
}

export function getApiV1PersistentvolumesNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PersistentvolumesNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.persistentvolumes[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PersistentvolumesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>
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
                  ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PersistentvolumesNameStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PersistentvolumesNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PersistentvolumesNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.persistentvolumes[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1PersistentvolumesNameStatusMutationKey() {
  return ['api', '/api/v1/persistentvolumes/:name/status', 'PUT'] as const
}

export function getPutApiV1PersistentvolumesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PersistentvolumesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$put']>,
    ) {
      return parseResponse(client.api.v1.persistentvolumes[':name'].status.$put(args, options))
    },
  })
}

export function usePutApiV1PersistentvolumesNameStatus<
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
                  ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$put']>,
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
  const mutationDefaults = getPutApiV1PersistentvolumesNameStatusMutationOptions<
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

export function getPatchApiV1PersistentvolumesNameStatusMutationKey() {
  return ['api', '/api/v1/persistentvolumes/:name/status', 'PATCH'] as const
}

export function getPatchApiV1PersistentvolumesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1PersistentvolumesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$patch']>,
    ) {
      return parseResponse(client.api.v1.persistentvolumes[':name'].status.$patch(args, options))
    },
  })
}

export function usePatchApiV1PersistentvolumesNameStatus<
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
                  ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$patch']>,
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
  const mutationDefaults = getPatchApiV1PersistentvolumesNameStatusMutationOptions<
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

export function getApiV1PodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.pods.$get>>,
) {
  return ['api', '/api/v1/pods', toValue(args)] as const
}

export function getApiV1PodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.pods.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.pods.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Pods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.pods.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
          >,
          ReturnType<typeof getApiV1PodsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1PodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.pods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PodtemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.podtemplates.$get>>,
) {
  return ['api', '/api/v1/podtemplates', toValue(args)] as const
}

export function getApiV1PodtemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.podtemplates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PodtemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.podtemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Podtemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.podtemplates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PodtemplatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PodtemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PodtemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.podtemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReplicationcontrollersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.replicationcontrollers.$get>>,
) {
  return ['api', '/api/v1/replicationcontrollers', toValue(args)] as const
}

export function getApiV1ReplicationcontrollersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.replicationcontrollers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReplicationcontrollersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.replicationcontrollers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Replicationcontrollers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.replicationcontrollers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReplicationcontrollersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReplicationcontrollersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReplicationcontrollersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.replicationcontrollers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ResourcequotasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.resourcequotas.$get>>,
) {
  return ['api', '/api/v1/resourcequotas', toValue(args)] as const
}

export function getApiV1ResourcequotasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.resourcequotas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ResourcequotasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.resourcequotas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Resourcequotas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.resourcequotas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ResourcequotasQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ResourcequotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ResourcequotasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.resourcequotas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecretsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.secrets.$get>>,
) {
  return ['api', '/api/v1/secrets', toValue(args)] as const
}

export function getApiV1SecretsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.secrets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.secrets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Secrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.secrets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
          >,
          ReturnType<typeof getApiV1SecretsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ServiceaccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.serviceaccounts.$get>>,
) {
  return ['api', '/api/v1/serviceaccounts', toValue(args)] as const
}

export function getApiV1ServiceaccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.serviceaccounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ServiceaccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.serviceaccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Serviceaccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.serviceaccounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ServiceaccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServiceaccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ServiceaccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.serviceaccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.services.$get>>,
) {
  return ['api', '/api/v1/services', toValue(args)] as const
}

export function getApiV1ServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Services<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ServicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchConfigmapsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.configmaps.$get>>,
) {
  return ['api', '/api/v1/watch/configmaps', toValue(args)] as const
}

export function getApiV1WatchConfigmapsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.configmaps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchConfigmapsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.configmaps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchConfigmaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.configmaps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WatchConfigmapsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchConfigmapsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchConfigmapsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.configmaps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchEndpointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.endpoints.$get>>,
) {
  return ['api', '/api/v1/watch/endpoints', toValue(args)] as const
}

export function getApiV1WatchEndpointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.endpoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.endpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.endpoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WatchEndpointsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.endpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.events.$get>>,
) {
  return ['api', '/api/v1/watch/events', toValue(args)] as const
}

export function getApiV1WatchEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WatchEventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchLimitrangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.limitranges.$get>>,
) {
  return ['api', '/api/v1/watch/limitranges', toValue(args)] as const
}

export function getApiV1WatchLimitrangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.limitranges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchLimitrangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.limitranges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchLimitranges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.limitranges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WatchLimitrangesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchLimitrangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchLimitrangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.limitranges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.namespaces.$get>>,
) {
  return ['api', '/api/v1/watch/namespaces', toValue(args)] as const
}

export function getApiV1WatchNamespacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.namespaces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.namespaces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceConfigmapsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']>
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/configmaps', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceConfigmapsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceConfigmapsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].configmaps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceConfigmaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']>
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceConfigmapsQueryKey>
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
            ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceConfigmapsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceConfigmapsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].configmaps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceConfigmapsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/configmaps/:name', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceConfigmapsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceConfigmapsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].configmaps[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceConfigmapsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceConfigmapsNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceConfigmapsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceConfigmapsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].configmaps[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceEndpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']>
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/endpoints', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceEndpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].endpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']>
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceEndpointsQueryKey>
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
            ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].endpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceEndpointsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/endpoints/:name', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceEndpointsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceEndpointsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].endpoints[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceEndpointsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceEndpointsNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceEndpointsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceEndpointsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].endpoints[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/events', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceEventsQueryKey>
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
            ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceEventsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/events/:name', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceEventsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceEventsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].events[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceEventsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceEventsNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceEventsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceEventsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].events[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceLimitrangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']>
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/limitranges', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceLimitrangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceLimitrangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].limitranges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceLimitranges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']>
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceLimitrangesQueryKey>
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
            ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceLimitrangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceLimitrangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].limitranges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceLimitrangesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/limitranges/:name', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceLimitrangesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceLimitrangesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].limitranges[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceLimitrangesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceLimitrangesNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceLimitrangesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceLimitrangesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].limitranges[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/watch/namespaces/:namespace/persistentvolumeclaims',
    toValue(args),
  ] as const
}

export function getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespacePersistentvolumeclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/watch/namespaces/:namespace/persistentvolumeclaims/:name',
    toValue(args),
  ] as const
}

export function getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespacePersistentvolumeclaimsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePodsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/pods', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespacePodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespacePodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].pods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespacePods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>
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
                  ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespacePodsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespacePodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespacePodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].pods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePodsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']>
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/pods/:name', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespacePodsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespacePodsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].pods[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespacePodsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']>
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespacePodsNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespacePodsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespacePodsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].pods[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePodtemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']>
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/podtemplates', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespacePodtemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespacePodtemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].podtemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespacePodtemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']>
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespacePodtemplatesQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespacePodtemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespacePodtemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].podtemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePodtemplatesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/podtemplates/:name', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespacePodtemplatesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespacePodtemplatesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].podtemplates[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespacePodtemplatesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespacePodtemplatesNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespacePodtemplatesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespacePodtemplatesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].podtemplates[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/watch/namespaces/:namespace/replicationcontrollers',
    toValue(args),
  ] as const
}

export function getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].replicationcontrollers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceReplicationcontrollers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].replicationcontrollers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/watch/namespaces/:namespace/replicationcontrollers/:name',
    toValue(args),
  ] as const
}

export function getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].replicationcontrollers[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceReplicationcontrollersName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].replicationcontrollers[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceResourcequotasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
    >
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/resourcequotas', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceResourcequotasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceResourcequotasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].resourcequotas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceResourcequotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceResourcequotasQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceResourcequotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceResourcequotasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].resourcequotas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceResourcequotasNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/resourcequotas/:name', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceResourcequotasNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceResourcequotasNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].resourcequotas[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceResourcequotasName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceResourcequotasNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceResourcequotasNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceResourcequotasNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].resourcequotas[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceSecretsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/secrets', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceSecretsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].secrets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceSecretsQueryKey>
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
            ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceSecretsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/secrets/:name', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceSecretsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceSecretsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].secrets[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceSecretsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceSecretsNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceSecretsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceSecretsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].secrets[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceServiceaccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
    >
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/serviceaccounts', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceServiceaccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceServiceaccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].serviceaccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceServiceaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceServiceaccountsQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceServiceaccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceServiceaccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].serviceaccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/watch/namespaces/:namespace/serviceaccounts/:name',
    toValue(args),
  ] as const
}

export function getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].serviceaccounts[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceServiceaccountsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].serviceaccounts[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/services', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceServicesQueryKey>
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
            ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceServicesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
    >
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/services/:name', toValue(args)] as const
}

export function getApiV1WatchNamespacesNamespaceServicesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNamespaceServicesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].services[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesNamespaceServicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
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
                    (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNamespaceServicesNameQueryKey>
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
              (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNamespaceServicesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNamespaceServicesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':namespace'].services[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:name', toValue(args)] as const
}

export function getApiV1WatchNamespacesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNamespacesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.namespaces[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNamespacesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNamespacesNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNamespacesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.namespaces[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.nodes.$get>>,
) {
  return ['api', '/api/v1/watch/nodes', toValue(args)] as const
}

export function getApiV1WatchNodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.nodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.nodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WatchNodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchNodesNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>,
) {
  return ['api', '/api/v1/watch/nodes/:name', toValue(args)] as const
}

export function getApiV1WatchNodesNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchNodesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.nodes[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchNodesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1WatchNodesNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNodesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchNodesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.nodes[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchPersistentvolumeclaimsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>,
) {
  return ['api', '/api/v1/watch/persistentvolumeclaims', toValue(args)] as const
}

export function getApiV1WatchPersistentvolumeclaimsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchPersistentvolumeclaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.persistentvolumeclaims.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchPersistentvolumeclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1WatchPersistentvolumeclaimsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchPersistentvolumeclaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchPersistentvolumeclaimsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.persistentvolumeclaims.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchPersistentvolumesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.persistentvolumes.$get>>,
) {
  return ['api', '/api/v1/watch/persistentvolumes', toValue(args)] as const
}

export function getApiV1WatchPersistentvolumesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.persistentvolumes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchPersistentvolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.persistentvolumes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchPersistentvolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.persistentvolumes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1WatchPersistentvolumesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchPersistentvolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchPersistentvolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.persistentvolumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchPersistentvolumesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>
  >,
) {
  return ['api', '/api/v1/watch/persistentvolumes/:name', toValue(args)] as const
}

export function getApiV1WatchPersistentvolumesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchPersistentvolumesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.persistentvolumes[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchPersistentvolumesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1WatchPersistentvolumesNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchPersistentvolumesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchPersistentvolumesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.persistentvolumes[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchPodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.pods.$get>>,
) {
  return ['api', '/api/v1/watch/pods', toValue(args)] as const
}

export function getApiV1WatchPodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.pods.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchPodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.pods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchPods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.pods.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WatchPodsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchPodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchPodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.pods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchPodtemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.podtemplates.$get>>,
) {
  return ['api', '/api/v1/watch/podtemplates', toValue(args)] as const
}

export function getApiV1WatchPodtemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.podtemplates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchPodtemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.podtemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchPodtemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.podtemplates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1WatchPodtemplatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchPodtemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchPodtemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.podtemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchReplicationcontrollersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.replicationcontrollers.$get>>,
) {
  return ['api', '/api/v1/watch/replicationcontrollers', toValue(args)] as const
}

export function getApiV1WatchReplicationcontrollersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.replicationcontrollers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchReplicationcontrollersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.replicationcontrollers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchReplicationcontrollers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.watch.replicationcontrollers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.replicationcontrollers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.replicationcontrollers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.replicationcontrollers.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1WatchReplicationcontrollersQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.watch.replicationcontrollers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchReplicationcontrollersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchReplicationcontrollersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.replicationcontrollers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchResourcequotasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.resourcequotas.$get>>,
) {
  return ['api', '/api/v1/watch/resourcequotas', toValue(args)] as const
}

export function getApiV1WatchResourcequotasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.resourcequotas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchResourcequotasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.resourcequotas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchResourcequotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.resourcequotas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1WatchResourcequotasQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchResourcequotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchResourcequotasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.resourcequotas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchSecretsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.secrets.$get>>,
) {
  return ['api', '/api/v1/watch/secrets', toValue(args)] as const
}

export function getApiV1WatchSecretsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.secrets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.secrets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.secrets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WatchSecretsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchServiceaccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.serviceaccounts.$get>>,
) {
  return ['api', '/api/v1/watch/serviceaccounts', toValue(args)] as const
}

export function getApiV1WatchServiceaccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.serviceaccounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchServiceaccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.serviceaccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchServiceaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.serviceaccounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1WatchServiceaccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchServiceaccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchServiceaccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.serviceaccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.services.$get>>,
) {
  return ['api', '/api/v1/watch/services', toValue(args)] as const
}

export function getApiV1WatchServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watch.services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.watch.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WatchServicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watch.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
