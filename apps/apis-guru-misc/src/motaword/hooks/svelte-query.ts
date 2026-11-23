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

export function getAsyncKey() {
  return ['async'] as const
}

export function getBlogsKey() {
  return ['blogs'] as const
}

export function getCacheKey() {
  return ['cache'] as const
}

export function getCommissionsKey() {
  return ['commissions'] as const
}

export function getContinuousProjectsKey() {
  return ['continuous_projects'] as const
}

export function getCorporateKey() {
  return ['corporate'] as const
}

export function getCorporatesKey() {
  return ['corporates'] as const
}

export function getDeleteAccountKey() {
  return ['delete-account'] as const
}

export function getDocumentsKey() {
  return ['documents'] as const
}

export function getDowngradeProofreaderKey() {
  return ['downgrade-proofreader'] as const
}

export function getEarningsKey() {
  return ['earnings'] as const
}

export function getFormatsKey() {
  return ['formats'] as const
}

export function getFreezeAccountKey() {
  return ['freeze-account'] as const
}

export function getGlossaryKey() {
  return ['glossary'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getInvitationKey() {
  return ['invitation'] as const
}

export function getLanguagesKey() {
  return ['languages'] as const
}

export function getLocationKey() {
  return ['location'] as const
}

export function getMakeProofreaderKey() {
  return ['make-proofreader'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getMlKey() {
  return ['ml'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getPamKey() {
  return ['pam'] as const
}

export function getPasswordKey() {
  return ['password'] as const
}

export function getPaymentKey() {
  return ['payment'] as const
}

export function getPermissionsKey() {
  return ['permissions'] as const
}

export function getProfilePictureKey() {
  return ['profile-picture'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getResendEmailConfirmationKey() {
  return ['resend-email-confirmation'] as const
}

export function getResponsivityKey() {
  return ['responsivity'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getStringsKey() {
  return ['strings'] as const
}

export function getStyleguideKey() {
  return ['styleguide'] as const
}

export function getSurveysKey() {
  return ['surveys'] as const
}

export function getSwaggerKey() {
  return ['swagger'] as const
}

export function getTokenKey() {
  return ['token'] as const
}

export function getUnfreezeAccountKey() {
  return ['unfreeze-account'] as const
}

export function getUserGroupsKey() {
  return ['user-groups'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getUserIdKey() {
  return ['{userId}'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAsyncDownloadQueryKey(
  args: InferRequestType<typeof client.async.download.$get>,
) {
  return ['async', '/async/download', args] as const
}

export function getAsyncDownloadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.async.download.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAsyncDownloadQueryKey>
  >({
    queryKey: getAsyncDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.async.download.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAsyncDownload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.async.download.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAsyncDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAsyncDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBlogsQueryKey(args: InferRequestType<typeof client.blogs.$get>) {
  return ['blogs', '/blogs', args] as const
}

export function getBlogsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.blogs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlogsQueryKey>
  >({
    queryKey: getBlogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blogs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.blogs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBlogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBlogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteCacheKeyMutationKey() {
  return ['cache', '/cache/:key', 'DELETE'] as const
}

export function getDeleteCacheKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cache)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCacheKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cache)[':key']['$delete']>) {
      return parseResponse(client.cache[':key'].$delete(args, options))
    },
  })
}

export function createDeleteCacheKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.cache)[':key']['$delete']>,
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
    const mutationDefaults = getDeleteCacheKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCommissionsQueryKey() {
  return ['commissions', '/commissions'] as const
}

export function getCommissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommissionsQueryKey>
  >({
    queryKey: getCommissionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.commissions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCommissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommissionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostCommissionsMutationKey() {
  return ['commissions', '/commissions', 'POST'] as const
}

export function getPostCommissionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$post>>>>>,
    TError,
    InferRequestType<typeof client.commissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCommissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.commissions.$post>) {
      return parseResponse(client.commissions.$post(args, options))
    },
  })
}

export function createPostCommissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.commissions.$post>,
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
    const mutationDefaults = getPostCommissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getContinuousProjectsQueryKey(
  args: InferRequestType<typeof client.continuous_projects.$get>,
) {
  return ['continuous_projects', '/continuous_projects', args] as const
}

export function getContinuousProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.continuous_projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsQueryKey>
  >({
    queryKey: getContinuousProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContinuousProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.continuous_projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContinuousProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostContinuousProjectsMutationKey() {
  return ['continuous_projects', '/continuous_projects', 'POST'] as const
}

export function getPostContinuousProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.continuous_projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.continuous_projects.$post>) {
      return parseResponse(client.continuous_projects.$post(args, options))
    },
  })
}

export function createPostContinuousProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.continuous_projects.$post>,
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
    const mutationDefaults = getPostContinuousProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getContinuousProjectsIdQueryKey(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:id', args] as const
}

export function getContinuousProjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsIdQueryKey>
  >({
    queryKey: getContinuousProjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.continuous_projects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsIdQueryKey>
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
      ...getContinuousProjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostContinuousProjectsIdMutationKey() {
  return ['continuous_projects', '/continuous_projects/:id', 'POST'] as const
}

export function getPostContinuousProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.continuous_projects)[':id']['$post']>) {
      return parseResponse(client.continuous_projects[':id'].$post(args, options))
    },
  })
}

export function createPostContinuousProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.continuous_projects)[':id']['$post']>,
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
    const mutationDefaults = getPostContinuousProjectsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteContinuousProjectsIdMutationKey() {
  return ['continuous_projects', '/continuous_projects/:id', 'DELETE'] as const
}

export function getDeleteContinuousProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContinuousProjectsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.continuous_projects)[':id']['$delete']>,
    ) {
      return parseResponse(client.continuous_projects[':id'].$delete(args, options))
    },
  })
}

export function createDeleteContinuousProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.continuous_projects)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteContinuousProjectsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getContinuousProjectsIdAnalyticsTokenQueryKey(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:id/analytics-token', args] as const
}

export function getContinuousProjectsIdAnalyticsTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsIdAnalyticsTokenQueryKey>
  >({
    queryKey: getContinuousProjectsIdAnalyticsTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':id']['analytics-token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsIdAnalyticsToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.continuous_projects)[':id']['analytics-token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsIdAnalyticsTokenQueryKey>
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
      ...getContinuousProjectsIdAnalyticsTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostContinuousProjectsIdCollectAnalyticsMutationKey() {
  return ['continuous_projects', '/continuous_projects/:id/collect-analytics', 'POST'] as const
}

export function getPostContinuousProjectsIdCollectAnalyticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.continuous_projects)[':id']['collect-analytics']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':id']['collect-analytics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsIdCollectAnalyticsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':id']['collect-analytics']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':id']['collect-analytics'].$post(args, options),
      )
    },
  })
}

export function createPostContinuousProjectsIdCollectAnalytics<
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
                ReturnType<(typeof client.continuous_projects)[':id']['collect-analytics']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.continuous_projects)[':id']['collect-analytics']['$post']>,
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
    const mutationDefaults = getPostContinuousProjectsIdCollectAnalyticsMutationOptions<
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

export function getPostContinuousProjectsIdCompleteMutationKey() {
  return ['continuous_projects', '/continuous_projects/:id/complete', 'POST'] as const
}

export function getPostContinuousProjectsIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['complete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':id']['complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.continuous_projects)[':id']['complete']['$post']>,
    ) {
      return parseResponse(client.continuous_projects[':id'].complete.$post(args, options))
    },
  })
}

export function createPostContinuousProjectsIdComplete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.continuous_projects)[':id']['complete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.continuous_projects)[':id']['complete']['$post']>,
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
    const mutationDefaults = getPostContinuousProjectsIdCompleteMutationOptions<
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

export function getPostContinuousProjectsIdDocumentsQuoteMutationKey() {
  return ['continuous_projects', '/continuous_projects/:id/documents/quote', 'POST'] as const
}

export function getPostContinuousProjectsIdDocumentsQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.continuous_projects)[':id']['documents']['quote']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':id']['documents']['quote']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsIdDocumentsQuoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':id']['documents']['quote']['$post']
      >,
    ) {
      return parseResponse(client.continuous_projects[':id'].documents.quote.$post(args, options))
    },
  })
}

export function createPostContinuousProjectsIdDocumentsQuote<
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
                  (typeof client.continuous_projects)[':id']['documents']['quote']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.continuous_projects)[':id']['documents']['quote']['$post']>,
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
    const mutationDefaults = getPostContinuousProjectsIdDocumentsQuoteMutationOptions<
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

export function getPostContinuousProjectsIdDocumentsDocumentIdCompleteMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:id/documents/:documentId/complete',
    'POST',
  ] as const
}

export function getPostContinuousProjectsIdDocumentsDocumentIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['documents'][':documentId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':id']['documents'][':documentId']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsIdDocumentsDocumentIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':id']['documents'][':documentId']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':id'].documents[':documentId'].complete.$post(args, options),
      )
    },
  })
}

export function createPostContinuousProjectsIdDocumentsDocumentIdComplete<
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
                  (typeof client.continuous_projects)[':id']['documents'][':documentId']['complete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':id']['documents'][':documentId']['complete']['$post']
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
    const mutationDefaults = getPostContinuousProjectsIdDocumentsDocumentIdCompleteMutationOptions<
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

export function getPostContinuousProjectsIdDocumentsDocumentIdQuoteMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:id/documents/:documentId/quote',
    'POST',
  ] as const
}

export function getPostContinuousProjectsIdDocumentsDocumentIdQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['documents'][':documentId']['quote']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':id']['documents'][':documentId']['quote']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsIdDocumentsDocumentIdQuoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':id']['documents'][':documentId']['quote']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':id'].documents[':documentId'].quote.$post(args, options),
      )
    },
  })
}

export function createPostContinuousProjectsIdDocumentsDocumentIdQuote<
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
                  (typeof client.continuous_projects)[':id']['documents'][':documentId']['quote']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':id']['documents'][':documentId']['quote']['$post']
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
    const mutationDefaults = getPostContinuousProjectsIdDocumentsDocumentIdQuoteMutationOptions<
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

export function getPostContinuousProjectsIdLanguagesQuoteMutationKey() {
  return ['continuous_projects', '/continuous_projects/:id/languages/quote', 'POST'] as const
}

export function getPostContinuousProjectsIdLanguagesQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.continuous_projects)[':id']['languages']['quote']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':id']['languages']['quote']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsIdLanguagesQuoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':id']['languages']['quote']['$post']
      >,
    ) {
      return parseResponse(client.continuous_projects[':id'].languages.quote.$post(args, options))
    },
  })
}

export function createPostContinuousProjectsIdLanguagesQuote<
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
                  (typeof client.continuous_projects)[':id']['languages']['quote']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.continuous_projects)[':id']['languages']['quote']['$post']>,
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
    const mutationDefaults = getPostContinuousProjectsIdLanguagesQuoteMutationOptions<
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

export function getPostContinuousProjectsIdLanguagesTargetLanguageCompleteMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:id/languages/:targetLanguage/complete',
    'POST',
  ] as const
}

export function getPostContinuousProjectsIdLanguagesTargetLanguageCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsIdLanguagesTargetLanguageCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':id'].languages[':targetLanguage'].complete.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostContinuousProjectsIdLanguagesTargetLanguageComplete<
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
                  (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['complete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['complete']['$post']
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
      getPostContinuousProjectsIdLanguagesTargetLanguageCompleteMutationOptions<
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

export function getPostContinuousProjectsIdLanguagesTargetLanguageQuoteMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:id/languages/:targetLanguage/quote',
    'POST',
  ] as const
}

export function getPostContinuousProjectsIdLanguagesTargetLanguageQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['quote']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['quote']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsIdLanguagesTargetLanguageQuoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['quote']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':id'].languages[':targetLanguage'].quote.$post(args, options),
      )
    },
  })
}

