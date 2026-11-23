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

export function getApisPolicyV1IndexQueryKey() {
  return ['apis', '/apis/policy/v1/'] as const
}

export function getApisPolicyV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApisPolicyV1IndexQueryKey>
  >({
    queryKey: getApisPolicyV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.policy.v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisPolicyV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisPolicyV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApisPolicyV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApisPolicyV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisPolicyV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApisPolicyV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryKey(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
) {
  return ['apis', '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', args] as const
}

export function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryKey>
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
      ...getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisPolicyV1NamespacesNamespacePoddisruptionbudgets<
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', args] as const
}

export function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameQueryKey>
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
      ...getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName<
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status',
    args,
  ] as const
}

export function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].status.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusQueryKey>
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
      ...getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatus<
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>,
) {
  return ['apis', '/apis/policy/v1/poddisruptionbudgets', args] as const
}

export function getApisPolicyV1PoddisruptionbudgetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisPolicyV1PoddisruptionbudgetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.policy.v1.poddisruptionbudgets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisPolicyV1PoddisruptionbudgetsQueryKey>
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
      ...getApisPolicyV1PoddisruptionbudgetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisPolicyV1Poddisruptionbudgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisPolicyV1PoddisruptionbudgetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryKey(
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
) {
  return ['apis', '/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets', args] as const
}

export function getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryKey>
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
      ...getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgets<
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name',
    args,
  ] as const
}

export function getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryKey>
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
      ...getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsName<
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
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisPolicyV1WatchPoddisruptionbudgetsQueryKey(
  args: InferRequestType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>,
) {
  return ['apis', '/apis/policy/v1/watch/poddisruptionbudgets', args] as const
}

export function getApisPolicyV1WatchPoddisruptionbudgetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisPolicyV1WatchPoddisruptionbudgetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.policy.v1.watch.poddisruptionbudgets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisPolicyV1WatchPoddisruptionbudgetsQueryKey>
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
      ...getApisPolicyV1WatchPoddisruptionbudgetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisPolicyV1WatchPoddisruptionbudgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getApisPolicyV1WatchPoddisruptionbudgetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
