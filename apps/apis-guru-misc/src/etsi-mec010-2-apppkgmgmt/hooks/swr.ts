import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppPackagesKey() {
  return ['app_packages'] as const
}

export function getOnboardedAppPackagesKey() {
  return ['onboarded_app_packages'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getUserDefinedNotificationKey() {
  return ['user_defined_notification'] as const
}

export function getGetAppPackagesKey(args: InferRequestType<typeof client.app_packages.$get>) {
  return ['app_packages', '/app_packages', args] as const
}

export function useGetAppPackages<TError = unknown>(
  args: InferRequestType<typeof client.app_packages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppPackagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app_packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppPackages<TError = unknown>(
  args: InferRequestType<typeof client.app_packages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppPackagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app_packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppPackagesKey() {
  return ['app_packages', '/app_packages', 'POST'] as const
}

export function usePostAppPackages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.app_packages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppPackagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.app_packages.$post> }) =>
        parseResponse(client.app_packages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppPackagesAppPkgIdKey(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$get']>,
) {
  return ['app_packages', '/app_packages/:appPkgId', args] as const
}

export function useGetAppPackagesAppPkgId<TError = unknown>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$get']>>
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
        ? getGetAppPackagesAppPkgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app_packages[':appPkgId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppPackagesAppPkgId<TError = unknown>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$get']>>
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
        ? getGetAppPackagesAppPkgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app_packages[':appPkgId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAppPackagesAppPkgIdKey() {
  return ['app_packages', '/app_packages/:appPkgId', 'DELETE'] as const
}

export function useDeleteAppPackagesAppPkgId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.app_packages)[':appPkgId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppPackagesAppPkgIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.app_packages)[':appPkgId']['$delete']> },
      ) => parseResponse(client.app_packages[':appPkgId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAppPackagesAppPkgIdKey() {
  return ['app_packages', '/app_packages/:appPkgId', 'PATCH'] as const
}

export function usePatchAppPackagesAppPkgId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.app_packages)[':appPkgId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAppPackagesAppPkgIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.app_packages)[':appPkgId']['$patch']> },
      ) => parseResponse(client.app_packages[':appPkgId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppPackagesAppPkgIdAppdKey(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>,
) {
  return ['app_packages', '/app_packages/:appPkgId/appd', args] as const
}

export function useGetAppPackagesAppPkgIdAppd<TError = unknown>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>>
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
        ? getGetAppPackagesAppPkgIdAppdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app_packages[':appPkgId'].appd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppPackagesAppPkgIdAppd<TError = unknown>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>>
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
        ? getGetAppPackagesAppPkgIdAppdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app_packages[':appPkgId'].appd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppPackagesAppPkgIdPackageContentKey(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>,
) {
  return ['app_packages', '/app_packages/:appPkgId/package_content', args] as const
}

export function useGetAppPackagesAppPkgIdPackageContent<TError = unknown>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>
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
        ? getGetAppPackagesAppPkgIdPackageContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app_packages[':appPkgId'].package_content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppPackagesAppPkgIdPackageContent<TError = unknown>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>
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
        ? getGetAppPackagesAppPkgIdPackageContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app_packages[':appPkgId'].package_content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAppPackagesAppPkgIdPackageContentKey() {
  return ['app_packages', '/app_packages/:appPkgId/package_content', 'PUT'] as const
}

export function usePutAppPackagesAppPkgIdPackageContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppPackagesAppPkgIdPackageContentKey()
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
            (typeof client.app_packages)[':appPkgId']['package_content']['$put']
          >
        },
      ) => parseResponse(client.app_packages[':appPkgId'].package_content.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOnboardedAppPackagesAppDIdAppdKey(
  args: InferRequestType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>,
) {
  return ['onboarded_app_packages', '/onboarded_app_packages/:appDId/appd', args] as const
}

export function useGetOnboardedAppPackagesAppDIdAppd<TError = unknown>(
  args: InferRequestType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>>
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
        ? getGetOnboardedAppPackagesAppDIdAppdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.onboarded_app_packages[':appDId'].appd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOnboardedAppPackagesAppDIdAppd<TError = unknown>(
  args: InferRequestType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>>
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
        ? getGetOnboardedAppPackagesAppDIdAppdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.onboarded_app_packages[':appDId'].appd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOnboardedAppPackagesAppDIdPackageContentKey(
  args: InferRequestType<
    (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
  >,
) {
  return [
    'onboarded_app_packages',
    '/onboarded_app_packages/:appDId/package_content',
    args,
  ] as const
}

export function useGetOnboardedAppPackagesAppDIdPackageContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
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
        ? getGetOnboardedAppPackagesAppDIdPackageContentKey(args)
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
                (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
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
          client.onboarded_app_packages[':appDId'].package_content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOnboardedAppPackagesAppDIdPackageContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
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
        ? getGetOnboardedAppPackagesAppDIdPackageContentKey(args)
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
                (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
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
          client.onboarded_app_packages[':appDId'].package_content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOnboardedAppPackagesAppDIdPackageContentKey() {
  return [
    'onboarded_app_packages',
    '/onboarded_app_packages/:appDId/package_content',
    'PUT',
  ] as const
}

export function usePutOnboardedAppPackagesAppDIdPackageContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.onboarded_app_packages)[':appDId']['package_content']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.onboarded_app_packages)[':appDId']['package_content']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOnboardedAppPackagesAppDIdPackageContentKey()
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
            (typeof client.onboarded_app_packages)[':appDId']['package_content']['$put']
          >
        },
      ) =>
        parseResponse(
          client.onboarded_app_packages[':appDId'].package_content.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsKey() {
  return ['subscriptions', '/subscriptions'] as const
}

export function useGetSubscriptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsKey() {
  return ['subscriptions', '/subscriptions', 'POST'] as const
}

export function usePostSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subscriptions.$post> }) =>
        parseResponse(client.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId', args] as const
}

export function useGetSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
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
        ? getGetSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':subscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
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
        ? getGetSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':subscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSubscriptionsSubscriptionIdKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId', 'DELETE'] as const
}

export function useDeleteSubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubscriptionsSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$delete']> },
      ) => parseResponse(client.subscriptions[':subscriptionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserDefinedNotificationKey() {
  return ['user_defined_notification', '/user_defined_notification', 'POST'] as const
}

export function usePostUserDefinedNotification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_defined_notification.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.user_defined_notification.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserDefinedNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_defined_notification.$post> },
      ) => parseResponse(client.user_defined_notification.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
