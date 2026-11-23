import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getApiKeysKey() {
  return ['api-keys'] as const
}

export function getAuditKey() {
  return ['audit'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getDockerRegistryKey() {
  return ['docker-registry'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getObjectStorageKey() {
  return ['object-storage'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getPreviewKey() {
  return ['preview'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getRunnersKey() {
  return ['runners'] as const
}

export function getSandboxKey() {
  return ['sandbox'] as const
}

export function getSharedRegionsKey() {
  return ['shared-regions'] as const
}

export function getSnapshotsKey() {
  return ['snapshots'] as const
}

export function getToolboxKey() {
  return ['toolbox'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVolumesKey() {
  return ['volumes'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getGetConfigKey() {
  return ['config', '/config'] as const
}

export function useGetConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiKeysKey(args: InferRequestType<(typeof client)['api-keys']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['api-keys', '/api-keys', keyArgs] as const
}

export function useGetApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiKeysKey() {
  return ['api-keys', '/api-keys', 'POST'] as const
}

export function usePostApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['api-keys']['$post']> }) =>
        parseResponse(client['api-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeysCurrentKey(
  args: InferRequestType<(typeof client)['api-keys']['current']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api-keys', '/api-keys/current', keyArgs] as const
}

export function useGetApiKeysCurrent<TError = unknown>(
  args: InferRequestType<(typeof client)['api-keys']['current']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysCurrentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-keys'].current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeysCurrent<TError = unknown>(
  args: InferRequestType<(typeof client)['api-keys']['current']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysCurrentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-keys'].current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiKeysNameKey(
  args: InferRequestType<(typeof client)['api-keys'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api-keys', '/api-keys/:name', keyArgs] as const
}

export function useGetApiKeysName<TError = unknown>(
  args: InferRequestType<(typeof client)['api-keys'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-keys'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeysName<TError = unknown>(
  args: InferRequestType<(typeof client)['api-keys'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-keys'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiKeysNameKey() {
  return ['api-keys', '/api-keys/:name', 'DELETE'] as const
}

export function useDeleteApiKeysName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['api-keys'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeysNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['api-keys'][':name']['$delete']> },
      ) => parseResponse(client['api-keys'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiKeysUserIdNameKey() {
  return ['api-keys', '/api-keys/:userId/:name', 'DELETE'] as const
}

export function useDeleteApiKeysUserIdName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['api-keys'][':userId'][':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['api-keys'][':userId'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeysUserIdNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['api-keys'][':userId'][':name']['$delete']> },
      ) => parseResponse(client['api-keys'][':userId'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsInvitationsKey() {
  return ['organizations', '/organizations/invitations'] as const
}

export function useGetOrganizationsInvitations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
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
        ? getGetOrganizationsInvitationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.invitations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsInvitations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
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
        ? getGetOrganizationsInvitationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.invitations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsInvitationsCountKey() {
  return ['organizations', '/organizations/invitations/count'] as const
}

export function useGetOrganizationsInvitationsCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>
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
        ? getGetOrganizationsInvitationsCountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations.invitations.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsInvitationsCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>
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
        ? getGetOrganizationsInvitationsCountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations.invitations.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsInvitationsInvitationIdAcceptKey() {
  return ['organizations', '/organizations/invitations/:invitationId/accept', 'POST'] as const
}

export function usePostOrganizationsInvitationsInvitationIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations.invitations)[':invitationId']['accept']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations.invitations)[':invitationId']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsInvitationsInvitationIdAcceptKey()
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
            (typeof client.organizations.invitations)[':invitationId']['accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations.invitations[':invitationId'].accept.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsInvitationsInvitationIdDeclineKey() {
  return ['organizations', '/organizations/invitations/:invitationId/decline', 'POST'] as const
}

export function usePostOrganizationsInvitationsInvitationIdDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations.invitations)[':invitationId']['decline']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations.invitations)[':invitationId']['decline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsInvitationsInvitationIdDeclineKey()
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
            (typeof client.organizations.invitations)[':invitationId']['decline']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations.invitations[':invitationId'].decline.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsKey() {
  return ['organizations', '/organizations'] as const
}

export function useGetOrganizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsKey() {
  return ['organizations', '/organizations', 'POST'] as const
}

export function usePostOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organizations.$post> }) =>
        parseResponse(client.organizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdDefaultRegionKey() {
  return ['organizations', '/organizations/:organizationId/default-region', 'PATCH'] as const
}

export function usePatchOrganizationsOrganizationIdDefaultRegion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['default-region']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['default-region']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdDefaultRegionKey()
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
            (typeof client.organizations)[':organizationId']['default-region']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId']['default-region'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId', args] as const
}

export function useGetOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdKey() {
  return ['organizations', '/organizations/:organizationId', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)[':organizationId']['$delete']> },
      ) => parseResponse(client.organizations[':organizationId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdUsageKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['usage']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/usage', args] as const
}

export function useGetOrganizationsOrganizationIdUsage<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['usage']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdUsage<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['usage']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdQuotaKey() {
  return ['organizations', '/organizations/:organizationId/quota', 'PATCH'] as const
}

export function usePatchOrganizationsOrganizationIdQuota<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['quota']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['quota']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdQuotaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations)[':organizationId']['quota']['$patch']>
        },
      ) => parseResponse(client.organizations[':organizationId'].quota.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdQuotaRegionIdKey() {
  return ['organizations', '/organizations/:organizationId/quota/:regionId', 'PATCH'] as const
}

export function usePatchOrganizationsOrganizationIdQuotaRegionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['quota'][':regionId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['quota'][':regionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdQuotaRegionIdKey()
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
            (typeof client.organizations)[':organizationId']['quota'][':regionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].quota[':regionId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdLeaveKey() {
  return ['organizations', '/organizations/:organizationId/leave', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['leave']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations)[':organizationId']['leave']['$post']>
        },
      ) => parseResponse(client.organizations[':organizationId'].leave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdSuspendKey() {
  return ['organizations', '/organizations/:organizationId/suspend', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['suspend']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdSuspendKey()
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
            (typeof client.organizations)[':organizationId']['suspend']['$post']
          >
        },
      ) => parseResponse(client.organizations[':organizationId'].suspend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdUnsuspendKey() {
  return ['organizations', '/organizations/:organizationId/unsuspend', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdUnsuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['unsuspend']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['unsuspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdUnsuspendKey()
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
            (typeof client.organizations)[':organizationId']['unsuspend']['$post']
          >
        },
      ) =>
        parseResponse(client.organizations[':organizationId'].unsuspend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOtelConfigBySandboxAuthTokenAuthTokenKey(
  args: InferRequestType<
    (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/otel-config/by-sandbox-auth-token/:authToken',
    args,
  ] as const
}

export function useGetOrganizationsOtelConfigBySandboxAuthTokenAuthToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
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
        ? getGetOrganizationsOtelConfigBySandboxAuthTokenAuthTokenKey(args)
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
                (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
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
          client.organizations['otel-config']['by-sandbox-auth-token'][':authToken'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOtelConfigBySandboxAuthTokenAuthToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
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
        ? getGetOrganizationsOtelConfigBySandboxAuthTokenAuthTokenKey(args)
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
                (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
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
          client.organizations['otel-config']['by-sandbox-auth-token'][':authToken'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOtelConfigKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/otel-config', args] as const
}

export function useGetOrganizationsOrganizationIdOtelConfig<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdOtelConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId']['otel-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOtelConfig<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdOtelConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId']['otel-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOtelConfigKey() {
  return ['organizations', '/organizations/:organizationId/otel-config', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdOtelConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOtelConfigKey()
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
            (typeof client.organizations)[':organizationId']['otel-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId']['otel-config'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOtelConfigKey() {
  return ['organizations', '/organizations/:organizationId/otel-config', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationIdOtelConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdOtelConfigKey()
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
            (typeof client.organizations)[':organizationId']['otel-config']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId']['otel-config'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressKey() {
  return [
    'organizations',
    '/organizations/:organizationId/sandbox-default-limited-network-egress',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['sandbox-default-limited-network-egress']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['sandbox-default-limited-network-egress']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressKey()
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
            (typeof client.organizations)[':organizationId']['sandbox-default-limited-network-egress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId']['sandbox-default-limited-network-egress'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdExperimentalConfigKey() {
  return ['organizations', '/organizations/:organizationId/experimental-config', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdExperimentalConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['experimental-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['experimental-config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdExperimentalConfigKey()
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
            (typeof client.organizations)[':organizationId']['experimental-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId']['experimental-config'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdRolesKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/roles', args] as const
}

export function useGetOrganizationsOrganizationIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdRolesKey() {
  return ['organizations', '/organizations/:organizationId/roles', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$post']>
        },
      ) => parseResponse(client.organizations[':organizationId'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdRolesRoleIdKey() {
  return ['organizations', '/organizations/:organizationId/roles/:roleId', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationId']['roles'][':roleId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['roles'][':roleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdRolesRoleIdKey()
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
            (typeof client.organizations)[':organizationId']['roles'][':roleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].roles[':roleId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdRolesRoleIdKey() {
  return ['organizations', '/organizations/:organizationId/roles/:roleId', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['roles'][':roleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['roles'][':roleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdRolesRoleIdKey()
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
            (typeof client.organizations)[':organizationId']['roles'][':roleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].roles[':roleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdUsersKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['users']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/users', args] as const
}

export function useGetOrganizationsOrganizationIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdUsersUserIdAccessKey() {
  return ['organizations', '/organizations/:organizationId/users/:userId/access', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdUsersUserIdAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['users'][':userId']['access']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['users'][':userId']['access']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdUsersUserIdAccessKey()
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
            (typeof client.organizations)[':organizationId']['users'][':userId']['access']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].users[':userId'].access.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdUsersUserIdKey() {
  return ['organizations', '/organizations/:organizationId/users/:userId', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['users'][':userId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['users'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdUsersUserIdKey()
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
            (typeof client.organizations)[':organizationId']['users'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].users[':userId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdInvitationsKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/invitations', args] as const
}

export function useGetOrganizationsOrganizationIdInvitations<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['invitations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['invitations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].invitations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdInvitations<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['invitations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['invitations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].invitations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdInvitationsKey() {
  return ['organizations', '/organizations/:organizationId/invitations', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationId']['invitations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdInvitationsKey()
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
            (typeof client.organizations)[':organizationId']['invitations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].invitations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdInvitationsInvitationIdKey() {
  return [
    'organizations',
    '/organizations/:organizationId/invitations/:invitationId',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdInvitationsInvitationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdInvitationsInvitationIdKey()
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
            (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].invitations[':invitationId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdInvitationsInvitationIdCancelKey() {
  return [
    'organizations',
    '/organizations/:organizationId/invitations/:invitationId/cancel',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdInvitationsInvitationIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['cancel']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdInvitationsInvitationIdCancelKey()
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
            (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].invitations[':invitationId'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRegionsKey(args: InferRequestType<typeof client.regions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['regions', '/regions', keyArgs] as const
}

export function useGetRegions<TError = unknown>(
  args: InferRequestType<typeof client.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.regions.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRegions<TError = unknown>(
  args: InferRequestType<typeof client.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.regions.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRegionsKey() {
  return ['regions', '/regions', 'POST'] as const
}

export function usePostRegions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.regions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.regions.$post> }) =>
        parseResponse(client.regions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRegionsIdKey(args: InferRequestType<(typeof client.regions)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['regions', '/regions/:id', keyArgs] as const
}

export function useGetRegionsId<TError = unknown>(
  args: InferRequestType<(typeof client.regions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegionsId<TError = unknown>(
  args: InferRequestType<(typeof client.regions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRegionsIdKey() {
  return ['regions', '/regions/:id', 'DELETE'] as const
}

export function useDeleteRegionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.regions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRegionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.regions)[':id']['$delete']> },
      ) => parseResponse(client.regions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRegionsIdKey() {
  return ['regions', '/regions/:id', 'PATCH'] as const
}

export function usePatchRegionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.regions)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRegionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.regions)[':id']['$patch']> },
      ) => parseResponse(client.regions[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegionsIdRegenerateProxyApiKeyKey() {
  return ['regions', '/regions/:id/regenerate-proxy-api-key', 'POST'] as const
}

export function usePostRegionsIdRegenerateProxyApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.regions)[':id']['regenerate-proxy-api-key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.regions)[':id']['regenerate-proxy-api-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegionsIdRegenerateProxyApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.regions)[':id']['regenerate-proxy-api-key']['$post']>
        },
      ) =>
        parseResponse(client.regions[':id']['regenerate-proxy-api-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegionsIdRegenerateSshGatewayApiKeyKey() {
  return ['regions', '/regions/:id/regenerate-ssh-gateway-api-key', 'POST'] as const
}

export function usePostRegionsIdRegenerateSshGatewayApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.regions)[':id']['regenerate-ssh-gateway-api-key']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.regions)[':id']['regenerate-ssh-gateway-api-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegionsIdRegenerateSshGatewayApiKeyKey()
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
            (typeof client.regions)[':id']['regenerate-ssh-gateway-api-key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.regions[':id']['regenerate-ssh-gateway-api-key'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRegionsIdRegenerateSnapshotManagerCredentialsKey() {
  return ['regions', '/regions/:id/regenerate-snapshot-manager-credentials', 'POST'] as const
}

export function usePostRegionsIdRegenerateSnapshotManagerCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.regions)[':id']['regenerate-snapshot-manager-credentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.regions)[':id']['regenerate-snapshot-manager-credentials']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegionsIdRegenerateSnapshotManagerCredentialsKey()
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
            (typeof client.regions)[':id']['regenerate-snapshot-manager-credentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client.regions[':id']['regenerate-snapshot-manager-credentials'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeKey() {
  return ['users', '/users/me'] as const
}

export function useGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersAccountProvidersKey() {
  return ['users', '/users/account-providers'] as const
}

export function useGetUsersAccountProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>
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
        ? getGetUsersAccountProvidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users['account-providers'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersAccountProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>
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
        ? getGetUsersAccountProvidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users['account-providers'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersLinkedAccountsKey() {
  return ['users', '/users/linked-accounts', 'POST'] as const
}

export function usePostUsersLinkedAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)['linked-accounts']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)['linked-accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersLinkedAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)['linked-accounts']['$post']> },
      ) => parseResponse(client.users['linked-accounts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersLinkedAccountsProviderProviderUserIdKey() {
  return ['users', '/users/linked-accounts/:provider/:providerUserId', 'DELETE'] as const
}

export function useDeleteUsersLinkedAccountsProviderProviderUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)['linked-accounts'][':provider'][':providerUserId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)['linked-accounts'][':provider'][':providerUserId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersLinkedAccountsProviderProviderUserIdKey()
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
            (typeof client.users)['linked-accounts'][':provider'][':providerUserId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users['linked-accounts'][':provider'][':providerUserId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMfaSmsEnrollKey() {
  return ['users', '/users/mfa/sms/enroll', 'POST'] as const
}

export function usePostUsersMfaSmsEnroll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.mfa.sms.enroll.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMfaSmsEnrollKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.users.mfa.sms.enroll.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSharedRegionsKey() {
  return ['shared-regions', '/shared-regions'] as const
}

export function useGetSharedRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSharedRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shared-regions'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSharedRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSharedRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shared-regions'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxKey(args: InferRequestType<typeof client.sandbox.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox', keyArgs] as const
}

export function useGetSandbox<TError = unknown>(
  args: InferRequestType<typeof client.sandbox.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSandboxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sandbox.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSandbox<TError = unknown>(
  args: InferRequestType<typeof client.sandbox.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSandboxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sandbox.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSandboxKey() {
  return ['sandbox', '/sandbox', 'POST'] as const
}

export function usePostSandbox<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sandbox.$post> }) =>
        parseResponse(client.sandbox.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxPaginatedKey(
  args: InferRequestType<typeof client.sandbox.paginated.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/paginated', keyArgs] as const
}

export function useGetSandboxPaginated<TError = unknown>(
  args: InferRequestType<typeof client.sandbox.paginated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxPaginatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandbox.paginated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxPaginated<TError = unknown>(
  args: InferRequestType<typeof client.sandbox.paginated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxPaginatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandbox.paginated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxForRunnerKey(
  args: InferRequestType<(typeof client.sandbox)['for-runner']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/for-runner', keyArgs] as const
}

export function useGetSandboxForRunner<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)['for-runner']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxForRunnerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandbox['for-runner'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxForRunner<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)['for-runner']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxForRunnerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandbox['for-runner'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxSandboxIdOrNameKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName', keyArgs] as const
}

export function useGetSandboxSandboxIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandbox[':sandboxIdOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandbox[':sandboxIdOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSandboxSandboxIdOrNameKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName', 'DELETE'] as const
}

export function useDeleteSandboxSandboxIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSandboxSandboxIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$delete']> },
      ) => parseResponse(client.sandbox[':sandboxIdOrName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameRecoverKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/recover', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['recover']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['recover']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['recover']['$post']>
        },
      ) => parseResponse(client.sandbox[':sandboxIdOrName'].recover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameStartKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/start', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['start']['$post']> },
      ) => parseResponse(client.sandbox[':sandboxIdOrName'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameStopKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/stop', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['stop']['$post']> },
      ) => parseResponse(client.sandbox[':sandboxIdOrName'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNamePauseKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/pause', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNamePause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['pause']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNamePauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['pause']['$post']> },
      ) => parseResponse(client.sandbox[':sandboxIdOrName'].pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameResizeKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/resize', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['resize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['resize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameResizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['resize']['$post']>
        },
      ) => parseResponse(client.sandbox[':sandboxIdOrName'].resize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSandboxSandboxIdOrNameLabelsKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/labels', 'PUT'] as const
}

export function usePutSandboxSandboxIdOrNameLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['labels']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['labels']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSandboxSandboxIdOrNameLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['labels']['$put']> },
      ) => parseResponse(client.sandbox[':sandboxIdOrName'].labels.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSandboxSandboxIdStateKey() {
  return ['sandbox', '/sandbox/:sandboxId/state', 'PUT'] as const
}

export function usePutSandboxSandboxIdState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['state']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxId']['state']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSandboxSandboxIdStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sandbox)[':sandboxId']['state']['$put']> },
      ) => parseResponse(client.sandbox[':sandboxId'].state.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameBackupKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/backup', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['backup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['backup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameBackupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['backup']['$post']>
        },
      ) => parseResponse(client.sandbox[':sandboxIdOrName'].backup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameSnapshotKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/snapshot', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['snapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['snapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['snapshot']['$post']>
        },
      ) => parseResponse(client.sandbox[':sandboxIdOrName'].snapshot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameForkKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/fork', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameFork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['fork']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['fork']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameForkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['fork']['$post']> },
      ) => parseResponse(client.sandbox[':sandboxIdOrName'].fork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxSandboxIdOrNameForksKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/forks', keyArgs] as const
}

export function useGetSandboxSandboxIdOrNameForks<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameForksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandbox[':sandboxIdOrName'].forks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdOrNameForks<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameForksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandbox[':sandboxIdOrName'].forks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxSandboxIdOrNameParentKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/parent', keyArgs] as const
}

export function useGetSandboxSandboxIdOrNameParent<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameParentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxIdOrName'].parent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdOrNameParent<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameParentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxIdOrName'].parent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxSandboxIdOrNameAncestorsKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/ancestors', keyArgs] as const
}

export function useGetSandboxSandboxIdOrNameAncestors<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameAncestorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxIdOrName'].ancestors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdOrNameAncestors<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameAncestorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxIdOrName'].ancestors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNamePublicIsPublicKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/public/:isPublic', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNamePublicIsPublic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['public'][':isPublic']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['public'][':isPublic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNamePublicIsPublicKey()
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
            (typeof client.sandbox)[':sandboxIdOrName']['public'][':isPublic']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sandbox[':sandboxIdOrName'].public[':isPublic'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdLastActivityKey() {
  return ['sandbox', '/sandbox/:sandboxId/last-activity', 'POST'] as const
}

export function usePostSandboxSandboxIdLastActivity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['last-activity']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxId']['last-activity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdLastActivityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sandbox)[':sandboxId']['last-activity']['$post']>
        },
      ) => parseResponse(client.sandbox[':sandboxId']['last-activity'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameAutostopIntervalKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/autostop/:interval', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameAutostopInterval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandbox)[':sandboxIdOrName']['autostop'][':interval']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['autostop'][':interval']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameAutostopIntervalKey()
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
            (typeof client.sandbox)[':sandboxIdOrName']['autostop'][':interval']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sandbox[':sandboxIdOrName'].autostop[':interval'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameAutoarchiveIntervalKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/autoarchive/:interval', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameAutoarchiveInterval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandbox)[':sandboxIdOrName']['autoarchive'][':interval']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['autoarchive'][':interval']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameAutoarchiveIntervalKey()
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
            (typeof client.sandbox)[':sandboxIdOrName']['autoarchive'][':interval']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sandbox[':sandboxIdOrName'].autoarchive[':interval'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameAutodeleteIntervalKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/autodelete/:interval', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameAutodeleteInterval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandbox)[':sandboxIdOrName']['autodelete'][':interval']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['autodelete'][':interval']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameAutodeleteIntervalKey()
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
            (typeof client.sandbox)[':sandboxIdOrName']['autodelete'][':interval']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sandbox[':sandboxIdOrName'].autodelete[':interval'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameNetworkSettingsKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/network-settings', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameNetworkSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['network-settings']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['network-settings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameNetworkSettingsKey()
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
            (typeof client.sandbox)[':sandboxIdOrName']['network-settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sandbox[':sandboxIdOrName']['network-settings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameArchiveKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/archive', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['archive']['$post']>
        },
      ) => parseResponse(client.sandbox[':sandboxIdOrName'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxSandboxIdOrNamePortsPortPreviewUrlKey(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/ports/:port/preview-url', keyArgs] as const
}

export function useGetSandboxSandboxIdOrNamePortsPortPreviewUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
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
        ? getGetSandboxSandboxIdOrNamePortsPortPreviewUrlKey(args)
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
                (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
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
          client.sandbox[':sandboxIdOrName'].ports[':port']['preview-url'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdOrNamePortsPortPreviewUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
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
        ? getGetSandboxSandboxIdOrNamePortsPortPreviewUrlKey(args)
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
                (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
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
          client.sandbox[':sandboxIdOrName'].ports[':port']['preview-url'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxSandboxIdOrNamePortsPortSignedPreviewUrlKey(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/ports/:port/signed-preview-url', keyArgs] as const
}

export function useGetSandboxSandboxIdOrNamePortsPortSignedPreviewUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
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
        ? getGetSandboxSandboxIdOrNamePortsPortSignedPreviewUrlKey(args)
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
                (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
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
          client.sandbox[':sandboxIdOrName'].ports[':port']['signed-preview-url'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdOrNamePortsPortSignedPreviewUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
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
        ? getGetSandboxSandboxIdOrNamePortsPortSignedPreviewUrlKey(args)
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
                (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
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
          client.sandbox[':sandboxIdOrName'].ports[':port']['signed-preview-url'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireKey() {
  return [
    'sandbox',
    '/sandbox/:sandboxIdOrName/ports/:port/signed-preview-url/:token/expire',
    'POST',
  ] as const
}

export function usePostSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpire<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url'][':token']['expire']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url'][':token']['expire']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireKey()
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
            (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url'][':token']['expire']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sandbox[':sandboxIdOrName'].ports[':port']['signed-preview-url'][
            ':token'
          ].expire.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxSandboxIdOrNameBuildLogsKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/build-logs', keyArgs] as const
}

export function useGetSandboxSandboxIdOrNameBuildLogs<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameBuildLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxIdOrName']['build-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdOrNameBuildLogs<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameBuildLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxIdOrName']['build-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxSandboxIdOrNameBuildLogsUrlKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/build-logs-url', keyArgs] as const
}

export function useGetSandboxSandboxIdOrNameBuildLogsUrl<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameBuildLogsUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sandbox[':sandboxIdOrName']['build-logs-url'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdOrNameBuildLogsUrl<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrNameBuildLogsUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sandbox[':sandboxIdOrName']['build-logs-url'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSandboxSandboxIdOrNameSshAccessKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/ssh-access', 'POST'] as const
}

export function usePostSandboxSandboxIdOrNameSshAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxSandboxIdOrNameSshAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$post']>
        },
      ) =>
        parseResponse(client.sandbox[':sandboxIdOrName']['ssh-access'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSandboxSandboxIdOrNameSshAccessKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/ssh-access', 'DELETE'] as const
}

export function useDeleteSandboxSandboxIdOrNameSshAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSandboxSandboxIdOrNameSshAccessKey()
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
            (typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$delete']
          >
        },
      ) =>
        parseResponse(client.sandbox[':sandboxIdOrName']['ssh-access'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxSshAccessValidateKey(
  args: InferRequestType<(typeof client.sandbox)['ssh-access']['validate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/ssh-access/validate', keyArgs] as const
}

export function useGetSandboxSshAccessValidate<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)['ssh-access']['validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSshAccessValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandbox['ssh-access'].validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSshAccessValidate<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)['ssh-access']['validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSshAccessValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandbox['ssh-access'].validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxSandboxIdToolboxProxyUrlKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/toolbox-proxy-url', keyArgs] as const
}

export function useGetSandboxSandboxIdToolboxProxyUrl<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdToolboxProxyUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId']['toolbox-proxy-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdToolboxProxyUrl<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdToolboxProxyUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId']['toolbox-proxy-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxSandboxIdOrganizationKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/organization', keyArgs] as const
}

export function useGetSandboxSandboxIdOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxSandboxIdRegionQuotaKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/region-quota', keyArgs] as const
}

export function useGetSandboxSandboxIdRegionQuota<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdRegionQuotaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId']['region-quota'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdRegionQuota<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdRegionQuotaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId']['region-quota'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRunnersKey(args: InferRequestType<typeof client.runners.$get>) {
  const { header: _, ...keyArgs } = args
  return ['runners', '/runners', keyArgs] as const
}

export function useGetRunners<TError = unknown>(
  args: InferRequestType<typeof client.runners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRunnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.runners.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRunners<TError = unknown>(
  args: InferRequestType<typeof client.runners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRunnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.runners.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRunnersKey() {
  return ['runners', '/runners', 'POST'] as const
}

export function usePostRunners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.runners.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRunnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.runners.$post> }) =>
        parseResponse(client.runners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRunnersMeKey() {
  return ['runners', '/runners/me'] as const
}

export function useGetRunnersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRunnersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.runners.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRunnersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRunnersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.runners.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRunnersBySandboxSandboxIdKey(
  args: InferRequestType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>,
) {
  return ['runners', '/runners/by-sandbox/:sandboxId', args] as const
}

export function useGetRunnersBySandboxSandboxId<TError = unknown>(
  args: InferRequestType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRunnersBySandboxSandboxIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.runners['by-sandbox'][':sandboxId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRunnersBySandboxSandboxId<TError = unknown>(
  args: InferRequestType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRunnersBySandboxSandboxIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.runners['by-sandbox'][':sandboxId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRunnersBySnapshotRefKey(
  args: InferRequestType<(typeof client.runners)['by-snapshot-ref']['$get']>,
) {
  return ['runners', '/runners/by-snapshot-ref', args] as const
}

export function useGetRunnersBySnapshotRef<TError = unknown>(
  args: InferRequestType<(typeof client.runners)['by-snapshot-ref']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRunnersBySnapshotRefKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.runners['by-snapshot-ref'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRunnersBySnapshotRef<TError = unknown>(
  args: InferRequestType<(typeof client.runners)['by-snapshot-ref']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRunnersBySnapshotRefKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.runners['by-snapshot-ref'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRunnersIdKey(args: InferRequestType<(typeof client.runners)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['runners', '/runners/:id', keyArgs] as const
}

export function useGetRunnersId<TError = unknown>(
  args: InferRequestType<(typeof client.runners)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRunnersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.runners[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRunnersId<TError = unknown>(
  args: InferRequestType<(typeof client.runners)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRunnersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.runners[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRunnersIdKey() {
  return ['runners', '/runners/:id', 'DELETE'] as const
}

export function useDeleteRunnersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.runners)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRunnersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.runners)[':id']['$delete']> },
      ) => parseResponse(client.runners[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRunnersIdFullKey(
  args: InferRequestType<(typeof client.runners)[':id']['full']['$get']>,
) {
  return ['runners', '/runners/:id/full', args] as const
}

export function useGetRunnersIdFull<TError = unknown>(
  args: InferRequestType<(typeof client.runners)[':id']['full']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRunnersIdFullKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.runners[':id'].full.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRunnersIdFull<TError = unknown>(
  args: InferRequestType<(typeof client.runners)[':id']['full']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRunnersIdFullKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.runners[':id'].full.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchRunnersIdSchedulingKey() {
  return ['runners', '/runners/:id/scheduling', 'PATCH'] as const
}

export function usePatchRunnersIdScheduling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.runners)[':id']['scheduling']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.runners)[':id']['scheduling']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRunnersIdSchedulingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.runners)[':id']['scheduling']['$patch']> },
      ) => parseResponse(client.runners[':id'].scheduling.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRunnersIdDrainingKey() {
  return ['runners', '/runners/:id/draining', 'PATCH'] as const
}

export function usePatchRunnersIdDraining<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.runners)[':id']['draining']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.runners)[':id']['draining']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRunnersIdDrainingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.runners)[':id']['draining']['$patch']> },
      ) => parseResponse(client.runners[':id'].draining.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRunnersHealthcheckKey() {
  return ['runners', '/runners/healthcheck', 'POST'] as const
}

export function usePostRunnersHealthcheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.healthcheck.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.runners.healthcheck.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRunnersHealthcheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.runners.healthcheck.$post> }) =>
        parseResponse(client.runners.healthcheck.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxProjectDirKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/project-dir', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxProjectDir<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxProjectDirKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox['project-dir'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxProjectDir<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxProjectDirKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox['project-dir'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxUserHomeDirKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/user-home-dir', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxUserHomeDir<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxUserHomeDirKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox['user-home-dir'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxUserHomeDir<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxUserHomeDirKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox['user-home-dir'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxWorkDirKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/work-dir', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxWorkDir<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxWorkDirKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox['work-dir'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxWorkDir<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxWorkDirKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox['work-dir'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxFilesKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxFiles<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxFiles<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteToolboxSandboxIdToolboxFilesKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files', 'DELETE'] as const
}

export function useDeleteToolboxSandboxIdToolboxFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteToolboxSandboxIdToolboxFilesKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['$delete']
          >
        },
      ) => parseResponse(client.toolbox[':sandboxId'].toolbox.files.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxFilesDownloadKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/download', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxFilesDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
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
        ? getGetToolboxSandboxIdToolboxFilesDownloadKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
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
          client.toolbox[':sandboxId'].toolbox.files.download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxFilesDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
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
        ? getGetToolboxSandboxIdToolboxFilesDownloadKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
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
          client.toolbox[':sandboxId'].toolbox.files.download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxFilesBulkDownloadKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/bulk-download', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxFilesBulkDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-download']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-download']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxFilesBulkDownloadKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-download']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.files['bulk-download'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxFilesFindKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/find', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxFilesFind<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxFilesFindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.files.find.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxFilesFind<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxFilesFindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.files.find.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxFilesFolderKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/folder', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxFilesFolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['folder']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['folder']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxFilesFolderKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['folder']['$post']
          >
        },
      ) =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.files.folder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxFilesInfoKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/info', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxFilesInfo<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxFilesInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.files.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxFilesInfo<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxFilesInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.files.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxFilesMoveKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/move', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxFilesMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['move']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxFilesMoveKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['move']['$post']
          >
        },
      ) => parseResponse(client.toolbox[':sandboxId'].toolbox.files.move.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxFilesPermissionsKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/permissions', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxFilesPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['files']['permissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['files']['permissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxFilesPermissionsKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['permissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.files.permissions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxFilesReplaceKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/replace', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxFilesReplace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['files']['replace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['replace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxFilesReplaceKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['replace']['$post']
          >
        },
      ) =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.files.replace.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxFilesSearchKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/search', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxFilesSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
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
        ? getGetToolboxSandboxIdToolboxFilesSearchKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.files.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxFilesSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
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
        ? getGetToolboxSandboxIdToolboxFilesSearchKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.files.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxFilesUploadKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/upload', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxFilesUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['upload']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxFilesUploadKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['upload']['$post']
          >
        },
      ) =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.files.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxFilesBulkUploadKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/bulk-upload', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxFilesBulkUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-upload']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-upload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxFilesBulkUploadKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-upload']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.files['bulk-upload'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxGitAddKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/add', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxGitAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['add']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxGitAddKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['add']['$post']
          >
        },
      ) => parseResponse(client.toolbox[':sandboxId'].toolbox.git.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxGitBranchesKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/branches', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxGitBranches<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
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
        ? getGetToolboxSandboxIdToolboxGitBranchesKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.git.branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxGitBranches<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
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
        ? getGetToolboxSandboxIdToolboxGitBranchesKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.git.branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxGitBranchesKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/branches', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxGitBranches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxGitBranchesKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$post']
          >
        },
      ) =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.git.branches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteToolboxSandboxIdToolboxGitBranchesKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/branches', 'DELETE'] as const
}

export function useDeleteToolboxSandboxIdToolboxGitBranches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteToolboxSandboxIdToolboxGitBranchesKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.git.branches.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxGitCloneKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/clone', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxGitClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['clone']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxGitCloneKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['clone']['$post']
          >
        },
      ) => parseResponse(client.toolbox[':sandboxId'].toolbox.git.clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxGitCommitKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/commit', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxGitCommit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['commit']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['commit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxGitCommitKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['commit']['$post']
          >
        },
      ) => parseResponse(client.toolbox[':sandboxId'].toolbox.git.commit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxGitHistoryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/history', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxGitHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxGitHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.git.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxGitHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxGitHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.git.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxGitPullKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/pull', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxGitPull<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['pull']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['pull']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxGitPullKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['pull']['$post']
          >
        },
      ) => parseResponse(client.toolbox[':sandboxId'].toolbox.git.pull.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxGitPushKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/push', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxGitPush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['push']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['push']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxGitPushKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['push']['$post']
          >
        },
      ) => parseResponse(client.toolbox[':sandboxId'].toolbox.git.push.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxGitCheckoutKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/checkout', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxGitCheckout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['checkout']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['checkout']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxGitCheckoutKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['checkout']['$post']
          >
        },
      ) =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.git.checkout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxGitStatusKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/status', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxGitStatus<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxGitStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.git.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxGitStatus<TError = unknown>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxGitStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.git.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxProcessExecuteKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/execute', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxProcessExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['execute']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['execute']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxProcessExecuteKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['execute']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.execute.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxProcessSessionKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxProcessSession<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
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
        ? getGetToolboxSandboxIdToolboxProcessSessionKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
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
          client.toolbox[':sandboxId'].toolbox.process.session.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxProcessSession<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
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
        ? getGetToolboxSandboxIdToolboxProcessSessionKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
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
          client.toolbox[':sandboxId'].toolbox.process.session.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxProcessSessionKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxProcessSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxProcessSessionKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.session.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxProcessSessionSessionIdKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session/:sessionId', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxProcessSessionSessionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
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
        ? getGetToolboxSandboxIdToolboxProcessSessionSessionIdKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
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
          client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxProcessSessionSessionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
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
        ? getGetToolboxSandboxIdToolboxProcessSessionSessionIdKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
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
          client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteToolboxSandboxIdToolboxProcessSessionSessionIdKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session/:sessionId', 'DELETE'] as const
}

export function useDeleteToolboxSandboxIdToolboxProcessSessionSessionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteToolboxSandboxIdToolboxProcessSessionSessionIdKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxProcessSessionSessionIdExecKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session/:sessionId/exec', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxProcessSessionSessionIdExec<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['exec']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['exec']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxProcessSessionSessionIdExecKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['exec']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].exec.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/process/session/:sessionId/command/:commandId',
    keyArgs,
  ] as const
}

export function useGetToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
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
        ? getGetToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
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
          client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[
            ':commandId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
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
        ? getGetToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
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
          client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[
            ':commandId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/process/session/:sessionId/command/:commandId/logs',
    keyArgs,
  ] as const
}

export function useGetToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
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
        ? getGetToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
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
          client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[
            ':commandId'
          ].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
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
        ? getGetToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
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
          client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[
            ':commandId'
          ].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxProcessPtyKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxProcessPty<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxProcessPtyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.process.pty.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxProcessPty<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolboxSandboxIdToolboxProcessPtyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.process.pty.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxProcessPtyKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxProcessPty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxProcessPtyKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$post']
          >
        },
      ) =>
        parseResponse(client.toolbox[':sandboxId'].toolbox.process.pty.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxProcessPtySessionIdKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty/:sessionId', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxProcessPtySessionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
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
        ? getGetToolboxSandboxIdToolboxProcessPtySessionIdKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
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
          client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxProcessPtySessionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
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
        ? getGetToolboxSandboxIdToolboxProcessPtySessionIdKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
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
          client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteToolboxSandboxIdToolboxProcessPtySessionIdKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty/:sessionId', 'DELETE'] as const
}

export function useDeleteToolboxSandboxIdToolboxProcessPtySessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteToolboxSandboxIdToolboxProcessPtySessionIdKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxProcessPtySessionIdResizeKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty/:sessionId/resize', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxProcessPtySessionIdResize<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['resize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['resize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxProcessPtySessionIdResizeKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['resize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].resize.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxLspCompletionsKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/completions', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxLspCompletions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['completions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['completions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxLspCompletionsKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['completions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.lsp.completions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxLspDidCloseKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/did-close', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxLspDidClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-close']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxLspDidCloseKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-close']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.lsp['did-close'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxLspDidOpenKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/did-open', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxLspDidOpen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-open']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-open']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxLspDidOpenKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-open']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.lsp['did-open'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxLspDocumentSymbolsKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/document-symbols', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxLspDocumentSymbols<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
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
        ? getGetToolboxSandboxIdToolboxLspDocumentSymbolsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
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
          client.toolbox[':sandboxId'].toolbox.lsp['document-symbols'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxLspDocumentSymbols<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
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
        ? getGetToolboxSandboxIdToolboxLspDocumentSymbolsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
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
          client.toolbox[':sandboxId'].toolbox.lsp['document-symbols'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxLspStartKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/start', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxLspStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['start']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxLspStartKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['start']['$post']
          >
        },
      ) => parseResponse(client.toolbox[':sandboxId'].toolbox.lsp.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxLspStopKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/stop', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxLspStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['stop']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxLspStopKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['stop']['$post']
          >
        },
      ) => parseResponse(client.toolbox[':sandboxId'].toolbox.lsp.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxLspWorkspaceSymbolsKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/workspace-symbols', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxLspWorkspaceSymbols<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
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
        ? getGetToolboxSandboxIdToolboxLspWorkspaceSymbolsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
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
          client.toolbox[':sandboxId'].toolbox.lsp['workspace-symbols'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxLspWorkspaceSymbols<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
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
        ? getGetToolboxSandboxIdToolboxLspWorkspaceSymbolsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
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
          client.toolbox[':sandboxId'].toolbox.lsp['workspace-symbols'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxComputeruseStartKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/start', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxComputeruseStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['start']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxComputeruseStartKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxComputeruseStopKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/stop', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxComputeruseStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['stop']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxComputeruseStopKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.stop.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxComputeruseStatusKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/status', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxComputeruseStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseStatusKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxComputeruseStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseStatusKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/status',
    keyArgs,
  ] as const
}

export function useGetToolboxSandboxIdToolboxComputeruseProcessProcessNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxComputeruseProcessProcessNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartKey() {
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/restart',
    'POST',
  ] as const
}

export function usePostToolboxSandboxIdToolboxComputeruseProcessProcessNameRestart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['restart']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['restart']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].restart.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/logs',
    keyArgs,
  ] as const
}

export function useGetToolboxSandboxIdToolboxComputeruseProcessProcessNameLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].logs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxComputeruseProcessProcessNameLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].logs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/errors',
    keyArgs,
  ] as const
}

export function useGetToolboxSandboxIdToolboxComputeruseProcessProcessNameErrors<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].errors.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxComputeruseProcessProcessNameErrors<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].errors.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxComputeruseMousePositionKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/mouse/position', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxComputeruseMousePosition<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseMousePositionKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.mouse.position.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxComputeruseMousePosition<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseMousePositionKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.mouse.position.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseMoveKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/mouse/move', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxComputeruseMouseMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['move']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['move']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxComputeruseMouseMoveKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['move']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.mouse.move.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseClickKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/mouse/click', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxComputeruseMouseClick<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['click']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['click']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxComputeruseMouseClickKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['click']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.mouse.click.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseDragKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/mouse/drag', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxComputeruseMouseDrag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['drag']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['drag']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxComputeruseMouseDragKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['drag']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.mouse.drag.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseScrollKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/mouse/scroll', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxComputeruseMouseScroll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['scroll']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['scroll']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxComputeruseMouseScrollKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['scroll']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.mouse.scroll.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxComputeruseKeyboardTypeKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/keyboard/type', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxComputeruseKeyboardType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['type']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['type']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxComputeruseKeyboardTypeKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['type']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.keyboard.type.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxComputeruseKeyboardKeyKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/keyboard/key', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxComputeruseKeyboardKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['key']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['key']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxComputeruseKeyboardKeyKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.keyboard.key.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostToolboxSandboxIdToolboxComputeruseKeyboardHotkeyKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/keyboard/hotkey', 'POST'] as const
}

export function usePostToolboxSandboxIdToolboxComputeruseKeyboardHotkey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['hotkey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['hotkey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolboxSandboxIdToolboxComputeruseKeyboardHotkeyKey()
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
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['hotkey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.keyboard.hotkey.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxComputeruseScreenshotKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/screenshot', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxComputeruseScreenshot<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseScreenshotKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxComputeruseScreenshot<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseScreenshotKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxComputeruseScreenshotRegionKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/screenshot/region', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxComputeruseScreenshotRegion<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseScreenshotRegionKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxComputeruseScreenshotRegion<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseScreenshotRegionKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxComputeruseScreenshotCompressedKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/screenshot/compressed',
    keyArgs,
  ] as const
}

export function useGetToolboxSandboxIdToolboxComputeruseScreenshotCompressed<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseScreenshotCompressedKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.compressed.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxComputeruseScreenshotCompressed<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseScreenshotCompressedKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.compressed.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/screenshot/region/compressed',
    keyArgs,
  ] as const
}

export function useGetToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressed<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.compressed.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressed<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.compressed.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxComputeruseDisplayInfoKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/display/info', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxComputeruseDisplayInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseDisplayInfoKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.display.info.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxComputeruseDisplayInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseDisplayInfoKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.display.info.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolboxSandboxIdToolboxComputeruseDisplayWindowsKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/display/windows', keyArgs] as const
}

export function useGetToolboxSandboxIdToolboxComputeruseDisplayWindows<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseDisplayWindowsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.display.windows.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolboxSandboxIdToolboxComputeruseDisplayWindows<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
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
        ? getGetToolboxSandboxIdToolboxComputeruseDisplayWindowsKey(args)
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
                (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
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
          client.toolbox[':sandboxId'].toolbox.computeruse.display.windows.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSnapshotsKey(args: InferRequestType<typeof client.snapshots.$get>) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots', keyArgs] as const
}

export function useGetSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSnapshotsKey() {
  return ['snapshots', '/snapshots', 'POST'] as const
}

export function usePostSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.snapshots.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.snapshots.$post> }) =>
        parseResponse(client.snapshots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnapshotsIdKey(
  args: InferRequestType<(typeof client.snapshots)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:id', keyArgs] as const
}

export function useGetSnapshotsId<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshotsId<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSnapshotsIdKey() {
  return ['snapshots', '/snapshots/:id', 'DELETE'] as const
}

export function useDeleteSnapshotsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snapshots)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSnapshotsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snapshots)[':id']['$delete']> },
      ) => parseResponse(client.snapshots[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnapshotsIdBuildLogsKey(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:id/build-logs', keyArgs] as const
}

export function useGetSnapshotsIdBuildLogs<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnapshotsIdBuildLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots[':id']['build-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshotsIdBuildLogs<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnapshotsIdBuildLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots[':id']['build-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSnapshotsIdBuildLogsUrlKey(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:id/build-logs-url', keyArgs] as const
}

export function useGetSnapshotsIdBuildLogsUrl<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnapshotsIdBuildLogsUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.snapshots[':id']['build-logs-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshotsIdBuildLogsUrl<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnapshotsIdBuildLogsUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.snapshots[':id']['build-logs-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSnapshotsIdActivateKey() {
  return ['snapshots', '/snapshots/:id/activate', 'POST'] as const
}

export function usePostSnapshotsIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshots)[':id']['activate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snapshots)[':id']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnapshotsIdActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snapshots)[':id']['activate']['$post']> },
      ) => parseResponse(client.snapshots[':id'].activate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSnapshotsIdDeactivateKey() {
  return ['snapshots', '/snapshots/:id/deactivate', 'POST'] as const
}

export function usePostSnapshotsIdDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':id']['deactivate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.snapshots)[':id']['deactivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnapshotsIdDeactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snapshots)[':id']['deactivate']['$post']> },
      ) => parseResponse(client.snapshots[':id'].deactivate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPreviewSandboxIdPublicKey(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['public']['$get']>,
) {
  return ['preview', '/preview/:sandboxId/public', args] as const
}

export function useGetPreviewSandboxIdPublic<TError = unknown>(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['public']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPreviewSandboxIdPublicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.preview[':sandboxId'].public.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreviewSandboxIdPublic<TError = unknown>(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['public']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPreviewSandboxIdPublicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.preview[':sandboxId'].public.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPreviewSandboxIdValidateAuthTokenKey(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>,
) {
  return ['preview', '/preview/:sandboxId/validate/:authToken', args] as const
}

export function useGetPreviewSandboxIdValidateAuthToken<TError = unknown>(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPreviewSandboxIdValidateAuthTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.preview[':sandboxId'].validate[':authToken'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreviewSandboxIdValidateAuthToken<TError = unknown>(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPreviewSandboxIdValidateAuthTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.preview[':sandboxId'].validate[':authToken'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPreviewSandboxIdAccessKey(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['access']['$get']>,
) {
  return ['preview', '/preview/:sandboxId/access', args] as const
}

export function useGetPreviewSandboxIdAccess<TError = unknown>(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPreviewSandboxIdAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.preview[':sandboxId'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreviewSandboxIdAccess<TError = unknown>(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPreviewSandboxIdAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.preview[':sandboxId'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPreviewSignedPreviewTokenPortSandboxIdKey(
  args: InferRequestType<
    (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
  >,
) {
  return ['preview', '/preview/:signedPreviewToken/:port/sandbox-id', args] as const
}

export function useGetPreviewSignedPreviewTokenPortSandboxId<TError = unknown>(
  args: InferRequestType<
    (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
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
        ? getGetPreviewSignedPreviewTokenPortSandboxIdKey(args)
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
                (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
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
          client.preview[':signedPreviewToken'][':port']['sandbox-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreviewSignedPreviewTokenPortSandboxId<TError = unknown>(
  args: InferRequestType<
    (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
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
        ? getGetPreviewSignedPreviewTokenPortSandboxIdKey(args)
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
                (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
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
          client.preview[':signedPreviewToken'][':port']['sandbox-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVolumesKey(args: InferRequestType<typeof client.volumes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes', keyArgs] as const
}

export function useGetVolumes<TError = unknown>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.volumes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVolumes<TError = unknown>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.volumes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostVolumesKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function usePostVolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.volumes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.volumes.$post> }) =>
        parseResponse(client.volumes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVolumesVolumeIdKey(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes/:volumeId', keyArgs] as const
}

export function useGetVolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes[':volumeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes[':volumeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVolumesVolumeIdKey() {
  return ['volumes', '/volumes/:volumeId', 'DELETE'] as const
}

export function useDeleteVolumesVolumeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVolumesVolumeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volumes)[':volumeId']['$delete']> },
      ) => parseResponse(client.volumes[':volumeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVolumesByNameNameKey(
  args: InferRequestType<(typeof client.volumes)['by-name'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes/by-name/:name', keyArgs] as const
}

export function useGetVolumesByNameName<TError = unknown>(
  args: InferRequestType<(typeof client.volumes)['by-name'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVolumesByNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes['by-name'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVolumesByNameName<TError = unknown>(
  args: InferRequestType<(typeof client.volumes)['by-name'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVolumesByNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes['by-name'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsKey(args: InferRequestType<typeof client.jobs.$get>) {
  return ['jobs', '/jobs', args] as const
}

export function useGetJobs<TError = unknown>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetJobs<TError = unknown>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetJobsPollKey(args: InferRequestType<typeof client.jobs.poll.$get>) {
  return ['jobs', '/jobs/poll', args] as const
}

export function useGetJobsPoll<TError = unknown>(
  args: InferRequestType<typeof client.jobs.poll.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsPollKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs.poll.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsPoll<TError = unknown>(
  args: InferRequestType<typeof client.jobs.poll.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsPollKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs.poll.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsJobIdKey(args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>) {
  return ['jobs', '/jobs/:jobId', args] as const
}

export function useGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJobsJobIdStatusKey() {
  return ['jobs', '/jobs/:jobId/status', 'POST'] as const
}

export function usePostJobsJobIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['status']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsJobIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['status']['$post']> },
      ) => parseResponse(client.jobs[':jobId'].status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDockerRegistryKey(
  args: InferRequestType<(typeof client)['docker-registry']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docker-registry', '/docker-registry', keyArgs] as const
}

export function useGetDockerRegistry<TError = unknown>(
  args: InferRequestType<(typeof client)['docker-registry']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDockerRegistryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['docker-registry'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDockerRegistry<TError = unknown>(
  args: InferRequestType<(typeof client)['docker-registry']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDockerRegistryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['docker-registry'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDockerRegistryKey() {
  return ['docker-registry', '/docker-registry', 'POST'] as const
}

export function usePostDockerRegistry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['docker-registry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDockerRegistryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['docker-registry']['$post']> },
      ) => parseResponse(client['docker-registry'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDockerRegistryRegistryPushAccessKey(
  args: InferRequestType<(typeof client)['docker-registry']['registry-push-access']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docker-registry', '/docker-registry/registry-push-access', keyArgs] as const
}

export function useGetDockerRegistryRegistryPushAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['docker-registry']['registry-push-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['docker-registry']['registry-push-access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDockerRegistryRegistryPushAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['docker-registry']['registry-push-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['docker-registry']['registry-push-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDockerRegistryRegistryPushAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['docker-registry']['registry-push-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['docker-registry']['registry-push-access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDockerRegistryRegistryPushAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['docker-registry']['registry-push-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['docker-registry']['registry-push-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDockerRegistryIdKey(
  args: InferRequestType<(typeof client)['docker-registry'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docker-registry', '/docker-registry/:id', keyArgs] as const
}

export function useGetDockerRegistryId<TError = unknown>(
  args: InferRequestType<(typeof client)['docker-registry'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDockerRegistryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['docker-registry'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDockerRegistryId<TError = unknown>(
  args: InferRequestType<(typeof client)['docker-registry'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDockerRegistryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['docker-registry'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDockerRegistryIdKey() {
  return ['docker-registry', '/docker-registry/:id', 'DELETE'] as const
}

export function useDeleteDockerRegistryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['docker-registry'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDockerRegistryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['docker-registry'][':id']['$delete']> },
      ) => parseResponse(client['docker-registry'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDockerRegistryIdKey() {
  return ['docker-registry', '/docker-registry/:id', 'PATCH'] as const
}

export function usePatchDockerRegistryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['docker-registry'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDockerRegistryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['docker-registry'][':id']['$patch']> },
      ) => parseResponse(client['docker-registry'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRunnersKey(args: InferRequestType<typeof client.admin.runners.$get>) {
  return ['admin', '/admin/runners', args] as const
}

export function useGetAdminRunners<TError = unknown>(
  args: InferRequestType<typeof client.admin.runners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRunnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.runners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRunners<TError = unknown>(
  args: InferRequestType<typeof client.admin.runners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRunnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.runners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminRunnersKey() {
  return ['admin', '/admin/runners', 'POST'] as const
}

export function usePostAdminRunners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.runners.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRunnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.runners.$post> }) =>
        parseResponse(client.admin.runners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRunnersIdKey(
  args: InferRequestType<(typeof client.admin.runners)[':id']['$get']>,
) {
  return ['admin', '/admin/runners/:id', args] as const
}

export function useGetAdminRunnersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.runners)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRunnersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.runners[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRunnersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.runners)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRunnersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.runners[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminRunnersIdKey() {
  return ['admin', '/admin/runners/:id', 'DELETE'] as const
}

export function useDeleteAdminRunnersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.runners)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.runners)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminRunnersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.runners)[':id']['$delete']> },
      ) => parseResponse(client.admin.runners[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminRunnersIdSchedulingKey() {
  return ['admin', '/admin/runners/:id/scheduling', 'PATCH'] as const
}

export function usePatchAdminRunnersIdScheduling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.runners)[':id']['scheduling']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.runners)[':id']['scheduling']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminRunnersIdSchedulingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.runners)[':id']['scheduling']['$patch']> },
      ) => parseResponse(client.admin.runners[':id'].scheduling.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminSandboxSandboxIdRecoverKey() {
  return ['admin', '/admin/sandbox/:sandboxId/recover', 'POST'] as const
}

export function usePostAdminSandboxSandboxIdRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.sandbox)[':sandboxId']['recover']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.sandbox)[':sandboxId']['recover']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminSandboxSandboxIdRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.sandbox)[':sandboxId']['recover']['$post']>
        },
      ) => parseResponse(client.admin.sandbox[':sandboxId'].recover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersKey() {
  return ['admin', '/admin/users'] as const
}

export function useGetAdminUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminUsersKey() {
  return ['admin', '/admin/users', 'POST'] as const
}

export function usePostAdminUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.admin.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.users.$post> }) =>
        parseResponse(client.admin.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersIdRegenerateKeyPairKey() {
  return ['admin', '/admin/users/:id/regenerate-key-pair', 'POST'] as const
}

export function usePostAdminUsersIdRegenerateKeyPair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['regenerate-key-pair']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id']['regenerate-key-pair']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersIdRegenerateKeyPairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.users)[':id']['regenerate-key-pair']['$post']>
        },
      ) =>
        parseResponse(client.admin.users[':id']['regenerate-key-pair'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersIdKey(
  args: InferRequestType<(typeof client.admin.users)[':id']['$get']>,
) {
  return ['admin', '/admin/users/:id', args] as const
}

export function useGetAdminUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminWebhooksOrganizationsOrganizationIdSendKey() {
  return ['admin', '/admin/webhooks/organizations/:organizationId/send', 'POST'] as const
}

export function usePostAdminWebhooksOrganizationsOrganizationIdSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.webhooks.organizations)[':organizationId']['send']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.webhooks.organizations)[':organizationId']['send']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminWebhooksOrganizationsOrganizationIdSendKey()
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
            (typeof client.admin.webhooks.organizations)[':organizationId']['send']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.webhooks.organizations[':organizationId'].send.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsKey(
  args: InferRequestType<
    (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
  >,
) {
  return [
    'admin',
    '/admin/webhooks/organizations/:organizationId/messages/:messageId/attempts',
    args,
  ] as const
}

export function useGetAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttempts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
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
        ? getGetAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsKey(args)
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
                (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
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
          client.admin.webhooks.organizations[':organizationId'].messages[
            ':messageId'
          ].attempts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttempts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
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
        ? getGetAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsKey(args)
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
                (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
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
          client.admin.webhooks.organizations[':organizationId'].messages[
            ':messageId'
          ].attempts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdminWebhooksStatusKey() {
  return ['admin', '/admin/webhooks/status'] as const
}

export function useGetAdminWebhooksStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>
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
        ? getGetAdminWebhooksStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.webhooks.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminWebhooksStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>
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
        ? getGetAdminWebhooksStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.webhooks.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminWebhooksOrganizationsOrganizationIdInitializeKey() {
  return ['admin', '/admin/webhooks/organizations/:organizationId/initialize', 'POST'] as const
}

export function usePostAdminWebhooksOrganizationsOrganizationIdInitialize<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.webhooks.organizations)[':organizationId']['initialize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.webhooks.organizations)[':organizationId']['initialize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminWebhooksOrganizationsOrganizationIdInitializeKey()
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
            (typeof client.admin.webhooks.organizations)[':organizationId']['initialize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.webhooks.organizations[':organizationId'].initialize.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDockerRegistryIdSetDefaultKey() {
  return ['admin', '/admin/docker-registry/:id/set-default', 'POST'] as const
}

export function usePostAdminDockerRegistryIdSetDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['docker-registry'][':id']['set-default']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['docker-registry'][':id']['set-default']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDockerRegistryIdSetDefaultKey()
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
            (typeof client.admin)['docker-registry'][':id']['set-default']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['docker-registry'][':id']['set-default'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminSnapshotsCanCleanupImageKey(
  args: InferRequestType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>,
) {
  return ['admin', '/admin/snapshots/can-cleanup-image', args] as const
}

export function useGetAdminSnapshotsCanCleanupImage<TError = unknown>(
  args: InferRequestType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminSnapshotsCanCleanupImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.snapshots['can-cleanup-image'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminSnapshotsCanCleanupImage<TError = unknown>(
  args: InferRequestType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminSnapshotsCanCleanupImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.snapshots['can-cleanup-image'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAdminSnapshotsIdGeneralKey() {
  return ['admin', '/admin/snapshots/:id/general', 'PATCH'] as const
}

export function usePatchAdminSnapshotsIdGeneral<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.snapshots)[':id']['general']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.snapshots)[':id']['general']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminSnapshotsIdGeneralKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.snapshots)[':id']['general']['$patch']> },
      ) => parseResponse(client.admin.snapshots[':id'].general.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminAuditKey(args: InferRequestType<typeof client.admin.audit.$get>) {
  return ['admin', '/admin/audit', args] as const
}

export function useGetAdminAudit<TError = unknown>(
  args: InferRequestType<typeof client.admin.audit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminAuditKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.audit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminAudit<TError = unknown>(
  args: InferRequestType<typeof client.admin.audit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminAuditKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.audit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminOrganizationsOrganizationIdQuotaRegionIdKey() {
  return ['admin', '/admin/organizations/:organizationId/quota/:regionId', 'POST'] as const
}

export function usePostAdminOrganizationsOrganizationIdQuotaRegionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrganizationsOrganizationIdQuotaRegionIdKey()
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
            (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.organizations[':organizationId'].quota[':regionId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminOrganizationsOrganizationIdQuotaRegionIdKey() {
  return ['admin', '/admin/organizations/:organizationId/quota/:regionId', 'PATCH'] as const
}

export function usePatchAdminOrganizationsOrganizationIdQuotaRegionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminOrganizationsOrganizationIdQuotaRegionIdKey()
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
            (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.admin.organizations[':organizationId'].quota[':regionId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassKey(
  args: InferRequestType<
    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
  >,
) {
  return [
    'admin',
    '/admin/organizations/:organizationId/quota/:regionId/:sandboxClass',
    args,
  ] as const
}

export function useGetAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClass<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
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
        ? getGetAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassKey(args)
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
                (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
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
          client.admin.organizations[':organizationId'].quota[':regionId'][':sandboxClass'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClass<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
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
        ? getGetAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassKey(args)
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
                (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
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
          client.admin.organizations[':organizationId'].quota[':regionId'][':sandboxClass'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassKey() {
  return [
    'admin',
    '/admin/organizations/:organizationId/quota/:regionId/:sandboxClass',
    'DELETE',
  ] as const
}

export function useDeleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClass<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassKey()
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
            (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.organizations[':organizationId'].quota[':regionId'][':sandboxClass'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksOrganizationsOrganizationIdAppPortalAccessKey() {
  return ['webhooks', '/webhooks/organizations/:organizationId/app-portal-access', 'POST'] as const
}

export function usePostWebhooksOrganizationsOrganizationIdAppPortalAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhooks.organizations)[':organizationId']['app-portal-access']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.webhooks.organizations)[':organizationId']['app-portal-access']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksOrganizationsOrganizationIdAppPortalAccessKey()
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
            (typeof client.webhooks.organizations)[':organizationId']['app-portal-access']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhooks.organizations[':organizationId']['app-portal-access'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksOrganizationsOrganizationIdInitializationStatusKey(
  args: InferRequestType<
    (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'webhooks',
    '/webhooks/organizations/:organizationId/initialization-status',
    keyArgs,
  ] as const
}

export function useGetWebhooksOrganizationsOrganizationIdInitializationStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
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
        ? getGetWebhooksOrganizationsOrganizationIdInitializationStatusKey(args)
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
                (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
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
          client.webhooks.organizations[':organizationId']['initialization-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksOrganizationsOrganizationIdInitializationStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
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
        ? getGetWebhooksOrganizationsOrganizationIdInitializationStatusKey(args)
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
                (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
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
          client.webhooks.organizations[':organizationId']['initialization-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksOrganizationsOrganizationIdInitializeKey() {
  return ['webhooks', '/webhooks/organizations/:organizationId/initialize', 'POST'] as const
}

export function usePostWebhooksOrganizationsOrganizationIdInitialize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhooks.organizations)[':organizationId']['initialize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.webhooks.organizations)[':organizationId']['initialize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksOrganizationsOrganizationIdInitializeKey()
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
            (typeof client.webhooks.organizations)[':organizationId']['initialize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhooks.organizations[':organizationId'].initialize.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksOrganizationsOrganizationIdRefreshEndpointsKey() {
  return ['webhooks', '/webhooks/organizations/:organizationId/refresh-endpoints', 'POST'] as const
}

export function usePostWebhooksOrganizationsOrganizationIdRefreshEndpoints<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks.organizations)[':organizationId']['refresh-endpoints']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.webhooks.organizations)[':organizationId']['refresh-endpoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksOrganizationsOrganizationIdRefreshEndpointsKey()
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
            (typeof client.webhooks.organizations)[':organizationId']['refresh-endpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhooks.organizations[':organizationId']['refresh-endpoints'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuditOrganizationsOrganizationIdKey(
  args: InferRequestType<(typeof client.audit.organizations)[':organizationId']['$get']>,
) {
  return ['audit', '/audit/organizations/:organizationId', args] as const
}

export function useGetAuditOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.audit.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.audit.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetObjectStoragePushAccessKey(
  args: InferRequestType<(typeof client)['object-storage']['push-access']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['object-storage', '/object-storage/push-access', keyArgs] as const
}

export function useGetObjectStoragePushAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['object-storage']['push-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStoragePushAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage']['push-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectStoragePushAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['object-storage']['push-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectStoragePushAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['object-storage']['push-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthKey() {
  return ['health', '/health'] as const
}

export function useGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
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

export function getGetSandboxSandboxIdTelemetryLogsKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/telemetry/logs', keyArgs] as const
}

export function useGetSandboxSandboxIdTelemetryLogs<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdTelemetryLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId'].telemetry.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdTelemetryLogs<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdTelemetryLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId'].telemetry.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxSandboxIdTelemetryTracesKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/telemetry/traces', keyArgs] as const
}

export function useGetSandboxSandboxIdTelemetryTraces<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdTelemetryTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId'].telemetry.traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdTelemetryTraces<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdTelemetryTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId'].telemetry.traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxSandboxIdTelemetryTracesTraceIdKey(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/telemetry/traces/:traceId', keyArgs] as const
}

export function useGetSandboxSandboxIdTelemetryTracesTraceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
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
        ? getGetSandboxSandboxIdTelemetryTracesTraceIdKey(args)
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
                (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
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
          client.sandbox[':sandboxId'].telemetry.traces[':traceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdTelemetryTracesTraceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
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
        ? getGetSandboxSandboxIdTelemetryTracesTraceIdKey(args)
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
                (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
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
          client.sandbox[':sandboxId'].telemetry.traces[':traceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxSandboxIdTelemetryMetricsKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/telemetry/metrics', keyArgs] as const
}

export function useGetSandboxSandboxIdTelemetryMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdTelemetryMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId'].telemetry.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxSandboxIdTelemetryMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxSandboxIdTelemetryMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandbox[':sandboxId'].telemetry.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
