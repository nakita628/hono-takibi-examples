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

export function getApisDiscoveryK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/discovery.k8s.io/v1/'] as const
}

export function getApisDiscoveryK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisDiscoveryK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisDiscoveryK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['index']['$get']>>
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
                Awaited<ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApisDiscoveryK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisDiscoveryK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisDiscoveryK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['discovery.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisDiscoveryK8sIoV1EndpointslicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>
  >,
) {
  return ['apis', '/apis/discovery.k8s.io/v1/endpointslices', toValue(args)] as const
}

export function getApisDiscoveryK8sIoV1EndpointslicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisDiscoveryK8sIoV1EndpointslicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.endpointslices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisDiscoveryK8sIoV1Endpointslices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisDiscoveryK8sIoV1EndpointslicesQueryKey>
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
            ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisDiscoveryK8sIoV1EndpointslicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisDiscoveryK8sIoV1EndpointslicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['discovery.k8s.io'].v1.endpointslices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices',
    toValue(args),
  ] as const
}

export function getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryKey>
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
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesMutationKey() {
  return ['apis', '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', 'POST'] as const
}

export function getPostApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslices<
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$post']
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
    getPostApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesMutationOptions<
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

export function getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesMutationKey() {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices',
    'DELETE',
  ] as const
}

export function getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslices<
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$delete']
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
    getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesMutationOptions<
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

export function getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name',
    toValue(args),
  ] as const
}

export function getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameQueryKey>
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
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationKey() {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name',
    'PUT',
  ] as const
}

export function getPutApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName<
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$put']
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
    getPutApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationOptions<
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

export function getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationKey() {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName<
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$delete']
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
    getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationOptions<
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

export function getPatchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationKey() {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name',
    'PATCH',
  ] as const
}

export function getPatchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName<
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$patch']
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
    getPatchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameMutationOptions<
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

export function getApisDiscoveryK8sIoV1WatchEndpointslicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
    >
  >,
) {
  return ['apis', '/apis/discovery.k8s.io/v1/watch/endpointslices', toValue(args)] as const
}

export function getApisDiscoveryK8sIoV1WatchEndpointslicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisDiscoveryK8sIoV1WatchEndpointslicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.watch.endpointslices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisDiscoveryK8sIoV1WatchEndpointslices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisDiscoveryK8sIoV1WatchEndpointslicesQueryKey>
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
              (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisDiscoveryK8sIoV1WatchEndpointslicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisDiscoveryK8sIoV1WatchEndpointslicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['discovery.k8s.io'].v1.watch.endpointslices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices',
    toValue(args),
  ] as const
}

export function getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryKey>
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
              (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices/:name',
    toValue(args),
  ] as const
}

export function getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
                    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryKey
          >
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
              (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}
