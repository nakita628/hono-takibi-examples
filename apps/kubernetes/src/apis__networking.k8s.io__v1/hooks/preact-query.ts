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

export function getApisNetworkingK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/networking.k8s.io/v1/'] as const
}

export function getApisNetworkingK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IndexQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
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
              Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApisNetworkingK8sIoV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
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
              Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApisNetworkingK8sIoV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1IngressclassesQueryKey(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses', args] as const
}

export function getApisNetworkingK8sIoV1IngressclassesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IngressclassesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1IngressclassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1Ingressclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IngressclassesQueryKey>
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
      ...getApisNetworkingK8sIoV1IngressclassesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1Ingressclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IngressclassesQueryKey>
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
      ...getApisNetworkingK8sIoV1IngressclassesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApisNetworkingK8sIoV1IngressclassesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses', 'POST'] as const
}

export function getPostApisNetworkingK8sIoV1IngressclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisNetworkingK8sIoV1IngressclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']
      >,
    ) {
      return parseResponse(client.apis['networking.k8s.io'].v1.ingressclasses.$post(args, options))
    },
  })
}

export function usePostApisNetworkingK8sIoV1Ingressclasses<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']
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
  const mutationDefaults = getPostApisNetworkingK8sIoV1IngressclassesMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1IngressclassesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1IngressclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1IngressclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1Ingressclasses<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']
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
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1IngressclassesMutationOptions<
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

export function getApisNetworkingK8sIoV1IngressclassesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', args] as const
}

export function getApisNetworkingK8sIoV1IngressclassesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IngressclassesNameQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1IngressclassesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1IngressclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IngressclassesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1IngressclassesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1IngressclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IngressclassesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1IngressclassesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1IngressclassesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', 'PUT'] as const
}

export function getPutApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1IngressclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1IngressclassesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
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
  const mutationDefaults = getPutApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1IngressclassesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1IngressclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1IngressclassesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1IngressclassesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', 'PATCH'] as const
}

export function getPatchApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1IngressclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1IngressclassesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
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
  const mutationDefaults = getPatchApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
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

export function getApisNetworkingK8sIoV1IngressesQueryKey(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ingresses', args] as const
}

export function getApisNetworkingK8sIoV1IngressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IngressesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1IngressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1Ingresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IngressesQueryKey>
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
      ...getApisNetworkingK8sIoV1IngressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1Ingresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IngressesQueryKey>
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
      ...getApisNetworkingK8sIoV1IngressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1IpaddressesQueryKey(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses', args] as const
}

export function getApisNetworkingK8sIoV1IpaddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IpaddressesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1IpaddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ipaddresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1Ipaddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IpaddressesQueryKey>
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
      ...getApisNetworkingK8sIoV1IpaddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1Ipaddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IpaddressesQueryKey>
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
      ...getApisNetworkingK8sIoV1IpaddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApisNetworkingK8sIoV1IpaddressesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses', 'POST'] as const
}

export function getPostApisNetworkingK8sIoV1IpaddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisNetworkingK8sIoV1IpaddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']
      >,
    ) {
      return parseResponse(client.apis['networking.k8s.io'].v1.ipaddresses.$post(args, options))
    },
  })
}

export function usePostApisNetworkingK8sIoV1Ipaddresses<
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
                ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisNetworkingK8sIoV1IpaddressesMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1IpaddressesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1IpaddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1IpaddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']
      >,
    ) {
      return parseResponse(client.apis['networking.k8s.io'].v1.ipaddresses.$delete(args, options))
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1Ipaddresses<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1IpaddressesMutationOptions<
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

export function getApisNetworkingK8sIoV1IpaddressesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', args] as const
}

export function getApisNetworkingK8sIoV1IpaddressesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IpaddressesNameQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1IpaddressesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1IpaddressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IpaddressesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1IpaddressesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1IpaddressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1IpaddressesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1IpaddressesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1IpaddressesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', 'PUT'] as const
}

export function getPutApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1IpaddressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1IpaddressesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
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
  const mutationDefaults = getPutApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1IpaddressesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1IpaddressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1IpaddressesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1IpaddressesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', 'PATCH'] as const
}

export function getPatchApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1IpaddressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1IpaddressesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
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
  const mutationDefaults = getPatchApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
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

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', args] as const
}

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1NamespacesNamespaceIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryKey>
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
      ...getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1NamespacesNamespaceIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryKey>
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
      ...getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', 'POST'] as const
}

export function getPostApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$post(args, options),
      )
    },
  })
}

export function usePostApisNetworkingK8sIoV1NamespacesNamespaceIngresses<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
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
  const mutationDefaults = getPostApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngresses<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
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
    getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationOptions<
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

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', args] as const
}

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name',
    'PUT',
  ] as const
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
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
    getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
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
    getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name',
    'PATCH',
  ] as const
}

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
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
    getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
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

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status',
    args,
  ] as const
}

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].status.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryKey>
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
      ...getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryKey>
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
      ...getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status',
    'PUT',
  ] as const
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
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
    getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[
          ':name'
        ].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
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
    getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationOptions<
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

export function getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies', args] as const
}

export function getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryKey>
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
      ...getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryKey>
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
      ...getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies',
    'POST',
  ] as const
}

export function getPostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
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
    getPostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies',
    'DELETE',
  ] as const
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
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
    getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationOptions<
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

export function getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    args,
  ] as const
}

export function getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    'PUT',
  ] as const
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
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
    getPutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
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
    getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    'PATCH',
  ] as const
}

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
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
    getPatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
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

export function getApisNetworkingK8sIoV1NetworkpoliciesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/networkpolicies', args] as const
}

