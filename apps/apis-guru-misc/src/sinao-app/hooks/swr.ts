import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppsKey() {
  return ['apps'] as const
}

export function getChangepasswordKey() {
  return ['changepassword'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getPingKey() {
  return ['ping'] as const
}

export function getRefreshKey() {
  return ['refresh'] as const
}

export function getRegisterKey() {
  return ['register'] as const
}

export function getSendpasswordKey() {
  return ['sendpassword'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getGetAppsKey(args: InferRequestType<typeof client.apps.$get>) {
  return ['apps', '/apps', args] as const
}

export function useGetApps<TError = unknown>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApps<TError = unknown>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAppsKey() {
  return ['apps', '/apps', 'POST'] as const
}

export function usePostApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.apps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.apps.$post> }) =>
        parseResponse(client.apps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAccessInviteAccessTokenKey(
  args: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$get']>,
) {
  return ['apps', '/apps/access/invite/:accessToken', args] as const
}

export function useGetAppsAccessInviteAccessToken<TError = unknown>(
  args: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
          >
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
        ? getGetAppsAccessInviteAccessTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps.access.invite[':accessToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAccessInviteAccessToken<TError = unknown>(
  args: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
          >
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
        ? getGetAppsAccessInviteAccessTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps.access.invite[':accessToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAppsAccessInviteAccessTokenKey() {
  return ['apps', '/apps/access/invite/:accessToken', 'DELETE'] as const
}

export function useDeleteAppsAccessInviteAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAccessInviteAccessTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$delete']> },
      ) => parseResponse(client.apps.access.invite[':accessToken'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAccessInviteAccessTokenRegisterKey() {
  return ['apps', '/apps/access/invite/:accessToken/register', 'POST'] as const
}

export function usePostAppsAccessInviteAccessTokenRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps.access.invite)[':accessToken']['register']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps.access.invite)[':accessToken']['register']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAccessInviteAccessTokenRegisterKey()
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
            (typeof client.apps.access.invite)[':accessToken']['register']['$post']
          >
        },
      ) =>
        parseResponse(client.apps.access.invite[':accessToken'].register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdKey(args: InferRequestType<(typeof client.apps)[':appId']['$get']>) {
  return ['apps', '/apps/:appId', args] as const
}

export function useGetAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdAccessKey(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['$get']>,
) {
  return ['apps', '/apps/:appId/access', args] as const
}

export function useGetAppsAppIdAccess<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>
          >
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
        ? getGetAppsAppIdAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAccess<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>
          >
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
        ? getGetAppsAppIdAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdAccessInviteKey(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$get']>,
) {
  return ['apps', '/apps/:appId/access/invite', args] as const
}

export function useGetAppsAppIdAccessInvite<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
          >
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
        ? getGetAppsAppIdAccessInviteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].access.invite.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAccessInvite<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
          >
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
        ? getGetAppsAppIdAccessInviteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].access.invite.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdAccessInviteKey() {
  return ['apps', '/apps/:appId/access/invite', 'POST'] as const
}

export function usePostAppsAppIdAccessInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdAccessInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$post']> },
      ) => parseResponse(client.apps[':appId'].access.invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdAccessInviteIdKey() {
  return ['apps', '/apps/:appId/access/invite/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdAccessInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['access']['invite'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdAccessInviteIdKey()
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
            (typeof client.apps)[':appId']['access']['invite'][':id']['$delete']
          >
        },
      ) => parseResponse(client.apps[':appId'].access.invite[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdAccessProfilesKey(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['profiles']['$get']>,
) {
  return ['apps', '/apps/:appId/access/profiles', args] as const
}

export function useGetAppsAppIdAccessProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
          >
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
        ? getGetAppsAppIdAccessProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].access.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAccessProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
          >
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
        ? getGetAppsAppIdAccessProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].access.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdAccessUserIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$get']>,
) {
  return ['apps', '/apps/:appId/access/:userId', args] as const
}

export function useGetAppsAppIdAccessUserId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
          >
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
        ? getGetAppsAppIdAccessUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].access[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAccessUserId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
          >
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
        ? getGetAppsAppIdAccessUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].access[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdAccessUserIdKey() {
  return ['apps', '/apps/:appId/access/:userId', 'POST'] as const
}

export function usePostAppsAppIdAccessUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdAccessUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$post']> },
      ) => parseResponse(client.apps[':appId'].access[':userId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdAccessUserIdKey() {
  return ['apps', '/apps/:appId/access/:userId', 'DELETE'] as const
}

export function useDeleteAppsAppIdAccessUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdAccessUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].access[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdAccountcategoriesIndexKey(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/accountcategories/', args] as const
}

export function useGetAppsAppIdAccountcategoriesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>
            >
          >
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
        ? getGetAppsAppIdAccountcategoriesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].accountcategories.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAccountcategoriesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>
            >
          >
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
        ? getGetAppsAppIdAccountcategoriesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].accountcategories.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdAccountcategoriesIndexKey() {
  return ['apps', '/apps/:appId/accountcategories/', 'POST'] as const
}

export function usePostAppsAppIdAccountcategoriesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdAccountcategoriesIndexKey()
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
            (typeof client.apps)[':appId']['accountcategories']['index']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].accountcategories.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdAccountcategoriesIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/accountcategories/:id', args] as const
}

export function useGetAppsAppIdAccountcategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdAccountcategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].accountcategories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAccountcategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdAccountcategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].accountcategories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdAccountcategoriesIdKey() {
  return ['apps', '/apps/:appId/accountcategories/:id', 'POST'] as const
}

export function usePostAppsAppIdAccountcategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdAccountcategoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].accountcategories[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdAccountcategoriesIdKey() {
  return ['apps', '/apps/:appId/accountcategories/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdAccountcategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdAccountcategoriesIdKey()
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
            (typeof client.apps)[':appId']['accountcategories'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].accountcategories[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdAccountingEntriesIndexKey(
  args: InferRequestType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/accounting_entries/', args] as const
}

export function useGetAppsAppIdAccountingEntriesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>
            >
          >
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
        ? getGetAppsAppIdAccountingEntriesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].accounting_entries.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAccountingEntriesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>
            >
          >
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
        ? getGetAppsAppIdAccountingEntriesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].accounting_entries.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdAccountsIndexKey(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/accounts/', args] as const
}

export function useGetAppsAppIdAccountsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
          >
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
        ? getGetAppsAppIdAccountsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].accounts.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAccountsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
          >
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
        ? getGetAppsAppIdAccountsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].accounts.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdAccountsIndexKey() {
  return ['apps', '/apps/:appId/accounts/', 'POST'] as const
}

export function usePostAppsAppIdAccountsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdAccountsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$post']> },
      ) => parseResponse(client.apps[':appId'].accounts.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdAccountsBatchKey() {
  return ['apps', '/apps/:appId/accounts/batch', 'POST'] as const
}

export function usePostAppsAppIdAccountsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['accounts']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdAccountsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['accounts']['batch']['$post']> },
      ) => parseResponse(client.apps[':appId'].accounts.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdAccountsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/accounts/:id', args] as const
}

export function useGetAppsAppIdAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdAccountsIdKey() {
  return ['apps', '/apps/:appId/accounts/:id', 'POST'] as const
}

export function usePostAppsAppIdAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$post']> },
      ) => parseResponse(client.apps[':appId'].accounts[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdAccountsIdKey() {
  return ['apps', '/apps/:appId/accounts/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$delete']> },
      ) => parseResponse(client.apps[':appId'].accounts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdApikeysKey(
  args: InferRequestType<(typeof client.apps)[':appId']['apikeys']['$get']>,
) {
  return ['apps', '/apps/:appId/apikeys', args] as const
}

export function useGetAppsAppIdApikeys<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['apikeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>
          >
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
        ? getGetAppsAppIdApikeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].apikeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdApikeys<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['apikeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>
          >
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
        ? getGetAppsAppIdApikeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].apikeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdApikeysKey() {
  return ['apps', '/apps/:appId/apikeys', 'POST'] as const
}

export function usePostAppsAppIdApikeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['apikeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdApikeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['apikeys']['$post']> },
      ) => parseResponse(client.apps[':appId'].apikeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdApikeysIdKey() {
  return ['apps', '/apps/:appId/apikeys/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdApikeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['apikeys'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdApikeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['apikeys'][':id']['$delete']> },
      ) => parseResponse(client.apps[':appId'].apikeys[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdApipartnersKey(
  args: InferRequestType<(typeof client.apps)[':appId']['apipartners']['$get']>,
) {
  return ['apps', '/apps/:appId/apipartners', args] as const
}

export function useGetAppsAppIdApipartners<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['apipartners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
          >
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
        ? getGetAppsAppIdApipartnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].apipartners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdApipartners<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['apipartners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
          >
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
        ? getGetAppsAppIdApipartnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].apipartners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdAttachmentsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$get']>,
) {
  return ['apps', '/apps/:appId/attachments', args] as const
}

export function useGetAppsAppIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
          >
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
        ? getGetAppsAppIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
          >
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
        ? getGetAppsAppIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAppsAppIdAttachmentsKey() {
  return ['apps', '/apps/:appId/attachments', 'PUT'] as const
}

export function usePutAppsAppIdAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['attachments']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppsAppIdAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['attachments']['$put']> },
      ) => parseResponse(client.apps[':appId'].attachments.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdAttachmentsKey() {
  return ['apps', '/apps/:appId/attachments', 'POST'] as const
}

export function usePostAppsAppIdAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['attachments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['attachments']['$post']> },
      ) => parseResponse(client.apps[':appId'].attachments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdAttachmentsDownloadKey(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['download']['$get']>,
) {
  return ['apps', '/apps/:appId/attachments/download', args] as const
}

export function useGetAppsAppIdAttachmentsDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>>
          >
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
        ? getGetAppsAppIdAttachmentsDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].attachments.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAttachmentsDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>>
          >
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
        ? getGetAppsAppIdAttachmentsDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].attachments.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdAttachmentsSapDownloadKey(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>,
) {
  return ['apps', '/apps/:appId/attachments/sap-download', args] as const
}

export function useGetAppsAppIdAttachmentsSapDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>
            >
          >
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
        ? getGetAppsAppIdAttachmentsSapDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].attachments['sap-download'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAttachmentsSapDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>
            >
          >
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
        ? getGetAppsAppIdAttachmentsSapDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].attachments['sap-download'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdAttachmentsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/attachments/:id', args] as const
}

export function useGetAppsAppIdAttachmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdAttachmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].attachments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAttachmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdAttachmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].attachments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAppsAppIdAttachmentsIdKey() {
  return ['apps', '/apps/:appId/attachments/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdAttachmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdAttachmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].attachments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdAttachmentsIdPdfKey(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>,
) {
  return ['apps', '/apps/:appId/attachments/:id/pdf', args] as const
}

export function useGetAppsAppIdAttachmentsIdPdf<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>>
          >
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
        ? getGetAppsAppIdAttachmentsIdPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].attachments[':id'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdAttachmentsIdPdf<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>>
          >
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
        ? getGetAppsAppIdAttachmentsIdPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].attachments[':id'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdBankdetailsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$get']>,
) {
  return ['apps', '/apps/:appId/bankdetails', args] as const
}

