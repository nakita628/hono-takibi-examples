import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIdKey() {
  return ['{id}'] as const
}

export function getRealmKey() {
  return ['{realm}'] as const
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKey() {
  return ['', '/', 'POST'] as const
}

export function usePost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.index.$post> }) =>
        parseResponse(client.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIdNameKey(args: InferRequestType<(typeof client)[':id']['name']['$get']>) {
  return [':id', '/:id/name', args] as const
}

export function useGetIdName<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIdNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdName<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIdNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmKey(args: InferRequestType<(typeof client)[':realm']['$get']>) {
  return [':realm', '/:realm', args] as const
}

export function useGetRealm<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealm<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmKey() {
  return [':realm', '/:realm', 'PUT'] as const
}

export function usePutRealm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':realm']['$put']> }) =>
        parseResponse(client[':realm'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmKey() {
  return [':realm', '/:realm', 'DELETE'] as const
}

export function useDeleteRealm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':realm']['$delete']> }) =>
        parseResponse(client[':realm'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmAdminEventsKey(
  args: InferRequestType<(typeof client)[':realm']['admin-events']['$get']>,
) {
  return [':realm', '/:realm/admin-events', args] as const
}

export function useGetRealmAdminEvents<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['admin-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>
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
        ? getGetRealmAdminEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm']['admin-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAdminEvents<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['admin-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>
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
        ? getGetRealmAdminEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm']['admin-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRealmAdminEventsKey() {
  return [':realm', '/:realm/admin-events', 'DELETE'] as const
}

export function useDeleteRealmAdminEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['admin-events']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmAdminEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['admin-events']['$delete']> },
      ) => parseResponse(client[':realm']['admin-events'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmAttackDetectionBruteForceUsersKey() {
  return [':realm', '/:realm/attack-detection/brute-force/users', 'DELETE'] as const
}

export function useDeleteRealmAttackDetectionBruteForceUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['attack-detection']['brute-force']['users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['attack-detection']['brute-force']['users']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmAttackDetectionBruteForceUsersKey()
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
            (typeof client)[':realm']['attack-detection']['brute-force']['users']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['attack-detection']['brute-force'].users.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmAttackDetectionBruteForceUsersUserIdKey(
  args: InferRequestType<
    (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
  >,
) {
  return [':realm', '/:realm/attack-detection/brute-force/users/:userId', args] as const
}

export function useGetRealmAttackDetectionBruteForceUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
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
        ? getGetRealmAttackDetectionBruteForceUsersUserIdKey(args)
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
                (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
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
          client[':realm']['attack-detection']['brute-force'].users[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAttackDetectionBruteForceUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
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
        ? getGetRealmAttackDetectionBruteForceUsersUserIdKey(args)
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
                (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
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
          client[':realm']['attack-detection']['brute-force'].users[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRealmAttackDetectionBruteForceUsersUserIdKey() {
  return [':realm', '/:realm/attack-detection/brute-force/users/:userId', 'DELETE'] as const
}

export function useDeleteRealmAttackDetectionBruteForceUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmAttackDetectionBruteForceUsersUserIdKey()
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
            (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['attack-detection']['brute-force'].users[':userId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmAuthenticationAuthenticatorProvidersKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/authenticator-providers', args] as const
}

export function useGetRealmAuthenticationAuthenticatorProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
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
        ? getGetRealmAuthenticationAuthenticatorProvidersKey(args)
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
                (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
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
          client[':realm'].authentication['authenticator-providers'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationAuthenticatorProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
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
        ? getGetRealmAuthenticationAuthenticatorProvidersKey(args)
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
                (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
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
          client[':realm'].authentication['authenticator-providers'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmAuthenticationClientAuthenticatorProvidersKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/client-authenticator-providers', args] as const
}

export function useGetRealmAuthenticationClientAuthenticatorProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
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
        ? getGetRealmAuthenticationClientAuthenticatorProvidersKey(args)
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
                (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
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
          client[':realm'].authentication['client-authenticator-providers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationClientAuthenticatorProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
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
        ? getGetRealmAuthenticationClientAuthenticatorProvidersKey(args)
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
                (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
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
          client[':realm'].authentication['client-authenticator-providers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmAuthenticationConfigDescriptionProviderIdKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/config-description/:providerId', args] as const
}

export function useGetRealmAuthenticationConfigDescriptionProviderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
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
        ? getGetRealmAuthenticationConfigDescriptionProviderIdKey(args)
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
                (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
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
          client[':realm'].authentication['config-description'][':providerId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationConfigDescriptionProviderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
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
        ? getGetRealmAuthenticationConfigDescriptionProviderIdKey(args)
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
                (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
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
          client[':realm'].authentication['config-description'][':providerId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmAuthenticationConfigIdKey(
  args: InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>,
) {
  return [':realm', '/:realm/authentication/config/:id', args] as const
}

export function useGetRealmAuthenticationConfigId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>
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
        ? getGetRealmAuthenticationConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].authentication.config[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationConfigId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>
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
        ? getGetRealmAuthenticationConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].authentication.config[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmAuthenticationConfigIdKey() {
  return [':realm', '/:realm/authentication/config/:id', 'PUT'] as const
}

export function usePutRealmAuthenticationConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmAuthenticationConfigIdKey()
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
            (typeof client)[':realm']['authentication']['config'][':id']['$put']
          >
        },
      ) => parseResponse(client[':realm'].authentication.config[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmAuthenticationConfigIdKey() {
  return [':realm', '/:realm/authentication/config/:id', 'DELETE'] as const
}

export function useDeleteRealmAuthenticationConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmAuthenticationConfigIdKey()
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
            (typeof client)[':realm']['authentication']['config'][':id']['$delete']
          >
        },
      ) => parseResponse(client[':realm'].authentication.config[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmAuthenticationExecutionsKey() {
  return [':realm', '/:realm/authentication/executions', 'POST'] as const
}

export function usePostRealmAuthenticationExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['executions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['authentication']['executions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmAuthenticationExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':realm']['authentication']['executions']['$post']>
        },
      ) => parseResponse(client[':realm'].authentication.executions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmAuthenticationExecutionsExecutionIdKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/executions/:executionId', args] as const
}

export function useGetRealmAuthenticationExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
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
        ? getGetRealmAuthenticationExecutionsExecutionIdKey(args)
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
                (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
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
          client[':realm'].authentication.executions[':executionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
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
        ? getGetRealmAuthenticationExecutionsExecutionIdKey(args)
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
                (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
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
          client[':realm'].authentication.executions[':executionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRealmAuthenticationExecutionsExecutionIdKey() {
  return [':realm', '/:realm/authentication/executions/:executionId', 'DELETE'] as const
}

export function useDeleteRealmAuthenticationExecutionsExecutionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['executions'][':executionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['executions'][':executionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmAuthenticationExecutionsExecutionIdKey()
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
            (typeof client)[':realm']['authentication']['executions'][':executionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication.executions[':executionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmAuthenticationExecutionsExecutionIdConfigKey() {
  return [':realm', '/:realm/authentication/executions/:executionId/config', 'POST'] as const
}

export function usePostRealmAuthenticationExecutionsExecutionIdConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['executions'][':executionId']['config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['executions'][':executionId']['config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmAuthenticationExecutionsExecutionIdConfigKey()
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
            (typeof client)[':realm']['authentication']['executions'][':executionId']['config']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication.executions[':executionId'].config.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmAuthenticationExecutionsExecutionIdLowerPriorityKey() {
  return [
    ':realm',
    '/:realm/authentication/executions/:executionId/lower-priority',
    'POST',
  ] as const
}

export function usePostRealmAuthenticationExecutionsExecutionIdLowerPriority<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['executions'][':executionId']['lower-priority']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['executions'][':executionId']['lower-priority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmAuthenticationExecutionsExecutionIdLowerPriorityKey()
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
            (typeof client)[':realm']['authentication']['executions'][':executionId']['lower-priority']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication.executions[':executionId']['lower-priority'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmAuthenticationExecutionsExecutionIdRaisePriorityKey() {
  return [
    ':realm',
    '/:realm/authentication/executions/:executionId/raise-priority',
    'POST',
  ] as const
}

export function usePostRealmAuthenticationExecutionsExecutionIdRaisePriority<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['executions'][':executionId']['raise-priority']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['executions'][':executionId']['raise-priority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmAuthenticationExecutionsExecutionIdRaisePriorityKey()
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
            (typeof client)[':realm']['authentication']['executions'][':executionId']['raise-priority']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication.executions[':executionId']['raise-priority'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmAuthenticationFlowsKey(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows']['$get']>,
) {
  return [':realm', '/:realm/authentication/flows', args] as const
}

export function useGetRealmAuthenticationFlows<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
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
        ? getGetRealmAuthenticationFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].authentication.flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationFlows<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
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
        ? getGetRealmAuthenticationFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].authentication.flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmAuthenticationFlowsKey() {
  return [':realm', '/:realm/authentication/flows', 'POST'] as const
}

export function usePostRealmAuthenticationFlows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['authentication']['flows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmAuthenticationFlowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['authentication']['flows']['$post']> },
      ) => parseResponse(client[':realm'].authentication.flows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmAuthenticationFlowsFlowAliasCopyKey() {
  return [':realm', '/:realm/authentication/flows/:flowAlias/copy', 'POST'] as const
}

export function usePostRealmAuthenticationFlowsFlowAliasCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['flows'][':flowAlias']['copy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['flows'][':flowAlias']['copy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmAuthenticationFlowsFlowAliasCopyKey()
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
            (typeof client)[':realm']['authentication']['flows'][':flowAlias']['copy']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication.flows[':flowAlias'].copy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmAuthenticationFlowsFlowAliasExecutionsKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/flows/:flowAlias/executions', args] as const
}

export function useGetRealmAuthenticationFlowsFlowAliasExecutions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
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
        ? getGetRealmAuthenticationFlowsFlowAliasExecutionsKey(args)
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
                (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
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
          client[':realm'].authentication.flows[':flowAlias'].executions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationFlowsFlowAliasExecutions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
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
        ? getGetRealmAuthenticationFlowsFlowAliasExecutionsKey(args)
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
                (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
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
          client[':realm'].authentication.flows[':flowAlias'].executions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmAuthenticationFlowsFlowAliasExecutionsKey() {
  return [':realm', '/:realm/authentication/flows/:flowAlias/executions', 'PUT'] as const
}

export function usePutRealmAuthenticationFlowsFlowAliasExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmAuthenticationFlowsFlowAliasExecutionsKey()
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
            (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication.flows[':flowAlias'].executions.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmAuthenticationFlowsFlowAliasExecutionsExecutionKey() {
  return [':realm', '/:realm/authentication/flows/:flowAlias/executions/execution', 'POST'] as const
}

export function usePostRealmAuthenticationFlowsFlowAliasExecutionsExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['execution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['execution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmAuthenticationFlowsFlowAliasExecutionsExecutionKey()
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
            (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['execution']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication.flows[':flowAlias'].executions.execution.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmAuthenticationFlowsFlowAliasExecutionsFlowKey() {
  return [':realm', '/:realm/authentication/flows/:flowAlias/executions/flow', 'POST'] as const
}

export function usePostRealmAuthenticationFlowsFlowAliasExecutionsFlow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['flow']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['flow']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmAuthenticationFlowsFlowAliasExecutionsFlowKey()
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
            (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['flow']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication.flows[':flowAlias'].executions.flow.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmAuthenticationFlowsIdKey(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>,
) {
  return [':realm', '/:realm/authentication/flows/:id', args] as const
}

export function useGetRealmAuthenticationFlowsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>>
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
        ? getGetRealmAuthenticationFlowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].authentication.flows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationFlowsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>>
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
        ? getGetRealmAuthenticationFlowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].authentication.flows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmAuthenticationFlowsIdKey() {
  return [':realm', '/:realm/authentication/flows/:id', 'PUT'] as const
}

export function usePutRealmAuthenticationFlowsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmAuthenticationFlowsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$put']>
        },
      ) => parseResponse(client[':realm'].authentication.flows[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmAuthenticationFlowsIdKey() {
  return [':realm', '/:realm/authentication/flows/:id', 'DELETE'] as const
}

export function useDeleteRealmAuthenticationFlowsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmAuthenticationFlowsIdKey()
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
            (typeof client)[':realm']['authentication']['flows'][':id']['$delete']
          >
        },
      ) => parseResponse(client[':realm'].authentication.flows[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmAuthenticationFormActionProvidersKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['form-action-providers']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/form-action-providers', args] as const
}

export function useGetRealmAuthenticationFormActionProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['form-action-providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['form-action-providers']['$get']
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
        ? getGetRealmAuthenticationFormActionProvidersKey(args)
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
                (typeof client)[':realm']['authentication']['form-action-providers']['$get']
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
          client[':realm'].authentication['form-action-providers'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationFormActionProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['form-action-providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['form-action-providers']['$get']
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
        ? getGetRealmAuthenticationFormActionProvidersKey(args)
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
                (typeof client)[':realm']['authentication']['form-action-providers']['$get']
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
          client[':realm'].authentication['form-action-providers'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmAuthenticationFormProvidersKey(
  args: InferRequestType<(typeof client)[':realm']['authentication']['form-providers']['$get']>,
) {
  return [':realm', '/:realm/authentication/form-providers', args] as const
}

export function useGetRealmAuthenticationFormProviders<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['form-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['form-providers']['$get']>
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
        ? getGetRealmAuthenticationFormProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['form-providers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].authentication['form-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationFormProviders<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['form-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['form-providers']['$get']>
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
        ? getGetRealmAuthenticationFormProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['form-providers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].authentication['form-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmAuthenticationPerClientConfigDescriptionKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/per-client-config-description', args] as const
}

export function useGetRealmAuthenticationPerClientConfigDescription<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
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
        ? getGetRealmAuthenticationPerClientConfigDescriptionKey(args)
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
                (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
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
          client[':realm'].authentication['per-client-config-description'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationPerClientConfigDescription<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
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
        ? getGetRealmAuthenticationPerClientConfigDescriptionKey(args)
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
                (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
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
          client[':realm'].authentication['per-client-config-description'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmAuthenticationRegisterRequiredActionKey() {
  return [':realm', '/:realm/authentication/register-required-action', 'POST'] as const
}

export function usePostRealmAuthenticationRegisterRequiredAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['register-required-action']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['register-required-action']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmAuthenticationRegisterRequiredActionKey()
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
            (typeof client)[':realm']['authentication']['register-required-action']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication['register-required-action'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmAuthenticationRequiredActionsKey(
  args: InferRequestType<(typeof client)[':realm']['authentication']['required-actions']['$get']>,
) {
  return [':realm', '/:realm/authentication/required-actions', args] as const
}

export function useGetRealmAuthenticationRequiredActions<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['required-actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['required-actions']['$get']>
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
        ? getGetRealmAuthenticationRequiredActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['required-actions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':realm'].authentication['required-actions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationRequiredActions<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['required-actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['required-actions']['$get']>
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
        ? getGetRealmAuthenticationRequiredActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['authentication']['required-actions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':realm'].authentication['required-actions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmAuthenticationRequiredActionsAliasKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/required-actions/:alias', args] as const
}

export function useGetRealmAuthenticationRequiredActionsAlias<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
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
        ? getGetRealmAuthenticationRequiredActionsAliasKey(args)
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
                (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
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
          client[':realm'].authentication['required-actions'][':alias'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationRequiredActionsAlias<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
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
        ? getGetRealmAuthenticationRequiredActionsAliasKey(args)
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
                (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
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
          client[':realm'].authentication['required-actions'][':alias'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmAuthenticationRequiredActionsAliasKey() {
  return [':realm', '/:realm/authentication/required-actions/:alias', 'PUT'] as const
}

export function usePutRealmAuthenticationRequiredActionsAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['required-actions'][':alias']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['required-actions'][':alias']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmAuthenticationRequiredActionsAliasKey()
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
            (typeof client)[':realm']['authentication']['required-actions'][':alias']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication['required-actions'][':alias'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmAuthenticationRequiredActionsAliasKey() {
  return [':realm', '/:realm/authentication/required-actions/:alias', 'DELETE'] as const
}

export function useDeleteRealmAuthenticationRequiredActionsAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['required-actions'][':alias']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['required-actions'][':alias']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmAuthenticationRequiredActionsAliasKey()
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
            (typeof client)[':realm']['authentication']['required-actions'][':alias']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication['required-actions'][':alias'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmAuthenticationRequiredActionsAliasLowerPriorityKey() {
  return [
    ':realm',
    '/:realm/authentication/required-actions/:alias/lower-priority',
    'POST',
  ] as const
}

export function usePostRealmAuthenticationRequiredActionsAliasLowerPriority<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['required-actions'][':alias']['lower-priority']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['required-actions'][':alias']['lower-priority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmAuthenticationRequiredActionsAliasLowerPriorityKey()
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
            (typeof client)[':realm']['authentication']['required-actions'][':alias']['lower-priority']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication['required-actions'][':alias']['lower-priority'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmAuthenticationRequiredActionsAliasRaisePriorityKey() {
  return [
    ':realm',
    '/:realm/authentication/required-actions/:alias/raise-priority',
    'POST',
  ] as const
}

export function usePostRealmAuthenticationRequiredActionsAliasRaisePriority<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['required-actions'][':alias']['raise-priority']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['authentication']['required-actions'][':alias']['raise-priority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmAuthenticationRequiredActionsAliasRaisePriorityKey()
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
            (typeof client)[':realm']['authentication']['required-actions'][':alias']['raise-priority']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].authentication['required-actions'][':alias']['raise-priority'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmAuthenticationUnregisteredRequiredActionsKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/unregistered-required-actions', args] as const
}

export function useGetRealmAuthenticationUnregisteredRequiredActions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
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
        ? getGetRealmAuthenticationUnregisteredRequiredActionsKey(args)
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
                (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
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
          client[':realm'].authentication['unregistered-required-actions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmAuthenticationUnregisteredRequiredActions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
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
        ? getGetRealmAuthenticationUnregisteredRequiredActionsKey(args)
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
                (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
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
          client[':realm'].authentication['unregistered-required-actions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClearKeysCacheKey() {
  return [':realm', '/:realm/clear-keys-cache', 'POST'] as const
}

export function usePostRealmClearKeysCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clear-keys-cache']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clear-keys-cache']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClearKeysCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['clear-keys-cache']['$post']> },
      ) => parseResponse(client[':realm']['clear-keys-cache'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmClearRealmCacheKey() {
  return [':realm', '/:realm/clear-realm-cache', 'POST'] as const
}

export function usePostRealmClearRealmCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clear-realm-cache']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clear-realm-cache']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClearRealmCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['clear-realm-cache']['$post']> },
      ) => parseResponse(client[':realm']['clear-realm-cache'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmClearUserCacheKey() {
  return [':realm', '/:realm/clear-user-cache', 'POST'] as const
}

export function usePostRealmClearUserCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clear-user-cache']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clear-user-cache']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClearUserCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['clear-user-cache']['$post']> },
      ) => parseResponse(client[':realm']['clear-user-cache'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmClientDescriptionConverterKey() {
  return [':realm', '/:realm/client-description-converter', 'POST'] as const
}

export function usePostRealmClientDescriptionConverter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['client-description-converter']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['client-description-converter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientDescriptionConverterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':realm']['client-description-converter']['$post']>
        },
      ) =>
        parseResponse(client[':realm']['client-description-converter'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientRegistrationPolicyProvidersKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-registration-policy']['providers']['$get']
  >,
) {
  return [':realm', '/:realm/client-registration-policy/providers', args] as const
}

export function useGetRealmClientRegistrationPolicyProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-registration-policy']['providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-registration-policy']['providers']['$get']
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
        ? getGetRealmClientRegistrationPolicyProvidersKey(args)
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
                (typeof client)[':realm']['client-registration-policy']['providers']['$get']
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
          client[':realm']['client-registration-policy'].providers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientRegistrationPolicyProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-registration-policy']['providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-registration-policy']['providers']['$get']
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
        ? getGetRealmClientRegistrationPolicyProvidersKey(args)
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
                (typeof client)[':realm']['client-registration-policy']['providers']['$get']
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
          client[':realm']['client-registration-policy'].providers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientScopesKey(
  args: InferRequestType<(typeof client)[':realm']['client-scopes']['$get']>,
) {
  return [':realm', '/:realm/client-scopes', args] as const
}

export function useGetRealmClientScopes<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['client-scopes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>
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
        ? getGetRealmClientScopesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm']['client-scopes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopes<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['client-scopes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>
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
        ? getGetRealmClientScopesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm']['client-scopes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientScopesKey() {
  return [':realm', '/:realm/client-scopes', 'POST'] as const
}

export function usePostRealmClientScopes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['client-scopes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientScopesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['client-scopes']['$post']> },
      ) => parseResponse(client[':realm']['client-scopes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientScopesId1ProtocolMappersModelsId2Key(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id1/protocol-mappers/models/:id2', args] as const
}

export function useGetRealmClientScopesId1ProtocolMappersModelsId2<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
        ? getGetRealmClientScopesId1ProtocolMappersModelsId2Key(args)
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
                (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
          client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopesId1ProtocolMappersModelsId2<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
        ? getGetRealmClientScopesId1ProtocolMappersModelsId2Key(args)
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
                (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
          client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmClientScopesId1ProtocolMappersModelsId2Key() {
  return [':realm', '/:realm/client-scopes/:id1/protocol-mappers/models/:id2', 'PUT'] as const
}

export function usePutRealmClientScopesId1ProtocolMappersModelsId2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmClientScopesId1ProtocolMappersModelsId2Key()
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
            (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientScopesId1ProtocolMappersModelsId2Key() {
  return [':realm', '/:realm/client-scopes/:id1/protocol-mappers/models/:id2', 'DELETE'] as const
}

export function useDeleteRealmClientScopesId1ProtocolMappersModelsId2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientScopesId1ProtocolMappersModelsId2Key()
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
            (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientScopesIdKey(
  args: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$get']>,
) {
  return [':realm', '/:realm/client-scopes/:id', args] as const
}

export function useGetRealmClientScopesId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
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
        ? getGetRealmClientScopesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm']['client-scopes'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopesId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
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
        ? getGetRealmClientScopesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm']['client-scopes'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmClientScopesIdKey() {
  return [':realm', '/:realm/client-scopes/:id', 'PUT'] as const
}

export function usePutRealmClientScopesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmClientScopesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$put']> },
      ) => parseResponse(client[':realm']['client-scopes'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientScopesIdKey() {
  return [':realm', '/:realm/client-scopes/:id', 'DELETE'] as const
}

export function useDeleteRealmClientScopesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientScopesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$delete']> },
      ) => parseResponse(client[':realm']['client-scopes'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmClientScopesIdProtocolMappersAddModelsKey() {
  return [':realm', '/:realm/client-scopes/:id/protocol-mappers/add-models', 'POST'] as const
}

export function usePostRealmClientScopesIdProtocolMappersAddModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['add-models']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['add-models']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientScopesIdProtocolMappersAddModelsKey()
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
            (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['add-models']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['client-scopes'][':id']['protocol-mappers']['add-models'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientScopesIdProtocolMappersModelsKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/protocol-mappers/models', args] as const
}

export function useGetRealmClientScopesIdProtocolMappersModels<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
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
        ? getGetRealmClientScopesIdProtocolMappersModelsKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
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
          client[':realm']['client-scopes'][':id']['protocol-mappers'].models.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopesIdProtocolMappersModels<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
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
        ? getGetRealmClientScopesIdProtocolMappersModelsKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
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
          client[':realm']['client-scopes'][':id']['protocol-mappers'].models.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientScopesIdProtocolMappersModelsKey() {
  return [':realm', '/:realm/client-scopes/:id/protocol-mappers/models', 'POST'] as const
}

export function usePostRealmClientScopesIdProtocolMappersModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientScopesIdProtocolMappersModelsKey()
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
            (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['client-scopes'][':id']['protocol-mappers'].models.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientScopesIdProtocolMappersProtocolProtocolKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/protocol-mappers/protocol/:protocol', args] as const
}

export function useGetRealmClientScopesIdProtocolMappersProtocolProtocol<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
        ? getGetRealmClientScopesIdProtocolMappersProtocolProtocolKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
          client[':realm']['client-scopes'][':id']['protocol-mappers'].protocol[':protocol'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopesIdProtocolMappersProtocolProtocol<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
        ? getGetRealmClientScopesIdProtocolMappersProtocolProtocolKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
          client[':realm']['client-scopes'][':id']['protocol-mappers'].protocol[':protocol'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientScopesIdScopeMappingsKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings', args] as const
}

export function useGetRealmClientScopesIdScopeMappings<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopesIdScopeMappings<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientScopesIdScopeMappingsClientsClientKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/clients/:client', args] as const
}

export function useGetRealmClientScopesIdScopeMappingsClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsClientsClientKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopesIdScopeMappingsClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsClientsClientKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientScopesIdScopeMappingsClientsClientKey() {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/clients/:client', 'POST'] as const
}

export function usePostRealmClientScopesIdScopeMappingsClientsClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientScopesIdScopeMappingsClientsClientKey()
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
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientScopesIdScopeMappingsClientsClientKey() {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/clients/:client', 'DELETE'] as const
}

export function useDeleteRealmClientScopesIdScopeMappingsClientsClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientScopesIdScopeMappingsClientsClientKey()
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
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientScopesIdScopeMappingsClientsClientAvailableKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/client-scopes/:id/scope-mappings/clients/:client/available',
    args,
  ] as const
}

export function useGetRealmClientScopesIdScopeMappingsClientsClientAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsClientsClientAvailableKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].clients[
            ':client'
          ].available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopesIdScopeMappingsClientsClientAvailable<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsClientsClientAvailableKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].clients[
            ':client'
          ].available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientScopesIdScopeMappingsClientsClientCompositeKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/client-scopes/:id/scope-mappings/clients/:client/composite',
    args,
  ] as const
}

export function useGetRealmClientScopesIdScopeMappingsClientsClientComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsClientsClientCompositeKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].clients[
            ':client'
          ].composite.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopesIdScopeMappingsClientsClientComposite<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsClientsClientCompositeKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].clients[
            ':client'
          ].composite.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientScopesIdScopeMappingsRealmKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/realm', args] as const
}

export function useGetRealmClientScopesIdScopeMappingsRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsRealmKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopesIdScopeMappingsRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsRealmKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientScopesIdScopeMappingsRealmKey() {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/realm', 'POST'] as const
}

export function usePostRealmClientScopesIdScopeMappingsRealm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientScopesIdScopeMappingsRealmKey()
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
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientScopesIdScopeMappingsRealmKey() {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/realm', 'DELETE'] as const
}

export function useDeleteRealmClientScopesIdScopeMappingsRealm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientScopesIdScopeMappingsRealmKey()
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
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientScopesIdScopeMappingsRealmAvailableKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/realm/available', args] as const
}

export function useGetRealmClientScopesIdScopeMappingsRealmAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsRealmAvailableKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].realm.available.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopesIdScopeMappingsRealmAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsRealmAvailableKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].realm.available.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientScopesIdScopeMappingsRealmCompositeKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/realm/composite', args] as const
}

export function useGetRealmClientScopesIdScopeMappingsRealmComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsRealmCompositeKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].realm.composite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientScopesIdScopeMappingsRealmComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
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
        ? getGetRealmClientScopesIdScopeMappingsRealmCompositeKey(args)
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
                (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
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
          client[':realm']['client-scopes'][':id']['scope-mappings'].realm.composite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientSessionStatsKey(
  args: InferRequestType<(typeof client)[':realm']['client-session-stats']['$get']>,
) {
  return [':realm', '/:realm/client-session-stats', args] as const
}

export function useGetRealmClientSessionStats<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['client-session-stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
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
        ? getGetRealmClientSessionStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm']['client-session-stats'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientSessionStats<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['client-session-stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
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
        ? getGetRealmClientSessionStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm']['client-session-stats'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsKey(
  args: InferRequestType<(typeof client)[':realm']['clients']['$get']>,
) {
  return [':realm', '/:realm/clients', args] as const
}

export function useGetRealmClients<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClients<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientsKey() {
  return [':realm', '/:realm/clients', 'POST'] as const
}

export function usePostRealmClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['clients']['$post']> },
      ) => parseResponse(client[':realm'].clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsInitialAccessKey(
  args: InferRequestType<(typeof client)[':realm']['clients-initial-access']['$get']>,
) {
  return [':realm', '/:realm/clients-initial-access', args] as const
}

export function useGetRealmClientsInitialAccess<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients-initial-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
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
        ? getGetRealmClientsInitialAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['clients-initial-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsInitialAccess<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients-initial-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
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
        ? getGetRealmClientsInitialAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['clients-initial-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientsInitialAccessKey() {
  return [':realm', '/:realm/clients-initial-access', 'POST'] as const
}

export function usePostRealmClientsInitialAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients-initial-access']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsInitialAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['clients-initial-access']['$post']> },
      ) => parseResponse(client[':realm']['clients-initial-access'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientsInitialAccessIdKey() {
  return [':realm', '/:realm/clients-initial-access/:id', 'DELETE'] as const
}

export function useDeleteRealmClientsInitialAccessId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients-initial-access'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientsInitialAccessIdKey()
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
            (typeof client)[':realm']['clients-initial-access'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['clients-initial-access'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsId1ProtocolMappersModelsId2Key(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id1/protocol-mappers/models/:id2', args] as const
}

export function useGetRealmClientsId1ProtocolMappersModelsId2<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
        ? getGetRealmClientsId1ProtocolMappersModelsId2Key(args)
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
                (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
          client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsId1ProtocolMappersModelsId2<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
        ? getGetRealmClientsId1ProtocolMappersModelsId2Key(args)
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
                (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
          client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmClientsId1ProtocolMappersModelsId2Key() {
  return [':realm', '/:realm/clients/:id1/protocol-mappers/models/:id2', 'PUT'] as const
}

export function usePutRealmClientsId1ProtocolMappersModelsId2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmClientsId1ProtocolMappersModelsId2Key()
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
            (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientsId1ProtocolMappersModelsId2Key() {
  return [':realm', '/:realm/clients/:id1/protocol-mappers/models/:id2', 'DELETE'] as const
}

export function useDeleteRealmClientsId1ProtocolMappersModelsId2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientsId1ProtocolMappersModelsId2Key()
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
            (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['$get']>,
) {
  return [':realm', '/:realm/clients/:id', args] as const
}

export function useGetRealmClientsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRealmClientsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].clients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRealmClientsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].clients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmClientsIdKey() {
  return [':realm', '/:realm/clients/:id', 'PUT'] as const
}

export function usePutRealmClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmClientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['clients'][':id']['$put']> },
      ) => parseResponse(client[':realm'].clients[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientsIdKey() {
  return [':realm', '/:realm/clients/:id', 'DELETE'] as const
}

export function useDeleteRealmClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['clients'][':id']['$delete']> },
      ) => parseResponse(client[':realm'].clients[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdCertificatesAttrKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/certificates/:attr', args] as const
}

export function useGetRealmClientsIdCertificatesAttr<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
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
        ? getGetRealmClientsIdCertificatesAttrKey(args)
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
                (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
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
          client[':realm'].clients[':id'].certificates[':attr'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdCertificatesAttr<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
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
        ? getGetRealmClientsIdCertificatesAttrKey(args)
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
                (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
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
          client[':realm'].clients[':id'].certificates[':attr'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientsIdCertificatesAttrDownloadKey() {
  return [':realm', '/:realm/clients/:id/certificates/:attr/download', 'POST'] as const
}

export function usePostRealmClientsIdCertificatesAttrDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['download']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['download']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdCertificatesAttrDownloadKey()
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
            (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['download']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id'].certificates[':attr'].download.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmClientsIdCertificatesAttrGenerateKey() {
  return [':realm', '/:realm/clients/:id/certificates/:attr/generate', 'POST'] as const
}

export function usePostRealmClientsIdCertificatesAttrGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdCertificatesAttrGenerateKey()
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
            (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id'].certificates[':attr'].generate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmClientsIdCertificatesAttrGenerateAndDownloadKey() {
  return [':realm', '/:realm/clients/:id/certificates/:attr/generate-and-download', 'POST'] as const
}

export function usePostRealmClientsIdCertificatesAttrGenerateAndDownload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate-and-download']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate-and-download']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdCertificatesAttrGenerateAndDownloadKey()
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
            (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate-and-download']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id'].certificates[':attr']['generate-and-download'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmClientsIdCertificatesAttrUploadKey() {
  return [':realm', '/:realm/clients/:id/certificates/:attr/upload', 'POST'] as const
}

export function usePostRealmClientsIdCertificatesAttrUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdCertificatesAttrUploadKey()
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
            (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id'].certificates[':attr'].upload.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmClientsIdCertificatesAttrUploadCertificateKey() {
  return [':realm', '/:realm/clients/:id/certificates/:attr/upload-certificate', 'POST'] as const
}

export function usePostRealmClientsIdCertificatesAttrUploadCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload-certificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload-certificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdCertificatesAttrUploadCertificateKey()
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
            (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload-certificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id'].certificates[':attr']['upload-certificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdClientSecretKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/client-secret', args] as const
}

export function useGetRealmClientsIdClientSecret<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>
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
        ? getGetRealmClientsIdClientSecretKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].clients[':id']['client-secret'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdClientSecret<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>
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
        ? getGetRealmClientsIdClientSecretKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].clients[':id']['client-secret'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientsIdClientSecretKey() {
  return [':realm', '/:realm/clients/:id/client-secret', 'POST'] as const
}

export function usePostRealmClientsIdClientSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdClientSecretKey()
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
            (typeof client)[':realm']['clients'][':id']['client-secret']['$post']
          >
        },
      ) =>
        parseResponse(client[':realm'].clients[':id']['client-secret'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdDefaultClientScopesKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/default-client-scopes', args] as const
}

export function useGetRealmClientsIdDefaultClientScopes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
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
        ? getGetRealmClientsIdDefaultClientScopesKey(args)
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
                (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
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
          client[':realm'].clients[':id']['default-client-scopes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdDefaultClientScopes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
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
        ? getGetRealmClientsIdDefaultClientScopesKey(args)
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
                (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
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
          client[':realm'].clients[':id']['default-client-scopes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmClientsIdDefaultClientScopesClientScopeIdKey() {
  return [':realm', '/:realm/clients/:id/default-client-scopes/:clientScopeId', 'PUT'] as const
}

export function usePutRealmClientsIdDefaultClientScopesClientScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmClientsIdDefaultClientScopesClientScopeIdKey()
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
            (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id']['default-client-scopes'][':clientScopeId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientsIdDefaultClientScopesClientScopeIdKey() {
  return [':realm', '/:realm/clients/:id/default-client-scopes/:clientScopeId', 'DELETE'] as const
}

export function useDeleteRealmClientsIdDefaultClientScopesClientScopeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientsIdDefaultClientScopesClientScopeIdKey()
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
            (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id']['default-client-scopes'][':clientScopeId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/evaluate-scopes/generate-example-access-token',
    args,
  ] as const
}

export function useGetRealmClientsIdEvaluateScopesGenerateExampleAccessToken<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
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
        ? getGetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenKey(args)
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
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
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
          client[':realm'].clients[':id']['evaluate-scopes']['generate-example-access-token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdEvaluateScopesGenerateExampleAccessToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
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
        ? getGetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenKey(args)
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
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
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
          client[':realm'].clients[':id']['evaluate-scopes']['generate-example-access-token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdEvaluateScopesProtocolMappersKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/evaluate-scopes/protocol-mappers', args] as const
}

export function useGetRealmClientsIdEvaluateScopesProtocolMappers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
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
        ? getGetRealmClientsIdEvaluateScopesProtocolMappersKey(args)
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
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
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
          client[':realm'].clients[':id']['evaluate-scopes']['protocol-mappers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdEvaluateScopesProtocolMappers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
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
        ? getGetRealmClientsIdEvaluateScopesProtocolMappersKey(args)
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
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
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
          client[':realm'].clients[':id']['evaluate-scopes']['protocol-mappers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/evaluate-scopes/scope-mappings/:roleContainerId/granted',
    args,
  ] as const
}

export function useGetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
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
        ? getGetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedKey(args)
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
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
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
          client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][
            ':roleContainerId'
          ].granted.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
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
        ? getGetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedKey(args)
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
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
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
          client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][
            ':roleContainerId'
          ].granted.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/evaluate-scopes/scope-mappings/:roleContainerId/not-granted',
    args,
  ] as const
}

export function useGetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
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
        ? getGetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedKey(args)
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
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
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
          client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][':roleContainerId'][
            'not-granted'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
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
        ? getGetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedKey(args)
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
                (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
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
          client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][':roleContainerId'][
            'not-granted'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdInstallationProvidersProviderIdKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/installation/providers/:providerId', args] as const
}

export function useGetRealmClientsIdInstallationProvidersProviderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
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
        ? getGetRealmClientsIdInstallationProvidersProviderIdKey(args)
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
                (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
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
          client[':realm'].clients[':id'].installation.providers[':providerId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdInstallationProvidersProviderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
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
        ? getGetRealmClientsIdInstallationProvidersProviderIdKey(args)
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
                (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
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
          client[':realm'].clients[':id'].installation.providers[':providerId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdManagementPermissionsKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/management/permissions', args] as const
}

export function useGetRealmClientsIdManagementPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
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
        ? getGetRealmClientsIdManagementPermissionsKey(args)
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
                (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
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
          client[':realm'].clients[':id'].management.permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdManagementPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
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
        ? getGetRealmClientsIdManagementPermissionsKey(args)
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
                (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
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
          client[':realm'].clients[':id'].management.permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmClientsIdManagementPermissionsKey() {
  return [':realm', '/:realm/clients/:id/management/permissions', 'PUT'] as const
}

export function usePutRealmClientsIdManagementPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['management']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmClientsIdManagementPermissionsKey()
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
            (typeof client)[':realm']['clients'][':id']['management']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id'].management.permissions.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmClientsIdNodesKey() {
  return [':realm', '/:realm/clients/:id/nodes', 'POST'] as const
}

export function usePostRealmClientsIdNodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['nodes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['nodes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdNodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['clients'][':id']['nodes']['$post']> },
      ) => parseResponse(client[':realm'].clients[':id'].nodes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientsIdNodesNodeKey() {
  return [':realm', '/:realm/clients/:id/nodes/:node', 'DELETE'] as const
}

export function useDeleteRealmClientsIdNodesNode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['nodes'][':node']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['nodes'][':node']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientsIdNodesNodeKey()
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
            (typeof client)[':realm']['clients'][':id']['nodes'][':node']['$delete']
          >
        },
      ) =>
        parseResponse(client[':realm'].clients[':id'].nodes[':node'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdOfflineSessionCountKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/offline-session-count', args] as const
}

export function useGetRealmClientsIdOfflineSessionCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
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
        ? getGetRealmClientsIdOfflineSessionCountKey(args)
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
                (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
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
          client[':realm'].clients[':id']['offline-session-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdOfflineSessionCount<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
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
        ? getGetRealmClientsIdOfflineSessionCountKey(args)
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
                (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
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
          client[':realm'].clients[':id']['offline-session-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdOfflineSessionsKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/offline-sessions', args] as const
}

export function useGetRealmClientsIdOfflineSessions<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>
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
        ? getGetRealmClientsIdOfflineSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':realm'].clients[':id']['offline-sessions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdOfflineSessions<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>
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
        ? getGetRealmClientsIdOfflineSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':realm'].clients[':id']['offline-sessions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdOptionalClientScopesKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/optional-client-scopes', args] as const
}

export function useGetRealmClientsIdOptionalClientScopes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
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
        ? getGetRealmClientsIdOptionalClientScopesKey(args)
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
                (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
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
          client[':realm'].clients[':id']['optional-client-scopes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdOptionalClientScopes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
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
        ? getGetRealmClientsIdOptionalClientScopesKey(args)
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
                (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
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
          client[':realm'].clients[':id']['optional-client-scopes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmClientsIdOptionalClientScopesClientScopeIdKey() {
  return [':realm', '/:realm/clients/:id/optional-client-scopes/:clientScopeId', 'PUT'] as const
}

export function usePutRealmClientsIdOptionalClientScopesClientScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmClientsIdOptionalClientScopesClientScopeIdKey()
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
            (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id']['optional-client-scopes'][':clientScopeId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientsIdOptionalClientScopesClientScopeIdKey() {
  return [':realm', '/:realm/clients/:id/optional-client-scopes/:clientScopeId', 'DELETE'] as const
}

export function useDeleteRealmClientsIdOptionalClientScopesClientScopeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientsIdOptionalClientScopesClientScopeIdKey()
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
            (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id']['optional-client-scopes'][':clientScopeId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmClientsIdProtocolMappersAddModelsKey() {
  return [':realm', '/:realm/clients/:id/protocol-mappers/add-models', 'POST'] as const
}

export function usePostRealmClientsIdProtocolMappersAddModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['protocol-mappers']['add-models']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['protocol-mappers']['add-models']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdProtocolMappersAddModelsKey()
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
            (typeof client)[':realm']['clients'][':id']['protocol-mappers']['add-models']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id']['protocol-mappers']['add-models'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdProtocolMappersModelsKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/protocol-mappers/models', args] as const
}

export function useGetRealmClientsIdProtocolMappersModels<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
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
        ? getGetRealmClientsIdProtocolMappersModelsKey(args)
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
                (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
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
          client[':realm'].clients[':id']['protocol-mappers'].models.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdProtocolMappersModels<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
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
        ? getGetRealmClientsIdProtocolMappersModelsKey(args)
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
                (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
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
          client[':realm'].clients[':id']['protocol-mappers'].models.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientsIdProtocolMappersModelsKey() {
  return [':realm', '/:realm/clients/:id/protocol-mappers/models', 'POST'] as const
}

export function usePostRealmClientsIdProtocolMappersModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdProtocolMappersModelsKey()
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
            (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id']['protocol-mappers'].models.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdProtocolMappersProtocolProtocolKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/protocol-mappers/protocol/:protocol', args] as const
}

export function useGetRealmClientsIdProtocolMappersProtocolProtocol<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
        ? getGetRealmClientsIdProtocolMappersProtocolProtocolKey(args)
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
                (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
          client[':realm'].clients[':id']['protocol-mappers'].protocol[':protocol'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdProtocolMappersProtocolProtocol<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
        ? getGetRealmClientsIdProtocolMappersProtocolProtocolKey(args)
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
                (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
          client[':realm'].clients[':id']['protocol-mappers'].protocol[':protocol'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientsIdPushRevocationKey() {
  return [':realm', '/:realm/clients/:id/push-revocation', 'POST'] as const
}

export function usePostRealmClientsIdPushRevocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['push-revocation']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['push-revocation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdPushRevocationKey()
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
            (typeof client)[':realm']['clients'][':id']['push-revocation']['$post']
          >
        },
      ) =>
        parseResponse(client[':realm'].clients[':id']['push-revocation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmClientsIdRegistrationAccessTokenKey() {
  return [':realm', '/:realm/clients/:id/registration-access-token', 'POST'] as const
}

export function usePostRealmClientsIdRegistrationAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['registration-access-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['registration-access-token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdRegistrationAccessTokenKey()
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
            (typeof client)[':realm']['clients'][':id']['registration-access-token']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id']['registration-access-token'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdRolesKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/roles', args] as const
}

export function useGetRealmClientsIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
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
        ? getGetRealmClientsIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].clients[':id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
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
        ? getGetRealmClientsIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].clients[':id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientsIdRolesKey() {
  return [':realm', '/:realm/clients/:id/roles', 'POST'] as const
}

export function usePostRealmClientsIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$post']> },
      ) => parseResponse(client[':realm'].clients[':id'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdRolesRoleNameKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name', args] as const
}

export function useGetRealmClientsIdRolesRoleName<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']>
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
        ? getGetRealmClientsIdRolesRoleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdRolesRoleName<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']>
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
        ? getGetRealmClientsIdRolesRoleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmClientsIdRolesRoleNameKey() {
  return [':realm', '/:realm/clients/:id/roles/:role-name', 'PUT'] as const
}

export function usePutRealmClientsIdRolesRoleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmClientsIdRolesRoleNameKey()
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
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$put']
          >
        },
      ) =>
        parseResponse(client[':realm'].clients[':id'].roles[':role-name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientsIdRolesRoleNameKey() {
  return [':realm', '/:realm/clients/:id/roles/:role-name', 'DELETE'] as const
}

export function useDeleteRealmClientsIdRolesRoleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientsIdRolesRoleNameKey()
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
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdRolesRoleNameCompositesKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/composites', args] as const
}

export function useGetRealmClientsIdRolesRoleNameComposites<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameCompositesKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].composites.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdRolesRoleNameComposites<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameCompositesKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].composites.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientsIdRolesRoleNameCompositesKey() {
  return [':realm', '/:realm/clients/:id/roles/:role-name/composites', 'POST'] as const
}

export function usePostRealmClientsIdRolesRoleNameComposites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdRolesRoleNameCompositesKey()
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
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].composites.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientsIdRolesRoleNameCompositesKey() {
  return [':realm', '/:realm/clients/:id/roles/:role-name/composites', 'DELETE'] as const
}

export function useDeleteRealmClientsIdRolesRoleNameComposites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientsIdRolesRoleNameCompositesKey()
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
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].composites.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdRolesRoleNameCompositesClientsClientKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/roles/:role-name/composites/clients/:client',
    args,
  ] as const
}

export function useGetRealmClientsIdRolesRoleNameCompositesClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameCompositesClientsClientKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].composites.clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdRolesRoleNameCompositesClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameCompositesClientsClientKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].composites.clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdRolesRoleNameCompositesRealmKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/composites/realm', args] as const
}

export function useGetRealmClientsIdRolesRoleNameCompositesRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameCompositesRealmKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].composites.realm.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdRolesRoleNameCompositesRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameCompositesRealmKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].composites.realm.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdRolesRoleNameGroupsKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/groups', args] as const
}

export function useGetRealmClientsIdRolesRoleNameGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameGroupsKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdRolesRoleNameGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameGroupsKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdRolesRoleNameManagementPermissionsKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/management/permissions', args] as const
}

export function useGetRealmClientsIdRolesRoleNameManagementPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameManagementPermissionsKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].management.permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdRolesRoleNameManagementPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameManagementPermissionsKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].management.permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmClientsIdRolesRoleNameManagementPermissionsKey() {
  return [':realm', '/:realm/clients/:id/roles/:role-name/management/permissions', 'PUT'] as const
}

export function usePutRealmClientsIdRolesRoleNameManagementPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmClientsIdRolesRoleNameManagementPermissionsKey()
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
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].management.permissions.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdRolesRoleNameUsersKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/users', args] as const
}

export function useGetRealmClientsIdRolesRoleNameUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameUsersKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdRolesRoleNameUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
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
        ? getGetRealmClientsIdRolesRoleNameUsersKey(args)
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
                (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
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
          client[':realm'].clients[':id'].roles[':role-name'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdScopeMappingsKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings', args] as const
}

export function useGetRealmClientsIdScopeMappings<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>
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
        ? getGetRealmClientsIdScopeMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].clients[':id']['scope-mappings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdScopeMappings<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>
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
        ? getGetRealmClientsIdScopeMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].clients[':id']['scope-mappings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdScopeMappingsClientsClientKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/clients/:client', args] as const
}

export function useGetRealmClientsIdScopeMappingsClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
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
        ? getGetRealmClientsIdScopeMappingsClientsClientKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdScopeMappingsClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
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
        ? getGetRealmClientsIdScopeMappingsClientsClientKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientsIdScopeMappingsClientsClientKey() {
  return [':realm', '/:realm/clients/:id/scope-mappings/clients/:client', 'POST'] as const
}

export function usePostRealmClientsIdScopeMappingsClientsClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdScopeMappingsClientsClientKey()
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
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientsIdScopeMappingsClientsClientKey() {
  return [':realm', '/:realm/clients/:id/scope-mappings/clients/:client', 'DELETE'] as const
}

export function useDeleteRealmClientsIdScopeMappingsClientsClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientsIdScopeMappingsClientsClientKey()
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
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdScopeMappingsClientsClientAvailableKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/clients/:client/available', args] as const
}

export function useGetRealmClientsIdScopeMappingsClientsClientAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
        ? getGetRealmClientsIdScopeMappingsClientsClientAvailableKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].clients[':client'].available.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdScopeMappingsClientsClientAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
        ? getGetRealmClientsIdScopeMappingsClientsClientAvailableKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].clients[':client'].available.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdScopeMappingsClientsClientCompositeKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/clients/:client/composite', args] as const
}

export function useGetRealmClientsIdScopeMappingsClientsClientComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
        ? getGetRealmClientsIdScopeMappingsClientsClientCompositeKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].clients[':client'].composite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdScopeMappingsClientsClientComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
        ? getGetRealmClientsIdScopeMappingsClientsClientCompositeKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].clients[':client'].composite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdScopeMappingsRealmKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm', args] as const
}

export function useGetRealmClientsIdScopeMappingsRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
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
        ? getGetRealmClientsIdScopeMappingsRealmKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].realm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdScopeMappingsRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
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
        ? getGetRealmClientsIdScopeMappingsRealmKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].realm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmClientsIdScopeMappingsRealmKey() {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm', 'POST'] as const
}

export function usePostRealmClientsIdScopeMappingsRealm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmClientsIdScopeMappingsRealmKey()
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
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id']['scope-mappings'].realm.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmClientsIdScopeMappingsRealmKey() {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm', 'DELETE'] as const
}

export function useDeleteRealmClientsIdScopeMappingsRealm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmClientsIdScopeMappingsRealmKey()
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
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].clients[':id']['scope-mappings'].realm.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmClientsIdScopeMappingsRealmAvailableKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm/available', args] as const
}

export function useGetRealmClientsIdScopeMappingsRealmAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
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
        ? getGetRealmClientsIdScopeMappingsRealmAvailableKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].realm.available.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdScopeMappingsRealmAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
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
        ? getGetRealmClientsIdScopeMappingsRealmAvailableKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].realm.available.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdScopeMappingsRealmCompositeKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm/composite', args] as const
}

export function useGetRealmClientsIdScopeMappingsRealmComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
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
        ? getGetRealmClientsIdScopeMappingsRealmCompositeKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].realm.composite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdScopeMappingsRealmComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
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
        ? getGetRealmClientsIdScopeMappingsRealmCompositeKey(args)
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
                (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
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
          client[':realm'].clients[':id']['scope-mappings'].realm.composite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdServiceAccountUserKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/service-account-user', args] as const
}

export function useGetRealmClientsIdServiceAccountUser<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
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
        ? getGetRealmClientsIdServiceAccountUserKey(args)
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
                (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
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
          client[':realm'].clients[':id']['service-account-user'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdServiceAccountUser<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
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
        ? getGetRealmClientsIdServiceAccountUserKey(args)
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
                (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
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
          client[':realm'].clients[':id']['service-account-user'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdSessionCountKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/session-count', args] as const
}

export function useGetRealmClientsIdSessionCount<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>
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
        ? getGetRealmClientsIdSessionCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].clients[':id']['session-count'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdSessionCount<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>
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
        ? getGetRealmClientsIdSessionCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].clients[':id']['session-count'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdTestNodesAvailableKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/test-nodes-available', args] as const
}

export function useGetRealmClientsIdTestNodesAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
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
        ? getGetRealmClientsIdTestNodesAvailableKey(args)
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
                (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
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
          client[':realm'].clients[':id']['test-nodes-available'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdTestNodesAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
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
        ? getGetRealmClientsIdTestNodesAvailableKey(args)
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
                (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
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
          client[':realm'].clients[':id']['test-nodes-available'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmClientsIdUserSessionsKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/user-sessions', args] as const
}

export function useGetRealmClientsIdUserSessions<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>
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
        ? getGetRealmClientsIdUserSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].clients[':id']['user-sessions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmClientsIdUserSessions<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>
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
        ? getGetRealmClientsIdUserSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].clients[':id']['user-sessions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmComponentsKey(
  args: InferRequestType<(typeof client)[':realm']['components']['$get']>,
) {
  return [':realm', '/:realm/components', args] as const
}

export function useGetRealmComponents<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['components']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRealmComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmComponents<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['components']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRealmComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmComponentsKey() {
  return [':realm', '/:realm/components', 'POST'] as const
}

export function usePostRealmComponents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['components']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['components']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmComponentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['components']['$post']> },
      ) => parseResponse(client[':realm'].components.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmComponentsIdKey(
  args: InferRequestType<(typeof client)[':realm']['components'][':id']['$get']>,
) {
  return [':realm', '/:realm/components/:id', args] as const
}

export function useGetRealmComponentsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['components'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
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
        ? getGetRealmComponentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].components[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmComponentsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['components'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
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
        ? getGetRealmComponentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].components[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmComponentsIdKey() {
  return [':realm', '/:realm/components/:id', 'PUT'] as const
}

export function usePutRealmComponentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['components'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmComponentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['components'][':id']['$put']> },
      ) => parseResponse(client[':realm'].components[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmComponentsIdKey() {
  return [':realm', '/:realm/components/:id', 'DELETE'] as const
}

export function useDeleteRealmComponentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['components'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmComponentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['components'][':id']['$delete']> },
      ) => parseResponse(client[':realm'].components[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmComponentsIdSubComponentTypesKey(
  args: InferRequestType<
    (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
  >,
) {
  return [':realm', '/:realm/components/:id/sub-component-types', args] as const
}

export function useGetRealmComponentsIdSubComponentTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
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
        ? getGetRealmComponentsIdSubComponentTypesKey(args)
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
                (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
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
          client[':realm'].components[':id']['sub-component-types'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmComponentsIdSubComponentTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
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
        ? getGetRealmComponentsIdSubComponentTypesKey(args)
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
                (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
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
          client[':realm'].components[':id']['sub-component-types'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmCredentialRegistratorsKey(
  args: InferRequestType<(typeof client)[':realm']['credential-registrators']['$get']>,
) {
  return [':realm', '/:realm/credential-registrators', args] as const
}

export function useGetRealmCredentialRegistrators<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['credential-registrators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
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
        ? getGetRealmCredentialRegistratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['credential-registrators'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmCredentialRegistrators<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['credential-registrators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
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
        ? getGetRealmCredentialRegistratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['credential-registrators'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmDefaultDefaultClientScopesKey(
  args: InferRequestType<(typeof client)[':realm']['default-default-client-scopes']['$get']>,
) {
  return [':realm', '/:realm/default-default-client-scopes', args] as const
}

export function useGetRealmDefaultDefaultClientScopes<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['default-default-client-scopes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-default-client-scopes']['$get']>>
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
        ? getGetRealmDefaultDefaultClientScopesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-default-client-scopes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['default-default-client-scopes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmDefaultDefaultClientScopes<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['default-default-client-scopes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-default-client-scopes']['$get']>>
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
        ? getGetRealmDefaultDefaultClientScopesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-default-client-scopes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['default-default-client-scopes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmDefaultDefaultClientScopesClientScopeIdKey() {
  return [':realm', '/:realm/default-default-client-scopes/:clientScopeId', 'PUT'] as const
}

export function usePutRealmDefaultDefaultClientScopesClientScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmDefaultDefaultClientScopesClientScopeIdKey()
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
            (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['default-default-client-scopes'][':clientScopeId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmDefaultDefaultClientScopesClientScopeIdKey() {
  return [':realm', '/:realm/default-default-client-scopes/:clientScopeId', 'DELETE'] as const
}

export function useDeleteRealmDefaultDefaultClientScopesClientScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmDefaultDefaultClientScopesClientScopeIdKey()
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
            (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['default-default-client-scopes'][':clientScopeId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmDefaultGroupsKey(
  args: InferRequestType<(typeof client)[':realm']['default-groups']['$get']>,
) {
  return [':realm', '/:realm/default-groups', args] as const
}

export function useGetRealmDefaultGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['default-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>
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
        ? getGetRealmDefaultGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm']['default-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmDefaultGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['default-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>
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
        ? getGetRealmDefaultGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm']['default-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmDefaultGroupsGroupIdKey() {
  return [':realm', '/:realm/default-groups/:groupId', 'PUT'] as const
}

export function usePutRealmDefaultGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['default-groups'][':groupId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmDefaultGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$put']>
        },
      ) => parseResponse(client[':realm']['default-groups'][':groupId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmDefaultGroupsGroupIdKey() {
  return [':realm', '/:realm/default-groups/:groupId', 'DELETE'] as const
}

export function useDeleteRealmDefaultGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['default-groups'][':groupId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmDefaultGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$delete']>
        },
      ) =>
        parseResponse(client[':realm']['default-groups'][':groupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmDefaultOptionalClientScopesKey(
  args: InferRequestType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>,
) {
  return [':realm', '/:realm/default-optional-client-scopes', args] as const
}

export function useGetRealmDefaultOptionalClientScopes<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>>
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
        ? getGetRealmDefaultOptionalClientScopesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['default-optional-client-scopes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmDefaultOptionalClientScopes<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>>
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
        ? getGetRealmDefaultOptionalClientScopesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['default-optional-client-scopes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmDefaultOptionalClientScopesClientScopeIdKey() {
  return [':realm', '/:realm/default-optional-client-scopes/:clientScopeId', 'PUT'] as const
}

export function usePutRealmDefaultOptionalClientScopesClientScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmDefaultOptionalClientScopesClientScopeIdKey()
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
            (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['default-optional-client-scopes'][':clientScopeId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmDefaultOptionalClientScopesClientScopeIdKey() {
  return [':realm', '/:realm/default-optional-client-scopes/:clientScopeId', 'DELETE'] as const
}

export function useDeleteRealmDefaultOptionalClientScopesClientScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmDefaultOptionalClientScopesClientScopeIdKey()
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
            (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['default-optional-client-scopes'][':clientScopeId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmEventsKey(
  args: InferRequestType<(typeof client)[':realm']['events']['$get']>,
) {
  return [':realm', '/:realm/events', args] as const
}

export function useGetRealmEvents<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmEvents<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRealmEventsKey() {
  return [':realm', '/:realm/events', 'DELETE'] as const
}

export function useDeleteRealmEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['events']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['events']['$delete']> },
      ) => parseResponse(client[':realm'].events.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmEventsConfigKey(
  args: InferRequestType<(typeof client)[':realm']['events']['config']['$get']>,
) {
  return [':realm', '/:realm/events/config', args] as const
}

export function useGetRealmEventsConfig<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['events']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
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
        ? getGetRealmEventsConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].events.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmEventsConfig<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['events']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
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
        ? getGetRealmEventsConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].events.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmEventsConfigKey() {
  return [':realm', '/:realm/events/config', 'PUT'] as const
}

export function usePutRealmEventsConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['events']['config']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmEventsConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['events']['config']['$put']> },
      ) => parseResponse(client[':realm'].events.config.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmGroupByPathPathKey(
  args: InferRequestType<(typeof client)[':realm']['group-by-path'][':path']['$get']>,
) {
  return [':realm', '/:realm/group-by-path/:path', args] as const
}

export function useGetRealmGroupByPathPath<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['group-by-path'][':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
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
        ? getGetRealmGroupByPathPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['group-by-path'][':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupByPathPath<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['group-by-path'][':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
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
        ? getGetRealmGroupByPathPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['group-by-path'][':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmGroupsKey(
  args: InferRequestType<(typeof client)[':realm']['groups']['$get']>,
) {
  return [':realm', '/:realm/groups', args] as const
}

export function useGetRealmGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmGroupsKey() {
  return [':realm', '/:realm/groups', 'POST'] as const
}

export function usePostRealmGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['groups']['$post']> },
      ) => parseResponse(client[':realm'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmGroupsCountKey(
  args: InferRequestType<(typeof client)[':realm']['groups']['count']['$get']>,
) {
  return [':realm', '/:realm/groups/count', args] as const
}

export function useGetRealmGroupsCount<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['groups']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
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
        ? getGetRealmGroupsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].groups.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupsCount<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['groups']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
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
        ? getGetRealmGroupsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].groups.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmGroupsIdKey(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['$get']>,
) {
  return [':realm', '/:realm/groups/:id', args] as const
}

export function useGetRealmGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRealmGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRealmGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmGroupsIdKey() {
  return [':realm', '/:realm/groups/:id', 'PUT'] as const
}

export function usePutRealmGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['groups'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['groups'][':id']['$put']> },
      ) => parseResponse(client[':realm'].groups[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmGroupsIdKey() {
  return [':realm', '/:realm/groups/:id', 'DELETE'] as const
}

export function useDeleteRealmGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['groups'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['groups'][':id']['$delete']> },
      ) => parseResponse(client[':realm'].groups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmGroupsIdChildrenKey() {
  return [':realm', '/:realm/groups/:id/children', 'POST'] as const
}

export function usePostRealmGroupsIdChildren<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['children']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['groups'][':id']['children']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmGroupsIdChildrenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':realm']['groups'][':id']['children']['$post']>
        },
      ) => parseResponse(client[':realm'].groups[':id'].children.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmGroupsIdManagementPermissionsKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/management/permissions', args] as const
}

export function useGetRealmGroupsIdManagementPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
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
        ? getGetRealmGroupsIdManagementPermissionsKey(args)
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
                (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
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
          client[':realm'].groups[':id'].management.permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupsIdManagementPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
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
        ? getGetRealmGroupsIdManagementPermissionsKey(args)
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
                (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
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
          client[':realm'].groups[':id'].management.permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmGroupsIdManagementPermissionsKey() {
  return [':realm', '/:realm/groups/:id/management/permissions', 'PUT'] as const
}

export function usePutRealmGroupsIdManagementPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['management']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmGroupsIdManagementPermissionsKey()
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
            (typeof client)[':realm']['groups'][':id']['management']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].groups[':id'].management.permissions.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmGroupsIdMembersKey(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['members']['$get']>,
) {
  return [':realm', '/:realm/groups/:id/members', args] as const
}

export function useGetRealmGroupsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
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
        ? getGetRealmGroupsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].groups[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
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
        ? getGetRealmGroupsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].groups[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmGroupsIdRoleMappingsKey(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>,
) {
  return [':realm', '/:realm/groups/:id/role-mappings', args] as const
}

export function useGetRealmGroupsIdRoleMappings<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>>
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
        ? getGetRealmGroupsIdRoleMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].groups[':id']['role-mappings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupsIdRoleMappings<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>>
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
        ? getGetRealmGroupsIdRoleMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].groups[':id']['role-mappings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmGroupsIdRoleMappingsClientsClientKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/clients/:client', args] as const
}

export function useGetRealmGroupsIdRoleMappingsClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsClientsClientKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupsIdRoleMappingsClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsClientsClientKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmGroupsIdRoleMappingsClientsClientKey() {
  return [':realm', '/:realm/groups/:id/role-mappings/clients/:client', 'POST'] as const
}

export function usePostRealmGroupsIdRoleMappingsClientsClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmGroupsIdRoleMappingsClientsClientKey()
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
            (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].groups[':id']['role-mappings'].clients[':client'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmGroupsIdRoleMappingsClientsClientKey() {
  return [':realm', '/:realm/groups/:id/role-mappings/clients/:client', 'DELETE'] as const
}

export function useDeleteRealmGroupsIdRoleMappingsClientsClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmGroupsIdRoleMappingsClientsClientKey()
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
            (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].groups[':id']['role-mappings'].clients[':client'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmGroupsIdRoleMappingsClientsClientAvailableKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/clients/:client/available', args] as const
}

export function useGetRealmGroupsIdRoleMappingsClientsClientAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsClientsClientAvailableKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].clients[':client'].available.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupsIdRoleMappingsClientsClientAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsClientsClientAvailableKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].clients[':client'].available.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmGroupsIdRoleMappingsClientsClientCompositeKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/clients/:client/composite', args] as const
}

export function useGetRealmGroupsIdRoleMappingsClientsClientComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsClientsClientCompositeKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].clients[':client'].composite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupsIdRoleMappingsClientsClientComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsClientsClientCompositeKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].clients[':client'].composite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmGroupsIdRoleMappingsRealmKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/realm', args] as const
}

export function useGetRealmGroupsIdRoleMappingsRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsRealmKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].realm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupsIdRoleMappingsRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsRealmKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].realm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmGroupsIdRoleMappingsRealmKey() {
  return [':realm', '/:realm/groups/:id/role-mappings/realm', 'POST'] as const
}

export function usePostRealmGroupsIdRoleMappingsRealm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmGroupsIdRoleMappingsRealmKey()
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
            (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].groups[':id']['role-mappings'].realm.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmGroupsIdRoleMappingsRealmKey() {
  return [':realm', '/:realm/groups/:id/role-mappings/realm', 'DELETE'] as const
}

export function useDeleteRealmGroupsIdRoleMappingsRealm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmGroupsIdRoleMappingsRealmKey()
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
            (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].groups[':id']['role-mappings'].realm.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmGroupsIdRoleMappingsRealmAvailableKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/realm/available', args] as const
}

export function useGetRealmGroupsIdRoleMappingsRealmAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsRealmAvailableKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].realm.available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupsIdRoleMappingsRealmAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsRealmAvailableKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].realm.available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmGroupsIdRoleMappingsRealmCompositeKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/realm/composite', args] as const
}

export function useGetRealmGroupsIdRoleMappingsRealmComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsRealmCompositeKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].realm.composite.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmGroupsIdRoleMappingsRealmComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
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
        ? getGetRealmGroupsIdRoleMappingsRealmCompositeKey(args)
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
                (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
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
          client[':realm'].groups[':id']['role-mappings'].realm.composite.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmIdentityProviderImportConfigKey() {
  return [':realm', '/:realm/identity-provider/import-config', 'POST'] as const
}

export function usePostRealmIdentityProviderImportConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['identity-provider']['import-config']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['identity-provider']['import-config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmIdentityProviderImportConfigKey()
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
            (typeof client)[':realm']['identity-provider']['import-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['identity-provider']['import-config'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmIdentityProviderInstancesKey(
  args: InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$get']>,
) {
  return [':realm', '/:realm/identity-provider/instances', args] as const
}

export function useGetRealmIdentityProviderInstances<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$get']>>
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
        ? getGetRealmIdentityProviderInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['identity-provider'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmIdentityProviderInstances<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$get']>>
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
        ? getGetRealmIdentityProviderInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['identity-provider'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmIdentityProviderInstancesKey() {
  return [':realm', '/:realm/identity-provider/instances', 'POST'] as const
}

export function usePostRealmIdentityProviderInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmIdentityProviderInstancesKey()
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
            (typeof client)[':realm']['identity-provider']['instances']['$post']
          >
        },
      ) => parseResponse(client[':realm']['identity-provider'].instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmIdentityProviderInstancesAliasKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias', args] as const
}

export function useGetRealmIdentityProviderInstancesAlias<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
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
          client[':realm']['identity-provider'].instances[':alias'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmIdentityProviderInstancesAlias<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
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
          client[':realm']['identity-provider'].instances[':alias'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmIdentityProviderInstancesAliasKey() {
  return [':realm', '/:realm/identity-provider/instances/:alias', 'PUT'] as const
}

export function usePutRealmIdentityProviderInstancesAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['identity-provider']['instances'][':alias']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmIdentityProviderInstancesAliasKey()
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
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['identity-provider'].instances[':alias'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmIdentityProviderInstancesAliasKey() {
  return [':realm', '/:realm/identity-provider/instances/:alias', 'DELETE'] as const
}

export function useDeleteRealmIdentityProviderInstancesAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmIdentityProviderInstancesAliasKey()
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
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['identity-provider'].instances[':alias'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmIdentityProviderInstancesAliasExportKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias/export', args] as const
}

export function useGetRealmIdentityProviderInstancesAliasExport<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasExportKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
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
          client[':realm']['identity-provider'].instances[':alias'].export.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmIdentityProviderInstancesAliasExport<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasExportKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
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
          client[':realm']['identity-provider'].instances[':alias'].export.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmIdentityProviderInstancesAliasManagementPermissionsKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/identity-provider/instances/:alias/management/permissions',
    args,
  ] as const
}

export function useGetRealmIdentityProviderInstancesAliasManagementPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasManagementPermissionsKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
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
          client[':realm']['identity-provider'].instances[':alias'].management.permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmIdentityProviderInstancesAliasManagementPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasManagementPermissionsKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
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
          client[':realm']['identity-provider'].instances[':alias'].management.permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmIdentityProviderInstancesAliasManagementPermissionsKey() {
  return [
    ':realm',
    '/:realm/identity-provider/instances/:alias/management/permissions',
    'PUT',
  ] as const
}

export function usePutRealmIdentityProviderInstancesAliasManagementPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmIdentityProviderInstancesAliasManagementPermissionsKey()
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
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['identity-provider'].instances[':alias'].management.permissions.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmIdentityProviderInstancesAliasMapperTypesKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias/mapper-types', args] as const
}

export function useGetRealmIdentityProviderInstancesAliasMapperTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasMapperTypesKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
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
          client[':realm']['identity-provider'].instances[':alias']['mapper-types'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmIdentityProviderInstancesAliasMapperTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasMapperTypesKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
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
          client[':realm']['identity-provider'].instances[':alias']['mapper-types'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmIdentityProviderInstancesAliasMappersKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias/mappers', args] as const
}

export function useGetRealmIdentityProviderInstancesAliasMappers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasMappersKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
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
          client[':realm']['identity-provider'].instances[':alias'].mappers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmIdentityProviderInstancesAliasMappers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasMappersKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
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
          client[':realm']['identity-provider'].instances[':alias'].mappers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmIdentityProviderInstancesAliasMappersKey() {
  return [':realm', '/:realm/identity-provider/instances/:alias/mappers', 'POST'] as const
}

export function usePostRealmIdentityProviderInstancesAliasMappers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmIdentityProviderInstancesAliasMappersKey()
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
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['identity-provider'].instances[':alias'].mappers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmIdentityProviderInstancesAliasMappersIdKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias/mappers/:id', args] as const
}

export function useGetRealmIdentityProviderInstancesAliasMappersId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasMappersIdKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
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
          client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmIdentityProviderInstancesAliasMappersId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
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
        ? getGetRealmIdentityProviderInstancesAliasMappersIdKey(args)
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
                (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
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
          client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmIdentityProviderInstancesAliasMappersIdKey() {
  return [':realm', '/:realm/identity-provider/instances/:alias/mappers/:id', 'PUT'] as const
}

export function usePutRealmIdentityProviderInstancesAliasMappersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmIdentityProviderInstancesAliasMappersIdKey()
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
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmIdentityProviderInstancesAliasMappersIdKey() {
  return [':realm', '/:realm/identity-provider/instances/:alias/mappers/:id', 'DELETE'] as const
}

export function useDeleteRealmIdentityProviderInstancesAliasMappersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmIdentityProviderInstancesAliasMappersIdKey()
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
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmIdentityProviderProvidersProviderIdKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/providers/:provider_id', args] as const
}

export function useGetRealmIdentityProviderProvidersProviderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
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
        ? getGetRealmIdentityProviderProvidersProviderIdKey(args)
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
                (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
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
          client[':realm']['identity-provider'].providers[':provider_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmIdentityProviderProvidersProviderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
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
        ? getGetRealmIdentityProviderProvidersProviderIdKey(args)
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
                (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
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
          client[':realm']['identity-provider'].providers[':provider_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmKeysKey(
  args: InferRequestType<(typeof client)[':realm']['keys']['$get']>,
) {
  return [':realm', '/:realm/keys', args] as const
}

export function useGetRealmKeys<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmKeys<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmLogoutAllKey() {
  return [':realm', '/:realm/logout-all', 'POST'] as const
}

export function usePostRealmLogoutAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['logout-all']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['logout-all']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmLogoutAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['logout-all']['$post']> },
      ) => parseResponse(client[':realm']['logout-all'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmPartialExportKey() {
  return [':realm', '/:realm/partial-export', 'POST'] as const
}

export function usePostRealmPartialExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['partial-export']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['partial-export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmPartialExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['partial-export']['$post']> },
      ) => parseResponse(client[':realm']['partial-export'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmPartialImportKey() {
  return [':realm', '/:realm/partialImport', 'POST'] as const
}

export function usePostRealmPartialImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['partialImport']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['partialImport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmPartialImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['partialImport']['$post']> },
      ) => parseResponse(client[':realm'].partialImport.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmPushRevocationKey() {
  return [':realm', '/:realm/push-revocation', 'POST'] as const
}

export function usePostRealmPushRevocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['push-revocation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['push-revocation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmPushRevocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['push-revocation']['$post']> },
      ) => parseResponse(client[':realm']['push-revocation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmRolesKey(
  args: InferRequestType<(typeof client)[':realm']['roles']['$get']>,
) {
  return [':realm', '/:realm/roles', args] as const
}

export function useGetRealmRoles<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmRolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRoles<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmRolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmRolesKey() {
  return [':realm', '/:realm/roles', 'POST'] as const
}

export function usePostRealmRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['roles']['$post']> },
      ) => parseResponse(client[':realm'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmRolesByIdRoleIdKey(
  args: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>,
) {
  return [':realm', '/:realm/roles-by-id/:role-id', args] as const
}

export function useGetRealmRolesByIdRoleId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
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
        ? getGetRealmRolesByIdRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['roles-by-id'][':role-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesByIdRoleId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
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
        ? getGetRealmRolesByIdRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['roles-by-id'][':role-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmRolesByIdRoleIdKey() {
  return [':realm', '/:realm/roles-by-id/:role-id', 'PUT'] as const
}

export function usePutRealmRolesByIdRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmRolesByIdRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$put']> },
      ) => parseResponse(client[':realm']['roles-by-id'][':role-id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmRolesByIdRoleIdKey() {
  return [':realm', '/:realm/roles-by-id/:role-id', 'DELETE'] as const
}

export function useDeleteRealmRolesByIdRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmRolesByIdRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$delete']>
        },
      ) => parseResponse(client[':realm']['roles-by-id'][':role-id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmRolesByIdRoleIdCompositesKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id/composites', args] as const
}

export function useGetRealmRolesByIdRoleIdComposites<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']>
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
        ? getGetRealmRolesByIdRoleIdCompositesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':realm']['roles-by-id'][':role-id'].composites.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesByIdRoleIdComposites<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']>
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
        ? getGetRealmRolesByIdRoleIdCompositesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':realm']['roles-by-id'][':role-id'].composites.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmRolesByIdRoleIdCompositesKey() {
  return [':realm', '/:realm/roles-by-id/:role-id/composites', 'POST'] as const
}

export function usePostRealmRolesByIdRoleIdComposites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmRolesByIdRoleIdCompositesKey()
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
            (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['roles-by-id'][':role-id'].composites.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmRolesByIdRoleIdCompositesKey() {
  return [':realm', '/:realm/roles-by-id/:role-id/composites', 'DELETE'] as const
}

export function useDeleteRealmRolesByIdRoleIdComposites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmRolesByIdRoleIdCompositesKey()
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
            (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['roles-by-id'][':role-id'].composites.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmRolesByIdRoleIdCompositesClientsClientKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id/composites/clients/:client', args] as const
}

export function useGetRealmRolesByIdRoleIdCompositesClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
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
        ? getGetRealmRolesByIdRoleIdCompositesClientsClientKey(args)
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
                (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
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
          client[':realm']['roles-by-id'][':role-id'].composites.clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesByIdRoleIdCompositesClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
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
        ? getGetRealmRolesByIdRoleIdCompositesClientsClientKey(args)
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
                (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
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
          client[':realm']['roles-by-id'][':role-id'].composites.clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmRolesByIdRoleIdCompositesRealmKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id/composites/realm', args] as const
}

export function useGetRealmRolesByIdRoleIdCompositesRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
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
        ? getGetRealmRolesByIdRoleIdCompositesRealmKey(args)
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
                (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
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
          client[':realm']['roles-by-id'][':role-id'].composites.realm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesByIdRoleIdCompositesRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
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
        ? getGetRealmRolesByIdRoleIdCompositesRealmKey(args)
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
                (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
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
          client[':realm']['roles-by-id'][':role-id'].composites.realm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmRolesByIdRoleIdManagementPermissionsKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id/management/permissions', args] as const
}

export function useGetRealmRolesByIdRoleIdManagementPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
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
        ? getGetRealmRolesByIdRoleIdManagementPermissionsKey(args)
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
                (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
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
          client[':realm']['roles-by-id'][':role-id'].management.permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesByIdRoleIdManagementPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
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
        ? getGetRealmRolesByIdRoleIdManagementPermissionsKey(args)
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
                (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
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
          client[':realm']['roles-by-id'][':role-id'].management.permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmRolesByIdRoleIdManagementPermissionsKey() {
  return [':realm', '/:realm/roles-by-id/:role-id/management/permissions', 'PUT'] as const
}

export function usePutRealmRolesByIdRoleIdManagementPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmRolesByIdRoleIdManagementPermissionsKey()
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
            (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['roles-by-id'][':role-id'].management.permissions.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmRolesRoleNameKey(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$get']>,
) {
  return [':realm', '/:realm/roles/:role-name', args] as const
}

export function useGetRealmRolesRoleName<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
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
        ? getGetRealmRolesRoleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].roles[':role-name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesRoleName<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
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
        ? getGetRealmRolesRoleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].roles[':role-name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmRolesRoleNameKey() {
  return [':realm', '/:realm/roles/:role-name', 'PUT'] as const
}

export function usePutRealmRolesRoleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmRolesRoleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$put']> },
      ) => parseResponse(client[':realm'].roles[':role-name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmRolesRoleNameKey() {
  return [':realm', '/:realm/roles/:role-name', 'DELETE'] as const
}

export function useDeleteRealmRolesRoleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmRolesRoleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$delete']> },
      ) => parseResponse(client[':realm'].roles[':role-name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmRolesRoleNameCompositesKey(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>,
) {
  return [':realm', '/:realm/roles/:role-name/composites', args] as const
}

export function useGetRealmRolesRoleNameComposites<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>
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
        ? getGetRealmRolesRoleNameCompositesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].roles[':role-name'].composites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesRoleNameComposites<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>
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
        ? getGetRealmRolesRoleNameCompositesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].roles[':role-name'].composites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmRolesRoleNameCompositesKey() {
  return [':realm', '/:realm/roles/:role-name/composites', 'POST'] as const
}

export function usePostRealmRolesRoleNameComposites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmRolesRoleNameCompositesKey()
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
            (typeof client)[':realm']['roles'][':role-name']['composites']['$post']
          >
        },
      ) => parseResponse(client[':realm'].roles[':role-name'].composites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmRolesRoleNameCompositesKey() {
  return [':realm', '/:realm/roles/:role-name/composites', 'DELETE'] as const
}

export function useDeleteRealmRolesRoleNameComposites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmRolesRoleNameCompositesKey()
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
            (typeof client)[':realm']['roles'][':role-name']['composites']['$delete']
          >
        },
      ) =>
        parseResponse(client[':realm'].roles[':role-name'].composites.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmRolesRoleNameCompositesClientsClientKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/roles/:role-name/composites/clients/:client', args] as const
}

export function useGetRealmRolesRoleNameCompositesClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
        ? getGetRealmRolesRoleNameCompositesClientsClientKey(args)
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
                (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
          client[':realm'].roles[':role-name'].composites.clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesRoleNameCompositesClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
        ? getGetRealmRolesRoleNameCompositesClientsClientKey(args)
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
                (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
          client[':realm'].roles[':role-name'].composites.clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmRolesRoleNameCompositesRealmKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/roles/:role-name/composites/realm', args] as const
}

export function useGetRealmRolesRoleNameCompositesRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
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
        ? getGetRealmRolesRoleNameCompositesRealmKey(args)
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
                (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
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
          client[':realm'].roles[':role-name'].composites.realm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesRoleNameCompositesRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
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
        ? getGetRealmRolesRoleNameCompositesRealmKey(args)
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
                (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
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
          client[':realm'].roles[':role-name'].composites.realm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmRolesRoleNameGroupsKey(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>,
) {
  return [':realm', '/:realm/roles/:role-name/groups', args] as const
}

export function useGetRealmRolesRoleNameGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>>
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
        ? getGetRealmRolesRoleNameGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].roles[':role-name'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesRoleNameGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>>
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
        ? getGetRealmRolesRoleNameGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].roles[':role-name'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmRolesRoleNameManagementPermissionsKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
  >,
) {
  return [':realm', '/:realm/roles/:role-name/management/permissions', args] as const
}

export function useGetRealmRolesRoleNameManagementPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
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
        ? getGetRealmRolesRoleNameManagementPermissionsKey(args)
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
                (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
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
          client[':realm'].roles[':role-name'].management.permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesRoleNameManagementPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
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
        ? getGetRealmRolesRoleNameManagementPermissionsKey(args)
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
                (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
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
          client[':realm'].roles[':role-name'].management.permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmRolesRoleNameManagementPermissionsKey() {
  return [':realm', '/:realm/roles/:role-name/management/permissions', 'PUT'] as const
}

export function usePutRealmRolesRoleNameManagementPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmRolesRoleNameManagementPermissionsKey()
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
            (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].roles[':role-name'].management.permissions.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmRolesRoleNameUsersKey(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>,
) {
  return [':realm', '/:realm/roles/:role-name/users', args] as const
}

export function useGetRealmRolesRoleNameUsers<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>>
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
        ? getGetRealmRolesRoleNameUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].roles[':role-name'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmRolesRoleNameUsers<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>>
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
        ? getGetRealmRolesRoleNameUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].roles[':role-name'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRealmSessionsSessionKey() {
  return [':realm', '/:realm/sessions/:session', 'DELETE'] as const
}

export function useDeleteRealmSessionsSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['sessions'][':session']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['sessions'][':session']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmSessionsSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['sessions'][':session']['$delete']> },
      ) => parseResponse(client[':realm'].sessions[':session'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmTestLDAPConnectionKey() {
  return [':realm', '/:realm/testLDAPConnection', 'POST'] as const
}

export function usePostRealmTestLDAPConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['testLDAPConnection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['testLDAPConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmTestLDAPConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['testLDAPConnection']['$post']> },
      ) => parseResponse(client[':realm'].testLDAPConnection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmTestSMTPConnectionKey() {
  return [':realm', '/:realm/testSMTPConnection', 'POST'] as const
}

export function usePostRealmTestSMTPConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['testSMTPConnection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['testSMTPConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmTestSMTPConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['testSMTPConnection']['$post']> },
      ) => parseResponse(client[':realm'].testSMTPConnection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUserStorageIdNameKey(
  args: InferRequestType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>,
) {
  return [':realm', '/:realm/user-storage/:id/name', args] as const
}

export function useGetRealmUserStorageIdName<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>>
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
        ? getGetRealmUserStorageIdNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['user-storage'][':id'].name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUserStorageIdName<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>>
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
        ? getGetRealmUserStorageIdNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['user-storage'][':id'].name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmUserStorageIdRemoveImportedUsersKey() {
  return [':realm', '/:realm/user-storage/:id/remove-imported-users', 'POST'] as const
}

export function usePostRealmUserStorageIdRemoveImportedUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['user-storage'][':id']['remove-imported-users']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['user-storage'][':id']['remove-imported-users']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmUserStorageIdRemoveImportedUsersKey()
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
            (typeof client)[':realm']['user-storage'][':id']['remove-imported-users']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['user-storage'][':id']['remove-imported-users'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmUserStorageIdSyncKey() {
  return [':realm', '/:realm/user-storage/:id/sync', 'POST'] as const
}

export function usePostRealmUserStorageIdSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['sync']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['user-storage'][':id']['sync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmUserStorageIdSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':realm']['user-storage'][':id']['sync']['$post']>
        },
      ) => parseResponse(client[':realm']['user-storage'][':id'].sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmUserStorageIdUnlinkUsersKey() {
  return [':realm', '/:realm/user-storage/:id/unlink-users', 'POST'] as const
}

export function usePostRealmUserStorageIdUnlinkUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['user-storage'][':id']['unlink-users']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['user-storage'][':id']['unlink-users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmUserStorageIdUnlinkUsersKey()
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
            (typeof client)[':realm']['user-storage'][':id']['unlink-users']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['user-storage'][':id']['unlink-users'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmUserStorageParentIdMappersIdSyncKey() {
  return [':realm', '/:realm/user-storage/:parentId/mappers/:id/sync', 'POST'] as const
}

export function usePostRealmUserStorageParentIdMappersIdSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['user-storage'][':parentId']['mappers'][':id']['sync']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['user-storage'][':parentId']['mappers'][':id']['sync']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmUserStorageParentIdMappersIdSyncKey()
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
            (typeof client)[':realm']['user-storage'][':parentId']['mappers'][':id']['sync']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm']['user-storage'][':parentId'].mappers[':id'].sync.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersKey(
  args: InferRequestType<(typeof client)[':realm']['users']['$get']>,
) {
  return [':realm', '/:realm/users', args] as const
}

export function useGetRealmUsers<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsers<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmUsersKey() {
  return [':realm', '/:realm/users', 'POST'] as const
}

export function usePostRealmUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['users']['$post']> },
      ) => parseResponse(client[':realm'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersManagementPermissionsKey(
  args: InferRequestType<(typeof client)[':realm']['users-management-permissions']['$get']>,
) {
  return [':realm', '/:realm/users-management-permissions', args] as const
}

export function useGetRealmUsersManagementPermissions<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users-management-permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>>
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
        ? getGetRealmUsersManagementPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['users-management-permissions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersManagementPermissions<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users-management-permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>>
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
        ? getGetRealmUsersManagementPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm']['users-management-permissions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmUsersManagementPermissionsKey() {
  return [':realm', '/:realm/users-management-permissions', 'PUT'] as const
}

export function usePutRealmUsersManagementPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users-management-permissions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmUsersManagementPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':realm']['users-management-permissions']['$put']>
        },
      ) => parseResponse(client[':realm']['users-management-permissions'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersCountKey(
  args: InferRequestType<(typeof client)[':realm']['users']['count']['$get']>,
) {
  return [':realm', '/:realm/users/count', args] as const
}

export function useGetRealmUsersCount<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>
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
        ? getGetRealmUsersCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersCount<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>
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
        ? getGetRealmUsersCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmUsersIdKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['$get']>,
) {
  return [':realm', '/:realm/users/:id', args] as const
}

export function useGetRealmUsersId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRealmUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersId<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRealmUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmUsersIdKey() {
  return [':realm', '/:realm/users/:id', 'PUT'] as const
}

export function usePutRealmUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['users'][':id']['$put']> },
      ) => parseResponse(client[':realm'].users[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmUsersIdKey() {
  return [':realm', '/:realm/users/:id', 'DELETE'] as const
}

export function useDeleteRealmUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':realm']['users'][':id']['$delete']> },
      ) => parseResponse(client[':realm'].users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersIdConfiguredUserStorageCredentialTypesKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/configured-user-storage-credential-types', args] as const
}

export function useGetRealmUsersIdConfiguredUserStorageCredentialTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
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
        ? getGetRealmUsersIdConfiguredUserStorageCredentialTypesKey(args)
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
                (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
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
          client[':realm'].users[':id']['configured-user-storage-credential-types'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdConfiguredUserStorageCredentialTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
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
        ? getGetRealmUsersIdConfiguredUserStorageCredentialTypesKey(args)
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
                (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
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
          client[':realm'].users[':id']['configured-user-storage-credential-types'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmUsersIdConsentsKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['consents']['$get']>,
) {
  return [':realm', '/:realm/users/:id/consents', args] as const
}

export function useGetRealmUsersIdConsents<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['consents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
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
        ? getGetRealmUsersIdConsentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users[':id'].consents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdConsents<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['consents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
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
        ? getGetRealmUsersIdConsentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users[':id'].consents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRealmUsersIdConsentsClientKey() {
  return [':realm', '/:realm/users/:id/consents/:client', 'DELETE'] as const
}

export function useDeleteRealmUsersIdConsentsClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['consents'][':client']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['consents'][':client']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmUsersIdConsentsClientKey()
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
            (typeof client)[':realm']['users'][':id']['consents'][':client']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id'].consents[':client'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersIdCredentialsKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>,
) {
  return [':realm', '/:realm/users/:id/credentials', args] as const
}

export function useGetRealmUsersIdCredentials<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>>
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
        ? getGetRealmUsersIdCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].users[':id'].credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdCredentials<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>>
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
        ? getGetRealmUsersIdCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].users[':id'].credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRealmUsersIdCredentialsCredentialIdKey() {
  return [':realm', '/:realm/users/:id/credentials/:credentialId', 'DELETE'] as const
}

export function useDeleteRealmUsersIdCredentialsCredentialId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmUsersIdCredentialsCredentialIdKey()
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
            (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id'].credentials[':credentialId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdKey() {
  return [
    ':realm',
    '/:realm/users/:id/credentials/:credentialId/moveAfter/:newPreviousCredentialId',
    'POST',
  ] as const
}

export function usePostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveAfter'][':newPreviousCredentialId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveAfter'][':newPreviousCredentialId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdKey()
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
            (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveAfter'][':newPreviousCredentialId']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id'].credentials[':credentialId'].moveAfter[
            ':newPreviousCredentialId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRealmUsersIdCredentialsCredentialIdMoveToFirstKey() {
  return [':realm', '/:realm/users/:id/credentials/:credentialId/moveToFirst', 'POST'] as const
}

export function usePostRealmUsersIdCredentialsCredentialIdMoveToFirst<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveToFirst']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveToFirst']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmUsersIdCredentialsCredentialIdMoveToFirstKey()
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
            (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveToFirst']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id'].credentials[':credentialId'].moveToFirst.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRealmUsersIdCredentialsCredentialIdUserLabelKey() {
  return [':realm', '/:realm/users/:id/credentials/:credentialId/userLabel', 'PUT'] as const
}

export function usePutRealmUsersIdCredentialsCredentialIdUserLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['userLabel']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['userLabel']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmUsersIdCredentialsCredentialIdUserLabelKey()
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
            (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['userLabel']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id'].credentials[':credentialId'].userLabel.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRealmUsersIdDisableCredentialTypesKey() {
  return [':realm', '/:realm/users/:id/disable-credential-types', 'PUT'] as const
}

export function usePutRealmUsersIdDisableCredentialTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['disable-credential-types']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['disable-credential-types']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmUsersIdDisableCredentialTypesKey()
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
            (typeof client)[':realm']['users'][':id']['disable-credential-types']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id']['disable-credential-types'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRealmUsersIdExecuteActionsEmailKey() {
  return [':realm', '/:realm/users/:id/execute-actions-email', 'PUT'] as const
}

export function usePutRealmUsersIdExecuteActionsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['execute-actions-email']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['execute-actions-email']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmUsersIdExecuteActionsEmailKey()
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
            (typeof client)[':realm']['users'][':id']['execute-actions-email']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id']['execute-actions-email'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersIdFederatedIdentityKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>,
) {
  return [':realm', '/:realm/users/:id/federated-identity', args] as const
}

export function useGetRealmUsersIdFederatedIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>
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
        ? getGetRealmUsersIdFederatedIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':realm'].users[':id']['federated-identity'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdFederatedIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>
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
        ? getGetRealmUsersIdFederatedIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':realm'].users[':id']['federated-identity'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmUsersIdFederatedIdentityProviderKey() {
  return [':realm', '/:realm/users/:id/federated-identity/:provider', 'POST'] as const
}

export function usePostRealmUsersIdFederatedIdentityProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmUsersIdFederatedIdentityProviderKey()
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
            (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id']['federated-identity'][':provider'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmUsersIdFederatedIdentityProviderKey() {
  return [':realm', '/:realm/users/:id/federated-identity/:provider', 'DELETE'] as const
}

export function useDeleteRealmUsersIdFederatedIdentityProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmUsersIdFederatedIdentityProviderKey()
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
            (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id']['federated-identity'][':provider'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersIdGroupsKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['$get']>,
) {
  return [':realm', '/:realm/users/:id/groups', args] as const
}

export function useGetRealmUsersIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
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
        ? getGetRealmUsersIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users[':id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
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
        ? getGetRealmUsersIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users[':id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmUsersIdGroupsCountKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>,
) {
  return [':realm', '/:realm/users/:id/groups/count', args] as const
}

export function useGetRealmUsersIdGroupsCount<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>
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
        ? getGetRealmUsersIdGroupsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].users[':id'].groups.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdGroupsCount<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>
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
        ? getGetRealmUsersIdGroupsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].users[':id'].groups.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRealmUsersIdGroupsGroupIdKey() {
  return [':realm', '/:realm/users/:id/groups/:groupId', 'PUT'] as const
}

export function usePutRealmUsersIdGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmUsersIdGroupsGroupIdKey()
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
            (typeof client)[':realm']['users'][':id']['groups'][':groupId']['$put']
          >
        },
      ) => parseResponse(client[':realm'].users[':id'].groups[':groupId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmUsersIdGroupsGroupIdKey() {
  return [':realm', '/:realm/users/:id/groups/:groupId', 'DELETE'] as const
}

export function useDeleteRealmUsersIdGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmUsersIdGroupsGroupIdKey()
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
            (typeof client)[':realm']['users'][':id']['groups'][':groupId']['$delete']
          >
        },
      ) =>
        parseResponse(client[':realm'].users[':id'].groups[':groupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmUsersIdImpersonationKey() {
  return [':realm', '/:realm/users/:id/impersonation', 'POST'] as const
}

export function usePostRealmUsersIdImpersonation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['impersonation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['impersonation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmUsersIdImpersonationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':realm']['users'][':id']['impersonation']['$post']>
        },
      ) => parseResponse(client[':realm'].users[':id'].impersonation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmUsersIdLogoutKey() {
  return [':realm', '/:realm/users/:id/logout', 'POST'] as const
}

export function usePostRealmUsersIdLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['logout']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['logout']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmUsersIdLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':realm']['users'][':id']['logout']['$post']> },
      ) => parseResponse(client[':realm'].users[':id'].logout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersIdOfflineSessionsClientIdKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/offline-sessions/:clientId', args] as const
}

export function useGetRealmUsersIdOfflineSessionsClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
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
        ? getGetRealmUsersIdOfflineSessionsClientIdKey(args)
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
                (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
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
          client[':realm'].users[':id']['offline-sessions'][':clientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdOfflineSessionsClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
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
        ? getGetRealmUsersIdOfflineSessionsClientIdKey(args)
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
                (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
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
          client[':realm'].users[':id']['offline-sessions'][':clientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmUsersIdResetPasswordKey() {
  return [':realm', '/:realm/users/:id/reset-password', 'PUT'] as const
}

export function usePutRealmUsersIdResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['reset-password']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['reset-password']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmUsersIdResetPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':realm']['users'][':id']['reset-password']['$put']>
        },
      ) => parseResponse(client[':realm'].users[':id']['reset-password'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersIdRoleMappingsKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>,
) {
  return [':realm', '/:realm/users/:id/role-mappings', args] as const
}

export function useGetRealmUsersIdRoleMappings<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>>
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
        ? getGetRealmUsersIdRoleMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].users[':id']['role-mappings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdRoleMappings<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>>
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
        ? getGetRealmUsersIdRoleMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':realm'].users[':id']['role-mappings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmUsersIdRoleMappingsClientsClientKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/clients/:client', args] as const
}

export function useGetRealmUsersIdRoleMappingsClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
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
        ? getGetRealmUsersIdRoleMappingsClientsClientKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
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
          client[':realm'].users[':id']['role-mappings'].clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdRoleMappingsClientsClient<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
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
        ? getGetRealmUsersIdRoleMappingsClientsClientKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
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
          client[':realm'].users[':id']['role-mappings'].clients[':client'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmUsersIdRoleMappingsClientsClientKey() {
  return [':realm', '/:realm/users/:id/role-mappings/clients/:client', 'POST'] as const
}

export function usePostRealmUsersIdRoleMappingsClientsClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmUsersIdRoleMappingsClientsClientKey()
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
            (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id']['role-mappings'].clients[':client'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmUsersIdRoleMappingsClientsClientKey() {
  return [':realm', '/:realm/users/:id/role-mappings/clients/:client', 'DELETE'] as const
}

export function useDeleteRealmUsersIdRoleMappingsClientsClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmUsersIdRoleMappingsClientsClientKey()
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
            (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id']['role-mappings'].clients[':client'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersIdRoleMappingsClientsClientAvailableKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/clients/:client/available', args] as const
}

export function useGetRealmUsersIdRoleMappingsClientsClientAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
        ? getGetRealmUsersIdRoleMappingsClientsClientAvailableKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
          client[':realm'].users[':id']['role-mappings'].clients[':client'].available.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdRoleMappingsClientsClientAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
        ? getGetRealmUsersIdRoleMappingsClientsClientAvailableKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
          client[':realm'].users[':id']['role-mappings'].clients[':client'].available.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmUsersIdRoleMappingsClientsClientCompositeKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/clients/:client/composite', args] as const
}

export function useGetRealmUsersIdRoleMappingsClientsClientComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
        ? getGetRealmUsersIdRoleMappingsClientsClientCompositeKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
          client[':realm'].users[':id']['role-mappings'].clients[':client'].composite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdRoleMappingsClientsClientComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
        ? getGetRealmUsersIdRoleMappingsClientsClientCompositeKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
          client[':realm'].users[':id']['role-mappings'].clients[':client'].composite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmUsersIdRoleMappingsRealmKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/realm', args] as const
}

export function useGetRealmUsersIdRoleMappingsRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
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
        ? getGetRealmUsersIdRoleMappingsRealmKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
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
          client[':realm'].users[':id']['role-mappings'].realm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdRoleMappingsRealm<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
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
        ? getGetRealmUsersIdRoleMappingsRealmKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
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
          client[':realm'].users[':id']['role-mappings'].realm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealmUsersIdRoleMappingsRealmKey() {
  return [':realm', '/:realm/users/:id/role-mappings/realm', 'POST'] as const
}

export function usePostRealmUsersIdRoleMappingsRealm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmUsersIdRoleMappingsRealmKey()
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
            (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id']['role-mappings'].realm.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmUsersIdRoleMappingsRealmKey() {
  return [':realm', '/:realm/users/:id/role-mappings/realm', 'DELETE'] as const
}

export function useDeleteRealmUsersIdRoleMappingsRealm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmUsersIdRoleMappingsRealmKey()
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
            (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':realm'].users[':id']['role-mappings'].realm.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersIdRoleMappingsRealmAvailableKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/realm/available', args] as const
}

export function useGetRealmUsersIdRoleMappingsRealmAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
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
        ? getGetRealmUsersIdRoleMappingsRealmAvailableKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
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
          client[':realm'].users[':id']['role-mappings'].realm.available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdRoleMappingsRealmAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
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
        ? getGetRealmUsersIdRoleMappingsRealmAvailableKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
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
          client[':realm'].users[':id']['role-mappings'].realm.available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealmUsersIdRoleMappingsRealmCompositeKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/realm/composite', args] as const
}

export function useGetRealmUsersIdRoleMappingsRealmComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
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
        ? getGetRealmUsersIdRoleMappingsRealmCompositeKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
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
          client[':realm'].users[':id']['role-mappings'].realm.composite.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdRoleMappingsRealmComposite<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
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
        ? getGetRealmUsersIdRoleMappingsRealmCompositeKey(args)
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
                (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
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
          client[':realm'].users[':id']['role-mappings'].realm.composite.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRealmUsersIdSendVerifyEmailKey() {
  return [':realm', '/:realm/users/:id/send-verify-email', 'PUT'] as const
}

export function usePutRealmUsersIdSendVerifyEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['send-verify-email']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':realm']['users'][':id']['send-verify-email']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRealmUsersIdSendVerifyEmailKey()
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
            (typeof client)[':realm']['users'][':id']['send-verify-email']['$put']
          >
        },
      ) =>
        parseResponse(client[':realm'].users[':id']['send-verify-email'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmUsersIdSessionsKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>,
) {
  return [':realm', '/:realm/users/:id/sessions', args] as const
}

export function useGetRealmUsersIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
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
        ? getGetRealmUsersIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users[':id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmUsersIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
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
        ? getGetRealmUsersIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':realm'].users[':id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