export function createPostContinuousProjectsIdLanguagesTargetLanguageQuote<
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
                  (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['quote']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['quote']['$post']
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
    const mutationDefaults = getPostContinuousProjectsIdLanguagesTargetLanguageQuoteMutationOptions<
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

export function getContinuousProjectsIdSubscriptionQueryKey(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:id/subscription', args] as const
}

export function getContinuousProjectsIdSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsIdSubscriptionQueryKey>
  >({
    queryKey: getContinuousProjectsIdSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':id'].subscription.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsIdSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsIdSubscriptionQueryKey>
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
      ...getContinuousProjectsIdSubscriptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutContinuousProjectsIdSubscriptionMutationKey() {
  return ['continuous_projects', '/continuous_projects/:id/subscription', 'PUT'] as const
}

export function getPutContinuousProjectsIdSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContinuousProjectsIdSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$put']>,
    ) {
      return parseResponse(client.continuous_projects[':id'].subscription.$put(args, options))
    },
  })
}

export function createPutContinuousProjectsIdSubscription<
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
                ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$put']>,
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
    const mutationDefaults = getPutContinuousProjectsIdSubscriptionMutationOptions<
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

export function getPostContinuousProjectsIdSubscriptionMutationKey() {
  return ['continuous_projects', '/continuous_projects/:id/subscription', 'POST'] as const
}

export function getPostContinuousProjectsIdSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsIdSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$post']>,
    ) {
      return parseResponse(client.continuous_projects[':id'].subscription.$post(args, options))
    },
  })
}

export function createPostContinuousProjectsIdSubscription<
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
                ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$post']>,
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
    const mutationDefaults = getPostContinuousProjectsIdSubscriptionMutationOptions<
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

export function getDeleteContinuousProjectsIdSubscriptionMutationKey() {
  return ['continuous_projects', '/continuous_projects/:id/subscription', 'DELETE'] as const
}

export function getDeleteContinuousProjectsIdSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContinuousProjectsIdSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$delete']>,
    ) {
      return parseResponse(client.continuous_projects[':id'].subscription.$delete(args, options))
    },
  })
}

export function createDeleteContinuousProjectsIdSubscription<
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
                ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$delete']>,
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
    const mutationDefaults = getDeleteContinuousProjectsIdSubscriptionMutationOptions<
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

export function getPutContinuousProjectsIdSubscriptionPaymentMutationKey() {
  return ['continuous_projects', '/continuous_projects/:id/subscription/payment', 'PUT'] as const
}

export function getPutContinuousProjectsIdSubscriptionPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['subscription']['payment']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['payment']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContinuousProjectsIdSubscriptionPaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':id']['subscription']['payment']['$put']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':id'].subscription.payment.$put(args, options),
      )
    },
  })
}

export function createPutContinuousProjectsIdSubscriptionPayment<
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
                  (typeof client.continuous_projects)[':id']['subscription']['payment']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':id']['subscription']['payment']['$put']
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
    const mutationDefaults = getPutContinuousProjectsIdSubscriptionPaymentMutationOptions<
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

export function getPostContinuousProjectsIdTranslateTargetLanguageMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:id/translate/:targetLanguage',
    'POST',
  ] as const
}

export function getPostContinuousProjectsIdTranslateTargetLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['translate'][':targetLanguage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':id']['translate'][':targetLanguage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsIdTranslateTargetLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':id']['translate'][':targetLanguage']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':id'].translate[':targetLanguage'].$post(args, options),
      )
    },
  })
}

export function createPostContinuousProjectsIdTranslateTargetLanguage<
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
                  (typeof client.continuous_projects)[':id']['translate'][':targetLanguage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':id']['translate'][':targetLanguage']['$post']
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
    const mutationDefaults = getPostContinuousProjectsIdTranslateTargetLanguageMutationOptions<
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

export function getContinuousProjectsProjectIdDocumentsQueryKey(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/documents', args] as const
}

export function getContinuousProjectsProjectIdDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdDocumentsQueryKey>
  >({
    queryKey: getContinuousProjectsProjectIdDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':projectId'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsProjectIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsProjectIdDocumentsQueryKey>
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
      ...getContinuousProjectsProjectIdDocumentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostContinuousProjectsProjectIdDocumentsMutationKey() {
  return ['continuous_projects', '/continuous_projects/:projectId/documents', 'POST'] as const
}

export function getPostContinuousProjectsProjectIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsProjectIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':projectId']['documents']['$post']
      >,
    ) {
      return parseResponse(client.continuous_projects[':projectId'].documents.$post(args, options))
    },
  })
}

export function createPostContinuousProjectsProjectIdDocuments<
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
                ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$post']>,
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
    const mutationDefaults = getPostContinuousProjectsProjectIdDocumentsMutationOptions<
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

export function getPostContinuousProjectsProjectIdDocumentsProgressMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/progress',
    'POST',
  ] as const
}

export function getPostContinuousProjectsProjectIdDocumentsProgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['documents']['progress']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents']['progress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsProjectIdDocumentsProgressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':projectId']['documents']['progress']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':projectId'].documents.progress.$post(args, options),
      )
    },
  })
}

export function createPostContinuousProjectsProjectIdDocumentsProgress<
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
                  (typeof client.continuous_projects)[':projectId']['documents']['progress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':projectId']['documents']['progress']['$post']
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
    const mutationDefaults = getPostContinuousProjectsProjectIdDocumentsProgressMutationOptions<
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

export function getPostContinuousProjectsProjectIdDocumentsStringsMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/strings',
    'POST',
  ] as const
}

export function getPostContinuousProjectsProjectIdDocumentsStringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['documents']['strings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents']['strings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsProjectIdDocumentsStringsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':projectId']['documents']['strings']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':projectId'].documents.strings.$post(args, options),
      )
    },
  })
}

export function createPostContinuousProjectsProjectIdDocumentsStrings<
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
                  (typeof client.continuous_projects)[':projectId']['documents']['strings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':projectId']['documents']['strings']['$post']
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
    const mutationDefaults = getPostContinuousProjectsProjectIdDocumentsStringsMutationOptions<
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

export function getContinuousProjectsProjectIdDocumentsDocumentIdQueryKey(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/:documentId',
    args,
  ] as const
}

export function getContinuousProjectsProjectIdDocumentsDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdQueryKey>
  >({
    queryKey: getContinuousProjectsProjectIdDocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':projectId'].documents[':documentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsProjectIdDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdQueryKey>
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
      ...getContinuousProjectsProjectIdDocumentsDocumentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostContinuousProjectsProjectIdDocumentsDocumentIdMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/:documentId',
    'POST',
  ] as const
}

export function getPostContinuousProjectsProjectIdDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsProjectIdDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':projectId'].documents[':documentId'].$post(args, options),
      )
    },
  })
}

export function createPostContinuousProjectsProjectIdDocumentsDocumentId<
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
                  (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$post']
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
    const mutationDefaults = getPostContinuousProjectsProjectIdDocumentsDocumentIdMutationOptions<
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

export function getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryKey(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/:documentId/progress',
    args,
  ] as const
}

export function getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryKey>
  >({
    queryKey: getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':projectId'].documents[':documentId'].progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsProjectIdDocumentsDocumentIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryKey>
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
      ...getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryKey(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/:documentId/strings',
    args,
  ] as const
}

export function getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryKey>
  >({
    queryKey: getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':projectId'].documents[':documentId'].strings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsProjectIdDocumentsDocumentIdStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryKey>
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
      ...getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getContinuousProjectsProjectIdInvoicesQueryKey(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/invoices', args] as const
}

export function getContinuousProjectsProjectIdInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdInvoicesQueryKey>
  >({
    queryKey: getContinuousProjectsProjectIdInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':projectId'].invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsProjectIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.continuous_projects)[':projectId']['invoices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsProjectIdInvoicesQueryKey>
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
      ...getContinuousProjectsProjectIdInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContinuousProjectsProjectIdProgressQueryKey(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/progress', args] as const
}

export function getContinuousProjectsProjectIdProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdProgressQueryKey>
  >({
    queryKey: getContinuousProjectsProjectIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':projectId'].progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsProjectIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.continuous_projects)[':projectId']['progress']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsProjectIdProgressQueryKey>
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
      ...getContinuousProjectsProjectIdProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContinuousProjectsProjectIdStringsQueryKey(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/strings', args] as const
}

export function getContinuousProjectsProjectIdStringsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdStringsQueryKey>
  >({
    queryKey: getContinuousProjectsProjectIdStringsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':projectId'].strings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsProjectIdStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.continuous_projects)[':projectId']['strings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsProjectIdStringsQueryKey>
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
      ...getContinuousProjectsProjectIdStringsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContinuousProjectsProjectIdStringsCachedQueryKey(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
  >,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/strings/cached', args] as const
}

export function getContinuousProjectsProjectIdStringsCachedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdStringsCachedQueryKey>
  >({
    queryKey: getContinuousProjectsProjectIdStringsCachedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':projectId'].strings.cached.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsProjectIdStringsCached<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsProjectIdStringsCachedQueryKey>
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
      ...getContinuousProjectsProjectIdStringsCachedQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteContinuousProjectsProjectIdStringsCachedMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/strings/cached',
    'DELETE',
  ] as const
}

export function getDeleteContinuousProjectsProjectIdStringsCachedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['strings']['cached']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['strings']['cached']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteContinuousProjectsProjectIdStringsCachedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':projectId']['strings']['cached']['$delete']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':projectId'].strings.cached.$delete(args, options),
      )
    },
  })
}

export function createDeleteContinuousProjectsProjectIdStringsCached<
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
                  (typeof client.continuous_projects)[':projectId']['strings']['cached']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':projectId']['strings']['cached']['$delete']
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
    const mutationDefaults = getDeleteContinuousProjectsProjectIdStringsCachedMutationOptions<
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

export function getPostContinuousProjectsProjectIdStringsRecacheTmsMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/strings/recache-tms',
    'POST',
  ] as const
}

export function getPostContinuousProjectsProjectIdStringsRecacheTmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['strings']['recache-tms']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['strings']['recache-tms']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsProjectIdStringsRecacheTmsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':projectId']['strings']['recache-tms']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':projectId'].strings['recache-tms'].$post(args, options),
      )
    },
  })
}

export function createPostContinuousProjectsProjectIdStringsRecacheTms<
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
                  (typeof client.continuous_projects)[':projectId']['strings']['recache-tms']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':projectId']['strings']['recache-tms']['$post']
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
    const mutationDefaults = getPostContinuousProjectsProjectIdStringsRecacheTmsMutationOptions<
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

export function getContinuousProjectsProjectIdWidgetsQueryKey(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/widgets', args] as const
}

export function getContinuousProjectsProjectIdWidgetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdWidgetsQueryKey>
  >({
    queryKey: getContinuousProjectsProjectIdWidgetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':projectId'].widgets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsProjectIdWidgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.continuous_projects)[':projectId']['widgets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsProjectIdWidgetsQueryKey>
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
      ...getContinuousProjectsProjectIdWidgetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostContinuousProjectsProjectIdWidgetsMutationKey() {
  return ['continuous_projects', '/continuous_projects/:projectId/widgets', 'POST'] as const
}

export function getPostContinuousProjectsProjectIdWidgetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsProjectIdWidgetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$post']>,
    ) {
      return parseResponse(client.continuous_projects[':projectId'].widgets.$post(args, options))
    },
  })
}

export function createPostContinuousProjectsProjectIdWidgets<
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
                ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$post']>,
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
    const mutationDefaults = getPostContinuousProjectsProjectIdWidgetsMutationOptions<
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

export function getContinuousProjectsProjectIdWidgetsWidgetIdQueryKey(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
  >,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/widgets/:widgetId', args] as const
}

export function getContinuousProjectsProjectIdWidgetsWidgetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdWidgetsWidgetIdQueryKey>
  >({
    queryKey: getContinuousProjectsProjectIdWidgetsWidgetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.continuous_projects[':projectId'].widgets[':widgetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContinuousProjectsProjectIdWidgetsWidgetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContinuousProjectsProjectIdWidgetsWidgetIdQueryKey>
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
      ...getContinuousProjectsProjectIdWidgetsWidgetIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostContinuousProjectsProjectIdWidgetsWidgetIdMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/widgets/:widgetId',
    'POST',
  ] as const
}

export function getPostContinuousProjectsProjectIdWidgetsWidgetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsProjectIdWidgetsWidgetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':projectId'].widgets[':widgetId'].$post(args, options),
      )
    },
  })
}