export function useGetAppsAppIdBankdetails<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
          >
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
        ? getGetAppsAppIdBankdetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].bankdetails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdBankdetails<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
          >
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
        ? getGetAppsAppIdBankdetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].bankdetails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdBankdetailsKey() {
  return ['apps', '/apps/:appId/bankdetails', 'POST'] as const
}

export function usePostAppsAppIdBankdetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdBankdetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$post']> },
      ) => parseResponse(client.apps[':appId'].bankdetails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdBankdetailsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/bankdetails/:id', args] as const
}

export function useGetAppsAppIdBankdetailsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdBankdetailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].bankdetails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdBankdetailsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdBankdetailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].bankdetails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdBankdetailsIdKey() {
  return ['apps', '/apps/:appId/bankdetails/:id', 'POST'] as const
}

export function usePostAppsAppIdBankdetailsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdBankdetailsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$post']> },
      ) => parseResponse(client.apps[':appId'].bankdetails[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdBankdetailsIdKey() {
  return ['apps', '/apps/:appId/bankdetails/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdBankdetailsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdBankdetailsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].bankdetails[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdBanksIndexKey(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/banks/', args] as const
}

export function useGetAppsAppIdBanksIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
          >
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
        ? getGetAppsAppIdBanksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].banks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdBanksIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
          >
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
        ? getGetAppsAppIdBanksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].banks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAppsAppIdBanksIndexKey() {
  return ['apps', '/apps/:appId/banks/', 'DELETE'] as const
}

export function useDeleteAppsAppIdBanksIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdBanksIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$delete']> },
      ) => parseResponse(client.apps[':appId'].banks.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdBanksConnectKey(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['connect']['$get']>,
) {
  return ['apps', '/apps/:appId/banks/connect', args] as const
}

export function useGetAppsAppIdBanksConnect<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['connect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
          >
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
        ? getGetAppsAppIdBanksConnectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].banks.connect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdBanksConnect<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['connect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
          >
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
        ? getGetAppsAppIdBanksConnectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].banks.connect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdBanksSynchronizeKey() {
  return ['apps', '/apps/:appId/banks/synchronize', 'POST'] as const
}

export function usePostAppsAppIdBanksSynchronize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['synchronize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['banks']['synchronize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdBanksSynchronizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['banks']['synchronize']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].banks.synchronize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdBanksIdFunnelEditKey(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>,
) {
  return ['apps', '/apps/:appId/banks/:id/funnel/edit', args] as const
}

export function useGetAppsAppIdBanksIdFunnelEdit<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
            >
          >
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
        ? getGetAppsAppIdBanksIdFunnelEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].banks[':id'].funnel.edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdBanksIdFunnelEdit<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
            >
          >
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
        ? getGetAppsAppIdBanksIdFunnelEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].banks[':id'].funnel.edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdBanksIdFunnelSyncKey(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>,
) {
  return ['apps', '/apps/:appId/banks/:id/funnel/sync', args] as const
}

export function useGetAppsAppIdBanksIdFunnelSync<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
            >
          >
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
        ? getGetAppsAppIdBanksIdFunnelSyncKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].banks[':id'].funnel.sync.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdBanksIdFunnelSync<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
            >
          >
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
        ? getGetAppsAppIdBanksIdFunnelSyncKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].banks[':id'].funnel.sync.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdBanksIdFunnelValidateKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
  >,
) {
  return ['apps', '/apps/:appId/banks/:id/funnel/validate', args] as const
}

export function useGetAppsAppIdBanksIdFunnelValidate<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdBanksIdFunnelValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].banks[':id'].funnel.validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdBanksIdFunnelValidate<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdBanksIdFunnelValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].banks[':id'].funnel.validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdBanksIdSelectAccountsKey() {
  return ['apps', '/apps/:appId/banks/:id/select_accounts', 'POST'] as const
}

export function usePostAppsAppIdBanksIdSelectAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['banks'][':id']['select_accounts']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['select_accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdBanksIdSelectAccountsKey()
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
            (typeof client.apps)[':appId']['banks'][':id']['select_accounts']['$post']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].banks[':id'].select_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdCashflowsourcesIndexKey(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/cashflowsources/', args] as const
}

export function useGetAppsAppIdCashflowsourcesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>>
          >
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
        ? getGetAppsAppIdCashflowsourcesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].cashflowsources.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdCashflowsourcesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>>
          >
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
        ? getGetAppsAppIdCashflowsourcesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].cashflowsources.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdCashflowsourcesIndexKey() {
  return ['apps', '/apps/:appId/cashflowsources/', 'POST'] as const
}

export function usePostAppsAppIdCashflowsourcesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdCashflowsourcesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].cashflowsources.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdCashflowsourcesIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/cashflowsources/:id', args] as const
}

export function useGetAppsAppIdCashflowsourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdCashflowsourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].cashflowsources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdCashflowsourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdCashflowsourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].cashflowsources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdCashflowsourcesIdKey() {
  return ['apps', '/apps/:appId/cashflowsources/:id', 'POST'] as const
}

export function usePostAppsAppIdCashflowsourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdCashflowsourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].cashflowsources[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdCashflowsourcesIdKey() {
  return ['apps', '/apps/:appId/cashflowsources/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdCashflowsourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdCashflowsourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].cashflowsources[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdContactsMergeKey() {
  return ['apps', '/apps/:appId/contacts/merge', 'POST'] as const
}

export function usePostAppsAppIdContactsMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['contacts']['merge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['contacts']['merge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdContactsMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['contacts']['merge']['$post']> },
      ) => parseResponse(client.apps[':appId'].contacts.merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdEmailBatchKey() {
  return ['apps', '/apps/:appId/email/batch', 'POST'] as const
}

export function usePostAppsAppIdEmailBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['email']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['email']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdEmailBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['email']['batch']['$post']> },
      ) => parseResponse(client.apps[':appId'].email.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdEmailDocumentKey() {
  return ['apps', '/apps/:appId/email/document', 'POST'] as const
}

export function usePostAppsAppIdEmailDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['email']['document']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['email']['document']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdEmailDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['email']['document']['$post']> },
      ) => parseResponse(client.apps[':appId'].email.document.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdEstablishmentsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/establishments/:id', args] as const
}

export function useGetAppsAppIdEstablishmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdEstablishmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].establishments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdEstablishmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdEstablishmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].establishments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdEstablishmentsIdKey() {
  return ['apps', '/apps/:appId/establishments/:id', 'POST'] as const
}

export function usePostAppsAppIdEstablishmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdEstablishmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].establishments[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdEstablishmentsIdKey() {
  return ['apps', '/apps/:appId/establishments/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdEstablishmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdEstablishmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].establishments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdExportsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['$get']>,
) {
  return ['apps', '/apps/:appId/exports', args] as const
}

export function useGetAppsAppIdExports<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>
          >
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
        ? getGetAppsAppIdExportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].exports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdExports<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>
          >
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
        ? getGetAppsAppIdExportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].exports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdExportsKey() {
  return ['apps', '/apps/:appId/exports', 'POST'] as const
}

export function usePostAppsAppIdExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['exports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['exports']['$post']> },
      ) => parseResponse(client.apps[':appId'].exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdExportsAcdComptaKey(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>,
) {
  return ['apps', '/apps/:appId/exports/acd_compta', args] as const
}

export function useGetAppsAppIdExportsAcdCompta<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
          >
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
        ? getGetAppsAppIdExportsAcdComptaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].exports.acd_compta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdExportsAcdCompta<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
          >
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
        ? getGetAppsAppIdExportsAcdComptaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].exports.acd_compta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdExportsAcdComptaKey() {
  return ['apps', '/apps/:appId/exports/acd_compta', 'POST'] as const
}

export function usePostAppsAppIdExportsAcdCompta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdExportsAcdComptaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].exports.acd_compta.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdExportsDownloadKey(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['download']['$get']>,
) {
  return ['apps', '/apps/:appId/exports/download', args] as const
}

export function useGetAppsAppIdExportsDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
          >
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
        ? getGetAppsAppIdExportsDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].exports.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdExportsDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
          >
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
        ? getGetAppsAppIdExportsDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].exports.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdExportsMonthsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['months']['$get']>,
) {
  return ['apps', '/apps/:appId/exports/months', args] as const
}

