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

export function getApisStorageK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/storage.k8s.io/v1/'] as const
}

export function getApisStorageK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisStorageK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['index']['$get']>>
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
                Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisStorageK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1CsidriversQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers', toValue(args)] as const
}

export function getApisStorageK8sIoV1CsidriversQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1CsidriversQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.csidrivers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1Csidrivers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>
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
                  ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1CsidriversQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1CsidriversQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1CsidriversQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.csidrivers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisStorageK8sIoV1CsidriversMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers', 'POST'] as const
}

export function getPostApisStorageK8sIoV1CsidriversMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisStorageK8sIoV1CsidriversMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$post']>,
    ) {
      return parseResponse(client.apis['storage.k8s.io'].v1.csidrivers.$post(args, options))
    },
  })
}

export function usePostApisStorageK8sIoV1Csidrivers<
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
                  ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$post']>,
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
  const mutationDefaults = getPostApisStorageK8sIoV1CsidriversMutationOptions<
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

export function getDeleteApisStorageK8sIoV1CsidriversMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers', 'DELETE'] as const
}

export function getDeleteApisStorageK8sIoV1CsidriversMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStorageK8sIoV1CsidriversMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$delete']>,
    ) {
      return parseResponse(client.apis['storage.k8s.io'].v1.csidrivers.$delete(args, options))
    },
  })
}

export function useDeleteApisStorageK8sIoV1Csidrivers<
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
                  ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$delete']>,
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
  const mutationDefaults = getDeleteApisStorageK8sIoV1CsidriversMutationOptions<
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

export function getApisStorageK8sIoV1CsidriversNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']>
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers/:name', toValue(args)] as const
}

export function getApisStorageK8sIoV1CsidriversNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1CsidriversNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.csidrivers[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1CsidriversName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']>
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1CsidriversNameQueryKey>
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
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1CsidriversNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1CsidriversNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.csidrivers[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisStorageK8sIoV1CsidriversNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers/:name', 'PUT'] as const
}

export function getPutApisStorageK8sIoV1CsidriversNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApisStorageK8sIoV1CsidriversNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$put']
      >,
    ) {
      return parseResponse(client.apis['storage.k8s.io'].v1.csidrivers[':name'].$put(args, options))
    },
  })
}

export function usePutApisStorageK8sIoV1CsidriversName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$put']
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
  const mutationDefaults = getPutApisStorageK8sIoV1CsidriversNameMutationOptions<
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

export function getDeleteApisStorageK8sIoV1CsidriversNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers/:name', 'DELETE'] as const
}

export function getDeleteApisStorageK8sIoV1CsidriversNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStorageK8sIoV1CsidriversNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.csidrivers[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisStorageK8sIoV1CsidriversName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisStorageK8sIoV1CsidriversNameMutationOptions<
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

export function getPatchApisStorageK8sIoV1CsidriversNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers/:name', 'PATCH'] as const
}

export function getPatchApisStorageK8sIoV1CsidriversNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApisStorageK8sIoV1CsidriversNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.csidrivers[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisStorageK8sIoV1CsidriversName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$patch']
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
  const mutationDefaults = getPatchApisStorageK8sIoV1CsidriversNameMutationOptions<
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

export function getApisStorageK8sIoV1CsinodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes', toValue(args)] as const
}

export function getApisStorageK8sIoV1CsinodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1CsinodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.csinodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1Csinodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>
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
                  ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1CsinodesQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1CsinodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1CsinodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.csinodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisStorageK8sIoV1CsinodesMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes', 'POST'] as const
}

export function getPostApisStorageK8sIoV1CsinodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisStorageK8sIoV1CsinodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$post']>,
    ) {
      return parseResponse(client.apis['storage.k8s.io'].v1.csinodes.$post(args, options))
    },
  })
}

export function usePostApisStorageK8sIoV1Csinodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$post']>,
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
  const mutationDefaults = getPostApisStorageK8sIoV1CsinodesMutationOptions<
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

export function getDeleteApisStorageK8sIoV1CsinodesMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes', 'DELETE'] as const
}

export function getDeleteApisStorageK8sIoV1CsinodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStorageK8sIoV1CsinodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$delete']>,
    ) {
      return parseResponse(client.apis['storage.k8s.io'].v1.csinodes.$delete(args, options))
    },
  })
}

export function useDeleteApisStorageK8sIoV1Csinodes<
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
                  ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$delete']>,
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
  const mutationDefaults = getDeleteApisStorageK8sIoV1CsinodesMutationOptions<
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

