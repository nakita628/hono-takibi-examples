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

export function getAppsKey() {
  return ['apps'] as const
}

export function getCustomGatewayKey() {
  return ['custom-gateway'] as const
}

export function getDeveloperAccountsKey() {
  return ['developerAccounts'] as const
}

export function getDevelopersKey() {
  return ['developers'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getMarketsKey() {
  return ['markets'] as const
}

export function getOwnershipKey() {
  return ['ownership'] as const
}

export function getPermissionKey() {
  return ['permission'] as const
}

export function getReviewsKey() {
  return ['reviews'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getStripeGatewayKey() {
  return ['stripe-gateway'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
}

export function getUserAccountsKey() {
  return ['userAccounts'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getAppsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>) {
  return ['apps', '/apps', toValue(args)] as const
}

export function getAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
          ReturnType<typeof getAppsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppsMutationKey() {
  return ['apps', '/apps', 'POST'] as const
}

export function getPostAppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apps.$post>) {
      return parseResponse(client.apps.$post(args, options))
    },
  })
}

export function usePostApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
          TError,
          InferRequestType<typeof client.apps.$post>,
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
  const mutationDefaults = getPostAppsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppsBySafeNameSafeNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps.bySafeName)[':safeName']['$get']>>,
) {
  return ['apps', '/apps/bySafeName/:safeName', toValue(args)] as const
}

export function getAppsBySafeNameSafeNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps.bySafeName)[':safeName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsBySafeNameSafeNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.bySafeName[':safeName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsBySafeNameSafeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps.bySafeName)[':safeName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps.bySafeName)[':safeName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps.bySafeName)[':safeName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps.bySafeName)[':safeName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsBySafeNameSafeNameQueryKey>
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
          Awaited<ReturnType<(typeof client.apps.bySafeName)[':safeName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsBySafeNameSafeNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsBySafeNameSafeNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.bySafeName[':safeName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsTextSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.textSearch.$get>>,
) {
  return ['apps', '/apps/textSearch', toValue(args)] as const
}

export function getAppsTextSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.textSearch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsTextSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.textSearch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsTextSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.textSearch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>
            >
          >,
          ReturnType<typeof getAppsTextSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppsTextSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsTextSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.textSearch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.versions.$get>>,
) {
  return ['apps', '/apps/versions', toValue(args)] as const
}

export function getAppsVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.versions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.versions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
          >,
          ReturnType<typeof getAppsVersionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppsVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['$get']>>,
) {
  return ['apps', '/apps/:appId', toValue(args)] as const
}

export function getAppsAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
            >
          >,
          ReturnType<typeof getAppsAppIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAppsAppIdMutationKey() {
  return ['apps', '/apps/:appId', 'DELETE'] as const
}

export function getDeleteAppsAppIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['$delete']>) {
      return parseResponse(client.apps[':appId'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['$delete']>,
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
  const mutationDefaults = getDeleteAppsAppIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsAppIdLiveMutationKey() {
  return ['apps', '/apps/:appId/live', 'POST'] as const
}

export function getPostAppsAppIdLiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['live']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['live']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdLiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['live']['$post']>) {
      return parseResponse(client.apps[':appId'].live.$post(args, options))
    },
  })
}

export function usePostAppsAppIdLive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['live']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['live']['$post']>,
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
  const mutationDefaults = getPostAppsAppIdLiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdPublishMutationKey() {
  return ['apps', '/apps/:appId/publish', 'POST'] as const
}

export function getPostAppsAppIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdPublishMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['publish']['$post']>) {
      return parseResponse(client.apps[':appId'].publish.$post(args, options))
    },
  })
}

export function usePostAppsAppIdPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['publish']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['publish']['$post']>,
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
  const mutationDefaults = getPostAppsAppIdPublishMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/versions/:version', toValue(args)] as const
}

