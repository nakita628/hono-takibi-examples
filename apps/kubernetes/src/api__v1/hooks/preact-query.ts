import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1IndexQueryKey() {
  return ['api', '/api/v1/'] as const
}

export function getApiV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexQueryKey>
  >({
    queryKey: getApiV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ComponentstatusesQueryKey(
  args: InferRequestType<typeof client.api.v1.componentstatuses.$get>,
) {
  return ['api', '/api/v1/componentstatuses', args] as const
}

export function getApiV1ComponentstatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.componentstatuses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ComponentstatusesQueryKey>
  >({
    queryKey: getApiV1ComponentstatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.componentstatuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1Componentstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.componentstatuses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ComponentstatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1ComponentstatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1Componentstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.componentstatuses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ComponentstatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1ComponentstatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ComponentstatusesNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.componentstatuses)[':name']['$get']>,
) {
  return ['api', '/api/v1/componentstatuses/:name', args] as const
}

export function getApiV1ComponentstatusesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.componentstatuses)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.componentstatuses)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ComponentstatusesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.componentstatuses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.componentstatuses)[':name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1ComponentstatusesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1ComponentstatusesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ComponentstatusesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.componentstatuses)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.componentstatuses)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1ComponentstatusesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ConfigmapsQueryKey(
  args: InferRequestType<typeof client.api.v1.configmaps.$get>,
) {
  return ['api', '/api/v1/configmaps', args] as const
}

export function getApiV1ConfigmapsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.configmaps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigmapsQueryKey>
  >({
    queryKey: getApiV1ConfigmapsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.configmaps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Configmaps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.configmaps.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ConfigmapsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ConfigmapsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Configmaps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.configmaps.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ConfigmapsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ConfigmapsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1EndpointsQueryKey(
  args: InferRequestType<typeof client.api.v1.endpoints.$get>,
) {
  return ['api', '/api/v1/endpoints', args] as const
}

export function getApiV1EndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.endpoints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EndpointsQueryKey>
  >({
    queryKey: getApiV1EndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.endpoints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Endpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.endpoints.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1EndpointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Endpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.endpoints.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1EndpointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1EventsQueryKey(args: InferRequestType<typeof client.api.v1.events.$get>) {
  return ['api', '/api/v1/events', args] as const
}

export function getApiV1EventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EventsQueryKey>
  >({
    queryKey: getApiV1EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1EventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1EventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1LimitrangesQueryKey(
  args: InferRequestType<typeof client.api.v1.limitranges.$get>,
) {
  return ['api', '/api/v1/limitranges', args] as const
}

export function getApiV1LimitrangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.limitranges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LimitrangesQueryKey>
  >({
    queryKey: getApiV1LimitrangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.limitranges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Limitranges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.limitranges.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LimitrangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1LimitrangesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Limitranges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.limitranges.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LimitrangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1LimitrangesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1NamespacesQueryKey(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
) {
  return ['api', '/api/v1/namespaces', args] as const
}

export function getApiV1NamespacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.namespaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesQueryKey>
  >({
    queryKey: getApiV1NamespacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Namespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1NamespacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Namespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1NamespacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/configmaps', args] as const
}

export function getApiV1NamespacesNamespaceConfigmapsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceConfigmapsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].configmaps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceConfigmapsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceConfigmapsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceConfigmaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1NamespacesNamespaceConfigmapsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceConfigmapsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/configmaps/:name', args] as const
}

export function getApiV1NamespacesNamespaceConfigmapsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceConfigmapsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].configmaps[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceConfigmapsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceConfigmapsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceConfigmapsName<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceConfigmapsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/endpoints', args] as const
}

export function getApiV1NamespacesNamespaceEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].endpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1NamespacesNamespaceEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/endpoints/:name', args] as const
}

export function getApiV1NamespacesNamespaceEndpointsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceEndpointsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].endpoints[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceEndpointsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceEndpointsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceEndpointsName<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceEndpointsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/events', args] as const
}

export function getApiV1NamespacesNamespaceEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/events/:name', args] as const
}

export function getApiV1NamespacesNamespaceEventsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceEventsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].events[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceEventsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceEventsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceEventsName<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1NamespacesNamespaceEventsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceEventsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/limitranges', args] as const
}

export function getApiV1NamespacesNamespaceLimitrangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceLimitrangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].limitranges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceLimitrangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceLimitrangesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceLimitranges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceLimitrangesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
        InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$delete']>,
        TOnMutateResult
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/limitranges/:name', args] as const
}

export function getApiV1NamespacesNamespaceLimitrangesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceLimitrangesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].limitranges[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceLimitrangesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceLimitrangesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceLimitrangesName<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceLimitrangesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims', args] as const
}

export function getApiV1NamespacesNamespacePersistentvolumeclaimsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePersistentvolumeclaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePersistentvolumeclaimsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePersistentvolumeclaimsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePersistentvolumeclaims<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePersistentvolumeclaimsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', args] as const
}

export function getApiV1NamespacesNamespacePersistentvolumeclaimsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePersistentvolumeclaimsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePersistentvolumeclaimsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePersistentvolumeclaimsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePersistentvolumeclaimsName<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePersistentvolumeclaimsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', args] as const
}

export function getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePersistentvolumeclaimsNameStatus<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods', args] as const
}

export function getApiV1NamespacesNamespacePodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name', args] as const
}

export function getApiV1NamespacesNamespacePodsNameQueryOptions<
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodsName<
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/attach', args] as const
}

export function getApiV1NamespacesNamespacePodsNameAttachQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsNameAttachQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].attach.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodsNameAttachQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameAttachQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodsNameAttach<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameAttachQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/dynamic', args] as const
}

export function getApiV1NamespacesNamespacePodsNameDynamicQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsNameDynamicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodsNameDynamicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameDynamicQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodsNameDynamic<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameDynamicQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', args] as const
}

export function getApiV1NamespacesNamespacePodsNameEphemeralcontainersQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsNameEphemeralcontainersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodsNameEphemeralcontainersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameEphemeralcontainersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodsNameEphemeralcontainers<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameEphemeralcontainersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/exec', args] as const
}

export function getApiV1NamespacesNamespacePodsNameExecQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsNameExecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].exec.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodsNameExecQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameExecQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodsNameExec<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameExecQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/log', args] as const
}

export function getApiV1NamespacesNamespacePodsNameLogQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsNameLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].log.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodsNameLogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameLogQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodsNameLog<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameLogQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1NamespacesNamespacePodsNamePortforwardQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/portforward', args] as const
}

export function getApiV1NamespacesNamespacePodsNamePortforwardQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsNamePortforwardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].portforward.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodsNamePortforwardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsNamePortforwardQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodsNamePortforward<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsNamePortforwardQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', args] as const
}

export function getApiV1NamespacesNamespacePodsNameProxyQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsNameProxyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodsNameProxyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameProxyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodsNameProxy<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameProxyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', args] as const
}

export function getApiV1NamespacesNamespacePodsNameProxyPathQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsNameProxyPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodsNameProxyPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameProxyPathQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodsNameProxyPath<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameProxyPathQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/resize', args] as const
}

export function getApiV1NamespacesNamespacePodsNameResizeQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsNameResizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].resize.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodsNameResizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameResizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodsNameResize<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameResizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/status', args] as const
}

export function getApiV1NamespacesNamespacePodsNameStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].pods[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodsNameStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodsNameStatus<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodsNameStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates', args] as const
}

export function getApiV1NamespacesNamespacePodtemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodtemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].podtemplates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodtemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodtemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodtemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates/:name', args] as const
}

export function getApiV1NamespacesNamespacePodtemplatesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespacePodtemplatesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].podtemplates[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespacePodtemplatesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespacePodtemplatesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespacePodtemplatesName<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespacePodtemplatesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers', args] as const
}

export function getApiV1NamespacesNamespaceReplicationcontrollersQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceReplicationcontrollersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceReplicationcontrollersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceReplicationcontrollers<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceReplicationcontrollersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name', args] as const
}

export function getApiV1NamespacesNamespaceReplicationcontrollersNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceReplicationcontrollersNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceReplicationcontrollersNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceReplicationcontrollersName<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceReplicationcontrollersNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', args] as const
}

export function getApiV1NamespacesNamespaceReplicationcontrollersNameScaleQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceReplicationcontrollersNameScaleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersNameScaleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceReplicationcontrollersNameScaleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceReplicationcontrollersNameScale<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceReplicationcontrollersNameScaleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', args] as const
}