export function getApisStorageK8sIoV1CsinodesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name', toValue(args)] as const
}

export function getApisStorageK8sIoV1CsinodesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1CsinodesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.csinodes[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1CsinodesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1CsinodesNameQueryKey>
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
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1CsinodesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1CsinodesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.csinodes[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisStorageK8sIoV1CsinodesNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name', 'PUT'] as const
}

export function getPutApisStorageK8sIoV1CsinodesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApisStorageK8sIoV1CsinodesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$put']
      >,
    ) {
      return parseResponse(client.apis['storage.k8s.io'].v1.csinodes[':name'].$put(args, options))
    },
  })
}

export function usePutApisStorageK8sIoV1CsinodesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$put']
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
  const mutationDefaults = getPutApisStorageK8sIoV1CsinodesNameMutationOptions<
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

export function getDeleteApisStorageK8sIoV1CsinodesNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name', 'DELETE'] as const
}

export function getDeleteApisStorageK8sIoV1CsinodesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStorageK8sIoV1CsinodesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.csinodes[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisStorageK8sIoV1CsinodesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisStorageK8sIoV1CsinodesNameMutationOptions<
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

export function getPatchApisStorageK8sIoV1CsinodesNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name', 'PATCH'] as const
}

export function getPatchApisStorageK8sIoV1CsinodesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApisStorageK8sIoV1CsinodesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$patch']
      >,
    ) {
      return parseResponse(client.apis['storage.k8s.io'].v1.csinodes[':name'].$patch(args, options))
    },
  })
}

export function usePatchApisStorageK8sIoV1CsinodesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$patch']
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
  const mutationDefaults = getPatchApisStorageK8sIoV1CsinodesNameMutationOptions<
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

export function getApisStorageK8sIoV1CsinodesNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name/status', toValue(args)] as const
}

export function getApisStorageK8sIoV1CsinodesNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1CsinodesNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.csinodes[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1CsinodesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1CsinodesNameStatusQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1CsinodesNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1CsinodesNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.csinodes[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisStorageK8sIoV1CsinodesNameStatusMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name/status', 'PUT'] as const
}

export function getPutApisStorageK8sIoV1CsinodesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisStorageK8sIoV1CsinodesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.csinodes[':name'].status.$put(args, options),
      )
    },
  })
}

export function usePutApisStorageK8sIoV1CsinodesNameStatus<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$put']
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
  const mutationDefaults = getPutApisStorageK8sIoV1CsinodesNameStatusMutationOptions<
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

export function getPatchApisStorageK8sIoV1CsinodesNameStatusMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name/status', 'PATCH'] as const
}

export function getPatchApisStorageK8sIoV1CsinodesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisStorageK8sIoV1CsinodesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.csinodes[':name'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisStorageK8sIoV1CsinodesNameStatus<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$patch']
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
  const mutationDefaults = getPatchApisStorageK8sIoV1CsinodesNameStatusMutationOptions<
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

export function getApisStorageK8sIoV1CsistoragecapacitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']>
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csistoragecapacities', toValue(args)] as const
}

export function getApisStorageK8sIoV1CsistoragecapacitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1CsistoragecapacitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.csistoragecapacities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1Csistoragecapacities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']>
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1CsistoragecapacitiesQueryKey>
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
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1CsistoragecapacitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1CsistoragecapacitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.csistoragecapacities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities',
    toValue(args),
  ] as const
}

export function getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesMutationKey() {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities',
    'POST',
  ] as const
}

export function getPostApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacities<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$post']
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
    getPostApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesMutationOptions<
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

export function getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesMutationKey() {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities',
    'DELETE',
  ] as const
}

export function getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacities<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$delete']
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
    getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesMutationOptions<
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

export function getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name',
    toValue(args),
  ] as const
}

export function getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameQueryKey
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
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationKey() {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name',
    'PUT',
  ] as const
}

export function getPutApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[
          ':name'
        ].$put(args, options),
      )
    },
  })
}

export function usePutApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$put']
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
    getPutApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationOptions<
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

export function getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationKey() {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$delete']
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
    getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationOptions<
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

export function getPatchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationKey() {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name',
    'PATCH',
  ] as const
}

export function getPatchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$patch']
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
    getPatchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameMutationOptions<
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

export function getApisStorageK8sIoV1StorageclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses', toValue(args)] as const
}

export function getApisStorageK8sIoV1StorageclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1StorageclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.storageclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1Storageclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>
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
                  ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1StorageclassesQueryKey>
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
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1StorageclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1StorageclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.storageclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisStorageK8sIoV1StorageclassesMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses', 'POST'] as const
}