export function getAppsAppIdVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].versions[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdVersionsVersionQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdVersionsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].versions[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppsAppIdVersionsVersionMutationKey() {
  return ['apps', '/apps/:appId/versions/:version', 'POST'] as const
}

export function getPostAppsAppIdVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].versions[':version'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdVersionsVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$post']>,
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
  const mutationDefaults = getPostAppsAppIdVersionsVersionMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdVersionsVersionMutationKey() {
  return ['apps', '/apps/:appId/versions/:version', 'DELETE'] as const
}

export function getDeleteAppsAppIdVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].versions[':version'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdVersionsVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$delete']>,
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
  const mutationDefaults = getDeleteAppsAppIdVersionsVersionMutationOptions<
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

export function getPatchAppsAppIdVersionsVersionMutationKey() {
  return ['apps', '/apps/:appId/versions/:version', 'PATCH'] as const
}

export function getPatchAppsAppIdVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAppsAppIdVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$patch']>,
    ) {
      return parseResponse(client.apps[':appId'].versions[':version'].$patch(args, options))
    },
  })
}

export function usePatchAppsAppIdVersionsVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$patch']>,
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
  const mutationDefaults = getPatchAppsAppIdVersionsVersionMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdVersionsVersionStatusMutationKey() {
  return ['apps', '/apps/:appId/versions/:version/status', 'POST'] as const
}

export function getPostAppsAppIdVersionsVersionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['versions'][':version']['status']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdVersionsVersionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['versions'][':version']['status']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].versions[':version'].status.$post(args, options))
    },
  })
}

export function usePostAppsAppIdVersionsVersionStatus<
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
                    (typeof client.apps)[':appId']['versions'][':version']['status']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps)[':appId']['versions'][':version']['status']['$post']
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
  const mutationDefaults = getPostAppsAppIdVersionsVersionStatusMutationOptions<
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

export function getPostCustomGatewayPaymentOwnershipIdMutationKey() {
  return ['custom-gateway', '/custom-gateway/payment/:ownershipId', 'POST'] as const
}

export function getPostCustomGatewayPaymentOwnershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-gateway']['payment'][':ownershipId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['custom-gateway']['payment'][':ownershipId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomGatewayPaymentOwnershipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['custom-gateway']['payment'][':ownershipId']['$post']>,
    ) {
      return parseResponse(client['custom-gateway'].payment[':ownershipId'].$post(args, options))
    },
  })
}

export function usePostCustomGatewayPaymentOwnershipId<
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
                  ReturnType<(typeof client)['custom-gateway']['payment'][':ownershipId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['custom-gateway']['payment'][':ownershipId']['$post']>,
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
  const mutationDefaults = getPostCustomGatewayPaymentOwnershipIdMutationOptions<
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

export function getPostCustomGatewayRefundOwnershipIdMutationKey() {
  return ['custom-gateway', '/custom-gateway/refund/:ownershipId', 'POST'] as const
}

export function getPostCustomGatewayRefundOwnershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-gateway']['refund'][':ownershipId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['custom-gateway']['refund'][':ownershipId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomGatewayRefundOwnershipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['custom-gateway']['refund'][':ownershipId']['$post']>,
    ) {
      return parseResponse(client['custom-gateway'].refund[':ownershipId'].$post(args, options))
    },
  })
}

export function usePostCustomGatewayRefundOwnershipId<
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
                  ReturnType<(typeof client)['custom-gateway']['refund'][':ownershipId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['custom-gateway']['refund'][':ownershipId']['$post']>,
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
  const mutationDefaults = getPostCustomGatewayRefundOwnershipIdMutationOptions<
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

export function getDeveloperAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.developerAccounts.$get>>,
) {
  return ['developerAccounts', '/developerAccounts', toValue(args)] as const
}

export function getDeveloperAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.developerAccounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeveloperAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.developerAccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeveloperAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.developerAccounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>
            >
          >,
          ReturnType<typeof getDeveloperAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeveloperAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeveloperAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.developerAccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeveloperAccountsDeveloperAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$get']>
  >,
) {
  return ['developerAccounts', '/developerAccounts/:developerAccountId', toValue(args)] as const
}

export function getDeveloperAccountsDeveloperAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeveloperAccountsDeveloperAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.developerAccounts[':developerAccountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeveloperAccountsDeveloperAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$get']>
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
                  ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDeveloperAccountsDeveloperAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeveloperAccountsDeveloperAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeveloperAccountsDeveloperAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.developerAccounts[':developerAccountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDeveloperAccountsDeveloperAccountIdMutationKey() {
  return ['developerAccounts', '/developerAccounts/:developerAccountId', 'POST'] as const
}

export function getPostDeveloperAccountsDeveloperAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeveloperAccountsDeveloperAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$post']>,
    ) {
      return parseResponse(client.developerAccounts[':developerAccountId'].$post(args, options))
    },
  })
}

export function usePostDeveloperAccountsDeveloperAccountId<
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
                  ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$post']>,
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
  const mutationDefaults = getPostDeveloperAccountsDeveloperAccountIdMutationOptions<
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

export function getDeleteDeveloperAccountsDeveloperAccountIdMutationKey() {
  return ['developerAccounts', '/developerAccounts/:developerAccountId', 'DELETE'] as const
}

export function getDeleteDeveloperAccountsDeveloperAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeveloperAccountsDeveloperAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$delete']>,
    ) {
      return parseResponse(client.developerAccounts[':developerAccountId'].$delete(args, options))
    },
  })
}

export function useDeleteDeveloperAccountsDeveloperAccountId<
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
                  ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$delete']>,
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
  const mutationDefaults = getDeleteDeveloperAccountsDeveloperAccountIdMutationOptions<
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

export function getPatchDeveloperAccountsDeveloperAccountIdMutationKey() {
  return ['developerAccounts', '/developerAccounts/:developerAccountId', 'PATCH'] as const
}

export function getPatchDeveloperAccountsDeveloperAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDeveloperAccountsDeveloperAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$patch']>,
    ) {
      return parseResponse(client.developerAccounts[':developerAccountId'].$patch(args, options))
    },
  })
}

export function usePatchDeveloperAccountsDeveloperAccountId<
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
                  ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$patch']>,
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
  const mutationDefaults = getPatchDeveloperAccountsDeveloperAccountIdMutationOptions<
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

export function getDevelopersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.developers.$get>>,
) {
  return ['developers', '/developers', toValue(args)] as const
}

export function getDevelopersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.developers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevelopersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.developers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDevelopers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.developers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
          >,
          ReturnType<typeof getDevelopersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevelopersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevelopersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.developers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevelopersDeveloperIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.developers)[':developerId']['$get']>>,
) {
  return ['developers', '/developers/:developerId', toValue(args)] as const
}

export function getDevelopersDeveloperIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.developers)[':developerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevelopersDeveloperIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.developers[':developerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevelopersDeveloperId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':developerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.developers)[':developerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.developers)[':developerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.developers)[':developerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevelopersDeveloperIdQueryKey>
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
          Awaited<ReturnType<(typeof client.developers)[':developerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevelopersDeveloperIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevelopersDeveloperIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.developers[':developerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDevelopersDeveloperIdMutationKey() {
  return ['developers', '/developers/:developerId', 'POST'] as const
}

export function getPostDevelopersDeveloperIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developers)[':developerId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.developers)[':developerId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDevelopersDeveloperIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.developers)[':developerId']['$post']>) {
      return parseResponse(client.developers[':developerId'].$post(args, options))
    },
  })
}

export function usePostDevelopersDeveloperId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.developers)[':developerId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.developers)[':developerId']['$post']>,
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
  const mutationDefaults = getPostDevelopersDeveloperIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDevelopersDeveloperIdMutationKey() {
  return ['developers', '/developers/:developerId', 'DELETE'] as const
}

export function getDeleteDevelopersDeveloperIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developers)[':developerId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.developers)[':developerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDevelopersDeveloperIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.developers)[':developerId']['$delete']>,
    ) {
      return parseResponse(client.developers[':developerId'].$delete(args, options))
    },
  })
}

export function useDeleteDevelopersDeveloperId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.developers)[':developerId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.developers)[':developerId']['$delete']>,
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
  const mutationDefaults = getDeleteDevelopersDeveloperIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDevelopersDeveloperIdMutationKey() {
  return ['developers', '/developers/:developerId', 'PATCH'] as const
}

export function getPatchDevelopersDeveloperIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developers)[':developerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.developers)[':developerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDevelopersDeveloperIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.developers)[':developerId']['$patch']>) {
      return parseResponse(client.developers[':developerId'].$patch(args, options))
    },
  })
}

