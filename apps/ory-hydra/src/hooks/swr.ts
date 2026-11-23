import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWellKnownKey() {
  return ['.well-known'] as const
}

export function getAdminKey() {
  return ['admin'] as const
}

export function getCredentialsKey() {
  return ['credentials'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getUserinfoKey() {
  return ['userinfo'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getGetWellKnownJwksJsonKey() {
  return ['.well-known', '/.well-known/jwks.json'] as const
}

export function useGetWellKnownJwksJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWellKnownJwksJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['.well-known']['jwks.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellKnownJwksJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWellKnownJwksJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['.well-known']['jwks.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWellKnownOpenidConfigurationKey() {
  return ['.well-known', '/.well-known/openid-configuration'] as const
}

export function useGetWellKnownOpenidConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
        >
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
        ? getGetWellKnownOpenidConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['.well-known']['openid-configuration'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellKnownOpenidConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
        >
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
        ? getGetWellKnownOpenidConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['.well-known']['openid-configuration'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminClientsKey(args: InferRequestType<typeof client.admin.clients.$get>) {
  return ['admin', '/admin/clients', args] as const
}

export function useGetAdminClients<TError = unknown>(
  args: InferRequestType<typeof client.admin.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminClients<TError = unknown>(
  args: InferRequestType<typeof client.admin.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminClientsKey() {
  return ['admin', '/admin/clients', 'POST'] as const
}

export function usePostAdminClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.clients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.clients.$post> }) =>
        parseResponse(client.admin.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminClientsIdKey(
  args: InferRequestType<(typeof client.admin.clients)[':id']['$get']>,
) {
  return ['admin', '/admin/clients/:id', args] as const
}

export function useGetAdminClientsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.clients)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminClientsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.clients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminClientsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.clients)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminClientsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.clients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminClientsIdKey() {
  return ['admin', '/admin/clients/:id', 'PUT'] as const
}

export function usePutAdminClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.clients)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminClientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.clients)[':id']['$put']> },
      ) => parseResponse(client.admin.clients[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminClientsIdKey() {
  return ['admin', '/admin/clients/:id', 'DELETE'] as const
}

export function useDeleteAdminClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.clients)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminClientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.clients)[':id']['$delete']> },
      ) => parseResponse(client.admin.clients[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminClientsIdKey() {
  return ['admin', '/admin/clients/:id', 'PATCH'] as const
}

export function usePatchAdminClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.clients)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminClientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.clients)[':id']['$patch']> },
      ) => parseResponse(client.admin.clients[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminClientsIdLifespansKey() {
  return ['admin', '/admin/clients/:id/lifespans', 'PUT'] as const
}

export function usePutAdminClientsIdLifespans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.clients)[':id']['lifespans']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.clients)[':id']['lifespans']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminClientsIdLifespansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.clients)[':id']['lifespans']['$put']> },
      ) => parseResponse(client.admin.clients[':id'].lifespans.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClientsIdSecretsRotateKey() {
  return ['admin', '/admin/clients/:id/secrets/rotate', 'POST'] as const
}

export function usePostAdminClientsIdSecretsRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClientsIdSecretsRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$post']>
        },
      ) => parseResponse(client.admin.clients[':id'].secrets.rotate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminClientsIdSecretsRotateKey() {
  return ['admin', '/admin/clients/:id/secrets/rotate', 'DELETE'] as const
}

export function useDeleteAdminClientsIdSecretsRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminClientsIdSecretsRotateKey()
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
            (typeof client.admin.clients)[':id']['secrets']['rotate']['$delete']
          >
        },
      ) => parseResponse(client.admin.clients[':id'].secrets.rotate.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminKeysSetKey(
  args: InferRequestType<(typeof client.admin.keys)[':set']['$get']>,
) {
  return ['admin', '/admin/keys/:set', args] as const
}

export function useGetAdminKeysSet<TError = unknown>(
  args: InferRequestType<(typeof client.admin.keys)[':set']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminKeysSetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.keys[':set'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminKeysSet<TError = unknown>(
  args: InferRequestType<(typeof client.admin.keys)[':set']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminKeysSetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.keys[':set'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminKeysSetKey() {
  return ['admin', '/admin/keys/:set', 'PUT'] as const
}

export function usePutAdminKeysSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.keys)[':set']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminKeysSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.keys)[':set']['$put']> },
      ) => parseResponse(client.admin.keys[':set'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminKeysSetKey() {
  return ['admin', '/admin/keys/:set', 'POST'] as const
}

export function usePostAdminKeysSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.keys)[':set']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminKeysSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.keys)[':set']['$post']> },
      ) => parseResponse(client.admin.keys[':set'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminKeysSetKey() {
  return ['admin', '/admin/keys/:set', 'DELETE'] as const
}

export function useDeleteAdminKeysSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.keys)[':set']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminKeysSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.keys)[':set']['$delete']> },
      ) => parseResponse(client.admin.keys[':set'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminKeysSetKidKey(
  args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$get']>,
) {
  return ['admin', '/admin/keys/:set/:kid', args] as const
}

export function useGetAdminKeysSetKid<TError = unknown>(
  args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminKeysSetKidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.keys[':set'][':kid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminKeysSetKid<TError = unknown>(
  args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminKeysSetKidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.keys[':set'][':kid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminKeysSetKidKey() {
  return ['admin', '/admin/keys/:set/:kid', 'PUT'] as const
}

export function usePutAdminKeysSetKid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminKeysSetKidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$put']> },
      ) => parseResponse(client.admin.keys[':set'][':kid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminKeysSetKidKey() {
  return ['admin', '/admin/keys/:set/:kid', 'DELETE'] as const
}

export function useDeleteAdminKeysSetKid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminKeysSetKidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$delete']> },
      ) => parseResponse(client.admin.keys[':set'][':kid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOauth2AuthRequestsConsentKey(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.$get>,
) {
  return ['admin', '/admin/oauth2/auth/requests/consent', args] as const
}

export function useGetAdminOauth2AuthRequestsConsent<TError = unknown>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminOauth2AuthRequestsConsentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.oauth2.auth.requests.consent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOauth2AuthRequestsConsent<TError = unknown>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminOauth2AuthRequestsConsentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.oauth2.auth.requests.consent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminOauth2AuthRequestsConsentAcceptKey() {
  return ['admin', '/admin/oauth2/auth/requests/consent/accept', 'PUT'] as const
}

export function usePutAdminOauth2AuthRequestsConsentAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.accept.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth2.auth.requests.consent.accept.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminOauth2AuthRequestsConsentAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.accept.$put> },
      ) => parseResponse(client.admin.oauth2.auth.requests.consent.accept.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminOauth2AuthRequestsConsentRejectKey() {
  return ['admin', '/admin/oauth2/auth/requests/consent/reject', 'PUT'] as const
}

export function usePutAdminOauth2AuthRequestsConsentReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.reject.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth2.auth.requests.consent.reject.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminOauth2AuthRequestsConsentRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.reject.$put> },
      ) => parseResponse(client.admin.oauth2.auth.requests.consent.reject.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminOauth2AuthRequestsDeviceAcceptKey() {
  return ['admin', '/admin/oauth2/auth/requests/device/accept', 'PUT'] as const
}

export function usePutAdminOauth2AuthRequestsDeviceAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.device.accept.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth2.auth.requests.device.accept.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminOauth2AuthRequestsDeviceAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.oauth2.auth.requests.device.accept.$put> },
      ) => parseResponse(client.admin.oauth2.auth.requests.device.accept.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOauth2AuthRequestsLoginKey(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.$get>,
) {
  return ['admin', '/admin/oauth2/auth/requests/login', args] as const
}

export function useGetAdminOauth2AuthRequestsLogin<TError = unknown>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminOauth2AuthRequestsLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.oauth2.auth.requests.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOauth2AuthRequestsLogin<TError = unknown>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminOauth2AuthRequestsLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.oauth2.auth.requests.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminOauth2AuthRequestsLoginAcceptKey() {
  return ['admin', '/admin/oauth2/auth/requests/login/accept', 'PUT'] as const
}

export function usePutAdminOauth2AuthRequestsLoginAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.accept.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth2.auth.requests.login.accept.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminOauth2AuthRequestsLoginAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.oauth2.auth.requests.login.accept.$put> },
      ) => parseResponse(client.admin.oauth2.auth.requests.login.accept.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminOauth2AuthRequestsLoginRejectKey() {
  return ['admin', '/admin/oauth2/auth/requests/login/reject', 'PUT'] as const
}

export function usePutAdminOauth2AuthRequestsLoginReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.reject.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth2.auth.requests.login.reject.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminOauth2AuthRequestsLoginRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.oauth2.auth.requests.login.reject.$put> },
      ) => parseResponse(client.admin.oauth2.auth.requests.login.reject.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOauth2AuthRequestsLogoutKey(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.$get>,
) {
  return ['admin', '/admin/oauth2/auth/requests/logout', args] as const
}

export function useGetAdminOauth2AuthRequestsLogout<TError = unknown>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminOauth2AuthRequestsLogoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.oauth2.auth.requests.logout.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOauth2AuthRequestsLogout<TError = unknown>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminOauth2AuthRequestsLogoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.oauth2.auth.requests.logout.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminOauth2AuthRequestsLogoutAcceptKey() {
  return ['admin', '/admin/oauth2/auth/requests/logout/accept', 'PUT'] as const
}

export function usePutAdminOauth2AuthRequestsLogoutAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.accept.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth2.auth.requests.logout.accept.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminOauth2AuthRequestsLogoutAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.accept.$put> },
      ) => parseResponse(client.admin.oauth2.auth.requests.logout.accept.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminOauth2AuthRequestsLogoutRejectKey() {
  return ['admin', '/admin/oauth2/auth/requests/logout/reject', 'PUT'] as const
}

export function usePutAdminOauth2AuthRequestsLogoutReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.reject.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth2.auth.requests.logout.reject.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminOauth2AuthRequestsLogoutRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.reject.$put> },
      ) => parseResponse(client.admin.oauth2.auth.requests.logout.reject.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOauth2AuthSessionsConsentKey(
  args: InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$get>,
) {
  return ['admin', '/admin/oauth2/auth/sessions/consent', args] as const
}

export function useGetAdminOauth2AuthSessionsConsent<TError = unknown>(
  args: InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminOauth2AuthSessionsConsentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.oauth2.auth.sessions.consent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOauth2AuthSessionsConsent<TError = unknown>(
  args: InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminOauth2AuthSessionsConsentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.oauth2.auth.sessions.consent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminOauth2AuthSessionsConsentKey() {
  return ['admin', '/admin/oauth2/auth/sessions/consent', 'DELETE'] as const
}

export function useDeleteAdminOauth2AuthSessionsConsent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminOauth2AuthSessionsConsentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$delete> },
      ) => parseResponse(client.admin.oauth2.auth.sessions.consent.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminOauth2AuthSessionsLoginKey() {
  return ['admin', '/admin/oauth2/auth/sessions/login', 'DELETE'] as const
}

export function useDeleteAdminOauth2AuthSessionsLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.login.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth2.auth.sessions.login.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminOauth2AuthSessionsLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.oauth2.auth.sessions.login.$delete> },
      ) => parseResponse(client.admin.oauth2.auth.sessions.login.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOauth2IntrospectKey() {
  return ['admin', '/admin/oauth2/introspect', 'POST'] as const
}

export function usePostAdminOauth2Introspect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth2.introspect.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth2.introspect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOauth2IntrospectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.oauth2.introspect.$post> },
      ) => parseResponse(client.admin.oauth2.introspect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminOauth2TokensKey() {
  return ['admin', '/admin/oauth2/tokens', 'DELETE'] as const
}

export function useDeleteAdminOauth2Tokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth2.tokens.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth2.tokens.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminOauth2TokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.oauth2.tokens.$delete> },
      ) => parseResponse(client.admin.oauth2.tokens.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminTrustGrantsJwtBearerIssuersKey(
  args: InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>,
) {
  return ['admin', '/admin/trust/grants/jwt-bearer/issuers', args] as const
}

export function useGetAdminTrustGrantsJwtBearerIssuers<TError = unknown>(
  args: InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminTrustGrantsJwtBearerIssuersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.trust.grants['jwt-bearer'].issuers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTrustGrantsJwtBearerIssuers<TError = unknown>(
  args: InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminTrustGrantsJwtBearerIssuersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.trust.grants['jwt-bearer'].issuers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminTrustGrantsJwtBearerIssuersKey() {
  return ['admin', '/admin/trust/grants/jwt-bearer/issuers', 'POST'] as const
}

export function usePostAdminTrustGrantsJwtBearerIssuers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTrustGrantsJwtBearerIssuersKey()
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
            (typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$post']
          >
        },
      ) => parseResponse(client.admin.trust.grants['jwt-bearer'].issuers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminTrustGrantsJwtBearerIssuersIdKey(
  args: InferRequestType<
    (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']
  >,
) {
  return ['admin', '/admin/trust/grants/jwt-bearer/issuers/:id', args] as const
}

export function useGetAdminTrustGrantsJwtBearerIssuersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminTrustGrantsJwtBearerIssuersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.trust.grants['jwt-bearer'].issuers[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTrustGrantsJwtBearerIssuersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminTrustGrantsJwtBearerIssuersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.trust.grants['jwt-bearer'].issuers[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminTrustGrantsJwtBearerIssuersIdKey() {
  return ['admin', '/admin/trust/grants/jwt-bearer/issuers/:id', 'DELETE'] as const
}

export function useDeleteAdminTrustGrantsJwtBearerIssuersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminTrustGrantsJwtBearerIssuersIdKey()
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
            (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.trust.grants['jwt-bearer'].issuers[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCredentialsKey() {
  return ['credentials', '/credentials', 'POST'] as const
}

export function usePostCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.credentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.credentials.$post> }) =>
        parseResponse(client.credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHealthAliveKey() {
  return ['health', '/health/alive'] as const
}

export function useGetHealthAlive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthAliveKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.alive.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthAlive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthAliveKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.alive.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthReadyKey() {
  return ['health', '/health/ready'] as const
}

export function useGetHealthReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.ready.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.ready.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauth2AuthKey() {
  return ['oauth2', '/oauth2/auth'] as const
}

export function useGetOauth2Auth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.auth.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2AuthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.auth.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2Auth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.auth.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2AuthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.auth.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauth2DeviceAuthKey() {
  return ['oauth2', '/oauth2/device/auth', 'POST'] as const
}

export function usePostOauth2DeviceAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.auth.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2DeviceAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.oauth2.device.auth.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth2DeviceVerifyKey() {
  return ['oauth2', '/oauth2/device/verify'] as const
}

export function useGetOauth2DeviceVerify<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.verify.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2DeviceVerifyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.verify.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.device.verify.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2DeviceVerify<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.verify.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2DeviceVerifyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.verify.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.device.verify.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauth2RegisterKey() {
  return ['oauth2', '/oauth2/register', 'POST'] as const
}

export function usePostOauth2Register<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2RegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.register.$post> }) =>
        parseResponse(client.oauth2.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth2RegisterIdKey(
  args: InferRequestType<(typeof client.oauth2.register)[':id']['$get']>,
) {
  return ['oauth2', '/oauth2/register/:id', args] as const
}

export function useGetOauth2RegisterId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2.register)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauth2RegisterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.register[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2RegisterId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2.register)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauth2RegisterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.register[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOauth2RegisterIdKey() {
  return ['oauth2', '/oauth2/register/:id', 'PUT'] as const
}

export function usePutOauth2RegisterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2.register)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOauth2RegisterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2.register)[':id']['$put']> },
      ) => parseResponse(client.oauth2.register[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOauth2RegisterIdKey() {
  return ['oauth2', '/oauth2/register/:id', 'DELETE'] as const
}

export function useDeleteOauth2RegisterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2.register)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOauth2RegisterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2.register)[':id']['$delete']> },
      ) => parseResponse(client.oauth2.register[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth2RevokeKey() {
  return ['oauth2', '/oauth2/revoke', 'POST'] as const
}

export function usePostOauth2Revoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2RevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.revoke.$post> }) =>
        parseResponse(client.oauth2.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth2SessionsLogoutKey() {
  return ['oauth2', '/oauth2/sessions/logout'] as const
}

export function useGetOauth2SessionsLogout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.sessions.logout.$get>>>
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
        ? getGetOauth2SessionsLogoutKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.sessions.logout.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.sessions.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2SessionsLogout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.sessions.logout.$get>>>
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
        ? getGetOauth2SessionsLogoutKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.sessions.logout.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.sessions.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauth2TokenKey() {
  return ['oauth2', '/oauth2/token', 'POST'] as const
}

export function usePostOauth2Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.token.$post> }) =>
        parseResponse(client.oauth2.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserinfoKey() {
  return ['userinfo', '/userinfo'] as const
}

export function useGetUserinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionKey() {
  return ['version', '/version'] as const
}

export function useGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
