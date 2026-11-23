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

export function getGetAppsBySafeNameSafeNameKey(
  args: InferRequestType<(typeof client.apps.bySafeName)[':safeName']['$get']>,
) {
  return ['apps', '/apps/bySafeName/:safeName', args] as const
}

export function useGetAppsBySafeNameSafeName<TError = unknown>(
  args: InferRequestType<(typeof client.apps.bySafeName)[':safeName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.bySafeName)[':safeName']['$get']>>
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
        ? getGetAppsBySafeNameSafeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.bySafeName)[':safeName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.bySafeName[':safeName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsBySafeNameSafeName<TError = unknown>(
  args: InferRequestType<(typeof client.apps.bySafeName)[':safeName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.bySafeName)[':safeName']['$get']>>
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
        ? getGetAppsBySafeNameSafeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps.bySafeName)[':safeName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.bySafeName[':safeName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsTextSearchKey(
  args: InferRequestType<typeof client.apps.textSearch.$get>,
) {
  return ['apps', '/apps/textSearch', args] as const
}

export function useGetAppsTextSearch<TError = unknown>(
  args: InferRequestType<typeof client.apps.textSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsTextSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.textSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsTextSearch<TError = unknown>(
  args: InferRequestType<typeof client.apps.textSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsTextSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.textSearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.textSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsVersionsKey(args: InferRequestType<typeof client.apps.versions.$get>) {
  return ['apps', '/apps/versions', args] as const
}

export function useGetAppsVersions<TError = unknown>(
  args: InferRequestType<typeof client.apps.versions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsVersionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsVersions<TError = unknown>(
  args: InferRequestType<typeof client.apps.versions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsVersionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.versions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps.versions.$get(args, clientOptions)),
      restSwrOptions,
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

export function getDeleteAppsAppIdKey() {
  return ['apps', '/apps/:appId', 'DELETE'] as const
}

export function useDeleteAppsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['$delete']> },
      ) => parseResponse(client.apps[':appId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdLiveKey() {
  return ['apps', '/apps/:appId/live', 'POST'] as const
}

export function usePostAppsAppIdLive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['live']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['live']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdLiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['live']['$post']> },
      ) => parseResponse(client.apps[':appId'].live.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdPublishKey() {
  return ['apps', '/apps/:appId/publish', 'POST'] as const
}

export function usePostAppsAppIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':appId']['publish']['$post']> },
      ) => parseResponse(client.apps[':appId'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdVersionsVersionKey(
  args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$get']>,
) {
  return ['apps', '/apps/:appId/versions/:version', args] as const
}

export function useGetAppsAppIdVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$get']>>
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
        ? getGetAppsAppIdVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$get']>>
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
        ? getGetAppsAppIdVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apps[':appId'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdVersionsVersionKey() {
  return ['apps', '/apps/:appId/versions/:version', 'POST'] as const
}

export function usePostAppsAppIdVersionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdVersionsVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$post']>
        },
      ) => parseResponse(client.apps[':appId'].versions[':version'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdVersionsVersionKey() {
  return ['apps', '/apps/:appId/versions/:version', 'DELETE'] as const
}

export function useDeleteAppsAppIdVersionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdVersionsVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$delete']>
        },
      ) => parseResponse(client.apps[':appId'].versions[':version'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAppsAppIdVersionsVersionKey() {
  return ['apps', '/apps/:appId/versions/:version', 'PATCH'] as const
}

export function usePatchAppsAppIdVersionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['versions'][':version']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAppsAppIdVersionsVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['$patch']>
        },
      ) => parseResponse(client.apps[':appId'].versions[':version'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdVersionsVersionStatusKey() {
  return ['apps', '/apps/:appId/versions/:version/status', 'POST'] as const
}

export function usePostAppsAppIdVersionsVersionStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.apps)[':appId']['versions'][':version']['status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdVersionsVersionStatusKey()
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
            (typeof client.apps)[':appId']['versions'][':version']['status']['$post']
          >
        },
      ) =>
        parseResponse(client.apps[':appId'].versions[':version'].status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomGatewayPaymentOwnershipIdKey() {
  return ['custom-gateway', '/custom-gateway/payment/:ownershipId', 'POST'] as const
}

export function usePostCustomGatewayPaymentOwnershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-gateway']['payment'][':ownershipId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['custom-gateway']['payment'][':ownershipId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomGatewayPaymentOwnershipIdKey()
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
            (typeof client)['custom-gateway']['payment'][':ownershipId']['$post']
          >
        },
      ) =>
        parseResponse(client['custom-gateway'].payment[':ownershipId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomGatewayRefundOwnershipIdKey() {
  return ['custom-gateway', '/custom-gateway/refund/:ownershipId', 'POST'] as const
}

export function usePostCustomGatewayRefundOwnershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-gateway']['refund'][':ownershipId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['custom-gateway']['refund'][':ownershipId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomGatewayRefundOwnershipIdKey()
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
            (typeof client)['custom-gateway']['refund'][':ownershipId']['$post']
          >
        },
      ) => parseResponse(client['custom-gateway'].refund[':ownershipId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeveloperAccountsKey(
  args: InferRequestType<typeof client.developerAccounts.$get>,
) {
  return ['developerAccounts', '/developerAccounts', args] as const
}

export function useGetDeveloperAccounts<TError = unknown>(
  args: InferRequestType<typeof client.developerAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>>
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
        ? getGetDeveloperAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.developerAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeveloperAccounts<TError = unknown>(
  args: InferRequestType<typeof client.developerAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>>
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
        ? getGetDeveloperAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developerAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.developerAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeveloperAccountsDeveloperAccountIdKey(
  args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$get']>,
) {
  return ['developerAccounts', '/developerAccounts/:developerAccountId', args] as const
}

export function useGetDeveloperAccountsDeveloperAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$get']>>
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
        ? getGetDeveloperAccountsDeveloperAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.developerAccounts[':developerAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeveloperAccountsDeveloperAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$get']>>
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
        ? getGetDeveloperAccountsDeveloperAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.developerAccounts[':developerAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeveloperAccountsDeveloperAccountIdKey() {
  return ['developerAccounts', '/developerAccounts/:developerAccountId', 'POST'] as const
}

export function usePostDeveloperAccountsDeveloperAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeveloperAccountsDeveloperAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$post']>
        },
      ) => parseResponse(client.developerAccounts[':developerAccountId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeveloperAccountsDeveloperAccountIdKey() {
  return ['developerAccounts', '/developerAccounts/:developerAccountId', 'DELETE'] as const
}

export function useDeleteDeveloperAccountsDeveloperAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeveloperAccountsDeveloperAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$delete']>
        },
      ) =>
        parseResponse(client.developerAccounts[':developerAccountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDeveloperAccountsDeveloperAccountIdKey() {
  return ['developerAccounts', '/developerAccounts/:developerAccountId', 'PATCH'] as const
}

export function usePatchDeveloperAccountsDeveloperAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developerAccounts)[':developerAccountId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDeveloperAccountsDeveloperAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.developerAccounts)[':developerAccountId']['$patch']>
        },
      ) =>
        parseResponse(client.developerAccounts[':developerAccountId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevelopersKey(args: InferRequestType<typeof client.developers.$get>) {
  return ['developers', '/developers', args] as const
}

export function useGetDevelopers<TError = unknown>(
  args: InferRequestType<typeof client.developers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevelopersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.developers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevelopers<TError = unknown>(
  args: InferRequestType<typeof client.developers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevelopersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.developers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.developers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDevelopersDeveloperIdKey(
  args: InferRequestType<(typeof client.developers)[':developerId']['$get']>,
) {
  return ['developers', '/developers/:developerId', args] as const
}

export function useGetDevelopersDeveloperId<TError = unknown>(
  args: InferRequestType<(typeof client.developers)[':developerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.developers)[':developerId']['$get']>>
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
        ? getGetDevelopersDeveloperIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.developers)[':developerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.developers[':developerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevelopersDeveloperId<TError = unknown>(
  args: InferRequestType<(typeof client.developers)[':developerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.developers)[':developerId']['$get']>>
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
        ? getGetDevelopersDeveloperIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.developers)[':developerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.developers[':developerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDevelopersDeveloperIdKey() {
  return ['developers', '/developers/:developerId', 'POST'] as const
}

export function usePostDevelopersDeveloperId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developers)[':developerId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.developers)[':developerId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDevelopersDeveloperIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.developers)[':developerId']['$post']> },
      ) => parseResponse(client.developers[':developerId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDevelopersDeveloperIdKey() {
  return ['developers', '/developers/:developerId', 'DELETE'] as const
}

export function useDeleteDevelopersDeveloperId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developers)[':developerId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.developers)[':developerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDevelopersDeveloperIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.developers)[':developerId']['$delete']> },
      ) => parseResponse(client.developers[':developerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDevelopersDeveloperIdKey() {
  return ['developers', '/developers/:developerId', 'PATCH'] as const
}

export function usePatchDevelopersDeveloperId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.developers)[':developerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.developers)[':developerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDevelopersDeveloperIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.developers)[':developerId']['$patch']> },
      ) => parseResponse(client.developers[':developerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsEventIdKey(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
) {
  return ['events', '/events/:eventId', args] as const
}

export function useGetEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesKey(args: InferRequestType<typeof client.files.$get>) {
  return ['files', '/files', args] as const
}

export function useGetFiles<TError = unknown>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFiles<TError = unknown>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFilesKey() {
  return ['files', '/files', 'POST'] as const
}

export function usePostFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.files.$post> }) =>
        parseResponse(client.files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesByIdOrUrlKey(
  args: InferRequestType<typeof client.files.byIdOrUrl.$get>,
) {
  return ['files', '/files/byIdOrUrl', args] as const
}

export function useGetFilesByIdOrUrl<TError = unknown>(
  args: InferRequestType<typeof client.files.byIdOrUrl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesByIdOrUrlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files.byIdOrUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesByIdOrUrl<TError = unknown>(
  args: InferRequestType<typeof client.files.byIdOrUrl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesByIdOrUrlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.byIdOrUrl.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files.byIdOrUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesDownloadKey(args: InferRequestType<typeof client.files.download.$get>) {
  return ['files', '/files/download', args] as const
}

export function useGetFilesDownload<TError = unknown>(
  args: InferRequestType<typeof client.files.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesDownloadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesDownload<TError = unknown>(
  args: InferRequestType<typeof client.files.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesDownloadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.download.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilesUrlKey() {
  return ['files', '/files/url', 'POST'] as const
}

export function usePostFilesUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.url.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.files.url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.files.url.$post> }) =>
        parseResponse(client.files.url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketsThisKey() {
  return ['markets', '/markets/this'] as const
}

export function useGetMarketsThis<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketsThisKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.markets.this.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketsThis<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketsThisKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markets.this.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.markets.this.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOwnershipKey(args: InferRequestType<typeof client.ownership.$get>) {
  return ['ownership', '/ownership', args] as const
}

export function useGetOwnership<TError = unknown>(
  args: InferRequestType<typeof client.ownership.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOwnershipKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ownership.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwnership<TError = unknown>(
  args: InferRequestType<typeof client.ownership.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOwnershipKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ownership.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOwnershipInstallKey() {
  return ['ownership', '/ownership/install', 'POST'] as const
}

export function usePostOwnershipInstall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ownership.install.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ownership.install.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOwnershipInstallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ownership.install.$post> }) =>
        parseResponse(client.ownership.install.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOwnershipUninstallOwnershipIdKey() {
  return ['ownership', '/ownership/uninstall/:ownershipId', 'POST'] as const
}

export function usePostOwnershipUninstallOwnershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ownership.uninstall)[':ownershipId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ownership.uninstall)[':ownershipId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOwnershipUninstallOwnershipIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ownership.uninstall)[':ownershipId']['$post']> },
      ) => parseResponse(client.ownership.uninstall[':ownershipId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOwnershipOwnershipIdKey(
  args: InferRequestType<(typeof client.ownership)[':ownershipId']['$get']>,
) {
  return ['ownership', '/ownership/:ownershipId', args] as const
}

export function useGetOwnershipOwnershipId<TError = unknown>(
  args: InferRequestType<(typeof client.ownership)[':ownershipId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>
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
        ? getGetOwnershipOwnershipIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ownership[':ownershipId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwnershipOwnershipId<TError = unknown>(
  args: InferRequestType<(typeof client.ownership)[':ownershipId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>
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
        ? getGetOwnershipOwnershipIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ownership[':ownershipId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOwnershipOwnershipIdKey() {
  return ['ownership', '/ownership/:ownershipId', 'POST'] as const
}

export function usePostOwnershipOwnershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ownership)[':ownershipId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOwnershipOwnershipIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ownership)[':ownershipId']['$post']> },
      ) => parseResponse(client.ownership[':ownershipId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOwnershipOwnershipIdKey() {
  return ['ownership', '/ownership/:ownershipId', 'PATCH'] as const
}

export function usePatchOwnershipOwnershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ownership)[':ownershipId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ownership)[':ownershipId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOwnershipOwnershipIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ownership)[':ownershipId']['$patch']> },
      ) => parseResponse(client.ownership[':ownershipId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPermissionAppsAppIdKey(
  args: InferRequestType<(typeof client.permission.apps)[':appId']['$get']>,
) {
  return ['permission', '/permission/apps/:appId', args] as const
}

export function useGetPermissionAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.permission.apps)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>
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
        ? getGetPermissionAppsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.permission.apps[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissionAppsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.permission.apps)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>
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
        ? getGetPermissionAppsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.permission.apps[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPermissionAppsAppIdKey() {
  return ['permission', '/permission/apps/:appId', 'POST'] as const
}

export function usePostPermissionAppsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.permission.apps)[':appId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPermissionAppsAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.permission.apps)[':appId']['$post']> },
      ) => parseResponse(client.permission.apps[':appId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePermissionAppsAppIdKey() {
  return ['permission', '/permission/apps/:appId', 'DELETE'] as const
}

export function useDeletePermissionAppsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.permission.apps)[':appId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.permission.apps)[':appId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePermissionAppsAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.permission.apps)[':appId']['$delete']> },
      ) => parseResponse(client.permission.apps[':appId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReviewsKey(args: InferRequestType<typeof client.reviews.$get>) {
  return ['reviews', '/reviews', args] as const
}

export function useGetReviews<TError = unknown>(
  args: InferRequestType<typeof client.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.reviews.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetReviews<TError = unknown>(
  args: InferRequestType<typeof client.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.reviews.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostReviewsKey() {
  return ['reviews', '/reviews', 'POST'] as const
}

export function usePostReviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reviews.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReviewsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reviews.$post> }) =>
        parseResponse(client.reviews.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReviewsReviewIdKey(
  args: InferRequestType<(typeof client.reviews)[':reviewId']['$get']>,
) {
  return ['reviews', '/reviews/:reviewId', args] as const
}

export function useGetReviewsReviewId<TError = unknown>(
  args: InferRequestType<(typeof client.reviews)[':reviewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>>
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
        ? getGetReviewsReviewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reviews[':reviewId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReviewsReviewId<TError = unknown>(
  args: InferRequestType<(typeof client.reviews)[':reviewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>>
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
        ? getGetReviewsReviewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reviews[':reviewId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReviewsReviewIdKey() {
  return ['reviews', '/reviews/:reviewId', 'POST'] as const
}

export function usePostReviewsReviewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reviews)[':reviewId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReviewsReviewIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reviews)[':reviewId']['$post']> },
      ) => parseResponse(client.reviews[':reviewId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReviewsReviewIdKey() {
  return ['reviews', '/reviews/:reviewId', 'DELETE'] as const
}

export function useDeleteReviewsReviewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reviews)[':reviewId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReviewsReviewIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reviews)[':reviewId']['$delete']> },
      ) => parseResponse(client.reviews[':reviewId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchReviewsReviewIdKey() {
  return ['reviews', '/reviews/:reviewId', 'PATCH'] as const
}

export function usePatchReviewsReviewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)[':reviewId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reviews)[':reviewId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchReviewsReviewIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reviews)[':reviewId']['$patch']> },
      ) => parseResponse(client.reviews[':reviewId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStatsIncrementFieldKey() {
  return ['stats', '/stats/increment/:field', 'POST'] as const
}

export function usePostStatsIncrementField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stats.increment)[':field']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stats.increment)[':field']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatsIncrementFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stats.increment)[':field']['$post']> },
      ) => parseResponse(client.stats.increment[':field'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatsSeriesPeriodFieldsKey(
  args: InferRequestType<(typeof client.stats.series)[':period'][':fields']['$get']>,
) {
  return ['stats', '/stats/series/:period/:fields', args] as const
}

export function useGetStatsSeriesPeriodFields<TError = unknown>(
  args: InferRequestType<(typeof client.stats.series)[':period'][':fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stats.series)[':period'][':fields']['$get']>>
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
        ? getGetStatsSeriesPeriodFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stats.series)[':period'][':fields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stats.series[':period'][':fields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsSeriesPeriodFields<TError = unknown>(
  args: InferRequestType<(typeof client.stats.series)[':period'][':fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stats.series)[':period'][':fields']['$get']>>
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
        ? getGetStatsSeriesPeriodFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stats.series)[':period'][':fields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stats.series[':period'][':fields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsTotalKey(args: InferRequestType<typeof client.stats.total.$get>) {
  return ['stats', '/stats/total', args] as const
}

export function useGetStatsTotal<TError = unknown>(
  args: InferRequestType<typeof client.stats.total.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsTotalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.total.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsTotal<TError = unknown>(
  args: InferRequestType<typeof client.stats.total.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsTotalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.total.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.total.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStripeGatewayDeveloperDeveloperIdAccountsKey(
  args: InferRequestType<
    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
  >,
) {
  return ['stripe-gateway', '/stripe-gateway/developer/:developerId/accounts', args] as const
}

export function useGetStripeGatewayDeveloperDeveloperIdAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetStripeGatewayDeveloperDeveloperIdAccountsKey(args)
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
                (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
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
          client['stripe-gateway'].developer[':developerId'].accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStripeGatewayDeveloperDeveloperIdAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetStripeGatewayDeveloperDeveloperIdAccountsKey(args)
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
                (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$get']
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
          client['stripe-gateway'].developer[':developerId'].accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostStripeGatewayDeveloperDeveloperIdAccountsKey() {
  return ['stripe-gateway', '/stripe-gateway/developer/:developerId/accounts', 'POST'] as const
}

export function usePostStripeGatewayDeveloperDeveloperIdAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStripeGatewayDeveloperDeveloperIdAccountsKey()
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
            (typeof client)['stripe-gateway']['developer'][':developerId']['accounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['stripe-gateway'].developer[':developerId'].accounts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdKey() {
  return [
    'stripe-gateway',
    '/stripe-gateway/developer/:developerId/accounts/:stripeId',
    'DELETE',
  ] as const
}

export function useDeleteStripeGatewayDeveloperDeveloperIdAccountsStripeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['stripe-gateway']['developer'][':developerId']['accounts'][':stripeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdKey()
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
            (typeof client)['stripe-gateway']['developer'][':developerId']['accounts'][':stripeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['stripe-gateway'].developer[':developerId'].accounts[':stripeId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStripeGatewayUserUserIdCardsKey(
  args: InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>,
) {
  return ['stripe-gateway', '/stripe-gateway/user/:userId/cards', args] as const
}

export function useGetStripeGatewayUserUserIdCards<TError = unknown>(
  args: InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>
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
        ? getGetStripeGatewayUserUserIdCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['stripe-gateway'].user[':userId'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStripeGatewayUserUserIdCards<TError = unknown>(
  args: InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>
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
        ? getGetStripeGatewayUserUserIdCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['stripe-gateway'].user[':userId'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStripeGatewayUserUserIdCardsKey() {
  return ['stripe-gateway', '/stripe-gateway/user/:userId/cards', 'POST'] as const
}

export function usePostStripeGatewayUserUserIdCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['stripe-gateway']['user'][':userId']['cards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStripeGatewayUserUserIdCardsKey()
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
            (typeof client)['stripe-gateway']['user'][':userId']['cards']['$post']
          >
        },
      ) => parseResponse(client['stripe-gateway'].user[':userId'].cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStripeGatewayUserUserIdCardsCardIdKey() {
  return ['stripe-gateway', '/stripe-gateway/user/:userId/cards/:cardId', 'POST'] as const
}

export function usePostStripeGatewayUserUserIdCardsCardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStripeGatewayUserUserIdCardsCardIdKey()
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
            (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['stripe-gateway'].user[':userId'].cards[':cardId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteStripeGatewayUserUserIdCardsCardIdKey() {
  return ['stripe-gateway', '/stripe-gateway/user/:userId/cards/:cardId', 'DELETE'] as const
}

export function useDeleteStripeGatewayUserUserIdCardsCardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStripeGatewayUserUserIdCardsCardIdKey()
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
            (typeof client)['stripe-gateway']['user'][':userId']['cards'][':cardId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['stripe-gateway'].user[':userId'].cards[':cardId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionsKey(args: InferRequestType<typeof client.transactions.$get>) {
  return ['transactions', '/transactions', args] as const
}

export function useGetTransactions<TError = unknown>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactions<TError = unknown>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTransactionsTransactionIdKey(
  args: InferRequestType<(typeof client.transactions)[':transactionId']['$get']>,
) {
  return ['transactions', '/transactions/:transactionId', args] as const
}

export function useGetTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':transactionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$get']>>
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
        ? getGetTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions[':transactionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':transactionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$get']>>
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
        ? getGetTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions[':transactionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransactionsTransactionIdKey() {
  return ['transactions', '/transactions/:transactionId', 'POST'] as const
}

export function usePostTransactionsTransactionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':transactionId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsTransactionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transactions)[':transactionId']['$post']> },
      ) => parseResponse(client.transactions[':transactionId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTransactionsTransactionIdKey() {
  return ['transactions', '/transactions/:transactionId', 'DELETE'] as const
}

export function useDeleteTransactionsTransactionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':transactionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTransactionsTransactionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.transactions)[':transactionId']['$delete']> },
      ) => parseResponse(client.transactions[':transactionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserAccountsKey(args: InferRequestType<typeof client.userAccounts.$get>) {
  return ['userAccounts', '/userAccounts', args] as const
}

export function useGetUserAccounts<TError = unknown>(
  args: InferRequestType<typeof client.userAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccounts<TError = unknown>(
  args: InferRequestType<typeof client.userAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserAccountsUserAccountIdKey(
  args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$get']>,
) {
  return ['userAccounts', '/userAccounts/:userAccountId', args] as const
}

export function useGetUserAccountsUserAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$get']>>
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
        ? getGetUserAccountsUserAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userAccounts[':userAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccountsUserAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$get']>>
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
        ? getGetUserAccountsUserAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userAccounts[':userAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserAccountsUserAccountIdKey() {
  return ['userAccounts', '/userAccounts/:userAccountId', 'POST'] as const
}

export function usePostUserAccountsUserAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userAccounts)[':userAccountId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserAccountsUserAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$post']> },
      ) => parseResponse(client.userAccounts[':userAccountId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserAccountsUserAccountIdKey() {
  return ['userAccounts', '/userAccounts/:userAccountId', 'DELETE'] as const
}

export function useDeleteUserAccountsUserAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userAccounts)[':userAccountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserAccountsUserAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$delete']> },
      ) => parseResponse(client.userAccounts[':userAccountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserAccountsUserAccountIdKey() {
  return ['userAccounts', '/userAccounts/:userAccountId', 'PATCH'] as const
}

export function usePatchUserAccountsUserAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userAccounts)[':userAccountId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.userAccounts)[':userAccountId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserAccountsUserAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.userAccounts)[':userAccountId']['$patch']> },
      ) => parseResponse(client.userAccounts[':userAccountId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdKey() {
  return ['users', '/users/:userId', 'POST'] as const
}

export function usePostUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['$post']> },
      ) => parseResponse(client.users[':userId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function useDeleteUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['$delete']> },
      ) => parseResponse(client.users[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdKey() {
  return ['users', '/users/:userId', 'PATCH'] as const
}

export function usePatchUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['$patch']> },
      ) => parseResponse(client.users[':userId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