export function useGetAppsAppIdExportsMonths<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['months']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
          >
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
        ? getGetAppsAppIdExportsMonthsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].exports.months.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdExportsMonths<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['months']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
          >
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
        ? getGetAppsAppIdExportsMonthsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].exports.months.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdExportsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/exports/:id', args] as const
}

export function useGetAppsAppIdExportsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdExportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].exports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdExportsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdExportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].exports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAppsAppIdExportsIdKey() {
  return ['apps', '/apps/:appId/exports/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdExportsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdExportsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$delete']> },
      ) => parseResponse(client.apps[':appId'].exports[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdInvoicesKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices', args] as const
}

export function useGetAppsAppIdInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdInvoicesKey() {
  return ['apps', '/apps/:appId/invoices', 'POST'] as const
}

export function usePostAppsAppIdInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['invoices']['$post']> },
      ) => parseResponse(client.apps[':appId'].invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdInvoicesBatchKey() {
  return ['apps', '/apps/:appId/invoices/batch', 'POST'] as const
}

export function usePostAppsAppIdInvoicesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdInvoicesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$post']> },
      ) => parseResponse(client.apps[':appId'].invoices.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdInvoicesBatchKey() {
  return ['apps', '/apps/:appId/invoices/batch', 'DELETE'] as const
}

export function useDeleteAppsAppIdInvoicesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['batch']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdInvoicesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].invoices.batch.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdInvoicesDownloadKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['download']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/download', args] as const
}

export function useGetAppsAppIdInvoicesDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].invoices.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdInvoicesDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].invoices.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdInvoicesFreshKey() {
  return ['apps', '/apps/:appId/invoices/fresh', 'POST'] as const
}

export function usePostAppsAppIdInvoicesFresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['fresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices']['fresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdInvoicesFreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['invoices']['fresh']['$post']> },
      ) => parseResponse(client.apps[':appId'].invoices.fresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdInvoicesNextnumberKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/nextnumber', args] as const
}

export function useGetAppsAppIdInvoicesNextnumber<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesNextnumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].invoices.nextnumber.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdInvoicesNextnumber<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesNextnumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].invoices.nextnumber.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdInvoicesStatisticsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/statistics', args] as const
}

export function useGetAppsAppIdInvoicesStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].invoices.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdInvoicesStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].invoices.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdInvoicesIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/:id', args] as const
}

export function useGetAppsAppIdInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdInvoicesIdKey() {
  return ['apps', '/apps/:appId/invoices/:id', 'POST'] as const
}

export function usePostAppsAppIdInvoicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdInvoicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$post']> },
      ) => parseResponse(client.apps[':appId'].invoices[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdInvoicesIdKey() {
  return ['apps', '/apps/:appId/invoices/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdInvoicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdInvoicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$delete']> },
      ) => parseResponse(client.apps[':appId'].invoices[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdInvoicesIdAttachKey() {
  return ['apps', '/apps/:appId/invoices/:id/attach', 'POST'] as const
}

export function usePostAppsAppIdInvoicesIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdInvoicesIdAttachKey()
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
            (typeof client.apps)[':appId']['invoices'][':id']['attach']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].invoices[':id'].attach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdInvoicesIdAttachKey() {
  return ['apps', '/apps/:appId/invoices/:id/attach', 'DELETE'] as const
}

export function useDeleteAppsAppIdInvoicesIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdInvoicesIdAttachKey()
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
            (typeof client.apps)[':appId']['invoices'][':id']['attach']['$delete']
          >
        },
      ) => parseResponse(client.apps[':appId'].invoices[':id'].attach.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdInvoicesIdAvoidKey() {
  return ['apps', '/apps/:appId/invoices/:id/avoid', 'POST'] as const
}

export function usePostAppsAppIdInvoicesIdAvoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['avoid']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['avoid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdInvoicesIdAvoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['avoid']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].invoices[':id'].avoid.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdInvoicesIdDuplicateKey() {
  return ['apps', '/apps/:appId/invoices/:id/duplicate', 'POST'] as const
}

export function usePostAppsAppIdInvoicesIdDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['duplicate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdInvoicesIdDuplicateKey()
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
            (typeof client.apps)[':appId']['invoices'][':id']['duplicate']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].invoices[':id'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdInvoicesIdFinalizeKey() {
  return ['apps', '/apps/:appId/invoices/:id/finalize', 'POST'] as const
}

export function usePostAppsAppIdInvoicesIdFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['finalize']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['finalize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdInvoicesIdFinalizeKey()
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
            (typeof client.apps)[':appId']['invoices'][':id']['finalize']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].invoices[':id'].finalize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdInvoicesIdPdfKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/:id/pdf', args] as const
}

export function useGetAppsAppIdInvoicesIdPdf<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesIdPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].invoices[':id'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdInvoicesIdPdf<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>>
          >
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
        ? getGetAppsAppIdInvoicesIdPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].invoices[':id'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdInvoicesIdPreviewJpgKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/:id/preview.jpg', args] as const
}

export function useGetAppsAppIdInvoicesIdPreviewJpg<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
            >
          >
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
        ? getGetAppsAppIdInvoicesIdPreviewJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].invoices[':id']['preview.jpg'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdInvoicesIdPreviewJpg<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
            >
          >
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
        ? getGetAppsAppIdInvoicesIdPreviewJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].invoices[':id']['preview.jpg'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdInvoicesIdTagKey() {
  return ['apps', '/apps/:appId/invoices/:id/tag', 'POST'] as const
}

export function usePostAppsAppIdInvoicesIdTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdInvoicesIdTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].invoices[':id'].tag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdInvoicesIdTagKey() {
  return ['apps', '/apps/:appId/invoices/:id/tag', 'DELETE'] as const
}

export function useDeleteAppsAppIdInvoicesIdTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdInvoicesIdTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].invoices[':id'].tag.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdInvoicesIdUpdatestatusKey() {
  return ['apps', '/apps/:appId/invoices/:id/updatestatus', 'POST'] as const
}

export function usePostAppsAppIdInvoicesIdUpdatestatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['updatestatus']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['updatestatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdInvoicesIdUpdatestatusKey()
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
            (typeof client.apps)[':appId']['invoices'][':id']['updatestatus']['$post']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].invoices[':id'].updatestatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdLogsAutoreconcileIndexKey(
  args: InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/logs/autoreconcile/', args] as const
}

export function useGetAppsAppIdLogsAutoreconcileIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
            >
          >
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
        ? getGetAppsAppIdLogsAutoreconcileIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].logs.autoreconcile.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdLogsAutoreconcileIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
            >
          >
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
        ? getGetAppsAppIdLogsAutoreconcileIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].logs.autoreconcile.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdLogsAutoreconcileIndexKey() {
  return ['apps', '/apps/:appId/logs/autoreconcile/', 'POST'] as const
}

export function usePostAppsAppIdLogsAutoreconcileIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdLogsAutoreconcileIndexKey()
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
            (typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].logs.autoreconcile.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdLogsAutoreconcileIndexKey() {
  return ['apps', '/apps/:appId/logs/autoreconcile/', 'DELETE'] as const
}

export function useDeleteAppsAppIdLogsAutoreconcileIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdLogsAutoreconcileIndexKey()
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
            (typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].logs.autoreconcile.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdOrganizationKey(
  args: InferRequestType<(typeof client.apps)[':appId']['organization']['$get']>,
) {
  return ['apps', '/apps/:appId/organization', args] as const
}

export function useGetAppsAppIdOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
          >
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
        ? getGetAppsAppIdOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
          >
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
        ? getGetAppsAppIdOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdOrganizationKey() {
  return ['apps', '/apps/:appId/organization', 'POST'] as const
}

export function usePostAppsAppIdOrganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['organization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdOrganizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['organization']['$post']> },
      ) => parseResponse(client.apps[':appId'].organization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdOrganizationsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations']['$get']>,
) {
  return ['apps', '/apps/:appId/organizations', args] as const
}

export function useGetAppsAppIdOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
          >
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
        ? getGetAppsAppIdOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
          >
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
        ? getGetAppsAppIdOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdOrganizationsKey() {
  return ['apps', '/apps/:appId/organizations', 'POST'] as const
}

export function usePostAppsAppIdOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['organizations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdOrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['organizations']['$post']> },
      ) => parseResponse(client.apps[':appId'].organizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdOrganizationsBatchKey() {
  return ['apps', '/apps/:appId/organizations/batch', 'POST'] as const
}

export function usePostAppsAppIdOrganizationsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['organizations']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdOrganizationsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['organizations']['batch']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].organizations.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdOrganizationsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/organizations/:id', args] as const
}

export function useGetAppsAppIdOrganizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdOrganizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].organizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdOrganizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdOrganizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].organizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdOrganizationsIdKey() {
  return ['apps', '/apps/:appId/organizations/:id', 'POST'] as const
}

export function usePostAppsAppIdOrganizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdOrganizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].organizations[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdOrganizationsIdKey() {
  return ['apps', '/apps/:appId/organizations/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdOrganizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdOrganizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].organizations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdOrganizationsIdRestoreKey(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>,
) {
  return ['apps', '/apps/:appId/organizations/:id/restore', args] as const
}

export function useGetAppsAppIdOrganizationsIdRestore<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
            >
          >
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
        ? getGetAppsAppIdOrganizationsIdRestoreKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].organizations[':id'].restore.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdOrganizationsIdRestore<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
            >
          >
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
        ? getGetAppsAppIdOrganizationsIdRestoreKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].organizations[':id'].restore.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdPaymentsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['$get']>,
) {
  return ['apps', '/apps/:appId/payments', args] as const
}

