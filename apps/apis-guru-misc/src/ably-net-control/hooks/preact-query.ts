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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAppsKey() {
  return ['apps'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getAccountsAccountIdAppsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>,
) {
  return ['accounts', '/accounts/:account_id/apps', args] as const
}

export function getAccountsAccountIdAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAppsQueryKey>
  >({
    queryKey: getAccountsAccountIdAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account_id'].apps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsAccountIdApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAppsQueryKey>
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
      ...getAccountsAccountIdAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAppsQueryKey>
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
      ...getAccountsAccountIdAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdAppsMutationKey() {
  return ['accounts', '/accounts/:account_id/apps', 'POST'] as const
}

export function getPostAccountsAccountIdAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['apps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':account_id']['apps']['$post']>,
    ) {
      return parseResponse(client.accounts[':account_id'].apps.$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':account_id']['apps']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdAppsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppsAppIdKeysQueryKey(
  args: InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>,
) {
  return ['apps', '/apps/:app_id/keys', args] as const
}

export function getAppsAppIdKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdKeysQueryKey>
  >({
    queryKey: getAppsAppIdKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_id'].keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppsAppIdKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdKeysMutationKey() {
  return ['apps', '/apps/:app_id/keys', 'POST'] as const
}

export function getPostAppsAppIdKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_id']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':app_id']['keys']['$post']>) {
      return parseResponse(client.apps[':app_id'].keys.$post(args, options))
    },
  })
}

export function usePostAppsAppIdKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_id']['keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAppsAppIdKeysKeyIdMutationKey() {
  return ['apps', '/apps/:app_id/keys/:key_id', 'PATCH'] as const
}

export function getPatchAppsAppIdKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['keys'][':key_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_id']['keys'][':key_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAppsAppIdKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':app_id']['keys'][':key_id']['$patch']>,
    ) {
      return parseResponse(client.apps[':app_id'].keys[':key_id'].$patch(args, options))
    },
  })
}

export function usePatchAppsAppIdKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['keys'][':key_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_id']['keys'][':key_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAppsAppIdKeysKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsAppIdKeysKeyIdRevokeMutationKey() {
  return ['apps', '/apps/:app_id/keys/:key_id/revoke', 'POST'] as const
}

export function getPostAppsAppIdKeysKeyIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['keys'][':key_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_id']['keys'][':key_id']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdKeysKeyIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':app_id']['keys'][':key_id']['revoke']['$post']>,
    ) {
      return parseResponse(client.apps[':app_id'].keys[':key_id'].revoke.$post(args, options))
    },
  })
}

export function usePostAppsAppIdKeysKeyIdRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':app_id']['keys'][':key_id']['revoke']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_id']['keys'][':key_id']['revoke']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdKeysKeyIdRevokeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppsAppIdNamespacesQueryKey(
  args: InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>,
) {
  return ['apps', '/apps/:app_id/namespaces', args] as const
}

export function getAppsAppIdNamespacesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdNamespacesQueryKey>
  >({
    queryKey: getAppsAppIdNamespacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_id'].namespaces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdNamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdNamespacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdNamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdNamespacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdNamespacesMutationKey() {
  return ['apps', '/apps/:app_id/namespaces', 'POST'] as const
}

export function getPostAppsAppIdNamespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdNamespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$post']>,
    ) {
      return parseResponse(client.apps[':app_id'].namespaces.$post(args, options))
    },
  })
}

export function usePostAppsAppIdNamespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdNamespacesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAppsAppIdNamespacesNamespaceIdMutationKey() {
  return ['apps', '/apps/:app_id/namespaces/:namespace_id', 'DELETE'] as const
}

export function getDeleteAppsAppIdNamespacesNamespaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdNamespacesNamespaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.apps[':app_id'].namespaces[':namespace_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAppsAppIdNamespacesNamespaceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdNamespacesNamespaceIdMutationOptions<
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

export function getPatchAppsAppIdNamespacesNamespaceIdMutationKey() {
  return ['apps', '/apps/:app_id/namespaces/:namespace_id', 'PATCH'] as const
}

export function getPatchAppsAppIdNamespacesNamespaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAppsAppIdNamespacesNamespaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$patch']
      >,
    ) {
      return parseResponse(client.apps[':app_id'].namespaces[':namespace_id'].$patch(args, options))
    },
  })
}

