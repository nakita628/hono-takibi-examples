import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getAppsQueryKey(args: InferRequestType<typeof client.apps.$get>) {
  return ['apps', '/apps', args] as const
}

export function getAppsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsQueryKey>
  >({
    queryKey: getAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apps.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
        TError,
        InferRequestType<typeof client.apps.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAppsBySafeNameSafeNameQueryKey(
  args: InferRequestType<(typeof client.apps.bySafeName)[':safeName']['$get']>,
) {
  return ['apps', '/apps/bySafeName/:safeName', args] as const
}

export function getAppsBySafeNameSafeNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps.bySafeName)[':safeName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps.bySafeName)[':safeName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppsBySafeNameSafeNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.bySafeName[':safeName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsBySafeNameSafeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps.bySafeName)[':safeName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apps.bySafeName)[':safeName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAppsBySafeNameSafeNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAppsTextSearchQueryKey(
  args: InferRequestType<typeof client.apps.textSearch.$get>,
) {
  return ['apps', '/apps/textSearch', args] as const
}

export function getAppsTextSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apps.textSearch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppsTextSearchQueryKey>
  >({
    queryKey: getAppsTextSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.textSearch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAppsTextSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apps.textSearch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppsTextSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsTextSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAppsVersionsQueryKey(args: InferRequestType<typeof client.apps.versions.$get>) {
  return ['apps', '/apps/versions', args] as const
}

export function getAppsVersionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apps.versions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppsVersionsQueryKey>
  >({
    queryKey: getAppsVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.versions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAppsVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apps.versions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppsVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsVersionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAppsAppIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['$get']>,
) {
  return ['apps', '/apps/:appId', args] as const
}

export function getAppsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.apps)[':appId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQueryKey>
  >({
    queryKey: getAppsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAppsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apps)[':appId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsAppIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppsAppIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAppsAppIdLive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppsAppIdLiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAppsAppIdPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppsAppIdPublishMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAppsAppIdVersionsVersionQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$get']>,
) {
  return ['apps', '/apps/:appId/versions/:version', args] as const
}

export function getAppsAppIdVersionsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppsAppIdVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsAppIdVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAppsAppIdVersionsVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAppsAppIdVersionsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppsAppIdVersionsVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAppsAppIdVersionsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppsAppIdVersionsVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAppsAppIdVersionsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAppsAppIdVersionsVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAppsAppIdVersionsVersionStatus<
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
                ReturnType<
                  (typeof client.apps)[':appId']['versions'][':version']['status']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['status']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppsAppIdVersionsVersionStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCustomGatewayPaymentOwnershipId<
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
                ReturnType<(typeof client)['custom-gateway']['payment'][':ownershipId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['custom-gateway']['payment'][':ownershipId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomGatewayPaymentOwnershipIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCustomGatewayRefundOwnershipId<
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
                ReturnType<(typeof client)['custom-gateway']['refund'][':ownershipId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['custom-gateway']['refund'][':ownershipId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomGatewayRefundOwnershipIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeveloperAccountsQueryKey(
  args: InferRequestType<typeof client.developerAccounts.$get>,
) {
  return ['developerAccounts', '/developerAccounts', args] as const
}

export function getDeveloperAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.developerAccounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeveloperAccountsQueryKey>
  >({
    queryKey: getDeveloperAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.developerAccounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDeveloperAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.developerAccounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeveloperAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeveloperAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeveloperAccountsDeveloperAccountIdQueryKey(
  args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$get']>,
) {
  return ['developerAccounts', '/developerAccounts/:developerAccountId', args] as const
}

export function getDeveloperAccountsDeveloperAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeveloperAccountsDeveloperAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.developerAccounts[':developerAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeveloperAccountsDeveloperAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDeveloperAccountsDeveloperAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDeveloperAccountsDeveloperAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeveloperAccountsDeveloperAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDeveloperAccountsDeveloperAccountId<
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
                ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDeveloperAccountsDeveloperAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDeveloperAccountsDeveloperAccountId<
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
                ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDeveloperAccountsDeveloperAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDevelopersQueryKey(args: InferRequestType<typeof client.developers.$get>) {
  return ['developers', '/developers', args] as const
}

export function getDevelopersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.developers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevelopersQueryKey>
  >({
    queryKey: getDevelopersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.developers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevelopers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.developers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDevelopersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevelopersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDevelopersDeveloperIdQueryKey(
  args: InferRequestType<(typeof client.developers)[':developerId']['$get']>,
) {
  return ['developers', '/developers/:developerId', args] as const
}

export function getDevelopersDeveloperIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':developerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.developers)[':developerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevelopersDeveloperIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.developers[':developerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevelopersDeveloperId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.developers)[':developerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.developers)[':developerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDevelopersDeveloperIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDevelopersDeveloperId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDevelopersDeveloperIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDevelopersDeveloperId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDevelopersDeveloperIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDevelopersDeveloperId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDevelopersDeveloperIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsEventIdQueryKey(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
) {
  return ['events', '/events/:eventId', args] as const
}

export function getEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >({
    queryKey: getEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':eventId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsEventIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFilesQueryKey(args: InferRequestType<typeof client.files.$get>) {
  return ['files', '/files', args] as const
}

export function getFilesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.files.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >({
    queryKey: getFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.files.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
        TError,
        InferRequestType<typeof client.files.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesByIdOrUrlQueryKey(
  args: InferRequestType<typeof client.files.byIdOrUrl.$get>,
) {
  return ['files', '/files/byIdOrUrl', args] as const
}

export function getFilesByIdOrUrlQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.files.byIdOrUrl.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesByIdOrUrlQueryKey>
  >({
    queryKey: getFilesByIdOrUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files.byIdOrUrl.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesByIdOrUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.files.byIdOrUrl.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFilesByIdOrUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesByIdOrUrlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFilesDownloadQueryKey(
  args: InferRequestType<typeof client.files.download.$get>,
) {
  return ['files', '/files/download', args] as const
}

export function getFilesDownloadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.files.download.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesDownloadQueryKey>
  >({
    queryKey: getFilesDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files.download.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesDownload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.files.download.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFilesDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFilesUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.url.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.files.url.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesUrlMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketsThisQueryKey() {
  return ['markets', '/markets/this'] as const
}

export function getMarketsThisQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMarketsThisQueryKey>
  >({
    queryKey: getMarketsThisQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.markets.this.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMarketsThis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMarketsThisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketsThisQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOwnershipQueryKey(args: InferRequestType<typeof client.ownership.$get>) {
  return ['ownership', '/ownership', args] as const
}

export function getOwnershipQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ownership.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOwnershipQueryKey>
  >({
    queryKey: getOwnershipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ownership.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOwnership<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ownership.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOwnershipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOwnershipQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOwnershipInstall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ownership.install.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ownership.install.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOwnershipInstallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOwnershipUninstallOwnershipId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOwnershipUninstallOwnershipIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOwnershipOwnershipIdQueryKey(
  args: InferRequestType<(typeof client.ownership)[':ownershipId']['$get']>,
) {
  return ['ownership', '/ownership/:ownershipId', args] as const
}

export function getOwnershipOwnershipIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ownership)[':ownershipId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnershipOwnershipIdQueryKey>
  >({
    queryKey: getOwnershipOwnershipIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ownership[':ownershipId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOwnershipOwnershipId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ownership)[':ownershipId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnershipOwnershipIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOwnershipOwnershipIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOwnershipOwnershipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOwnershipOwnershipIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchOwnershipOwnershipId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOwnershipOwnershipIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPermissionAppsAppIdQueryKey(
  args: InferRequestType<(typeof client.permission.apps)[':appId']['$get']>,
) {
  return ['permission', '/permission/apps/:appId', args] as const
}

export function getPermissionAppsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.permission.apps)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionAppsAppIdQueryKey>
  >({
    queryKey: getPermissionAppsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.permission.apps[':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPermissionAppsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.permission.apps)[':appId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionAppsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPermissionAppsAppIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPermissionAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPermissionAppsAppIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePermissionAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePermissionAppsAppIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReviewsQueryKey(args: InferRequestType<typeof client.reviews.$get>) {
  return ['reviews', '/reviews', args] as const
}

export function getReviewsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reviews.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReviewsQueryKey>
  >({
    queryKey: getReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reviews.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReviews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reviews.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReviewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$post>>>>>,
        TError,
        InferRequestType<typeof client.reviews.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReviewsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReviewsReviewIdQueryKey(
  args: InferRequestType<(typeof client.reviews)[':reviewId']['$get']>,
) {
  return ['reviews', '/reviews/:reviewId', args] as const
}

export function getReviewsReviewIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reviews)[':reviewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsReviewIdQueryKey>
  >({
    queryKey: getReviewsReviewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reviews[':reviewId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReviewsReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reviews)[':reviewId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsReviewIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReviewsReviewIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostReviewsReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.reviews)[':reviewId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReviewsReviewIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteReviewsReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteReviewsReviewIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchReviewsReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchReviewsReviewIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostStatsIncrementField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStatsIncrementFieldMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatsSeriesPeriodFieldsQueryKey(
  args: InferRequestType<(typeof client.stats.series)[':period'][':fields']['$get']>,
) {
  return ['stats', '/stats/series/:period/:fields', args] as const
}

export function getStatsSeriesPeriodFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats.series)[':period'][':fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats.series)[':period'][':fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStatsSeriesPeriodFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.series[':period'][':fields'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatsSeriesPeriodFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats.series)[':period'][':fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stats.series)[':period'][':fields']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsSeriesPeriodFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatsTotalQueryKey(args: InferRequestType<typeof client.stats.total.$get>) {
  return ['stats', '/stats/total', args] as const
}

export function getStatsTotalQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stats.total.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsTotalQueryKey>
  >({
    queryKey: getStatsTotalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.total.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatsTotal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stats.total.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatsTotalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsTotalQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStripeGatewayDeveloperDeveloperIdAccountsQueryKey(
  args: InferRequestType<
    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
  >,
) {
  return ['stripe-gateway', '/stripe-gateway/developer/:developerId/accounts', args] as const
}

export function getStripeGatewayDeveloperDeveloperIdAccountsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStripeGatewayDeveloperDeveloperIdAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['stripe-gateway'].developer[':developerId'].accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStripeGatewayDeveloperDeveloperIdAccounts<
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
  args: () => InferRequestType<
    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStripeGatewayDeveloperDeveloperIdAccountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostStripeGatewayDeveloperDeveloperIdAccounts<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStripeGatewayDeveloperDeveloperIdAccountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteStripeGatewayDeveloperDeveloperIdAccountsStripeId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStripeGatewayUserUserIdCardsQueryKey(
  args: InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>,
) {
  return ['stripe-gateway', '/stripe-gateway/user/:userId/cards', args] as const
}

export function getStripeGatewayUserUserIdCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStripeGatewayUserUserIdCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['stripe-gateway'].user[':userId'].cards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStripeGatewayUserUserIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getStripeGatewayUserUserIdCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStripeGatewayUserUserIdCardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostStripeGatewayUserUserIdCards<
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
                ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStripeGatewayUserUserIdCardsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostStripeGatewayUserUserIdCardsCardId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStripeGatewayUserUserIdCardsCardIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteStripeGatewayUserUserIdCardsCardId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStripeGatewayUserUserIdCardsCardIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTransactionsQueryKey(args: InferRequestType<typeof client.transactions.$get>) {
  return ['transactions', '/transactions', args] as const
}

export function getTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >({
    queryKey: getTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTransactionsTransactionIdQueryKey(
  args: InferRequestType<(typeof client.transactions)[':transactionId']['$get']>,
) {
  return ['transactions', '/transactions/:transactionId', args] as const
}

export function getTransactionsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':transactionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTransactionsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions[':transactionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.transactions)[':transactionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTransactionsTransactionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTransactionsTransactionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransactionsTransactionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTransactionsTransactionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTransactionsTransactionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserAccountsQueryKey(args: InferRequestType<typeof client.userAccounts.$get>) {
  return ['userAccounts', '/userAccounts', args] as const
}

export function getUserAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.userAccounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserAccountsQueryKey>
  >({
    queryKey: getUserAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userAccounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.userAccounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserAccountsUserAccountIdQueryKey(
  args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$get']>,
) {
  return ['userAccounts', '/userAccounts/:userAccountId', args] as const
}

export function getUserAccountsUserAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserAccountsUserAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userAccounts[':userAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserAccountsUserAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.userAccounts)[':userAccountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserAccountsUserAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUserAccountsUserAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserAccountsUserAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUserAccountsUserAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserAccountsUserAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchUserAccountsUserAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserAccountsUserAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
