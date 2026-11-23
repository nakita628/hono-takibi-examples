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

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAsyncDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.async.download.$get>>,
) {
  return ['async', '/async/download', toValue(args)] as const
}

export function getAsyncDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.async.download.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAsyncDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.async.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAsyncDownload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.async.download.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
          >,
          ReturnType<typeof getAsyncDownloadQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAsyncDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAsyncDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.async.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blogs.$get>>,
) {
  return ['blogs', '/blogs', toValue(args)] as const
}

export function getBlogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blogs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blogs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBlogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blogs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
          ReturnType<typeof getBlogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCacheKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.cache)[':key']['$delete']>,
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
  const mutationDefaults = getDeleteCacheKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCommissionsQueryKey() {
  return ['commissions', '/commissions'] as const
}

export function getCommissionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCommissionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.commissions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCommissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>
          >,
          ReturnType<typeof getCommissionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCommissionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.commissions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCommissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.commissions.$post>,
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
  const mutationDefaults = getPostCommissionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContinuousProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.continuous_projects.$get>>,
) {
  return ['continuous_projects', '/continuous_projects', toValue(args)] as const
}

export function getContinuousProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.continuous_projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.continuous_projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>
            >
          >,
          ReturnType<typeof getContinuousProjectsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostContinuousProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.continuous_projects.$post>,
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
  const mutationDefaults = getPostContinuousProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getContinuousProjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.continuous_projects)[':id']['$get']>>,
) {
  return ['continuous_projects', '/continuous_projects/:id', toValue(args)] as const
}

export function getContinuousProjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.continuous_projects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.continuous_projects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostContinuousProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContinuousProjectsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteContinuousProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContinuousProjectsIdMutationOptions<TError, TOnMutateResult>(
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

export function getContinuousProjectsIdAnalyticsTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>
  >,
) {
  return ['continuous_projects', '/continuous_projects/:id/analytics-token', toValue(args)] as const
}

export function getContinuousProjectsIdAnalyticsTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsIdAnalyticsTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':id']['analytics-token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjectsIdAnalyticsToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsIdAnalyticsTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsIdAnalyticsTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsIdAnalyticsTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':id']['analytics-token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostContinuousProjectsIdCollectAnalytics<
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
                    (typeof client.continuous_projects)[':id']['collect-analytics']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.continuous_projects)[':id']['collect-analytics']['$post']
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
  const mutationDefaults = getPostContinuousProjectsIdCollectAnalyticsMutationOptions<
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

export function usePostContinuousProjectsIdComplete<
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
                Awaited<ReturnType<(typeof client.continuous_projects)[':id']['complete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.continuous_projects)[':id']['complete']['$post']>,
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
  const mutationDefaults = getPostContinuousProjectsIdCompleteMutationOptions<
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

export function usePostContinuousProjectsIdDocumentsQuote<
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
                    (typeof client.continuous_projects)[':id']['documents']['quote']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.continuous_projects)[':id']['documents']['quote']['$post']
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
  const mutationDefaults = getPostContinuousProjectsIdDocumentsQuoteMutationOptions<
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

export function usePostContinuousProjectsIdDocumentsDocumentIdComplete<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContinuousProjectsIdDocumentsDocumentIdCompleteMutationOptions<
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

export function usePostContinuousProjectsIdDocumentsDocumentIdQuote<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContinuousProjectsIdDocumentsDocumentIdQuoteMutationOptions<
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

export function usePostContinuousProjectsIdLanguagesQuote<
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
                    (typeof client.continuous_projects)[':id']['languages']['quote']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.continuous_projects)[':id']['languages']['quote']['$post']
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
  const mutationDefaults = getPostContinuousProjectsIdLanguagesQuoteMutationOptions<
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

export function usePostContinuousProjectsIdLanguagesTargetLanguageComplete<
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
    getPostContinuousProjectsIdLanguagesTargetLanguageCompleteMutationOptions<
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

export function usePostContinuousProjectsIdLanguagesTargetLanguageQuote<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContinuousProjectsIdLanguagesTargetLanguageQuoteMutationOptions<
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

export function getContinuousProjectsIdSubscriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$get']>
  >,
) {
  return ['continuous_projects', '/continuous_projects/:id/subscription', toValue(args)] as const
}

export function getContinuousProjectsIdSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsIdSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':id'].subscription.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjectsIdSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsIdSubscriptionQueryKey>
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
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsIdSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsIdSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':id'].subscription.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutContinuousProjectsIdSubscription<
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
                  ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$put']>,
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
  const mutationDefaults = getPutContinuousProjectsIdSubscriptionMutationOptions<
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

export function usePostContinuousProjectsIdSubscription<
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
                  ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$post']>,
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
  const mutationDefaults = getPostContinuousProjectsIdSubscriptionMutationOptions<
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

export function useDeleteContinuousProjectsIdSubscription<
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
                  ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$delete']>,
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
  const mutationDefaults = getDeleteContinuousProjectsIdSubscriptionMutationOptions<
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

export function usePutContinuousProjectsIdSubscriptionPayment<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContinuousProjectsIdSubscriptionPaymentMutationOptions<
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

export function usePostContinuousProjectsIdTranslateTargetLanguage<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContinuousProjectsIdTranslateTargetLanguageMutationOptions<
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

export function getContinuousProjectsProjectIdDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents',
    toValue(args),
  ] as const
}

export function getContinuousProjectsProjectIdDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsProjectIdDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':projectId'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjectsProjectIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsProjectIdDocumentsQueryKey>
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
            ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsProjectIdDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':projectId'].documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostContinuousProjectsProjectIdDocuments<
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
                    (typeof client.continuous_projects)[':projectId']['documents']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$post']>,
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
  const mutationDefaults = getPostContinuousProjectsProjectIdDocumentsMutationOptions<
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

export function usePostContinuousProjectsProjectIdDocumentsProgress<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContinuousProjectsProjectIdDocumentsProgressMutationOptions<
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

