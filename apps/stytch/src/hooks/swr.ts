import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1ConnectedAppsClientsClientIdKey(
  args: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>,
) {
  return ['v1', '/v1/connected_apps/clients/:client_id', args] as const
}

export function useGetV1ConnectedAppsClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectedAppsClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.connected_apps.clients[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectedAppsClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectedAppsClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.connected_apps.clients[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ConnectedAppsClientsClientIdKey() {
  return ['v1', '/v1/connected_apps/clients/:client_id', 'PUT'] as const
}

export function usePutV1ConnectedAppsClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConnectedAppsClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$put']>
        },
      ) => parseResponse(client.v1.connected_apps.clients[':client_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConnectedAppsClientsClientIdKey() {
  return ['v1', '/v1/connected_apps/clients/:client_id', 'DELETE'] as const
}

export function useDeleteV1ConnectedAppsClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connected_apps.clients)[':client_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectedAppsClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.connected_apps.clients)[':client_id']['$delete']>
        },
      ) =>
        parseResponse(client.v1.connected_apps.clients[':client_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectedAppsClientsSearchKey() {
  return ['v1', '/v1/connected_apps/clients/search', 'POST'] as const
}

export function usePostV1ConnectedAppsClientsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connected_apps.clients.search.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connected_apps.clients.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectedAppsClientsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connected_apps.clients.search.$post> },
      ) => parseResponse(client.v1.connected_apps.clients.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectedAppsClientsKey() {
  return ['v1', '/v1/connected_apps/clients', 'POST'] as const
}

export function usePostV1ConnectedAppsClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connected_apps.clients.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connected_apps.clients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectedAppsClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connected_apps.clients.$post> },
      ) => parseResponse(client.v1.connected_apps.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectedAppsClientsClientIdSecretsRotateStartKey() {
  return ['v1', '/v1/connected_apps/clients/:client_id/secrets/rotate/start', 'POST'] as const
}

export function usePostV1ConnectedAppsClientsClientIdSecretsRotateStart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['start']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectedAppsClientsClientIdSecretsRotateStartKey()
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
            (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.connected_apps.clients[':client_id'].secrets.rotate.start.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectedAppsClientsClientIdSecretsRotateCancelKey() {
  return ['v1', '/v1/connected_apps/clients/:client_id/secrets/rotate/cancel', 'POST'] as const
}

export function usePostV1ConnectedAppsClientsClientIdSecretsRotateCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectedAppsClientsClientIdSecretsRotateCancelKey()
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
            (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.connected_apps.clients[':client_id'].secrets.rotate.cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectedAppsClientsClientIdSecretsRotateKey() {
  return ['v1', '/v1/connected_apps/clients/:client_id/secrets/rotate', 'POST'] as const
}

export function usePostV1ConnectedAppsClientsClientIdSecretsRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectedAppsClientsClientIdSecretsRotateKey()
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
            (typeof client.v1.connected_apps.clients)[':client_id']['secrets']['rotate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.connected_apps.clients[':client_id'].secrets.rotate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1B2bScimOrganizationIdConnectionConnectionIdKey(
  args: InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/b2b/scim/:organization_id/connection/:connection_id', keyArgs] as const
}

export function useGetV1B2bScimOrganizationIdConnectionConnectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
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
        ? getGetV1B2bScimOrganizationIdConnectionConnectionIdKey(args)
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
                (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
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
          client.v1.b2b.scim[':organization_id'].connection[':connection_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bScimOrganizationIdConnectionConnectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
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
        ? getGetV1B2bScimOrganizationIdConnectionConnectionIdKey(args)
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
                (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$get']
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
          client.v1.b2b.scim[':organization_id'].connection[':connection_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1B2bScimOrganizationIdConnectionConnectionIdKey() {
  return ['v1', '/v1/b2b/scim/:organization_id/connection/:connection_id', 'PUT'] as const
}

export function usePutV1B2bScimOrganizationIdConnectionConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1B2bScimOrganizationIdConnectionConnectionIdKey()
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
            (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.scim[':organization_id'].connection[':connection_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1B2bScimOrganizationIdConnectionConnectionIdKey() {
  return ['v1', '/v1/b2b/scim/:organization_id/connection/:connection_id', 'DELETE'] as const
}

export function useDeleteV1B2bScimOrganizationIdConnectionConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1B2bScimOrganizationIdConnectionConnectionIdKey()
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
            (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.scim[':organization_id'].connection[':connection_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateStartKey() {
  return [
    'v1',
    '/v1/b2b/scim/:organization_id/connection/:connection_id/rotate/start',
    'POST',
  ] as const
}

export function usePostV1B2bScimOrganizationIdConnectionConnectionIdRotateStart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['start']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateStartKey()
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
            (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.scim[':organization_id'].connection[':connection_id'].rotate.start.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteKey() {
  return [
    'v1',
    '/v1/b2b/scim/:organization_id/connection/:connection_id/rotate/complete',
    'POST',
  ] as const
}

export function usePostV1B2bScimOrganizationIdConnectionConnectionIdRotateComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteKey()
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
            (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.scim[':organization_id'].connection[':connection_id'].rotate.complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelKey() {
  return [
    'v1',
    '/v1/b2b/scim/:organization_id/connection/:connection_id/rotate/cancel',
    'POST',
  ] as const
}

export function usePostV1B2bScimOrganizationIdConnectionConnectionIdRotateCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelKey()
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
            (typeof client.v1.b2b.scim)[':organization_id']['connection'][':connection_id']['rotate']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.scim[':organization_id'].connection[':connection_id'].rotate.cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1B2bScimOrganizationIdConnectionKey(
  args: InferRequestType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/b2b/scim/:organization_id/connection', keyArgs] as const
}

export function useGetV1B2bScimOrganizationIdConnection<TError = unknown>(
  args: InferRequestType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bScimOrganizationIdConnectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.b2b.scim[':organization_id'].connection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bScimOrganizationIdConnection<TError = unknown>(
  args: InferRequestType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bScimOrganizationIdConnectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.b2b.scim[':organization_id'].connection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1B2bScimOrganizationIdConnectionKey() {
  return ['v1', '/v1/b2b/scim/:organization_id/connection', 'POST'] as const
}

export function usePostV1B2bScimOrganizationIdConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.b2b.scim)[':organization_id']['connection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bScimOrganizationIdConnectionKey()
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
            (typeof client.v1.b2b.scim)[':organization_id']['connection']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.b2b.scim[':organization_id'].connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOrganizationsKey() {
  return ['v1', '/v1/b2b/organizations', 'POST'] as const
}

export function usePostV1B2bOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.organizations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.organizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.organizations.$post> },
      ) => parseResponse(client.v1.b2b.organizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdKey(
  args: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>,
) {
  return ['v1', '/v1/b2b/organizations/:organization_id', args] as const
}

export function useGetV1B2bOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.b2b.organizations[':organization_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.b2b.organizations[':organization_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1B2bOrganizationsOrganizationIdKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id', 'PUT'] as const
}

export function usePutV1B2bOrganizationsOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1B2bOrganizationsOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$put']>
        },
      ) => parseResponse(client.v1.b2b.organizations[':organization_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1B2bOrganizationsOrganizationIdKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id', 'DELETE'] as const
}

export function useDeleteV1B2bOrganizationsOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1B2bOrganizationsOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['$delete']>
        },
      ) =>
        parseResponse(client.v1.b2b.organizations[':organization_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOrganizationsSearchKey() {
  return ['v1', '/v1/b2b/organizations/search', 'POST'] as const
}

export function usePostV1B2bOrganizationsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.organizations.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.organizations.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOrganizationsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.organizations.search.$post> },
      ) => parseResponse(client.v1.b2b.organizations.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdMetricsKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
  >,
) {
  return ['v1', '/v1/b2b/organizations/:organization_id/metrics', args] as const
}

export function useGetV1B2bOrganizationsOrganizationIdMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMetricsKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
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
          client.v1.b2b.organizations[':organization_id'].metrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationIdMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMetricsKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['metrics']['$get']
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
          client.v1.b2b.organizations[':organization_id'].metrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdConnectedAppsKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/b2b/organizations/:organization_id/connected_apps', keyArgs] as const
}

export function useGetV1B2bOrganizationsOrganizationIdConnectedApps<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdConnectedAppsKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
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
          client.v1.b2b.organizations[':organization_id'].connected_apps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationIdConnectedApps<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdConnectedAppsKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps']['$get']
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
          client.v1.b2b.organizations[':organization_id'].connected_apps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/connected_apps/:connected_app_id',
    keyArgs,
  ] as const
}

export function useGetV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
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
          client.v1.b2b.organizations[':organization_id'].connected_apps[':connected_app_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdConnectedAppsConnectedAppIdKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['connected_apps'][':connected_app_id']['$get']
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
          client.v1.b2b.organizations[':organization_id'].connected_apps[':connected_app_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1B2bOrganizationsOrganizationIdExternalIdKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id/external_id', 'DELETE'] as const
}

export function useDeleteV1B2bOrganizationsOrganizationIdExternalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['external_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['external_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1B2bOrganizationsOrganizationIdExternalIdKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['external_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].external_id.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1B2bOrganizationsOrganizationIdMembersMemberIdKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id/members/:member_id', 'PUT'] as const
}

export function usePutV1B2bOrganizationsOrganizationIdMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1B2bOrganizationsOrganizationIdMembersMemberIdKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].members[':member_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id/members/:member_id', 'DELETE'] as const
}

export function useDeleteV1B2bOrganizationsOrganizationIdMembersMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].members[':member_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/reactivate',
    'PUT',
  ] as const
}