export function usePatchAppsAppIdNamespacesNamespaceId<
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
                ReturnType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAppsAppIdNamespacesNamespaceIdMutationOptions<
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

export function getAppsAppIdQueuesQueryKey(
  args: InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>,
) {
  return ['apps', '/apps/:app_id/queues', args] as const
}

export function getAppsAppIdQueuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQueuesQueryKey>
  >({
    queryKey: getAppsAppIdQueuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_id'].queues.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQueuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdQueuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQueuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdQueuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdQueuesMutationKey() {
  return ['apps', '/apps/:app_id/queues', 'POST'] as const
}

export function getPostAppsAppIdQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_id']['queues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQueuesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':app_id']['queues']['$post']>) {
      return parseResponse(client.apps[':app_id'].queues.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_id']['queues']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQueuesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAppsAppIdQueuesQueueIdMutationKey() {
  return ['apps', '/apps/:app_id/queues/:queue_id', 'DELETE'] as const
}

export function getDeleteAppsAppIdQueuesQueueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['queues'][':queue_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.apps)[':app_id']['queues'][':queue_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdQueuesQueueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':app_id']['queues'][':queue_id']['$delete']>,
    ) {
      return parseResponse(client.apps[':app_id'].queues[':queue_id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdQueuesQueueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':app_id']['queues'][':queue_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.apps)[':app_id']['queues'][':queue_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdQueuesQueueIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppsAppIdRulesQueryKey(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>,
) {
  return ['apps', '/apps/:app_id/rules', args] as const
}

export function getAppsAppIdRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRulesQueryKey>
  >({
    queryKey: getAppsAppIdRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_id'].rules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppsAppIdRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdRulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdRulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdRulesMutationKey() {
  return ['apps', '/apps/:app_id/rules', 'POST'] as const
}

export function getPostAppsAppIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_id']['rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdRulesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':app_id']['rules']['$post']>) {
      return parseResponse(client.apps[':app_id'].rules.$post(args, options))
    },
  })
}

export function usePostAppsAppIdRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_id']['rules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdRulesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppsAppIdRulesRuleIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>,
) {
  return ['apps', '/apps/:app_id/rules/:rule_id', args] as const
}

export function getAppsAppIdRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRulesRuleIdQueryKey>
  >({
    queryKey: getAppsAppIdRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_id'].rules[':rule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRulesRuleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdRulesRuleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRulesRuleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdRulesRuleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAppsAppIdRulesRuleIdMutationKey() {
  return ['apps', '/apps/:app_id/rules/:rule_id', 'DELETE'] as const
}

export function getDeleteAppsAppIdRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$delete']>,
    ) {
      return parseResponse(client.apps[':app_id'].rules[':rule_id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdRulesRuleIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAppsAppIdRulesRuleIdMutationKey() {
  return ['apps', '/apps/:app_id/rules/:rule_id', 'PATCH'] as const
}

export function getPatchAppsAppIdRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAppsAppIdRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$patch']>,
    ) {
      return parseResponse(client.apps[':app_id'].rules[':rule_id'].$patch(args, options))
    },
  })
}

export function usePatchAppsAppIdRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAppsAppIdRulesRuleIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAppsIdMutationKey() {
  return ['apps', '/apps/:id', 'DELETE'] as const
}

export function getDeleteAppsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.apps)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':id']['$delete']>) {
      return parseResponse(client.apps[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.apps)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAppsIdMutationKey() {
  return ['apps', '/apps/:id', 'PATCH'] as const
}

export function getPatchAppsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.apps)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAppsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':id']['$patch']>) {
      return parseResponse(client.apps[':id'].$patch(args, options))
    },
  })
}

export function usePatchAppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAppsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsIdPkcs12MutationKey() {
  return ['apps', '/apps/:id/pkcs12', 'POST'] as const
}

export function getPostAppsIdPkcs12MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':id']['pkcs12']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':id']['pkcs12']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsIdPkcs12MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':id']['pkcs12']['$post']>) {
      return parseResponse(client.apps[':id'].pkcs12.$post(args, options))
    },
  })
}

export function usePostAppsIdPkcs12<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':id']['pkcs12']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':id']['pkcs12']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsIdPkcs12MutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