export function usePostContinuousProjectsProjectIdDocumentsStrings<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContinuousProjectsProjectIdDocumentsStringsMutationOptions<
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

export function getContinuousProjectsProjectIdDocumentsDocumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
    >
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/:documentId',
    toValue(args),
  ] as const
}

export function getContinuousProjectsProjectIdDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsProjectIdDocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':projectId'].documents[':documentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjectsProjectIdDocumentsDocumentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
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
                    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
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
                    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdQueryKey>
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
              (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsProjectIdDocumentsDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':projectId'].documents[':documentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostContinuousProjectsProjectIdDocumentsDocumentId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContinuousProjectsProjectIdDocumentsDocumentIdMutationOptions<
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

export function getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
    >
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/:documentId/progress',
    toValue(args),
  ] as const
}

export function getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':projectId'].documents[':documentId'].progress.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useContinuousProjectsProjectIdDocumentsDocumentIdProgress<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
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
                    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
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
                    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryKey>
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
              (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getContinuousProjectsProjectIdDocumentsDocumentIdProgressQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':projectId'].documents[':documentId'].progress.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
    >
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/:documentId/strings',
    toValue(args),
  ] as const
}

export function getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':projectId'].documents[':documentId'].strings.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useContinuousProjectsProjectIdDocumentsDocumentIdStrings<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
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
                    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
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
                    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryKey>
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
              (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getContinuousProjectsProjectIdDocumentsDocumentIdStringsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':projectId'].documents[':documentId'].strings.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getContinuousProjectsProjectIdInvoicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>
  >,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/invoices', toValue(args)] as const
}

export function getContinuousProjectsProjectIdInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsProjectIdInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':projectId'].invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjectsProjectIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsProjectIdInvoicesQueryKey>
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
          Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsProjectIdInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':projectId'].invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContinuousProjectsProjectIdProgressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>
  >,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/progress', toValue(args)] as const
}

export function getContinuousProjectsProjectIdProgressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsProjectIdProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':projectId'].progress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjectsProjectIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsProjectIdProgressQueryKey>
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
          Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsProjectIdProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':projectId'].progress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContinuousProjectsProjectIdStringsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>
  >,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/strings', toValue(args)] as const
}

export function getContinuousProjectsProjectIdStringsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsProjectIdStringsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':projectId'].strings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjectsProjectIdStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsProjectIdStringsQueryKey>
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
          Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdStringsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsProjectIdStringsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':projectId'].strings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContinuousProjectsProjectIdStringsCachedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']>
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/strings/cached',
    toValue(args),
  ] as const
}

export function getContinuousProjectsProjectIdStringsCachedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsProjectIdStringsCachedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':projectId'].strings.cached.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjectsProjectIdStringsCached<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']>
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
                    (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
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
                    (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsProjectIdStringsCachedQueryKey>
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
              (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdStringsCachedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsProjectIdStringsCachedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':projectId'].strings.cached.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteContinuousProjectsProjectIdStringsCached<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContinuousProjectsProjectIdStringsCachedMutationOptions<
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

export function usePostContinuousProjectsProjectIdStringsRecacheTms<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContinuousProjectsProjectIdStringsRecacheTmsMutationOptions<
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

export function getContinuousProjectsProjectIdWidgetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>
  >,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/widgets', toValue(args)] as const
}

export function getContinuousProjectsProjectIdWidgetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsProjectIdWidgetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':projectId'].widgets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjectsProjectIdWidgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsProjectIdWidgetsQueryKey>
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
          Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdWidgetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsProjectIdWidgetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':projectId'].widgets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostContinuousProjectsProjectIdWidgets<
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
                  ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$post']>,
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
  const mutationDefaults = getPostContinuousProjectsProjectIdWidgetsMutationOptions<
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

export function getContinuousProjectsProjectIdWidgetsWidgetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
    >
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/widgets/:widgetId',
    toValue(args),
  ] as const
}

