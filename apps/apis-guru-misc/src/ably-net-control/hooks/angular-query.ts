import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectAccountsAccountIdApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountIdAppsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAccountsAccountIdApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAccountIdAppsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAppsAppIdKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsAppIdKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAppsAppIdKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppsAppIdKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAppsAppIdKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAppsAppIdKeysKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAppsAppIdKeysKeyIdRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppsAppIdKeysKeyIdRevokeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAppsAppIdNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsAppIdNamespacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAppsAppIdNamespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppsAppIdNamespacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAppsAppIdNamespacesNamespaceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppsAppIdNamespacesNamespaceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAppsAppIdNamespacesNamespaceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAppsAppIdNamespacesNamespaceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAppsAppIdQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsAppIdQueuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAppsAppIdQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppsAppIdQueuesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAppsAppIdQueuesQueueId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppsAppIdQueuesQueueIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAppsAppIdRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsAppIdRulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAppsAppIdRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppsAppIdRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAppsAppIdRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAppsAppIdRulesRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteAppsAppIdRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppsAppIdRulesRuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAppsAppIdRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAppsAppIdRulesRuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAppsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAppsIdPkcs12<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppsIdPkcs12MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