export function getApiV1NamespacesNamespaceReplicationcontrollersNameStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceReplicationcontrollersNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceReplicationcontrollersNameStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceReplicationcontrollersNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceReplicationcontrollersNameStatus<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceReplicationcontrollersNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas', args] as const
}

export function getApiV1NamespacesNamespaceResourcequotasQueryOptions<
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceResourcequotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceResourcequotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceResourcequotasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceResourcequotas<
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1NamespacesNamespaceResourcequotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceResourcequotasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name', args] as const
}

export function getApiV1NamespacesNamespaceResourcequotasNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceResourcequotasNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceResourcequotasNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceResourcequotasNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceResourcequotasName<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceResourcequotasNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name/status', args] as const
}

export function getApiV1NamespacesNamespaceResourcequotasNameStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceResourcequotasNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceResourcequotasNameStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceResourcequotasNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceResourcequotasNameStatus<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceResourcequotasNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/secrets', args] as const
}

export function getApiV1NamespacesNamespaceSecretsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].secrets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceSecretsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1NamespacesNamespaceSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceSecretsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/secrets/:name', args] as const
}

export function getApiV1NamespacesNamespaceSecretsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceSecretsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].secrets[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceSecretsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceSecretsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceSecretsName<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1NamespacesNamespaceSecretsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceSecretsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts', args] as const
}

export function getApiV1NamespacesNamespaceServiceaccountsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceServiceaccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].serviceaccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceServiceaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceServiceaccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceServiceaccounts<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1NamespacesNamespaceServiceaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceServiceaccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts/:name', args] as const
}

export function getApiV1NamespacesNamespaceServiceaccountsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceServiceaccountsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceServiceaccountsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceServiceaccountsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceServiceaccountsName<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceServiceaccountsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/services', args] as const
}

export function getApiV1NamespacesNamespaceServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceServicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1NamespacesNamespaceServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceServicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name', args] as const
}

export function getApiV1NamespacesNamespaceServicesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceServicesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceServicesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceServicesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceServicesName<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1NamespacesNamespaceServicesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceServicesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', args] as const
}

export function getApiV1NamespacesNamespaceServicesNameProxyQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceServicesNameProxyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceServicesNameProxyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceServicesNameProxyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceServicesNameProxy<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceServicesNameProxyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', args] as const
}

export function getApiV1NamespacesNamespaceServicesNameProxyPathQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceServicesNameProxyPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceServicesNameProxyPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceServicesNameProxyPathQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceServicesNameProxyPath<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceServicesNameProxyPathQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/status', args] as const
}

export function getApiV1NamespacesNamespaceServicesNameStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNamespaceServicesNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].services[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNamespaceServicesNameStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNamespaceServicesNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNamespaceServicesNameStatus<
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
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNamespaceServicesNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:name', args] as const
}

export function getApiV1NamespacesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1NamespacesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1NamespacesNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1NamespacesNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:name/status', args] as const
}

export function getApiV1NamespacesNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NamespacesNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NamespacesNameStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NamespacesNameStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NamespacesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NamespacesNameStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getApiV1NodesQueryKey(args: InferRequestType<typeof client.api.v1.nodes.$get>) {
  return ['api', '/api/v1/nodes', args] as const
}