export function getContinuousProjectsProjectIdWidgetsWidgetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContinuousProjectsProjectIdWidgetsWidgetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.continuous_projects[':projectId'].widgets[':widgetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContinuousProjectsProjectIdWidgetsWidgetId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
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
                    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
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
                    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContinuousProjectsProjectIdWidgetsWidgetIdQueryKey>
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
              (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContinuousProjectsProjectIdWidgetsWidgetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContinuousProjectsProjectIdWidgetsWidgetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.continuous_projects[':projectId'].widgets[':widgetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostContinuousProjectsProjectIdWidgetsWidgetId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContinuousProjectsProjectIdWidgetsWidgetIdMutationOptions<
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

export function useDeleteContinuousProjectsProjectIdWidgetsWidgetId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContinuousProjectsProjectIdWidgetsWidgetIdMutationOptions<
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

export function usePostContinuousProjectsProjectIdWidgetsWidgetIdResetToken<
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
    getPostContinuousProjectsProjectIdWidgetsWidgetIdResetTokenMutationOptions<
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

export function getCorporateQueryKey() {
  return ['corporate', '/corporate'] as const
}

export function getCorporateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCorporateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCorporate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>
          >,
          ReturnType<typeof getCorporateQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCorporateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCorporateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCorporatePermissionsQueryKey() {
  return ['corporate', '/corporate/permissions'] as const
}

export function getCorporatePermissionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCorporatePermissionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate.permissions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporatePermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>
            >
          >,
          ReturnType<typeof getCorporatePermissionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatePermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCorporatePermissionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate.permissions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCorporateUserGroupsQueryKey() {
  return ['corporate', '/corporate/user-groups'] as const
}

export function getCorporateUserGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCorporateUserGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate['user-groups'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporateUserGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCorporateUserGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateUserGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCorporateUserGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate['user-groups'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCorporateUserGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCorporateUserGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getCorporateUsersQueryKey() {
  return ['corporate', '/corporate/users'] as const
}

export function getCorporateUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCorporateUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCorporateUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>
            >
          >,
          ReturnType<typeof getCorporateUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCorporateUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCorporateUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.corporate.users.$post>,
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
  const mutationDefaults = getPostCorporateUsersMutationOptions<TError, TOnMutateResult>(
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

export function getCorporatesAllQueryKey() {
  return ['corporates', '/corporates/all'] as const
}

export function getCorporatesAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCorporatesAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporates.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCorporatesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
          >,
          ReturnType<typeof getCorporatesAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatesAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCorporatesAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.corporates.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCorporatesCorporateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.corporates)[':corporateId']['$get']>>,
) {
  return ['corporates', '/corporates/:corporateId', toValue(args)] as const
}

export function getCorporatesCorporateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.corporates)[':corporateId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCorporatesCorporateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporates[':corporateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporatesCorporateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.corporates)[':corporateId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCorporatesCorporateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatesCorporateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCorporatesCorporateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.corporates[':corporateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCorporatesCorporateIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporates)[':corporateId']['permissions']['$get']>
  >,
) {
  return ['corporates', '/corporates/:corporateId/permissions', toValue(args)] as const
}

export function getCorporatesCorporateIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporates)[':corporateId']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCorporatesCorporateIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporates[':corporateId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporatesCorporateIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporates)[':corporateId']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>
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
                  ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCorporatesCorporateIdPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatesCorporateIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCorporatesCorporateIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.corporates[':corporateId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCorporatesCorporateIdUserGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>
  >,
) {
  return ['corporates', '/corporates/:corporateId/user-groups', toValue(args)] as const
}

export function getCorporatesCorporateIdUserGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCorporatesCorporateIdUserGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporates[':corporateId']['user-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporatesCorporateIdUserGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>
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
                  ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCorporatesCorporateIdUserGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatesCorporateIdUserGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCorporatesCorporateIdUserGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.corporates[':corporateId']['user-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCorporatesCorporateIdUserGroups<
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
                  ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$post']>,
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
  const mutationDefaults = getPostCorporatesCorporateIdUserGroupsMutationOptions<
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

export function getCorporatesCorporateIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporates)[':corporateId']['users']['$get']>
  >,
) {
  return ['corporates', '/corporates/:corporateId/users', toValue(args)] as const
}

export function getCorporatesCorporateIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporates)[':corporateId']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCorporatesCorporateIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporates[':corporateId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporatesCorporateIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporates)[':corporateId']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCorporatesCorporateIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporatesCorporateIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCorporatesCorporateIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.corporates[':corporateId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDeleteAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['delete-account']['$delete']>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteDeleteAccountMutationOptions<TError, TOnMutateResult>(
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

export function getDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.$get>>,
) {
  return ['documents', '/documents', toValue(args)] as const
}

export function getDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
          >,
          ReturnType<typeof getDocumentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsSubjectsQueryKey() {
  return ['documents', '/documents/subjects'] as const
}

export function getDocumentsSubjectsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDocumentsSubjectsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents.subjects.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsSubjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>
            >
          >,
          ReturnType<typeof getDocumentsSubjectsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsSubjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDocumentsSubjectsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.documents.subjects.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsDocumentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':documentId']['$get']>>,
) {
  return ['documents', '/documents/:documentId', toValue(args)] as const
}

export function getDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':documentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':documentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':documentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':documentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsDocumentIdProgressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':documentId']['progress']['$get']>
  >,
) {
  return ['documents', '/documents/:documentId/progress', toValue(args)] as const
}

export function getDocumentsDocumentIdProgressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':documentId']['progress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':documentId'].progress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':documentId']['progress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdProgressQueryKey>
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
          Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':documentId'].progress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDocumentsDocumentIdRegeneratePreview<
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
                    (typeof client.documents)[':documentId']['regenerate_preview']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.documents)[':documentId']['regenerate_preview']['$post']>,
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
  const mutationDefaults = getPostDocumentsDocumentIdRegeneratePreviewMutationOptions<
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

export function getDocumentsDocumentIdSimilarsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':documentId']['similars']['$get']>
  >,
) {
  return ['documents', '/documents/:documentId/similars', toValue(args)] as const
}

export function getDocumentsDocumentIdSimilarsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':documentId']['similars']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdSimilarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':documentId'].similars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentIdSimilars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':documentId']['similars']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdSimilarsQueryKey>
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
          Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdSimilarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdSimilarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':documentId'].similars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDocumentsDocumentIdUseAsDraft<
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
                  ReturnType<(typeof client.documents)[':documentId']['use_as_draft']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.documents)[':documentId']['use_as_draft']['$post']>,
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
  const mutationDefaults = getPostDocumentsDocumentIdUseAsDraftMutationOptions<
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

export function usePostDocumentsDocumentIdUseAsRegular<
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
                  ReturnType<(typeof client.documents)[':documentId']['use_as_regular']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.documents)[':documentId']['use_as_regular']['$post']>,
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
  const mutationDefaults = getPostDocumentsDocumentIdUseAsRegularMutationOptions<
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