export function useGetAppsAppIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>
          >
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
        ? getGetAppsAppIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>
          >
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
        ? getGetAppsAppIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdPaymentsRecipeBookKey(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>,
) {
  return ['apps', '/apps/:appId/payments/recipe_book', args] as const
}

export function useGetAppsAppIdPaymentsRecipeBook<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>>
          >
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
        ? getGetAppsAppIdPaymentsRecipeBookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].payments.recipe_book.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPaymentsRecipeBook<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>>
          >
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
        ? getGetAppsAppIdPaymentsRecipeBookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].payments.recipe_book.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdPaymentsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/payments/:id', args] as const
}

export function useGetAppsAppIdPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdPaymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdPaymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAppsAppIdPaymentsIdKey() {
  return ['apps', '/apps/:appId/payments/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdPaymentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdPaymentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$delete']> },
      ) => parseResponse(client.apps[':appId'].payments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdPersonsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['persons']['$get']>,
) {
  return ['apps', '/apps/:appId/persons', args] as const
}

export function useGetAppsAppIdPersons<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>
          >
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
        ? getGetAppsAppIdPersonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].persons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPersons<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>
          >
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
        ? getGetAppsAppIdPersonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].persons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdPersonsKey() {
  return ['apps', '/apps/:appId/persons', 'POST'] as const
}

export function usePostAppsAppIdPersons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['persons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdPersonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['persons']['$post']> },
      ) => parseResponse(client.apps[':appId'].persons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdPersonsBatchKey() {
  return ['apps', '/apps/:appId/persons/batch', 'POST'] as const
}

export function usePostAppsAppIdPersonsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['persons']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdPersonsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['persons']['batch']['$post']> },
      ) => parseResponse(client.apps[':appId'].persons.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdPersonsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/persons/:id', args] as const
}

export function useGetAppsAppIdPersonsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdPersonsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].persons[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPersonsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdPersonsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].persons[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdPersonsIdKey() {
  return ['apps', '/apps/:appId/persons/:id', 'POST'] as const
}

export function usePostAppsAppIdPersonsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdPersonsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$post']> },
      ) => parseResponse(client.apps[':appId'].persons[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdPersonsIdKey() {
  return ['apps', '/apps/:appId/persons/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdPersonsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdPersonsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$delete']> },
      ) => parseResponse(client.apps[':appId'].persons[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdPersonsIdRestoreKey(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>,
) {
  return ['apps', '/apps/:appId/persons/:id/restore', args] as const
}

export function useGetAppsAppIdPersonsIdRestore<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>>
          >
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
        ? getGetAppsAppIdPersonsIdRestoreKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].persons[':id'].restore.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPersonsIdRestore<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>>
          >
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
        ? getGetAppsAppIdPersonsIdRestoreKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].persons[':id'].restore.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdPingKey(
  args: InferRequestType<(typeof client.apps)[':appId']['ping']['$get']>,
) {
  return ['apps', '/apps/:appId/ping', args] as const
}

export function useGetAppsAppIdPing<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['ping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppIdPingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].ping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPing<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['ping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppIdPingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].ping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdProductcategoryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory']['$get']>,
) {
  return ['apps', '/apps/:appId/productcategory', args] as const
}

export function useGetAppsAppIdProductcategory<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
          >
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
        ? getGetAppsAppIdProductcategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].productcategory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdProductcategory<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
          >
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
        ? getGetAppsAppIdProductcategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].productcategory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdProductcategoryKey() {
  return ['apps', '/apps/:appId/productcategory', 'POST'] as const
}

export function usePostAppsAppIdProductcategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['productcategory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdProductcategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['productcategory']['$post']> },
      ) => parseResponse(client.apps[':appId'].productcategory.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdProductcategoryIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/productcategory/:id', args] as const
}

export function useGetAppsAppIdProductcategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdProductcategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].productcategory[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdProductcategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdProductcategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].productcategory[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdProductcategoryIdKey() {
  return ['apps', '/apps/:appId/productcategory/:id', 'POST'] as const
}

export function usePostAppsAppIdProductcategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdProductcategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].productcategory[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdProductcategoryIdKey() {
  return ['apps', '/apps/:appId/productcategory/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdProductcategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdProductcategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].productcategory[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdProductsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['products']['$get']>,
) {
  return ['apps', '/apps/:appId/products', args] as const
}

export function useGetAppsAppIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>
          >
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
        ? getGetAppsAppIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>
          >
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
        ? getGetAppsAppIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdProductsKey() {
  return ['apps', '/apps/:appId/products', 'POST'] as const
}

export function usePostAppsAppIdProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['products']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['products']['$post']> },
      ) => parseResponse(client.apps[':appId'].products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdProductsBatchKey() {
  return ['apps', '/apps/:appId/products/batch', 'POST'] as const
}

export function usePostAppsAppIdProductsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['products']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdProductsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['products']['batch']['$post']> },
      ) => parseResponse(client.apps[':appId'].products.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdProductsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/products/:id', args] as const
}

export function useGetAppsAppIdProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdProductsIdKey() {
  return ['apps', '/apps/:appId/products/:id', 'POST'] as const
}

export function usePostAppsAppIdProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$post']> },
      ) => parseResponse(client.apps[':appId'].products[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdProductsIdKey() {
  return ['apps', '/apps/:appId/products/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$delete']> },
      ) => parseResponse(client.apps[':appId'].products[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdProductsIdAttachKey() {
  return ['apps', '/apps/:appId/products/:id/attach', 'POST'] as const
}

export function usePostAppsAppIdProductsIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['attach']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['products'][':id']['attach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdProductsIdAttachKey()
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
            (typeof client.apps)[':appId']['products'][':id']['attach']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].products[':id'].attach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdProductsIdAttachKey() {
  return ['apps', '/apps/:appId/products/:id/attach', 'DELETE'] as const
}

export function useDeleteAppsAppIdProductsIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['products'][':id']['attach']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['products'][':id']['attach']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdProductsIdAttachKey()
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
            (typeof client.apps)[':appId']['products'][':id']['attach']['$delete']
          >
        },
      ) => parseResponse(client.apps[':appId'].products[':id'].attach.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdProductstocksKey(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks']['$get']>,
) {
  return ['apps', '/apps/:appId/productstocks', args] as const
}

export function useGetAppsAppIdProductstocks<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
          >
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
        ? getGetAppsAppIdProductstocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].productstocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdProductstocks<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
          >
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
        ? getGetAppsAppIdProductstocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].productstocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdProductstocksKey() {
  return ['apps', '/apps/:appId/productstocks', 'POST'] as const
}

export function usePostAppsAppIdProductstocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['productstocks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdProductstocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['productstocks']['$post']> },
      ) => parseResponse(client.apps[':appId'].productstocks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdProductstocksIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/productstocks/:id', args] as const
}

export function useGetAppsAppIdProductstocksId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdProductstocksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].productstocks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdProductstocksId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdProductstocksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].productstocks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdProductstocksIdKey() {
  return ['apps', '/apps/:appId/productstocks/:id', 'POST'] as const
}

export function usePostAppsAppIdProductstocksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdProductstocksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].productstocks[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdProductstocksIdKey() {
  return ['apps', '/apps/:appId/productstocks/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdProductstocksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdProductstocksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].productstocks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdProductstocksIdDestructKey() {
  return ['apps', '/apps/:appId/productstocks/:id/destruct', 'POST'] as const
}

export function usePostAppsAppIdProductstocksIdDestruct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['destruct']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['destruct']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdProductstocksIdDestructKey()
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
            (typeof client.apps)[':appId']['productstocks'][':id']['destruct']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':appId'].productstocks[':id'].destruct.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdProductstocksIdRentalBackKey() {
  return ['apps', '/apps/:appId/productstocks/:id/rental/back', 'POST'] as const
}

export function usePostAppsAppIdProductstocksIdRentalBack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['productstocks'][':id']['rental']['back']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':appId']['productstocks'][':id']['rental']['back']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdProductstocksIdRentalBackKey()
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
            (typeof client.apps)[':appId']['productstocks'][':id']['rental']['back']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':appId'].productstocks[':id'].rental.back.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdProductstocksIdRentalExitKey() {
  return ['apps', '/apps/:appId/productstocks/:id/rental/exit', 'POST'] as const
}

export function usePostAppsAppIdProductstocksIdRentalExit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['productstocks'][':id']['rental']['exit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':appId']['productstocks'][':id']['rental']['exit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdProductstocksIdRentalExitKey()
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
            (typeof client.apps)[':appId']['productstocks'][':id']['rental']['exit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':appId'].productstocks[':id'].rental.exit.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdPurchasesKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases', args] as const
}

export function useGetAppsAppIdPurchases<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>
          >
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
        ? getGetAppsAppIdPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPurchases<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>
          >
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
        ? getGetAppsAppIdPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdPurchasesKey() {
  return ['apps', '/apps/:appId/purchases', 'POST'] as const
}

export function usePostAppsAppIdPurchases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['purchases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdPurchasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['purchases']['$post']> },
      ) => parseResponse(client.apps[':appId'].purchases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdPurchasesBatchKey() {
  return ['apps', '/apps/:appId/purchases/batch', 'POST'] as const
}

export function usePostAppsAppIdPurchasesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdPurchasesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$post']> },
      ) => parseResponse(client.apps[':appId'].purchases.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdPurchasesBatchKey() {
  return ['apps', '/apps/:appId/purchases/batch', 'DELETE'] as const
}

export function useDeleteAppsAppIdPurchasesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['batch']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdPurchasesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].purchases.batch.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdPurchasesDownloadKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['download']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases/download', args] as const
}

export function useGetAppsAppIdPurchasesDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
          >
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
        ? getGetAppsAppIdPurchasesDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].purchases.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPurchasesDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
          >
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
        ? getGetAppsAppIdPurchasesDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].purchases.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdPurchasesStatisticsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases/statistics', args] as const
}

export function useGetAppsAppIdPurchasesStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>>
          >
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
        ? getGetAppsAppIdPurchasesStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].purchases.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPurchasesStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>>
          >
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
        ? getGetAppsAppIdPurchasesStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].purchases.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdPurchasesIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases/:id', args] as const
}

export function useGetAppsAppIdPurchasesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdPurchasesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].purchases[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPurchasesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdPurchasesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].purchases[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdPurchasesIdKey() {
  return ['apps', '/apps/:appId/purchases/:id', 'POST'] as const
}

export function usePostAppsAppIdPurchasesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdPurchasesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$post']> },
      ) => parseResponse(client.apps[':appId'].purchases[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdPurchasesIdKey() {
  return ['apps', '/apps/:appId/purchases/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdPurchasesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdPurchasesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$delete']> },
      ) => parseResponse(client.apps[':appId'].purchases[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdPurchasesIdAttachKey() {
  return ['apps', '/apps/:appId/purchases/:id/attach', 'POST'] as const
}

export function usePostAppsAppIdPurchasesIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdPurchasesIdAttachKey()
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
            (typeof client.apps)[':appId']['purchases'][':id']['attach']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].purchases[':id'].attach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdPurchasesIdAttachKey() {
  return ['apps', '/apps/:appId/purchases/:id/attach', 'DELETE'] as const
}

export function useDeleteAppsAppIdPurchasesIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdPurchasesIdAttachKey()
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
            (typeof client.apps)[':appId']['purchases'][':id']['attach']['$delete']
          >
        },
      ) => parseResponse(client.apps[':appId'].purchases[':id'].attach.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdPurchasesIdOriginalKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases/:id/original', args] as const
}

export function useGetAppsAppIdPurchasesIdOriginal<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
            >
          >
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
        ? getGetAppsAppIdPurchasesIdOriginalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].purchases[':id'].original.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPurchasesIdOriginal<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
            >
          >
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
        ? getGetAppsAppIdPurchasesIdOriginalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].purchases[':id'].original.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdPurchasesIdPreviewJpgKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases/:id/preview.jpg', args] as const
}

export function useGetAppsAppIdPurchasesIdPreviewJpg<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
            >
          >
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
        ? getGetAppsAppIdPurchasesIdPreviewJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].purchases[':id']['preview.jpg'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPurchasesIdPreviewJpg<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
            >
          >
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
        ? getGetAppsAppIdPurchasesIdPreviewJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].purchases[':id']['preview.jpg'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdPurchasesIdTagKey() {
  return ['apps', '/apps/:appId/purchases/:id/tag', 'POST'] as const
}

export function usePostAppsAppIdPurchasesIdTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdPurchasesIdTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].purchases[':id'].tag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdPurchasesIdTagKey() {
  return ['apps', '/apps/:appId/purchases/:id/tag', 'DELETE'] as const
}

export function useDeleteAppsAppIdPurchasesIdTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdPurchasesIdTagKey()
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
            (typeof client.apps)[':appId']['purchases'][':id']['tag']['$delete']
          >
        },
      ) => parseResponse(client.apps[':appId'].purchases[':id'].tag.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdPurchasesIdThumbnailJpgKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
  >,
) {
  return ['apps', '/apps/:appId/purchases/:id/thumbnail.jpg', args] as const
}

export function useGetAppsAppIdPurchasesIdThumbnailJpg<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdPurchasesIdThumbnailJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].purchases[':id']['thumbnail.jpg'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdPurchasesIdThumbnailJpg<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdPurchasesIdThumbnailJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].purchases[':id']['thumbnail.jpg'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdPurchasesIdUpdatestatusKey() {
  return ['apps', '/apps/:appId/purchases/:id/updatestatus', 'POST'] as const
}

export function usePostAppsAppIdPurchasesIdUpdatestatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['updatestatus']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['updatestatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdPurchasesIdUpdatestatusKey()
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
            (typeof client.apps)[':appId']['purchases'][':id']['updatestatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':appId'].purchases[':id'].updatestatus.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdQuotesKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes', args] as const
}

export function useGetAppsAppIdQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesKey() {
  return ['apps', '/apps/:appId/quotes', 'POST'] as const
}

export function usePostAppsAppIdQuotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['quotes']['$post']> },
      ) => parseResponse(client.apps[':appId'].quotes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesBatchKey() {
  return ['apps', '/apps/:appId/quotes/batch', 'POST'] as const
}

export function usePostAppsAppIdQuotesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$post']> },
      ) => parseResponse(client.apps[':appId'].quotes.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdQuotesBatchKey() {
  return ['apps', '/apps/:appId/quotes/batch', 'DELETE'] as const
}

export function useDeleteAppsAppIdQuotesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['batch']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdQuotesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$delete']> },
      ) => parseResponse(client.apps[':appId'].quotes.batch.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdQuotesDownloadKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['download']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/download', args] as const
}

export function useGetAppsAppIdQuotesDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdQuotesDownload<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesFreshKey() {
  return ['apps', '/apps/:appId/quotes/fresh', 'POST'] as const
}

export function usePostAppsAppIdQuotesFresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['fresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes']['fresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesFreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['quotes']['fresh']['$post']> },
      ) => parseResponse(client.apps[':appId'].quotes.fresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesInvoiceKey() {
  return ['apps', '/apps/:appId/quotes/invoice', 'POST'] as const
}

export function usePostAppsAppIdQuotesInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['invoice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes']['invoice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesInvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['quotes']['invoice']['$post']> },
      ) => parseResponse(client.apps[':appId'].quotes.invoice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdQuotesNextnumberKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/nextnumber', args] as const
}

export function useGetAppsAppIdQuotesNextnumber<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesNextnumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes.nextnumber.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdQuotesNextnumber<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesNextnumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes.nextnumber.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdQuotesStatisticsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/statistics', args] as const
}

export function useGetAppsAppIdQuotesStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdQuotesStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdQuotesIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/:id', args] as const
}

export function useGetAppsAppIdQuotesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdQuotesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesIdKey() {
  return ['apps', '/apps/:appId/quotes/:id', 'POST'] as const
}

export function usePostAppsAppIdQuotesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$post']> },
      ) => parseResponse(client.apps[':appId'].quotes[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdQuotesIdKey() {
  return ['apps', '/apps/:appId/quotes/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdQuotesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdQuotesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$delete']> },
      ) => parseResponse(client.apps[':appId'].quotes[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesIdAttachKey() {
  return ['apps', '/apps/:appId/quotes/:id/attach', 'POST'] as const
}

export function usePostAppsAppIdQuotesIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesIdAttachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].quotes[':id'].attach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdQuotesIdAttachKey() {
  return ['apps', '/apps/:appId/quotes/:id/attach', 'DELETE'] as const
}

export function useDeleteAppsAppIdQuotesIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdQuotesIdAttachKey()
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
            (typeof client.apps)[':appId']['quotes'][':id']['attach']['$delete']
          >
        },
      ) => parseResponse(client.apps[':appId'].quotes[':id'].attach.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesIdDownpaymentKey() {
  return ['apps', '/apps/:appId/quotes/:id/downpayment', 'POST'] as const
}

export function usePostAppsAppIdQuotesIdDownpayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['downpayment']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['downpayment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesIdDownpaymentKey()
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
            (typeof client.apps)[':appId']['quotes'][':id']['downpayment']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].quotes[':id'].downpayment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesIdDuplicateKey() {
  return ['apps', '/apps/:appId/quotes/:id/duplicate', 'POST'] as const
}

export function usePostAppsAppIdQuotesIdDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesIdDuplicateKey()
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
            (typeof client.apps)[':appId']['quotes'][':id']['duplicate']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].quotes[':id'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesIdFinalizeKey() {
  return ['apps', '/apps/:appId/quotes/:id/finalize', 'POST'] as const
}

export function usePostAppsAppIdQuotesIdFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['finalize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['finalize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesIdFinalizeKey()
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
            (typeof client.apps)[':appId']['quotes'][':id']['finalize']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].quotes[':id'].finalize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesIdInvoiceKey() {
  return ['apps', '/apps/:appId/quotes/:id/invoice', 'POST'] as const
}

export function usePostAppsAppIdQuotesIdInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['invoice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['invoice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesIdInvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['invoice']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].quotes[':id'].invoice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdQuotesIdPdfKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/:id/pdf', args] as const
}

export function useGetAppsAppIdQuotesIdPdf<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesIdPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes[':id'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdQuotesIdPdf<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
          >
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
        ? getGetAppsAppIdQuotesIdPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].quotes[':id'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdQuotesIdPreviewJpgKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/:id/preview.jpg', args] as const
}

export function useGetAppsAppIdQuotesIdPreviewJpg<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
            >
          >
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
        ? getGetAppsAppIdQuotesIdPreviewJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].quotes[':id']['preview.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdQuotesIdPreviewJpg<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
            >
          >
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
        ? getGetAppsAppIdQuotesIdPreviewJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].quotes[':id']['preview.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesIdSituationInvoiceKey() {
  return ['apps', '/apps/:appId/quotes/:id/situation_invoice', 'POST'] as const
}

export function usePostAppsAppIdQuotesIdSituationInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['quotes'][':id']['situation_invoice']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['situation_invoice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesIdSituationInvoiceKey()
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
            (typeof client.apps)[':appId']['quotes'][':id']['situation_invoice']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':appId'].quotes[':id'].situation_invoice.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesIdTagKey() {
  return ['apps', '/apps/:appId/quotes/:id/tag', 'POST'] as const
}

export function usePostAppsAppIdQuotesIdTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesIdTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].quotes[':id'].tag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdQuotesIdTagKey() {
  return ['apps', '/apps/:appId/quotes/:id/tag', 'DELETE'] as const
}

export function useDeleteAppsAppIdQuotesIdTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdQuotesIdTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].quotes[':id'].tag.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdQuotesIdUpdatestatusKey() {
  return ['apps', '/apps/:appId/quotes/:id/updatestatus', 'POST'] as const
}

export function usePostAppsAppIdQuotesIdUpdatestatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['updatestatus']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['updatestatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQuotesIdUpdatestatusKey()
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
            (typeof client.apps)[':appId']['quotes'][':id']['updatestatus']['$post']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].quotes[':id'].updatestatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdQuotesIdYousignPreviewJpgKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
  >,
) {
  return ['apps', '/apps/:appId/quotes/:id/yousign/preview.jpg', args] as const
}

export function useGetAppsAppIdQuotesIdYousignPreviewJpg<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdQuotesIdYousignPreviewJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].quotes[':id'].yousign['preview.jpg'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdQuotesIdYousignPreviewJpg<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdQuotesIdYousignPreviewJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].quotes[':id'].yousign['preview.jpg'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdReconcileKey() {
  return ['apps', '/apps/:appId/reconcile', 'POST'] as const
}

export function usePostAppsAppIdReconcile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['reconcile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['reconcile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdReconcileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['reconcile']['$post']> },
      ) => parseResponse(client.apps[':appId'].reconcile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdReconcileKey() {
  return ['apps', '/apps/:appId/reconcile', 'DELETE'] as const
}

export function useDeleteAppsAppIdReconcile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['reconcile']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['reconcile']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdReconcileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['reconcile']['$delete']> },
      ) => parseResponse(client.apps[':appId'].reconcile.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdReconcileBatchKey() {
  return ['apps', '/apps/:appId/reconcile/batch', 'POST'] as const
}

export function usePostAppsAppIdReconcileBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['reconcile']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['reconcile']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdReconcileBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['reconcile']['batch']['$post']> },
      ) => parseResponse(client.apps[':appId'].reconcile.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdRecurringinvoicesKey(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>,
) {
  return ['apps', '/apps/:appId/recurringinvoices', args] as const
}

export function useGetAppsAppIdRecurringinvoices<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
          >
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
        ? getGetAppsAppIdRecurringinvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].recurringinvoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdRecurringinvoices<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
          >
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
        ? getGetAppsAppIdRecurringinvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].recurringinvoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdRecurringinvoicesKey() {
  return ['apps', '/apps/:appId/recurringinvoices', 'POST'] as const
}

export function usePostAppsAppIdRecurringinvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdRecurringinvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$post']> },
      ) => parseResponse(client.apps[':appId'].recurringinvoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdRecurringinvoicesBatchKey() {
  return ['apps', '/apps/:appId/recurringinvoices/batch', 'POST'] as const
}

export function usePostAppsAppIdRecurringinvoicesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdRecurringinvoicesBatchKey()
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
            (typeof client.apps)[':appId']['recurringinvoices']['batch']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].recurringinvoices.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdRecurringinvoicesBatchKey() {
  return ['apps', '/apps/:appId/recurringinvoices/batch', 'DELETE'] as const
}

export function useDeleteAppsAppIdRecurringinvoicesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdRecurringinvoicesBatchKey()
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
            (typeof client.apps)[':appId']['recurringinvoices']['batch']['$delete']
          >
        },
      ) => parseResponse(client.apps[':appId'].recurringinvoices.batch.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdRecurringinvoicesPeriodsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>,
) {
  return ['apps', '/apps/:appId/recurringinvoices/periods', args] as const
}

export function useGetAppsAppIdRecurringinvoicesPeriods<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
            >
          >
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
        ? getGetAppsAppIdRecurringinvoicesPeriodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].recurringinvoices.periods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdRecurringinvoicesPeriods<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
            >
          >
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
        ? getGetAppsAppIdRecurringinvoicesPeriodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].recurringinvoices.periods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdRecurringinvoicesIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/recurringinvoices/:id', args] as const
}

export function useGetAppsAppIdRecurringinvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdRecurringinvoicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].recurringinvoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdRecurringinvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdRecurringinvoicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].recurringinvoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdRecurringinvoicesIdKey() {
  return ['apps', '/apps/:appId/recurringinvoices/:id', 'POST'] as const
}

export function usePostAppsAppIdRecurringinvoicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdRecurringinvoicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].recurringinvoices[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdRecurringinvoicesIdKey() {
  return ['apps', '/apps/:appId/recurringinvoices/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdRecurringinvoicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdRecurringinvoicesIdKey()
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
            (typeof client.apps)[':appId']['recurringinvoices'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].recurringinvoices[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdRecurringinvoicesIdPlanKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
  >,
) {
  return ['apps', '/apps/:appId/recurringinvoices/:id/plan', args] as const
}

export function useGetAppsAppIdRecurringinvoicesIdPlan<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
            >
          >
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
        ? getGetAppsAppIdRecurringinvoicesIdPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].recurringinvoices[':id'].plan.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdRecurringinvoicesIdPlan<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
            >
          >
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
        ? getGetAppsAppIdRecurringinvoicesIdPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].recurringinvoices[':id'].plan.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdRelationshipsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships']['$get']>,
) {
  return ['apps', '/apps/:appId/relationships', args] as const
}

export function useGetAppsAppIdRelationships<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
          >
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
        ? getGetAppsAppIdRelationshipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].relationships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdRelationships<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
          >
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
        ? getGetAppsAppIdRelationshipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].relationships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdRelationshipsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/relationships/:id', args] as const
}

export function useGetAppsAppIdRelationshipsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdRelationshipsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].relationships[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdRelationshipsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdRelationshipsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].relationships[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdRelationshipsIdKey() {
  return ['apps', '/apps/:appId/relationships/:id', 'POST'] as const
}

export function usePostAppsAppIdRelationshipsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdRelationshipsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].relationships[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdRelationshipsIdAttachKey() {
  return ['apps', '/apps/:appId/relationships/:id/attach', 'POST'] as const
}

export function usePostAppsAppIdRelationshipsIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['attach']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['attach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdRelationshipsIdAttachKey()
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
            (typeof client.apps)[':appId']['relationships'][':id']['attach']['$post']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].relationships[':id'].attach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdRelationshipsIdAttachKey() {
  return ['apps', '/apps/:appId/relationships/:id/attach', 'DELETE'] as const
}

export function useDeleteAppsAppIdRelationshipsIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['attach']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['attach']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdRelationshipsIdAttachKey()
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
            (typeof client.apps)[':appId']['relationships'][':id']['attach']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apps[':appId'].relationships[':id'].attach.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdResetKey() {
  return ['apps', '/apps/:appId/reset', 'POST'] as const
}

export function usePostAppsAppIdReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['reset']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['reset']['$post']> },
      ) => parseResponse(client.apps[':appId'].reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdRulesIndexKey(
  args: InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/rules/', args] as const
}

export function useGetAppsAppIdRulesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
          >
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
        ? getGetAppsAppIdRulesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].rules.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdRulesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
          >
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
        ? getGetAppsAppIdRulesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].rules.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdRulesIndexKey() {
  return ['apps', '/apps/:appId/rules/', 'POST'] as const
}

export function usePostAppsAppIdRulesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdRulesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$post']> },
      ) => parseResponse(client.apps[':appId'].rules.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdRulesExecuteOnKey() {
  return ['apps', '/apps/:appId/rules/execute_on', 'POST'] as const
}

export function usePostAppsAppIdRulesExecuteOn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['execute_on']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['rules']['execute_on']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdRulesExecuteOnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['rules']['execute_on']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].rules.execute_on.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdRulesIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/rules/:id', args] as const
}

export function useGetAppsAppIdRulesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].rules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdRulesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].rules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdRulesIdKey() {
  return ['apps', '/apps/:appId/rules/:id', 'POST'] as const
}

export function usePostAppsAppIdRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdRulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$post']> },
      ) => parseResponse(client.apps[':appId'].rules[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdRulesIdKey() {
  return ['apps', '/apps/:appId/rules/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdRulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$delete']> },
      ) => parseResponse(client.apps[':appId'].rules[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdSalesdocumentmodelsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>,
) {
  return ['apps', '/apps/:appId/salesdocumentmodels', args] as const
}

export function useGetAppsAppIdSalesdocumentmodels<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
          >
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
        ? getGetAppsAppIdSalesdocumentmodelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].salesdocumentmodels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSalesdocumentmodels<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
          >
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
        ? getGetAppsAppIdSalesdocumentmodelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].salesdocumentmodels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdSalesdocumentmodelsKey() {
  return ['apps', '/apps/:appId/salesdocumentmodels', 'POST'] as const
}

export function usePostAppsAppIdSalesdocumentmodels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSalesdocumentmodelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].salesdocumentmodels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdSalesdocumentmodelsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/salesdocumentmodels/:id', args] as const
}