export function getApisNetworkingK8sIoV1NetworkpoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NetworkpoliciesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1NetworkpoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.networkpolicies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1Networkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NetworkpoliciesQueryKey>
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
      ...getApisNetworkingK8sIoV1NetworkpoliciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1Networkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1NetworkpoliciesQueryKey>
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
      ...getApisNetworkingK8sIoV1NetworkpoliciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1ServicecidrsQueryKey(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>,
) {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs', args] as const
}

export function getApisNetworkingK8sIoV1ServicecidrsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1ServicecidrsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1Servicecidrs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsQueryKey>
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
      ...getApisNetworkingK8sIoV1ServicecidrsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1Servicecidrs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsQueryKey>
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
      ...getApisNetworkingK8sIoV1ServicecidrsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApisNetworkingK8sIoV1ServicecidrsMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs', 'POST'] as const
}

export function getPostApisNetworkingK8sIoV1ServicecidrsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisNetworkingK8sIoV1ServicecidrsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']
      >,
    ) {
      return parseResponse(client.apis['networking.k8s.io'].v1.servicecidrs.$post(args, options))
    },
  })
}

export function usePostApisNetworkingK8sIoV1Servicecidrs<
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
                ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisNetworkingK8sIoV1ServicecidrsMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1ServicecidrsMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1ServicecidrsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1ServicecidrsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']
      >,
    ) {
      return parseResponse(client.apis['networking.k8s.io'].v1.servicecidrs.$delete(args, options))
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1Servicecidrs<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']
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
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1ServicecidrsMutationOptions<
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

export function getApisNetworkingK8sIoV1ServicecidrsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', args] as const
}

export function getApisNetworkingK8sIoV1ServicecidrsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsNameQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1ServicecidrsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1ServicecidrsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsNameQueryKey>
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
      ...getApisNetworkingK8sIoV1ServicecidrsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1ServicecidrsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsNameQueryKey>
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
      ...getApisNetworkingK8sIoV1ServicecidrsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1ServicecidrsNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', 'PUT'] as const
}

export function getPutApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1ServicecidrsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1ServicecidrsName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
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
  const mutationDefaults = getPutApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1ServicecidrsNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1ServicecidrsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1ServicecidrsName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1ServicecidrsNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', 'PATCH'] as const
}

export function getPatchApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1ServicecidrsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1ServicecidrsName<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
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
  const mutationDefaults = getPatchApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
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

export function getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name/status', args] as const
}

export function getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1ServicecidrsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryKey>
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
      ...getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1ServicecidrsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryKey>
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
      ...getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1ServicecidrsNameStatusMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name/status', 'PUT'] as const
}

export function getPutApisNetworkingK8sIoV1ServicecidrsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1ServicecidrsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$put(args, options),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1ServicecidrsNameStatus<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
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
  const mutationDefaults = getPutApisNetworkingK8sIoV1ServicecidrsNameStatusMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1ServicecidrsNameStatusMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name/status', 'PATCH'] as const
}

export function getPatchApisNetworkingK8sIoV1ServicecidrsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1ServicecidrsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1ServicecidrsNameStatus<
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
                  (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
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
  const mutationDefaults = getPatchApisNetworkingK8sIoV1ServicecidrsNameStatusMutationOptions<
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

export function getApisNetworkingK8sIoV1WatchIngressclassesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ingressclasses', args] as const
}

export function getApisNetworkingK8sIoV1WatchIngressclassesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressclassesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchIngressclassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.ingressclasses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchIngressclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressclassesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchIngressclassesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchIngressclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressclassesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchIngressclassesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchIngressclassesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ingressclasses/:name', args] as const
}

export function getApisNetworkingK8sIoV1WatchIngressclassesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressclassesNameQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchIngressclassesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.ingressclasses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchIngressclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressclassesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchIngressclassesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchIngressclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressclassesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchIngressclassesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchIngressesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ingresses', args] as const
}

export function getApisNetworkingK8sIoV1WatchIngressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchIngressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.ingresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchIngressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchIngressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchIpaddressesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ipaddresses', args] as const
}

export function getApisNetworkingK8sIoV1WatchIpaddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchIpaddressesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchIpaddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.ipaddresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchIpaddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchIpaddressesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchIpaddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchIpaddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchIpaddressesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchIpaddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchIpaddressesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ipaddresses/:name', args] as const
}

export function getApisNetworkingK8sIoV1WatchIpaddressesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchIpaddressesNameQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchIpaddressesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.ipaddresses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchIpaddressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchIpaddressesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchIpaddressesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchIpaddressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchIpaddressesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchIpaddressesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses', args] as const
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchNamespacesNamespaceIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchNamespacesNamespaceIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses/:name',
    args,
  ] as const
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies',
    args,
  ] as const
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies/:name',
    args,
  ] as const
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryKey
        >
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
      ...getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryKey
        >
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
      ...getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/networkpolicies', args] as const
}

export function getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.networkpolicies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchNetworkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchNetworkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchServicecidrsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/servicecidrs', args] as const
}

export function getApisNetworkingK8sIoV1WatchServicecidrsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchServicecidrsQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchServicecidrsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.servicecidrs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchServicecidrs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchServicecidrsQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchServicecidrsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchServicecidrs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchServicecidrsQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchServicecidrsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchServicecidrsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/servicecidrs/:name', args] as const
}

export function getApisNetworkingK8sIoV1WatchServicecidrsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchServicecidrsNameQueryKey>
  >({
    queryKey: getApisNetworkingK8sIoV1WatchServicecidrsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.servicecidrs[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisNetworkingK8sIoV1WatchServicecidrsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchServicecidrsNameQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchServicecidrsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisNetworkingK8sIoV1WatchServicecidrsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisNetworkingK8sIoV1WatchServicecidrsNameQueryKey>
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
      ...getApisNetworkingK8sIoV1WatchServicecidrsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
