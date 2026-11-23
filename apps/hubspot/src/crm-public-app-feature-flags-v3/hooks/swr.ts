import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFeatureFlagsKey() {
  return ['feature-flags'] as const
}

export function getGetFeatureFlags202609AppIdFlagsAllKey(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
  >,
) {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/all', args] as const
}

export function useGetFeatureFlags202609AppIdFlagsAll<TError = unknown>(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
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
        ? getGetFeatureFlags202609AppIdFlagsAllKey(args)
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
                (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
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
          client['feature-flags']['2026-09'][':appId'].flags.all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureFlags202609AppIdFlagsAll<TError = unknown>(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
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
        ? getGetFeatureFlags202609AppIdFlagsAllKey(args)
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
                (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
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
          client['feature-flags']['2026-09'][':appId'].flags.all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFeatureFlags202609AppIdFlagsFlagNameKey(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
  >,
) {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/:flagName', args] as const
}

export function useGetFeatureFlags202609AppIdFlagsFlagName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
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
        ? getGetFeatureFlags202609AppIdFlagsFlagNameKey(args)
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
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
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
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureFlags202609AppIdFlagsFlagName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
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
        ? getGetFeatureFlags202609AppIdFlagsFlagNameKey(args)
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
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
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
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutFeatureFlags202609AppIdFlagsFlagNameKey() {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/:flagName', 'PUT'] as const
}

export function usePutFeatureFlags202609AppIdFlagsFlagName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFeatureFlags202609AppIdFlagsFlagNameKey()
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
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$put']
          >
        },
      ) =>
        parseResponse(
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFeatureFlags202609AppIdFlagsFlagNameKey() {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/:flagName', 'DELETE'] as const
}

export function useDeleteFeatureFlags202609AppIdFlagsFlagName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFeatureFlags202609AppIdFlagsFlagNameKey()
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
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFeatureFlags202609AppIdFlagsFlagNamePortalsKey(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
  >,
) {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/:flagName/portals', args] as const
}

export function useGetFeatureFlags202609AppIdFlagsFlagNamePortals<TError = unknown>(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
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
        ? getGetFeatureFlags202609AppIdFlagsFlagNamePortalsKey(args)
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
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
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
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureFlags202609AppIdFlagsFlagNamePortals<TError = unknown>(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
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
        ? getGetFeatureFlags202609AppIdFlagsFlagNamePortalsKey(args)
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
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
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
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteKey() {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/batch/delete',
    'POST',
  ] as const
}

export function usePostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDelete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteKey()
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
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client['feature-flags']['2026-09'][':appId'].flags[
            ':flagName'
          ].portals.batch.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertKey() {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/batch/upsert',
    'POST',
  ] as const
}

export function usePostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsert<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['upsert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertKey()
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
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['upsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client['feature-flags']['2026-09'][':appId'].flags[
            ':flagName'
          ].portals.batch.upsert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdKey(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
  >,
) {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/:portalId',
    args,
  ] as const
}

export function useGetFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
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
        ? getGetFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdKey(args)
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
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
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
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[':portalId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
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
        ? getGetFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdKey(args)
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
                (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
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
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[':portalId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdKey() {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/:portalId',
    'PUT',
  ] as const
}

export function usePutFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdKey()
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
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[':portalId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdKey() {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/:portalId',
    'DELETE',
  ] as const
}

export function useDeleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdKey()
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
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[
            ':portalId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
