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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>>,
) {
  return ['accounts', '/accounts/:account_id/apps', toValue(args)] as const
}

export function getAccountsAccountIdAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account_id'].apps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdAppsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account_id'].apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>>,
) {
  return ['apps', '/apps/:app_id/keys', toValue(args)] as const
}

export function getAppsAppIdKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_id'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_id'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>>,
) {
  return ['apps', '/apps/:app_id/namespaces', toValue(args)] as const
}

export function getAppsAppIdNamespacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdNamespacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_id'].namespaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdNamespacesQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdNamespacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdNamespacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_id'].namespaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$delete']
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$patch']
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>>,
) {
  return ['apps', '/apps/:app_id/queues', toValue(args)] as const
}

export function getAppsAppIdQueuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQueuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_id'].queues.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdQueuesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQueuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQueuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_id'].queues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>>,
) {
  return ['apps', '/apps/:app_id/rules', toValue(args)] as const
}

export function getAppsAppIdRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_id'].rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_id'].rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>
  >,
) {
  return ['apps', '/apps/:app_id/rules/:rule_id', toValue(args)] as const
}

export function getAppsAppIdRulesRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdRulesRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_id'].rules[':rule_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdRulesRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRulesRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdRulesRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_id'].rules[':rule_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}