export function createPostContinuousProjectsProjectIdWidgetsWidgetId<
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
                  (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$post']
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
    const mutationDefaults = getPostContinuousProjectsProjectIdWidgetsWidgetIdMutationOptions<
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

export function getDeleteContinuousProjectsProjectIdWidgetsWidgetIdMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/widgets/:widgetId',
    'DELETE',
  ] as const
}

export function getDeleteContinuousProjectsProjectIdWidgetsWidgetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteContinuousProjectsProjectIdWidgetsWidgetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':projectId'].widgets[':widgetId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteContinuousProjectsProjectIdWidgetsWidgetId<
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
                  (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$delete']
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
    const mutationDefaults = getDeleteContinuousProjectsProjectIdWidgetsWidgetIdMutationOptions<
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

export function getPostContinuousProjectsProjectIdWidgetsWidgetIdResetTokenMutationKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/widgets/:widgetId/reset-token',
    'POST',
  ] as const
}

export function getPostContinuousProjectsProjectIdWidgetsWidgetIdResetTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['reset-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['reset-token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContinuousProjectsProjectIdWidgetsWidgetIdResetTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['reset-token']['$post']
      >,
    ) {
      return parseResponse(
        client.continuous_projects[':projectId'].widgets[':widgetId']['reset-token'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostContinuousProjectsProjectIdWidgetsWidgetIdResetToken<
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
                  (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['reset-token']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['reset-token']['$post']
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
      getPostContinuousProjectsProjectIdWidgetsWidgetIdResetTokenMutationOptions<
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

export function getCorporateQueryKey() {
  return ['corporate', '/corporate'] as const
}

export function getCorporateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCorporateQueryKey>
  >({
    queryKey: getCorporateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCorporate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCorporateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorporateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCorporatePermissionsQueryKey() {
  return ['corporate', '/corporate/permissions'] as const
}

export function getCorporatePermissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatePermissionsQueryKey>
  >({
    queryKey: getCorporatePermissionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate.permissions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCorporatePermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCorporatePermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorporatePermissionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCorporateUserGroupsQueryKey() {
  return ['corporate', '/corporate/user-groups'] as const
}

export function getCorporateUserGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateUserGroupsQueryKey>
  >({
    queryKey: getCorporateUserGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate['user-groups'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCorporateUserGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCorporateUserGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorporateUserGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostCorporateUserGroupsMutationKey() {
  return ['corporate', '/corporate/user-groups', 'POST'] as const
}

export function getPostCorporateUserGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.corporate)['user-groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.corporate)['user-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCorporateUserGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.corporate)['user-groups']['$post']>) {
      return parseResponse(client.corporate['user-groups'].$post(args, options))
    },
  })
}

export function createPostCorporateUserGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.corporate)['user-groups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.corporate)['user-groups']['$post']>,
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
    const mutationDefaults = getPostCorporateUserGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCorporateUsersQueryKey() {
  return ['corporate', '/corporate/users'] as const
}

export function getCorporateUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateUsersQueryKey>
  >({
    queryKey: getCorporateUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCorporateUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCorporateUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorporateUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostCorporateUsersMutationKey() {
  return ['corporate', '/corporate/users', 'POST'] as const
}

export function getPostCorporateUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.corporate.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCorporateUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.corporate.users.$post>) {
      return parseResponse(client.corporate.users.$post(args, options))
    },
  })
}

export function createPostCorporateUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.corporate.users.$post>,
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
    const mutationDefaults = getPostCorporateUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCorporatesAllQueryKey() {
  return ['corporates', '/corporates/all'] as const
}

export function getCorporatesAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatesAllQueryKey>
  >({
    queryKey: getCorporatesAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.corporates.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCorporatesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCorporatesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorporatesAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCorporatesCorporateIdQueryKey(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['$get']>,
) {
  return ['corporates', '/corporates/:corporateId', args] as const
}

export function getCorporatesCorporateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatesCorporateIdQueryKey>
  >({
    queryKey: getCorporatesCorporateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.corporates[':corporateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCorporatesCorporateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.corporates)[':corporateId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCorporatesCorporateIdQueryKey>
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
      ...getCorporatesCorporateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCorporatesCorporateIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['permissions']['$get']>,
) {
  return ['corporates', '/corporates/:corporateId/permissions', args] as const
}

export function getCorporatesCorporateIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatesCorporateIdPermissionsQueryKey>
  >({
    queryKey: getCorporatesCorporateIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.corporates[':corporateId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCorporatesCorporateIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.corporates)[':corporateId']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCorporatesCorporateIdPermissionsQueryKey>
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
      ...getCorporatesCorporateIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCorporatesCorporateIdUserGroupsQueryKey(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>,
) {
  return ['corporates', '/corporates/:corporateId/user-groups', args] as const
}

export function getCorporatesCorporateIdUserGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatesCorporateIdUserGroupsQueryKey>
  >({
    queryKey: getCorporatesCorporateIdUserGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.corporates[':corporateId']['user-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCorporatesCorporateIdUserGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCorporatesCorporateIdUserGroupsQueryKey>
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
      ...getCorporatesCorporateIdUserGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCorporatesCorporateIdUserGroupsMutationKey() {
  return ['corporates', '/corporates/:corporateId/user-groups', 'POST'] as const
}

export function getPostCorporatesCorporateIdUserGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCorporatesCorporateIdUserGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$post']>,
    ) {
      return parseResponse(client.corporates[':corporateId']['user-groups'].$post(args, options))
    },
  })
}

export function createPostCorporatesCorporateIdUserGroups<
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
                ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$post']>,
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
    const mutationDefaults = getPostCorporatesCorporateIdUserGroupsMutationOptions<
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

export function getCorporatesCorporateIdUsersQueryKey(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['users']['$get']>,
) {
  return ['corporates', '/corporates/:corporateId/users', args] as const
}

export function getCorporatesCorporateIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatesCorporateIdUsersQueryKey>
  >({
    queryKey: getCorporatesCorporateIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.corporates[':corporateId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCorporatesCorporateIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.corporates)[':corporateId']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCorporatesCorporateIdUsersQueryKey>
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
      ...getCorporatesCorporateIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteDeleteAccountMutationKey() {
  return ['delete-account', '/delete-account', 'DELETE'] as const
}

export function getDeleteDeleteAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['delete-account']['$delete']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeleteAccountMutationKey(),
    async mutationFn() {
      return parseResponse(client['delete-account'].$delete(undefined, options))
    },
  })
}

export function createDeleteDeleteAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['delete-account']['$delete']>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteDeleteAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDocumentsQueryKey(args: InferRequestType<typeof client.documents.$get>) {
  return ['documents', '/documents', args] as const
}

export function getDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.documents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocumentsQueryKey>
  >({
    queryKey: getDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.documents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocumentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDocumentsSubjectsQueryKey() {
  return ['documents', '/documents/subjects'] as const
}

export function getDocumentsSubjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsSubjectsQueryKey>
  >({
    queryKey: getDocumentsSubjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.documents.subjects.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsSubjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsSubjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocumentsSubjectsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDocumentsDocumentIdQueryKey(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
) {
  return ['documents', '/documents/:documentId', args] as const
}

export function getDocumentsDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdQueryKey>
  >({
    queryKey: getDocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':documentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocumentsDocumentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDocumentsDocumentIdProgressQueryKey(
  args: InferRequestType<(typeof client.documents)[':documentId']['progress']['$get']>,
) {
  return ['documents', '/documents/:documentId/progress', args] as const
}

export function getDocumentsDocumentIdProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':documentId']['progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdProgressQueryKey>
  >({
    queryKey: getDocumentsDocumentIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':documentId'].progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.documents)[':documentId']['progress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdProgressQueryKey>
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
      ...getDocumentsDocumentIdProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDocumentsDocumentIdRegeneratePreviewMutationKey() {
  return ['documents', '/documents/:documentId/regenerate_preview', 'POST'] as const
}

export function getPostDocumentsDocumentIdRegeneratePreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.documents)[':documentId']['regenerate_preview']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':documentId']['regenerate_preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDocumentIdRegeneratePreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.documents)[':documentId']['regenerate_preview']['$post']
      >,
    ) {
      return parseResponse(client.documents[':documentId'].regenerate_preview.$post(args, options))
    },
  })
}

export function createPostDocumentsDocumentIdRegeneratePreview<
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
                ReturnType<(typeof client.documents)[':documentId']['regenerate_preview']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':documentId']['regenerate_preview']['$post']>,
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
    const mutationDefaults = getPostDocumentsDocumentIdRegeneratePreviewMutationOptions<
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

export function getDocumentsDocumentIdSimilarsQueryKey(
  args: InferRequestType<(typeof client.documents)[':documentId']['similars']['$get']>,
) {
  return ['documents', '/documents/:documentId/similars', args] as const
}

export function getDocumentsDocumentIdSimilarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':documentId']['similars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdSimilarsQueryKey>
  >({
    queryKey: getDocumentsDocumentIdSimilarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':documentId'].similars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentIdSimilars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.documents)[':documentId']['similars']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdSimilarsQueryKey>
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
      ...getDocumentsDocumentIdSimilarsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDocumentsDocumentIdUseAsDraftMutationKey() {
  return ['documents', '/documents/:documentId/use_as_draft', 'POST'] as const
}

export function getPostDocumentsDocumentIdUseAsDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['use_as_draft']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':documentId']['use_as_draft']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDocumentIdUseAsDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.documents)[':documentId']['use_as_draft']['$post']>,
    ) {
      return parseResponse(client.documents[':documentId'].use_as_draft.$post(args, options))
    },
  })
}

export function createPostDocumentsDocumentIdUseAsDraft<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':documentId']['use_as_draft']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':documentId']['use_as_draft']['$post']>,
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
    const mutationDefaults = getPostDocumentsDocumentIdUseAsDraftMutationOptions<
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

export function getPostDocumentsDocumentIdUseAsRegularMutationKey() {
  return ['documents', '/documents/:documentId/use_as_regular', 'POST'] as const
}

export function getPostDocumentsDocumentIdUseAsRegularMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['use_as_regular']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':documentId']['use_as_regular']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDocumentIdUseAsRegularMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.documents)[':documentId']['use_as_regular']['$post']>,
    ) {
      return parseResponse(client.documents[':documentId'].use_as_regular.$post(args, options))
    },
  })
}

export function createPostDocumentsDocumentIdUseAsRegular<
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
                ReturnType<(typeof client.documents)[':documentId']['use_as_regular']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':documentId']['use_as_regular']['$post']>,
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
    const mutationDefaults = getPostDocumentsDocumentIdUseAsRegularMutationOptions<
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

export function getPostDowngradeProofreaderMutationKey() {
  return ['downgrade-proofreader', '/downgrade-proofreader', 'POST'] as const
}

export function getPostDowngradeProofreaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['downgrade-proofreader']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDowngradeProofreaderMutationKey(),
    async mutationFn() {
      return parseResponse(client['downgrade-proofreader'].$post(undefined, options))
    },
  })
}

export function createPostDowngradeProofreader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['downgrade-proofreader']['$post']>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostDowngradeProofreaderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEarningsQueryKey() {
  return ['earnings', '/earnings'] as const
}

export function getEarningsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEarningsQueryKey>
  >({
    queryKey: getEarningsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.earnings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEarnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEarningsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEarningsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getFormatsQueryKey() {
  return ['formats', '/formats'] as const
}

export function getFormatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFormatsQueryKey>
  >({
    queryKey: getFormatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.formats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFormatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostFreezeAccountMutationKey() {
  return ['freeze-account', '/freeze-account', 'POST'] as const
}

export function getPostFreezeAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['freeze-account']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostFreezeAccountMutationKey(),
    async mutationFn() {
      return parseResponse(client['freeze-account'].$post(undefined, options))
    },
  })
}

export function createPostFreezeAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['freeze-account']['$post']>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostFreezeAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGlossaryQueryKey() {
  return ['glossary', '/glossary'] as const
}

export function getGlossaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGlossaryQueryKey>
  >({
    queryKey: getGlossaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.glossary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGlossary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGlossaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGlossaryQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostGlossaryMutationKey() {
  return ['glossary', '/glossary', 'POST'] as const
}

export function getPostGlossaryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$post>>>>>,
    TError,
    InferRequestType<typeof client.glossary.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGlossaryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.glossary.$post>) {
      return parseResponse(client.glossary.$post(args, options))
    },
  })
}