export function usePatchDevelopersDeveloperId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.developers)[':developerId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.developers)[':developerId']['$patch']>,
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
  const mutationDefaults = getPatchDevelopersDeveloperIdMutationOptions<TError, TOnMutateResult>(
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

export function getEventsEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['$get']>>,
) {
  return ['events', '/events/:eventId', toValue(args)] as const
}

export function getEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':eventId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
            >
          >,
          ReturnType<typeof getEventsEventIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':eventId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
) {
  return ['files', '/files', toValue(args)] as const
}

export function getFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          ReturnType<typeof getFilesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesMutationKey() {
  return ['files', '/files', 'POST'] as const
}

export function getPostFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    InferRequestType<typeof client.files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.$post>) {
      return parseResponse(client.files.$post(args, options))
    },
  })
}

export function usePostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
          TError,
          InferRequestType<typeof client.files.$post>,
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
  const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesByIdOrUrlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.byIdOrUrl.$get>>,
) {
  return ['files', '/files/byIdOrUrl', toValue(args)] as const
}

export function getFilesByIdOrUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.byIdOrUrl.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesByIdOrUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files.byIdOrUrl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesByIdOrUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.byIdOrUrl.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>
            >
          >,
          ReturnType<typeof getFilesByIdOrUrlQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesByIdOrUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesByIdOrUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files.byIdOrUrl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.download.$get>>,
) {
  return ['files', '/files/download', toValue(args)] as const
}

export function getFilesDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.download.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesDownload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.download.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
          >,
          ReturnType<typeof getFilesDownloadQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesUrlMutationKey() {
  return ['files', '/files/url', 'POST'] as const
}

export function getPostFilesUrlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.url.$post>>>>>,
    TError,
    InferRequestType<typeof client.files.url.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.url.$post>) {
      return parseResponse(client.files.url.$post(args, options))
    },
  })
}

export function usePostFilesUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.url.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.files.url.$post>,
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
  const mutationDefaults = getPostFilesUrlMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMarketsThisQueryKey() {
  return ['markets', '/markets/this'] as const
}

export function getMarketsThisQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMarketsThisQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.markets.this.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMarketsThis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>
          >,
          ReturnType<typeof getMarketsThisQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMarketsThisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMarketsThisQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.markets.this.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOwnershipQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ownership.$get>>,
) {
  return ['ownership', '/ownership', toValue(args)] as const
}

export function getOwnershipQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ownership.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwnershipQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ownership.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOwnership<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ownership.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>
          >,
          ReturnType<typeof getOwnershipQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOwnershipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwnershipQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ownership.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOwnershipInstallMutationKey() {
  return ['ownership', '/ownership/install', 'POST'] as const
}

export function getPostOwnershipInstallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.install.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ownership.install.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOwnershipInstallMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ownership.install.$post>) {
      return parseResponse(client.ownership.install.$post(args, options))
    },
  })
}

export function usePostOwnershipInstall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ownership.install.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ownership.install.$post>,
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
  const mutationDefaults = getPostOwnershipInstallMutationOptions<TError, TOnMutateResult>(
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

export function getPostOwnershipUninstallOwnershipIdMutationKey() {
  return ['ownership', '/ownership/uninstall/:ownershipId', 'POST'] as const
}

export function getPostOwnershipUninstallOwnershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ownership.uninstall)[':ownershipId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ownership.uninstall)[':ownershipId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOwnershipUninstallOwnershipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ownership.uninstall)[':ownershipId']['$post']>,
    ) {
      return parseResponse(client.ownership.uninstall[':ownershipId'].$post(args, options))
    },
  })
}

