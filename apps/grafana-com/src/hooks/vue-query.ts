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

export function getInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.instances.$get>>,
) {
  return ['instances', '/instances', toValue(args)] as const
}

export function getInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
          >,
          ReturnType<typeof getInstancesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.instances.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':instanceId']['$get']>>,
) {
  return ['instances', '/instances/:instanceId', toValue(args)] as const
}

export function getInstancesInstanceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':instanceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':instanceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instances)[':instanceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesInstanceIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':instanceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
    >
  >,
) {
  return ['instances', '/instances/:instanceId/api/serviceaccounts/search', toValue(args)] as const
}

export function getInstancesInstanceIdApiServiceaccountsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesInstanceIdApiServiceaccountsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':instanceId'].api.serviceaccounts.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
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
                    (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
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
                    (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesInstanceIdApiServiceaccountsSearchQueryKey>
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
              (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdApiServiceaccountsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesInstanceIdApiServiceaccountsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':instanceId'].api.serviceaccounts.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
    >
  >,
) {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId',
    toValue(args),
  ] as const
}

export function getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
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
                    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
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
                    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryKey>
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
              (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInstancesInstanceIdApiServiceaccountsServiceAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
    >
  >,
) {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId/tokens',
    toValue(args),
  ] as const
}

export function getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
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
                    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
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
                    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryKey>
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
              (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$get']>
  >,
) {
  return ['instances', '/instances/:instanceId/plugins', toValue(args)] as const
}

export function getInstancesInstanceIdPluginsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesInstanceIdPluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':instanceId'].plugins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesInstanceIdPluginsQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesInstanceIdPluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':instanceId'].plugins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']>
  >,
) {
  return ['instances', '/instances/:instanceId/plugins/:pluginSlugOrId', toValue(args)] as const
}

export function getInstancesInstanceIdPluginsPluginSlugOrIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesInstanceIdPluginsPluginSlugOrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':instanceId'].plugins[':pluginSlugOrId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']>
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
                    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
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
                    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInstancesInstanceIdPluginsPluginSlugOrIdQueryKey>
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
              (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdPluginsPluginSlugOrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesInstanceIdPluginsPluginSlugOrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':instanceId'].plugins[':pluginSlugOrId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['readiness']['$get']>
  >,
) {
  return ['instances', '/instances/:instanceId/readiness', toValue(args)] as const
}

export function getInstancesInstanceIdReadinessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['readiness']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesInstanceIdReadinessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':instanceId'].readiness.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['readiness']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesInstanceIdReadinessQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdReadinessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesInstanceIdReadinessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':instanceId'].readiness.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgStackRegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['org-stack-regions']['$get']>>,
) {
  return ['org-stack-regions', '/org-stack-regions', toValue(args)] as const
}

export function getOrgStackRegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['org-stack-regions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgStackRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['org-stack-regions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgStackRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['org-stack-regions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgStackRegionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgStackRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgStackRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['org-stack-regions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgsOrgSlugOrIdBilledUsageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>
  >,
) {
  return ['orgs', '/orgs/:orgSlugOrId/billed-usage', toValue(args)] as const
}

export function getOrgsOrgSlugOrIdBilledUsageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgSlugOrIdBilledUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':orgSlugOrId']['billed-usage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsOrgSlugOrIdBilledUsageQueryKey>
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
          Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgSlugOrIdBilledUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgSlugOrIdBilledUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':orgSlugOrId']['billed-usage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgsOrgSlugOrIdBilledUsageHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>
  >,
) {
  return ['orgs', '/orgs/:orgSlugOrId/billed-usage-history', toValue(args)] as const
}

export function getOrgsOrgSlugOrIdBilledUsageHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgSlugOrIdBilledUsageHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':orgSlugOrId']['billed-usage-history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrgsOrgSlugOrIdBilledUsageHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgSlugOrIdBilledUsageHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgSlugOrIdBilledUsageHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':orgSlugOrId']['billed-usage-history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgsOrgSlugInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>,
) {
  return ['orgs', '/orgs/:orgSlug/instances', toValue(args)] as const
}

export function getOrgsOrgSlugInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgSlugInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':orgSlug'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsOrgSlugInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgSlugInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgSlugInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':orgSlug'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgsSlugOrIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':slugOrId']['$get']>>,
) {
  return ['orgs', '/orgs/:slugOrId', toValue(args)] as const
}

export function getOrgsSlugOrIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':slugOrId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsSlugOrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':slugOrId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsSlugOrId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':slugOrId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>
            >
          >,
          ReturnType<typeof getOrgsSlugOrIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsSlugOrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsSlugOrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':slugOrId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgsSlugOrIdCheckVisibilityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>
  >,
) {
  return ['orgs', '/orgs/:slugOrId/check-visibility', toValue(args)] as const
}

export function getOrgsSlugOrIdCheckVisibilityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsSlugOrIdCheckVisibilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':slugOrId']['check-visibility'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsSlugOrIdCheckVisibilityQueryKey>
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
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsSlugOrIdCheckVisibilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsSlugOrIdCheckVisibilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':slugOrId']['check-visibility'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgsSlugOrIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$get']>>,
) {
  return ['orgs', '/orgs/:slugOrId/members', toValue(args)] as const
}

export function getOrgsSlugOrIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsSlugOrIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':slugOrId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsSlugOrIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsSlugOrIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsSlugOrIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':slugOrId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>
  >,
) {
  return ['orgs', '/orgs/:slugOrId/members/:usernameOrId', toValue(args)] as const
}