export function createPostGlossary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.glossary.$post>,
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
    const mutationDefaults = getPostGlossaryMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIntegrationsTokenQueryKey() {
  return ['integrations', '/integrations/token'] as const
}

export function getIntegrationsTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsTokenQueryKey>
  >({
    queryKey: getIntegrationsTokenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.token.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIntegrationsToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIntegrationsTokenQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostInvitationVendorsMutationKey() {
  return ['invitation', '/invitation/vendors', 'POST'] as const
}

export function getPostInvitationVendorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.vendors.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invitation.vendors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationVendorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitation.vendors.$post>) {
      return parseResponse(client.invitation.vendors.$post(args, options))
    },
  })
}

export function createPostInvitationVendors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitation.vendors.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invitation.vendors.$post>,
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
    const mutationDefaults = getPostInvitationVendorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLanguagesQueryKey() {
  return ['languages', '/languages'] as const
}

export function getLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLanguagesQueryKey>
  >({
    queryKey: getLanguagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.languages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLanguagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostLocationMutationKey() {
  return ['location', '/location', 'POST'] as const
}

export function getPostLocationMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$post>>>>>,
    TError,
    InferRequestType<typeof client.location.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLocationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.location.$post>) {
      return parseResponse(client.location.$post(args, options))
    },
  })
}

export function createPostLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.location.$post>,
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
    const mutationDefaults = getPostLocationMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMakeProofreaderMutationKey() {
  return ['make-proofreader', '/make-proofreader', 'POST'] as const
}

export function getPostMakeProofreaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['make-proofreader']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMakeProofreaderMutationKey(),
    async mutationFn() {
      return parseResponse(client['make-proofreader'].$post(undefined, options))
    },
  })
}

export function createPostMakeProofreader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['make-proofreader']['$post']>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostMakeProofreaderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createMe<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostMeMutationKey() {
  return ['me', '/me', 'POST'] as const
}

export function getPostMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$post>>>>>,
    TError,
    InferRequestType<typeof client.me.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.$post>) {
      return parseResponse(client.me.$post(args, options))
    },
  })
}

export function createPostMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$post>>>>>,
        TError,
        InferRequestType<typeof client.me.$post>,
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
    const mutationDefaults = getPostMeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMlDeliveryPredictionMutationKey() {
  return ['ml', '/ml/delivery-prediction', 'POST'] as const
}

export function getPostMlDeliveryPredictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ml)['delivery-prediction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ml)['delivery-prediction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMlDeliveryPredictionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ml)['delivery-prediction']['$post']>) {
      return parseResponse(client.ml['delivery-prediction'].$post(args, options))
    },
  })
}

export function createPostMlDeliveryPrediction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ml)['delivery-prediction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ml)['delivery-prediction']['$post']>,
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
    const mutationDefaults = getPostMlDeliveryPredictionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostNotificationsSubscribeMutationKey() {
  return ['notifications', '/notifications/subscribe', 'POST'] as const
}

export function getPostNotificationsSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.subscribe.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notifications.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.subscribe.$post>) {
      return parseResponse(client.notifications.subscribe.$post(args, options))
    },
  })
}

export function createPostNotificationsSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.subscribe.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notifications.subscribe.$post>,
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
    const mutationDefaults = getPostNotificationsSubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostNotificationsUnsubscribeMutationKey() {
  return ['notifications', '/notifications/unsubscribe', 'POST'] as const
}

export function getPostNotificationsUnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unsubscribe.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notifications.unsubscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsUnsubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.unsubscribe.$post>) {
      return parseResponse(client.notifications.unsubscribe.$post(args, options))
    },
  })
}

export function createPostNotificationsUnsubscribe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unsubscribe.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notifications.unsubscribe.$post>,
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
    const mutationDefaults = getPostNotificationsUnsubscribeMutationOptions<
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

export function getPostPamChatMutationKey() {
  return ['pam', '/pam/chat', 'POST'] as const
}

export function getPostPamChatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pam.chat.$post>>>>>,
    TError,
    InferRequestType<typeof client.pam.chat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPamChatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pam.chat.$post>) {
      return parseResponse(client.pam.chat.$post(args, options))
    },
  })
}

export function createPostPamChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pam.chat.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pam.chat.$post>,
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
    const mutationDefaults = getPostPamChatMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPamProfilesClientClientIdQueryKey(
  args: InferRequestType<(typeof client.pam.profiles.client)[':clientId']['$get']>,
) {
  return ['pam', '/pam/profiles/client/:clientId', args] as const
}

export function getPamProfilesClientClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pam.profiles.client)[':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPamProfilesClientClientIdQueryKey>
  >({
    queryKey: getPamProfilesClientClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pam.profiles.client[':clientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPamProfilesClientClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pam.profiles.client)[':clientId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPamProfilesClientClientIdQueryKey>
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
      ...getPamProfilesClientClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPamProjectsProjectIdCompletionReportQueryKey(
  args: InferRequestType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>,
) {
  return ['pam', '/pam/projects/:projectId/completion-report', args] as const
}

export function getPamProjectsProjectIdCompletionReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPamProjectsProjectIdCompletionReportQueryKey>
  >({
    queryKey: getPamProjectsProjectIdCompletionReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pam.projects[':projectId']['completion-report'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPamProjectsProjectIdCompletionReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.pam.projects)[':projectId']['completion-report']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPamProjectsProjectIdCompletionReportQueryKey>
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
      ...getPamProjectsProjectIdCompletionReportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPasswordMutationKey() {
  return ['password', '/password', 'POST'] as const
}

export function getPostPasswordMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password.$post>>>>>,
    TError,
    InferRequestType<typeof client.password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.password.$post>) {
      return parseResponse(client.password.$post(args, options))
    },
  })
}

export function createPostPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.password.$post>,
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
    const mutationDefaults = getPostPasswordMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaymentQueryKey() {
  return ['payment', '/payment'] as const
}

export function getPaymentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaymentQueryKey>
  >({
    queryKey: getPaymentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.payment.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPayment<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPaymentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostPaymentMutationKey() {
  return ['payment', '/payment', 'POST'] as const
}

export function getPostPaymentMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$post>>>>>,
    TError,
    InferRequestType<typeof client.payment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment.$post>) {
      return parseResponse(client.payment.$post(args, options))
    },
  })
}

export function createPostPayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$post>>>>>,
        TError,
        InferRequestType<typeof client.payment.$post>,
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
    const mutationDefaults = getPostPaymentMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaymentResetCorporatePaymentCodeMutationKey() {
  return ['payment', '/payment/reset-corporate-payment-code', 'POST'] as const
}

export function getPostPaymentResetCorporatePaymentCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment)['reset-corporate-payment-code']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentResetCorporatePaymentCodeMutationKey(),
    async mutationFn() {
      return parseResponse(client.payment['reset-corporate-payment-code'].$post(undefined, options))
    },
  })
}

export function createPostPaymentResetCorporatePaymentCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment)['reset-corporate-payment-code']['$post']>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostPaymentResetCorporatePaymentCodeMutationOptions<
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

export function getPostPaymentToggleCorporateAutoChargeMutationKey() {
  return ['payment', '/payment/toggle-corporate-auto-charge', 'POST'] as const
}

export function getPostPaymentToggleCorporateAutoChargeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment)['toggle-corporate-auto-charge']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentToggleCorporateAutoChargeMutationKey(),
    async mutationFn() {
      return parseResponse(client.payment['toggle-corporate-auto-charge'].$post(undefined, options))
    },
  })
}

export function createPostPaymentToggleCorporateAutoCharge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment)['toggle-corporate-auto-charge']['$post']>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostPaymentToggleCorporateAutoChargeMutationOptions<
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

export function getPaymentCardIdQueryKey(
  args: InferRequestType<(typeof client.payment)[':cardId']['$get']>,
) {
  return ['payment', '/payment/:cardId', args] as const
}

export function getPaymentCardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment)[':cardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentCardIdQueryKey>
  >({
    queryKey: getPaymentCardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment[':cardId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPaymentCardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payment)[':cardId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentCardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentCardIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeletePaymentCardIdDeleteMutationKey() {
  return ['payment', '/payment/:cardId/delete', 'DELETE'] as const
}

export function getDeletePaymentCardIdDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment)[':cardId']['delete']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payment)[':cardId']['delete']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePaymentCardIdDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payment)[':cardId']['delete']['$delete']>,
    ) {
      return parseResponse(client.payment[':cardId'].delete.$delete(args, options))
    },
  })
}

export function createDeletePaymentCardIdDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment)[':cardId']['delete']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payment)[':cardId']['delete']['$delete']>,
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
    const mutationDefaults = getDeletePaymentCardIdDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaymentCardIdResetPaymentCodeMutationKey() {
  return ['payment', '/payment/:cardId/reset-payment-code', 'POST'] as const
}

export function getPostPaymentCardIdResetPaymentCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment)[':cardId']['reset-payment-code']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payment)[':cardId']['reset-payment-code']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentCardIdResetPaymentCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payment)[':cardId']['reset-payment-code']['$post']>,
    ) {
      return parseResponse(client.payment[':cardId']['reset-payment-code'].$post(args, options))
    },
  })
}

export function createPostPaymentCardIdResetPaymentCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment)[':cardId']['reset-payment-code']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payment)[':cardId']['reset-payment-code']['$post']>,
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
    const mutationDefaults = getPostPaymentCardIdResetPaymentCodeMutationOptions<
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

export function getPermissionsQueryKey() {
  return ['permissions', '/permissions'] as const
}

export function getPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPermissionsQueryKey>
  >({
    queryKey: getPermissionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.permissions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPermissionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostProfilePictureMutationKey() {
  return ['profile-picture', '/profile-picture', 'POST'] as const
}

export function getPostProfilePictureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['profile-picture']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['profile-picture']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProfilePictureMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['profile-picture']['$post']>) {
      return parseResponse(client['profile-picture'].$post(args, options))
    },
  })
}

export function createPostProfilePicture<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['profile-picture']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['profile-picture']['$post']>,
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
    const mutationDefaults = getPostProfilePictureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsQueryKey(args: InferRequestType<typeof client.projects.$get>) {
  return ['projects', '/projects', args] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostProjectsMutationKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.$post>) {
      return parseResponse(client.projects.$post(args, options))
    },
  })
}

export function createPostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.projects.$post>,
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
    const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsFromInternalIdProjectIdQueryKey(
  args: InferRequestType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>,
) {
  return ['projects', '/projects/from-internal-id/:projectId', args] as const
}

export function getProjectsFromInternalIdProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsFromInternalIdProjectIdQueryKey>
  >({
    queryKey: getProjectsFromInternalIdProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects['from-internal-id'][':projectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsFromInternalIdProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsFromInternalIdProjectIdQueryKey>
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
      ...getProjectsFromInternalIdProjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsVendorQueryKey(
  args: InferRequestType<typeof client.projects.vendor.$get>,
) {
  return ['projects', '/projects/vendor', args] as const
}

export function getProjectsVendorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.projects.vendor.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsVendorQueryKey>
  >({
    queryKey: getProjectsVendorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.vendor.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsVendor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.projects.vendor.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsVendorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsVendorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
) {
  return ['projects', '/projects/:id', args] as const
}

export function getProjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.projects)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdQueryKey>
  >({
    queryKey: getProjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutProjectsIdMutationKey() {
  return ['projects', '/projects/:id', 'PUT'] as const
}

export function getPutProjectsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['$put']>) {
      return parseResponse(client.projects[':id'].$put(args, options))
    },
  })
}

export function createPutProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['$put']>,
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
    const mutationDefaults = getPutProjectsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteProjectsIdMutationKey() {
  return ['projects', '/projects/:id', 'DELETE'] as const
}

export function getDeleteProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['$delete']>) {
      return parseResponse(client.projects[':id'].$delete(args, options))
    },
  })
}