export function usePostDowngradeProofreader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDowngradeProofreaderMutationOptions<TError, TOnMutateResult>(
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

export function getEarningsQueryKey() {
  return ['earnings', '/earnings'] as const
}

export function getEarningsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEarningsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.earnings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEarnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>
          >,
          ReturnType<typeof getEarningsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEarningsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEarningsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.earnings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatsQueryKey() {
  return ['formats', '/formats'] as const
}

export function getFormatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFormatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.formats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFormats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>
          >,
          ReturnType<typeof getFormatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFormatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFormatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.formats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFreezeAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['freeze-account']['$post']>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostFreezeAccountMutationOptions<TError, TOnMutateResult>(
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

export function getGlossaryQueryKey() {
  return ['glossary', '/glossary'] as const
}

export function getGlossaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGlossaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.glossary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGlossary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>
          >,
          ReturnType<typeof getGlossaryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGlossaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGlossaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.glossary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGlossary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.glossary.$post>,
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
  const mutationDefaults = getPostGlossaryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIntegrationsTokenQueryKey() {
  return ['integrations', '/integrations/token'] as const
}

export function getIntegrationsTokenQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIntegrationsTokenQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations.token.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntegrationsToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>
            >
          >,
          ReturnType<typeof getIntegrationsTokenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIntegrationsTokenQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations.token.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInvitationVendors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.invitation.vendors.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.invitation.vendors.$post>,
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
  const mutationDefaults = getPostInvitationVendorsMutationOptions<TError, TOnMutateResult>(
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

export function getLanguagesQueryKey() {
  return ['languages', '/languages'] as const
}

export function getLanguagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLanguagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.languages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
          >,
          ReturnType<typeof getLanguagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLanguagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.languages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.location.$post>,
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
  const mutationDefaults = getPostLocationMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostMakeProofreader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['make-proofreader']['$post']>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostMakeProofreaderMutationOptions<TError, TOnMutateResult>(
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

export function usePostMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$post>>>>>,
          TError,
          InferRequestType<typeof client.me.$post>,
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
  const mutationDefaults = getPostMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostMlDeliveryPrediction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMlDeliveryPredictionMutationOptions<TError, TOnMutateResult>(
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

export function usePostNotificationsSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.subscribe.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.notifications.subscribe.$post>,
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
  const mutationDefaults = getPostNotificationsSubscribeMutationOptions<TError, TOnMutateResult>(
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

export function usePostNotificationsUnsubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.notifications.unsubscribe.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.notifications.unsubscribe.$post>,
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
  const mutationDefaults = getPostNotificationsUnsubscribeMutationOptions<TError, TOnMutateResult>(
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

export function usePostPamChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pam.chat.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pam.chat.$post>,
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
  const mutationDefaults = getPostPamChatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPamProfilesClientClientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pam.profiles.client)[':clientId']['$get']>
  >,
) {
  return ['pam', '/pam/profiles/client/:clientId', toValue(args)] as const
}

export function getPamProfilesClientClientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pam.profiles.client)[':clientId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPamProfilesClientClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pam.profiles.client[':clientId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePamProfilesClientClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pam.profiles.client)[':clientId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPamProfilesClientClientIdQueryKey>
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
          Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPamProfilesClientClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPamProfilesClientClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pam.profiles.client[':clientId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPamProjectsProjectIdCompletionReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>
  >,
) {
  return ['pam', '/pam/projects/:projectId/completion-report', toValue(args)] as const
}

export function getPamProjectsProjectIdCompletionReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPamProjectsProjectIdCompletionReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pam.projects[':projectId']['completion-report'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePamProjectsProjectIdCompletionReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>
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
                    (typeof client.pam.projects)[':projectId']['completion-report']['$get']
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
                    (typeof client.pam.projects)[':projectId']['completion-report']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPamProjectsProjectIdCompletionReportQueryKey>
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
            ReturnType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPamProjectsProjectIdCompletionReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPamProjectsProjectIdCompletionReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pam.projects[':projectId']['completion-report'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.password.$post>,
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
  const mutationDefaults = getPostPasswordMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPaymentQueryKey() {
  return ['payment', '/payment'] as const
}

export function getPaymentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPaymentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePayment<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>
          >,
          ReturnType<typeof getPaymentQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaymentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPaymentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.payment.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.payment.$post>,
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
  const mutationDefaults = getPostPaymentMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPaymentResetCorporatePaymentCode<
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
                  ReturnType<(typeof client.payment)['reset-corporate-payment-code']['$post']>
                >
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostPaymentResetCorporatePaymentCodeMutationOptions<
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

export function usePostPaymentToggleCorporateAutoCharge<
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
                  ReturnType<(typeof client.payment)['toggle-corporate-auto-charge']['$post']>
                >
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostPaymentToggleCorporateAutoChargeMutationOptions<
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

export function getPaymentCardIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment)[':cardId']['$get']>>,
) {
  return ['payment', '/payment/:cardId', toValue(args)] as const
}

export function getPaymentCardIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment)[':cardId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentCardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment[':cardId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentCardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment)[':cardId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
            >
          >,
          ReturnType<typeof getPaymentCardIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentCardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentCardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment[':cardId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePaymentCardIdDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePaymentCardIdDeleteMutationOptions<TError, TOnMutateResult>(
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

export function usePostPaymentCardIdResetPaymentCode<
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
                  ReturnType<(typeof client.payment)[':cardId']['reset-payment-code']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payment)[':cardId']['reset-payment-code']['$post']>,
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
  const mutationDefaults = getPostPaymentCardIdResetPaymentCodeMutationOptions<
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

export function getPermissionsQueryKey() {
  return ['permissions', '/permissions'] as const
}

export function getPermissionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPermissionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.permissions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
          >,
          ReturnType<typeof getPermissionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPermissionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.permissions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProfilePicture<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['profile-picture']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['profile-picture']['$post']>,
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
  const mutationDefaults = getPostProfilePictureMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
) {
  return ['projects', '/projects', toValue(args)] as const
}

export function getProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          ReturnType<typeof getProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
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
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsFromInternalIdProjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>
  >,
) {
  return ['projects', '/projects/from-internal-id/:projectId', toValue(args)] as const
}

export function getProjectsFromInternalIdProjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsFromInternalIdProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects['from-internal-id'][':projectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsFromInternalIdProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsFromInternalIdProjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsFromInternalIdProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsFromInternalIdProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects['from-internal-id'][':projectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsVendorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.vendor.$get>>,
) {
  return ['projects', '/projects/vendor', toValue(args)] as const
}

export function getProjectsVendorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.vendor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsVendorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.vendor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsVendor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.vendor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>
            >
          >,
          ReturnType<typeof getProjectsVendorQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsVendorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsVendorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.vendor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['$get']>>,
) {
  return ['projects', '/projects/:id', toValue(args)] as const
}

export function getProjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getProjectsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['$put']>,
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
  const mutationDefaults = getPutProjectsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteProjectsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostProjectsIdAssignCm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdAssignCmMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdCallbackActionTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>
  >,
) {
  return ['projects', '/projects/:id/callback/:actionType', toValue(args)] as const
}

export function getProjectsIdCallbackActionTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdCallbackActionTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].callback[':actionType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdCallbackActionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsIdCallbackActionTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdCallbackActionTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdCallbackActionTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].callback[':actionType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function usePostProjectsIdDeliver<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdDeliverMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['download']['$get']>>,
) {
  return ['projects', '/projects/:id/download', toValue(args)] as const
}

