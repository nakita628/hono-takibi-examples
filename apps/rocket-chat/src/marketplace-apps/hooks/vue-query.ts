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

export function getApiKey() {
  return ['api'] as const
}

export function getAppKey() {
  return ['app'] as const
}

export function getAppsKey() {
  return ['apps'] as const
}

export function getPostApiAppsPublicAppIdIncomingMutationKey() {
  return ['api', '/api/apps/public/:app-id/incoming', 'POST'] as const
}

export function getPostApiAppsPublicAppIdIncomingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAppsPublicAppIdIncomingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>,
    ) {
      return parseResponse(client.api.apps.public[':app-id'].incoming.$post(args, options))
    },
  })
}

export function usePostApiAppsPublicAppIdIncoming<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>,
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
  const mutationDefaults = getPostApiAppsPublicAppIdIncomingMutationOptions<
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

export function getPostApiAppsPublicAppIdTemplateMessageMutationKey() {
  return ['api', '/api/apps/public/:appId/templateMessage', 'POST'] as const
}

export function getPostApiAppsPublicAppIdTemplateMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAppsPublicAppIdTemplateMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>,
    ) {
      return parseResponse(client.api.apps.public[':appId'].templateMessage.$post(args, options))
    },
  })
}

export function usePostApiAppsPublicAppIdTemplateMessage<
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
                  ReturnType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>,
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
  const mutationDefaults = getPostApiAppsPublicAppIdTemplateMessageMutationOptions<
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

export function getPostApiAppsMutationKey() {
  return ['api', '/api/apps', 'POST'] as const
}

export function getPostApiAppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.apps.$post>) {
      return parseResponse(client.api.apps.$post(args, options))
    },
  })
}

export function usePostApiApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.apps.$post>,
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
  const mutationDefaults = getPostApiAppsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAppsLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.logs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/apps/logs', keyArgs] as const
}

export function getApiAppsLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppsLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.apps.logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppsLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
          >,
          ReturnType<typeof getApiAppsLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppsLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppsLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.apps.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppIdLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.app)[':id']['logs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['app', '/app/:id/logs', keyArgs] as const
}

export function getAppIdLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.app)[':id']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app[':id'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.app)[':id']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
            >
          >,
          ReturnType<typeof getAppIdLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app[':id'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideoConferenceJitsiUpdateTimeoutMutationKey() {
  return ['api', '/api/v1/video-conference/jitsi.update-timeout', 'POST'] as const
}

export function getPostApiV1VideoConferenceJitsiUpdateTimeoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceJitsiUpdateTimeoutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-conference']['jitsi.update-timeout'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1VideoConferenceJitsiUpdateTimeout<
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
                    (typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']
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
  const mutationDefaults = getPostApiV1VideoConferenceJitsiUpdateTimeoutMutationOptions<
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

export function getApiAppsMarketplaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.marketplace.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/apps/marketplace', keyArgs] as const
}

export function getApiAppsMarketplaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.marketplace.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppsMarketplaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.apps.marketplace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppsMarketplace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.marketplace.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>
            >
          >,
          ReturnType<typeof getApiAppsMarketplaceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppsMarketplaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppsMarketplaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.apps.marketplace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAppsCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.categories.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/apps/categories', keyArgs] as const
}

export function getApiAppsCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppsCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.apps.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppsCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>
            >
          >,
          ReturnType<typeof getApiAppsCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppsCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppsCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.apps.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAppsInstalledQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.installed.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/apps/installed', keyArgs] as const
}

export function getApiAppsInstalledQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.installed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppsInstalledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.apps.installed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppsInstalled<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.apps.installed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>
            >
          >,
          ReturnType<typeof getApiAppsInstalledQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppsInstalledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppsInstalledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.apps.installed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.count.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/count', keyArgs] as const
}

export function getAppsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.count.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAppsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>
          >,
          ReturnType<typeof getAppsCountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsBuildExternalAppRequestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.buildExternalAppRequest.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/buildExternalAppRequest', keyArgs] as const
}

export function getAppsBuildExternalAppRequestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.buildExternalAppRequest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsBuildExternalAppRequestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.buildExternalAppRequest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsBuildExternalAppRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.buildExternalAppRequest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>
              >
            >
          >,
          ReturnType<typeof getAppsBuildExternalAppRequestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsBuildExternalAppRequestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsBuildExternalAppRequestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.buildExternalAppRequest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAppsAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.apps)[':appId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/apps/:appId', keyArgs] as const
}

export function getApiAppsAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.apps)[':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.apps[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.apps)[':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
            >
          >,
          ReturnType<typeof getApiAppsAppIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.apps[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiAppsAppIdMutationKey() {
  return ['api', '/api/apps/:appId', 'DELETE'] as const
}

export function getDeleteApiAppsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.apps)[':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAppsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.apps)[':appId']['$delete']>) {
      return parseResponse(client.api.apps[':appId'].$delete(args, options))
    },
  })
}

export function useDeleteApiAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.apps)[':appId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.apps)[':appId']['$delete']>,
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
  const mutationDefaults = getDeleteApiAppsAppIdMutationOptions<TError, TOnMutateResult>(
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