export function createDeleteProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteProjectsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProjectsIdAssignCmMutationKey() {
  return ['projects', '/projects/:id/assign-cm', 'POST'] as const
}

export function getPostProjectsIdAssignCmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['assign-cm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['assign-cm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdAssignCmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':id']['assign-cm']['$post']>,
    ) {
      return parseResponse(client.projects[':id']['assign-cm'].$post(args, options))
    },
  })
}

export function createPostProjectsIdAssignCm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['assign-cm']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['assign-cm']['$post']>,
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
    const mutationDefaults = getPostProjectsIdAssignCmMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdCallbackActionTypeQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>,
) {
  return ['projects', '/projects/:id/callback/:actionType', args] as const
}

export function getProjectsIdCallbackActionTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdCallbackActionTypeQueryKey>
  >({
    queryKey: getProjectsIdCallbackActionTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].callback[':actionType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdCallbackActionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdCallbackActionTypeQueryKey>
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
      ...getProjectsIdCallbackActionTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsIdCancelMutationKey() {
  return ['projects', '/projects/:id/cancel', 'POST'] as const
}

export function getPostProjectsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['cancel']['$post']>) {
      return parseResponse(client.projects[':id'].cancel.$post(args, options))
    },
  })
}

export function createPostProjectsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['cancel']['$post']>,
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
    const mutationDefaults = getPostProjectsIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProjectsIdDeliverMutationKey() {
  return ['projects', '/projects/:id/deliver', 'POST'] as const
}

export function getPostProjectsIdDeliverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['deliver']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['deliver']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdDeliverMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['deliver']['$post']>) {
      return parseResponse(client.projects[':id'].deliver.$post(args, options))
    },
  })
}

export function createPostProjectsIdDeliver<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['deliver']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['deliver']['$post']>,
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
    const mutationDefaults = getPostProjectsIdDeliverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdDownloadQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['download']['$get']>,
) {
  return ['projects', '/projects/:id/download', args] as const
}

export function getProjectsIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdDownloadQueryKey>
  >({
    queryKey: getProjectsIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['download']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsIdDownloadLanguageQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['download'][':language']['$get']>,
) {
  return ['projects', '/projects/:id/download/:language', args] as const
}

export function getProjectsIdDownloadLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['download'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdDownloadLanguageQueryKey>
  >({
    queryKey: getProjectsIdDownloadLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].download[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdDownloadLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['download'][':language']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdDownloadLanguageQueryKey>
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
      ...getProjectsIdDownloadLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsIdEmailQuoteMutationKey() {
  return ['projects', '/projects/:id/email-quote', 'POST'] as const
}

export function getPostProjectsIdEmailQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['email-quote']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['email-quote']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdEmailQuoteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':id']['email-quote']['$post']>,
    ) {
      return parseResponse(client.projects[':id']['email-quote'].$post(args, options))
    },
  })
}

export function createPostProjectsIdEmailQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['email-quote']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['email-quote']['$post']>,
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
    const mutationDefaults = getPostProjectsIdEmailQuoteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdInvoiceQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['invoice']['$get']>,
) {
  return ['projects', '/projects/:id/invoice', args] as const
}

export function getProjectsIdInvoiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['invoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdInvoiceQueryKey>
  >({
    queryKey: getProjectsIdInvoiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].invoice.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdInvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['invoice']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdInvoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdInvoiceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsIdInvoiceHtmlQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.html']['$get']>,
) {
  return ['projects', '/projects/:id/invoice.html', args] as const
}

export function getProjectsIdInvoiceHtmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.html']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdInvoiceHtmlQueryKey>
  >({
    queryKey: getProjectsIdInvoiceHtmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id']['invoice.html'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdInvoiceHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['invoice.html']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdInvoiceHtmlQueryKey>
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
      ...getProjectsIdInvoiceHtmlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsIdInvoicePdfQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.pdf']['$get']>,
) {
  return ['projects', '/projects/:id/invoice.pdf', args] as const
}

export function getProjectsIdInvoicePdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdInvoicePdfQueryKey>
  >({
    queryKey: getProjectsIdInvoicePdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id']['invoice.pdf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdInvoicePdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['invoice.pdf']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdInvoicePdfQueryKey>
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
      ...getProjectsIdInvoicePdfQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsIdLaunchMutationKey() {
  return ['projects', '/projects/:id/launch', 'POST'] as const
}

export function getPostProjectsIdLaunchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['launch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['launch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdLaunchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['launch']['$post']>) {
      return parseResponse(client.projects[':id'].launch.$post(args, options))
    },
  })
}

export function createPostProjectsIdLaunch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['launch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['launch']['$post']>,
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
    const mutationDefaults = getPostProjectsIdLaunchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProjectsIdPackageMutationKey() {
  return ['projects', '/projects/:id/package', 'POST'] as const
}

export function getPostProjectsIdPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['package']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['package']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdPackageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['package']['$post']>) {
      return parseResponse(client.projects[':id'].package.$post(args, options))
    },
  })
}

export function createPostProjectsIdPackage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['package']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['package']['$post']>,
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
    const mutationDefaults = getPostProjectsIdPackageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdPackageCheckQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['package']['check']['$get']>,
) {
  return ['projects', '/projects/:id/package/check', args] as const
}

export function getProjectsIdPackageCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['package']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdPackageCheckQueryKey>
  >({
    queryKey: getProjectsIdPackageCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].package.check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdPackageCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['package']['check']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdPackageCheckQueryKey>
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
      ...getProjectsIdPackageCheckQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsIdPackageLanguageMutationKey() {
  return ['projects', '/projects/:id/package/:language', 'POST'] as const
}

export function getPostProjectsIdPackageLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['package'][':language']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['package'][':language']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdPackageLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':id']['package'][':language']['$post']>,
    ) {
      return parseResponse(client.projects[':id'].package[':language'].$post(args, options))
    },
  })
}

export function createPostProjectsIdPackageLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['package'][':language']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['package'][':language']['$post']>,
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
    const mutationDefaults = getPostProjectsIdPackageLanguageMutationOptions<
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

export function getProjectsIdProgressQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['progress']['$get']>,
) {
  return ['projects', '/projects/:id/progress', args] as const
}

export function getProjectsIdProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdProgressQueryKey>
  >({
    queryKey: getProjectsIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['progress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdProgressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostProjectsIdRecreateMutationKey() {
  return ['projects', '/projects/:id/recreate', 'POST'] as const
}

export function getPostProjectsIdRecreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['recreate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['recreate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdRecreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['recreate']['$post']>) {
      return parseResponse(client.projects[':id'].recreate.$post(args, options))
    },
  })
}

export function createPostProjectsIdRecreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['recreate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['recreate']['$post']>,
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
    const mutationDefaults = getPostProjectsIdRecreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProjectsIdReportsMutationKey() {
  return ['projects', '/projects/:id/reports', 'POST'] as const
}

export function getPostProjectsIdReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdReportsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['reports']['$post']>) {
      return parseResponse(client.projects[':id'].reports.$post(args, options))
    },
  })
}

export function createPostProjectsIdReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['reports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['reports']['$post']>,
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
    const mutationDefaults = getPostProjectsIdReportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdSalesActivitiesQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$get']>,
) {
  return ['projects', '/projects/:id/sales/activities', args] as const
}

export function getProjectsIdSalesActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdSalesActivitiesQueryKey>
  >({
    queryKey: getProjectsIdSalesActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].sales.activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdSalesActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdSalesActivitiesQueryKey>
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
      ...getProjectsIdSalesActivitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsIdSalesActivitiesMutationKey() {
  return ['projects', '/projects/:id/sales/activities', 'POST'] as const
}

export function getPostProjectsIdSalesActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdSalesActivitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$post']>,
    ) {
      return parseResponse(client.projects[':id'].sales.activities.$post(args, options))
    },
  })
}

export function createPostProjectsIdSalesActivities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$post']>,
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
    const mutationDefaults = getPostProjectsIdSalesActivitiesMutationOptions<
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

export function getProjectsIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$get']>,
) {
  return ['projects', '/projects/:id/webhooks', args] as const
}

export function getProjectsIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdWebhooksQueryKey>
  >({
    queryKey: getProjectsIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['webhooks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutProjectsIdWebhooksMutationKey() {
  return ['projects', '/projects/:id/webhooks', 'PUT'] as const
}

export function getPutProjectsIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['webhooks']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsIdWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$put']>) {
      return parseResponse(client.projects[':id'].webhooks.$put(args, options))
    },
  })
}

export function createPutProjectsIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['webhooks']['$put']>,
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
    const mutationDefaults = getPutProjectsIdWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProjectsIdWebhooksMutationKey() {
  return ['projects', '/projects/:id/webhooks', 'POST'] as const
}

export function getPostProjectsIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$post']>) {
      return parseResponse(client.projects[':id'].webhooks.$post(args, options))
    },
  })
}

export function createPostProjectsIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['webhooks']['$post']>,
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
    const mutationDefaults = getPostProjectsIdWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteProjectsIdWebhooksMutationKey() {
  return ['projects', '/projects/:id/webhooks', 'DELETE'] as const
}

export function getDeleteProjectsIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['webhooks']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$delete']>,
    ) {
      return parseResponse(client.projects[':id'].webhooks.$delete(args, options))
    },
  })
}

export function createDeleteProjectsIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['webhooks']['$delete']>,
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
    const mutationDefaults = getDeleteProjectsIdWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdActivitiesQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['activities']['$get']>,
) {
  return ['projects', '/projects/:projectId/activities', args] as const
}

export function getProjectsProjectIdActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdActivitiesQueryKey>
  >({
    queryKey: getProjectsProjectIdActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['activities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdActivitiesQueryKey>
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
      ...getProjectsProjectIdActivitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdActivitiesActivityIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/activities/:activityId', args] as const
}

export function getProjectsProjectIdActivitiesActivityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['activities'][':activityId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['activities'][':activityId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdActivitiesActivityIdQueryKey>
  >({
    queryKey: getProjectsProjectIdActivitiesActivityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].activities[':activityId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdActivitiesActivityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['activities'][':activityId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdActivitiesActivityIdQueryKey>
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
      ...getProjectsProjectIdActivitiesActivityIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsProjectIdActivitiesActivityIdMutationKey() {
  return ['projects', '/projects/:projectId/activities/:activityId', 'POST'] as const
}

export function getPostProjectsProjectIdActivitiesActivityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['activities'][':activityId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['activities'][':activityId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdActivitiesActivityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['activities'][':activityId']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].activities[':activityId'].$post(args, options),
      )
    },
  })
}

export function createPostProjectsProjectIdActivitiesActivityId<
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
                  (typeof client.projects)[':projectId']['activities'][':activityId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['activities'][':activityId']['$post']
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
    const mutationDefaults = getPostProjectsProjectIdActivitiesActivityIdMutationOptions<
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

export function getProjectsProjectIdActivitiesActivityIdCommentsQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/activities/:activityId/comments', args] as const
}

export function getProjectsProjectIdActivitiesActivityIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdActivitiesActivityIdCommentsQueryKey>
  >({
    queryKey: getProjectsProjectIdActivitiesActivityIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].activities[':activityId'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdActivitiesActivityIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdActivitiesActivityIdCommentsQueryKey>
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
      ...getProjectsProjectIdActivitiesActivityIdCommentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdCommentsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['comments']['$get']>,
) {
  return ['projects', '/projects/:projectId/comments', args] as const
}

export function getProjectsProjectIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdCommentsQueryKey>
  >({
    queryKey: getProjectsProjectIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdCommentsQueryKey>
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
      ...getProjectsProjectIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdDocumentsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['documents']['$get']>,
) {
  return ['projects', '/projects/:projectId/documents', args] as const
}

export function getProjectsProjectIdDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsQueryKey>
  >({
    queryKey: getProjectsProjectIdDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['documents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdDocumentsQueryKey>
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
      ...getProjectsProjectIdDocumentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsProjectIdDocumentsMutationKey() {
  return ['projects', '/projects/:projectId/documents', 'POST'] as const
}

export function getPostProjectsProjectIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['documents']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].documents.$post(args, options))
    },
  })
}

export function createPostProjectsProjectIdDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['documents']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectIdDocumentsMutationOptions<
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

export function getProjectsProjectIdDocumentsDocumentIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/documents/:documentId', args] as const
}

export function getProjectsProjectIdDocumentsDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['documents'][':documentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['documents'][':documentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdQueryKey>
  >({
    queryKey: getProjectsProjectIdDocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['documents'][':documentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['documents'][':documentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdQueryKey>
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
      ...getProjectsProjectIdDocumentsDocumentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsProjectIdDocumentsDocumentIdMutationKey() {
  return ['projects', '/projects/:projectId/documents/:documentId', 'POST'] as const
}

export function getPostProjectsProjectIdDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['documents'][':documentId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['documents'][':documentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['documents'][':documentId']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].$post(args, options),
      )
    },
  })
}

export function createPostProjectsProjectIdDocumentsDocumentId<
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
                  (typeof client.projects)[':projectId']['documents'][':documentId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['documents'][':documentId']['$post']
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
    const mutationDefaults = getPostProjectsProjectIdDocumentsDocumentIdMutationOptions<
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

export function getDeleteProjectsProjectIdDocumentsDocumentIdMutationKey() {
  return ['projects', '/projects/:projectId/documents/:documentId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['documents'][':documentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['documents'][':documentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['documents'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsProjectIdDocumentsDocumentId<
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
                  (typeof client.projects)[':projectId']['documents'][':documentId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['documents'][':documentId']['$delete']
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
    const mutationDefaults = getDeleteProjectsProjectIdDocumentsDocumentIdMutationOptions<
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

export function getProjectsProjectIdDocumentsDocumentIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/documents/:documentId/download', args] as const
}

export function getProjectsProjectIdDocumentsDocumentIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdDownloadQueryKey>
  >({
    queryKey: getProjectsProjectIdDocumentsDocumentIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDocumentsDocumentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdDownloadQueryKey>
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
      ...getProjectsProjectIdDocumentsDocumentIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/documents/:documentId/translations', args] as const
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdTranslationsQueryKey>
  >({
    queryKey: getProjectsProjectIdDocumentsDocumentIdTranslationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].translations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDocumentsDocumentIdTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdTranslationsQueryKey>
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
      ...getProjectsProjectIdDocumentsDocumentIdTranslationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:projectId/documents/:documentId/translations/download/:language',
    args,
  ] as const
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryKey>
  >({
    queryKey: getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].translations.download[
          ':language'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryKey
        >
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
      ...getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:projectId/documents/:documentId/translations/:language',
    args,
  ] as const
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryKey>
  >({
    queryKey: getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].translations[':language'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createProjectsProjectIdDocumentsDocumentIdTranslationsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryKey>
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
      ...getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdGlossariesQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$get']>,
) {
  return ['projects', '/projects/:projectId/glossaries', args] as const
}

export function getProjectsProjectIdGlossariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdGlossariesQueryKey>
  >({
    queryKey: getProjectsProjectIdGlossariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].glossaries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdGlossaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdGlossariesQueryKey>
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
      ...getProjectsProjectIdGlossariesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsProjectIdGlossariesMutationKey() {
  return ['projects', '/projects/:projectId/glossaries', 'POST'] as const
}

export function getPostProjectsProjectIdGlossariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdGlossariesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].glossaries.$post(args, options))
    },
  })
}

export function createPostProjectsProjectIdGlossaries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectIdGlossariesMutationOptions<
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

export function getProjectsProjectIdGlossariesGlossaryIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/glossaries/:glossaryId', args] as const
}

export function getProjectsProjectIdGlossariesGlossaryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdGlossariesGlossaryIdQueryKey>
  >({
    queryKey: getProjectsProjectIdGlossariesGlossaryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].glossaries[':glossaryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdGlossariesGlossaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdGlossariesGlossaryIdQueryKey>
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
      ...getProjectsProjectIdGlossariesGlossaryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsProjectIdGlossariesGlossaryIdMutationKey() {
  return ['projects', '/projects/:projectId/glossaries/:glossaryId', 'PUT'] as const
}

export function getPutProjectsProjectIdGlossariesGlossaryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdGlossariesGlossaryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].glossaries[':glossaryId'].$put(args, options),
      )
    },
  })
}

export function createPutProjectsProjectIdGlossariesGlossaryId<
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
                  (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$put']
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
    const mutationDefaults = getPutProjectsProjectIdGlossariesGlossaryIdMutationOptions<
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

export function getDeleteProjectsProjectIdGlossariesGlossaryIdMutationKey() {
  return ['projects', '/projects/:projectId/glossaries/:glossaryId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdGlossariesGlossaryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdGlossariesGlossaryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].glossaries[':glossaryId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsProjectIdGlossariesGlossaryId<
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
                  (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$delete']
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
    const mutationDefaults = getDeleteProjectsProjectIdGlossariesGlossaryIdMutationOptions<
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

export function getProjectsProjectIdGlossariesGlossaryIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/glossaries/:glossaryId/download', args] as const
}

export function getProjectsProjectIdGlossariesGlossaryIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdGlossariesGlossaryIdDownloadQueryKey>
  >({
    queryKey: getProjectsProjectIdGlossariesGlossaryIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].glossaries[':glossaryId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdGlossariesGlossaryIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdGlossariesGlossaryIdDownloadQueryKey>
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
      ...getProjectsProjectIdGlossariesGlossaryIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdStringsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings']['$get']>,
) {
  return ['projects', '/projects/:projectId/strings', args] as const
}

export function getProjectsProjectIdStringsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStringsQueryKey>
  >({
    queryKey: getProjectsProjectIdStringsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].strings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['strings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdStringsQueryKey>
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
      ...getProjectsProjectIdStringsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsProjectIdStringsPackageMutationKey() {
  return ['projects', '/projects/:projectId/strings/package', 'POST'] as const
}

export function getPostProjectsProjectIdStringsPackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['package']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['strings']['package']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdStringsPackageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['strings']['package']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].strings.package.$post(args, options))
    },
  })
}

export function createPostProjectsProjectIdStringsPackage<
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
                ReturnType<(typeof client.projects)[':projectId']['strings']['package']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['strings']['package']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectIdStringsPackageMutationOptions<
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

export function getProjectsProjectIdStringsPackageStatusQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/strings/package/status', args] as const
}

export function getProjectsProjectIdStringsPackageStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['strings']['package']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStringsPackageStatusQueryKey>
  >({
    queryKey: getProjectsProjectIdStringsPackageStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].strings.package.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdStringsPackageStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['strings']['package']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdStringsPackageStatusQueryKey>
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
      ...getProjectsProjectIdStringsPackageStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsProjectIdStringsLanguageCodePackageMutationKey() {
  return ['projects', '/projects/:projectId/strings/:languageCode/package', 'POST'] as const
}

export function getPostProjectsProjectIdStringsLanguageCodePackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdStringsLanguageCodePackageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].strings[':languageCode'].package.$post(args, options),
      )
    },
  })
}

export function createPostProjectsProjectIdStringsLanguageCodePackage<
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
                  (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['$post']
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
    const mutationDefaults = getPostProjectsProjectIdStringsLanguageCodePackageMutationOptions<
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

export function getProjectsProjectIdStringsLanguageCodePackageStatusQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/strings/:languageCode/package/status', args] as const
}

export function getProjectsProjectIdStringsLanguageCodePackageStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStringsLanguageCodePackageStatusQueryKey>
  >({
    queryKey: getProjectsProjectIdStringsLanguageCodePackageStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].strings[':languageCode'].package.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdStringsLanguageCodePackageStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdStringsLanguageCodePackageStatusQueryKey>
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
      ...getProjectsProjectIdStringsLanguageCodePackageStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdStringsLanguageQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>,
) {
  return ['projects', '/projects/:projectId/strings/:language', args] as const
}

export function getProjectsProjectIdStringsLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStringsLanguageQueryKey>
  >({
    queryKey: getProjectsProjectIdStringsLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].strings[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdStringsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['strings'][':language']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdStringsLanguageQueryKey>
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
      ...getProjectsProjectIdStringsLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdStyleguidesQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$get']>,
) {
  return ['projects', '/projects/:projectId/styleguides', args] as const
}

export function getProjectsProjectIdStyleguidesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStyleguidesQueryKey>
  >({
    queryKey: getProjectsProjectIdStyleguidesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].styleguides.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdStyleguides<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdStyleguidesQueryKey>
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
      ...getProjectsProjectIdStyleguidesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsProjectIdStyleguidesMutationKey() {
  return ['projects', '/projects/:projectId/styleguides', 'POST'] as const
}

export function getPostProjectsProjectIdStyleguidesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdStyleguidesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].styleguides.$post(args, options))
    },
  })
}

export function createPostProjectsProjectIdStyleguides<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectIdStyleguidesMutationOptions<
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

export function getProjectsProjectIdStyleguidesStyleGuideIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/styleguides/:styleGuideId', args] as const
}

export function getProjectsProjectIdStyleguidesStyleGuideIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStyleguidesStyleGuideIdQueryKey>
  >({
    queryKey: getProjectsProjectIdStyleguidesStyleGuideIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].styleguides[':styleGuideId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdStyleguidesStyleGuideId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdStyleguidesStyleGuideIdQueryKey>
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
      ...getProjectsProjectIdStyleguidesStyleGuideIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsProjectIdStyleguidesStyleGuideIdMutationKey() {
  return ['projects', '/projects/:projectId/styleguides/:styleGuideId', 'PUT'] as const
}

export function getPutProjectsProjectIdStyleguidesStyleGuideIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdStyleguidesStyleGuideIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].styleguides[':styleGuideId'].$put(args, options),
      )
    },
  })
}

export function createPutProjectsProjectIdStyleguidesStyleGuideId<
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
                  (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$put']
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
    const mutationDefaults = getPutProjectsProjectIdStyleguidesStyleGuideIdMutationOptions<
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

export function getDeleteProjectsProjectIdStyleguidesStyleGuideIdMutationKey() {
  return ['projects', '/projects/:projectId/styleguides/:styleGuideId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdStyleguidesStyleGuideIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdStyleguidesStyleGuideIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].styleguides[':styleGuideId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsProjectIdStyleguidesStyleGuideId<
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
                  (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$delete']
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
    const mutationDefaults = getDeleteProjectsProjectIdStyleguidesStyleGuideIdMutationOptions<
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

export function getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/styleguides/:styleGuideId/download', args] as const
}

export function getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryKey>
  >({
    queryKey: getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].styleguides[':styleGuideId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdStyleguidesStyleGuideIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryKey>
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
      ...getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdTranslationsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['translations']['$get']>,
) {
  return ['projects', '/projects/:projectId/translations', args] as const
}

export function getProjectsProjectIdTranslationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['translations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTranslationsQueryKey>
  >({
    queryKey: getProjectsProjectIdTranslationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].translations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['translations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdTranslationsQueryKey>
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
      ...getProjectsProjectIdTranslationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdTranslationsLanguageQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['translations'][':language']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/translations/:language', args] as const
}

export function getProjectsProjectIdTranslationsLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['translations'][':language']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['translations'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['translations'][':language']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTranslationsLanguageQueryKey>
  >({
    queryKey: getProjectsProjectIdTranslationsLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].translations[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdTranslationsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['translations'][':language']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['translations'][':language']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['translations'][':language']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdTranslationsLanguageQueryKey>
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
      ...getProjectsProjectIdTranslationsLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdVendorsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['vendors']['$get']>,
) {
  return ['projects', '/projects/:projectId/vendors', args] as const
}

export function getProjectsProjectIdVendorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['vendors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdVendorsQueryKey>
  >({
    queryKey: getProjectsProjectIdVendorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].vendors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdVendors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['vendors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdVendorsQueryKey>
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
      ...getProjectsProjectIdVendorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostReportsFilterMutationKey() {
  return ['reports', '/reports/filter', 'POST'] as const
}

export function getPostReportsFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.filter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reports.filter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsFilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.filter.$post>) {
      return parseResponse(client.reports.filter.$post(args, options))
    },
  })
}

export function createPostReportsFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.filter.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.reports.filter.$post>,
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
    const mutationDefaults = getPostReportsFilterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReportsLanguagePairsMutationKey() {
  return ['reports', '/reports/language-pairs', 'POST'] as const
}

export function getPostReportsLanguagePairsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports)['language-pairs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reports)['language-pairs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsLanguagePairsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reports)['language-pairs']['$post']>) {
      return parseResponse(client.reports['language-pairs'].$post(args, options))
    },
  })
}

export function createPostReportsLanguagePairs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports)['language-pairs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.reports)['language-pairs']['$post']>,
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
    const mutationDefaults = getPostReportsLanguagePairsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReportsProjectsMutationKey() {
  return ['reports', '/reports/projects', 'POST'] as const
}

export function getPostReportsProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.projects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reports.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.projects.$post>) {
      return parseResponse(client.reports.projects.$post(args, options))
    },
  })
}

