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

export function getApisPolicyV1IndexQueryKey() {
  return ['apis', '/apis/policy/v1/'] as const
}

export function getApisPolicyV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisPolicyV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.policy.v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisPolicyV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>
            >
          >,
          ReturnType<typeof getApisPolicyV1IndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApisPolicyV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisPolicyV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.policy.v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets',
    toValue(args),
  ] as const
}

export function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisPolicyV1NamespacesNamespacePoddisruptionbudgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryKey>
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
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisPolicyV1NamespacesNamespacePoddisruptionbudgetsMutationKey() {
  return ['apis', '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', 'POST'] as const
}

export function getPostApisPolicyV1NamespacesNamespacePoddisruptionbudgetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisPolicyV1NamespacesNamespacePoddisruptionbudgetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$post']
      >,
    ) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$post(args, options),
      )
    },
  })
}

export function usePostApisPolicyV1NamespacesNamespacePoddisruptionbudgets<
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$post']
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
    getPostApisPolicyV1NamespacesNamespacePoddisruptionbudgetsMutationOptions<
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

export function getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsMutationKey() {
  return ['apis', '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', 'DELETE'] as const
}

export function getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgets<
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$delete']
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
    getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsMutationOptions<
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

export function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name',
    toValue(args),
  ] as const
}

export function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameQueryKey>
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
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationKey() {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name',
    'PUT',
  ] as const
}

export function getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName<
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$put']
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
    getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationOptions<
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

export function getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationKey() {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName<
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$delete']
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
    getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationOptions<
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

export function getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationKey() {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name',
    'PATCH',
  ] as const
}

export function getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName<
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$patch']
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
    getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameMutationOptions<
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

export function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status',
    toValue(args),
  ] as const
}

export function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusQueryKey
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
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status',
    'PUT',
  ] as const
}

export function getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatus<
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$put']
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
    getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusMutationOptions<
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

export function getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatus<
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
                    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$patch']
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
    getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusMutationOptions<
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

export function getApisPolicyV1PoddisruptionbudgetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>,
) {
  return ['apis', '/apis/policy/v1/poddisruptionbudgets', toValue(args)] as const
}

export function getApisPolicyV1PoddisruptionbudgetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisPolicyV1PoddisruptionbudgetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.policy.v1.poddisruptionbudgets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisPolicyV1Poddisruptionbudgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>
              >
            >
          >,
          ReturnType<typeof getApisPolicyV1PoddisruptionbudgetsQueryKey>
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
          Awaited<ReturnType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisPolicyV1PoddisruptionbudgetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisPolicyV1PoddisruptionbudgetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.policy.v1.poddisruptionbudgets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets',
    toValue(args),
  ] as const
}

export function getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
                    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
                    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryKey>
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
              (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name',
    toValue(args),
  ] as const
}

export function getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
                    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
                    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryKey>
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
              (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisPolicyV1WatchPoddisruptionbudgetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>
  >,
) {
  return ['apis', '/apis/policy/v1/watch/poddisruptionbudgets', toValue(args)] as const
}

export function getApisPolicyV1WatchPoddisruptionbudgetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisPolicyV1WatchPoddisruptionbudgetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.policy.v1.watch.poddisruptionbudgets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisPolicyV1WatchPoddisruptionbudgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>>
              >
            >
          >,
          ReturnType<typeof getApisPolicyV1WatchPoddisruptionbudgetsQueryKey>
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
          Awaited<ReturnType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisPolicyV1WatchPoddisruptionbudgetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisPolicyV1WatchPoddisruptionbudgetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.policy.v1.watch.poddisruptionbudgets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