export function usePostOwnershipUninstallOwnershipId<
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
                Awaited<ReturnType<(typeof client.ownership.uninstall)[':ownershipId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ownership.uninstall)[':ownershipId']['$post']>,
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
  const mutationDefaults = getPostOwnershipUninstallOwnershipIdMutationOptions<
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

export function getOwnershipOwnershipIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ownership)[':ownershipId']['$get']>>,
) {
  return ['ownership', '/ownership/:ownershipId', toValue(args)] as const
}

export function getOwnershipOwnershipIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ownership)[':ownershipId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwnershipOwnershipIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ownership[':ownershipId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOwnershipOwnershipId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ownership)[':ownershipId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOwnershipOwnershipIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnershipOwnershipIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwnershipOwnershipIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ownership[':ownershipId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOwnershipOwnershipIdMutationKey() {
  return ['ownership', '/ownership/:ownershipId', 'POST'] as const
}

export function getPostOwnershipOwnershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ownership)[':ownershipId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOwnershipOwnershipIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ownership)[':ownershipId']['$post']>) {
      return parseResponse(client.ownership[':ownershipId'].$post(args, options))
    },
  })
}

export function usePostOwnershipOwnershipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ownership)[':ownershipId']['$post']>,
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
  const mutationDefaults = getPostOwnershipOwnershipIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchOwnershipOwnershipIdMutationKey() {
  return ['ownership', '/ownership/:ownershipId', 'PATCH'] as const
}

export function getPatchOwnershipOwnershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ownership)[':ownershipId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOwnershipOwnershipIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ownership)[':ownershipId']['$patch']>) {
      return parseResponse(client.ownership[':ownershipId'].$patch(args, options))
    },
  })
}

export function usePatchOwnershipOwnershipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ownership)[':ownershipId']['$patch']>,
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
  const mutationDefaults = getPatchOwnershipOwnershipIdMutationOptions<TError, TOnMutateResult>(
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

export function getPermissionAppsAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.permission.apps)[':appId']['$get']>>,
) {
  return ['permission', '/permission/apps/:appId', toValue(args)] as const
}

export function getPermissionAppsAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.permission.apps)[':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPermissionAppsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.permission.apps[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePermissionAppsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.permission.apps)[':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPermissionAppsAppIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionAppsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPermissionAppsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.permission.apps[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPermissionAppsAppIdMutationKey() {
  return ['permission', '/permission/apps/:appId', 'POST'] as const
}

export function getPostPermissionAppsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.permission.apps)[':appId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPermissionAppsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.permission.apps)[':appId']['$post']>) {
      return parseResponse(client.permission.apps[':appId'].$post(args, options))
    },
  })
}

export function usePostPermissionAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.permission.apps)[':appId']['$post']>,
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
  const mutationDefaults = getPostPermissionAppsAppIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePermissionAppsAppIdMutationKey() {
  return ['permission', '/permission/apps/:appId', 'DELETE'] as const
}

export function getDeletePermissionAppsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.permission.apps)[':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePermissionAppsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.permission.apps)[':appId']['$delete']>) {
      return parseResponse(client.permission.apps[':appId'].$delete(args, options))
    },
  })
}

export function useDeletePermissionAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.permission.apps)[':appId']['$delete']>,
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
  const mutationDefaults = getDeletePermissionAppsAppIdMutationOptions<TError, TOnMutateResult>(
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

export function getReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.$get>>,
) {
  return ['reviews', '/reviews', toValue(args)] as const
}

export function getReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reviews.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReviews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>
          >,
          ReturnType<typeof getReviewsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostReviewsMutationKey() {
  return ['reviews', '/reviews', 'POST'] as const
}

export function getPostReviewsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$post>>>>>,
    TError,
    InferRequestType<typeof client.reviews.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReviewsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reviews.$post>) {
      return parseResponse(client.reviews.$post(args, options))
    },
  })
}

export function usePostReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reviews.$post>,
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
  const mutationDefaults = getPostReviewsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReviewsReviewIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)[':reviewId']['$get']>>,
) {
  return ['reviews', '/reviews/:reviewId', toValue(args)] as const
}

