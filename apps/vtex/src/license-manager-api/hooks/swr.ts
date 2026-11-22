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

export function getGetApiLicenseManagerSitePvtLoginsListPagedKey(
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/license-manager/site/pvt/logins/list/paged', keyArgs] as const
}

export function useGetApiLicenseManagerSitePvtLoginsListPaged<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
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
        ? getGetApiLicenseManagerSitePvtLoginsListPagedKey(args)
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
                (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
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
          client.api['license-manager'].site.pvt.logins.list.paged.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLicenseManagerSitePvtLoginsListPaged<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
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
        ? getGetApiLicenseManagerSitePvtLoginsListPagedKey(args)
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
                (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
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
          client.api['license-manager'].site.pvt.logins.list.paged.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLicenseManagerSitePvtRolesListPagedKey(
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/license-manager/site/pvt/roles/list/paged', keyArgs] as const
}

export function useGetApiLicenseManagerSitePvtRolesListPaged<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
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
        ? getGetApiLicenseManagerSitePvtRolesListPagedKey(args)
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
                (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
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
          client.api['license-manager'].site.pvt.roles.list.paged.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLicenseManagerSitePvtRolesListPaged<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
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
        ? getGetApiLicenseManagerSitePvtRolesListPagedKey(args)
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
                (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
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
          client.api['license-manager'].site.pvt.roles.list.paged.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiLicenseManagerUsersKey() {
  return ['api', '/api/license-manager/users', 'POST'] as const
}

export function usePostApiLicenseManagerUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['license-manager']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['license-manager']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLicenseManagerUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['license-manager']['users']['$post']> },
      ) => parseResponse(client.api['license-manager'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLicenseManagerUsersUserIdKey(
  args: InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/license-manager/users/:userId', keyArgs] as const
}

export function useGetApiLicenseManagerUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['license-manager']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLicenseManagerUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['license-manager']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['license-manager'].users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLicenseManagerUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['license-manager']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLicenseManagerUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['license-manager']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['license-manager'].users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLicenseManagerUsersUserIdRolesKey(
  args: InferRequestType<
    (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/license-manager/users/:userId/roles', keyArgs] as const
}

export function useGetApiLicenseManagerUsersUserIdRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
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
        ? getGetApiLicenseManagerUsersUserIdRolesKey(args)
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
                (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
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
          client.api['license-manager'].users[':userId'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLicenseManagerUsersUserIdRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
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
        ? getGetApiLicenseManagerUsersUserIdRolesKey(args)
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
                (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
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
          client.api['license-manager'].users[':userId'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiLicenseManagerUsersUserIdRolesKey() {
  return ['api', '/api/license-manager/users/:userId/roles', 'PUT'] as const
}

export function usePutApiLicenseManagerUsersUserIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['license-manager']['users'][':userId']['roles']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['roles']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiLicenseManagerUsersUserIdRolesKey()
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
            (typeof client.api)['license-manager']['users'][':userId']['roles']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api['license-manager'].users[':userId'].roles.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiLicenseManagerUsersUserIdRolesRoleIdKey() {
  return ['api', '/api/license-manager/users/:userId/roles/:roleId', 'DELETE'] as const
}

export function useDeleteApiLicenseManagerUsersUserIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['license-manager']['users'][':userId']['roles'][':roleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)['license-manager']['users'][':userId']['roles'][':roleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLicenseManagerUsersUserIdRolesRoleIdKey()
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
            (typeof client.api)['license-manager']['users'][':userId']['roles'][':roleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api['license-manager'].users[':userId'].roles[':roleId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiVlmAccountKey() {
  return ['api', '/api/vlm/account'] as const
}

export function useGetApiVlmAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVlmAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.vlm.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVlmAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVlmAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.vlm.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVlmAccountStoresKey() {
  return ['api', '/api/vlm/account/stores'] as const
}

export function useGetApiVlmAccountStores<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiVlmAccountStoresKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.vlm.account.stores.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVlmAccountStores<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiVlmAccountStoresKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.vlm.account.stores.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVlmAppkeysKey(args: InferRequestType<typeof client.api.vlm.appkeys.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/vlm/appkeys', keyArgs] as const
}

export function useGetApiVlmAppkeys<TError = unknown>(
  args: InferRequestType<typeof client.api.vlm.appkeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVlmAppkeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.vlm.appkeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVlmAppkeys<TError = unknown>(
  args: InferRequestType<typeof client.api.vlm.appkeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVlmAppkeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.vlm.appkeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVlmAppkeysKey() {
  return ['api', '/api/vlm/appkeys', 'POST'] as const
}

export function usePostApiVlmAppkeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.vlm.appkeys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVlmAppkeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.vlm.appkeys.$post> }) =>
        parseResponse(client.api.vlm.appkeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiVlmAppkeysIdKey() {
  return ['api', '/api/vlm/appkeys/:id', 'PUT'] as const
}

export function usePutApiVlmAppkeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.vlm.appkeys)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.vlm.appkeys)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVlmAppkeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.vlm.appkeys)[':id']['$put']> },
      ) => parseResponse(client.api.vlm.appkeys[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
