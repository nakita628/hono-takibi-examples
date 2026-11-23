import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getActorsKey() {
  return ['actors'] as const
}

export function getClientsKey() {
  return ['clients'] as const
}

export function getDefenderDevicesKey() {
  return ['defender_devices'] as const
}

export function getDefenderPostureProvidersKey() {
  return ['defender_posture_providers'] as const
}

export function getEmailOtpAuthProvidersKey() {
  return ['email_otp_auth_providers'] as const
}

export function getEntraAuthProvidersKey() {
  return ['entra_auth_providers'] as const
}

export function getEntraDirectoriesKey() {
  return ['entra_directories'] as const
}

export function getGithubAuthProvidersKey() {
  return ['github_auth_providers'] as const
}

export function getGoogleAuthProvidersKey() {
  return ['google_auth_providers'] as const
}

export function getGoogleDirectoriesKey() {
  return ['google_directories'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getIntuneDevicesKey() {
  return ['intune_devices'] as const
}

export function getIntunePostureProvidersKey() {
  return ['intune_posture_providers'] as const
}

export function getIruDevicesKey() {
  return ['iru_devices'] as const
}

export function getIruPostureProvidersKey() {
  return ['iru_posture_providers'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getOidcAuthProvidersKey() {
  return ['oidc_auth_providers'] as const
}

export function getOktaAuthProvidersKey() {
  return ['okta_auth_providers'] as const
}

export function getOktaDirectoriesKey() {
  return ['okta_directories'] as const
}

export function getPoliciesKey() {
  return ['policies'] as const
}

export function getPostureFieldsKey() {
  return ['posture_fields'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getSantaDevicesKey() {
  return ['santa_devices'] as const
}

export function getSantaPostureProvidersKey() {
  return ['santa_posture_providers'] as const
}

export function getSentineloneDevicesKey() {
  return ['sentinelone_devices'] as const
}

export function getSentinelonePostureProvidersKey() {
  return ['sentinelone_posture_providers'] as const
}

export function getSitesKey() {
  return ['sites'] as const
}

export function getSophosDevicesKey() {
  return ['sophos_devices'] as const
}

export function getSophosPostureProvidersKey() {
  return ['sophos_posture_providers'] as const
}

export function getX509AuthProviderKey() {
  return ['x509_auth_provider'] as const
}

export function getGetGroupsKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function useGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostGroupsKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function usePostGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.$post> }) =>
        parseResponse(client.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActorsActorIdExternalIdentitiesKey(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities']['$get']>,
) {
  return ['actors', '/actors/:actor_id/external_identities', args] as const
}

export function useGetActorsActorIdExternalIdentities<TError = unknown>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActorsActorIdExternalIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actors[':actor_id'].external_identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActorsActorIdExternalIdentities<TError = unknown>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActorsActorIdExternalIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actors[':actor_id'].external_identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClientsIdKey(args: InferRequestType<(typeof client.clients)[':id']['$get']>) {
  return ['clients', '/clients/:id', args] as const
}

export function useGetClientsId<TError = unknown>(
  args: InferRequestType<(typeof client.clients)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientsId<TError = unknown>(
  args: InferRequestType<(typeof client.clients)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutClientsIdKey() {
  return ['clients', '/clients/:id', 'PUT'] as const
}

export function usePutClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clients)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.clients)[':id']['$put']> }) =>
        parseResponse(client.clients[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteClientsIdKey() {
  return ['clients', '/clients/:id', 'DELETE'] as const
}

export function useDeleteClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clients)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clients)[':id']['$delete']> },
      ) => parseResponse(client.clients[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchClientsIdKey() {
  return ['clients', '/clients/:id', 'PATCH'] as const
}

export function usePatchClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clients)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchClientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clients)[':id']['$patch']> },
      ) => parseResponse(client.clients[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdGatewaysIdKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>,
) {
  return ['sites', '/sites/:site_id/gateways/:id', args] as const
}

export function useGetSitesSiteIdGatewaysId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSitesSiteIdGatewaysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].gateways[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdGatewaysId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSitesSiteIdGatewaysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].gateways[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdGatewaysIdKey() {
  return ['sites', '/sites/:site_id/gateways/:id', 'PUT'] as const
}

export function usePutSitesSiteIdGatewaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdGatewaysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$put']> },
      ) => parseResponse(client.sites[':site_id'].gateways[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdGatewaysIdKey() {
  return ['sites', '/sites/:site_id/gateways/:id', 'DELETE'] as const
}

export function useDeleteSitesSiteIdGatewaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdGatewaysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$delete']>
        },
      ) => parseResponse(client.sites[':site_id'].gateways[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSitesSiteIdGatewaysIdKey() {
  return ['sites', '/sites/:site_id/gateways/:id', 'PATCH'] as const
}

export function usePatchSitesSiteIdGatewaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSitesSiteIdGatewaysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$patch']>
        },
      ) => parseResponse(client.sites[':site_id'].gateways[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSantaPostureProvidersKey(
  args: InferRequestType<typeof client.santa_posture_providers.$get>,
) {
  return ['santa_posture_providers', '/santa_posture_providers', args] as const
}

export function useGetSantaPostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.santa_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSantaPostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.santa_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSantaPostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.santa_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSantaPostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.santa_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGithubAuthProvidersIdKey(
  args: InferRequestType<(typeof client.github_auth_providers)[':id']['$get']>,
) {
  return ['github_auth_providers', '/github_auth_providers/:id', args] as const
}

export function useGetGithubAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.github_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGithubAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGithubAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.github_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGithubAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostureFieldsKey(args: InferRequestType<typeof client.posture_fields.$get>) {
  return ['posture_fields', '/posture_fields', args] as const
}

export function useGetPostureFields<TError = unknown>(
  args: InferRequestType<typeof client.posture_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostureFieldsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posture_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostureFields<TError = unknown>(
  args: InferRequestType<typeof client.posture_fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostureFieldsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posture_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOidcAuthProvidersKey(
  args: InferRequestType<typeof client.oidc_auth_providers.$get>,
) {
  return ['oidc_auth_providers', '/oidc_auth_providers', args] as const
}

export function useGetOidcAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.oidc_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOidcAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oidc_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOidcAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.oidc_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOidcAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oidc_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSitesSiteIdGatewayTokensIdKey() {
  return ['sites', '/sites/:site_id/gateway_tokens/:id', 'DELETE'] as const
}

export function useDeleteSitesSiteIdGatewayTokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateway_tokens'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdGatewayTokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.sites)[':site_id']['gateway_tokens'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.sites[':site_id'].gateway_tokens[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSentinelonePostureProvidersKey(
  args: InferRequestType<typeof client.sentinelone_posture_providers.$get>,
) {
  return ['sentinelone_posture_providers', '/sentinelone_posture_providers', args] as const
}

export function useGetSentinelonePostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.sentinelone_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSentinelonePostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sentinelone_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSentinelonePostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.sentinelone_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSentinelonePostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sentinelone_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActorsIdKey(args: InferRequestType<(typeof client.actors)[':id']['$get']>) {
  return ['actors', '/actors/:id', args] as const
}

export function useGetActorsId<TError = unknown>(
  args: InferRequestType<(typeof client.actors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActorsId<TError = unknown>(
  args: InferRequestType<(typeof client.actors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutActorsIdKey() {
  return ['actors', '/actors/:id', 'PUT'] as const
}

export function usePutActorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actors)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutActorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.actors)[':id']['$put']> }) =>
        parseResponse(client.actors[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteActorsIdKey() {
  return ['actors', '/actors/:id', 'DELETE'] as const
}

export function useDeleteActorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actors)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteActorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.actors)[':id']['$delete']> },
      ) => parseResponse(client.actors[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchActorsIdKey() {
  return ['actors', '/actors/:id', 'PATCH'] as const
}

export function usePatchActorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actors)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchActorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.actors)[':id']['$patch']> }) =>
        parseResponse(client.actors[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutClientsIdVerifyKey() {
  return ['clients', '/clients/:id/verify', 'PUT'] as const
}

export function usePutClientsIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['verify']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clients)[':id']['verify']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClientsIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clients)[':id']['verify']['$put']> },
      ) => parseResponse(client.clients[':id'].verify.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActorsActorIdClientTokensKey(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>,
) {
  return ['actors', '/actors/:actor_id/client_tokens', args] as const
}

export function useGetActorsActorIdClientTokens<TError = unknown>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActorsActorIdClientTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actors[':actor_id'].client_tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActorsActorIdClientTokens<TError = unknown>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActorsActorIdClientTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actors[':actor_id'].client_tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActorsActorIdClientTokensKey() {
  return ['actors', '/actors/:actor_id/client_tokens', 'POST'] as const
}

export function usePostActorsActorIdClientTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActorsActorIdClientTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$post']> },
      ) => parseResponse(client.actors[':actor_id'].client_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteActorsActorIdClientTokensKey() {
  return ['actors', '/actors/:actor_id/client_tokens', 'DELETE'] as const
}

export function useDeleteActorsActorIdClientTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteActorsActorIdClientTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$delete']>
        },
      ) => parseResponse(client.actors[':actor_id'].client_tokens.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActorsActorIdClientTokensIdKey(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>,
) {
  return ['actors', '/actors/:actor_id/client_tokens/:id', args] as const
}

export function useGetActorsActorIdClientTokensId<TError = unknown>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActorsActorIdClientTokensIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actors[':actor_id'].client_tokens[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActorsActorIdClientTokensId<TError = unknown>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActorsActorIdClientTokensIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actors[':actor_id'].client_tokens[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteActorsActorIdClientTokensIdKey() {
  return ['actors', '/actors/:actor_id/client_tokens/:id', 'DELETE'] as const
}

export function useDeleteActorsActorIdClientTokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteActorsActorIdClientTokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.actors)[':actor_id']['client_tokens'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.actors[':actor_id'].client_tokens[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailOtpAuthProvidersKey(
  args: InferRequestType<typeof client.email_otp_auth_providers.$get>,
) {
  return ['email_otp_auth_providers', '/email_otp_auth_providers', args] as const
}

export function useGetEmailOtpAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.email_otp_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailOtpAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email_otp_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailOtpAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.email_otp_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailOtpAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email_otp_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntraAuthProvidersKey(
  args: InferRequestType<typeof client.entra_auth_providers.$get>,
) {
  return ['entra_auth_providers', '/entra_auth_providers', args] as const
}

export function useGetEntraAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.entra_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntraAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entra_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntraAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.entra_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntraAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entra_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIruPostureProvidersIdKey(
  args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$get']>,
) {
  return ['iru_posture_providers', '/iru_posture_providers/:id', args] as const
}

export function useGetIruPostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIruPostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.iru_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIruPostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIruPostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.iru_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIruPostureProvidersIdKey() {
  return ['iru_posture_providers', '/iru_posture_providers/:id', 'PUT'] as const
}

export function usePutIruPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.iru_posture_providers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIruPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.iru_posture_providers)[':id']['$put']> },
      ) => parseResponse(client.iru_posture_providers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIruPostureProvidersIdKey() {
  return ['iru_posture_providers', '/iru_posture_providers/:id', 'DELETE'] as const
}

export function useDeleteIruPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.iru_posture_providers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIruPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.iru_posture_providers)[':id']['$delete']> },
      ) => parseResponse(client.iru_posture_providers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIruPostureProvidersIdKey() {
  return ['iru_posture_providers', '/iru_posture_providers/:id', 'PATCH'] as const
}

export function usePatchIruPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.iru_posture_providers)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIruPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.iru_posture_providers)[':id']['$patch']> },
      ) => parseResponse(client.iru_posture_providers[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesKey(args: InferRequestType<typeof client.sites.$get>) {
  return ['sites', '/sites', args] as const
}

export function useGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSitesKey() {
  return ['sites', '/sites', 'POST'] as const
}

export function usePostSites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sites.$post> }) =>
        parseResponse(client.sites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesIdKey(args: InferRequestType<(typeof client.sites)[':id']['$get']>) {
  return ['sites', '/sites/:id', args] as const
}

export function useGetSitesId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesIdKey() {
  return ['sites', '/sites/:id', 'PUT'] as const
}

export function usePutSitesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.sites)[':id']['$put']> }) =>
        parseResponse(client.sites[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesIdKey() {
  return ['sites', '/sites/:id', 'DELETE'] as const
}

export function useDeleteSitesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.sites)[':id']['$delete']> }) =>
        parseResponse(client.sites[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSitesIdKey() {
  return ['sites', '/sites/:id', 'PATCH'] as const
}

export function usePatchSitesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSitesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.sites)[':id']['$patch']> }) =>
        parseResponse(client.sites[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGoogleAuthProvidersKey(
  args: InferRequestType<typeof client.google_auth_providers.$get>,
) {
  return ['google_auth_providers', '/google_auth_providers', args] as const
}

export function useGetGoogleAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.google_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoogleAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.google_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGoogleAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.google_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoogleAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.google_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoliciesIdKey(
  args: InferRequestType<(typeof client.policies)[':id']['$get']>,
) {
  return ['policies', '/policies/:id', args] as const
}

export function useGetPoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.policies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoliciesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.policies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoliciesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPoliciesIdKey() {
  return ['policies', '/policies/:id', 'PUT'] as const
}

export function usePutPoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policies)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.policies)[':id']['$put']> }) =>
        parseResponse(client.policies[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePoliciesIdKey() {
  return ['policies', '/policies/:id', 'DELETE'] as const
}

export function useDeletePoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policies)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.policies)[':id']['$delete']> },
      ) => parseResponse(client.policies[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPoliciesIdKey() {
  return ['policies', '/policies/:id', 'PATCH'] as const
}

export function usePatchPoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policies)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.policies)[':id']['$patch']> },
      ) => parseResponse(client.policies[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntunePostureProvidersIdKey(
  args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$get']>,
) {
  return ['intune_posture_providers', '/intune_posture_providers/:id', args] as const
}

export function useGetIntunePostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntunePostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intune_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntunePostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntunePostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intune_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIntunePostureProvidersIdKey() {
  return ['intune_posture_providers', '/intune_posture_providers/:id', 'PUT'] as const
}

export function usePutIntunePostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.intune_posture_providers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIntunePostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.intune_posture_providers)[':id']['$put']> },
      ) => parseResponse(client.intune_posture_providers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIntunePostureProvidersIdKey() {
  return ['intune_posture_providers', '/intune_posture_providers/:id', 'DELETE'] as const
}

export function useDeleteIntunePostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.intune_posture_providers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIntunePostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.intune_posture_providers)[':id']['$delete']> },
      ) => parseResponse(client.intune_posture_providers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIntunePostureProvidersIdKey() {
  return ['intune_posture_providers', '/intune_posture_providers/:id', 'PATCH'] as const
}

export function usePatchIntunePostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.intune_posture_providers)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIntunePostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.intune_posture_providers)[':id']['$patch']> },
      ) => parseResponse(client.intune_posture_providers[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetX509AuthProviderKey() {
  return ['x509_auth_provider', '/x509_auth_provider'] as const
}

export function useGetX509AuthProvider<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetX509AuthProviderKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.x509_auth_provider.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetX509AuthProvider<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetX509AuthProviderKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.x509_auth_provider.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesKey(args: InferRequestType<typeof client.resources.$get>) {
  return ['resources', '/resources', args] as const
}

export function useGetResources<TError = unknown>(
  args: InferRequestType<typeof client.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResources<TError = unknown>(
  args: InferRequestType<typeof client.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostResourcesKey() {
  return ['resources', '/resources', 'POST'] as const
}

export function usePostResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.resources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.resources.$post> }) =>
        parseResponse(client.resources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActorsActorIdExternalIdentitiesIdKey(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>,
) {
  return ['actors', '/actors/:actor_id/external_identities/:id', args] as const
}

export function useGetActorsActorIdExternalIdentitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActorsActorIdExternalIdentitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.actors[':actor_id'].external_identities[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActorsActorIdExternalIdentitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActorsActorIdExternalIdentitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.actors[':actor_id'].external_identities[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteActorsActorIdExternalIdentitiesIdKey() {
  return ['actors', '/actors/:actor_id/external_identities/:id', 'DELETE'] as const
}

export function useDeleteActorsActorIdExternalIdentitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteActorsActorIdExternalIdentitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.actors)[':actor_id']['external_identities'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.actors[':actor_id'].external_identities[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSentineloneDevicesKey(
  args: InferRequestType<typeof client.sentinelone_devices.$get>,
) {
  return ['sentinelone_devices', '/sentinelone_devices', args] as const
}

export function useGetSentineloneDevices<TError = unknown>(
  args: InferRequestType<typeof client.sentinelone_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSentineloneDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sentinelone_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSentineloneDevices<TError = unknown>(
  args: InferRequestType<typeof client.sentinelone_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSentineloneDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sentinelone_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOktaAuthProvidersKey(
  args: InferRequestType<typeof client.okta_auth_providers.$get>,
) {
  return ['okta_auth_providers', '/okta_auth_providers', args] as const
}

export function useGetOktaAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.okta_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOktaAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.okta_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOktaAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.okta_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOktaAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.okta_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntuneDevicesIdKey(
  args: InferRequestType<(typeof client.intune_devices)[':id']['$get']>,
) {
  return ['intune_devices', '/intune_devices/:id', args] as const
}

export function useGetIntuneDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.intune_devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntuneDevicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intune_devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntuneDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.intune_devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntuneDevicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intune_devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSophosPostureProvidersKey(
  args: InferRequestType<typeof client.sophos_posture_providers.$get>,
) {
  return ['sophos_posture_providers', '/sophos_posture_providers', args] as const
}

export function useGetSophosPostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.sophos_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSophosPostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sophos_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSophosPostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.sophos_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSophosPostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sophos_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDefenderPostureProvidersIdKey(
  args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$get']>,
) {
  return ['defender_posture_providers', '/defender_posture_providers/:id', args] as const
}

export function useGetDefenderPostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDefenderPostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.defender_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDefenderPostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDefenderPostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.defender_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDefenderPostureProvidersIdKey() {
  return ['defender_posture_providers', '/defender_posture_providers/:id', 'PUT'] as const
}

export function usePutDefenderPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.defender_posture_providers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDefenderPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.defender_posture_providers)[':id']['$put']> },
      ) => parseResponse(client.defender_posture_providers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDefenderPostureProvidersIdKey() {
  return ['defender_posture_providers', '/defender_posture_providers/:id', 'DELETE'] as const
}

export function useDeleteDefenderPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.defender_posture_providers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDefenderPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.defender_posture_providers)[':id']['$delete']> },
      ) => parseResponse(client.defender_posture_providers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDefenderPostureProvidersIdKey() {
  return ['defender_posture_providers', '/defender_posture_providers/:id', 'PATCH'] as const
}

export function usePatchDefenderPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.defender_posture_providers)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDefenderPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.defender_posture_providers)[':id']['$patch']> },
      ) => parseResponse(client.defender_posture_providers[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntunePostureProvidersKey(
  args: InferRequestType<typeof client.intune_posture_providers.$get>,
) {
  return ['intune_posture_providers', '/intune_posture_providers', args] as const
}

export function useGetIntunePostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.intune_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntunePostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intune_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntunePostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.intune_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntunePostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intune_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsGroupIdMembershipsKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
) {
  return ['groups', '/groups/:group_id/memberships', args] as const
}

export function useGetGroupsGroupIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsGroupIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsGroupIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsGroupIdMembershipsKey() {
  return ['groups', '/groups/:group_id/memberships', 'PUT'] as const
}

export function usePutGroupsGroupIdMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['memberships']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsGroupIdMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$put']> },
      ) => parseResponse(client.groups[':group_id'].memberships.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGroupsGroupIdMembershipsKey() {
  return ['groups', '/groups/:group_id/memberships', 'PATCH'] as const
}

export function usePatchGroupsGroupIdMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['memberships']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupsGroupIdMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$patch']> },
      ) => parseResponse(client.groups[':group_id'].memberships.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGoogleDirectoriesKey(
  args: InferRequestType<typeof client.google_directories.$get>,
) {
  return ['google_directories', '/google_directories', args] as const
}

export function useGetGoogleDirectories<TError = unknown>(
  args: InferRequestType<typeof client.google_directories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoogleDirectoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.google_directories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGoogleDirectories<TError = unknown>(
  args: InferRequestType<typeof client.google_directories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoogleDirectoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.google_directories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSentineloneDevicesSentineloneAgentKey(
  args: InferRequestType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>,
) {
  return ['sentinelone_devices', '/sentinelone_devices/:sentinelone_agent', args] as const
}

export function useGetSentineloneDevicesSentineloneAgent<TError = unknown>(
  args: InferRequestType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSentineloneDevicesSentineloneAgentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sentinelone_devices[':sentinelone_agent'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSentineloneDevicesSentineloneAgent<TError = unknown>(
  args: InferRequestType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSentineloneDevicesSentineloneAgentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sentinelone_devices[':sentinelone_agent'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSantaPostureProvidersIdKey(
  args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$get']>,
) {
  return ['santa_posture_providers', '/santa_posture_providers/:id', args] as const
}

export function useGetSantaPostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSantaPostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.santa_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSantaPostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSantaPostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.santa_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSantaPostureProvidersIdKey() {
  return ['santa_posture_providers', '/santa_posture_providers/:id', 'PUT'] as const
}

export function usePutSantaPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.santa_posture_providers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSantaPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.santa_posture_providers)[':id']['$put']> },
      ) => parseResponse(client.santa_posture_providers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSantaPostureProvidersIdKey() {
  return ['santa_posture_providers', '/santa_posture_providers/:id', 'DELETE'] as const
}

export function useDeleteSantaPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.santa_posture_providers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSantaPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.santa_posture_providers)[':id']['$delete']> },
      ) => parseResponse(client.santa_posture_providers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSantaPostureProvidersIdKey() {
  return ['santa_posture_providers', '/santa_posture_providers/:id', 'PATCH'] as const
}

export function usePatchSantaPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.santa_posture_providers)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSantaPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.santa_posture_providers)[':id']['$patch']> },
      ) => parseResponse(client.santa_posture_providers[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGoogleDirectoriesIdKey(
  args: InferRequestType<(typeof client.google_directories)[':id']['$get']>,
) {
  return ['google_directories', '/google_directories/:id', args] as const
}

export function useGetGoogleDirectoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.google_directories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoogleDirectoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.google_directories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGoogleDirectoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.google_directories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoogleDirectoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.google_directories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSantaDevicesKey(args: InferRequestType<typeof client.santa_devices.$get>) {
  return ['santa_devices', '/santa_devices', args] as const
}

export function useGetSantaDevices<TError = unknown>(
  args: InferRequestType<typeof client.santa_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSantaDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.santa_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSantaDevices<TError = unknown>(
  args: InferRequestType<typeof client.santa_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSantaDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.santa_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutClientsIdUnverifyKey() {
  return ['clients', '/clients/:id/unverify', 'PUT'] as const
}

export function usePutClientsIdUnverify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clients)[':id']['unverify']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clients)[':id']['unverify']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClientsIdUnverifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clients)[':id']['unverify']['$put']> },
      ) => parseResponse(client.clients[':id'].unverify.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResourcesIdKey(
  args: InferRequestType<(typeof client.resources)[':id']['$get']>,
) {
  return ['resources', '/resources/:id', args] as const
}

export function useGetResourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResourcesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResourcesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutResourcesIdKey() {
  return ['resources', '/resources/:id', 'PUT'] as const
}

export function usePutResourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.resources)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutResourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.resources)[':id']['$put']> },
      ) => parseResponse(client.resources[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteResourcesIdKey() {
  return ['resources', '/resources/:id', 'DELETE'] as const
}

export function useDeleteResourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.resources)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteResourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.resources)[':id']['$delete']> },
      ) => parseResponse(client.resources[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchResourcesIdKey() {
  return ['resources', '/resources/:id', 'PATCH'] as const
}

export function usePatchResourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.resources)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchResourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.resources)[':id']['$patch']> },
      ) => parseResponse(client.resources[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEntraDirectoriesKey(
  args: InferRequestType<typeof client.entra_directories.$get>,
) {
  return ['entra_directories', '/entra_directories', args] as const
}

export function useGetEntraDirectories<TError = unknown>(
  args: InferRequestType<typeof client.entra_directories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntraDirectoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entra_directories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntraDirectories<TError = unknown>(
  args: InferRequestType<typeof client.entra_directories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntraDirectoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entra_directories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntraAuthProvidersIdKey(
  args: InferRequestType<(typeof client.entra_auth_providers)[':id']['$get']>,
) {
  return ['entra_auth_providers', '/entra_auth_providers/:id', args] as const
}

export function useGetEntraAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.entra_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntraAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entra_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntraAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.entra_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntraAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entra_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClientsKey(args: InferRequestType<typeof client.clients.$get>) {
  return ['clients', '/clients', args] as const
}

export function useGetClients<TError = unknown>(
  args: InferRequestType<typeof client.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.clients.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetClients<TError = unknown>(
  args: InferRequestType<typeof client.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.clients.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAccountKey() {
  return ['account', '/account'] as const
}

export function useGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSophosDevicesIdKey(
  args: InferRequestType<(typeof client.sophos_devices)[':id']['$get']>,
) {
  return ['sophos_devices', '/sophos_devices/:id', args] as const
}

export function useGetSophosDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.sophos_devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSophosDevicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sophos_devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSophosDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.sophos_devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSophosDevicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sophos_devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdGatewayTokensKey() {
  return ['sites', '/sites/:site_id/gateway_tokens', 'POST'] as const
}

export function usePostSitesSiteIdGatewayTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateway_tokens']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdGatewayTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$post']> },
      ) => parseResponse(client.sites[':site_id'].gateway_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdGatewayTokensKey() {
  return ['sites', '/sites/:site_id/gateway_tokens', 'DELETE'] as const
}

export function useDeleteSitesSiteIdGatewayTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateway_tokens']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdGatewayTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$delete']>
        },
      ) => parseResponse(client.sites[':site_id'].gateway_tokens.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIruDevicesIdKey(
  args: InferRequestType<(typeof client.iru_devices)[':id']['$get']>,
) {
  return ['iru_devices', '/iru_devices/:id', args] as const
}

export function useGetIruDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.iru_devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIruDevicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.iru_devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIruDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.iru_devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIruDevicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.iru_devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntuneDevicesKey(args: InferRequestType<typeof client.intune_devices.$get>) {
  return ['intune_devices', '/intune_devices', args] as const
}

export function useGetIntuneDevices<TError = unknown>(
  args: InferRequestType<typeof client.intune_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntuneDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intune_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntuneDevices<TError = unknown>(
  args: InferRequestType<typeof client.intune_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntuneDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intune_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesResourceIdPoolMembersKey(
  args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$get']>,
) {
  return ['resources', '/resources/:resource_id/pool_members', args] as const
}

export function useGetResourcesResourceIdPoolMembers<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourcesResourceIdPoolMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources[':resource_id'].pool_members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesResourceIdPoolMembers<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourcesResourceIdPoolMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resources[':resource_id'].pool_members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutResourcesResourceIdPoolMembersKey() {
  return ['resources', '/resources/:resource_id/pool_members', 'PUT'] as const
}

export function usePutResourcesResourceIdPoolMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutResourcesResourceIdPoolMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$put']>
        },
      ) => parseResponse(client.resources[':resource_id'].pool_members.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchResourcesResourceIdPoolMembersKey() {
  return ['resources', '/resources/:resource_id/pool_members', 'PATCH'] as const
}

export function usePatchResourcesResourceIdPoolMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchResourcesResourceIdPoolMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$patch']>
        },
      ) => parseResponse(client.resources[':resource_id'].pool_members.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGithubAuthProvidersKey(
  args: InferRequestType<typeof client.github_auth_providers.$get>,
) {
  return ['github_auth_providers', '/github_auth_providers', args] as const
}

export function useGetGithubAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.github_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGithubAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGithubAuthProviders<TError = unknown>(
  args: InferRequestType<typeof client.github_auth_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGithubAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github_auth_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntraDirectoriesIdKey(
  args: InferRequestType<(typeof client.entra_directories)[':id']['$get']>,
) {
  return ['entra_directories', '/entra_directories/:id', args] as const
}

export function useGetEntraDirectoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.entra_directories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntraDirectoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entra_directories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntraDirectoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.entra_directories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEntraDirectoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entra_directories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSentinelonePostureProvidersIdKey(
  args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$get']>,
) {
  return ['sentinelone_posture_providers', '/sentinelone_posture_providers/:id', args] as const
}

export function useGetSentinelonePostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSentinelonePostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sentinelone_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSentinelonePostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSentinelonePostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sentinelone_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSentinelonePostureProvidersIdKey() {
  return ['sentinelone_posture_providers', '/sentinelone_posture_providers/:id', 'PUT'] as const
}

export function usePutSentinelonePostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSentinelonePostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$put']> },
      ) => parseResponse(client.sentinelone_posture_providers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSentinelonePostureProvidersIdKey() {
  return ['sentinelone_posture_providers', '/sentinelone_posture_providers/:id', 'DELETE'] as const
}

export function useDeleteSentinelonePostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSentinelonePostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$delete']>
        },
      ) => parseResponse(client.sentinelone_posture_providers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSentinelonePostureProvidersIdKey() {
  return ['sentinelone_posture_providers', '/sentinelone_posture_providers/:id', 'PATCH'] as const
}

export function usePatchSentinelonePostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSentinelonePostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$patch']>
        },
      ) => parseResponse(client.sentinelone_posture_providers[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailOtpAuthProvidersIdKey(
  args: InferRequestType<(typeof client.email_otp_auth_providers)[':id']['$get']>,
) {
  return ['email_otp_auth_providers', '/email_otp_auth_providers/:id', args] as const
}

export function useGetEmailOtpAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.email_otp_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailOtpAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email_otp_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailOtpAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.email_otp_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailOtpAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email_otp_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOktaDirectoriesIdKey(
  args: InferRequestType<(typeof client.okta_directories)[':id']['$get']>,
) {
  return ['okta_directories', '/okta_directories/:id', args] as const
}

export function useGetOktaDirectoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.okta_directories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOktaDirectoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.okta_directories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOktaDirectoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.okta_directories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOktaDirectoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.okta_directories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIruDevicesKey(args: InferRequestType<typeof client.iru_devices.$get>) {
  return ['iru_devices', '/iru_devices', args] as const
}

export function useGetIruDevices<TError = unknown>(
  args: InferRequestType<typeof client.iru_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIruDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.iru_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIruDevices<TError = unknown>(
  args: InferRequestType<typeof client.iru_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIruDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.iru_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsIdKey(args: InferRequestType<(typeof client.groups)[':id']['$get']>) {
  return ['groups', '/groups/:id', args] as const
}

export function useGetGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsIdKey() {
  return ['groups', '/groups/:id', 'PUT'] as const
}

export function usePutGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.groups)[':id']['$put']> }) =>
        parseResponse(client.groups[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsIdKey() {
  return ['groups', '/groups/:id', 'DELETE'] as const
}

export function useDeleteGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':id']['$delete']> },
      ) => parseResponse(client.groups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGroupsIdKey() {
  return ['groups', '/groups/:id', 'PATCH'] as const
}

export function usePatchGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.groups)[':id']['$patch']> }) =>
        parseResponse(client.groups[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogsLogIdKey(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
) {
  return ['logs', '/logs/:log_id', args] as const
}

export function useGetLogsLogId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsLogIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':log_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsLogId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsLogIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':log_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOidcAuthProvidersIdKey(
  args: InferRequestType<(typeof client.oidc_auth_providers)[':id']['$get']>,
) {
  return ['oidc_auth_providers', '/oidc_auth_providers/:id', args] as const
}

export function useGetOidcAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.oidc_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOidcAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oidc_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOidcAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.oidc_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOidcAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oidc_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdGatewaysKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways']['$get']>,
) {
  return ['sites', '/sites/:site_id/gateways', args] as const
}

export function useGetSitesSiteIdGateways<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSitesSiteIdGatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].gateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdGateways<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSitesSiteIdGatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].gateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdGatewaysKey() {
  return ['sites', '/sites/:site_id/gateways', 'POST'] as const
}

