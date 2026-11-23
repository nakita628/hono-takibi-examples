import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostApiAppsPublicAppIdIncomingKey() {
  return ['api', '/api/apps/public/:app-id/incoming', 'POST'] as const
}

export function usePostApiAppsPublicAppIdIncoming<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAppsPublicAppIdIncomingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>
        },
      ) => parseResponse(client.api.apps.public[':app-id'].incoming.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAppsPublicAppIdTemplateMessageKey() {
  return ['api', '/api/apps/public/:appId/templateMessage', 'POST'] as const
}

export function usePostApiAppsPublicAppIdTemplateMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAppsPublicAppIdTemplateMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.apps.public)[':appId']['templateMessage']['$post']
          >
        },
      ) =>
        parseResponse(client.api.apps.public[':appId'].templateMessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAppsKey() {
  return ['api', '/api/apps', 'POST'] as const
}

export function usePostApiApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.apps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.apps.$post> }) =>
        parseResponse(client.api.apps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAppsLogsKey(args: InferRequestType<typeof client.api.apps.logs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/apps/logs', keyArgs] as const
}

export function useGetApiAppsLogs<TError = unknown>(
  args: InferRequestType<typeof client.api.apps.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAppsLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apps.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAppsLogs<TError = unknown>(
  args: InferRequestType<typeof client.api.apps.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAppsLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apps.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppIdLogsKey(
  args: InferRequestType<(typeof client.app)[':id']['logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['app', '/app/:id/logs', keyArgs] as const
}

export function useGetAppIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.app)[':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppIdLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app[':id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.app)[':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppIdLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.app)[':id']['logs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app[':id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1VideoConferenceJitsiUpdateTimeoutKey() {
  return ['api', '/api/v1/video-conference/jitsi.update-timeout', 'POST'] as const
}

export function usePostApiV1VideoConferenceJitsiUpdateTimeout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VideoConferenceJitsiUpdateTimeoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1['video-conference']['jitsi.update-timeout'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAppsMarketplaceKey(
  args: InferRequestType<typeof client.api.apps.marketplace.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/apps/marketplace', keyArgs] as const
}

export function useGetApiAppsMarketplace<TError = unknown>(
  args: InferRequestType<typeof client.api.apps.marketplace.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAppsMarketplaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apps.marketplace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAppsMarketplace<TError = unknown>(
  args: InferRequestType<typeof client.api.apps.marketplace.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAppsMarketplaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.marketplace.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apps.marketplace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAppsCategoriesKey(
  args: InferRequestType<typeof client.api.apps.categories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/apps/categories', keyArgs] as const
}

export function useGetApiAppsCategories<TError = unknown>(
  args: InferRequestType<typeof client.api.apps.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAppsCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apps.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAppsCategories<TError = unknown>(
  args: InferRequestType<typeof client.api.apps.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAppsCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apps.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAppsInstalledKey(
  args: InferRequestType<typeof client.api.apps.installed.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/apps/installed', keyArgs] as const
}

export function useGetApiAppsInstalled<TError = unknown>(
  args: InferRequestType<typeof client.api.apps.installed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAppsInstalledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apps.installed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAppsInstalled<TError = unknown>(
  args: InferRequestType<typeof client.api.apps.installed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAppsInstalledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apps.installed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apps.installed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsCountKey(args: InferRequestType<typeof client.apps.count.$get>) {
  const { header: _, ...keyArgs } = args
  return ['apps', '/apps/count', keyArgs] as const
}

export function useGetAppsCount<TError = unknown>(
  args: InferRequestType<typeof client.apps.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsCount<TError = unknown>(
  args: InferRequestType<typeof client.apps.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.count.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsBuildExternalAppRequestKey(
  args: InferRequestType<typeof client.apps.buildExternalAppRequest.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['apps', '/apps/buildExternalAppRequest', keyArgs] as const
}

export function useGetAppsBuildExternalAppRequest<TError = unknown>(
  args: InferRequestType<typeof client.apps.buildExternalAppRequest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAppsBuildExternalAppRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.buildExternalAppRequest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsBuildExternalAppRequest<TError = unknown>(
  args: InferRequestType<typeof client.apps.buildExternalAppRequest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAppsBuildExternalAppRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apps.buildExternalAppRequest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.buildExternalAppRequest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAppsAppIdKey(
  args: InferRequestType<(typeof client.api.apps)[':appId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/apps/:appId', keyArgs] as const
}

export function useGetApiAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.api.apps)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAppsAppIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apps[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.api.apps)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAppsAppIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apps[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiAppsAppIdKey() {
  return ['api', '/api/apps/:appId', 'DELETE'] as const
}

export function useDeleteApiAppsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.apps)[':appId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.apps)[':appId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAppsAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.apps)[':appId']['$delete']> },
      ) => parseResponse(client.api.apps[':appId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
