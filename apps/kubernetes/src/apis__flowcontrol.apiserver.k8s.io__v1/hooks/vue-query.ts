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

export function getApisFlowcontrolApiserverK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/'] as const
}

export function getApisFlowcontrolApiserverK8sIoV1IndexQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getApisFlowcontrolApiserverK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1IndexQueryKey>
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
            ReturnType<(typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisFlowcontrolApiserverK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
    >
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', toValue(args)] as const
}

export function getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryKey>
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
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisFlowcontrolApiserverK8sIoV1FlowschemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', toValue(args)] as const
}

export function getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryKey>
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
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisFlowcontrolApiserverK8sIoV1FlowschemasNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status',
    toValue(args),
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryKey>
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
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations',
    toValue(args),
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryKey>
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
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name',
    toValue(args),
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryKey
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
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status',
    toValue(args),
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
          ':name'
        ].status.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
            ':name'
          ].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
    >
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas', toValue(args)] as const
}

export function getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryKey>
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
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/:name',
    toValue(args),
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryKey>
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
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations',
    toValue(args),
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryKey
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
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/:name',
    toValue(args),
  ] as const
}

export function getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
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
                    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}