export function createPostReportsProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reports.projects.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reports.projects.$post>,
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
    const mutationDefaults = getPostReportsProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReportsQaMutationKey() {
  return ['reports', '/reports/qa', 'POST'] as const
}

export function getPostReportsQaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.qa.$post>>>>>,
    TError,
    InferRequestType<typeof client.reports.qa.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsQaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.qa.$post>) {
      return parseResponse(client.reports.qa.$post(args, options))
    },
  })
}

export function createPostReportsQa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.qa.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.reports.qa.$post>,
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
    const mutationDefaults = getPostReportsQaMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReportsUsersMutationKey() {
  return ['reports', '/reports/users', 'POST'] as const
}

export function getPostReportsUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reports.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.users.$post>) {
      return parseResponse(client.reports.users.$post(args, options))
    },
  })
}

export function createPostReportsUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.reports.users.$post>,
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
    const mutationDefaults = getPostReportsUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostResendEmailConfirmationMutationKey() {
  return ['resend-email-confirmation', '/resend-email-confirmation', 'POST'] as const
}

export function getPostResendEmailConfirmationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['resend-email-confirmation']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostResendEmailConfirmationMutationKey(),
    async mutationFn() {
      return parseResponse(client['resend-email-confirmation'].$post(undefined, options))
    },
  })
}

export function createPostResendEmailConfirmation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['resend-email-confirmation']['$post']>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostResendEmailConfirmationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getResponsivityQueryKey(args: InferRequestType<typeof client.responsivity.$get>) {
  return ['responsivity', '/responsivity', args] as const
}

export function getResponsivityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.responsivity.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResponsivityQueryKey>
  >({
    queryKey: getResponsivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.responsivity.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createResponsivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.responsivity.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getResponsivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResponsivityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSearchDocumentsReindexMutationKey() {
  return ['search', '/search/documents/reindex', 'POST'] as const
}

export function getPostSearchDocumentsReindexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.documents.reindex.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSearchDocumentsReindexMutationKey(),
    async mutationFn() {
      return parseResponse(client.search.documents.reindex.$post(undefined, options))
    },
  })
}

export function createPostSearchDocumentsReindex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.documents.reindex.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostSearchDocumentsReindexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSearchDocumentsReindexStatusQueryKey(
  args: InferRequestType<typeof client.search.documents.reindex.status.$get>,
) {
  return ['search', '/search/documents/reindex/status', args] as const
}

export function getSearchDocumentsReindexStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.documents.reindex.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchDocumentsReindexStatusQueryKey>
  >({
    queryKey: getSearchDocumentsReindexStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.documents.reindex.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchDocumentsReindexStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.documents.reindex.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchDocumentsReindexStatusQueryKey>
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
      ...getSearchDocumentsReindexStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatsQueryKey() {
  return ['stats', '/stats'] as const
}

export function getStatsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsQueryKey>
  >({
    queryKey: getStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatsCommissionsQueryKey() {
  return ['stats', '/stats/commissions'] as const
}

export function getStatsCommissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCommissionsQueryKey>
  >({
    queryKey: getStatsCommissionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.commissions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatsCommissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCommissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsCommissionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostStatsCommissionsMutationKey() {
  return ['stats', '/stats/commissions', 'POST'] as const
}

export function getPostStatsCommissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.stats.commissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStatsCommissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stats.commissions.$post>) {
      return parseResponse(client.stats.commissions.$post(args, options))
    },
  })
}

export function createPostStatsCommissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.stats.commissions.$post>,
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
    const mutationDefaults = getPostStatsCommissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatsPopularPairsQueryKey() {
  return ['stats', '/stats/popular-pairs'] as const
}

export function getStatsPopularPairsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsPopularPairsQueryKey>
  >({
    queryKey: getStatsPopularPairsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stats['popular-pairs'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatsPopularPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsPopularPairsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsPopularPairsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatsProjectsQueryKey() {
  return ['stats', '/stats/projects'] as const
}

export function getStatsProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsProjectsQueryKey>
  >({
    queryKey: getStatsProjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.projects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatsProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatsProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsProjectsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatsStringsQueryKey() {
  return ['stats', '/stats/strings'] as const
}

export function getStatsStringsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsStringsQueryKey>
  >({
    queryKey: getStatsStringsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.strings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatsStrings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatsStringsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsStringsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStringsQueryKey(args: InferRequestType<typeof client.strings.$get>) {
  return ['strings', '/strings', args] as const
}

export function getStringsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.strings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStringsQueryKey>
  >({
    queryKey: getStringsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.strings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStrings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.strings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStringsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStringsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutStringsMutationKey() {
  return ['strings', '/strings', 'PUT'] as const
}

export function getPutStringsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$put>>>>>,
    TError,
    InferRequestType<typeof client.strings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutStringsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.strings.$put>) {
      return parseResponse(client.strings.$put(args, options))
    },
  })
}

export function createPutStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$put>>>>>,
        TError,
        InferRequestType<typeof client.strings.$put>,
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
    const mutationDefaults = getPutStringsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostStringsMutationKey() {
  return ['strings', '/strings', 'POST'] as const
}

export function getPostStringsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$post>>>>>,
    TError,
    InferRequestType<typeof client.strings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStringsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.strings.$post>) {
      return parseResponse(client.strings.$post(args, options))
    },
  })
}

export function createPostStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$post>>>>>,
        TError,
        InferRequestType<typeof client.strings.$post>,
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
    const mutationDefaults = getPostStringsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostStringsLanguageCodePackageMutationKey() {
  return ['strings', '/strings/:languageCode/package', 'POST'] as const
}

export function getPostStringsLanguageCodePackageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.strings)[':languageCode']['package']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.strings)[':languageCode']['package']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStringsLanguageCodePackageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.strings)[':languageCode']['package']['$post']>,
    ) {
      return parseResponse(client.strings[':languageCode'].package.$post(args, options))
    },
  })
}

export function createPostStringsLanguageCodePackage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.strings)[':languageCode']['package']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.strings)[':languageCode']['package']['$post']>,
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
    const mutationDefaults = getPostStringsLanguageCodePackageMutationOptions<
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

export function getStringsLanguageCodePackageStatusQueryKey(
  args: InferRequestType<(typeof client.strings)[':languageCode']['package']['status']['$get']>,
) {
  return ['strings', '/strings/:languageCode/package/status', args] as const
}

export function getStringsLanguageCodePackageStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.strings)[':languageCode']['package']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.strings)[':languageCode']['package']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.strings)[':languageCode']['package']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStringsLanguageCodePackageStatusQueryKey>
  >({
    queryKey: getStringsLanguageCodePackageStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.strings[':languageCode'].package.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStringsLanguageCodePackageStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.strings)[':languageCode']['package']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.strings)[':languageCode']['package']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.strings)[':languageCode']['package']['status']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStringsLanguageCodePackageStatusQueryKey>
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
      ...getStringsLanguageCodePackageStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStyleguideQueryKey() {
  return ['styleguide', '/styleguide'] as const
}

export function getStyleguideQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStyleguideQueryKey>
  >({
    queryKey: getStyleguideQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.styleguide.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStyleguide<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStyleguideQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStyleguideQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostStyleguideMutationKey() {
  return ['styleguide', '/styleguide', 'POST'] as const
}

export function getPostStyleguideMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$post>>>>>,
    TError,
    InferRequestType<typeof client.styleguide.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStyleguideMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.styleguide.$post>) {
      return parseResponse(client.styleguide.$post(args, options))
    },
  })
}

export function createPostStyleguide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.styleguide.$post>,
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
    const mutationDefaults = getPostStyleguideMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSurveysScopeTypeQueryKey(
  args: InferRequestType<(typeof client.surveys)[':scope'][':type']['$get']>,
) {
  return ['surveys', '/surveys/:scope/:type', args] as const
}

export function getSurveysScopeTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.surveys)[':scope'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSurveysScopeTypeQueryKey>
  >({
    queryKey: getSurveysScopeTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.surveys[':scope'][':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSurveysScopeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.surveys)[':scope'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSurveysScopeTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSurveysScopeTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSurveysScopeTypeMutationKey() {
  return ['surveys', '/surveys/:scope/:type', 'POST'] as const
}

export function getPostSurveysScopeTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.surveys)[':scope'][':type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSurveysScopeTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.surveys)[':scope'][':type']['$post']>) {
      return parseResponse(client.surveys[':scope'][':type'].$post(args, options))
    },
  })
}

export function createPostSurveysScopeType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.surveys)[':scope'][':type']['$post']>,
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
    const mutationDefaults = getPostSurveysScopeTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSwaggerQueryKey() {
  return ['swagger', '/swagger'] as const
}

export function getSwaggerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSwaggerQueryKey>
  >({
    queryKey: getSwaggerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.swagger.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSwagger<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSwaggerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSwaggerQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostTokenMutationKey() {
  return ['token', '/token', 'POST'] as const
}

export function getPostTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.token.$post>) {
      return parseResponse(client.token.$post(args, options))
    },
  })
}

export function createPostToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
        TError,
        InferRequestType<typeof client.token.$post>,
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
    const mutationDefaults = getPostTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUnfreezeAccountMutationKey() {
  return ['unfreeze-account', '/unfreeze-account', 'POST'] as const
}

export function getPostUnfreezeAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['unfreeze-account']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUnfreezeAccountMutationKey(),
    async mutationFn() {
      return parseResponse(client['unfreeze-account'].$post(undefined, options))
    },
  })
}

export function createPostUnfreezeAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['unfreeze-account']['$post']>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostUnfreezeAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserGroupsQueryKey() {
  return ['user-groups', '/user-groups'] as const
}

export function getUserGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserGroupsQueryKey>
  >({
    queryKey: getUserGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['user-groups'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserGroupsQueryOptions<TData, TError>(clientOptions), ...query }
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

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function createPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
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
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersAvailableVendorsMutationKey() {
  return ['users', '/users/available-vendors', 'POST'] as const
}

export function getPostUsersAvailableVendorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['available-vendors']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)['available-vendors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersAvailableVendorsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)['available-vendors']['$post']>) {
      return parseResponse(client.users['available-vendors'].$post(args, options))
    },
  })
}

export function createPostUsersAvailableVendors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)['available-vendors']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)['available-vendors']['$post']>,
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
    const mutationDefaults = getPostUsersAvailableVendorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersFilterMutationKey() {
  return ['users', '/users/filter', 'POST'] as const
}

export function getPostUsersFilterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.filter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.filter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersFilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.filter.$post>) {
      return parseResponse(client.users.filter.$post(args, options))
    },
  })
}

export function createPostUsersFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.filter.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.filter.$post>,
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
    const mutationDefaults = getPostUsersFilterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersSendPasswordReminderMutationKey() {
  return ['users', '/users/send-password-reminder', 'POST'] as const
}

export function getPostUsersSendPasswordReminderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['send-password-reminder']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)['send-password-reminder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersSendPasswordReminderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)['send-password-reminder']['$post']>,
    ) {
      return parseResponse(client.users['send-password-reminder'].$post(args, options))
    },
  })
}