export function getApiV1NodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1NodesQueryKey>
  >({
    queryKey: getApiV1NodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.nodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1NodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.nodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1NodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.nodes.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.nodes.$delete>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$get']>,
) {
  return ['api', '/api/v1/nodes/:name', args] as const
}

export function getApiV1NodesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NodesNameQueryKey>
  >({
    queryKey: getApiV1NodesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.nodes[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1NodesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NodesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1NodesNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1NodesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NodesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1NodesNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.nodes)[':name']['$put']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>,
) {
  return ['api', '/api/v1/nodes/:name/proxy', args] as const
}

export function getApiV1NodesNameProxyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NodesNameProxyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.nodes[':name'].proxy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NodesNameProxyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1NodesNameProxyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1NodesNameProxy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1NodesNameProxyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>,
) {
  return ['api', '/api/v1/nodes/:name/proxy/:path', args] as const
}

export function getApiV1NodesNameProxyPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NodesNameProxyPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.nodes[':name'].proxy[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NodesNameProxyPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1NodesNameProxyPathQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1NodesNameProxyPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1NodesNameProxyPathQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
      UseMutationOptions<
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$get']>,
) {
  return ['api', '/api/v1/nodes/:name/status', args] as const
}

export function getApiV1NodesNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NodesNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.nodes[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1NodesNameStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1NodesNameStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1NodesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1NodesNameStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.api.v1.persistentvolumeclaims.$get>,
) {
  return ['api', '/api/v1/persistentvolumeclaims', args] as const
}

export function getApiV1PersistentvolumeclaimsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.persistentvolumeclaims.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PersistentvolumeclaimsQueryKey>
  >({
    queryKey: getApiV1PersistentvolumeclaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.persistentvolumeclaims.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1Persistentvolumeclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.persistentvolumeclaims.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1PersistentvolumeclaimsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1PersistentvolumeclaimsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1Persistentvolumeclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.persistentvolumeclaims.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PersistentvolumeclaimsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1PersistentvolumeclaimsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1PersistentvolumesQueryKey(
  args: InferRequestType<typeof client.api.v1.persistentvolumes.$get>,
) {
  return ['api', '/api/v1/persistentvolumes', args] as const
}

export function getApiV1PersistentvolumesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.persistentvolumes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PersistentvolumesQueryKey>
  >({
    queryKey: getApiV1PersistentvolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.persistentvolumes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1Persistentvolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.persistentvolumes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PersistentvolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1PersistentvolumesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1Persistentvolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.persistentvolumes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PersistentvolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1PersistentvolumesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.persistentvolumes.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>,
) {
  return ['api', '/api/v1/persistentvolumes/:name', args] as const
}

export function getApiV1PersistentvolumesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1PersistentvolumesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.persistentvolumes[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1PersistentvolumesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1PersistentvolumesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1PersistentvolumesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1PersistentvolumesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>,
) {
  return ['api', '/api/v1/persistentvolumes/:name/status', args] as const
}

export function getApiV1PersistentvolumesNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1PersistentvolumesNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.persistentvolumes[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1PersistentvolumesNameStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1PersistentvolumesNameStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1PersistentvolumesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1PersistentvolumesNameStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1PersistentvolumesNameStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getApiV1PodsQueryKey(args: InferRequestType<typeof client.api.v1.pods.$get>) {
  return ['api', '/api/v1/pods', args] as const
}

export function getApiV1PodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.pods.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1PodsQueryKey>
  >({
    queryKey: getApiV1PodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.pods.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Pods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.pods.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1PodsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Pods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.pods.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1PodsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1PodtemplatesQueryKey(
  args: InferRequestType<typeof client.api.v1.podtemplates.$get>,
) {
  return ['api', '/api/v1/podtemplates', args] as const
}

export function getApiV1PodtemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.podtemplates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PodtemplatesQueryKey>
  >({
    queryKey: getApiV1PodtemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.podtemplates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Podtemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.podtemplates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PodtemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1PodtemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Podtemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.podtemplates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PodtemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1PodtemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ReplicationcontrollersQueryKey(
  args: InferRequestType<typeof client.api.v1.replicationcontrollers.$get>,
) {
  return ['api', '/api/v1/replicationcontrollers', args] as const
}

export function getApiV1ReplicationcontrollersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.replicationcontrollers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReplicationcontrollersQueryKey>
  >({
    queryKey: getApiV1ReplicationcontrollersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.replicationcontrollers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1Replicationcontrollers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.replicationcontrollers.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1ReplicationcontrollersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1ReplicationcontrollersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1Replicationcontrollers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.replicationcontrollers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReplicationcontrollersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1ReplicationcontrollersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ResourcequotasQueryKey(
  args: InferRequestType<typeof client.api.v1.resourcequotas.$get>,
) {
  return ['api', '/api/v1/resourcequotas', args] as const
}

export function getApiV1ResourcequotasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.resourcequotas.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ResourcequotasQueryKey>
  >({
    queryKey: getApiV1ResourcequotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.resourcequotas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Resourcequotas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.resourcequotas.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ResourcequotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ResourcequotasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Resourcequotas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.resourcequotas.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ResourcequotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ResourcequotasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1SecretsQueryKey(args: InferRequestType<typeof client.api.v1.secrets.$get>) {
  return ['api', '/api/v1/secrets', args] as const
}

export function getApiV1SecretsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.secrets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecretsQueryKey>
  >({
    queryKey: getApiV1SecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.secrets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Secrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.secrets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1SecretsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Secrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.secrets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1SecretsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ServiceaccountsQueryKey(
  args: InferRequestType<typeof client.api.v1.serviceaccounts.$get>,
) {
  return ['api', '/api/v1/serviceaccounts', args] as const
}

export function getApiV1ServiceaccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.serviceaccounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServiceaccountsQueryKey>
  >({
    queryKey: getApiV1ServiceaccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.serviceaccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1Serviceaccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.serviceaccounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ServiceaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ServiceaccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Serviceaccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.serviceaccounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ServiceaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ServiceaccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ServicesQueryKey(
  args: InferRequestType<typeof client.api.v1.services.$get>,
) {
  return ['api', '/api/v1/services', args] as const
}

export function getApiV1ServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServicesQueryKey>
  >({
    queryKey: getApiV1ServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Services<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.services.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Services<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.services.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1WatchConfigmapsQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.configmaps.$get>,
) {
  return ['api', '/api/v1/watch/configmaps', args] as const
}

export function getApiV1WatchConfigmapsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.configmaps.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchConfigmapsQueryKey>
  >({
    queryKey: getApiV1WatchConfigmapsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.configmaps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1WatchConfigmaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.configmaps.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchConfigmapsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1WatchConfigmapsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1WatchConfigmaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.configmaps.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchConfigmapsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1WatchConfigmapsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1WatchEndpointsQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.endpoints.$get>,
) {
  return ['api', '/api/v1/watch/endpoints', args] as const
}

export function getApiV1WatchEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchEndpointsQueryKey>
  >({
    queryKey: getApiV1WatchEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.endpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1WatchEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.endpoints.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1WatchEndpointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1WatchEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.endpoints.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1WatchEndpointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1WatchEventsQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.events.$get>,
) {
  return ['api', '/api/v1/watch/events', args] as const
}

export function getApiV1WatchEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.watch.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchEventsQueryKey>
  >({
    queryKey: getApiV1WatchEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1WatchEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1WatchEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1WatchEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1WatchEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1WatchLimitrangesQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.limitranges.$get>,
) {
  return ['api', '/api/v1/watch/limitranges', args] as const
}

export function getApiV1WatchLimitrangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.limitranges.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchLimitrangesQueryKey>
  >({
    queryKey: getApiV1WatchLimitrangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.limitranges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1WatchLimitranges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.limitranges.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchLimitrangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchLimitrangesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchLimitranges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.limitranges.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchLimitrangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchLimitrangesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.namespaces.$get>,
) {
  return ['api', '/api/v1/watch/namespaces', args] as const
}

export function getApiV1WatchNamespacesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.namespaces.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNamespacesQueryKey>
  >({
    queryKey: getApiV1WatchNamespacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1WatchNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.namespaces.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchNamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1WatchNamespacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.namespaces.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchNamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1WatchNamespacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceConfigmapsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/configmaps', args] as const
}

export function getApiV1WatchNamespacesNamespaceConfigmapsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceConfigmapsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].configmaps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceConfigmapsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceConfigmapsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceConfigmaps<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceConfigmapsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceConfigmapsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceConfigmapsNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/configmaps/:name', args] as const
}

export function getApiV1WatchNamespacesNamespaceConfigmapsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceConfigmapsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].configmaps[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceConfigmapsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceConfigmapsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceConfigmapsName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceConfigmapsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceEndpointsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/endpoints', args] as const
}

export function getApiV1WatchNamespacesNamespaceEndpointsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].endpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceEndpoints<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceEndpointsNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/endpoints/:name', args] as const
}

export function getApiV1WatchNamespacesNamespaceEndpointsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceEndpointsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].endpoints[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceEndpointsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceEndpointsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceEndpointsName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceEndpointsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceEventsQueryKey(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/events', args] as const
}

export function getApiV1WatchNamespacesNamespaceEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceEventsNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/events/:name', args] as const
}

export function getApiV1WatchNamespacesNamespaceEventsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceEventsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].events[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceEventsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceEventsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceEventsName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceEventsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceLimitrangesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/limitranges', args] as const
}

export function getApiV1WatchNamespacesNamespaceLimitrangesQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceLimitrangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].limitranges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceLimitrangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceLimitrangesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceLimitranges<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceLimitrangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceLimitrangesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceLimitrangesNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/limitranges/:name', args] as const
}

export function getApiV1WatchNamespacesNamespaceLimitrangesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceLimitrangesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].limitranges[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceLimitrangesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceLimitrangesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceLimitrangesName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceLimitrangesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/persistentvolumeclaims', args] as const
}

export function getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespacePersistentvolumeclaims<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespacePersistentvolumeclaimsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/persistentvolumeclaims/:name', args] as const
}

export function getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespacePersistentvolumeclaimsName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePodsQueryKey(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/pods', args] as const
}

export function getApiV1WatchNamespacesNamespacePodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespacePodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].pods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespacePodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespacePodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespacePods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespacePodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespacePodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePodsNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/pods/:name', args] as const
}

export function getApiV1WatchNamespacesNamespacePodsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespacePodsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].pods[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespacePodsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespacePodsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespacePodsName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespacePodsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePodtemplatesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/podtemplates', args] as const
}

export function getApiV1WatchNamespacesNamespacePodtemplatesQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespacePodtemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].podtemplates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespacePodtemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespacePodtemplatesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespacePodtemplates<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespacePodtemplatesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespacePodtemplatesNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/podtemplates/:name', args] as const
}

export function getApiV1WatchNamespacesNamespacePodtemplatesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespacePodtemplatesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].podtemplates[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespacePodtemplatesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespacePodtemplatesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespacePodtemplatesName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespacePodtemplatesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/replicationcontrollers', args] as const
}

export function getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].replicationcontrollers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceReplicationcontrollers<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceReplicationcontrollersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/replicationcontrollers/:name', args] as const
}

export function getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].replicationcontrollers[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceReplicationcontrollersName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceReplicationcontrollersNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceResourcequotasQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/resourcequotas', args] as const
}

export function getApiV1WatchNamespacesNamespaceResourcequotasQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceResourcequotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].resourcequotas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceResourcequotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceResourcequotasQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceResourcequotas<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceResourcequotasQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceResourcequotasNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/resourcequotas/:name', args] as const
}

export function getApiV1WatchNamespacesNamespaceResourcequotasNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceResourcequotasNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].resourcequotas[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceResourcequotasNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceResourcequotasNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceResourcequotasName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceResourcequotasNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceSecretsQueryKey(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/secrets', args] as const
}

export function getApiV1WatchNamespacesNamespaceSecretsQueryOptions<
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
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].secrets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceSecretsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceSecrets<
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
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceSecretsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceSecretsNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/secrets/:name', args] as const
}