export function getPostApisStorageK8sIoV1StorageclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisStorageK8sIoV1StorageclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$post']
      >,
    ) {
      return parseResponse(client.apis['storage.k8s.io'].v1.storageclasses.$post(args, options))
    },
  })
}

export function usePostApisStorageK8sIoV1Storageclasses<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$post']>,
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
  const mutationDefaults = getPostApisStorageK8sIoV1StorageclassesMutationOptions<
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

export function getDeleteApisStorageK8sIoV1StorageclassesMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses', 'DELETE'] as const
}

export function getDeleteApisStorageK8sIoV1StorageclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStorageK8sIoV1StorageclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$delete']
      >,
    ) {
      return parseResponse(client.apis['storage.k8s.io'].v1.storageclasses.$delete(args, options))
    },
  })
}

export function useDeleteApisStorageK8sIoV1Storageclasses<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$delete']
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
  const mutationDefaults = getDeleteApisStorageK8sIoV1StorageclassesMutationOptions<
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

export function getApisStorageK8sIoV1StorageclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses/:name', toValue(args)] as const
}

export function getApisStorageK8sIoV1StorageclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1StorageclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.storageclasses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1StorageclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1StorageclassesNameQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1StorageclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1StorageclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.storageclasses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisStorageK8sIoV1StorageclassesNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses/:name', 'PUT'] as const
}

export function getPutApisStorageK8sIoV1StorageclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisStorageK8sIoV1StorageclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.storageclasses[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisStorageK8sIoV1StorageclassesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$put']
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
  const mutationDefaults = getPutApisStorageK8sIoV1StorageclassesNameMutationOptions<
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

export function getDeleteApisStorageK8sIoV1StorageclassesNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses/:name', 'DELETE'] as const
}

export function getDeleteApisStorageK8sIoV1StorageclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStorageK8sIoV1StorageclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.storageclasses[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisStorageK8sIoV1StorageclassesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisStorageK8sIoV1StorageclassesNameMutationOptions<
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

export function getPatchApisStorageK8sIoV1StorageclassesNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses/:name', 'PATCH'] as const
}

export function getPatchApisStorageK8sIoV1StorageclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisStorageK8sIoV1StorageclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.storageclasses[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisStorageK8sIoV1StorageclassesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$patch']
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
  const mutationDefaults = getPatchApisStorageK8sIoV1StorageclassesNameMutationOptions<
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

export function getApisStorageK8sIoV1VolumeattachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments', toValue(args)] as const
}

export function getApisStorageK8sIoV1VolumeattachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1VolumeattachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1Volumeattachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1VolumeattachmentsQueryKey>
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
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1VolumeattachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1VolumeattachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisStorageK8sIoV1VolumeattachmentsMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments', 'POST'] as const
}

export function getPostApisStorageK8sIoV1VolumeattachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisStorageK8sIoV1VolumeattachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$post']
      >,
    ) {
      return parseResponse(client.apis['storage.k8s.io'].v1.volumeattachments.$post(args, options))
    },
  })
}

export function usePostApisStorageK8sIoV1Volumeattachments<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$post']
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
  const mutationDefaults = getPostApisStorageK8sIoV1VolumeattachmentsMutationOptions<
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

export function getDeleteApisStorageK8sIoV1VolumeattachmentsMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments', 'DELETE'] as const
}

export function getDeleteApisStorageK8sIoV1VolumeattachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStorageK8sIoV1VolumeattachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattachments.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisStorageK8sIoV1Volumeattachments<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$delete']
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
  const mutationDefaults = getDeleteApisStorageK8sIoV1VolumeattachmentsMutationOptions<
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

export function getApisStorageK8sIoV1VolumeattachmentsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name', toValue(args)] as const
}

export function getApisStorageK8sIoV1VolumeattachmentsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1VolumeattachmentsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1VolumeattachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1VolumeattachmentsNameQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1VolumeattachmentsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1VolumeattachmentsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisStorageK8sIoV1VolumeattachmentsNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name', 'PUT'] as const
}

export function getPutApisStorageK8sIoV1VolumeattachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisStorageK8sIoV1VolumeattachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisStorageK8sIoV1VolumeattachmentsName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$put']
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
  const mutationDefaults = getPutApisStorageK8sIoV1VolumeattachmentsNameMutationOptions<
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

export function getDeleteApisStorageK8sIoV1VolumeattachmentsNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name', 'DELETE'] as const
}