export function getReviewsReviewIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)[':reviewId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewsReviewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reviews[':reviewId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewsReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)[':reviewId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReviewsReviewIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsReviewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewsReviewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reviews[':reviewId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostReviewsReviewIdMutationKey() {
  return ['reviews', '/reviews/:reviewId', 'POST'] as const
}

export function getPostReviewsReviewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.reviews)[':reviewId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReviewsReviewIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reviews)[':reviewId']['$post']>) {
      return parseResponse(client.reviews[':reviewId'].$post(args, options))
    },
  })
}

export function usePostReviewsReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reviews)[':reviewId']['$post']>,
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
  const mutationDefaults = getPostReviewsReviewIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteReviewsReviewIdMutationKey() {
  return ['reviews', '/reviews/:reviewId', 'DELETE'] as const
}

export function getDeleteReviewsReviewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.reviews)[':reviewId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReviewsReviewIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reviews)[':reviewId']['$delete']>) {
      return parseResponse(client.reviews[':reviewId'].$delete(args, options))
    },
  })
}

export function useDeleteReviewsReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reviews)[':reviewId']['$delete']>,
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
  const mutationDefaults = getDeleteReviewsReviewIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchReviewsReviewIdMutationKey() {
  return ['reviews', '/reviews/:reviewId', 'PATCH'] as const
}

export function getPatchReviewsReviewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.reviews)[':reviewId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchReviewsReviewIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reviews)[':reviewId']['$patch']>) {
      return parseResponse(client.reviews[':reviewId'].$patch(args, options))
    },
  })
}

export function usePatchReviewsReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reviews)[':reviewId']['$patch']>,
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
  const mutationDefaults = getPatchReviewsReviewIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostStatsIncrementFieldMutationKey() {
  return ['stats', '/stats/increment/:field', 'POST'] as const
}

export function getPostStatsIncrementFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stats.increment)[':field']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stats.increment)[':field']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStatsIncrementFieldMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stats.increment)[':field']['$post']>) {
      return parseResponse(client.stats.increment[':field'].$post(args, options))
    },
  })
}

export function usePostStatsIncrementField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats.increment)[':field']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stats.increment)[':field']['$post']>,
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
  const mutationDefaults = getPostStatsIncrementFieldMutationOptions<TError, TOnMutateResult>(
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

export function getStatsSeriesPeriodFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.series)[':period'][':fields']['$get']>
  >,
) {
  return ['stats', '/stats/series/:period/:fields', toValue(args)] as const
}

export function getStatsSeriesPeriodFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.series)[':period'][':fields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsSeriesPeriodFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.series[':period'][':fields'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsSeriesPeriodFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats.series)[':period'][':fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.series)[':period'][':fields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats.series)[':period'][':fields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats.series)[':period'][':fields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStatsSeriesPeriodFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.stats.series)[':period'][':fields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsSeriesPeriodFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsSeriesPeriodFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.series[':period'][':fields'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsTotalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.total.$get>>,
) {
  return ['stats', '/stats/total', toValue(args)] as const
}

export function getStatsTotalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.total.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsTotalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.total.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsTotal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.total.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>
          >,
          ReturnType<typeof getStatsTotalQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsTotalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsTotalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.total.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStripeGatewayDeveloperDeveloperIdAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
    >
  >,
) {
  return [
    'stripe-gateway',
    '/stripe-gateway/developer/:developerId/accounts',
    toValue(args),
  ] as const
}

export function getStripeGatewayDeveloperDeveloperIdAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStripeGatewayDeveloperDeveloperIdAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['stripe-gateway'].developer[':developerId'].accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStripeGatewayDeveloperDeveloperIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
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
                    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
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
                    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStripeGatewayDeveloperDeveloperIdAccountsQueryKey>
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
              (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStripeGatewayDeveloperDeveloperIdAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStripeGatewayDeveloperDeveloperIdAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['stripe-gateway'].developer[':developerId'].accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStripeGatewayDeveloperDeveloperIdAccountsMutationKey() {
  return ['stripe-gateway', '/stripe-gateway/developer/:developerId/accounts', 'POST'] as const
}

export function getPostStripeGatewayDeveloperDeveloperIdAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostStripeGatewayDeveloperDeveloperIdAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$post']
      >,
    ) {
      return parseResponse(
        client['stripe-gateway'].developer[':developerId'].accounts.$post(args, options),
      )
    },
  })
}