export function getApiV1WatchNamespacesNamespaceSecretsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceSecretsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].secrets[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceSecretsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceSecretsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceSecretsName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceSecretsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceServiceaccountsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/serviceaccounts', args] as const
}

export function getApiV1WatchNamespacesNamespaceServiceaccountsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceServiceaccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].serviceaccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceServiceaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceServiceaccountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceServiceaccounts<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceServiceaccountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/serviceaccounts/:name', args] as const
}

export function getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].serviceaccounts[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceServiceaccountsName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceServiceaccountsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceServicesQueryKey(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/services', args] as const
}

export function getApiV1WatchNamespacesNamespaceServicesQueryOptions<
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
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceServicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceServices<
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
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceServicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNamespaceServicesNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/services/:name', args] as const
}

export function getApiV1WatchNamespacesNamespaceServicesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNamespaceServicesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':namespace'].services[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNamespaceServicesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNamespaceServicesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesNamespaceServicesName<
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
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNamespaceServicesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNamespacesNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>,
) {
  return ['api', '/api/v1/watch/namespaces/:name', args] as const
}

export function getApiV1WatchNamespacesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNamespacesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.namespaces[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNamespacesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchNamespacesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNamespacesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchNamespacesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchNodesQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.nodes.$get>,
) {
  return ['api', '/api/v1/watch/nodes', args] as const
}