export function usePostSitesSiteIdGateways<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['gateways']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdGatewaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['gateways']['$post']> },
      ) => parseResponse(client.sites[':site_id'].gateways.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDefenderDevicesKey(
  args: InferRequestType<typeof client.defender_devices.$get>,
) {
  return ['defender_devices', '/defender_devices', args] as const
}

export function useGetDefenderDevices<TError = unknown>(
  args: InferRequestType<typeof client.defender_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDefenderDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.defender_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDefenderDevices<TError = unknown>(
  args: InferRequestType<typeof client.defender_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDefenderDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.defender_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoliciesKey(args: InferRequestType<typeof client.policies.$get>) {
  return ['policies', '/policies', args] as const
}

export function useGetPolicies<TError = unknown>(
  args: InferRequestType<typeof client.policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoliciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.policies.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPolicies<TError = unknown>(
  args: InferRequestType<typeof client.policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoliciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.policies.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPoliciesKey() {
  return ['policies', '/policies', 'POST'] as const
}

export function usePostPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.policies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.policies.$post> }) =>
        parseResponse(client.policies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogsKey(args: InferRequestType<typeof client.logs.$get>) {
  return ['logs', '/logs', args] as const
}

export function useGetLogs<TError = unknown>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLogs<TError = unknown>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSophosDevicesKey(args: InferRequestType<typeof client.sophos_devices.$get>) {
  return ['sophos_devices', '/sophos_devices', args] as const
}

export function useGetSophosDevices<TError = unknown>(
  args: InferRequestType<typeof client.sophos_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSophosDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sophos_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSophosDevices<TError = unknown>(
  args: InferRequestType<typeof client.sophos_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSophosDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sophos_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActorsKey(args: InferRequestType<typeof client.actors.$get>) {
  return ['actors', '/actors', args] as const
}

export function useGetActors<TError = unknown>(
  args: InferRequestType<typeof client.actors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.actors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetActors<TError = unknown>(
  args: InferRequestType<typeof client.actors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.actors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostActorsKey() {
  return ['actors', '/actors', 'POST'] as const
}

export function usePostActors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.actors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.actors.$post> }) =>
        parseResponse(client.actors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOktaDirectoriesKey(
  args: InferRequestType<typeof client.okta_directories.$get>,
) {
  return ['okta_directories', '/okta_directories', args] as const
}

export function useGetOktaDirectories<TError = unknown>(
  args: InferRequestType<typeof client.okta_directories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOktaDirectoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.okta_directories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOktaDirectories<TError = unknown>(
  args: InferRequestType<typeof client.okta_directories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOktaDirectoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.okta_directories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSantaDevicesIdKey(
  args: InferRequestType<(typeof client.santa_devices)[':id']['$get']>,
) {
  return ['santa_devices', '/santa_devices/:id', args] as const
}

export function useGetSantaDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.santa_devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSantaDevicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.santa_devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSantaDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.santa_devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSantaDevicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.santa_devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIruPostureProvidersKey(
  args: InferRequestType<typeof client.iru_posture_providers.$get>,
) {
  return ['iru_posture_providers', '/iru_posture_providers', args] as const
}

export function useGetIruPostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.iru_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIruPostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.iru_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIruPostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.iru_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIruPostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.iru_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOktaAuthProvidersIdKey(
  args: InferRequestType<(typeof client.okta_auth_providers)[':id']['$get']>,
) {
  return ['okta_auth_providers', '/okta_auth_providers/:id', args] as const
}

export function useGetOktaAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.okta_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOktaAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.okta_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOktaAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.okta_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOktaAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.okta_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDefenderDevicesDefenderDeviceKey(
  args: InferRequestType<(typeof client.defender_devices)[':defender_device']['$get']>,
) {
  return ['defender_devices', '/defender_devices/:defender_device', args] as const
}

export function useGetDefenderDevicesDefenderDevice<TError = unknown>(
  args: InferRequestType<(typeof client.defender_devices)[':defender_device']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDefenderDevicesDefenderDeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.defender_devices[':defender_device'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDefenderDevicesDefenderDevice<TError = unknown>(
  args: InferRequestType<(typeof client.defender_devices)[':defender_device']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDefenderDevicesDefenderDeviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.defender_devices[':defender_device'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSophosPostureProvidersIdKey(
  args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$get']>,
) {
  return ['sophos_posture_providers', '/sophos_posture_providers/:id', args] as const
}

export function useGetSophosPostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSophosPostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sophos_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSophosPostureProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSophosPostureProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sophos_posture_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSophosPostureProvidersIdKey() {
  return ['sophos_posture_providers', '/sophos_posture_providers/:id', 'PUT'] as const
}

export function usePutSophosPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sophos_posture_providers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSophosPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$put']> },
      ) => parseResponse(client.sophos_posture_providers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSophosPostureProvidersIdKey() {
  return ['sophos_posture_providers', '/sophos_posture_providers/:id', 'DELETE'] as const
}

export function useDeleteSophosPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sophos_posture_providers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSophosPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$delete']> },
      ) => parseResponse(client.sophos_posture_providers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSophosPostureProvidersIdKey() {
  return ['sophos_posture_providers', '/sophos_posture_providers/:id', 'PATCH'] as const
}

export function usePatchSophosPostureProvidersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sophos_posture_providers)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSophosPostureProvidersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$patch']> },
      ) => parseResponse(client.sophos_posture_providers[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdGatewaysGatewayIdTokenRotateKey() {
  return ['sites', '/sites/:site_id/gateways/:gateway_id/token/rotate', 'POST'] as const
}

export function usePostSitesSiteIdGatewaysGatewayIdTokenRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['rotate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['rotate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdGatewaysGatewayIdTokenRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['rotate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].gateways[':gateway_id'].token.rotate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdGatewaysGatewayIdTokenKey() {
  return ['sites', '/sites/:site_id/gateways/:gateway_id/token', 'POST'] as const
}

export function usePostSitesSiteIdGatewaysGatewayIdToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdGatewaysGatewayIdTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].gateways[':gateway_id'].token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDefenderPostureProvidersKey(
  args: InferRequestType<typeof client.defender_posture_providers.$get>,
) {
  return ['defender_posture_providers', '/defender_posture_providers', args] as const
}

export function useGetDefenderPostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.defender_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDefenderPostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.defender_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDefenderPostureProviders<TError = unknown>(
  args: InferRequestType<typeof client.defender_posture_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDefenderPostureProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.defender_posture_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGoogleAuthProvidersIdKey(
  args: InferRequestType<(typeof client.google_auth_providers)[':id']['$get']>,
) {
  return ['google_auth_providers', '/google_auth_providers/:id', args] as const
}

export function useGetGoogleAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.google_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoogleAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.google_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGoogleAuthProvidersId<TError = unknown>(
  args: InferRequestType<(typeof client.google_auth_providers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoogleAuthProvidersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.google_auth_providers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