export function getDeleteApisStorageK8sIoV1VolumeattachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStorageK8sIoV1VolumeattachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisStorageK8sIoV1VolumeattachmentsName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisStorageK8sIoV1VolumeattachmentsNameMutationOptions<
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

export function getPatchApisStorageK8sIoV1VolumeattachmentsNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name', 'PATCH'] as const
}

export function getPatchApisStorageK8sIoV1VolumeattachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisStorageK8sIoV1VolumeattachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisStorageK8sIoV1VolumeattachmentsName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$patch']
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
  const mutationDefaults = getPatchApisStorageK8sIoV1VolumeattachmentsNameMutationOptions<
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

export function getApisStorageK8sIoV1VolumeattachmentsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name/status', toValue(args)] as const
}

export function getApisStorageK8sIoV1VolumeattachmentsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1VolumeattachmentsNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattachments[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1VolumeattachmentsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1VolumeattachmentsNameStatusQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1VolumeattachmentsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1VolumeattachmentsNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattachments[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisStorageK8sIoV1VolumeattachmentsNameStatusMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name/status', 'PUT'] as const
}

export function getPutApisStorageK8sIoV1VolumeattachmentsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisStorageK8sIoV1VolumeattachmentsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattachments[':name'].status.$put(args, options),
      )
    },
  })
}

export function usePutApisStorageK8sIoV1VolumeattachmentsNameStatus<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$put']
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
  const mutationDefaults = getPutApisStorageK8sIoV1VolumeattachmentsNameStatusMutationOptions<
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

export function getPatchApisStorageK8sIoV1VolumeattachmentsNameStatusMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name/status', 'PATCH'] as const
}

export function getPatchApisStorageK8sIoV1VolumeattachmentsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisStorageK8sIoV1VolumeattachmentsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattachments[':name'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisStorageK8sIoV1VolumeattachmentsNameStatus<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$patch']
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
  const mutationDefaults = getPatchApisStorageK8sIoV1VolumeattachmentsNameStatusMutationOptions<
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

export function getApisStorageK8sIoV1VolumeattributesclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses', toValue(args)] as const
}

export function getApisStorageK8sIoV1VolumeattributesclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1VolumeattributesclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattributesclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1Volumeattributesclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1VolumeattributesclassesQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1VolumeattributesclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1VolumeattributesclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattributesclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisStorageK8sIoV1VolumeattributesclassesMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses', 'POST'] as const
}

export function getPostApisStorageK8sIoV1VolumeattributesclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisStorageK8sIoV1VolumeattributesclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattributesclasses.$post(args, options),
      )
    },
  })
}

export function usePostApisStorageK8sIoV1Volumeattributesclasses<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$post']
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
  const mutationDefaults = getPostApisStorageK8sIoV1VolumeattributesclassesMutationOptions<
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

export function getDeleteApisStorageK8sIoV1VolumeattributesclassesMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses', 'DELETE'] as const
}

export function getDeleteApisStorageK8sIoV1VolumeattributesclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStorageK8sIoV1VolumeattributesclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattributesclasses.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisStorageK8sIoV1Volumeattributesclasses<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$delete']
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
  const mutationDefaults = getDeleteApisStorageK8sIoV1VolumeattributesclassesMutationOptions<
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

export function getApisStorageK8sIoV1VolumeattributesclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses/:name', toValue(args)] as const
}

export function getApisStorageK8sIoV1VolumeattributesclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1VolumeattributesclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1VolumeattributesclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1VolumeattributesclassesNameQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1VolumeattributesclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1VolumeattributesclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisStorageK8sIoV1VolumeattributesclassesNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses/:name', 'PUT'] as const
}

export function getPutApisStorageK8sIoV1VolumeattributesclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisStorageK8sIoV1VolumeattributesclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisStorageK8sIoV1VolumeattributesclassesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$put']
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
  const mutationDefaults = getPutApisStorageK8sIoV1VolumeattributesclassesNameMutationOptions<
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

export function getDeleteApisStorageK8sIoV1VolumeattributesclassesNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses/:name', 'DELETE'] as const
}

export function getDeleteApisStorageK8sIoV1VolumeattributesclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStorageK8sIoV1VolumeattributesclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisStorageK8sIoV1VolumeattributesclassesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisStorageK8sIoV1VolumeattributesclassesNameMutationOptions<
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

export function getPatchApisStorageK8sIoV1VolumeattributesclassesNameMutationKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses/:name', 'PATCH'] as const
}