export function usePostStripeGatewayDeveloperDeveloperIdAccounts<
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
                    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$post']
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
  const mutationDefaults = getPostStripeGatewayDeveloperDeveloperIdAccountsMutationOptions<
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

export function getDeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdMutationKey() {
  return [
    'stripe-gateway',
    '/stripe-gateway/developer/:developerId/accounts/:stripeId',
    'DELETE',
  ] as const
}

export function getDeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['stripe-gateway']['developer'][':developerId']['accounts'][':stripeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['stripe-gateway']['developer'][':developerId']['accounts'][':stripeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['stripe-gateway']['developer'][':developerId']['accounts'][':stripeId']['$delete']
      >,
    ) {
      return parseResponse(
        client['stripe-gateway'].developer[':developerId'].accounts[':stripeId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteStripeGatewayDeveloperDeveloperIdAccountsStripeId<
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
                    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts'][':stripeId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['stripe-gateway']['developer'][':developerId']['accounts'][':stripeId']['$delete']
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
    getDeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdMutationOptions<
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

export function getStripeGatewayUserUserIdCardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>
  >,
) {
  return ['stripe-gateway', '/stripe-gateway/user/:userId/cards', toValue(args)] as const
}

export function getStripeGatewayUserUserIdCardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStripeGatewayUserUserIdCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['stripe-gateway'].user[':userId'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStripeGatewayUserUserIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>
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
                  ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStripeGatewayUserUserIdCardsQueryKey>
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
          Awaited<ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStripeGatewayUserUserIdCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStripeGatewayUserUserIdCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['stripe-gateway'].user[':userId'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStripeGatewayUserUserIdCardsMutationKey() {
  return ['stripe-gateway', '/stripe-gateway/user/:userId/cards', 'POST'] as const
}

export function getPostStripeGatewayUserUserIdCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStripeGatewayUserUserIdCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['stripe-gateway']['user'][':userId']['cards']['$post']
      >,
    ) {
      return parseResponse(client['stripe-gateway'].user[':userId'].cards.$post(args, options))
    },
  })
}

export function usePostStripeGatewayUserUserIdCards<
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
                  ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$post']>,
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
  const mutationDefaults = getPostStripeGatewayUserUserIdCardsMutationOptions<
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

export function getPostStripeGatewayUserUserIdCardsCardIdMutationKey() {
  return ['stripe-gateway', '/stripe-gateway/user/:userId/cards/:cardId', 'POST'] as const
}

export function getPostStripeGatewayUserUserIdCardsCardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostStripeGatewayUserUserIdCardsCardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$post']
      >,
    ) {
      return parseResponse(
        client['stripe-gateway'].user[':userId'].cards[':cardId'].$post(args, options),
      )
    },
  })
}

export function usePostStripeGatewayUserUserIdCardsCardId<
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
                    (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$post']
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
  const mutationDefaults = getPostStripeGatewayUserUserIdCardsCardIdMutationOptions<
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

export function getDeleteStripeGatewayUserUserIdCardsCardIdMutationKey() {
  return ['stripe-gateway', '/stripe-gateway/user/:userId/cards/:cardId', 'DELETE'] as const
}

export function getDeleteStripeGatewayUserUserIdCardsCardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteStripeGatewayUserUserIdCardsCardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$delete']
      >,
    ) {
      return parseResponse(
        client['stripe-gateway'].user[':userId'].cards[':cardId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteStripeGatewayUserUserIdCardsCardId<
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
                    (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$delete']
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
  const mutationDefaults = getDeleteStripeGatewayUserUserIdCardsCardIdMutationOptions<
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

export function getTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
) {
  return ['transactions', '/transactions', toValue(args)] as const
}

export function getTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          ReturnType<typeof getTransactionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransactionsTransactionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':transactionId']['$get']>>,
) {
  return ['transactions', '/transactions/:transactionId', toValue(args)] as const
}

export function getTransactionsTransactionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':transactionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions[':transactionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':transactionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransactionsTransactionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions[':transactionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTransactionsTransactionIdMutationKey() {
  return ['transactions', '/transactions/:transactionId', 'POST'] as const
}

export function getPostTransactionsTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transactions)[':transactionId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions)[':transactionId']['$post']>,
    ) {
      return parseResponse(client.transactions[':transactionId'].$post(args, options))
    },
  })
}

