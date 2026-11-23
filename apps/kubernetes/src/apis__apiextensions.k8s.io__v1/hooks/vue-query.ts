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

export function getApisApiextensionsK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/'] as const
}

export function getApisApiextensionsK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisApiextensionsK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiextensionsK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>>
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
                  ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>
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
                  ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisApiextensionsK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisApiextensionsK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiextensions.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
    >
  >,
) {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions', toValue(args)] as const
}

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiextensionsK8sIoV1Customresourcedefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryKey>
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
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions', 'POST'] as const
}

export function getPostApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$post(args, options),
      )
    },
  })
}

export function usePostApisApiextensionsK8sIoV1Customresourcedefinitions<
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
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
  const mutationDefaults = getPostApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions', 'DELETE'] as const
}

export function getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisApiextensionsK8sIoV1Customresourcedefinitions<
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
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
    getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name',
    toValue(args),
  ] as const
}

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryKey>
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
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', 'PUT'] as const
}

export function getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
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
    getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey() {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
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
    getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', 'PATCH'] as const
}

export function getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
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
    getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status',
    toValue(args),
  ] as const
}

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryKey>
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
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status',
    'PUT',
  ] as const
}

export function getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus<
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
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
    getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus<
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
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
    getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions',
    toValue(args),
  ] as const
}

export function getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiextensionsK8sIoV1WatchCustomresourcedefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryKey>
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
              (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name',
    toValue(args),
  ] as const
}

export function getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
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
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryKey>
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
              (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