export function getPatchApisStorageK8sIoV1VolumeattributesclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisStorageK8sIoV1VolumeattributesclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisStorageK8sIoV1VolumeattributesclassesName<
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
                    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$patch']
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
  const mutationDefaults = getPatchApisStorageK8sIoV1VolumeattributesclassesNameMutationOptions<
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

export function getApisStorageK8sIoV1WatchCsidriversQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']>
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/csidrivers', toValue(args)] as const
}

export function getApisStorageK8sIoV1WatchCsidriversQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1WatchCsidriversQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.csidrivers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchCsidrivers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']>
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1WatchCsidriversQueryKey>
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
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchCsidriversQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1WatchCsidriversQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.csidrivers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchCsidriversNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/csidrivers/:name', toValue(args)] as const
}

export function getApisStorageK8sIoV1WatchCsidriversNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1WatchCsidriversNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.csidrivers[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchCsidriversName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1WatchCsidriversNameQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchCsidriversNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1WatchCsidriversNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.csidrivers[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchCsinodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/csinodes', toValue(args)] as const
}

export function getApisStorageK8sIoV1WatchCsinodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1WatchCsinodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.csinodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchCsinodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1WatchCsinodesQueryKey>
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
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchCsinodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1WatchCsinodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.csinodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchCsinodesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/csinodes/:name', toValue(args)] as const
}

export function getApisStorageK8sIoV1WatchCsinodesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1WatchCsinodesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.csinodes[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchCsinodesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1WatchCsinodesNameQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchCsinodesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1WatchCsinodesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.csinodes[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchCsistoragecapacitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/csistoragecapacities', toValue(args)] as const
}

export function getApisStorageK8sIoV1WatchCsistoragecapacitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1WatchCsistoragecapacitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.csistoragecapacities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchCsistoragecapacities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1WatchCsistoragecapacitiesQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchCsistoragecapacitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1WatchCsistoragecapacitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.csistoragecapacities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities',
    toValue(args),
  ] as const
}

export function getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.namespaces[':namespace'].csistoragecapacities.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesQueryKey
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
              (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.namespaces[':namespace'].csistoragecapacities.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities/:name',
    toValue(args),
  ] as const
}

export function getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.namespaces[':namespace'].csistoragecapacities[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameQueryKey
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
              (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.namespaces[':namespace'].csistoragecapacities[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchStorageclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/storageclasses', toValue(args)] as const
}

export function getApisStorageK8sIoV1WatchStorageclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1WatchStorageclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.storageclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchStorageclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1WatchStorageclassesQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchStorageclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1WatchStorageclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.storageclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchStorageclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/storageclasses/:name', toValue(args)] as const
}

export function getApisStorageK8sIoV1WatchStorageclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1WatchStorageclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.storageclasses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchStorageclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1WatchStorageclassesNameQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchStorageclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1WatchStorageclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.storageclasses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchVolumeattachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/volumeattachments', toValue(args)] as const
}

export function getApisStorageK8sIoV1WatchVolumeattachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1WatchVolumeattachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.volumeattachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchVolumeattachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1WatchVolumeattachmentsQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchVolumeattachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1WatchVolumeattachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.volumeattachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchVolumeattachmentsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/volumeattachments/:name', toValue(args)] as const
}

export function getApisStorageK8sIoV1WatchVolumeattachmentsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1WatchVolumeattachmentsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.volumeattachments[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchVolumeattachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1WatchVolumeattachmentsNameQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchVolumeattachmentsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1WatchVolumeattachmentsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.volumeattachments[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchVolumeattributesclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
    >
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/volumeattributesclasses', toValue(args)] as const
}

export function getApisStorageK8sIoV1WatchVolumeattributesclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1WatchVolumeattributesclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.volumeattributesclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchVolumeattributesclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1WatchVolumeattributesclassesQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchVolumeattributesclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1WatchVolumeattributesclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.volumeattributesclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStorageK8sIoV1WatchVolumeattributesclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/watch/volumeattributesclasses/:name',
    toValue(args),
  ] as const
}

export function getApisStorageK8sIoV1WatchVolumeattributesclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStorageK8sIoV1WatchVolumeattributesclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storage.k8s.io'].v1.watch.volumeattributesclasses[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisStorageK8sIoV1WatchVolumeattributesclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
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
                    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStorageK8sIoV1WatchVolumeattributesclassesNameQueryKey>
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
              (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStorageK8sIoV1WatchVolumeattributesclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisStorageK8sIoV1WatchVolumeattributesclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storage.k8s.io'].v1.watch.volumeattributesclasses[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