export function getProjectsIdDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['download']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['download']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdDownloadLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['download'][':language']['$get']>
  >,
) {
  return ['projects', '/projects/:id/download/:language', toValue(args)] as const
}

export function getProjectsIdDownloadLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['download'][':language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdDownloadLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].download[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdDownloadLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['download'][':language']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>
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
                  ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsIdDownloadLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdDownloadLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdDownloadLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].download[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsIdEmailQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdEmailQuoteMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdInvoiceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['invoice']['$get']>>,
) {
  return ['projects', '/projects/:id/invoice', toValue(args)] as const
}

export function getProjectsIdInvoiceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['invoice']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdInvoiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].invoice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdInvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['invoice']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdInvoiceQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdInvoiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdInvoiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].invoice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdInvoiceHtmlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['invoice.html']['$get']>>,
) {
  return ['projects', '/projects/:id/invoice.html', toValue(args)] as const
}

export function getProjectsIdInvoiceHtmlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['invoice.html']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdInvoiceHtmlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id']['invoice.html'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdInvoiceHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['invoice.html']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdInvoiceHtmlQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdInvoiceHtmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdInvoiceHtmlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id']['invoice.html'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdInvoicePdfQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>,
) {
  return ['projects', '/projects/:id/invoice.pdf', toValue(args)] as const
}

export function getProjectsIdInvoicePdfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdInvoicePdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id']['invoice.pdf'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdInvoicePdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdInvoicePdfQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdInvoicePdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdInvoicePdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id']['invoice.pdf'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsIdLaunch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdLaunchMutationOptions<TError, TOnMutateResult>(
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

export function usePostProjectsIdPackage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdPackageMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdPackageCheckQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['package']['check']['$get']>
  >,
) {
  return ['projects', '/projects/:id/package/check', toValue(args)] as const
}

export function getProjectsIdPackageCheckQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['package']['check']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdPackageCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].package.check.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdPackageCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['package']['check']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdPackageCheckQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdPackageCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdPackageCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].package.check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsIdPackageLanguage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)[':id']['package'][':language']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['package'][':language']['$post']>,
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
  const mutationDefaults = getPostProjectsIdPackageLanguageMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdProgressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['progress']['$get']>>,
) {
  return ['projects', '/projects/:id/progress', toValue(args)] as const
}

export function getProjectsIdProgressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['progress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].progress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['progress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdProgressQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].progress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsIdRecreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdRecreateMutationOptions<TError, TOnMutateResult>(
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

export function usePostProjectsIdReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdReportsMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdSalesActivitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$get']>
  >,
) {
  return ['projects', '/projects/:id/sales/activities', toValue(args)] as const
}

export function getProjectsIdSalesActivitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdSalesActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].sales.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdSalesActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdSalesActivitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdSalesActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdSalesActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].sales.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsIdSalesActivities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdSalesActivitiesMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['webhooks']['$get']>>,
) {
  return ['projects', '/projects/:id/webhooks', toValue(args)] as const
}

export function getProjectsIdWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['webhooks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['webhooks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProjectsIdWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function usePostProjectsIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteProjectsIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsIdWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdActivitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['activities']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/activities', toValue(args)] as const
}

export function getProjectsProjectIdActivitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['activities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['activities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdActivitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdActivitiesActivityIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['activities'][':activityId']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/activities/:activityId', toValue(args)] as const
}

export function getProjectsProjectIdActivitiesActivityIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['activities'][':activityId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdActivitiesActivityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].activities[':activityId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdActivitiesActivityId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['activities'][':activityId']['$get']>
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
                    (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
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
                    (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdActivitiesActivityIdQueryKey>
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
            ReturnType<(typeof client.projects)[':projectId']['activities'][':activityId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdActivitiesActivityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdActivitiesActivityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].activities[':activityId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsProjectIdActivitiesActivityId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdActivitiesActivityIdMutationOptions<
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

export function getProjectsProjectIdActivitiesActivityIdCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/activities/:activityId/comments',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdActivitiesActivityIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdActivitiesActivityIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].activities[':activityId'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdActivitiesActivityIdComments<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
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
                    (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
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
                    (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdActivitiesActivityIdCommentsQueryKey>
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
              (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdActivitiesActivityIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdActivitiesActivityIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].activities[':activityId'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['comments']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/comments', toValue(args)] as const
}

export function getProjectsProjectIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['comments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['comments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['documents']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/documents', toValue(args)] as const
}

export function getProjectsProjectIdDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['documents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['documents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDocumentsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsProjectIdDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdDocumentsMutationOptions<
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

export function getProjectsProjectIdDocumentsDocumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['documents'][':documentId']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/documents/:documentId', toValue(args)] as const
}

export function getProjectsProjectIdDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['documents'][':documentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdDocumentsDocumentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['documents'][':documentId']['$get']>
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
                    (typeof client.projects)[':projectId']['documents'][':documentId']['$get']
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
                    (typeof client.projects)[':projectId']['documents'][':documentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdQueryKey>
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
            ReturnType<(typeof client.projects)[':projectId']['documents'][':documentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDocumentsDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].documents[':documentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsProjectIdDocumentsDocumentId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdDocumentsDocumentIdMutationOptions<
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

export function useDeleteProjectsProjectIdDocumentsDocumentId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdDocumentsDocumentIdMutationOptions<
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

export function getProjectsProjectIdDocumentsDocumentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
    >
  >,
) {
  return ['projects', '/projects/:projectId/documents/:documentId/download', toValue(args)] as const
}

export function getProjectsProjectIdDocumentsDocumentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDocumentsDocumentIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdDocumentsDocumentIdDownload<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
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
                    (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
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
                    (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdDownloadQueryKey>
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
              (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDocumentsDocumentIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].documents[':documentId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/documents/:documentId/translations',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDocumentsDocumentIdTranslationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].translations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdDocumentsDocumentIdTranslations<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
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
                    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
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
                    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdTranslationsQueryKey>
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
              (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdTranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDocumentsDocumentIdTranslationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].documents[':documentId'].translations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/documents/:documentId/translations/download/:language',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].translations.download[
          ':language'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguage<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
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
                    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
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
                    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryKey
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
              (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].documents[':documentId'].translations.download[
            ':language'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/documents/:documentId/translations/:language',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].documents[':documentId'].translations[':language'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsProjectIdDocumentsDocumentIdTranslationsLanguage<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
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
                    (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
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
                    (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryKey>
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
              (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].documents[':documentId'].translations[':language'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdGlossariesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/glossaries', toValue(args)] as const
}

export function getProjectsProjectIdGlossariesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdGlossariesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].glossaries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdGlossaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdGlossariesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdGlossariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdGlossariesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].glossaries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsProjectIdGlossaries<
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
                Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdGlossariesMutationOptions<
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

export function getProjectsProjectIdGlossariesGlossaryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/glossaries/:glossaryId', toValue(args)] as const
}

export function getProjectsProjectIdGlossariesGlossaryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdGlossariesGlossaryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].glossaries[':glossaryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdGlossariesGlossaryId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']>
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
                    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
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
                    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdGlossariesGlossaryIdQueryKey>
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
            ReturnType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdGlossariesGlossaryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdGlossariesGlossaryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].glossaries[':glossaryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsProjectIdGlossariesGlossaryId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProjectsProjectIdGlossariesGlossaryIdMutationOptions<
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

export function useDeleteProjectsProjectIdGlossariesGlossaryId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdGlossariesGlossaryIdMutationOptions<
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

export function getProjectsProjectIdGlossariesGlossaryIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/glossaries/:glossaryId/download',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdGlossariesGlossaryIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdGlossariesGlossaryIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].glossaries[':glossaryId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdGlossariesGlossaryIdDownload<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
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
                    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
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
                    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdGlossariesGlossaryIdDownloadQueryKey>
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
              (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdGlossariesGlossaryIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdGlossariesGlossaryIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].glossaries[':glossaryId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdStringsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['strings']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/strings', toValue(args)] as const
}

export function getProjectsProjectIdStringsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['strings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdStringsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].strings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['strings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdStringsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStringsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdStringsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].strings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsProjectIdStringsPackage<
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
                  ReturnType<(typeof client.projects)[':projectId']['strings']['package']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['strings']['package']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdStringsPackageMutationOptions<
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

export function getProjectsProjectIdStringsPackageStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['strings']['package']['status']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/strings/package/status', toValue(args)] as const
}

export function getProjectsProjectIdStringsPackageStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['strings']['package']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdStringsPackageStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].strings.package.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdStringsPackageStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['strings']['package']['status']['$get']>
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
                    (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
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
                    (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdStringsPackageStatusQueryKey>
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
              (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStringsPackageStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdStringsPackageStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].strings.package.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsProjectIdStringsLanguageCodePackage<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdStringsLanguageCodePackageMutationOptions<
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

export function getProjectsProjectIdStringsLanguageCodePackageStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/strings/:languageCode/package/status',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdStringsLanguageCodePackageStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdStringsLanguageCodePackageStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].strings[':languageCode'].package.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdStringsLanguageCodePackageStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
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
                    (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
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
                    (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdStringsLanguageCodePackageStatusQueryKey>
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
              (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStringsLanguageCodePackageStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdStringsLanguageCodePackageStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].strings[':languageCode'].package.status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdStringsLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/strings/:language', toValue(args)] as const
}

export function getProjectsProjectIdStringsLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdStringsLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].strings[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdStringsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdStringsLanguageQueryKey>
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
            ReturnType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStringsLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdStringsLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].strings[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdStyleguidesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/styleguides', toValue(args)] as const
}

export function getProjectsProjectIdStyleguidesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdStyleguidesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].styleguides.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdStyleguides<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdStyleguidesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStyleguidesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdStyleguidesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].styleguides.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsProjectIdStyleguides<
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
                Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdStyleguidesMutationOptions<
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

export function getProjectsProjectIdStyleguidesStyleGuideIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/styleguides/:styleGuideId', toValue(args)] as const
}

export function getProjectsProjectIdStyleguidesStyleGuideIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdStyleguidesStyleGuideIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].styleguides[':styleGuideId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdStyleguidesStyleGuideId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']>
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
                    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
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
                    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdStyleguidesStyleGuideIdQueryKey>
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
              (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStyleguidesStyleGuideIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdStyleguidesStyleGuideIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].styleguides[':styleGuideId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsProjectIdStyleguidesStyleGuideId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProjectsProjectIdStyleguidesStyleGuideIdMutationOptions<
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

export function useDeleteProjectsProjectIdStyleguidesStyleGuideId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdStyleguidesStyleGuideIdMutationOptions<
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

export function getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/styleguides/:styleGuideId/download',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].styleguides[':styleGuideId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdStyleguidesStyleGuideIdDownload<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
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
                    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
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
                    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryKey>
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
              (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdStyleguidesStyleGuideIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].styleguides[':styleGuideId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdTranslationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['translations']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/translations', toValue(args)] as const
}

export function getProjectsProjectIdTranslationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['translations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdTranslationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].translations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdTranslations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['translations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdTranslationsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdTranslationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].translations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdTranslationsLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['translations'][':language']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/translations/:language', toValue(args)] as const
}

export function getProjectsProjectIdTranslationsLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['translations'][':language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdTranslationsLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].translations[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdTranslationsLanguage<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['translations'][':language']['$get']>
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
                    (typeof client.projects)[':projectId']['translations'][':language']['$get']
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
                    (typeof client.projects)[':projectId']['translations'][':language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdTranslationsLanguageQueryKey>
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
            ReturnType<(typeof client.projects)[':projectId']['translations'][':language']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTranslationsLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdTranslationsLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].translations[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdVendorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['vendors']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/vendors', toValue(args)] as const
}

export function getProjectsProjectIdVendorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['vendors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdVendorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].vendors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdVendors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['vendors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdVendorsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdVendorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdVendorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].vendors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostReportsFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.filter.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reports.filter.$post>,
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
  const mutationDefaults = getPostReportsFilterMutationOptions<TError, TOnMutateResult>(
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

export function usePostReportsLanguagePairs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportsLanguagePairsMutationOptions<TError, TOnMutateResult>(
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

export function usePostReportsProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.projects.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reports.projects.$post>,
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
  const mutationDefaults = getPostReportsProjectsMutationOptions<TError, TOnMutateResult>(
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

export function usePostReportsQa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.qa.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reports.qa.$post>,
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
  const mutationDefaults = getPostReportsQaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostReportsUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reports.users.$post>,
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
  const mutationDefaults = getPostReportsUsersMutationOptions<TError, TOnMutateResult>(
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

export function usePostResendEmailConfirmation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostResendEmailConfirmationMutationOptions<TError, TOnMutateResult>(
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

export function getResponsivityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.responsivity.$get>>,
) {
  return ['responsivity', '/responsivity', toValue(args)] as const
}

export function getResponsivityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.responsivity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResponsivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.responsivity.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useResponsivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.responsivity.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>
          >,
          ReturnType<typeof getResponsivityQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResponsivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResponsivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.responsivity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
) {
  return ['search', '/search', toValue(args)] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSearchDocumentsReindex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.search.documents.reindex.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostSearchDocumentsReindexMutationOptions<TError, TOnMutateResult>(
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

export function getSearchDocumentsReindexStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.documents.reindex.status.$get>>,
) {
  return ['search', '/search/documents/reindex/status', toValue(args)] as const
}

export function getSearchDocumentsReindexStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.documents.reindex.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchDocumentsReindexStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.documents.reindex.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchDocumentsReindexStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.documents.reindex.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>
              >
            >
          >,
          ReturnType<typeof getSearchDocumentsReindexStatusQueryKey>
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
          Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchDocumentsReindexStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchDocumentsReindexStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.documents.reindex.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsQueryKey() {
  return ['stats', '/stats'] as const
}

export function getStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
          ReturnType<typeof getStatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCommissionsQueryKey() {
  return ['stats', '/stats/commissions'] as const
}

export function getStatsCommissionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsCommissionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.commissions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsCommissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>
            >
          >,
          ReturnType<typeof getStatsCommissionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCommissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsCommissionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.commissions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostStatsCommissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.stats.commissions.$post>,
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
  const mutationDefaults = getPostStatsCommissionsMutationOptions<TError, TOnMutateResult>(
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

export function getStatsPopularPairsQueryKey() {
  return ['stats', '/stats/popular-pairs'] as const
}

export function getStatsPopularPairsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsPopularPairsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats['popular-pairs'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsPopularPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStatsPopularPairsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsPopularPairsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsPopularPairsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats['popular-pairs'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsProjectsQueryKey() {
  return ['stats', '/stats/projects'] as const
}

export function getStatsProjectsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsProjectsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.projects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
          >,
          ReturnType<typeof getStatsProjectsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsProjectsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.projects.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsStringsQueryKey() {
  return ['stats', '/stats/strings'] as const
}

export function getStatsStringsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsStringsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.strings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsStrings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
          >,
          ReturnType<typeof getStatsStringsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsStringsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsStringsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.strings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStringsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.strings.$get>>,
) {
  return ['strings', '/strings', toValue(args)] as const
}

export function getStringsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.strings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStringsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.strings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStrings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.strings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>
          >,
          ReturnType<typeof getStringsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStringsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStringsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.strings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.strings.$put>,
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
  const mutationDefaults = getPutStringsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.strings.$post>,
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
  const mutationDefaults = getPostStringsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostStringsLanguageCodePackage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStringsLanguageCodePackageMutationOptions<
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

export function getStringsLanguageCodePackageStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.strings)[':languageCode']['package']['status']['$get']>
  >,
) {
  return ['strings', '/strings/:languageCode/package/status', toValue(args)] as const
}

export function getStringsLanguageCodePackageStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.strings)[':languageCode']['package']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStringsLanguageCodePackageStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.strings[':languageCode'].package.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStringsLanguageCodePackageStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.strings)[':languageCode']['package']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.strings)[':languageCode']['package']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.strings)[':languageCode']['package']['status']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStringsLanguageCodePackageStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.strings)[':languageCode']['package']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStringsLanguageCodePackageStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStringsLanguageCodePackageStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.strings[':languageCode'].package.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStyleguideQueryKey() {
  return ['styleguide', '/styleguide'] as const
}

export function getStyleguideQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStyleguideQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.styleguide.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStyleguide<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>
          >,
          ReturnType<typeof getStyleguideQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStyleguideQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStyleguideQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.styleguide.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostStyleguide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.styleguide.$post>,
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
  const mutationDefaults = getPostStyleguideMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSurveysScopeTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.surveys)[':scope'][':type']['$get']>>,
) {
  return ['surveys', '/surveys/:scope/:type', toValue(args)] as const
}

export function getSurveysScopeTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.surveys)[':scope'][':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSurveysScopeTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.surveys[':scope'][':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSurveysScopeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.surveys)[':scope'][':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSurveysScopeTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSurveysScopeTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSurveysScopeTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.surveys[':scope'][':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSurveysScopeType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSurveysScopeTypeMutationOptions<TError, TOnMutateResult>(
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

export function getSwaggerQueryKey() {
  return ['swagger', '/swagger'] as const
}

export function getSwaggerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSwaggerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.swagger.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSwagger<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>
          >,
          ReturnType<typeof getSwaggerQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSwaggerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSwaggerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.swagger.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
          TError,
          InferRequestType<typeof client.token.$post>,
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
  const mutationDefaults = getPostTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUnfreezeAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['unfreeze-account']['$post']>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostUnfreezeAccountMutationOptions<TError, TOnMutateResult>(
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

export function getUserGroupsQueryKey() {
  return ['user-groups', '/user-groups'] as const
}

export function getUserGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['user-groups'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>
            >
          >,
          ReturnType<typeof getUserGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['user-groups'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUsersAvailableVendors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersAvailableVendorsMutationOptions<TError, TOnMutateResult>(
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

export function usePostUsersFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.filter.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.filter.$post>,
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
  const mutationDefaults = getPostUsersFilterMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUsersSendPasswordReminder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersSendPasswordReminderMutationOptions<TError, TOnMutateResult>(
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

export function getUsersTagsQueryKey() {
  return ['users', '/users/tags'] as const
}

export function getUsersTagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersTagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>
          >,
          ReturnType<typeof getUsersTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersTagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.tags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['$get']>>,
) {
  return [':userId', '/:userId', toValue(args)] as const
}

export function getUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUserIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':userId']['$post']>,
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
  const mutationDefaults = getPostUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUserIdApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserIdApproveMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteUserIdDeleteAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserIdDeleteAccountMutationOptions<TError, TOnMutateResult>(
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

export function getUserIdDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['documents']['$get']>>,
) {
  return [':userId', '/:userId/documents', toValue(args)] as const
}

export function getUserIdDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['documents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['documents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdDocumentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserIdDowngradeProofreader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserIdDowngradeProofreaderMutationOptions<
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

export function getUserIdEarningsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['earnings']['$get']>>,
) {
  return [':userId', '/:userId/earnings', toValue(args)] as const
}

export function getUserIdEarningsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['earnings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdEarningsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].earnings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdEarnings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['earnings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdEarningsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdEarningsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdEarningsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].earnings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserIdFreezeAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserIdFreezeAccountMutationOptions<TError, TOnMutateResult>(
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

export function usePostUserIdMakeProofreader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserIdMakeProofreaderMutationOptions<TError, TOnMutateResult>(
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

export function usePostUserIdNotificationsSubscribe<
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
                  ReturnType<(typeof client)[':userId']['notifications']['subscribe']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':userId']['notifications']['subscribe']['$post']>,
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
  const mutationDefaults = getPostUserIdNotificationsSubscribeMutationOptions<
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

export function usePostUserIdNotificationsUnsubscribe<
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
                  ReturnType<(typeof client)[':userId']['notifications']['unsubscribe']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':userId']['notifications']['unsubscribe']['$post']>,
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
  const mutationDefaults = getPostUserIdNotificationsUnsubscribeMutationOptions<
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

export function getUserIdPaymentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['payment']['$get']>>,
) {
  return [':userId', '/:userId/payment', toValue(args)] as const
}

export function getUserIdPaymentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['payment']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdPaymentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].payment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdPayment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['payment']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdPaymentQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdPaymentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdPaymentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].payment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserIdPayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserIdPaymentMutationOptions<TError, TOnMutateResult>(
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

export function getUserIdPermissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['permissions']['$get']>>,
) {
  return [':userId', '/:userId/permissions', toValue(args)] as const
}

export function getUserIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['permissions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['permissions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdPermissionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserIdProfilePicture<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserIdProfilePictureMutationOptions<TError, TOnMutateResult>(
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

export function getUserIdProjectsVendorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':userId']['projects']['vendor']['$get']>
  >,
) {
  return [':userId', '/:userId/projects/vendor', toValue(args)] as const
}

export function getUserIdProjectsVendorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':userId']['projects']['vendor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdProjectsVendorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].projects.vendor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdProjectsVendor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':userId']['projects']['vendor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdProjectsVendorQueryKey>
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
          Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdProjectsVendorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdProjectsVendorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].projects.vendor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserIdReject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['reject']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':userId']['reject']['$post']>,
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
  const mutationDefaults = getPostUserIdRejectMutationOptions<TError, TOnMutateResult>(
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

export function usePostUserIdResendEmailConfirmation<
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
                  ReturnType<(typeof client)[':userId']['resend-email-confirmation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':userId']['resend-email-confirmation']['$post']>,
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
  const mutationDefaults = getPostUserIdResendEmailConfirmationMutationOptions<
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

export function getUserIdResponsivityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['responsivity']['$get']>>,
) {
  return [':userId', '/:userId/responsivity', toValue(args)] as const
}

export function getUserIdResponsivityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['responsivity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdResponsivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].responsivity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdResponsivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['responsivity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdResponsivityQueryKey>
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
          Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdResponsivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdResponsivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].responsivity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserIdStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['stats']['$get']>>,
) {
  return [':userId', '/:userId/stats', toValue(args)] as const
}

