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

export function getInstancesKey() {
  return ['instances'] as const
}

export function getOrgStackRegionsKey() {
  return ['org-stack-regions'] as const
}

export function getOrgsKey() {
  return ['orgs'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getPluginsMarketplaceKey() {
  return ['plugins-marketplace'] as const
}

export function getStackRegionsKey() {
  return ['stack-regions'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getInstancesQueryKey(args: InferRequestType<typeof client.instances.$get>) {
  return ['instances', '/instances', args] as const
}

export function getInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.instances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInstancesQueryKey>
  >({
    queryKey: getInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInstancesMutationKey() {
  return ['instances', '/instances', 'POST'] as const
}

export function getPostInstancesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$post>>>>>,
    TError,
    InferRequestType<typeof client.instances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.instances.$post>) {
      return parseResponse(client.instances.$post(args, options))
    },
  })
}

export function usePostInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.instances.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstancesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInstancesInstanceIdQueryKey(
  args: InferRequestType<(typeof client.instances)[':instanceId']['$get']>,
) {
  return ['instances', '/instances/:instanceId', args] as const
}

export function getInstancesInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdQueryKey>
  >({
    queryKey: getInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':instanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesInstanceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesInstanceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInstancesInstanceIdMutationKey() {
  return ['instances', '/instances/:instanceId', 'POST'] as const
}

export function getPostInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':instanceId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':instanceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesInstanceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instances)[':instanceId']['$post']>) {
      return parseResponse(client.instances[':instanceId'].$post(args, options))
    },
  })
}

export function usePostInstancesInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':instanceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstancesInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInstancesInstanceIdMutationKey() {
  return ['instances', '/instances/:instanceId', 'DELETE'] as const
}

export function getDeleteInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':instanceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstancesInstanceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instances)[':instanceId']['$delete']>) {
      return parseResponse(client.instances[':instanceId'].$delete(args, options))
    },
  })
}

export function useDeleteInstancesInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':instanceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInstancesInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostInstancesInstanceIdApiServiceaccountsMutationKey() {
  return ['instances', '/instances/:instanceId/api/serviceaccounts', 'POST'] as const
}

export function getPostInstancesInstanceIdApiServiceaccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':instanceId']['api']['serviceaccounts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':instanceId']['api']['serviceaccounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesInstanceIdApiServiceaccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':instanceId']['api']['serviceaccounts']['$post']
      >,
    ) {
      return parseResponse(client.instances[':instanceId'].api.serviceaccounts.$post(args, options))
    },
  })
}

export function usePostInstancesInstanceIdApiServiceaccounts<
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
                  (typeof client.instances)[':instanceId']['api']['serviceaccounts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instances)[':instanceId']['api']['serviceaccounts']['$post']
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
  const mutationDefaults = getPostInstancesInstanceIdApiServiceaccountsMutationOptions<
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

export function getInstancesInstanceIdApiServiceaccountsSearchQueryKey(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
  >,
) {
  return ['instances', '/instances/:instanceId/api/serviceaccounts/search', args] as const
}

export function getInstancesInstanceIdApiServiceaccountsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdApiServiceaccountsSearchQueryKey>
  >({
    queryKey: getInstancesInstanceIdApiServiceaccountsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':instanceId'].api.serviceaccounts.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesInstanceIdApiServiceaccountsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdApiServiceaccountsSearchQueryKey>
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
      ...getInstancesInstanceIdApiServiceaccountsSearchQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesInstanceIdApiServiceaccountsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdApiServiceaccountsSearchQueryKey>
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
      ...getInstancesInstanceIdApiServiceaccountsSearchQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
  >,
) {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId',
    args,
  ] as const
}