export function getApiV1WatchNodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.watch.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchNodesQueryKey>
  >({
    queryKey: getApiV1WatchNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1WatchNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.nodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1WatchNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.nodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1WatchNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1WatchNodesNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.watch.nodes)[':name']['$get']>,
) {
  return ['api', '/api/v1/watch/nodes/:name', args] as const
}

export function getApiV1WatchNodesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watch.nodes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchNodesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.nodes[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1WatchNodesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watch.nodes)[':name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchNodesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1WatchNodesNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1WatchNodesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watch.nodes)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1WatchNodesNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1WatchPersistentvolumeclaimsQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumeclaims.$get>,
) {
  return ['api', '/api/v1/watch/persistentvolumeclaims', args] as const
}

export function getApiV1WatchPersistentvolumeclaimsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumeclaims.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchPersistentvolumeclaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.persistentvolumeclaims.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumeclaims.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchPersistentvolumeclaimsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchPersistentvolumeclaimsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchPersistentvolumeclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumeclaims.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchPersistentvolumeclaimsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchPersistentvolumesQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumes.$get>,
) {
  return ['api', '/api/v1/watch/persistentvolumes', args] as const
}

export function getApiV1WatchPersistentvolumesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchPersistentvolumesQueryKey>
  >({
    queryKey: getApiV1WatchPersistentvolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.persistentvolumes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1WatchPersistentvolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumes.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchPersistentvolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchPersistentvolumesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchPersistentvolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchPersistentvolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchPersistentvolumesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchPersistentvolumesNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>,
) {
  return ['api', '/api/v1/watch/persistentvolumes/:name', args] as const
}

export function getApiV1WatchPersistentvolumesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchPersistentvolumesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.persistentvolumes[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchPersistentvolumesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchPersistentvolumesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchPersistentvolumesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchPersistentvolumesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchPodsQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.pods.$get>,
) {
  return ['api', '/api/v1/watch/pods', args] as const
}

export function getApiV1WatchPodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.watch.pods.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchPodsQueryKey>
  >({
    queryKey: getApiV1WatchPodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.pods.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1WatchPods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.pods.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchPodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1WatchPodsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1WatchPods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.pods.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchPodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1WatchPodsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1WatchPodtemplatesQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.podtemplates.$get>,
) {
  return ['api', '/api/v1/watch/podtemplates', args] as const
}

export function getApiV1WatchPodtemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.podtemplates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchPodtemplatesQueryKey>
  >({
    queryKey: getApiV1WatchPodtemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.podtemplates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1WatchPodtemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.podtemplates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchPodtemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchPodtemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchPodtemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.podtemplates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchPodtemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchPodtemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchReplicationcontrollersQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.replicationcontrollers.$get>,
) {
  return ['api', '/api/v1/watch/replicationcontrollers', args] as const
}

export function getApiV1WatchReplicationcontrollersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.watch.replicationcontrollers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.replicationcontrollers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchReplicationcontrollersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.replicationcontrollers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<typeof client.api.v1.watch.replicationcontrollers.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchReplicationcontrollersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchReplicationcontrollersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchReplicationcontrollers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.watch.replicationcontrollers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.replicationcontrollers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchReplicationcontrollersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchResourcequotasQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.resourcequotas.$get>,
) {
  return ['api', '/api/v1/watch/resourcequotas', args] as const
}

export function getApiV1WatchResourcequotasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.resourcequotas.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchResourcequotasQueryKey>
  >({
    queryKey: getApiV1WatchResourcequotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.resourcequotas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1WatchResourcequotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.resourcequotas.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchResourcequotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchResourcequotasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchResourcequotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.resourcequotas.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchResourcequotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchResourcequotasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchSecretsQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.secrets.$get>,
) {
  return ['api', '/api/v1/watch/secrets', args] as const
}

export function getApiV1WatchSecretsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.watch.secrets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchSecretsQueryKey>
  >({
    queryKey: getApiV1WatchSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.secrets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1WatchSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.secrets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1WatchSecretsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1WatchSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.secrets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1WatchSecretsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1WatchServiceaccountsQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.serviceaccounts.$get>,
) {
  return ['api', '/api/v1/watch/serviceaccounts', args] as const
}

export function getApiV1WatchServiceaccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.serviceaccounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchServiceaccountsQueryKey>
  >({
    queryKey: getApiV1WatchServiceaccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.serviceaccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1WatchServiceaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.serviceaccounts.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1WatchServiceaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1WatchServiceaccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1WatchServiceaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.serviceaccounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchServiceaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1WatchServiceaccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1WatchServicesQueryKey(
  args: InferRequestType<typeof client.api.v1.watch.services.$get>,
) {
  return ['api', '/api/v1/watch/services', args] as const
}

export function getApiV1WatchServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.services.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchServicesQueryKey>
  >({
    queryKey: getApiV1WatchServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watch.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1WatchServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.services.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1WatchServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1WatchServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.watch.services.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WatchServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1WatchServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
