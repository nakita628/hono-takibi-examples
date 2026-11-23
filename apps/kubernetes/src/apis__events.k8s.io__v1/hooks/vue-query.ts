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

export function getApisKey() {
  return ['apis'] as const
}

export function getApisEventsK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/events.k8s.io/v1/'] as const
}

export function getApisEventsK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisEventsK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApisEventsK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisEventsK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['events.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisEventsK8sIoV1EventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>
  >,
) {
  return ['apis', '/apis/events.k8s.io/v1/events', toValue(args)] as const
}

export function getApisEventsK8sIoV1EventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisEventsK8sIoV1EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApisEventsK8sIoV1EventsQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisEventsK8sIoV1EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['events.k8s.io'].v1.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisEventsK8sIoV1NamespacesNamespaceEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
    >
  >,
) {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events', toValue(args)] as const
}

export function getApisEventsK8sIoV1NamespacesNamespaceEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisEventsK8sIoV1NamespacesNamespaceEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
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
                    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
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
                    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisEventsK8sIoV1NamespacesNamespaceEventsQueryKey>
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
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1NamespacesNamespaceEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisEventsK8sIoV1NamespacesNamespaceEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/events.k8s.io/v1/namespaces/:namespace/events/:name',
    toValue(args),
  ] as const
}

export function getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
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
                    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
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
                    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryKey>
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
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisEventsK8sIoV1NamespacesNamespaceEventsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
  >,
) {
  return ['apis', '/apis/events.k8s.io/v1/watch/events', toValue(args)] as const
}

export function getApisEventsK8sIoV1WatchEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisEventsK8sIoV1WatchEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.watch.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisEventsK8sIoV1WatchEventsQueryKey>
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
            ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1WatchEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisEventsK8sIoV1WatchEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['events.k8s.io'].v1.watch.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/events.k8s.io/v1/watch/namespaces/:namespace/events',
    toValue(args),
  ] as const
}

export function getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
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
                    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
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
                    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryKey>
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
              (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisEventsK8sIoV1WatchNamespacesNamespaceEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/events.k8s.io/v1/watch/namespaces/:namespace/events/:name',
    toValue(args),
  ] as const
}

export function getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
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
                    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
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
                    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryKey>
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
              (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
