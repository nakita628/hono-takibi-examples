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

export function getApisDiscoveryK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/discovery.k8s.io/v1/'] as const
}

export function getApisDiscoveryK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApisDiscoveryK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getApisDiscoveryK8sIoV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApisDiscoveryK8sIoV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApisDiscoveryK8sIoV1Index<
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
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApisDiscoveryK8sIoV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApisDiscoveryK8sIoV1EndpointslicesQueryKey(
  args: InferRequestType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>,
) {
  return ['apis', '/apis/discovery.k8s.io/v1/endpointslices', args] as const
}

export function getApisDiscoveryK8sIoV1EndpointslicesQueryOptions<
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
  args: InferRequestType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisDiscoveryK8sIoV1EndpointslicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.endpointslices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getApisDiscoveryK8sIoV1EndpointslicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisDiscoveryK8sIoV1Endpointslices<
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
  args: InferRequestType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisDiscoveryK8sIoV1EndpointslicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
  >,
) {
  return ['apis', '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', args] as const
}

export function getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryKey>
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
      ...getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslices<
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name',
    args,
  ] as const
}

export function getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameQueryKey>
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
      ...getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName<
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
  >,
) {
  return ['apis', '/apis/discovery.k8s.io/v1/watch/endpointslices', args] as const
}

export function getApisDiscoveryK8sIoV1WatchEndpointslicesQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisDiscoveryK8sIoV1WatchEndpointslicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.watch.endpointslices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisDiscoveryK8sIoV1WatchEndpointslicesQueryKey>
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
      ...getApisDiscoveryK8sIoV1WatchEndpointslicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisDiscoveryK8sIoV1WatchEndpointslices<
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisDiscoveryK8sIoV1WatchEndpointslicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
  >,
) {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices',
    args,
  ] as const
}

export function getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryKey>
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
      ...getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslices<
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices/:name',
    args,
  ] as const
}

export function getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryKey>
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
      ...getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesName<
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
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
