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

export function getApisKey() {
  return ['apis'] as const
}

export function getApisEventsK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/events.k8s.io/v1/'] as const
}

export function getApisEventsK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1IndexQueryKey>
  >({
    queryKey: getApisEventsK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisEventsK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApisEventsK8sIoV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApisEventsK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApisEventsK8sIoV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApisEventsK8sIoV1EventsQueryKey(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>,
) {
  return ['apis', '/apis/events.k8s.io/v1/events', args] as const
}

export function getApisEventsK8sIoV1EventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1EventsQueryKey>
  >({
    queryKey: getApisEventsK8sIoV1EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisEventsK8sIoV1Events<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1EventsQueryKey>
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
      ...getApisEventsK8sIoV1EventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisEventsK8sIoV1Events<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1EventsQueryKey>
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
      ...getApisEventsK8sIoV1EventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisEventsK8sIoV1NamespacesNamespaceEventsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
  >,
) {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events', args] as const
}

export function getApisEventsK8sIoV1NamespacesNamespaceEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1NamespacesNamespaceEventsQueryKey>
  >({
    queryKey: getApisEventsK8sIoV1NamespacesNamespaceEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisEventsK8sIoV1NamespacesNamespaceEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1NamespacesNamespaceEventsQueryKey>
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
      ...getApisEventsK8sIoV1NamespacesNamespaceEventsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisEventsK8sIoV1NamespacesNamespaceEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1NamespacesNamespaceEventsQueryKey>
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
      ...getApisEventsK8sIoV1NamespacesNamespaceEventsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApisEventsK8sIoV1NamespacesNamespaceEventsMutationKey() {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events', 'POST'] as const
}

export function getPostApisEventsK8sIoV1NamespacesNamespaceEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisEventsK8sIoV1NamespacesNamespaceEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$post(args, options),
      )
    },
  })
}

export function usePostApisEventsK8sIoV1NamespacesNamespaceEvents<
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
                  (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$post']
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
  const mutationDefaults = getPostApisEventsK8sIoV1NamespacesNamespaceEventsMutationOptions<
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

export function getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsMutationKey() {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events', 'DELETE'] as const
}

export function getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisEventsK8sIoV1NamespacesNamespaceEvents<
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
                  (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$delete']
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
  const mutationDefaults = getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsMutationOptions<
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

export function getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
  >,
) {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', args] as const
}

export function getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryKey>
  >({
    queryKey: getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisEventsK8sIoV1NamespacesNamespaceEventsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryKey>
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
      ...getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisEventsK8sIoV1NamespacesNamespaceEventsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryKey>
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
      ...getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationKey() {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', 'PUT'] as const
}

export function getPutApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisEventsK8sIoV1NamespacesNamespaceEventsName<
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
                  (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$put']
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
  const mutationDefaults = getPutApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationOptions<
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

export function getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationKey() {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', 'DELETE'] as const
}

export function getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisEventsK8sIoV1NamespacesNamespaceEventsName<
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
                  (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationOptions<
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

export function getPatchApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationKey() {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', 'PATCH'] as const
}

export function getPatchApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisEventsK8sIoV1NamespacesNamespaceEventsName<
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
                  (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$patch']
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
  const mutationDefaults = getPatchApisEventsK8sIoV1NamespacesNamespaceEventsNameMutationOptions<
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

export function getApisEventsK8sIoV1WatchEventsQueryKey(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>,
) {
  return ['apis', '/apis/events.k8s.io/v1/watch/events', args] as const
}

export function getApisEventsK8sIoV1WatchEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1WatchEventsQueryKey>
  >({
    queryKey: getApisEventsK8sIoV1WatchEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.watch.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisEventsK8sIoV1WatchEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1WatchEventsQueryKey>
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
      ...getApisEventsK8sIoV1WatchEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisEventsK8sIoV1WatchEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1WatchEventsQueryKey>
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
      ...getApisEventsK8sIoV1WatchEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
  >,
) {
  return ['apis', '/apis/events.k8s.io/v1/watch/namespaces/:namespace/events', args] as const
}

export function getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryKey>
  >({
    queryKey: getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisEventsK8sIoV1WatchNamespacesNamespaceEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryKey>
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
      ...getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisEventsK8sIoV1WatchNamespacesNamespaceEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryKey>
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
      ...getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
  >,
) {
  return ['apis', '/apis/events.k8s.io/v1/watch/namespaces/:namespace/events/:name', args] as const
}

export function getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryKey>
  >({
    queryKey: getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisEventsK8sIoV1WatchNamespacesNamespaceEventsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryKey>
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
      ...getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisEventsK8sIoV1WatchNamespacesNamespaceEventsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryKey>
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
      ...getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