export function createPostUsersSendPasswordReminder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)['send-password-reminder']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)['send-password-reminder']['$post']>,
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
    const mutationDefaults = getPostUsersSendPasswordReminderMutationOptions<
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

export function getUsersTagsQueryKey() {
  return ['users', '/users/tags'] as const
}

export function getUsersTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersTagsQueryKey>
  >({
    queryKey: getUsersTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersTagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUserIdQueryKey(args: InferRequestType<(typeof client)[':userId']['$get']>) {
  return [':userId', '/:userId', args] as const
}

export function getUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':userId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdQueryKey>
  >({
    queryKey: getUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUserIdMutationKey() {
  return [':userId', '/:userId', 'POST'] as const
}

export function getPostUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':userId']['$post']>) {
      return parseResponse(client[':userId'].$post(args, options))
    },
  })
}

export function createPostUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$post']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['$post']>,
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
    const mutationDefaults = getPostUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserIdApproveMutationKey() {
  return [':userId', '/:userId/approve', 'POST'] as const
}

export function getPostUserIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['approve']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdApproveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':userId']['approve']['$post']>) {
      return parseResponse(client[':userId'].approve.$post(args, options))
    },
  })
}

export function createPostUserIdApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['approve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['approve']['$post']>,
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
    const mutationDefaults = getPostUserIdApproveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteUserIdDeleteAccountMutationKey() {
  return [':userId', '/:userId/delete-account', 'DELETE'] as const
}

export function getDeleteUserIdDeleteAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['delete-account']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['delete-account']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserIdDeleteAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['delete-account']['$delete']>,
    ) {
      return parseResponse(client[':userId']['delete-account'].$delete(args, options))
    },
  })
}

export function createDeleteUserIdDeleteAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['delete-account']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['delete-account']['$delete']>,
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
    const mutationDefaults = getDeleteUserIdDeleteAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserIdDocumentsQueryKey(
  args: InferRequestType<(typeof client)[':userId']['documents']['$get']>,
) {
  return [':userId', '/:userId/documents', args] as const
}

export function getUserIdDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdDocumentsQueryKey>
  >({
    queryKey: getUserIdDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].documents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['documents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdDocumentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUserIdDowngradeProofreaderMutationKey() {
  return [':userId', '/:userId/downgrade-proofreader', 'POST'] as const
}

export function getPostUserIdDowngradeProofreaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['downgrade-proofreader']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['downgrade-proofreader']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdDowngradeProofreaderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['downgrade-proofreader']['$post']>,
    ) {
      return parseResponse(client[':userId']['downgrade-proofreader'].$post(args, options))
    },
  })
}

export function createPostUserIdDowngradeProofreader<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['downgrade-proofreader']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['downgrade-proofreader']['$post']>,
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
    const mutationDefaults = getPostUserIdDowngradeProofreaderMutationOptions<
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

export function getUserIdEarningsQueryKey(
  args: InferRequestType<(typeof client)[':userId']['earnings']['$get']>,
) {
  return [':userId', '/:userId/earnings', args] as const
}

export function getUserIdEarningsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['earnings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdEarningsQueryKey>
  >({
    queryKey: getUserIdEarningsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].earnings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserIdEarnings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['earnings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdEarningsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdEarningsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUserIdFreezeAccountMutationKey() {
  return [':userId', '/:userId/freeze-account', 'POST'] as const
}

export function getPostUserIdFreezeAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['freeze-account']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['freeze-account']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdFreezeAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['freeze-account']['$post']>,
    ) {
      return parseResponse(client[':userId']['freeze-account'].$post(args, options))
    },
  })
}

export function createPostUserIdFreezeAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['freeze-account']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['freeze-account']['$post']>,
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
    const mutationDefaults = getPostUserIdFreezeAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserIdMakeProofreaderMutationKey() {
  return [':userId', '/:userId/make-proofreader', 'POST'] as const
}

export function getPostUserIdMakeProofreaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['make-proofreader']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['make-proofreader']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdMakeProofreaderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['make-proofreader']['$post']>,
    ) {
      return parseResponse(client[':userId']['make-proofreader'].$post(args, options))
    },
  })
}

export function createPostUserIdMakeProofreader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['make-proofreader']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['make-proofreader']['$post']>,
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
    const mutationDefaults = getPostUserIdMakeProofreaderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserIdNotificationsSubscribeMutationKey() {
  return [':userId', '/:userId/notifications/subscribe', 'POST'] as const
}

export function getPostUserIdNotificationsSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['notifications']['subscribe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['notifications']['subscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdNotificationsSubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['notifications']['subscribe']['$post']>,
    ) {
      return parseResponse(client[':userId'].notifications.subscribe.$post(args, options))
    },
  })
}

export function createPostUserIdNotificationsSubscribe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['notifications']['subscribe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['notifications']['subscribe']['$post']>,
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
    const mutationDefaults = getPostUserIdNotificationsSubscribeMutationOptions<
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

export function getPostUserIdNotificationsUnsubscribeMutationKey() {
  return [':userId', '/:userId/notifications/unsubscribe', 'POST'] as const
}

export function getPostUserIdNotificationsUnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['notifications']['unsubscribe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['notifications']['unsubscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdNotificationsUnsubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['notifications']['unsubscribe']['$post']>,
    ) {
      return parseResponse(client[':userId'].notifications.unsubscribe.$post(args, options))
    },
  })
}

export function createPostUserIdNotificationsUnsubscribe<
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
                ReturnType<(typeof client)[':userId']['notifications']['unsubscribe']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['notifications']['unsubscribe']['$post']>,
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
    const mutationDefaults = getPostUserIdNotificationsUnsubscribeMutationOptions<
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

export function getUserIdPaymentQueryKey(
  args: InferRequestType<(typeof client)[':userId']['payment']['$get']>,
) {
  return [':userId', '/:userId/payment', args] as const
}

export function getUserIdPaymentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['payment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdPaymentQueryKey>
  >({
    queryKey: getUserIdPaymentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].payment.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserIdPayment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['payment']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdPaymentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdPaymentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUserIdPaymentMutationKey() {
  return [':userId', '/:userId/payment', 'POST'] as const
}

export function getPostUserIdPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['payment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdPaymentMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':userId']['payment']['$post']>) {
      return parseResponse(client[':userId'].payment.$post(args, options))
    },
  })
}

export function createPostUserIdPayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['payment']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['payment']['$post']>,
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
    const mutationDefaults = getPostUserIdPaymentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserIdPermissionsQueryKey(
  args: InferRequestType<(typeof client)[':userId']['permissions']['$get']>,
) {
  return [':userId', '/:userId/permissions', args] as const
}

export function getUserIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdPermissionsQueryKey>
  >({
    queryKey: getUserIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdPermissionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUserIdProfilePictureMutationKey() {
  return [':userId', '/:userId/profile-picture', 'POST'] as const
}

export function getPostUserIdProfilePictureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['profile-picture']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['profile-picture']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdProfilePictureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['profile-picture']['$post']>,
    ) {
      return parseResponse(client[':userId']['profile-picture'].$post(args, options))
    },
  })
}

export function createPostUserIdProfilePicture<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['profile-picture']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['profile-picture']['$post']>,
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
    const mutationDefaults = getPostUserIdProfilePictureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserIdProjectsVendorQueryKey(
  args: InferRequestType<(typeof client)[':userId']['projects']['vendor']['$get']>,
) {
  return [':userId', '/:userId/projects/vendor', args] as const
}

export function getUserIdProjectsVendorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['projects']['vendor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdProjectsVendorQueryKey>
  >({
    queryKey: getUserIdProjectsVendorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].projects.vendor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserIdProjectsVendor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['projects']['vendor']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdProjectsVendorQueryKey>
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
      ...getUserIdProjectsVendorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUserIdRejectMutationKey() {
  return [':userId', '/:userId/reject', 'POST'] as const
}

export function getPostUserIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['reject']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdRejectMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':userId']['reject']['$post']>) {
      return parseResponse(client[':userId'].reject.$post(args, options))
    },
  })
}

export function createPostUserIdReject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['reject']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['reject']['$post']>,
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
    const mutationDefaults = getPostUserIdRejectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserIdResendEmailConfirmationMutationKey() {
  return [':userId', '/:userId/resend-email-confirmation', 'POST'] as const
}

export function getPostUserIdResendEmailConfirmationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['resend-email-confirmation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['resend-email-confirmation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdResendEmailConfirmationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['resend-email-confirmation']['$post']>,
    ) {
      return parseResponse(client[':userId']['resend-email-confirmation'].$post(args, options))
    },
  })
}

export function createPostUserIdResendEmailConfirmation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['resend-email-confirmation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['resend-email-confirmation']['$post']>,
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
    const mutationDefaults = getPostUserIdResendEmailConfirmationMutationOptions<
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

export function getUserIdResponsivityQueryKey(
  args: InferRequestType<(typeof client)[':userId']['responsivity']['$get']>,
) {
  return [':userId', '/:userId/responsivity', args] as const
}

export function getUserIdResponsivityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['responsivity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdResponsivityQueryKey>
  >({
    queryKey: getUserIdResponsivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].responsivity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserIdResponsivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['responsivity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdResponsivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdResponsivityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserIdStatsQueryKey(
  args: InferRequestType<(typeof client)[':userId']['stats']['$get']>,
) {
  return [':userId', '/:userId/stats', args] as const
}

export function getUserIdStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdStatsQueryKey>
  >({
    queryKey: getUserIdStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['stats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserIdStatsPopularPairsQueryKey(
  args: InferRequestType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>,
) {
  return [':userId', '/:userId/stats/popular-pairs', args] as const
}

export function getUserIdStatsPopularPairsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdStatsPopularPairsQueryKey>
  >({
    queryKey: getUserIdStatsPopularPairsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].stats['popular-pairs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserIdStatsPopularPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdStatsPopularPairsQueryKey>
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
      ...getUserIdStatsPopularPairsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserIdStatsProjectsQueryKey(
  args: InferRequestType<(typeof client)[':userId']['stats']['projects']['$get']>,
) {
  return [':userId', '/:userId/stats/projects', args] as const
}

export function getUserIdStatsProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['stats']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdStatsProjectsQueryKey>
  >({
    queryKey: getUserIdStatsProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].stats.projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserIdStatsProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['stats']['projects']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdStatsProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdStatsProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUserIdSuspendMutationKey() {
  return [':userId', '/:userId/suspend', 'POST'] as const
}

export function getPostUserIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['suspend']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdSuspendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':userId']['suspend']['$post']>) {
      return parseResponse(client[':userId'].suspend.$post(args, options))
    },
  })
}

export function createPostUserIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['suspend']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['suspend']['$post']>,
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
    const mutationDefaults = getPostUserIdSuspendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserIdUnfreezeAccountMutationKey() {
  return [':userId', '/:userId/unfreeze-account', 'POST'] as const
}

export function getPostUserIdUnfreezeAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['unfreeze-account']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['unfreeze-account']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdUnfreezeAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['unfreeze-account']['$post']>,
    ) {
      return parseResponse(client[':userId']['unfreeze-account'].$post(args, options))
    },
  })
}

export function createPostUserIdUnfreezeAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['unfreeze-account']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['unfreeze-account']['$post']>,
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
    const mutationDefaults = getPostUserIdUnfreezeAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserIdUserGroupsQueryKey(
  args: InferRequestType<(typeof client)[':userId']['user-groups']['$get']>,
) {
  return [':userId', '/:userId/user-groups', args] as const
}

export function getUserIdUserGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['user-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdUserGroupsQueryKey>
  >({
    queryKey: getUserIdUserGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId']['user-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserIdUserGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['user-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdUserGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdUserGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUserIdUserGroupsMutationKey() {
  return [':userId', '/:userId/user-groups', 'POST'] as const
}

export function getPostUserIdUserGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['user-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdUserGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':userId']['user-groups']['$post']>) {
      return parseResponse(client[':userId']['user-groups'].$post(args, options))
    },
  })
}

export function createPostUserIdUserGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['user-groups']['$post']>,
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
    const mutationDefaults = getPostUserIdUserGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