export function getOrgsSlugOrIdMembersUsernameOrIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsSlugOrIdMembersUsernameOrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':slugOrId'].members[':usernameOrId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrgsSlugOrIdMembersUsernameOrIdQueryKey>
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
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsSlugOrIdMembersUsernameOrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsSlugOrIdMembersUsernameOrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':slugOrId'].members[':usernameOrId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$delete']
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>,
) {
  return ['orgs', '/orgs/:slugOrId/settings', toValue(args)] as const
}

export function getOrgsSlugOrIdSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsSlugOrIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':slugOrId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsSlugOrIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsSlugOrIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsSlugOrIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':slugOrId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':slug']['$get']>>,
) {
  return ['plugins', '/plugins/:slug', toValue(args)] as const
}

export function getPluginsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePluginsSlug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>
            >
          >,
          ReturnType<typeof getPluginsSlugQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStackRegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stack-regions']['$get']>>,
) {
  return ['stack-regions', '/stack-regions', toValue(args)] as const
}

export function getStackRegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stack-regions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStackRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['stack-regions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStackRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stack-regions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>
            >
          >,
          ReturnType<typeof getStackRegionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStackRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStackRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['stack-regions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStackRegionsClosestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stack-regions']['closest']['$get']>>,
) {
  return ['stack-regions', '/stack-regions/closest', toValue(args)] as const
}

export function getStackRegionsClosestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stack-regions']['closest']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStackRegionsClosestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['stack-regions'].closest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStackRegionsClosest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stack-regions']['closest']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStackRegionsClosestQueryKey>
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
          Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStackRegionsClosestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStackRegionsClosestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['stack-regions'].closest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccesspoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accesspolicies.$get>>,
) {
  return ['v1', '/v1/accesspolicies', toValue(args)] as const
}

export function getV1AccesspoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accesspolicies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccesspoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accesspolicies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Accesspolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accesspolicies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>
            >
          >,
          ReturnType<typeof getV1AccesspoliciesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccesspoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccesspoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accesspolicies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accesspolicies.config.$get>>,
) {
  return ['v1', '/v1/accesspolicies/config', toValue(args)] as const
}

export function getV1AccesspoliciesConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accesspolicies.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccesspoliciesConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accesspolicies.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccesspoliciesConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accesspolicies.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
            >
          >,
          ReturnType<typeof getV1AccesspoliciesConfigQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccesspoliciesConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccesspoliciesConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accesspolicies.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccesspoliciesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accesspolicies)[':id']['$get']>>,
) {
  return ['v1', '/v1/accesspolicies/:id', toValue(args)] as const
}

export function getV1AccesspoliciesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accesspolicies)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccesspoliciesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accesspolicies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccesspoliciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accesspolicies)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccesspoliciesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccesspoliciesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccesspoliciesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accesspolicies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1TokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokens.$get>>,
) {
  return ['v1', '/v1/tokens', toValue(args)] as const
}

export function getV1TokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tokens.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Tokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
          >,
          ReturnType<typeof getV1TokensQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.tokens.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tokens)[':id']['$get']>>,
) {
  return ['v1', '/v1/tokens/:id', toValue(args)] as const
}

export function getV1TokensIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tokens)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TokensIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tokens[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TokensId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tokens)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1TokensIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TokensIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TokensIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tokens[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['connections']['$get']>
  >,
) {
  return ['instances', '/instances/:instanceId/connections', toValue(args)] as const
}

export function getInstancesInstanceIdConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['connections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesInstanceIdConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':instanceId'].connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['connections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesInstanceIdConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesInstanceIdConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':instanceId'].connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1StacksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.stacks.$get>>,
) {
  return ['v1', '/v1/stacks', toValue(args)] as const
}

export function getV1StacksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.stacks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1StacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.stacks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Stacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.stacks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>
          >,
          ReturnType<typeof getV1StacksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1StacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1StacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.stacks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.stacks.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>,
) {
  return ['v1', '/v1/stacks/:idOrSlug', toValue(args)] as const
}

export function getV1StacksIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1StacksIdOrSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.stacks[':idOrSlug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1StacksIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1StacksIdOrSlugQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StacksIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1StacksIdOrSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.stacks[':idOrSlug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>
  >,
) {
  return ['v1', '/v1/stacks/:idOrSlug/connections', toValue(args)] as const
}

export function getV1StacksIdOrSlugConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1StacksIdOrSlugConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.stacks[':idOrSlug'].connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1StacksIdOrSlugConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StacksIdOrSlugConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1StacksIdOrSlugConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.stacks[':idOrSlug'].connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1StacksIdOrSlugReadinessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>
  >,
) {
  return ['v1', '/v1/stacks/:idOrSlug/readiness', toValue(args)] as const
}

export function getV1StacksIdOrSlugReadinessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1StacksIdOrSlugReadinessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.stacks[':idOrSlug'].readiness.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1StacksIdOrSlugReadinessQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StacksIdOrSlugReadinessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1StacksIdOrSlugReadinessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.stacks[':idOrSlug'].readiness.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancesInstanceIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['users']['$get']>
  >,
) {
  return ['instances', '/instances/:instanceId/users', toValue(args)] as const
}

export function getInstancesInstanceIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancesInstanceIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instances[':instanceId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.instances)[':instanceId']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancesInstanceIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesInstanceIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancesInstanceIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instances[':instanceId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