export function usePutV1B2bOrganizationsOrganizationIdMembersMemberIdReactivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['reactivate']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['reactivate']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['reactivate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].members[':member_id'].reactivate.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/mfa_phone_numbers/:member_id',
    'DELETE',
  ] as const
}

export function useDeleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members']['mfa_phone_numbers'][':member_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members']['mfa_phone_numbers'][':member_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['members']['mfa_phone_numbers'][':member_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].members.mfa_phone_numbers[
            ':member_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id/members/:member_id/totp', 'DELETE'] as const
}

export function useDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['totp']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['totp']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['totp']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].members[':member_id'].totp.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOrganizationsMembersSearchKey() {
  return ['v1', '/v1/b2b/organizations/members/search', 'POST'] as const
}

export function usePostV1B2bOrganizationsMembersSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.organizations.members.search.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.organizations.members.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOrganizationsMembersSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.organizations.members.search.$post> },
      ) => parseResponse(client.v1.b2b.organizations.members.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/passwords/:member_password_id',
    'DELETE',
  ] as const
}

export function useDeleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members']['passwords'][':member_password_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members']['passwords'][':member_password_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['members']['passwords'][':member_password_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].members.passwords[
            ':member_password_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsMembersDangerouslyGetMemberIdKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
  >,
) {
  return ['v1', '/v1/b2b/organizations/members/dangerously_get/:member_id', args] as const
}

export function useGetV1B2bOrganizationsMembersDangerouslyGetMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
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
        ? getGetV1B2bOrganizationsMembersDangerouslyGetMemberIdKey(args)
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
                (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
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
          client.v1.b2b.organizations.members.dangerously_get[':member_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsMembersDangerouslyGetMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
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
        ? getGetV1B2bOrganizationsMembersDangerouslyGetMemberIdKey(args)
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
                (typeof client.v1.b2b.organizations.members.dangerously_get)[':member_id']['$get']
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
          client.v1.b2b.organizations.members.dangerously_get[':member_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oidc_providers',
    args,
  ] as const
}

export function useGetV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProviders<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[':member_id'].oidc_providers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProviders<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oidc_providers']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[':member_id'].oidc_providers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/unlink_retired_email',
    'POST',
  ] as const
}

export function usePostV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['unlink_retired_email']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['unlink_retired_email']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['unlink_retired_email']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].unlink_retired_email.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/start_email_update',
    'POST',
  ] as const
}

export function usePostV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['start_email_update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['start_email_update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['start_email_update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].start_email_update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/connected_apps',
    keyArgs,
  ] as const
}

export function useGetV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedApps<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[':member_id'].connected_apps.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedApps<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[':member_id'].connected_apps.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/external_id',
    'DELETE',
  ] as const
}

export function useDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['external_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['external_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['external_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].members[':member_id'].external_id.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOrganizationsOrganizationIdMembersKey() {
  return ['v1', '/v1/b2b/organizations/:organization_id/members', 'POST'] as const
}

export function usePostV1B2bOrganizationsOrganizationIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['members']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.b2b.organizations)[':organization_id']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOrganizationsOrganizationIdMembersKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['members']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].members.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdMemberKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']
  >,
) {
  return ['v1', '/v1/b2b/organizations/:organization_id/member', args] as const
}

export function useGetV1B2bOrganizationsOrganizationIdMember<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bOrganizationsOrganizationIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].member.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationIdMember<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bOrganizationsOrganizationIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.organizations)[':organization_id']['member']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].member.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/google',
    args,
  ] as const
}

export function useGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogle<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].oauth_providers.google.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogle<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGoogleKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['google']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].oauth_providers.google.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/microsoft',
    args,
  ] as const
}

export function useGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoft<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].oauth_providers.microsoft.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoft<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersMicrosoftKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['microsoft']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].oauth_providers.microsoft.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/slack',
    args,
  ] as const
}

export function useGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlack<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].oauth_providers.slack.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlack<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersSlackKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['slack']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].oauth_providers.slack.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/hubspot',
    args,
  ] as const
}

export function useGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspot<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].oauth_providers.hubspot.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspot<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersHubspotKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['hubspot']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].oauth_providers.hubspot.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubKey(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
  >,
) {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/github',
    args,
  ] as const
}

export function useGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithub<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].oauth_providers.github.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithub<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
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
        ? getGetV1B2bOrganizationsOrganizationIdMembersMemberIdOauthProvidersGithubKey(args)
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
                (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['oauth_providers']['github']['$get']
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
          client.v1.b2b.organizations[':organization_id'].members[
            ':member_id'
          ].oauth_providers.github.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeKey() {
  return [
    'v1',
    '/v1/b2b/organizations/:organization_id/members/:member_id/connected_apps/:connected_app_id/revoke',
    'POST',
  ] as const
}

export function usePostV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevoke<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps'][':connected_app_id']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps'][':connected_app_id']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsConnectedAppIdRevokeKey()
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
            (typeof client.v1.b2b.organizations)[':organization_id']['members'][':member_id']['connected_apps'][':connected_app_id']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.organizations[':organization_id'].members[':member_id'].connected_apps[
            ':connected_app_id'
          ].revoke.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bIdpOauthAuthorizeStartKey() {
  return ['v1', '/v1/b2b/idp/oauth/authorize/start', 'POST'] as const
}

export function usePostV1B2bIdpOauthAuthorizeStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.idp.oauth.authorize.start.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bIdpOauthAuthorizeStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.start.$post> },
      ) => parseResponse(client.v1.b2b.idp.oauth.authorize.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bIdpOauthAuthorizeKey() {
  return ['v1', '/v1/b2b/idp/oauth/authorize', 'POST'] as const
}

export function usePostV1B2bIdpOauthAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.idp.oauth.authorize.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bIdpOauthAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.idp.oauth.authorize.$post> },
      ) => parseResponse(client.v1.b2b.idp.oauth.authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersKey() {
  return ['v1', '/v1/users', 'POST'] as const
}

export function usePostV1Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.users.$post> }) =>
        parseResponse(client.v1.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersUserIdKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
) {
  return ['v1', '/v1/users/:user_id', args] as const
}

export function useGetV1UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1UsersUserIdKey() {
  return ['v1', '/v1/users/:user_id', 'PUT'] as const
}