export function usePostTransactionsTransactionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transactions)[':transactionId']['$post']>,
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
  const mutationDefaults = getPostTransactionsTransactionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTransactionsTransactionIdMutationKey() {
  return ['transactions', '/transactions/:transactionId', 'DELETE'] as const
}

export function getDeleteTransactionsTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transactions)[':transactionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTransactionsTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions)[':transactionId']['$delete']>,
    ) {
      return parseResponse(client.transactions[':transactionId'].$delete(args, options))
    },
  })
}

export function useDeleteTransactionsTransactionId<
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
                Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transactions)[':transactionId']['$delete']>,
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
  const mutationDefaults = getDeleteTransactionsTransactionIdMutationOptions<
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

export function getUserAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.userAccounts.$get>>,
) {
  return ['userAccounts', '/userAccounts', toValue(args)] as const
}

export function getUserAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.userAccounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.userAccounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.userAccounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>
          >,
          ReturnType<typeof getUserAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.userAccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserAccountsUserAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.userAccounts)[':userAccountId']['$get']>>,
) {
  return ['userAccounts', '/userAccounts/:userAccountId', toValue(args)] as const
}

export function getUserAccountsUserAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.userAccounts)[':userAccountId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountsUserAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.userAccounts[':userAccountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAccountsUserAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.userAccounts)[':userAccountId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserAccountsUserAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountsUserAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountsUserAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.userAccounts[':userAccountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserAccountsUserAccountIdMutationKey() {
  return ['userAccounts', '/userAccounts/:userAccountId', 'POST'] as const
}

export function getPostUserAccountsUserAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userAccounts)[':userAccountId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserAccountsUserAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$post']>,
    ) {
      return parseResponse(client.userAccounts[':userAccountId'].$post(args, options))
    },
  })
}

export function usePostUserAccountsUserAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userAccounts)[':userAccountId']['$post']>,
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
  const mutationDefaults = getPostUserAccountsUserAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUserAccountsUserAccountIdMutationKey() {
  return ['userAccounts', '/userAccounts/:userAccountId', 'DELETE'] as const
}

export function getDeleteUserAccountsUserAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userAccounts)[':userAccountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserAccountsUserAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$delete']>,
    ) {
      return parseResponse(client.userAccounts[':userAccountId'].$delete(args, options))
    },
  })
}

export function useDeleteUserAccountsUserAccountId<
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
                Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userAccounts)[':userAccountId']['$delete']>,
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
  const mutationDefaults = getDeleteUserAccountsUserAccountIdMutationOptions<
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

export function getPatchUserAccountsUserAccountIdMutationKey() {
  return ['userAccounts', '/userAccounts/:userAccountId', 'PATCH'] as const
}

export function getPatchUserAccountsUserAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userAccounts)[':userAccountId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserAccountsUserAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$patch']>,
    ) {
      return parseResponse(client.userAccounts[':userAccountId'].$patch(args, options))
    },
  })
}

export function usePatchUserAccountsUserAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userAccounts)[':userAccountId']['$patch']>,
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
  const mutationDefaults = getPatchUserAccountsUserAccountIdMutationOptions<
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
) {
  return ['users', '/users/:userId', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'POST'] as const
}

export function getPostUsersUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$post']>) {
      return parseResponse(client.users[':userId'].$post(args, options))
    },
  })
}

export function usePostUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$delete']>) {
      return parseResponse(client.users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'PATCH'] as const
}

export function getPatchUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$patch']>) {
      return parseResponse(client.users[':userId'].$patch(args, options))
    },
  })
}

export function usePatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$patch']>,
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
  const mutationDefaults = getPatchUsersUserIdMutationOptions<TError, TOnMutateResult>(
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