export function useGetAppsAppIdSalesdocumentmodelsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>
            >
          >
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
        ? getGetAppsAppIdSalesdocumentmodelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].salesdocumentmodels[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSalesdocumentmodelsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>
            >
          >
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
        ? getGetAppsAppIdSalesdocumentmodelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].salesdocumentmodels[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdSalesdocumentmodelsIdKey() {
  return ['apps', '/apps/:appId/salesdocumentmodels/:id', 'POST'] as const
}

export function usePostAppsAppIdSalesdocumentmodelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSalesdocumentmodelsIdKey()
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
            (typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$post']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].salesdocumentmodels[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdSalesdocumentmodelsIdKey() {
  return ['apps', '/apps/:appId/salesdocumentmodels/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdSalesdocumentmodelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdSalesdocumentmodelsIdKey()
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
            (typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].salesdocumentmodels[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdSepamandatesIndexKey(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/sepamandates/', args] as const
}

export function useGetAppsAppIdSepamandatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
          >
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
        ? getGetAppsAppIdSepamandatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].sepamandates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSepamandatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
          >
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
        ? getGetAppsAppIdSepamandatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].sepamandates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdSepamandatesIndexKey() {
  return ['apps', '/apps/:appId/sepamandates/', 'POST'] as const
}

export function usePostAppsAppIdSepamandatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSepamandatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].sepamandates.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdSepamandatesCredittransferKey(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>,
) {
  return ['apps', '/apps/:appId/sepamandates/credittransfer', args] as const
}

export function useGetAppsAppIdSepamandatesCredittransfer<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
            >
          >
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
        ? getGetAppsAppIdSepamandatesCredittransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].sepamandates.credittransfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSepamandatesCredittransfer<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
            >
          >
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
        ? getGetAppsAppIdSepamandatesCredittransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].sepamandates.credittransfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdSepamandatesCredittransferKey() {
  return ['apps', '/apps/:appId/sepamandates/credittransfer', 'POST'] as const
}

export function usePostAppsAppIdSepamandatesCredittransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSepamandatesCredittransferKey()
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
            (typeof client.apps)[':appId']['sepamandates']['credittransfer']['$post']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].sepamandates.credittransfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdSepamandatesDirectdebitKey(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>,
) {
  return ['apps', '/apps/:appId/sepamandates/directdebit', args] as const
}

export function useGetAppsAppIdSepamandatesDirectdebit<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>
            >
          >
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
        ? getGetAppsAppIdSepamandatesDirectdebitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].sepamandates.directdebit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSepamandatesDirectdebit<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>
            >
          >
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
        ? getGetAppsAppIdSepamandatesDirectdebitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].sepamandates.directdebit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdSepamandatesDirectdebitKey() {
  return ['apps', '/apps/:appId/sepamandates/directdebit', 'POST'] as const
}

export function usePostAppsAppIdSepamandatesDirectdebit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSepamandatesDirectdebitKey()
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
            (typeof client.apps)[':appId']['sepamandates']['directdebit']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].sepamandates.directdebit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdSepamandatesIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/sepamandates/:id', args] as const
}

export function useGetAppsAppIdSepamandatesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdSepamandatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].sepamandates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSepamandatesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdSepamandatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].sepamandates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdSepamandatesIdKey() {
  return ['apps', '/apps/:appId/sepamandates/:id', 'POST'] as const
}

export function usePostAppsAppIdSepamandatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSepamandatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].sepamandates[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdSepamandatesIdKey() {
  return ['apps', '/apps/:appId/sepamandates/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdSepamandatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdSepamandatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].sepamandates[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdServicesStripeWebhookKey(
  args: InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>,
) {
  return ['apps', '/apps/:appId/services/stripe/webhook', args] as const
}

export function useGetAppsAppIdServicesStripeWebhook<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>
            >
          >
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
        ? getGetAppsAppIdServicesStripeWebhookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].services.stripe.webhook.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdServicesStripeWebhook<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>
            >
          >
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
        ? getGetAppsAppIdServicesStripeWebhookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].services.stripe.webhook.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdServicesStripeWebhookKey() {
  return ['apps', '/apps/:appId/services/stripe/webhook', 'POST'] as const
}

export function usePostAppsAppIdServicesStripeWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdServicesStripeWebhookKey()
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
            (typeof client.apps)[':appId']['services']['stripe']['webhook']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].services.stripe.webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdServicesYousignWebhookKey() {
  return ['apps', '/apps/:appId/services/yousign/webhook', 'POST'] as const
}

export function usePostAppsAppIdServicesYousignWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['services']['yousign']['webhook']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['services']['yousign']['webhook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdServicesYousignWebhookKey()
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
            (typeof client.apps)[':appId']['services']['yousign']['webhook']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].services.yousign.webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdSettingsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['settings']['$get']>,
) {
  return ['apps', '/apps/:appId/settings', args] as const
}

export function useGetAppsAppIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>
          >
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
        ? getGetAppsAppIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>
          >
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
        ? getGetAppsAppIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdSettingsKey() {
  return ['apps', '/apps/:appId/settings', 'POST'] as const
}

export function usePostAppsAppIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['settings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['settings']['$post']> },
      ) => parseResponse(client.apps[':appId'].settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdSignatureKey() {
  return ['apps', '/apps/:appId/signature', 'POST'] as const
}

export function usePostAppsAppIdSignature<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['signature']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['signature']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSignatureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['signature']['$post']> },
      ) => parseResponse(client.apps[':appId'].signature.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdStatisticsChartsTypeKey(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>,
) {
  return ['apps', '/apps/:appId/statistics/charts/:type', args] as const
}

export function useGetAppsAppIdStatisticsChartsType<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>
            >
          >
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
        ? getGetAppsAppIdStatisticsChartsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].statistics.charts[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdStatisticsChartsType<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>
            >
          >
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
        ? getGetAppsAppIdStatisticsChartsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].statistics.charts[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdStatisticsTimetablePurchasesKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
  >,
) {
  return ['apps', '/apps/:appId/statistics/timetable/purchases', args] as const
}

export function useGetAppsAppIdStatisticsTimetablePurchases<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdStatisticsTimetablePurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].statistics.timetable.purchases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdStatisticsTimetablePurchases<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdStatisticsTimetablePurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].statistics.timetable.purchases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdStatisticsTimetableSalesKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
  >,
) {
  return ['apps', '/apps/:appId/statistics/timetable/sales', args] as const
}

export function useGetAppsAppIdStatisticsTimetableSales<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
            >
          >
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
        ? getGetAppsAppIdStatisticsTimetableSalesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].statistics.timetable.sales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdStatisticsTimetableSales<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
            >
          >
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
        ? getGetAppsAppIdStatisticsTimetableSalesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].statistics.timetable.sales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdStatisticsVatKey(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>,
) {
  return ['apps', '/apps/:appId/statistics/vat', args] as const
}

export function useGetAppsAppIdStatisticsVat<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
          >
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
        ? getGetAppsAppIdStatisticsVatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].statistics.vat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdStatisticsVat<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
          >
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
        ? getGetAppsAppIdStatisticsVatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].statistics.vat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdSubscriptionAnchordateKey() {
  return ['apps', '/apps/:appId/subscription/anchordate', 'POST'] as const
}

export function usePostAppsAppIdSubscriptionAnchordate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['anchordate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['anchordate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSubscriptionAnchordateKey()
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
            (typeof client.apps)[':appId']['subscription']['anchordate']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].subscription.anchordate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdSubscriptionCheckoutAddSourceKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
  >,
) {
  return ['apps', '/apps/:appId/subscription/checkout_add_source', args] as const
}

export function useGetAppsAppIdSubscriptionCheckoutAddSource<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdSubscriptionCheckoutAddSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].subscription.checkout_add_source.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSubscriptionCheckoutAddSource<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdSubscriptionCheckoutAddSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].subscription.checkout_add_source.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdSubscriptionCouponKey() {
  return ['apps', '/apps/:appId/subscription/coupon', 'POST'] as const
}

export function usePostAppsAppIdSubscriptionCoupon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['coupon']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['coupon']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSubscriptionCouponKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['subscription']['coupon']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].subscription.coupon.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdSubscriptionExtendTrialKey() {
  return ['apps', '/apps/:appId/subscription/extend_trial', 'POST'] as const
}

export function usePostAppsAppIdSubscriptionExtendTrial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['subscription']['extend_trial']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['extend_trial']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSubscriptionExtendTrialKey()
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
            (typeof client.apps)[':appId']['subscription']['extend_trial']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].subscription.extend_trial.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdSubscriptionExtraStripePlanKey() {
  return ['apps', '/apps/:appId/subscription/extra/:stripe_plan', 'POST'] as const
}

export function usePostAppsAppIdSubscriptionExtraStripePlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['subscription']['extra'][':stripe_plan']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':appId']['subscription']['extra'][':stripe_plan']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSubscriptionExtraStripePlanKey()
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
            (typeof client.apps)[':appId']['subscription']['extra'][':stripe_plan']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':appId'].subscription.extra[':stripe_plan'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdSubscriptionPayAllKey() {
  return ['apps', '/apps/:appId/subscription/pay_all', 'POST'] as const
}

export function usePostAppsAppIdSubscriptionPayAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['pay_all']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['pay_all']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSubscriptionPayAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['subscription']['pay_all']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].subscription.pay_all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdSubscriptionPlanKey(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>,
) {
  return ['apps', '/apps/:appId/subscription/plan', args] as const
}

export function useGetAppsAppIdSubscriptionPlan<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
          >
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
        ? getGetAppsAppIdSubscriptionPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].subscription.plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSubscriptionPlan<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
          >
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
        ? getGetAppsAppIdSubscriptionPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].subscription.plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAppsAppIdSubscriptionPlanKey() {
  return ['apps', '/apps/:appId/subscription/plan', 'DELETE'] as const
}

export function useDeleteAppsAppIdSubscriptionPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdSubscriptionPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].subscription.plan.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdSubscriptionPlansKey(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>,
) {
  return ['apps', '/apps/:appId/subscription/plans', args] as const
}

export function useGetAppsAppIdSubscriptionPlans<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
          >
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
        ? getGetAppsAppIdSubscriptionPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].subscription.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSubscriptionPlans<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
          >
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
        ? getGetAppsAppIdSubscriptionPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].subscription.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdSubscriptionPlansStripePlanKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
  >,
) {
  return ['apps', '/apps/:appId/subscription/plans/:stripe_plan', args] as const
}