export function usePutV1UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.users)[':user_id']['$put']> },
      ) => parseResponse(client.v1.users[':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersUserIdKey() {
  return ['v1', '/v1/users/:user_id', 'DELETE'] as const
}

export function useDeleteV1UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.users)[':user_id']['$delete']> },
      ) => parseResponse(client.v1.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersSearchKey() {
  return ['v1', '/v1/users/search', 'POST'] as const
}

export function usePostV1UsersSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.users.search.$post> }) =>
        parseResponse(client.v1.users.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUserIdExchangePrimaryFactorKey() {
  return ['v1', '/v1/users/:user_id/exchange_primary_factor', 'PUT'] as const
}

export function usePutV1UsersUserIdExchangePrimaryFactor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.users)[':user_id']['exchange_primary_factor']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['exchange_primary_factor']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdExchangePrimaryFactorKey()
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
            (typeof client.v1.users)[':user_id']['exchange_primary_factor']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.users[':user_id'].exchange_primary_factor.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersEmailsEmailIdKey() {
  return ['v1', '/v1/users/emails/:email_id', 'DELETE'] as const
}

export function useDeleteV1UsersEmailsEmailId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users.emails)[':email_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users.emails)[':email_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersEmailsEmailIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.users.emails)[':email_id']['$delete']> },
      ) => parseResponse(client.v1.users.emails[':email_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersPhoneNumbersPhoneIdKey() {
  return ['v1', '/v1/users/phone_numbers/:phone_id', 'DELETE'] as const
}

export function useDeleteV1UsersPhoneNumbersPhoneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users.phone_numbers)[':phone_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users.phone_numbers)[':phone_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersPhoneNumbersPhoneIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.users.phone_numbers)[':phone_id']['$delete']>
        },
      ) => parseResponse(client.v1.users.phone_numbers[':phone_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdKey() {
  return ['v1', '/v1/users/webauthn_registrations/:webauthn_registration_id', 'DELETE'] as const
}

export function useDeleteV1UsersWebauthnRegistrationsWebauthnRegistrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users.webauthn_registrations)[':webauthn_registration_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.users.webauthn_registrations)[':webauthn_registration_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersWebauthnRegistrationsWebauthnRegistrationIdKey()
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
            (typeof client.v1.users.webauthn_registrations)[':webauthn_registration_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.users.webauthn_registrations[':webauthn_registration_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersBiometricRegistrationsBiometricRegistrationIdKey() {
  return ['v1', '/v1/users/biometric_registrations/:biometric_registration_id', 'DELETE'] as const
}

export function useDeleteV1UsersBiometricRegistrationsBiometricRegistrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users.biometric_registrations)[':biometric_registration_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.users.biometric_registrations)[':biometric_registration_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersBiometricRegistrationsBiometricRegistrationIdKey()
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
            (typeof client.v1.users.biometric_registrations)[':biometric_registration_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.users.biometric_registrations[':biometric_registration_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersTotpsTotpIdKey() {
  return ['v1', '/v1/users/totps/:totp_id', 'DELETE'] as const
}

export function useDeleteV1UsersTotpsTotpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users.totps)[':totp_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users.totps)[':totp_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersTotpsTotpIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.users.totps)[':totp_id']['$delete']> },
      ) => parseResponse(client.v1.users.totps[':totp_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersCryptoWalletsCryptoWalletIdKey() {
  return ['v1', '/v1/users/crypto_wallets/:crypto_wallet_id', 'DELETE'] as const
}

export function useDeleteV1UsersCryptoWalletsCryptoWalletId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.users.crypto_wallets)[':crypto_wallet_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users.crypto_wallets)[':crypto_wallet_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersCryptoWalletsCryptoWalletIdKey()
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
            (typeof client.v1.users.crypto_wallets)[':crypto_wallet_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.users.crypto_wallets[':crypto_wallet_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersPasswordsPasswordIdKey() {
  return ['v1', '/v1/users/passwords/:password_id', 'DELETE'] as const
}

export function useDeleteV1UsersPasswordsPasswordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users.passwords)[':password_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users.passwords)[':password_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersPasswordsPasswordIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.users.passwords)[':password_id']['$delete']> },
      ) => parseResponse(client.v1.users.passwords[':password_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersOauthOauthUserRegistrationIdKey() {
  return ['v1', '/v1/users/oauth/:oauth_user_registration_id', 'DELETE'] as const
}

export function useDeleteV1UsersOauthOauthUserRegistrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.users.oauth)[':oauth_user_registration_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users.oauth)[':oauth_user_registration_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersOauthOauthUserRegistrationIdKey()
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
            (typeof client.v1.users.oauth)[':oauth_user_registration_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.users.oauth[':oauth_user_registration_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersUserIdExternalIdKey() {
  return ['v1', '/v1/users/:user_id/external_id', 'DELETE'] as const
}

export function useDeleteV1UsersUserIdExternalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['external_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['external_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersUserIdExternalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.users)[':user_id']['external_id']['$delete']>
        },
      ) => parseResponse(client.v1.users[':user_id'].external_id.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersUserIdConnectedAppsKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/connected_apps', args] as const
}

export function useGetV1UsersUserIdConnectedApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UsersUserIdConnectedAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':user_id'].connected_apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserIdConnectedApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UsersUserIdConnectedAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['connected_apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':user_id'].connected_apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1UsersUserIdConnectedAppsConnectedAppIdRevokeKey() {
  return ['v1', '/v1/users/:user_id/connected_apps/:connected_app_id/revoke', 'POST'] as const
}

export function usePostV1UsersUserIdConnectedAppsConnectedAppIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['connected_apps'][':connected_app_id']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['connected_apps'][':connected_app_id']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersUserIdConnectedAppsConnectedAppIdRevokeKey()
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
            (typeof client.v1.users)[':user_id']['connected_apps'][':connected_app_id']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.users[':user_id'].connected_apps[':connected_app_id'].revoke.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SessionsKey(args: InferRequestType<typeof client.v1.sessions.$get>) {
  return ['v1', '/v1/sessions', args] as const
}