export function getUserIdStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['stats']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['stats']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
            >
          >,
          ReturnType<typeof getUserIdStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserIdStatsPopularPairsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>
  >,
) {
  return [':userId', '/:userId/stats/popular-pairs', toValue(args)] as const
}

export function getUserIdStatsPopularPairsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdStatsPopularPairsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].stats['popular-pairs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdStatsPopularPairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdStatsPopularPairsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdStatsPopularPairsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdStatsPopularPairsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].stats['popular-pairs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserIdStatsProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['stats']['projects']['$get']>>,
) {
  return [':userId', '/:userId/stats/projects', toValue(args)] as const
}

export function getUserIdStatsProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['stats']['projects']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdStatsProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].stats.projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdStatsProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['stats']['projects']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdStatsProjectsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdStatsProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdStatsProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].stats.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserIdSuspendMutationOptions<TError, TOnMutateResult>(
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

export function usePostUserIdUnfreezeAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserIdUnfreezeAccountMutationOptions<TError, TOnMutateResult>(
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

export function getUserIdUserGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['user-groups']['$get']>>,
) {
  return [':userId', '/:userId/user-groups', toValue(args)] as const
}

export function getUserIdUserGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['user-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdUserGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId']['user-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdUserGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['user-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdUserGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdUserGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdUserGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId']['user-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserIdUserGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserIdUserGroupsMutationOptions<TError, TOnMutateResult>(
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