export function getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryKey>
  >({
    queryKey: getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesInstanceIdApiServiceaccountsServiceAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryKey>
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
      ...getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesInstanceIdApiServiceaccountsServiceAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryKey>
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
      ...getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdMutationKey() {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId',
    'DELETE',
  ] as const
}

export function getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$delete']
      >,
    ) {
      return parseResponse(
        client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteInstancesInstanceIdApiServiceaccountsServiceAccountId<
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
                  (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$delete']
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
    getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdMutationOptions<
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

export function getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryKey(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
  >,
) {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId/tokens',
    args,
  ] as const
}

export function getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryKey>
  >({
    queryKey: getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesInstanceIdApiServiceaccountsServiceAccountIdTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryKey>
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
      ...getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesInstanceIdApiServiceaccountsServiceAccountIdTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryKey>
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
      ...getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensMutationKey() {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId/tokens',
    'POST',
  ] as const
}

export function getPostInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$post']
      >,
    ) {
      return parseResponse(
        client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostInstancesInstanceIdApiServiceaccountsServiceAccountIdTokens<
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
                  (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$post']
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
    getPostInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensMutationOptions<
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

export function getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenIdMutationKey() {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId/tokens/:tokenId',
    'DELETE',
  ] as const
}

export function getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
      >,
    ) {
      return parseResponse(
        client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens[
          ':tokenId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenId<
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
                  (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
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
    getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenIdMutationOptions<
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

export function getInstancesInstanceIdPluginsQueryKey(
  args: InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$get']>,
) {
  return ['instances', '/instances/:instanceId/plugins', args] as const
}

export function getInstancesInstanceIdPluginsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdPluginsQueryKey>
  >({
    queryKey: getInstancesInstanceIdPluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':instanceId'].plugins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesInstanceIdPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdPluginsQueryKey>
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
      ...getInstancesInstanceIdPluginsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesInstanceIdPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdPluginsQueryKey>
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
      ...getInstancesInstanceIdPluginsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInstancesInstanceIdPluginsMutationKey() {
  return ['instances', '/instances/:instanceId/plugins', 'POST'] as const
}

export function getPostInstancesInstanceIdPluginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesInstanceIdPluginsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$post']>,
    ) {
      return parseResponse(client.instances[':instanceId'].plugins.$post(args, options))
    },
  })
}

export function usePostInstancesInstanceIdPlugins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstancesInstanceIdPluginsMutationOptions<
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

export function getInstancesInstanceIdPluginsPluginSlugOrIdQueryKey(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
  >,
) {
  return ['instances', '/instances/:instanceId/plugins/:pluginSlugOrId', args] as const
}

export function getInstancesInstanceIdPluginsPluginSlugOrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdPluginsPluginSlugOrIdQueryKey>
  >({
    queryKey: getInstancesInstanceIdPluginsPluginSlugOrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':instanceId'].plugins[':pluginSlugOrId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesInstanceIdPluginsPluginSlugOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdPluginsPluginSlugOrIdQueryKey>
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
      ...getInstancesInstanceIdPluginsPluginSlugOrIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesInstanceIdPluginsPluginSlugOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdPluginsPluginSlugOrIdQueryKey>
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
      ...getInstancesInstanceIdPluginsPluginSlugOrIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInstancesInstanceIdPluginsPluginSlugOrIdMutationKey() {
  return ['instances', '/instances/:instanceId/plugins/:pluginSlugOrId', 'POST'] as const
}

export function getPostInstancesInstanceIdPluginsPluginSlugOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesInstanceIdPluginsPluginSlugOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$post']
      >,
    ) {
      return parseResponse(
        client.instances[':instanceId'].plugins[':pluginSlugOrId'].$post(args, options),
      )
    },
  })
}

export function usePostInstancesInstanceIdPluginsPluginSlugOrId<
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
                  (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$post']
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
  const mutationDefaults = getPostInstancesInstanceIdPluginsPluginSlugOrIdMutationOptions<
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

export function getDeleteInstancesInstanceIdPluginsPluginSlugOrIdMutationKey() {
  return ['instances', '/instances/:instanceId/plugins/:pluginSlugOrId', 'DELETE'] as const
}

export function getDeleteInstancesInstanceIdPluginsPluginSlugOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstancesInstanceIdPluginsPluginSlugOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$delete']
      >,
    ) {
      return parseResponse(
        client.instances[':instanceId'].plugins[':pluginSlugOrId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteInstancesInstanceIdPluginsPluginSlugOrId<
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
                  (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$delete']
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
  const mutationDefaults = getDeleteInstancesInstanceIdPluginsPluginSlugOrIdMutationOptions<
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

export function getInstancesInstanceIdReadinessQueryKey(
  args: InferRequestType<(typeof client.instances)[':instanceId']['readiness']['$get']>,
) {
  return ['instances', '/instances/:instanceId/readiness', args] as const
}

export function getInstancesInstanceIdReadinessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['readiness']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdReadinessQueryKey>
  >({
    queryKey: getInstancesInstanceIdReadinessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':instanceId'].readiness.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesInstanceIdReadiness<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['readiness']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdReadinessQueryKey>
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
      ...getInstancesInstanceIdReadinessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesInstanceIdReadiness<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['readiness']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdReadinessQueryKey>
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
      ...getInstancesInstanceIdReadinessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrgStackRegionsQueryKey(
  args: InferRequestType<(typeof client)['org-stack-regions']['$get']>,
) {
  return ['org-stack-regions', '/org-stack-regions', args] as const
}

export function getOrgStackRegionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['org-stack-regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgStackRegionsQueryKey>
  >({
    queryKey: getOrgStackRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['org-stack-regions'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrgStackRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['org-stack-regions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgStackRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgStackRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgStackRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['org-stack-regions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgStackRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgStackRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrgsOrgSlugOrIdBilledUsageQueryKey(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>,
) {
  return ['orgs', '/orgs/:orgSlugOrId/billed-usage', args] as const
}

export function getOrgsOrgSlugOrIdBilledUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgSlugOrIdBilledUsageQueryKey>
  >({
    queryKey: getOrgsOrgSlugOrIdBilledUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':orgSlugOrId']['billed-usage'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgsOrgSlugOrIdBilledUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgSlugOrIdBilledUsageQueryKey>
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
      ...getOrgsOrgSlugOrIdBilledUsageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgsOrgSlugOrIdBilledUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgSlugOrIdBilledUsageQueryKey>
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
      ...getOrgsOrgSlugOrIdBilledUsageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrgsOrgSlugOrIdBilledUsageHistoryQueryKey(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>,
) {
  return ['orgs', '/orgs/:orgSlugOrId/billed-usage-history', args] as const
}

export function getOrgsOrgSlugOrIdBilledUsageHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgSlugOrIdBilledUsageHistoryQueryKey>
  >({
    queryKey: getOrgsOrgSlugOrIdBilledUsageHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':orgSlugOrId']['billed-usage-history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgsOrgSlugOrIdBilledUsageHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgSlugOrIdBilledUsageHistoryQueryKey>
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
      ...getOrgsOrgSlugOrIdBilledUsageHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgsOrgSlugOrIdBilledUsageHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgSlugOrIdBilledUsageHistoryQueryKey>
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
      ...getOrgsOrgSlugOrIdBilledUsageHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrgsOrgSlugInstancesQueryKey(
  args: InferRequestType<(typeof client.orgs)[':orgSlug']['instances']['$get']>,
) {
  return ['orgs', '/orgs/:orgSlug/instances', args] as const
}

export function getOrgsOrgSlugInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgSlug']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgSlugInstancesQueryKey>
  >({
    queryKey: getOrgsOrgSlugInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':orgSlug'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgsOrgSlugInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgSlug']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgSlugInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgsOrgSlugInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgsOrgSlugInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgSlug']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgSlugInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgsOrgSlugInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrgsSlugOrIdQueryKey(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['$get']>,
) {
  return ['orgs', '/orgs/:slugOrId', args] as const
}

export function getOrgsSlugOrIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsSlugOrIdQueryKey>
  >({
    queryKey: getOrgsSlugOrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':slugOrId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrgsSlugOrId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsSlugOrIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgsSlugOrIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgsSlugOrId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsSlugOrIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgsSlugOrIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrgsSlugOrIdCheckVisibilityQueryKey(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>,
) {
  return ['orgs', '/orgs/:slugOrId/check-visibility', args] as const
}

export function getOrgsSlugOrIdCheckVisibilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsSlugOrIdCheckVisibilityQueryKey>
  >({
    queryKey: getOrgsSlugOrIdCheckVisibilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':slugOrId']['check-visibility'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgsSlugOrIdCheckVisibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsSlugOrIdCheckVisibilityQueryKey>
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
      ...getOrgsSlugOrIdCheckVisibilityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgsSlugOrIdCheckVisibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsSlugOrIdCheckVisibilityQueryKey>
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
      ...getOrgsSlugOrIdCheckVisibilityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrgsSlugOrIdMembersQueryKey(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$get']>,
) {
  return ['orgs', '/orgs/:slugOrId/members', args] as const
}

export function getOrgsSlugOrIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsSlugOrIdMembersQueryKey>
  >({
    queryKey: getOrgsSlugOrIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':slugOrId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgsSlugOrIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsSlugOrIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgsSlugOrIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgsSlugOrIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsSlugOrIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgsSlugOrIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrgsSlugOrIdMembersMutationKey() {
  return ['orgs', '/orgs/:slugOrId/members', 'POST'] as const
}

export function getPostOrgsSlugOrIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsSlugOrIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$post']>,
    ) {
      return parseResponse(client.orgs[':slugOrId'].members.$post(args, options))
    },
  })
}

export function usePostOrgsSlugOrIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgsSlugOrIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getOrgsSlugOrIdMembersUsernameOrIdQueryKey(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>,
) {
  return ['orgs', '/orgs/:slugOrId/members/:usernameOrId', args] as const
}

export function getOrgsSlugOrIdMembersUsernameOrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsSlugOrIdMembersUsernameOrIdQueryKey>
  >({
    queryKey: getOrgsSlugOrIdMembersUsernameOrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':slugOrId'].members[':usernameOrId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgsSlugOrIdMembersUsernameOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsSlugOrIdMembersUsernameOrIdQueryKey>
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
      ...getOrgsSlugOrIdMembersUsernameOrIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgsSlugOrIdMembersUsernameOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsSlugOrIdMembersUsernameOrIdQueryKey>
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
      ...getOrgsSlugOrIdMembersUsernameOrIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrgsSlugOrIdMembersUsernameOrIdMutationKey() {
  return ['orgs', '/orgs/:slugOrId/members/:usernameOrId', 'POST'] as const
}

export function getPostOrgsSlugOrIdMembersUsernameOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsSlugOrIdMembersUsernameOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$post']
      >,
    ) {
      return parseResponse(client.orgs[':slugOrId'].members[':usernameOrId'].$post(args, options))
    },
  })
}

export function usePostOrgsSlugOrIdMembersUsernameOrId<
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
                ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgsSlugOrIdMembersUsernameOrIdMutationOptions<
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

export function getDeleteOrgsSlugOrIdMembersUsernameOrIdMutationKey() {
  return ['orgs', '/orgs/:slugOrId/members/:usernameOrId', 'DELETE'] as const
}

export function getDeleteOrgsSlugOrIdMembersUsernameOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgsSlugOrIdMembersUsernameOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$delete']
      >,
    ) {
      return parseResponse(client.orgs[':slugOrId'].members[':usernameOrId'].$delete(args, options))
    },
  })
}

export function useDeleteOrgsSlugOrIdMembersUsernameOrId<
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
                ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrgsSlugOrIdMembersUsernameOrIdMutationOptions<
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

export function getOrgsSlugOrIdSettingsQueryKey(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$get']>,
) {
  return ['orgs', '/orgs/:slugOrId/settings', args] as const
}

export function getOrgsSlugOrIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsSlugOrIdSettingsQueryKey>
  >({
    queryKey: getOrgsSlugOrIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':slugOrId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgsSlugOrIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsSlugOrIdSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgsSlugOrIdSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgsSlugOrIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsSlugOrIdSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgsSlugOrIdSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrgsSlugOrIdSettingsMutationKey() {
  return ['orgs', '/orgs/:slugOrId/settings', 'POST'] as const
}

export function getPostOrgsSlugOrIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsSlugOrIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$post']>,
    ) {
      return parseResponse(client.orgs[':slugOrId'].settings.$post(args, options))
    },
  })
}

export function usePostOrgsSlugOrIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgsSlugOrIdSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostPluginsMarketplaceLicensesRenewMutationKey() {
  return ['plugins-marketplace', '/plugins-marketplace/licenses/renew', 'POST'] as const
}

export function getPostPluginsMarketplaceLicensesRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['plugins-marketplace']['licenses']['renew']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['plugins-marketplace']['licenses']['renew']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPluginsMarketplaceLicensesRenewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['plugins-marketplace']['licenses']['renew']['$post']>,
    ) {
      return parseResponse(client['plugins-marketplace'].licenses.renew.$post(args, options))
    },
  })
}

export function usePostPluginsMarketplaceLicensesRenew<
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
                ReturnType<(typeof client)['plugins-marketplace']['licenses']['renew']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['plugins-marketplace']['licenses']['renew']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPluginsMarketplaceLicensesRenewMutationOptions<
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

export function getPluginsSlugQueryKey(
  args: InferRequestType<(typeof client.plugins)[':slug']['$get']>,
) {
  return ['plugins', '/plugins/:slug', args] as const
}

export function getPluginsSlugQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsSlugQueryKey>
  >({
    queryKey: getPluginsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plugins[':slug'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePluginsSlug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPluginsSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePluginsSlug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPluginsSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStackRegionsQueryKey(
  args: InferRequestType<(typeof client)['stack-regions']['$get']>,
) {
  return ['stack-regions', '/stack-regions', args] as const
}

export function getStackRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['stack-regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStackRegionsQueryKey>
  >({
    queryKey: getStackRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['stack-regions'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStackRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['stack-regions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStackRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStackRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStackRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['stack-regions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStackRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStackRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStackRegionsClosestQueryKey(
  args: InferRequestType<(typeof client)['stack-regions']['closest']['$get']>,
) {
  return ['stack-regions', '/stack-regions/closest', args] as const
}

export function getStackRegionsClosestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['stack-regions']['closest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStackRegionsClosestQueryKey>
  >({
    queryKey: getStackRegionsClosestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['stack-regions'].closest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStackRegionsClosest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['stack-regions']['closest']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStackRegionsClosestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStackRegionsClosestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStackRegionsClosest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['stack-regions']['closest']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStackRegionsClosestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStackRegionsClosestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AccesspoliciesQueryKey(
  args: InferRequestType<typeof client.v1.accesspolicies.$get>,
) {
  return ['v1', '/v1/accesspolicies', args] as const
}

export function getV1AccesspoliciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.accesspolicies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccesspoliciesQueryKey>
  >({
    queryKey: getV1AccesspoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accesspolicies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Accesspolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.accesspolicies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccesspoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AccesspoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Accesspolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.accesspolicies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccesspoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AccesspoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1AccesspoliciesMutationKey() {
  return ['v1', '/v1/accesspolicies', 'POST'] as const
}

export function getPostV1AccesspoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.accesspolicies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccesspoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.accesspolicies.$post>) {
      return parseResponse(client.v1.accesspolicies.$post(args, options))
    },
  })
}

export function usePostV1Accesspolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.accesspolicies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccesspoliciesMutationOptions<TError, TOnMutateResult>(
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

export function getV1AccesspoliciesConfigQueryKey(
  args: InferRequestType<typeof client.v1.accesspolicies.config.$get>,
) {
  return ['v1', '/v1/accesspolicies/config', args] as const
}

export function getV1AccesspoliciesConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.accesspolicies.config.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccesspoliciesConfigQueryKey>
  >({
    queryKey: getV1AccesspoliciesConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accesspolicies.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccesspoliciesConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.accesspolicies.config.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccesspoliciesConfigQueryKey>
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
      ...getV1AccesspoliciesConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AccesspoliciesConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.accesspolicies.config.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccesspoliciesConfigQueryKey>
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
      ...getV1AccesspoliciesConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AccesspoliciesIdQueryKey(
  args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$get']>,
) {
  return ['v1', '/v1/accesspolicies/:id', args] as const
}

export function getV1AccesspoliciesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccesspoliciesIdQueryKey>
  >({
    queryKey: getV1AccesspoliciesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accesspolicies[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AccesspoliciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccesspoliciesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AccesspoliciesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AccesspoliciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccesspoliciesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AccesspoliciesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1AccesspoliciesIdMutationKey() {
  return ['v1', '/v1/accesspolicies/:id', 'POST'] as const
}

export function getPostV1AccesspoliciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accesspolicies)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccesspoliciesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$post']>) {
      return parseResponse(client.v1.accesspolicies[':id'].$post(args, options))
    },
  })
}

export function usePostV1AccesspoliciesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.accesspolicies)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccesspoliciesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1AccesspoliciesIdMutationKey() {
  return ['v1', '/v1/accesspolicies/:id', 'DELETE'] as const
}

export function getDeleteV1AccesspoliciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accesspolicies)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccesspoliciesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$delete']>) {
      return parseResponse(client.v1.accesspolicies[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AccesspoliciesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.accesspolicies)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AccesspoliciesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1TokensQueryKey(args: InferRequestType<typeof client.v1.tokens.$get>) {
  return ['v1', '/v1/tokens', args] as const
}

export function getV1TokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.tokens.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TokensQueryKey>
  >({
    queryKey: getV1TokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Tokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.tokens.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1TokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Tokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.tokens.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1TokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1TokensMutationKey() {
  return ['v1', '/v1/tokens', 'POST'] as const
}

export function getPostV1TokensMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tokens.$post>) {
      return parseResponse(client.v1.tokens.$post(args, options))
    },
  })
}

export function usePostV1Tokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.tokens.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TokensMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1TokensIdQueryKey(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
) {
  return ['v1', '/v1/tokens/:id', args] as const
}

export function getV1TokensIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TokensIdQueryKey>
  >({
    queryKey: getV1TokensIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tokens[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1TokensId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TokensIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1TokensIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1TokensId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TokensIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1TokensIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1TokensIdMutationKey() {
  return ['v1', '/v1/tokens/:id', 'POST'] as const
}

export function getPostV1TokensIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tokens)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokensIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tokens)[':id']['$post']>) {
      return parseResponse(client.v1.tokens[':id'].$post(args, options))
    },
  })
}

export function usePostV1TokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tokens)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TokensIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1TokensIdMutationKey() {
  return ['v1', '/v1/tokens/:id', 'DELETE'] as const
}

export function getDeleteV1TokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tokens)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TokensIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tokens)[':id']['$delete']>) {
      return parseResponse(client.v1.tokens[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1TokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tokens)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TokensIdMutationOptions<TError, TOnMutateResult>(
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

export function getInstancesInstanceIdConnectionsQueryKey(
  args: InferRequestType<(typeof client.instances)[':instanceId']['connections']['$get']>,
) {
  return ['instances', '/instances/:instanceId/connections', args] as const
}

export function getInstancesInstanceIdConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdConnectionsQueryKey>
  >({
    queryKey: getInstancesInstanceIdConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':instanceId'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesInstanceIdConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['connections']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdConnectionsQueryKey>
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
      ...getInstancesInstanceIdConnectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesInstanceIdConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['connections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdConnectionsQueryKey>
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
      ...getInstancesInstanceIdConnectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1StacksQueryKey(args: InferRequestType<typeof client.v1.stacks.$get>) {
  return ['v1', '/v1/stacks', args] as const
}

export function getV1StacksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.stacks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1StacksQueryKey>
  >({
    queryKey: getV1StacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stacks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Stacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stacks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1StacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1StacksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Stacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stacks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1StacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1StacksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1StacksMutationKey() {
  return ['v1', '/v1/stacks', 'POST'] as const
}

export function getPostV1StacksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.stacks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StacksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.stacks.$post>) {
      return parseResponse(client.v1.stacks.$post(args, options))
    },
  })
}

export function usePostV1Stacks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.stacks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1StacksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1StacksCheckUrlMutationKey() {
  return ['v1', '/v1/stacks/checkUrl', 'POST'] as const
}

export function getPostV1StacksCheckUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.checkUrl.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.stacks.checkUrl.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StacksCheckUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.stacks.checkUrl.$post>) {
      return parseResponse(client.v1.stacks.checkUrl.$post(args, options))
    },
  })
}

export function usePostV1StacksCheckUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.checkUrl.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.stacks.checkUrl.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1StacksCheckUrlMutationOptions<TError, TOnMutateResult>(
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

export function getV1StacksIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$get']>,
) {
  return ['v1', '/v1/stacks/:idOrSlug', args] as const
}

export function getV1StacksIdOrSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StacksIdOrSlugQueryKey>
  >({
    queryKey: getV1StacksIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stacks[':idOrSlug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1StacksIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StacksIdOrSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1StacksIdOrSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1StacksIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StacksIdOrSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1StacksIdOrSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1StacksIdOrSlugMutationKey() {
  return ['v1', '/v1/stacks/:idOrSlug', 'POST'] as const
}

export function getPostV1StacksIdOrSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StacksIdOrSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$post']>) {
      return parseResponse(client.v1.stacks[':idOrSlug'].$post(args, options))
    },
  })
}

export function usePostV1StacksIdOrSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1StacksIdOrSlugMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1StacksIdOrSlugMutationKey() {
  return ['v1', '/v1/stacks/:idOrSlug', 'DELETE'] as const
}

export function getDeleteV1StacksIdOrSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1StacksIdOrSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$delete']>) {
      return parseResponse(client.v1.stacks[':idOrSlug'].$delete(args, options))
    },
  })
}