export function useGetAppsAppIdSubscriptionPlansStripePlan<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdSubscriptionPlansStripePlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].subscription.plans[':stripe_plan'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSubscriptionPlansStripePlan<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdSubscriptionPlansStripePlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].subscription.plans[':stripe_plan'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdSubscriptionPlansStripePlanKey() {
  return ['apps', '/apps/:appId/subscription/plans/:stripe_plan', 'POST'] as const
}

export function usePostAppsAppIdSubscriptionPlansStripePlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSubscriptionPlansStripePlanKey()
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
            (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps[':appId'].subscription.plans[':stripe_plan'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdSubscriptionPlansStripePlanCheckoutKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
  >,
) {
  return ['apps', '/apps/:appId/subscription/plans/:stripe_plan/checkout', args] as const
}

export function useGetAppsAppIdSubscriptionPlansStripePlanCheckout<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdSubscriptionPlansStripePlanCheckoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].subscription.plans[':stripe_plan'].checkout.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdSubscriptionPlansStripePlanCheckout<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
              >
            >
          >
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
        ? getGetAppsAppIdSubscriptionPlansStripePlanCheckoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps[':appId'].subscription.plans[':stripe_plan'].checkout.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdSubscriptionSourceKey() {
  return ['apps', '/apps/:appId/subscription/source', 'POST'] as const
}

export function usePostAppsAppIdSubscriptionSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['source']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSubscriptionSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].subscription.source.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdSubscriptionSourceKey() {
  return ['apps', '/apps/:appId/subscription/source', 'DELETE'] as const
}

export function useDeleteAppsAppIdSubscriptionSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['source']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdSubscriptionSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].subscription.source.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdSubscriptionSourceDefaultKey() {
  return ['apps', '/apps/:appId/subscription/source/default', 'POST'] as const
}

export function usePostAppsAppIdSubscriptionSourceDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['subscription']['source']['default']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['default']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdSubscriptionSourceDefaultKey()
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
            (typeof client.apps)[':appId']['subscription']['source']['default']['$post']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].subscription.source.default.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdTagsKey(
  args: InferRequestType<(typeof client.apps)[':appId']['tags']['$get']>,
) {
  return ['apps', '/apps/:appId/tags', args] as const
}

export function useGetAppsAppIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppIdTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppIdTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdTemplatesKey(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['$get']>,
) {
  return ['apps', '/apps/:appId/templates', args] as const
}

export function useGetAppsAppIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>
          >
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
        ? getGetAppsAppIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>
          >
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
        ? getGetAppsAppIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdTemplatesKey() {
  return ['apps', '/apps/:appId/templates', 'POST'] as const
}

export function usePostAppsAppIdTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['templates']['$post']> },
      ) => parseResponse(client.apps[':appId'].templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdTemplatesBatchKey() {
  return ['apps', '/apps/:appId/templates/batch', 'POST'] as const
}

export function usePostAppsAppIdTemplatesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['templates']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdTemplatesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['templates']['batch']['$post']> },
      ) => parseResponse(client.apps[':appId'].templates.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdTemplatesDefaultKey(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['default']['$get']>,
) {
  return ['apps', '/apps/:appId/templates/default', args] as const
}

export function useGetAppsAppIdTemplatesDefault<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['default']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
          >
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
        ? getGetAppsAppIdTemplatesDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].templates.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdTemplatesDefault<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['default']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
          >
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
        ? getGetAppsAppIdTemplatesDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].templates.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsAppIdTemplatesIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/templates/:id', args] as const
}

export function useGetAppsAppIdTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdTemplatesIdKey() {
  return ['apps', '/apps/:appId/templates/:id', 'POST'] as const
}

export function usePostAppsAppIdTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$post']> },
      ) => parseResponse(client.apps[':appId'].templates[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdTransactionsIndexKey(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/transactions/', args] as const
}

export function useGetAppsAppIdTransactionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
          >
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
        ? getGetAppsAppIdTransactionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].transactions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdTransactionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
          >
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
        ? getGetAppsAppIdTransactionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].transactions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdTransactionsIndexKey() {
  return ['apps', '/apps/:appId/transactions/', 'POST'] as const
}

export function usePostAppsAppIdTransactionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdTransactionsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].transactions.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdTransactionsBatchKey() {
  return ['apps', '/apps/:appId/transactions/batch', 'POST'] as const
}

export function usePostAppsAppIdTransactionsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['transactions']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdTransactionsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['transactions']['batch']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].transactions.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdTransactionsIdKey(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/transactions/:id', args] as const
}

export function useGetAppsAppIdTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
          >
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
        ? getGetAppsAppIdTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdTransactionsIdKey() {
  return ['apps', '/apps/:appId/transactions/:id', 'POST'] as const
}

export function usePostAppsAppIdTransactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdTransactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].transactions[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdTransactionsIdKey() {
  return ['apps', '/apps/:appId/transactions/:id', 'DELETE'] as const
}

export function useDeleteAppsAppIdTransactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdTransactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].transactions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdTransactionsIdAttachKey() {
  return ['apps', '/apps/:appId/transactions/:id/attach', 'POST'] as const
}

export function usePostAppsAppIdTransactionsIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['attach']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['attach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdTransactionsIdAttachKey()
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
            (typeof client.apps)[':appId']['transactions'][':id']['attach']['$post']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].transactions[':id'].attach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdTransactionsIdAttachKey() {
  return ['apps', '/apps/:appId/transactions/:id/attach', 'DELETE'] as const
}

export function useDeleteAppsAppIdTransactionsIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['attach']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['attach']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdTransactionsIdAttachKey()
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
            (typeof client.apps)[':appId']['transactions'][':id']['attach']['$delete']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].transactions[':id'].attach.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdUrssafAuthKey() {
  return ['apps', '/apps/:appId/urssaf/auth', 'POST'] as const
}

export function usePostAppsAppIdUrssafAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['auth']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['auth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdUrssafAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['urssaf']['auth']['$post']> },
      ) => parseResponse(client.apps[':appId'].urssaf.auth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdUrssafPaymentKey(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>,
) {
  return ['apps', '/apps/:appId/urssaf/payment', args] as const
}

export function useGetAppsAppIdUrssafPayment<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
          >
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
        ? getGetAppsAppIdUrssafPaymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].urssaf.payment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdUrssafPayment<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
          >
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
        ? getGetAppsAppIdUrssafPaymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].urssaf.payment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdUrssafPaymentKey() {
  return ['apps', '/apps/:appId/urssaf/payment', 'POST'] as const
}

export function usePostAppsAppIdUrssafPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdUrssafPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$post']> },
      ) => parseResponse(client.apps[':appId'].urssaf.payment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdUrssafPreviewKey(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>,
) {
  return ['apps', '/apps/:appId/urssaf/preview', args] as const
}

export function useGetAppsAppIdUrssafPreview<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
          >
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
        ? getGetAppsAppIdUrssafPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].urssaf.preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdUrssafPreview<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
          >
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
        ? getGetAppsAppIdUrssafPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':appId'].urssaf.preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdUrssafRegisterCustomerKey() {
  return ['apps', '/apps/:appId/urssaf/register_customer', 'POST'] as const
}

export function usePostAppsAppIdUrssafRegisterCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['urssaf']['register_customer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['register_customer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdUrssafRegisterCustomerKey()
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
            (typeof client.apps)[':appId']['urssaf']['register_customer']['$post']
          >
        },
      ) => parseResponse(client.apps[':appId'].urssaf.register_customer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChangepasswordKey() {
  return ['changepassword', '/changepassword', 'POST'] as const
}

export function usePostChangepassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changepassword.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.changepassword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChangepasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.changepassword.$post> }) =>
        parseResponse(client.changepassword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLoginKey() {
  return ['login', '/login', 'POST'] as const
}

export function usePostLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.login.$post> }) =>
        parseResponse(client.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLogoutKey() {
  return ['logout', '/logout', 'POST'] as const
}

export function usePostLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.logout.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getPostMeKey() {
  return ['me', '/me', 'POST'] as const
}

export function usePostMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.$post> }) =>
        parseResponse(client.me.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPingKey() {
  return ['ping', '/ping'] as const
}

export function useGetPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRefreshKey() {
  return ['refresh', '/refresh'] as const
}

export function useGetRefresh<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRefreshKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.refresh.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRefresh<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRefreshKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.refresh.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRegisterKey() {
  return ['register', '/register', 'POST'] as const
}

export function usePostRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.register.$post> }) =>
        parseResponse(client.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendpasswordKey() {
  return ['sendpassword', '/sendpassword', 'POST'] as const
}

export function usePostSendpassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendpassword.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sendpassword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendpasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendpassword.$post> }) =>
        parseResponse(client.sendpassword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServicesCollectorKey() {
  return ['services', '/services/collector', 'POST'] as const
}

export function usePostServicesCollector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.collector.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.services.collector.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesCollectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.services.collector.$post> }) =>
        parseResponse(client.services.collector.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesViesSirenKey(
  args: InferRequestType<(typeof client.services.vies)[':siren']['$get']>,
) {
  return ['services', '/services/vies/:siren', args] as const
}

export function useGetServicesViesSiren<TError = unknown>(
  args: InferRequestType<(typeof client.services.vies)[':siren']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>>
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
        ? getGetServicesViesSirenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services.vies[':siren'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesViesSiren<TError = unknown>(
  args: InferRequestType<(typeof client.services.vies)[':siren']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>>
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
        ? getGetServicesViesSirenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services.vies[':siren'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
