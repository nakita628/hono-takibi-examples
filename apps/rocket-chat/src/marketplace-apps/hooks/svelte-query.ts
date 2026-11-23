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

export function createPostApiAppsPublicAppIdIncoming<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAppsPublicAppIdIncomingMutationOptions<
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

export function createPostApiAppsPublicAppIdTemplateMessage<
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
                ReturnType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>,
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
    const mutationDefaults = getPostApiAppsPublicAppIdTemplateMessageMutationOptions<
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

export function createPostApiApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.apps.$post>,
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
    const mutationDefaults = getPostApiAppsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAppsLogsQueryKey(args: InferRequestType<typeof client.api.apps.logs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/apps/logs', keyArgs] as const
}

export function getApiAppsLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.apps.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppsLogsQueryKey>
  >({
    queryKey: getApiAppsLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.apps.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAppsLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.apps.logs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppsLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAppsLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAppIdLogsQueryKey(
  args: InferRequestType<(typeof client.app)[':id']['logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['app', '/app/:id/logs', keyArgs] as const
}

export function getAppIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.app)[':id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppIdLogsQueryKey>
  >({
    queryKey: getAppIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app[':id'].logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAppIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.app)[':id']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppIdLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppIdLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiV1VideoConferenceJitsiUpdateTimeout<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1VideoConferenceJitsiUpdateTimeoutMutationOptions<
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

export function getApiAppsMarketplaceQueryKey(
  args: InferRequestType<typeof client.api.apps.marketplace.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/apps/marketplace', keyArgs] as const
}

export function getApiAppsMarketplaceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.apps.marketplace.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppsMarketplaceQueryKey>
  >({
    queryKey: getApiAppsMarketplaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.apps.marketplace.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAppsMarketplace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.apps.marketplace.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppsMarketplaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAppsMarketplaceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiAppsCategoriesQueryKey(
  args: InferRequestType<typeof client.api.apps.categories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/apps/categories', keyArgs] as const
}

export function getApiAppsCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.apps.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppsCategoriesQueryKey>
  >({
    queryKey: getApiAppsCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.apps.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAppsCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.apps.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppsCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAppsCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiAppsInstalledQueryKey(
  args: InferRequestType<typeof client.api.apps.installed.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/apps/installed', keyArgs] as const
}

export function getApiAppsInstalledQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.apps.installed.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppsInstalledQueryKey>
  >({
    queryKey: getApiAppsInstalledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.apps.installed.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAppsInstalled<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.apps.installed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppsInstalledQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAppsInstalledQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAppsCountQueryKey(args: InferRequestType<typeof client.apps.count.$get>) {
  const { header: _, ...keyArgs } = args
  return ['apps', '/apps/count', keyArgs] as const
}

export function getAppsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apps.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsCountQueryKey>
  >({
    queryKey: getAppsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAppsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apps.count.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAppsBuildExternalAppRequestQueryKey(
  args: InferRequestType<typeof client.apps.buildExternalAppRequest.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['apps', '/apps/buildExternalAppRequest', keyArgs] as const
}

export function getAppsBuildExternalAppRequestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apps.buildExternalAppRequest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsBuildExternalAppRequestQueryKey>
  >({
    queryKey: getAppsBuildExternalAppRequestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.buildExternalAppRequest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsBuildExternalAppRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apps.buildExternalAppRequest.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsBuildExternalAppRequestQueryKey>
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
      ...getAppsBuildExternalAppRequestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiAppsAppIdQueryKey(
  args: InferRequestType<(typeof client.api.apps)[':appId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/apps/:appId', keyArgs] as const
}

export function getApiAppsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.apps)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppsAppIdQueryKey>
  >({
    queryKey: getApiAppsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.apps[':appId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAppsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.apps)[':appId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAppsAppIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.apps)[':appId']['$delete']>,
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
    const mutationDefaults = getDeleteApiAppsAppIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