export function useGetV1Sessions<TError = unknown>(
  args: InferRequestType<typeof client.v1.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Sessions<TError = unknown>(
  args: InferRequestType<typeof client.v1.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SessionsAuthenticateKey() {
  return ['v1', '/v1/sessions/authenticate', 'POST'] as const
}

export function usePostV1SessionsAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sessions.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SessionsAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sessions.authenticate.$post> },
      ) => parseResponse(client.v1.sessions.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SessionsRevokeKey() {
  return ['v1', '/v1/sessions/revoke', 'POST'] as const
}

export function usePostV1SessionsRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sessions.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SessionsRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sessions.revoke.$post> }) =>
        parseResponse(client.v1.sessions.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SessionsMigrateKey() {
  return ['v1', '/v1/sessions/migrate', 'POST'] as const
}

export function usePostV1SessionsMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.migrate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sessions.migrate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SessionsMigrateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sessions.migrate.$post> }) =>
        parseResponse(client.v1.sessions.migrate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SessionsExchangeAccessTokenKey() {
  return ['v1', '/v1/sessions/exchange_access_token', 'POST'] as const
}

export function usePostV1SessionsExchangeAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.sessions.exchange_access_token.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sessions.exchange_access_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SessionsExchangeAccessTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.sessions.exchange_access_token.$post> },
      ) => parseResponse(client.v1.sessions.exchange_access_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SessionsJwksProjectIdKey(
  args: InferRequestType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>,
) {
  return ['v1', '/v1/sessions/jwks/:project_id', args] as const
}

export function useGetV1SessionsJwksProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SessionsJwksProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sessions.jwks[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SessionsJwksProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SessionsJwksProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sessions.jwks)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sessions.jwks[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SessionsAttestKey() {
  return ['v1', '/v1/sessions/attest', 'POST'] as const
}

export function usePostV1SessionsAttest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.attest.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.sessions.attest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SessionsAttestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sessions.attest.$post> }) =>
        parseResponse(client.v1.sessions.attest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1B2bSessionsKey(args: InferRequestType<typeof client.v1.b2b.sessions.$get>) {
  return ['v1', '/v1/b2b/sessions', args] as const
}

export function useGetV1B2bSessions<TError = unknown>(
  args: InferRequestType<typeof client.v1.b2b.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1B2bSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.b2b.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bSessions<TError = unknown>(
  args: InferRequestType<typeof client.v1.b2b.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1B2bSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.b2b.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1B2bSessionsAuthenticateKey() {
  return ['v1', '/v1/b2b/sessions/authenticate', 'POST'] as const
}

export function usePostV1B2bSessionsAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.sessions.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bSessionsAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.sessions.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.sessions.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bSessionsRevokeKey() {
  return ['v1', '/v1/b2b/sessions/revoke', 'POST'] as const
}

export function usePostV1B2bSessionsRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.revoke.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.sessions.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bSessionsRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.sessions.revoke.$post> },
      ) => parseResponse(client.v1.b2b.sessions.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bSessionsExchangeKey() {
  return ['v1', '/v1/b2b/sessions/exchange', 'POST'] as const
}

export function usePostV1B2bSessionsExchange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.exchange.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.sessions.exchange.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bSessionsExchangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.sessions.exchange.$post> },
      ) => parseResponse(client.v1.b2b.sessions.exchange.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bSessionsExchangeAccessTokenKey() {
  return ['v1', '/v1/b2b/sessions/exchange_access_token', 'POST'] as const
}

export function usePostV1B2bSessionsExchangeAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.sessions.exchange_access_token.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.sessions.exchange_access_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bSessionsExchangeAccessTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.b2b.sessions.exchange_access_token.$post> },
      ) => parseResponse(client.v1.b2b.sessions.exchange_access_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bSessionsAttestKey() {
  return ['v1', '/v1/b2b/sessions/attest', 'POST'] as const
}

export function usePostV1B2bSessionsAttest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.attest.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.sessions.attest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bSessionsAttestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.sessions.attest.$post> },
      ) => parseResponse(client.v1.b2b.sessions.attest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bSessionsMigrateKey() {
  return ['v1', '/v1/b2b/sessions/migrate', 'POST'] as const
}

export function usePostV1B2bSessionsMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sessions.migrate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.sessions.migrate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bSessionsMigrateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.sessions.migrate.$post> },
      ) => parseResponse(client.v1.b2b.sessions.migrate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1B2bSessionsJwksProjectIdKey(
  args: InferRequestType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>,
) {
  return ['v1', '/v1/b2b/sessions/jwks/:project_id', args] as const
}

export function useGetV1B2bSessionsJwksProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bSessionsJwksProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.b2b.sessions.jwks[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bSessionsJwksProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bSessionsJwksProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.sessions.jwks)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.b2b.sessions.jwks[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1B2bImpersonationAuthenticateKey() {
  return ['v1', '/v1/b2b/impersonation/authenticate', 'POST'] as const
}

export function usePostV1B2bImpersonationAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.impersonation.authenticate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.impersonation.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bImpersonationAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.impersonation.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.impersonation.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1B2bRbacPolicyKey() {
  return ['v1', '/v1/b2b/rbac/policy'] as const
}

export function useGetV1B2bRbacPolicy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.rbac.policy.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1B2bRbacPolicyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.rbac.policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.b2b.rbac.policy.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bRbacPolicy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.rbac.policy.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1B2bRbacPolicyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.rbac.policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.b2b.rbac.policy.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1B2bRbacOrganizationsOrganizationIdKey(
  args: InferRequestType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>,
) {
  return ['v1', '/v1/b2b/rbac/organizations/:organization_id', args] as const
}

export function useGetV1B2bRbacOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bRbacOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.b2b.rbac.organizations[':organization_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bRbacOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bRbacOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.b2b.rbac.organizations[':organization_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1B2bRbacOrganizationsOrganizationIdKey() {
  return ['v1', '/v1/b2b/rbac/organizations/:organization_id', 'PUT'] as const
}

export function usePutV1B2bRbacOrganizationsOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.b2b.rbac.organizations)[':organization_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1B2bRbacOrganizationsOrganizationIdKey()
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
            (typeof client.v1.b2b.rbac.organizations)[':organization_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.rbac.organizations[':organization_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bRecoveryCodesRecoverKey() {
  return ['v1', '/v1/b2b/recovery_codes/recover', 'POST'] as const
}

export function usePostV1B2bRecoveryCodesRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.recovery_codes.recover.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.recovery_codes.recover.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bRecoveryCodesRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.recovery_codes.recover.$post> },
      ) => parseResponse(client.v1.b2b.recovery_codes.recover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1B2bRecoveryCodesOrganizationIdMemberIdKey(
  args: InferRequestType<
    (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
  >,
) {
  return ['v1', '/v1/b2b/recovery_codes/:organization_id/:member_id', args] as const
}

export function useGetV1B2bRecoveryCodesOrganizationIdMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
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
        ? getGetV1B2bRecoveryCodesOrganizationIdMemberIdKey(args)
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
                (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
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
          client.v1.b2b.recovery_codes[':organization_id'][':member_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bRecoveryCodesOrganizationIdMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
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
        ? getGetV1B2bRecoveryCodesOrganizationIdMemberIdKey(args)
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
                (typeof client.v1.b2b.recovery_codes)[':organization_id'][':member_id']['$get']
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
          client.v1.b2b.recovery_codes[':organization_id'][':member_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1B2bRecoveryCodesRotateKey() {
  return ['v1', '/v1/b2b/recovery_codes/rotate', 'POST'] as const
}

export function usePostV1B2bRecoveryCodesRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.recovery_codes.rotate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.recovery_codes.rotate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bRecoveryCodesRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.recovery_codes.rotate.$post> },
      ) => parseResponse(client.v1.b2b.recovery_codes.rotate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bTotpKey() {
  return ['v1', '/v1/b2b/totp', 'POST'] as const
}

export function usePostV1B2bTotp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.totp.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.totp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bTotpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.b2b.totp.$post> }) =>
        parseResponse(client.v1.b2b.totp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bTotpAuthenticateKey() {
  return ['v1', '/v1/b2b/totp/authenticate', 'POST'] as const
}

export function usePostV1B2bTotpAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.totp.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.totp.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bTotpAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.totp.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.totp.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bTotpMigrateKey() {
  return ['v1', '/v1/b2b/totp/migrate', 'POST'] as const
}

export function usePostV1B2bTotpMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.totp.migrate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.totp.migrate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bTotpMigrateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.b2b.totp.migrate.$post> }) =>
        parseResponse(client.v1.b2b.totp.migrate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RbacPolicyKey() {
  return ['v1', '/v1/rbac/policy'] as const
}

export function useGetV1RbacPolicy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rbac.policy.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RbacPolicyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rbac.policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rbac.policy.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RbacPolicy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rbac.policy.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RbacPolicyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rbac.policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rbac.policy.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CryptoWalletsAuthenticateStartKey() {
  return ['v1', '/v1/crypto_wallets/authenticate/start', 'POST'] as const
}

export function usePostV1CryptoWalletsAuthenticateStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.crypto_wallets.authenticate.start.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.crypto_wallets.authenticate.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CryptoWalletsAuthenticateStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.crypto_wallets.authenticate.start.$post> },
      ) => parseResponse(client.v1.crypto_wallets.authenticate.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CryptoWalletsAuthenticateKey() {
  return ['v1', '/v1/crypto_wallets/authenticate', 'POST'] as const
}

export function usePostV1CryptoWalletsAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.crypto_wallets.authenticate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.crypto_wallets.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CryptoWalletsAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.crypto_wallets.authenticate.$post> },
      ) => parseResponse(client.v1.crypto_wallets.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DebugWhoamiKey() {
  return ['v1', '/v1/debug/whoami'] as const
}

export function useGetV1DebugWhoami<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debug.whoami.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DebugWhoamiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debug.whoami.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.debug.whoami.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DebugWhoami<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debug.whoami.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DebugWhoamiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.debug.whoami.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.debug.whoami.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1B2bDiscoveryIntermediateSessionsExchangeKey() {
  return ['v1', '/v1/b2b/discovery/intermediate_sessions/exchange', 'POST'] as const
}

export function usePostV1B2bDiscoveryIntermediateSessionsExchange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.discovery.intermediate_sessions.exchange.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.discovery.intermediate_sessions.exchange.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bDiscoveryIntermediateSessionsExchangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.b2b.discovery.intermediate_sessions.exchange.$post>
        },
      ) =>
        parseResponse(
          client.v1.b2b.discovery.intermediate_sessions.exchange.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bDiscoveryOrganizationsCreateKey() {
  return ['v1', '/v1/b2b/discovery/organizations/create', 'POST'] as const
}

export function usePostV1B2bDiscoveryOrganizationsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.discovery.organizations.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.discovery.organizations.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bDiscoveryOrganizationsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.b2b.discovery.organizations.create.$post> },
      ) => parseResponse(client.v1.b2b.discovery.organizations.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bDiscoveryOrganizationsKey() {
  return ['v1', '/v1/b2b/discovery/organizations', 'POST'] as const
}

export function usePostV1B2bDiscoveryOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.discovery.organizations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.discovery.organizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bDiscoveryOrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.discovery.organizations.$post> },
      ) => parseResponse(client.v1.b2b.discovery.organizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FingerprintLookupKey() {
  return ['v1', '/v1/fingerprint/lookup', 'POST'] as const
}

export function usePostV1FingerprintLookup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.fingerprint.lookup.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.fingerprint.lookup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FingerprintLookupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.fingerprint.lookup.$post> },
      ) => parseResponse(client.v1.fingerprint.lookup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RulesSetKey() {
  return ['v1', '/v1/rules/set', 'POST'] as const
}

export function usePostV1RulesSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rules.set.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.rules.set.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RulesSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.rules.set.$post> }) =>
        parseResponse(client.v1.rules.set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RulesListKey() {
  return ['v1', '/v1/rules/list', 'POST'] as const
}

export function usePostV1RulesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rules.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.rules.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RulesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.rules.list.$post> }) =>
        parseResponse(client.v1.rules.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1VerdictReasonsOverrideKey() {
  return ['v1', '/v1/verdict_reasons/override', 'POST'] as const
}

export function usePostV1VerdictReasonsOverride<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.verdict_reasons.override.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.verdict_reasons.override.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VerdictReasonsOverrideKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.verdict_reasons.override.$post> },
      ) => parseResponse(client.v1.verdict_reasons.override.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1VerdictReasonsListKey() {
  return ['v1', '/v1/verdict_reasons/list', 'POST'] as const
}

export function usePostV1VerdictReasonsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.verdict_reasons.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.verdict_reasons.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VerdictReasonsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.verdict_reasons.list.$post> },
      ) => parseResponse(client.v1.verdict_reasons.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EmailRiskKey() {
  return ['v1', '/v1/email/risk', 'POST'] as const
}

export function usePostV1EmailRisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.risk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.email.risk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmailRiskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.email.risk.$post> }) =>
        parseResponse(client.v1.email.risk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1IdpOauthAuthorizeStartKey() {
  return ['v1', '/v1/idp/oauth/authorize/start', 'POST'] as const
}

export function usePostV1IdpOauthAuthorizeStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.idp.oauth.authorize.start.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.idp.oauth.authorize.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IdpOauthAuthorizeStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.idp.oauth.authorize.start.$post> },
      ) => parseResponse(client.v1.idp.oauth.authorize.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1IdpOauthAuthorizeKey() {
  return ['v1', '/v1/idp/oauth/authorize', 'POST'] as const
}

export function usePostV1IdpOauthAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.idp.oauth.authorize.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.idp.oauth.authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IdpOauthAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.idp.oauth.authorize.$post> },
      ) => parseResponse(client.v1.idp.oauth.authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ImpersonationAuthenticateKey() {
  return ['v1', '/v1/impersonation/authenticate', 'POST'] as const
}

export function usePostV1ImpersonationAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.impersonation.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.impersonation.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ImpersonationAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.impersonation.authenticate.$post> },
      ) => parseResponse(client.v1.impersonation.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1M2mClientsClientIdKey(
  args: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$get']>,
) {
  return ['v1', '/v1/m2m/clients/:client_id', args] as const
}

export function useGetV1M2mClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1M2mClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.m2m.clients[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1M2mClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1M2mClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.m2m.clients[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1M2mClientsClientIdKey() {
  return ['v1', '/v1/m2m/clients/:client_id', 'PUT'] as const
}

export function usePutV1M2mClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1M2mClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$put']> },
      ) => parseResponse(client.v1.m2m.clients[':client_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1M2mClientsClientIdKey() {
  return ['v1', '/v1/m2m/clients/:client_id', 'DELETE'] as const
}

export function useDeleteV1M2mClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.m2m.clients)[':client_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1M2mClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['$delete']> },
      ) => parseResponse(client.v1.m2m.clients[':client_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1M2mClientsSearchKey() {
  return ['v1', '/v1/m2m/clients/search', 'POST'] as const
}

export function usePostV1M2mClientsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.m2m.clients.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.m2m.clients.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1M2mClientsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.m2m.clients.search.$post> },
      ) => parseResponse(client.v1.m2m.clients.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1M2mClientsKey() {
  return ['v1', '/v1/m2m/clients', 'POST'] as const
}

export function usePostV1M2mClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.m2m.clients.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.m2m.clients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1M2mClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.m2m.clients.$post> }) =>
        parseResponse(client.v1.m2m.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1M2mClientsClientIdSecretsRotateStartKey() {
  return ['v1', '/v1/m2m/clients/:client_id/secrets/rotate/start', 'POST'] as const
}

export function usePostV1M2mClientsClientIdSecretsRotateStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['start']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1M2mClientsClientIdSecretsRotateStartKey()
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
            (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.m2m.clients[':client_id'].secrets.rotate.start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1M2mClientsClientIdSecretsRotateCancelKey() {
  return ['v1', '/v1/m2m/clients/:client_id/secrets/rotate/cancel', 'POST'] as const
}

export function usePostV1M2mClientsClientIdSecretsRotateCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1M2mClientsClientIdSecretsRotateCancelKey()
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
            (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.m2m.clients[':client_id'].secrets.rotate.cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1M2mClientsClientIdSecretsRotateKey() {
  return ['v1', '/v1/m2m/clients/:client_id/secrets/rotate', 'POST'] as const
}

export function usePostV1M2mClientsClientIdSecretsRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1M2mClientsClientIdSecretsRotateKey()
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
            (typeof client.v1.m2m.clients)[':client_id']['secrets']['rotate']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.m2m.clients[':client_id'].secrets.rotate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MagicLinksAuthenticateKey() {
  return ['v1', '/v1/magic_links/authenticate', 'POST'] as const
}

export function usePostV1MagicLinksAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.magic_links.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.magic_links.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MagicLinksAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.magic_links.authenticate.$post> },
      ) => parseResponse(client.v1.magic_links.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MagicLinksKey() {
  return ['v1', '/v1/magic_links', 'POST'] as const
}

export function usePostV1MagicLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.magic_links.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.magic_links.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MagicLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.magic_links.$post> }) =>
        parseResponse(client.v1.magic_links.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MagicLinksEmailSendKey() {
  return ['v1', '/v1/magic_links/email/send', 'POST'] as const
}

export function usePostV1MagicLinksEmailSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.magic_links.email.send.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.magic_links.email.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MagicLinksEmailSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.magic_links.email.send.$post> },
      ) => parseResponse(client.v1.magic_links.email.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MagicLinksEmailLoginOrCreateKey() {
  return ['v1', '/v1/magic_links/email/login_or_create', 'POST'] as const
}

export function usePostV1MagicLinksEmailLoginOrCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.magic_links.email.login_or_create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.magic_links.email.login_or_create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MagicLinksEmailLoginOrCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.magic_links.email.login_or_create.$post> },
      ) => parseResponse(client.v1.magic_links.email.login_or_create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MagicLinksEmailInviteKey() {
  return ['v1', '/v1/magic_links/email/invite', 'POST'] as const
}

export function usePostV1MagicLinksEmailInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.magic_links.email.invite.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.magic_links.email.invite.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MagicLinksEmailInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.magic_links.email.invite.$post> },
      ) => parseResponse(client.v1.magic_links.email.invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MagicLinksEmailRevokeInviteKey() {
  return ['v1', '/v1/magic_links/email/revoke_invite', 'POST'] as const
}

export function usePostV1MagicLinksEmailRevokeInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.magic_links.email.revoke_invite.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.magic_links.email.revoke_invite.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MagicLinksEmailRevokeInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.magic_links.email.revoke_invite.$post> },
      ) => parseResponse(client.v1.magic_links.email.revoke_invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bMagicLinksAuthenticateKey() {
  return ['v1', '/v1/b2b/magic_links/authenticate', 'POST'] as const
}

export function usePostV1B2bMagicLinksAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.magic_links.authenticate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.magic_links.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bMagicLinksAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.magic_links.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.magic_links.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bMagicLinksEmailLoginOrSignupKey() {
  return ['v1', '/v1/b2b/magic_links/email/login_or_signup', 'POST'] as const
}

export function usePostV1B2bMagicLinksEmailLoginOrSignup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.magic_links.email.login_or_signup.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.magic_links.email.login_or_signup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bMagicLinksEmailLoginOrSignupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.b2b.magic_links.email.login_or_signup.$post> },
      ) => parseResponse(client.v1.b2b.magic_links.email.login_or_signup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bMagicLinksEmailInviteKey() {
  return ['v1', '/v1/b2b/magic_links/email/invite', 'POST'] as const
}

export function usePostV1B2bMagicLinksEmailInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.magic_links.email.invite.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.magic_links.email.invite.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bMagicLinksEmailInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.magic_links.email.invite.$post> },
      ) => parseResponse(client.v1.b2b.magic_links.email.invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bMagicLinksEmailDiscoverySendKey() {
  return ['v1', '/v1/b2b/magic_links/email/discovery/send', 'POST'] as const
}

export function usePostV1B2bMagicLinksEmailDiscoverySend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.magic_links.email.discovery.send.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.magic_links.email.discovery.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bMagicLinksEmailDiscoverySendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.b2b.magic_links.email.discovery.send.$post> },
      ) => parseResponse(client.v1.b2b.magic_links.email.discovery.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bMagicLinksDiscoveryAuthenticateKey() {
  return ['v1', '/v1/b2b/magic_links/discovery/authenticate', 'POST'] as const
}

export function usePostV1B2bMagicLinksDiscoveryAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.magic_links.discovery.authenticate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.magic_links.discovery.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bMagicLinksDiscoveryAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.b2b.magic_links.discovery.authenticate.$post> },
      ) =>
        parseResponse(client.v1.b2b.magic_links.discovery.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOauthAuthenticateKey() {
  return ['v1', '/v1/b2b/oauth/authenticate', 'POST'] as const
}

export function usePostV1B2bOauthAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.oauth.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.oauth.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOauthAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.oauth.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.oauth.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOauthDiscoveryAuthenticateKey() {
  return ['v1', '/v1/b2b/oauth/discovery/authenticate', 'POST'] as const
}

export function usePostV1B2bOauthDiscoveryAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.oauth.discovery.authenticate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.oauth.discovery.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOauthDiscoveryAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.oauth.discovery.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.oauth.discovery.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOtpsSmsSendKey() {
  return ['v1', '/v1/b2b/otps/sms/send', 'POST'] as const
}

export function usePostV1B2bOtpsSmsSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.otps.sms.send.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.otps.sms.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOtpsSmsSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.otps.sms.send.$post> },
      ) => parseResponse(client.v1.b2b.otps.sms.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOtpsSmsAuthenticateKey() {
  return ['v1', '/v1/b2b/otps/sms/authenticate', 'POST'] as const
}

export function usePostV1B2bOtpsSmsAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.otps.sms.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.otps.sms.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOtpsSmsAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.otps.sms.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.otps.sms.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOtpsEmailLoginOrSignupKey() {
  return ['v1', '/v1/b2b/otps/email/login_or_signup', 'POST'] as const
}

export function usePostV1B2bOtpsEmailLoginOrSignup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.otps.email.login_or_signup.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.otps.email.login_or_signup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOtpsEmailLoginOrSignupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.otps.email.login_or_signup.$post> },
      ) => parseResponse(client.v1.b2b.otps.email.login_or_signup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOtpsEmailAuthenticateKey() {
  return ['v1', '/v1/b2b/otps/email/authenticate', 'POST'] as const
}

export function usePostV1B2bOtpsEmailAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.otps.email.authenticate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.otps.email.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOtpsEmailAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.otps.email.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.otps.email.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOtpsEmailDiscoverySendKey() {
  return ['v1', '/v1/b2b/otps/email/discovery/send', 'POST'] as const
}

export function usePostV1B2bOtpsEmailDiscoverySend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.otps.email.discovery.send.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.otps.email.discovery.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOtpsEmailDiscoverySendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.otps.email.discovery.send.$post> },
      ) => parseResponse(client.v1.b2b.otps.email.discovery.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bOtpsEmailDiscoveryAuthenticateKey() {
  return ['v1', '/v1/b2b/otps/email/discovery/authenticate', 'POST'] as const
}

export function usePostV1B2bOtpsEmailDiscoveryAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.otps.email.discovery.authenticate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.otps.email.discovery.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bOtpsEmailDiscoveryAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.b2b.otps.email.discovery.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.otps.email.discovery.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PasswordsKey() {
  return ['v1', '/v1/passwords', 'POST'] as const
}

export function usePostV1Passwords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.passwords.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PasswordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.passwords.$post> }) =>
        parseResponse(client.v1.passwords.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PasswordsAuthenticateKey() {
  return ['v1', '/v1/passwords/authenticate', 'POST'] as const
}

export function usePostV1PasswordsAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.passwords.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PasswordsAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.passwords.authenticate.$post> },
      ) => parseResponse(client.v1.passwords.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PasswordsStrengthCheckKey() {
  return ['v1', '/v1/passwords/strength_check', 'POST'] as const
}

export function usePostV1PasswordsStrengthCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.strength_check.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.passwords.strength_check.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PasswordsStrengthCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.passwords.strength_check.$post> },
      ) => parseResponse(client.v1.passwords.strength_check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PasswordsMigrateKey() {
  return ['v1', '/v1/passwords/migrate', 'POST'] as const
}

export function usePostV1PasswordsMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.migrate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.passwords.migrate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PasswordsMigrateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.passwords.migrate.$post> },
      ) => parseResponse(client.v1.passwords.migrate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PasswordsEmailResetStartKey() {
  return ['v1', '/v1/passwords/email/reset/start', 'POST'] as const
}

export function usePostV1PasswordsEmailResetStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.passwords.email.reset.start.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.passwords.email.reset.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PasswordsEmailResetStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.passwords.email.reset.start.$post> },
      ) => parseResponse(client.v1.passwords.email.reset.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PasswordsEmailResetKey() {
  return ['v1', '/v1/passwords/email/reset', 'POST'] as const
}

export function usePostV1PasswordsEmailReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.email.reset.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.passwords.email.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PasswordsEmailResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.passwords.email.reset.$post> },
      ) => parseResponse(client.v1.passwords.email.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PasswordsExistingPasswordResetKey() {
  return ['v1', '/v1/passwords/existing_password/reset', 'POST'] as const
}

export function usePostV1PasswordsExistingPasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.passwords.existing_password.reset.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.passwords.existing_password.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PasswordsExistingPasswordResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.passwords.existing_password.reset.$post> },
      ) => parseResponse(client.v1.passwords.existing_password.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PasswordsSessionResetKey() {
  return ['v1', '/v1/passwords/session/reset', 'POST'] as const
}

export function usePostV1PasswordsSessionReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.passwords.session.reset.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.passwords.session.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PasswordsSessionResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.passwords.session.reset.$post> },
      ) => parseResponse(client.v1.passwords.session.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bPasswordsStrengthCheckKey() {
  return ['v1', '/v1/b2b/passwords/strength_check', 'POST'] as const
}

export function usePostV1B2bPasswordsStrengthCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.strength_check.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.passwords.strength_check.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bPasswordsStrengthCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.passwords.strength_check.$post> },
      ) => parseResponse(client.v1.b2b.passwords.strength_check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bPasswordsMigrateKey() {
  return ['v1', '/v1/b2b/passwords/migrate', 'POST'] as const
}

export function usePostV1B2bPasswordsMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.passwords.migrate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.passwords.migrate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bPasswordsMigrateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.passwords.migrate.$post> },
      ) => parseResponse(client.v1.b2b.passwords.migrate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bPasswordsAuthenticateKey() {
  return ['v1', '/v1/b2b/passwords/authenticate', 'POST'] as const
}

export function usePostV1B2bPasswordsAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.passwords.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.passwords.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bPasswordsAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.passwords.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.passwords.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bPasswordsEmailResetStartKey() {
  return ['v1', '/v1/b2b/passwords/email/reset/start', 'POST'] as const
}

export function usePostV1B2bPasswordsEmailResetStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.email.reset.start.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.passwords.email.reset.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bPasswordsEmailResetStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.passwords.email.reset.start.$post> },
      ) => parseResponse(client.v1.b2b.passwords.email.reset.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bPasswordsEmailResetKey() {
  return ['v1', '/v1/b2b/passwords/email/reset', 'POST'] as const
}

export function usePostV1B2bPasswordsEmailReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.passwords.email.reset.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.passwords.email.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bPasswordsEmailResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.passwords.email.reset.$post> },
      ) => parseResponse(client.v1.b2b.passwords.email.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bPasswordsEmailRequireResetKey() {
  return ['v1', '/v1/b2b/passwords/email/require_reset', 'POST'] as const
}

export function usePostV1B2bPasswordsEmailRequireReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.email.require_reset.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.passwords.email.require_reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bPasswordsEmailRequireResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.b2b.passwords.email.require_reset.$post> },
      ) => parseResponse(client.v1.b2b.passwords.email.require_reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bPasswordsSessionResetKey() {
  return ['v1', '/v1/b2b/passwords/session/reset', 'POST'] as const
}

export function usePostV1B2bPasswordsSessionReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.session.reset.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.passwords.session.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bPasswordsSessionResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.passwords.session.reset.$post> },
      ) => parseResponse(client.v1.b2b.passwords.session.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bPasswordsExistingPasswordResetKey() {
  return ['v1', '/v1/b2b/passwords/existing_password/reset', 'POST'] as const
}

export function usePostV1B2bPasswordsExistingPasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.existing_password.reset.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.passwords.existing_password.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bPasswordsExistingPasswordResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.b2b.passwords.existing_password.reset.$post> },
      ) => parseResponse(client.v1.b2b.passwords.existing_password.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bPasswordsDiscoveryAuthenticateKey() {
  return ['v1', '/v1/b2b/passwords/discovery/authenticate', 'POST'] as const
}

export function usePostV1B2bPasswordsDiscoveryAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.discovery.authenticate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.passwords.discovery.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bPasswordsDiscoveryAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.b2b.passwords.discovery.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.passwords.discovery.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bPasswordsDiscoveryEmailResetStartKey() {
  return ['v1', '/v1/b2b/passwords/discovery/email/reset/start', 'POST'] as const
}

export function usePostV1B2bPasswordsDiscoveryEmailResetStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.discovery.email.reset.start.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bPasswordsDiscoveryEmailResetStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.start.$post>
        },
      ) =>
        parseResponse(
          client.v1.b2b.passwords.discovery.email.reset.start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bPasswordsDiscoveryEmailResetKey() {
  return ['v1', '/v1/b2b/passwords/discovery/email/reset', 'POST'] as const
}

export function usePostV1B2bPasswordsDiscoveryEmailReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.b2b.passwords.discovery.email.reset.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bPasswordsDiscoveryEmailResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.b2b.passwords.discovery.email.reset.$post> },
      ) => parseResponse(client.v1.b2b.passwords.discovery.email.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OauthAttachKey() {
  return ['v1', '/v1/oauth/attach', 'POST'] as const
}

export function usePostV1OauthAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.attach.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.oauth.attach.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OauthAttachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.oauth.attach.$post> }) =>
        parseResponse(client.v1.oauth.attach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OauthAuthenticateKey() {
  return ['v1', '/v1/oauth/authenticate', 'POST'] as const
}

export function usePostV1OauthAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.oauth.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OauthAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.oauth.authenticate.$post> },
      ) => parseResponse(client.v1.oauth.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OtpsAuthenticateKey() {
  return ['v1', '/v1/otps/authenticate', 'POST'] as const
}

export function usePostV1OtpsAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.otps.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OtpsAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.otps.authenticate.$post> },
      ) => parseResponse(client.v1.otps.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OtpsSmsSendKey() {
  return ['v1', '/v1/otps/sms/send', 'POST'] as const
}

export function usePostV1OtpsSmsSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.sms.send.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.otps.sms.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OtpsSmsSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.otps.sms.send.$post> }) =>
        parseResponse(client.v1.otps.sms.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OtpsSmsLoginOrCreateKey() {
  return ['v1', '/v1/otps/sms/login_or_create', 'POST'] as const
}

export function usePostV1OtpsSmsLoginOrCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.sms.login_or_create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.otps.sms.login_or_create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OtpsSmsLoginOrCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.otps.sms.login_or_create.$post> },
      ) => parseResponse(client.v1.otps.sms.login_or_create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OtpsWhatsappSendKey() {
  return ['v1', '/v1/otps/whatsapp/send', 'POST'] as const
}

export function usePostV1OtpsWhatsappSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.whatsapp.send.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.otps.whatsapp.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OtpsWhatsappSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.otps.whatsapp.send.$post> },
      ) => parseResponse(client.v1.otps.whatsapp.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OtpsWhatsappLoginOrCreateKey() {
  return ['v1', '/v1/otps/whatsapp/login_or_create', 'POST'] as const
}

export function usePostV1OtpsWhatsappLoginOrCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.otps.whatsapp.login_or_create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.otps.whatsapp.login_or_create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OtpsWhatsappLoginOrCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.otps.whatsapp.login_or_create.$post> },
      ) => parseResponse(client.v1.otps.whatsapp.login_or_create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OtpsEmailSendKey() {
  return ['v1', '/v1/otps/email/send', 'POST'] as const
}

export function usePostV1OtpsEmailSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.email.send.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.otps.email.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OtpsEmailSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.otps.email.send.$post> }) =>
        parseResponse(client.v1.otps.email.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OtpsEmailLoginOrCreateKey() {
  return ['v1', '/v1/otps/email/login_or_create', 'POST'] as const
}

export function usePostV1OtpsEmailLoginOrCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.otps.email.login_or_create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.otps.email.login_or_create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OtpsEmailLoginOrCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.otps.email.login_or_create.$post> },
      ) => parseResponse(client.v1.otps.email.login_or_create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsMetricsKey() {
  return ['v1', '/v1/projects/metrics'] as const
}

export function useGetV1ProjectsMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.metrics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.metrics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1B2bSsoOrganizationIdKey(
  args: InferRequestType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/b2b/sso/:organization_id', keyArgs] as const
}

export function useGetV1B2bSsoOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bSsoOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.b2b.sso[':organization_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1B2bSsoOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1B2bSsoOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.b2b.sso)[':organization_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.b2b.sso[':organization_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1B2bSsoOrganizationIdConnectionsConnectionIdKey() {
  return ['v1', '/v1/b2b/sso/:organization_id/connections/:connection_id', 'DELETE'] as const
}

export function useDeleteV1B2bSsoOrganizationIdConnectionsConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso)[':organization_id']['connections'][':connection_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.sso)[':organization_id']['connections'][':connection_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1B2bSsoOrganizationIdConnectionsConnectionIdKey()
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
            (typeof client.v1.b2b.sso)[':organization_id']['connections'][':connection_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.sso[':organization_id'].connections[':connection_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bSsoAuthenticateKey() {
  return ['v1', '/v1/b2b/sso/authenticate', 'POST'] as const
}

export function usePostV1B2bSsoAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.b2b.sso.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.b2b.sso.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bSsoAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.b2b.sso.authenticate.$post> },
      ) => parseResponse(client.v1.b2b.sso.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bSsoOidcOrganizationIdKey() {
  return ['v1', '/v1/b2b/sso/oidc/:organization_id', 'POST'] as const
}

export function usePostV1B2bSsoOidcOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.sso.oidc)[':organization_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.b2b.sso.oidc)[':organization_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bSsoOidcOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.b2b.sso.oidc)[':organization_id']['$post']> },
      ) => parseResponse(client.v1.b2b.sso.oidc[':organization_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1B2bSsoOidcOrganizationIdConnectionsConnectionIdKey() {
  return ['v1', '/v1/b2b/sso/oidc/:organization_id/connections/:connection_id', 'PUT'] as const
}

export function usePutV1B2bSsoOidcOrganizationIdConnectionsConnectionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.oidc)[':organization_id']['connections'][':connection_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.sso.oidc)[':organization_id']['connections'][':connection_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1B2bSsoOidcOrganizationIdConnectionsConnectionIdKey()
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
            (typeof client.v1.b2b.sso.oidc)[':organization_id']['connections'][':connection_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.sso.oidc[':organization_id'].connections[':connection_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bSsoSamlOrganizationIdKey() {
  return ['v1', '/v1/b2b/sso/saml/:organization_id', 'POST'] as const
}

export function usePostV1B2bSsoSamlOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.sso.saml)[':organization_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.b2b.sso.saml)[':organization_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bSsoSamlOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.b2b.sso.saml)[':organization_id']['$post']> },
      ) => parseResponse(client.v1.b2b.sso.saml[':organization_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdKey() {
  return ['v1', '/v1/b2b/sso/saml/:organization_id/connections/:connection_id', 'PUT'] as const
}

export function usePutV1B2bSsoSamlOrganizationIdConnectionsConnectionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdKey()
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
            (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.sso.saml[':organization_id'].connections[':connection_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlKey() {
  return ['v1', '/v1/b2b/sso/saml/:organization_id/connections/:connection_id/url', 'PUT'] as const
}

export function usePutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['url']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['url']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlKey()
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
            (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['url']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.sso.saml[':organization_id'].connections[':connection_id'].url.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdKey() {
  return [
    'v1',
    '/v1/b2b/sso/saml/:organization_id/connections/:connection_id/verification_certificates/:certificate_id',
    'DELETE',
  ] as const
}

export function useDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['verification_certificates'][':certificate_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['verification_certificates'][':certificate_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdKey()
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
            (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['verification_certificates'][':certificate_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.sso.saml[':organization_id'].connections[
            ':connection_id'
          ].verification_certificates[':certificate_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdKey() {
  return [
    'v1',
    '/v1/b2b/sso/saml/:organization_id/connections/:connection_id/encryption_private_keys/:private_key_id',
    'DELETE',
  ] as const
}

export function useDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['encryption_private_keys'][':private_key_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['encryption_private_keys'][':private_key_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdKey()
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
            (typeof client.v1.b2b.sso.saml)[':organization_id']['connections'][':connection_id']['encryption_private_keys'][':private_key_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.sso.saml[':organization_id'].connections[
            ':connection_id'
          ].encryption_private_keys[':private_key_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1B2bSsoExternalOrganizationIdKey() {
  return ['v1', '/v1/b2b/sso/external/:organization_id', 'POST'] as const
}

export function usePostV1B2bSsoExternalOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.b2b.sso.external)[':organization_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.b2b.sso.external)[':organization_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1B2bSsoExternalOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.b2b.sso.external)[':organization_id']['$post']>
        },
      ) => parseResponse(client.v1.b2b.sso.external[':organization_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1B2bSsoExternalOrganizationIdConnectionsConnectionIdKey() {
  return ['v1', '/v1/b2b/sso/external/:organization_id/connections/:connection_id', 'PUT'] as const
}

export function usePutV1B2bSsoExternalOrganizationIdConnectionsConnectionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.b2b.sso.external)[':organization_id']['connections'][':connection_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.b2b.sso.external)[':organization_id']['connections'][':connection_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1B2bSsoExternalOrganizationIdConnectionsConnectionIdKey()
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
            (typeof client.v1.b2b.sso.external)[':organization_id']['connections'][':connection_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.b2b.sso.external[':organization_id'].connections[':connection_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TotpsKey() {
  return ['v1', '/v1/totps', 'POST'] as const
}

export function usePostV1Totps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.totps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TotpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.totps.$post> }) =>
        parseResponse(client.v1.totps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TotpsAuthenticateKey() {
  return ['v1', '/v1/totps/authenticate', 'POST'] as const
}

export function usePostV1TotpsAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.totps.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TotpsAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.totps.authenticate.$post> },
      ) => parseResponse(client.v1.totps.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TotpsRecoveryCodesKey() {
  return ['v1', '/v1/totps/recovery_codes', 'POST'] as const
}

export function usePostV1TotpsRecoveryCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.recovery_codes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.totps.recovery_codes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TotpsRecoveryCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.totps.recovery_codes.$post> },
      ) => parseResponse(client.v1.totps.recovery_codes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TotpsRecoverKey() {
  return ['v1', '/v1/totps/recover', 'POST'] as const
}

export function usePostV1TotpsRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.totps.recover.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.totps.recover.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TotpsRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.totps.recover.$post> }) =>
        parseResponse(client.v1.totps.recover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebauthnRegisterStartKey() {
  return ['v1', '/v1/webauthn/register/start', 'POST'] as const
}

export function usePostV1WebauthnRegisterStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.webauthn.register.start.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.webauthn.register.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebauthnRegisterStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.webauthn.register.start.$post> },
      ) => parseResponse(client.v1.webauthn.register.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebauthnRegisterKey() {
  return ['v1', '/v1/webauthn/register', 'POST'] as const
}

export function usePostV1WebauthnRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.webauthn.register.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.webauthn.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebauthnRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.webauthn.register.$post> },
      ) => parseResponse(client.v1.webauthn.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebauthnAuthenticateStartKey() {
  return ['v1', '/v1/webauthn/authenticate/start', 'POST'] as const
}

export function usePostV1WebauthnAuthenticateStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.webauthn.authenticate.start.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.webauthn.authenticate.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebauthnAuthenticateStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.webauthn.authenticate.start.$post> },
      ) => parseResponse(client.v1.webauthn.authenticate.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebauthnAuthenticateKey() {
  return ['v1', '/v1/webauthn/authenticate', 'POST'] as const
}

export function usePostV1WebauthnAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.webauthn.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.webauthn.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebauthnAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.webauthn.authenticate.$post> },
      ) => parseResponse(client.v1.webauthn.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1WebauthnWebauthnRegistrationIdKey() {
  return ['v1', '/v1/webauthn/:webauthn_registration_id', 'PUT'] as const
}

export function usePutV1WebauthnWebauthnRegistrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.webauthn)[':webauthn_registration_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.webauthn)[':webauthn_registration_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WebauthnWebauthnRegistrationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.webauthn)[':webauthn_registration_id']['$put']>
        },
      ) => parseResponse(client.v1.webauthn[':webauthn_registration_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebauthnCredentialsUserIdDomainKey(
  args: InferRequestType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>,
) {
  return ['v1', '/v1/webauthn/credentials/:user_id/:domain', args] as const
}

export function useGetV1WebauthnCredentialsUserIdDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WebauthnCredentialsUserIdDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.webauthn.credentials[':user_id'][':domain'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebauthnCredentialsUserIdDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WebauthnCredentialsUserIdDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.webauthn.credentials)[':user_id'][':domain']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.webauthn.credentials[':user_id'][':domain'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
