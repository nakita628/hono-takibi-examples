import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCatalogsKey() {
  return ['catalogs'] as const
}

export function getPrincipalRolesKey() {
  return ['principal-roles'] as const
}

export function getPrincipalsKey() {
  return ['principals'] as const
}

export function getGetCatalogsKey() {
  return ['catalogs', '/catalogs'] as const
}

export function useGetCatalogs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCatalogsKey() {
  return ['catalogs', '/catalogs', 'POST'] as const
}

export function usePostCatalogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.catalogs.$post> }) =>
        parseResponse(client.catalogs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsCatalogNameKey(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['$get']>,
) {
  return ['catalogs', '/catalogs/:catalogName', args] as const
}

export function useGetCatalogsCatalogName<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCatalogsCatalogNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs[':catalogName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsCatalogName<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCatalogsCatalogNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs[':catalogName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCatalogsCatalogNameKey() {
  return ['catalogs', '/catalogs/:catalogName', 'PUT'] as const
}

export function usePutCatalogsCatalogName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':catalogName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCatalogsCatalogNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.catalogs)[':catalogName']['$put']> },
      ) => parseResponse(client.catalogs[':catalogName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCatalogsCatalogNameKey() {
  return ['catalogs', '/catalogs/:catalogName', 'DELETE'] as const
}

export function useDeleteCatalogsCatalogName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':catalogName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCatalogsCatalogNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.catalogs)[':catalogName']['$delete']> },
      ) => parseResponse(client.catalogs[':catalogName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrincipalsKey() {
  return ['principals', '/principals'] as const
}

export function useGetPrincipals<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrincipalsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.principals.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrincipals<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrincipalsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.principals.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPrincipalsKey() {
  return ['principals', '/principals', 'POST'] as const
}

export function usePostPrincipals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.principals.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.principals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPrincipalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.principals.$post> }) =>
        parseResponse(client.principals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrincipalsPrincipalNameKey(
  args: InferRequestType<(typeof client.principals)[':principalName']['$get']>,
) {
  return ['principals', '/principals/:principalName', args] as const
}

export function useGetPrincipalsPrincipalName<TError = unknown>(
  args: InferRequestType<(typeof client.principals)[':principalName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.principals)[':principalName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrincipalsPrincipalNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.principals)[':principalName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.principals[':principalName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrincipalsPrincipalName<TError = unknown>(
  args: InferRequestType<(typeof client.principals)[':principalName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.principals)[':principalName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrincipalsPrincipalNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.principals)[':principalName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.principals[':principalName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPrincipalsPrincipalNameKey() {
  return ['principals', '/principals/:principalName', 'PUT'] as const
}

export function usePutPrincipalsPrincipalName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.principals)[':principalName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.principals)[':principalName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPrincipalsPrincipalNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.principals)[':principalName']['$put']> },
      ) => parseResponse(client.principals[':principalName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePrincipalsPrincipalNameKey() {
  return ['principals', '/principals/:principalName', 'DELETE'] as const
}

export function useDeletePrincipalsPrincipalName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.principals)[':principalName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.principals)[':principalName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePrincipalsPrincipalNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.principals)[':principalName']['$delete']> },
      ) => parseResponse(client.principals[':principalName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPrincipalsPrincipalNameRotateKey() {
  return ['principals', '/principals/:principalName/rotate', 'POST'] as const
}

export function usePostPrincipalsPrincipalNameRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.principals)[':principalName']['rotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.principals)[':principalName']['rotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPrincipalsPrincipalNameRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.principals)[':principalName']['rotate']['$post']>
        },
      ) => parseResponse(client.principals[':principalName'].rotate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPrincipalsPrincipalNameResetKey() {
  return ['principals', '/principals/:principalName/reset', 'POST'] as const
}

export function usePostPrincipalsPrincipalNameReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.principals)[':principalName']['reset']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.principals)[':principalName']['reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPrincipalsPrincipalNameResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.principals)[':principalName']['reset']['$post']>
        },
      ) => parseResponse(client.principals[':principalName'].reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrincipalsPrincipalNamePrincipalRolesKey(
  args: InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$get']>,
) {
  return ['principals', '/principals/:principalName/principal-roles', args] as const
}

export function useGetPrincipalsPrincipalNamePrincipalRoles<TError = unknown>(
  args: InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$get']>
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
        ? getGetPrincipalsPrincipalNamePrincipalRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.principals[':principalName']['principal-roles'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrincipalsPrincipalNamePrincipalRoles<TError = unknown>(
  args: InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$get']>
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
        ? getGetPrincipalsPrincipalNamePrincipalRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.principals[':principalName']['principal-roles'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPrincipalsPrincipalNamePrincipalRolesKey() {
  return ['principals', '/principals/:principalName/principal-roles', 'PUT'] as const
}

export function usePutPrincipalsPrincipalNamePrincipalRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.principals)[':principalName']['principal-roles']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPrincipalsPrincipalNamePrincipalRolesKey()
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
            (typeof client.principals)[':principalName']['principal-roles']['$put']
          >
        },
      ) =>
        parseResponse(
          client.principals[':principalName']['principal-roles'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameKey() {
  return [
    'principals',
    '/principals/:principalName/principal-roles/:principalRoleName',
    'DELETE',
  ] as const
}

export function useDeletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.principals)[':principalName']['principal-roles'][':principalRoleName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.principals)[':principalName']['principal-roles'][':principalRoleName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameKey()
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
            (typeof client.principals)[':principalName']['principal-roles'][':principalRoleName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.principals[':principalName']['principal-roles'][':principalRoleName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPrincipalRolesKey() {
  return ['principal-roles', '/principal-roles'] as const
}

export function useGetPrincipalRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrincipalRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['principal-roles'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrincipalRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrincipalRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['principal-roles'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPrincipalRolesKey() {
  return ['principal-roles', '/principal-roles', 'POST'] as const
}

export function usePostPrincipalRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['principal-roles']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['principal-roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPrincipalRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['principal-roles']['$post']> },
      ) => parseResponse(client['principal-roles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrincipalRolesPrincipalRoleNameKey(
  args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$get']>,
) {
  return ['principal-roles', '/principal-roles/:principalRoleName', args] as const
}

export function useGetPrincipalRolesPrincipalRoleName<TError = unknown>(
  args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrincipalRolesPrincipalRoleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['principal-roles'][':principalRoleName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrincipalRolesPrincipalRoleName<TError = unknown>(
  args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrincipalRolesPrincipalRoleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['principal-roles'][':principalRoleName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPrincipalRolesPrincipalRoleNameKey() {
  return ['principal-roles', '/principal-roles/:principalRoleName', 'PUT'] as const
}

export function usePutPrincipalRolesPrincipalRoleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPrincipalRolesPrincipalRoleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$put']>
        },
      ) => parseResponse(client['principal-roles'][':principalRoleName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePrincipalRolesPrincipalRoleNameKey() {
  return ['principal-roles', '/principal-roles/:principalRoleName', 'DELETE'] as const
}

export function useDeletePrincipalRolesPrincipalRoleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['principal-roles'][':principalRoleName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePrincipalRolesPrincipalRoleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$delete']>
        },
      ) =>
        parseResponse(client['principal-roles'][':principalRoleName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrincipalRolesPrincipalRoleNamePrincipalsKey(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
  >,
) {
  return ['principal-roles', '/principal-roles/:principalRoleName/principals', args] as const
}

export function useGetPrincipalRolesPrincipalRoleNamePrincipals<TError = unknown>(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
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
        ? getGetPrincipalRolesPrincipalRoleNamePrincipalsKey(args)
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
                (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
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
          client['principal-roles'][':principalRoleName'].principals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrincipalRolesPrincipalRoleNamePrincipals<TError = unknown>(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
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
        ? getGetPrincipalRolesPrincipalRoleNamePrincipalsKey(args)
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
                (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
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
          client['principal-roles'][':principalRoleName'].principals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameKey(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
  >,
) {
  return [
    'principal-roles',
    '/principal-roles/:principalRoleName/catalog-roles/:catalogName',
    args,
  ] as const
}

export function useGetPrincipalRolesPrincipalRoleNameCatalogRolesCatalogName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
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
        ? getGetPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameKey(args)
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
                (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
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
          client['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrincipalRolesPrincipalRoleNameCatalogRolesCatalogName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
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
        ? getGetPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameKey(args)
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
                (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
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
          client['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameKey() {
  return [
    'principal-roles',
    '/principal-roles/:principalRoleName/catalog-roles/:catalogName',
    'PUT',
  ] as const
}

export function usePutPrincipalRolesPrincipalRoleNameCatalogRolesCatalogName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameKey()
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
            (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$put']
          >
        },
      ) =>
        parseResponse(
          client['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameKey() {
  return [
    'principal-roles',
    '/principal-roles/:principalRoleName/catalog-roles/:catalogName/:catalogRoleName',
    'DELETE',
  ] as const
}

export function useDeletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][':catalogRoleName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][':catalogRoleName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameKey()
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
            (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][':catalogRoleName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][
            ':catalogRoleName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsCatalogNameCatalogRolesKey(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>,
) {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles', args] as const
}

export function useGetCatalogsCatalogNameCatalogRoles<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCatalogsCatalogNameCatalogRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.catalogs[':catalogName']['catalog-roles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsCatalogNameCatalogRoles<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCatalogsCatalogNameCatalogRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.catalogs[':catalogName']['catalog-roles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCatalogsCatalogNameCatalogRolesKey() {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles', 'POST'] as const
}

export function usePostCatalogsCatalogNameCatalogRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsCatalogNameCatalogRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$post']>
        },
      ) =>
        parseResponse(client.catalogs[':catalogName']['catalog-roles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsCatalogNameCatalogRolesCatalogRoleNameKey(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
  >,
) {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles/:catalogRoleName', args] as const
}

export function useGetCatalogsCatalogNameCatalogRolesCatalogRoleName<TError = unknown>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
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
        ? getGetCatalogsCatalogNameCatalogRolesCatalogRoleNameKey(args)
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
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
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
          client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsCatalogNameCatalogRolesCatalogRoleName<TError = unknown>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
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
        ? getGetCatalogsCatalogNameCatalogRolesCatalogRoleNameKey(args)
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
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
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
          client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameKey() {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles/:catalogRoleName', 'PUT'] as const
}

export function usePutCatalogsCatalogNameCatalogRolesCatalogRoleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameKey()
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
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCatalogsCatalogNameCatalogRolesCatalogRoleNameKey() {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles/:catalogRoleName', 'DELETE'] as const
}

export function useDeleteCatalogsCatalogNameCatalogRolesCatalogRoleName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCatalogsCatalogNameCatalogRolesCatalogRoleNameKey()
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
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesKey(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
  >,
) {
  return [
    'catalogs',
    '/catalogs/:catalogName/catalog-roles/:catalogRoleName/principal-roles',
    args,
  ] as const
}

export function useGetCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRoles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
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
        ? getGetCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesKey(args)
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
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
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
          client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'][
            'principal-roles'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRoles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
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
        ? getGetCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesKey(args)
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
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
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
          client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'][
            'principal-roles'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsKey(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
  >,
) {
  return ['catalogs', '/catalogs/:catalogName/catalog-roles/:catalogRoleName/grants', args] as const
}

export function useGetCatalogsCatalogNameCatalogRolesCatalogRoleNameGrants<TError = unknown>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
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
        ? getGetCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsKey(args)
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
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
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
          client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].grants.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsCatalogNameCatalogRolesCatalogRoleNameGrants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
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
        ? getGetCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsKey(args)
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
                (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
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
          client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].grants.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsKey() {
  return [
    'catalogs',
    '/catalogs/:catalogName/catalog-roles/:catalogRoleName/grants',
    'PUT',
  ] as const
}

export function usePutCatalogsCatalogNameCatalogRolesCatalogRoleNameGrants<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsKey()
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
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$put']
          >
        },
      ) =>
        parseResponse(
          client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].grants.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsKey() {
  return [
    'catalogs',
    '/catalogs/:catalogName/catalog-roles/:catalogRoleName/grants',
    'POST',
  ] as const
}

export function usePostCatalogsCatalogNameCatalogRolesCatalogRoleNameGrants<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsKey()
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
            (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$post']
          >
        },
      ) =>
        parseResponse(
          client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].grants.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
