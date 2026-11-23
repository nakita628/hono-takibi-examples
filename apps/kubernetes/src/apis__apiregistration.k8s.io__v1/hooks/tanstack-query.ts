import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getApisApiregistrationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/'] as const
}

export function getApisApiregistrationK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1IndexQueryKey>
  >({
    queryKey: getApisApiregistrationK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisApiregistrationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>>
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
              Awaited<
                ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1IndexQueryKey>
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
      ...getApisApiregistrationK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisApiregistrationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>>
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
              Awaited<
                ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1IndexQueryKey>
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
      ...getApisApiregistrationK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisApiregistrationK8sIoV1ApiservicesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices', args] as const
}

export function getApisApiregistrationK8sIoV1ApiservicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesQueryKey>
  >({
    queryKey: getApisApiregistrationK8sIoV1ApiservicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisApiregistrationK8sIoV1Apiservices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesQueryKey>
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
      ...getApisApiregistrationK8sIoV1ApiservicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisApiregistrationK8sIoV1Apiservices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesQueryKey>
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
      ...getApisApiregistrationK8sIoV1ApiservicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApisApiregistrationK8sIoV1ApiservicesMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices', 'POST'] as const
}

export function getPostApisApiregistrationK8sIoV1ApiservicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiregistrationK8sIoV1ApiservicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices.$post(args, options),
      )
    },
  })
}

export function usePostApisApiregistrationK8sIoV1Apiservices<
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
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']
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
  const mutationDefaults = getPostApisApiregistrationK8sIoV1ApiservicesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApisApiregistrationK8sIoV1ApiservicesMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices', 'DELETE'] as const
}

export function getDeleteApisApiregistrationK8sIoV1ApiservicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiregistrationK8sIoV1ApiservicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisApiregistrationK8sIoV1Apiservices<
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
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
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
  const mutationDefaults = getDeleteApisApiregistrationK8sIoV1ApiservicesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisApiregistrationK8sIoV1ApiservicesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', args] as const
}

export function getApisApiregistrationK8sIoV1ApiservicesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesNameQueryKey>
  >({
    queryKey: getApisApiregistrationK8sIoV1ApiservicesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisApiregistrationK8sIoV1ApiservicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesNameQueryKey>
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
      ...getApisApiregistrationK8sIoV1ApiservicesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisApiregistrationK8sIoV1ApiservicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesNameQueryKey>
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
      ...getApisApiregistrationK8sIoV1ApiservicesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisApiregistrationK8sIoV1ApiservicesNameMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', 'PUT'] as const
}

export function getPutApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiregistrationK8sIoV1ApiservicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisApiregistrationK8sIoV1ApiservicesName<
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
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
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
  const mutationDefaults = getPutApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApisApiregistrationK8sIoV1ApiservicesNameMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', 'DELETE'] as const
}

export function getDeleteApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiregistrationK8sIoV1ApiservicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisApiregistrationK8sIoV1ApiservicesName<
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
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApisApiregistrationK8sIoV1ApiservicesNameMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', 'PATCH'] as const
}

export function getPatchApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisApiregistrationK8sIoV1ApiservicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisApiregistrationK8sIoV1ApiservicesName<
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
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
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
  const mutationDefaults = getPatchApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name/status', args] as const
}

export function getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryKey>
  >({
    queryKey: getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisApiregistrationK8sIoV1ApiservicesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryKey>
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
      ...getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisApiregistrationK8sIoV1ApiservicesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryKey>
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
      ...getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisApiregistrationK8sIoV1ApiservicesNameStatusMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name/status', 'PUT'] as const
}

export function getPutApisApiregistrationK8sIoV1ApiservicesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiregistrationK8sIoV1ApiservicesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$put(args, options),
      )
    },
  })
}

export function usePutApisApiregistrationK8sIoV1ApiservicesNameStatus<
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
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
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
  const mutationDefaults = getPutApisApiregistrationK8sIoV1ApiservicesNameStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApisApiregistrationK8sIoV1ApiservicesNameStatusMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name/status', 'PATCH'] as const
}

export function getPatchApisApiregistrationK8sIoV1ApiservicesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisApiregistrationK8sIoV1ApiservicesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisApiregistrationK8sIoV1ApiservicesNameStatus<
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
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
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
  const mutationDefaults = getPatchApisApiregistrationK8sIoV1ApiservicesNameStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisApiregistrationK8sIoV1WatchApiservicesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/watch/apiservices', args] as const
}

export function getApisApiregistrationK8sIoV1WatchApiservicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1WatchApiservicesQueryKey>
  >({
    queryKey: getApisApiregistrationK8sIoV1WatchApiservicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.watch.apiservices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisApiregistrationK8sIoV1WatchApiservices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1WatchApiservicesQueryKey>
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
      ...getApisApiregistrationK8sIoV1WatchApiservicesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisApiregistrationK8sIoV1WatchApiservices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1WatchApiservicesQueryKey>
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
      ...getApisApiregistrationK8sIoV1WatchApiservicesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisApiregistrationK8sIoV1WatchApiservicesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/watch/apiservices/:name', args] as const
}

export function getApisApiregistrationK8sIoV1WatchApiservicesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1WatchApiservicesNameQueryKey>
  >({
    queryKey: getApisApiregistrationK8sIoV1WatchApiservicesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.watch.apiservices[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisApiregistrationK8sIoV1WatchApiservicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1WatchApiservicesNameQueryKey>
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
      ...getApisApiregistrationK8sIoV1WatchApiservicesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisApiregistrationK8sIoV1WatchApiservicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisApiregistrationK8sIoV1WatchApiservicesNameQueryKey>
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
      ...getApisApiregistrationK8sIoV1WatchApiservicesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