export function useDeleteV1StacksIdOrSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1StacksIdOrSlugMutationOptions<TError, TOnMutateResult>(
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

export function getV1StacksIdOrSlugConnectionsQueryKey(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>,
) {
  return ['v1', '/v1/stacks/:idOrSlug/connections', args] as const
}

export function getV1StacksIdOrSlugConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StacksIdOrSlugConnectionsQueryKey>
  >({
    queryKey: getV1StacksIdOrSlugConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stacks[':idOrSlug'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1StacksIdOrSlugConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StacksIdOrSlugConnectionsQueryKey>
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
      ...getV1StacksIdOrSlugConnectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1StacksIdOrSlugConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StacksIdOrSlugConnectionsQueryKey>
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
      ...getV1StacksIdOrSlugConnectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1StacksIdOrSlugReadinessQueryKey(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>,
) {
  return ['v1', '/v1/stacks/:idOrSlug/readiness', args] as const
}

export function getV1StacksIdOrSlugReadinessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StacksIdOrSlugReadinessQueryKey>
  >({
    queryKey: getV1StacksIdOrSlugReadinessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stacks[':idOrSlug'].readiness.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1StacksIdOrSlugReadiness<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StacksIdOrSlugReadinessQueryKey>
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
      ...getV1StacksIdOrSlugReadinessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1StacksIdOrSlugReadiness<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StacksIdOrSlugReadinessQueryKey>
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
      ...getV1StacksIdOrSlugReadinessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesInstanceIdUsersQueryKey(
  args: InferRequestType<(typeof client.instances)[':instanceId']['users']['$get']>,
) {
  return ['instances', '/instances/:instanceId/users', args] as const
}

export function getInstancesInstanceIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdUsersQueryKey>
  >({
    queryKey: getInstancesInstanceIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':instanceId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesInstanceIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdUsersQueryKey>
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
      ...getInstancesInstanceIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesInstanceIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesInstanceIdUsersQueryKey>
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
      ...getInstancesInstanceIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
