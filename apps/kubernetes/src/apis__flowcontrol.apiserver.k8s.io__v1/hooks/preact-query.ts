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

export function getApisFlowcontrolApiserverK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/'] as const
}

export function getApisFlowcontrolApiserverK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1IndexQueryKey>
  >({
    queryKey: getApisFlowcontrolApiserverK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisFlowcontrolApiserverK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['index']['$get']>
        >
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
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1IndexQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisFlowcontrolApiserverK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['index']['$get']>
        >
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
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1IndexQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', args] as const
}

export function getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryKey>
  >({
    queryKey: getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisFlowcontrolApiserverK8sIoV1Flowschemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisFlowcontrolApiserverK8sIoV1Flowschemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApisFlowcontrolApiserverK8sIoV1FlowschemasMutationKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', 'POST'] as const
}

export function getPostApisFlowcontrolApiserverK8sIoV1FlowschemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisFlowcontrolApiserverK8sIoV1FlowschemasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$post(args, options),
      )
    },
  })
}

export function usePostApisFlowcontrolApiserverK8sIoV1Flowschemas<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$post']
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
  const mutationDefaults = getPostApisFlowcontrolApiserverK8sIoV1FlowschemasMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasMutationKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', 'DELETE'] as const
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisFlowcontrolApiserverK8sIoV1Flowschemas<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$delete']
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
  const mutationDefaults = getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', args] as const
}

export function getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryKey>
  >({
    queryKey: getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisFlowcontrolApiserverK8sIoV1FlowschemasName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisFlowcontrolApiserverK8sIoV1FlowschemasName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', 'PUT'] as const
}

export function getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisFlowcontrolApiserverK8sIoV1FlowschemasName<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$put']
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
  const mutationDefaults = getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', 'DELETE'] as const
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasName<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', 'PATCH'] as const
}

export function getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisFlowcontrolApiserverK8sIoV1FlowschemasName<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$patch']
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
  const mutationDefaults = getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', args] as const
}

export function getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryKey>
  >({
    queryKey: getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusMutationKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', 'PUT'] as const
}

export function getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatus<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$put']
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
    getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusMutationKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatus<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$patch']
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
    getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations',
    args,
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryKey>
  >({
    queryKey: getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisFlowcontrolApiserverK8sIoV1Prioritylevelconfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisFlowcontrolApiserverK8sIoV1Prioritylevelconfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsMutationKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations',
    'POST',
  ] as const
}

export function getPostApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApisFlowcontrolApiserverK8sIoV1Prioritylevelconfigurations<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$post']
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
    getPostApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsMutationKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations',
    'DELETE',
  ] as const
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisFlowcontrolApiserverK8sIoV1Prioritylevelconfigurations<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$delete']
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
    getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name',
    args,
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryKey>
  >({
    queryKey: getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name',
    'PUT',
  ] as const
}

export function getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$put']
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
    getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$delete']
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
    getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name',
    'PATCH',
  ] as const
}

export function getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$patch']
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
    getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status',
    args,
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryKey
    >
  >({
    queryKey: getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
          ':name'
        ].status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryKey
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
      ...getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryKey
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
      ...getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status',
    'PUT',
  ] as const
}

export function getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
          ':name'
        ].status.$put(args, options),
      )
    },
  })
}

export function usePutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatus<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$put']
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
    getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
          ':name'
        ].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatus<
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
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$patch']
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
    getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas', args] as const
}

export function getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryKey>
  >({
    queryKey: getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisFlowcontrolApiserverK8sIoV1WatchFlowschemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisFlowcontrolApiserverK8sIoV1WatchFlowschemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/:name', args] as const
}

export function getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryKey>
  >({
    queryKey: getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisFlowcontrolApiserverK8sIoV1WatchFlowschemasName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisFlowcontrolApiserverK8sIoV1WatchFlowschemasName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryKey>
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
      ...getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations',
    args,
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryKey>
  >({
    queryKey: getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryKey
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
      ...getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryKey
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
      ...getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/:name',
    args,
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryKey
    >
  >({
    queryKey: getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryKey
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
      ...getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryKey
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
      ...getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
