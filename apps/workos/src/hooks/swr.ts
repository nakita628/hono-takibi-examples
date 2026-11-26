import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAgentsKey() {
  return ['agents'] as const
}

export function getApiKeysKey() {
  return ['api_keys'] as const
}

export function getAuditLogsKey() {
  return ['audit_logs'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getAuthkitKey() {
  return ['authkit'] as const
}

export function getAuthorizationKey() {
  return ['authorization'] as const
}

export function getClientKey() {
  return ['client'] as const
}

export function getConnectKey() {
  return ['connect'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getDataIntegrationsKey() {
  return ['data-integrations'] as const
}

export function getDirectoriesKey() {
  return ['directories'] as const
}

export function getDirectoryGroupsKey() {
  return ['directory_groups'] as const
}

export function getDirectoryUsersKey() {
  return ['directory_users'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFeatureFlagsKey() {
  return ['feature-flags'] as const
}

export function getOrganizationDomainsKey() {
  return ['organization_domains'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getPlatformKey() {
  return ['platform'] as const
}

export function getPortalKey() {
  return ['portal'] as const
}

export function getRadarKey() {
  return ['radar'] as const
}

export function getSsoKey() {
  return ['sso'] as const
}

export function getUserManagementKey() {
  return ['user_management'] as const
}

export function getVaultKey() {
  return ['vault'] as const
}

export function getWebhookEndpointsKey() {
  return ['webhook_endpoints'] as const
}

export function getWidgetsKey() {
  return ['widgets'] as const
}

export function getGetAgentsBlueprintsKey(
  args: InferRequestType<typeof client.agents.blueprints.$get>,
) {
  return ['agents', '/agents/blueprints', args] as const
}

export function useGetAgentsBlueprints<TError = unknown>(
  args: InferRequestType<typeof client.agents.blueprints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsBlueprintsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.blueprints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsBlueprints<TError = unknown>(
  args: InferRequestType<typeof client.agents.blueprints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsBlueprintsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.blueprints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsBlueprintsKey() {
  return ['agents', '/agents/blueprints', 'POST'] as const
}

export function usePostAgentsBlueprints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.agents.blueprints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsBlueprintsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.agents.blueprints.$post> }) =>
        parseResponse(client.agents.blueprints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsBlueprintsAgentBlueprintIdKey(
  args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>,
) {
  return ['agents', '/agents/blueprints/:agent_blueprint_id', args] as const
}

export function useGetAgentsBlueprintsAgentBlueprintId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsBlueprintsAgentBlueprintIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.blueprints[':agent_blueprint_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsBlueprintsAgentBlueprintId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsBlueprintsAgentBlueprintIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.blueprints[':agent_blueprint_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAgentsBlueprintsAgentBlueprintIdKey() {
  return ['agents', '/agents/blueprints/:agent_blueprint_id', 'DELETE'] as const
}

export function useDeleteAgentsBlueprintsAgentBlueprintId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAgentsBlueprintsAgentBlueprintIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$delete']>
        },
      ) =>
        parseResponse(client.agents.blueprints[':agent_blueprint_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAgentsBlueprintsAgentBlueprintIdKey() {
  return ['agents', '/agents/blueprints/:agent_blueprint_id', 'PATCH'] as const
}

export function usePatchAgentsBlueprintsAgentBlueprintId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAgentsBlueprintsAgentBlueprintIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$patch']>
        },
      ) =>
        parseResponse(client.agents.blueprints[':agent_blueprint_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAgentsBlueprintsAgentBlueprintIdTokensKey() {
  return ['agents', '/agents/blueprints/:agent_blueprint_id/tokens', 'POST'] as const
}

export function usePostAgentsBlueprintsAgentBlueprintIdTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsBlueprintsAgentBlueprintIdTokensKey()
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
            (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['$post']
          >
        },
      ) =>
        parseResponse(
          client.agents.blueprints[':agent_blueprint_id'].tokens.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAgentsBlueprintsAgentBlueprintIdTokensValidateKey() {
  return ['agents', '/agents/blueprints/:agent_blueprint_id/tokens/validate', 'POST'] as const
}

export function usePostAgentsBlueprintsAgentBlueprintIdTokensValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['validate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsBlueprintsAgentBlueprintIdTokensValidateKey()
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
            (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.agents.blueprints[':agent_blueprint_id'].tokens.validate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAgentsClaimsAttemptsKey() {
  return ['agents', '/agents/claims/attempts', 'PATCH'] as const
}

export function usePatchAgentsClaimsAttempts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.agents.claims.attempts.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.agents.claims.attempts.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAgentsClaimsAttemptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.agents.claims.attempts.$patch> },
      ) => parseResponse(client.agents.claims.attempts.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAgentsCredentialsValidateKey() {
  return ['agents', '/agents/credentials/validate', 'POST'] as const
}

export function usePostAgentsCredentialsValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.agents.credentials.validate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.agents.credentials.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsCredentialsValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.agents.credentials.validate.$post> },
      ) => parseResponse(client.agents.credentials.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsInstancesKey(
  args: InferRequestType<typeof client.agents.instances.$get>,
) {
  return ['agents', '/agents/instances', args] as const
}

export function useGetAgentsInstances<TError = unknown>(
  args: InferRequestType<typeof client.agents.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsInstances<TError = unknown>(
  args: InferRequestType<typeof client.agents.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsInstancesAgentInstanceIdKey(
  args: InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$get']>,
) {
  return ['agents', '/agents/instances/:agent_instance_id', args] as const
}

export function useGetAgentsInstancesAgentInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsInstancesAgentInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.instances[':agent_instance_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsInstancesAgentInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsInstancesAgentInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agents.instances[':agent_instance_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAgentsInstancesAgentInstanceIdKey() {
  return ['agents', '/agents/instances/:agent_instance_id', 'DELETE'] as const
}

export function useDeleteAgentsInstancesAgentInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAgentsInstancesAgentInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$delete']>
        },
      ) => parseResponse(client.agents.instances[':agent_instance_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsRegistrationsIdKey(
  args: InferRequestType<(typeof client.agents.registrations)[':id']['$get']>,
) {
  return ['agents', '/agents/registrations/:id', args] as const
}

export function useGetAgentsRegistrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.registrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsRegistrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.registrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsRegistrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.registrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsRegistrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.registrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsRegistrationsIdRevokeKey() {
  return ['agents', '/agents/registrations/:id/revoke', 'POST'] as const
}

export function usePostAgentsRegistrationsIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.registrations)[':id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.registrations)[':id']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsRegistrationsIdRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.agents.registrations)[':id']['revoke']['$post']>
        },
      ) => parseResponse(client.agents.registrations[':id'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentsSessionsKey(
  args: InferRequestType<typeof client.agents.sessions.$get>,
) {
  return ['agents', '/agents/sessions', args] as const
}

export function useGetAgentsSessions<TError = unknown>(
  args: InferRequestType<typeof client.agents.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentsSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessions<TError = unknown>(
  args: InferRequestType<typeof client.agents.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentsSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agents.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentsSessionsAgentInstanceSessionIdKey(
  args: InferRequestType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>,
) {
  return ['agents', '/agents/sessions/:agent_instance_session_id', args] as const
}

export function useGetAgentsSessionsAgentInstanceSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsAgentInstanceSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.agents.sessions[':agent_instance_session_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentsSessionsAgentInstanceSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentsSessionsAgentInstanceSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.agents.sessions[':agent_instance_session_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsSessionsAgentInstanceSessionIdRevokeKey() {
  return ['agents', '/agents/sessions/:agent_instance_session_id/revoke', 'POST'] as const
}

export function usePostAgentsSessionsAgentInstanceSessionIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agents.sessions)[':agent_instance_session_id']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.agents.sessions)[':agent_instance_session_id']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsSessionsAgentInstanceSessionIdRevokeKey()
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
            (typeof client.agents.sessions)[':agent_instance_session_id']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.agents.sessions[':agent_instance_session_id'].revoke.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeysValidationsKey() {
  return ['api_keys', '/api_keys/validations', 'POST'] as const
}

export function usePostApiKeysValidations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.validations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api_keys.validations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysValidationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api_keys.validations.$post> },
      ) => parseResponse(client.api_keys.validations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiKeysIdKey() {
  return ['api_keys', '/api_keys/:id', 'DELETE'] as const
}

export function useDeleteApiKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_keys)[':id']['$delete']> },
      ) => parseResponse(client.api_keys[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeysIdExpireKey() {
  return ['api_keys', '/api_keys/:id/expire', 'POST'] as const
}

export function usePostApiKeysIdExpire<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api_keys)[':id']['expire']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':id']['expire']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysIdExpireKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_keys)[':id']['expire']['$post']> },
      ) => parseResponse(client.api_keys[':id'].expire.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditLogsActionsKey(
  args: InferRequestType<typeof client.audit_logs.actions.$get>,
) {
  return ['audit_logs', '/audit_logs/actions', args] as const
}

export function useGetAuditLogsActions<TError = unknown>(
  args: InferRequestType<typeof client.audit_logs.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditLogsActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit_logs.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditLogsActions<TError = unknown>(
  args: InferRequestType<typeof client.audit_logs.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditLogsActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit_logs.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuditLogsActionsActionNameSchemasKey(
  args: InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>,
) {
  return ['audit_logs', '/audit_logs/actions/:actionName/schemas', args] as const
}

export function useGetAuditLogsActionsActionNameSchemas<TError = unknown>(
  args: InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditLogsActionsActionNameSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit_logs.actions[':actionName'].schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditLogsActionsActionNameSchemas<TError = unknown>(
  args: InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditLogsActionsActionNameSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit_logs.actions[':actionName'].schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuditLogsActionsActionNameSchemasKey() {
  return ['audit_logs', '/audit_logs/actions/:actionName/schemas', 'POST'] as const
}

export function usePostAuditLogsActionsActionNameSchemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditLogsActionsActionNameSchemasKey()
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
            (typeof client.audit_logs.actions)[':actionName']['schemas']['$post']
          >
        },
      ) =>
        parseResponse(client.audit_logs.actions[':actionName'].schemas.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuditLogsEventsKey() {
  return ['audit_logs', '/audit_logs/events', 'POST'] as const
}

export function usePostAuditLogsEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.audit_logs.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditLogsEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audit_logs.events.$post> }) =>
        parseResponse(client.audit_logs.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuditLogsExportsKey() {
  return ['audit_logs', '/audit_logs/exports', 'POST'] as const
}

export function usePostAuditLogsExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.exports.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.audit_logs.exports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditLogsExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audit_logs.exports.$post> }) =>
        parseResponse(client.audit_logs.exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditLogsExportsAuditLogExportIdKey(
  args: InferRequestType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>,
) {
  return ['audit_logs', '/audit_logs/exports/:auditLogExportId', args] as const
}

export function useGetAuditLogsExportsAuditLogExportId<TError = unknown>(
  args: InferRequestType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditLogsExportsAuditLogExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit_logs.exports[':auditLogExportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditLogsExportsAuditLogExportId<TError = unknown>(
  args: InferRequestType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditLogsExportsAuditLogExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit_logs.exports[':auditLogExportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthChallengesIdVerifyKey() {
  return ['auth', '/auth/challenges/:id/verify', 'POST'] as const
}

export function usePostAuthChallengesIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.challenges)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.challenges)[':id']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthChallengesIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.auth.challenges)[':id']['verify']['$post']> },
      ) => parseResponse(client.auth.challenges[':id'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthFactorsEnrollKey() {
  return ['auth', '/auth/factors/enroll', 'POST'] as const
}

export function usePostAuthFactorsEnroll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.factors.enroll.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.factors.enroll.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthFactorsEnrollKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.factors.enroll.$post> }) =>
        parseResponse(client.auth.factors.enroll.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthFactorsIdKey(
  args: InferRequestType<(typeof client.auth.factors)[':id']['$get']>,
) {
  return ['auth', '/auth/factors/:id', args] as const
}

export function useGetAuthFactorsId<TError = unknown>(
  args: InferRequestType<(typeof client.auth.factors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthFactorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.factors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthFactorsId<TError = unknown>(
  args: InferRequestType<(typeof client.auth.factors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthFactorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.factors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAuthFactorsIdKey() {
  return ['auth', '/auth/factors/:id', 'DELETE'] as const
}

export function useDeleteAuthFactorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.auth.factors)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthFactorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth.factors)[':id']['$delete']> },
      ) => parseResponse(client.auth.factors[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthFactorsIdChallengeKey() {
  return ['auth', '/auth/factors/:id/challenge', 'POST'] as const
}

export function usePostAuthFactorsIdChallenge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.factors)[':id']['challenge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.factors)[':id']['challenge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthFactorsIdChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.auth.factors)[':id']['challenge']['$post']> },
      ) => parseResponse(client.auth.factors[':id'].challenge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthkitOauth2CompleteKey() {
  return ['authkit', '/authkit/oauth2/complete', 'POST'] as const
}

export function usePostAuthkitOauth2Complete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authkit.oauth2.complete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authkit.oauth2.complete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthkitOauth2CompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authkit.oauth2.complete.$post> },
      ) => parseResponse(client.authkit.oauth2.complete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationGroupsGroupIdRoleAssignmentsKey(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
  >,
) {
  return ['authorization', '/authorization/groups/:group_id/role_assignments', args] as const
}

export function useGetAuthorizationGroupsGroupIdRoleAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationGroupsGroupIdRoleAssignmentsKey(args)
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
                (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.groups[':group_id'].role_assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationGroupsGroupIdRoleAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationGroupsGroupIdRoleAssignmentsKey(args)
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
                (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.groups[':group_id'].role_assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAuthorizationGroupsGroupIdRoleAssignmentsKey() {
  return ['authorization', '/authorization/groups/:group_id/role_assignments', 'PUT'] as const
}

export function usePutAuthorizationGroupsGroupIdRoleAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authorization.groups)[':group_id']['role_assignments']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorization.groups)[':group_id']['role_assignments']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuthorizationGroupsGroupIdRoleAssignmentsKey()
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
            (typeof client.authorization.groups)[':group_id']['role_assignments']['$put']
          >
        },
      ) =>
        parseResponse(
          client.authorization.groups[':group_id'].role_assignments.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizationGroupsGroupIdRoleAssignmentsKey() {
  return ['authorization', '/authorization/groups/:group_id/role_assignments', 'POST'] as const
}

export function usePostAuthorizationGroupsGroupIdRoleAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authorization.groups)[':group_id']['role_assignments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorization.groups)[':group_id']['role_assignments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationGroupsGroupIdRoleAssignmentsKey()
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
            (typeof client.authorization.groups)[':group_id']['role_assignments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.authorization.groups[':group_id'].role_assignments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthorizationGroupsGroupIdRoleAssignmentsKey() {
  return ['authorization', '/authorization/groups/:group_id/role_assignments', 'DELETE'] as const
}

export function useDeleteAuthorizationGroupsGroupIdRoleAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.groups)[':group_id']['role_assignments']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.groups)[':group_id']['role_assignments']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthorizationGroupsGroupIdRoleAssignmentsKey()
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
            (typeof client.authorization.groups)[':group_id']['role_assignments']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.authorization.groups[':group_id'].role_assignments.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthorizationGroupsGroupIdRoleAssignmentsKey() {
  return ['authorization', '/authorization/groups/:group_id/role_assignments', 'PATCH'] as const
}

export function usePatchAuthorizationGroupsGroupIdRoleAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.groups)[':group_id']['role_assignments']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.groups)[':group_id']['role_assignments']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthorizationGroupsGroupIdRoleAssignmentsKey()
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
            (typeof client.authorization.groups)[':group_id']['role_assignments']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.authorization.groups[':group_id'].role_assignments.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdKey(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
  >,
) {
  return [
    'authorization',
    '/authorization/groups/:group_id/role_assignments/:role_assignment_id',
    args,
  ] as const
}

export function useGetAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdKey(args)
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
                (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.groups[':group_id'].role_assignments[':role_assignment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdKey(args)
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
                (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.groups[':group_id'].role_assignments[':role_assignment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdKey() {
  return [
    'authorization',
    '/authorization/groups/:group_id/role_assignments/:role_assignment_id',
    'DELETE',
  ] as const
}

export function useDeleteAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdKey()
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
            (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.authorization.groups[':group_id'].role_assignments[':role_assignment_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdCheckKey() {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/check',
    'POST',
  ] as const
}

export function usePostAuthorizationOrganizationMembershipsOrganizationMembershipIdCheck<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authorization.organization_memberships)[':organization_membership_id']['check']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['check']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdCheckKey()
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
            (typeof client.authorization.organization_memberships)[':organization_membership_id']['check']['$post']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organization_memberships[':organization_membership_id'].check.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesKey(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
  >,
) {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/resources',
    args,
  ] as const
}

export function useGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesKey(args)
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
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organization_memberships[
            ':organization_membership_id'
          ].resources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesKey(args)
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
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organization_memberships[
            ':organization_membership_id'
          ].resources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsKey(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
  >,
) {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/resources/:resource_id/permissions',
    args,
  ] as const
}

export function useGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsKey(
            args,
          )
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
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organization_memberships[':organization_membership_id'].resources[
            ':resource_id'
          ].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsKey(
            args,
          )
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
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organization_memberships[':organization_membership_id'].resources[
            ':resource_id'
          ].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsKey(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
  >,
) {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/resources/:resource_type_slug/:external_id/permissions',
    args,
  ] as const
}

export function useGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsKey(
            args,
          )
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
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organization_memberships[':organization_membership_id'].resources[
            ':resource_type_slug'
          ][':external_id'].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsKey(
            args,
          )
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
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organization_memberships[':organization_membership_id'].resources[
            ':resource_type_slug'
          ][':external_id'].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsKey(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
  >,
) {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/role_assignments',
    args,
  ] as const
}

export function useGetAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsKey(args)
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
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organization_memberships[
            ':organization_membership_id'
          ].role_assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsKey(args)
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
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organization_memberships[
            ':organization_membership_id'
          ].role_assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsKey() {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/role_assignments',
    'POST',
  ] as const
}

export function usePostAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsKey()
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
            (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organization_memberships[
            ':organization_membership_id'
          ].role_assignments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsKey() {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/role_assignments',
    'DELETE',
  ] as const
}

export function useDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsKey()
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
            (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organization_memberships[
            ':organization_membership_id'
          ].role_assignments.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsKey() {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/role_assignments',
    'PATCH',
  ] as const
}

export function usePatchAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsKey()
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
            (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organization_memberships[
            ':organization_membership_id'
          ].role_assignments.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoleAssignmentIdKey() {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/role_assignments/:role_assignment_id',
    'DELETE',
  ] as const
}

export function useDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoleAssignmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments'][':role_assignment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments'][':role_assignment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoleAssignmentIdKey()
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
            (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments'][':role_assignment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organization_memberships[
            ':organization_membership_id'
          ].role_assignments[':role_assignment_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationOrganizationsOrganizationIdRolesKey(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
  >,
) {
  return ['authorization', '/authorization/organizations/:organizationId/roles', args] as const
}

export function useGetAuthorizationOrganizationsOrganizationIdRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationsOrganizationIdRolesKey(args)
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
                (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organizations[':organizationId'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationOrganizationsOrganizationIdRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationsOrganizationIdRolesKey(args)
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
                (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organizations[':organizationId'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAuthorizationOrganizationsOrganizationIdRolesKey() {
  return ['authorization', '/authorization/organizations/:organizationId/roles', 'POST'] as const
}

export function usePostAuthorizationOrganizationsOrganizationIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authorization.organizations)[':organizationId']['roles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationOrganizationsOrganizationIdRolesKey()
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
            (typeof client.authorization.organizations)[':organizationId']['roles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organizations[':organizationId'].roles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationOrganizationsOrganizationIdRolesSlugKey(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
  >,
) {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug',
    args,
  ] as const
}

export function useGetAuthorizationOrganizationsOrganizationIdRolesSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationsOrganizationIdRolesSlugKey(args)
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
                (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organizations[':organizationId'].roles[':slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationOrganizationsOrganizationIdRolesSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationsOrganizationIdRolesSlugKey(args)
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
                (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organizations[':organizationId'].roles[':slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugKey() {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug',
    'DELETE',
  ] as const
}

export function useDeleteAuthorizationOrganizationsOrganizationIdRolesSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugKey()
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
            (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organizations[':organizationId'].roles[':slug'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthorizationOrganizationsOrganizationIdRolesSlugKey() {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug',
    'PATCH',
  ] as const
}

export function usePatchAuthorizationOrganizationsOrganizationIdRolesSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthorizationOrganizationsOrganizationIdRolesSlugKey()
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
            (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organizations[':organizationId'].roles[':slug'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsKey() {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug/permissions',
    'PUT',
  ] as const
}

export function usePutAuthorizationOrganizationsOrganizationIdRolesSlugPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsKey()
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
            (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organizations[':organizationId'].roles[':slug'].permissions.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsKey() {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug/permissions',
    'POST',
  ] as const
}

export function usePostAuthorizationOrganizationsOrganizationIdRolesSlugPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsKey()
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
            (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organizations[':organizationId'].roles[':slug'].permissions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsPermissionSlugKey() {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug/permissions/:permissionSlug',
    'DELETE',
  ] as const
}

export function useDeleteAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsPermissionSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions'][':permissionSlug']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions'][':permissionSlug']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsPermissionSlugKey()
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
            (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions'][':permissionSlug']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organizations[':organizationId'].roles[':slug'].permissions[
            ':permissionSlug'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdKey(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
  >,
) {
  return [
    'authorization',
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id',
    args,
  ] as const
}

export function useGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdKey(args)
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
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
            ':external_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdKey(args)
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
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
            ':external_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdKey() {
  return [
    'authorization',
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id',
    'DELETE',
  ] as const
}

export function useDeleteAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdKey()
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
            (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
            ':external_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdKey() {
  return [
    'authorization',
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id',
    'PATCH',
  ] as const
}

export function usePatchAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdKey()
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
            (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
            ':external_id'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsKey(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
  >,
) {
  return [
    'authorization',
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id/organization_memberships',
    args,
  ] as const
}

export function useGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMemberships<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsKey(
            args,
          )
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
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
            ':external_id'
          ].organization_memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMemberships<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsKey(
            args,
          )
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
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
            ':external_id'
          ].organization_memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsKey(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
  >,
) {
  return [
    'authorization',
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id/role_assignments',
    args,
  ] as const
}

export function useGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsKey(
            args,
          )
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
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
            ':external_id'
          ].role_assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsKey(
            args,
          )
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
                (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
            ':external_id'
          ].role_assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAuthorizationPermissionsKey(
  args: InferRequestType<typeof client.authorization.permissions.$get>,
) {
  return ['authorization', '/authorization/permissions', args] as const
}

export function useGetAuthorizationPermissions<TError = unknown>(
  args: InferRequestType<typeof client.authorization.permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorization.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationPermissions<TError = unknown>(
  args: InferRequestType<typeof client.authorization.permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorization.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthorizationPermissionsKey() {
  return ['authorization', '/authorization/permissions', 'POST'] as const
}

export function usePostAuthorizationPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorization.permissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authorization.permissions.$post> },
      ) => parseResponse(client.authorization.permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationPermissionsSlugKey(
  args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$get']>,
) {
  return ['authorization', '/authorization/permissions/:slug', args] as const
}

export function useGetAuthorizationPermissionsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationPermissionsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.authorization.permissions[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationPermissionsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationPermissionsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.authorization.permissions[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAuthorizationPermissionsSlugKey() {
  return ['authorization', '/authorization/permissions/:slug', 'DELETE'] as const
}

export function useDeleteAuthorizationPermissionsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.authorization.permissions)[':slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthorizationPermissionsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.authorization.permissions)[':slug']['$delete']> },
      ) => parseResponse(client.authorization.permissions[':slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthorizationPermissionsSlugKey() {
  return ['authorization', '/authorization/permissions/:slug', 'PATCH'] as const
}

export function usePatchAuthorizationPermissionsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorization.permissions)[':slug']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthorizationPermissionsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.authorization.permissions)[':slug']['$patch']> },
      ) => parseResponse(client.authorization.permissions[':slug'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationResourcesKey(
  args: InferRequestType<typeof client.authorization.resources.$get>,
) {
  return ['authorization', '/authorization/resources', args] as const
}

export function useGetAuthorizationResources<TError = unknown>(
  args: InferRequestType<typeof client.authorization.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorization.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationResources<TError = unknown>(
  args: InferRequestType<typeof client.authorization.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorization.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthorizationResourcesKey() {
  return ['authorization', '/authorization/resources', 'POST'] as const
}

export function usePostAuthorizationResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorization.resources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authorization.resources.$post> },
      ) => parseResponse(client.authorization.resources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationResourcesResourceIdKey(
  args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$get']>,
) {
  return ['authorization', '/authorization/resources/:resource_id', args] as const
}

export function useGetAuthorizationResourcesResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationResourcesResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.authorization.resources[':resource_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationResourcesResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationResourcesResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.authorization.resources[':resource_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAuthorizationResourcesResourceIdKey() {
  return ['authorization', '/authorization/resources/:resource_id', 'DELETE'] as const
}

export function useDeleteAuthorizationResourcesResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.authorization.resources)[':resource_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthorizationResourcesResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$delete']>
        },
      ) =>
        parseResponse(client.authorization.resources[':resource_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthorizationResourcesResourceIdKey() {
  return ['authorization', '/authorization/resources/:resource_id', 'PATCH'] as const
}

export function usePatchAuthorizationResourcesResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorization.resources)[':resource_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthorizationResourcesResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$patch']>
        },
      ) => parseResponse(client.authorization.resources[':resource_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationResourcesResourceIdOrganizationMembershipsKey(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
  >,
) {
  return [
    'authorization',
    '/authorization/resources/:resource_id/organization_memberships',
    args,
  ] as const
}

export function useGetAuthorizationResourcesResourceIdOrganizationMemberships<TError = unknown>(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationResourcesResourceIdOrganizationMembershipsKey(args)
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
                (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.resources[':resource_id'].organization_memberships.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationResourcesResourceIdOrganizationMemberships<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationResourcesResourceIdOrganizationMembershipsKey(args)
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
                (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.resources[':resource_id'].organization_memberships.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAuthorizationResourcesResourceIdRoleAssignmentsKey(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
  >,
) {
  return ['authorization', '/authorization/resources/:resource_id/role_assignments', args] as const
}

export function useGetAuthorizationResourcesResourceIdRoleAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationResourcesResourceIdRoleAssignmentsKey(args)
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
                (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.resources[':resource_id'].role_assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationResourcesResourceIdRoleAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationResourcesResourceIdRoleAssignmentsKey(args)
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
                (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.authorization.resources[':resource_id'].role_assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAuthorizationRolesKey() {
  return ['authorization', '/authorization/roles'] as const
}

export function useGetAuthorizationRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthorizationRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorization.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthorizationRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorization.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthorizationRolesKey() {
  return ['authorization', '/authorization/roles', 'POST'] as const
}

export function usePostAuthorizationRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorization.roles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authorization.roles.$post> }) =>
        parseResponse(client.authorization.roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationRolesSlugKey(
  args: InferRequestType<(typeof client.authorization.roles)[':slug']['$get']>,
) {
  return ['authorization', '/authorization/roles/:slug', args] as const
}

export function useGetAuthorizationRolesSlug<TError = unknown>(
  args: InferRequestType<(typeof client.authorization.roles)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationRolesSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorization.roles[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationRolesSlug<TError = unknown>(
  args: InferRequestType<(typeof client.authorization.roles)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizationRolesSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorization.roles[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAuthorizationRolesSlugKey() {
  return ['authorization', '/authorization/roles/:slug', 'PATCH'] as const
}

export function usePatchAuthorizationRolesSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorization.roles)[':slug']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthorizationRolesSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.authorization.roles)[':slug']['$patch']> },
      ) => parseResponse(client.authorization.roles[':slug'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAuthorizationRolesSlugPermissionsKey() {
  return ['authorization', '/authorization/roles/:slug/permissions', 'PUT'] as const
}

export function usePutAuthorizationRolesSlugPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['permissions']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorization.roles)[':slug']['permissions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuthorizationRolesSlugPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.authorization.roles)[':slug']['permissions']['$put']>
        },
      ) => parseResponse(client.authorization.roles[':slug'].permissions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizationRolesSlugPermissionsKey() {
  return ['authorization', '/authorization/roles/:slug/permissions', 'POST'] as const
}

export function usePostAuthorizationRolesSlugPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['permissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorization.roles)[':slug']['permissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationRolesSlugPermissionsKey()
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
            (typeof client.authorization.roles)[':slug']['permissions']['$post']
          >
        },
      ) => parseResponse(client.authorization.roles[':slug'].permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClientTokenKey() {
  return ['client', '/client/token', 'POST'] as const
}

export function usePostClientToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.client.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClientTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.client.token.$post> }) =>
        parseResponse(client.client.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectApplicationsKey(
  args: InferRequestType<typeof client.connect.applications.$get>,
) {
  return ['connect', '/connect/applications', args] as const
}

export function useGetConnectApplications<TError = unknown>(
  args: InferRequestType<typeof client.connect.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connect.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectApplications<TError = unknown>(
  args: InferRequestType<typeof client.connect.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connect.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConnectApplicationsKey() {
  return ['connect', '/connect/applications', 'POST'] as const
}

export function usePostConnectApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.connect.applications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.connect.applications.$post> },
      ) => parseResponse(client.connect.applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectApplicationsIdKey(
  args: InferRequestType<(typeof client.connect.applications)[':id']['$get']>,
) {
  return ['connect', '/connect/applications/:id', args] as const
}

export function useGetConnectApplicationsId<TError = unknown>(
  args: InferRequestType<(typeof client.connect.applications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectApplicationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connect.applications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectApplicationsId<TError = unknown>(
  args: InferRequestType<(typeof client.connect.applications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectApplicationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connect.applications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConnectApplicationsIdKey() {
  return ['connect', '/connect/applications/:id', 'PUT'] as const
}

export function usePutConnectApplicationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connect.applications)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connect.applications)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConnectApplicationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connect.applications)[':id']['$put']> },
      ) => parseResponse(client.connect.applications[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConnectApplicationsIdKey() {
  return ['connect', '/connect/applications/:id', 'DELETE'] as const
}

export function useDeleteConnectApplicationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connect.applications)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.connect.applications)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConnectApplicationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connect.applications)[':id']['$delete']> },
      ) => parseResponse(client.connect.applications[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectApplicationsIdClientSecretsKey(
  args: InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>,
) {
  return ['connect', '/connect/applications/:id/client_secrets', args] as const
}

export function useGetConnectApplicationsIdClientSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectApplicationsIdClientSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.connect.applications[':id'].client_secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectApplicationsIdClientSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectApplicationsIdClientSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.connect.applications[':id'].client_secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConnectApplicationsIdClientSecretsKey() {
  return ['connect', '/connect/applications/:id/client_secrets', 'POST'] as const
}

export function usePostConnectApplicationsIdClientSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectApplicationsIdClientSecretsKey()
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
            (typeof client.connect.applications)[':id']['client_secrets']['$post']
          >
        },
      ) =>
        parseResponse(client.connect.applications[':id'].client_secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConnectClientSecretsIdKey() {
  return ['connect', '/connect/client_secrets/:id', 'DELETE'] as const
}

export function useDeleteConnectClientSecretsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connect.client_secrets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.connect.client_secrets)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConnectClientSecretsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.connect.client_secrets)[':id']['$delete']> },
      ) => parseResponse(client.connect.client_secrets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectionsKey(args: InferRequestType<typeof client.connections.$get>) {
  return ['connections', '/connections', args] as const
}

export function useGetConnections<TError = unknown>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnections<TError = unknown>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConnectionsKey() {
  return ['connections', '/connections', 'POST'] as const
}

export function usePostConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.connections.$post> }) =>
        parseResponse(client.connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectionsConnectionIdSamlIdpSigningCertsKey(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
  >,
) {
  return ['connections', '/connections/:connectionId/saml_idp_signing_certs', args] as const
}

export function useGetConnectionsConnectionIdSamlIdpSigningCerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectionsConnectionIdSamlIdpSigningCertsKey(args)
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
                (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connections[':connectionId'].saml_idp_signing_certs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionsConnectionIdSamlIdpSigningCerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectionsConnectionIdSamlIdpSigningCertsKey(args)
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
                (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connections[':connectionId'].saml_idp_signing_certs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostConnectionsConnectionIdSamlIdpSigningCertsKey() {
  return ['connections', '/connections/:connectionId/saml_idp_signing_certs', 'POST'] as const
}

export function usePostConnectionsConnectionIdSamlIdpSigningCerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionsConnectionIdSamlIdpSigningCertsKey()
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
            (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.connections[':connectionId'].saml_idp_signing_certs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConnectionsConnectionIdSamlIdpSigningCertsCertificateIdKey() {
  return [
    'connections',
    '/connections/:connectionId/saml_idp_signing_certs/:certificateId',
    'DELETE',
  ] as const
}

export function useDeleteConnectionsConnectionIdSamlIdpSigningCertsCertificateId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.connections)[':connectionId']['saml_idp_signing_certs'][':certificateId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_idp_signing_certs'][':certificateId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConnectionsConnectionIdSamlIdpSigningCertsCertificateIdKey()
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
            (typeof client.connections)[':connectionId']['saml_idp_signing_certs'][':certificateId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.connections[':connectionId'].saml_idp_signing_certs[':certificateId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConnectionsConnectionIdSamlSpEncryptionCertsKey(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
  >,
) {
  return ['connections', '/connections/:connectionId/saml_sp_encryption_certs', args] as const
}

export function useGetConnectionsConnectionIdSamlSpEncryptionCerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectionsConnectionIdSamlSpEncryptionCertsKey(args)
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
                (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connections[':connectionId'].saml_sp_encryption_certs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionsConnectionIdSamlSpEncryptionCerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectionsConnectionIdSamlSpEncryptionCertsKey(args)
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
                (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connections[':connectionId'].saml_sp_encryption_certs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostConnectionsConnectionIdSamlSpEncryptionCertsKey() {
  return ['connections', '/connections/:connectionId/saml_sp_encryption_certs', 'POST'] as const
}

export function usePostConnectionsConnectionIdSamlSpEncryptionCerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionsConnectionIdSamlSpEncryptionCertsKey()
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
            (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.connections[':connectionId'].saml_sp_encryption_certs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConnectionsConnectionIdSamlSpEncryptionCertsCertificateIdKey() {
  return [
    'connections',
    '/connections/:connectionId/saml_sp_encryption_certs/:certificateId',
    'DELETE',
  ] as const
}

export function useDeleteConnectionsConnectionIdSamlSpEncryptionCertsCertificateId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.connections)[':connectionId']['saml_sp_encryption_certs'][':certificateId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_sp_encryption_certs'][':certificateId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteConnectionsConnectionIdSamlSpEncryptionCertsCertificateIdKey()
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
            (typeof client.connections)[':connectionId']['saml_sp_encryption_certs'][':certificateId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.connections[':connectionId'].saml_sp_encryption_certs[':certificateId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConnectionsConnectionIdSamlSpSigningCertKey(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
  >,
) {
  return ['connections', '/connections/:connectionId/saml_sp_signing_cert', args] as const
}

export function useGetConnectionsConnectionIdSamlSpSigningCert<TError = unknown>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectionsConnectionIdSamlSpSigningCertKey(args)
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
                (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connections[':connectionId'].saml_sp_signing_cert.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionsConnectionIdSamlSpSigningCert<TError = unknown>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectionsConnectionIdSamlSpSigningCertKey(args)
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
                (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.connections[':connectionId'].saml_sp_signing_cert.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostConnectionsConnectionIdSamlSpSigningCertKey() {
  return ['connections', '/connections/:connectionId/saml_sp_signing_cert', 'POST'] as const
}

export function usePostConnectionsConnectionIdSamlSpSigningCert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionsConnectionIdSamlSpSigningCertKey()
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
            (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.connections[':connectionId'].saml_sp_signing_cert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConnectionsConnectionIdSamlSpSigningCertCertificateIdKey() {
  return [
    'connections',
    '/connections/:connectionId/saml_sp_signing_cert/:certificateId',
    'DELETE',
  ] as const
}

export function useDeleteConnectionsConnectionIdSamlSpSigningCertCertificateId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.connections)[':connectionId']['saml_sp_signing_cert'][':certificateId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_sp_signing_cert'][':certificateId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConnectionsConnectionIdSamlSpSigningCertCertificateIdKey()
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
            (typeof client.connections)[':connectionId']['saml_sp_signing_cert'][':certificateId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.connections[':connectionId'].saml_sp_signing_cert[':certificateId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConnectionsIdKey(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
) {
  return ['connections', '/connections/:id', args] as const
}

export function useGetConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteConnectionsIdKey() {
  return ['connections', '/connections/:id', 'DELETE'] as const
}

export function useDeleteConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':id']['$delete']> },
      ) => parseResponse(client.connections[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchConnectionsIdKey() {
  return ['connections', '/connections/:id', 'PATCH'] as const
}

export function usePatchConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':id']['$patch']> },
      ) => parseResponse(client.connections[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataIntegrationsKey(
  args: InferRequestType<(typeof client)['data-integrations']['$get']>,
) {
  return ['data-integrations', '/data-integrations', args] as const
}

export function useGetDataIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client)['data-integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['data-integrations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client)['data-integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['data-integrations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDataIntegrationsKey() {
  return ['data-integrations', '/data-integrations', 'POST'] as const
}

export function usePostDataIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['data-integrations']['$post']> },
      ) => parseResponse(client['data-integrations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataIntegrationsFinishKey() {
  return ['data-integrations', '/data-integrations/finish', 'POST'] as const
}

export function usePostDataIntegrationsFinish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations']['finish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations']['finish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataIntegrationsFinishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['data-integrations']['finish']['$post']> },
      ) => parseResponse(client['data-integrations'].finish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataIntegrationsSlugKey(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['$get']>,
) {
  return ['data-integrations', '/data-integrations/:slug', args] as const
}

export function useGetDataIntegrationsSlug<TError = unknown>(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataIntegrationsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['data-integrations'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataIntegrationsSlug<TError = unknown>(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataIntegrationsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['data-integrations'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataIntegrationsSlugKey() {
  return ['data-integrations', '/data-integrations/:slug', 'PUT'] as const
}

export function usePutDataIntegrationsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations'][':slug']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataIntegrationsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['data-integrations'][':slug']['$put']> },
      ) => parseResponse(client['data-integrations'][':slug'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataIntegrationsSlugKey() {
  return ['data-integrations', '/data-integrations/:slug', 'DELETE'] as const
}

export function useDeleteDataIntegrationsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations'][':slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataIntegrationsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['data-integrations'][':slug']['$delete']> },
      ) => parseResponse(client['data-integrations'][':slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDataIntegrationsSlugApiKeyKey() {
  return ['data-integrations', '/data-integrations/:slug/api-key', 'PUT'] as const
}

export function usePutDataIntegrationsSlugApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['api-key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataIntegrationsSlugApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$put']>
        },
      ) => parseResponse(client['data-integrations'][':slug']['api-key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataIntegrationsSlugApiKeyKey() {
  return ['data-integrations', '/data-integrations/:slug/api-key', 'POST'] as const
}

export function usePostDataIntegrationsSlugApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['api-key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataIntegrationsSlugApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$post']>
        },
      ) => parseResponse(client['data-integrations'][':slug']['api-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataIntegrationsSlugAuthorizeKey() {
  return ['data-integrations', '/data-integrations/:slug/authorize', 'POST'] as const
}

export function usePostDataIntegrationsSlugAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['authorize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations'][':slug']['authorize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataIntegrationsSlugAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-integrations'][':slug']['authorize']['$post']>
        },
      ) => parseResponse(client['data-integrations'][':slug'].authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDataIntegrationsSlugClientCredentialsKey() {
  return ['data-integrations', '/data-integrations/:slug/client-credentials', 'PUT'] as const
}

export function usePutDataIntegrationsSlugClientCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-integrations'][':slug']['client-credentials']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations'][':slug']['client-credentials']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataIntegrationsSlugClientCredentialsKey()
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
            (typeof client)['data-integrations'][':slug']['client-credentials']['$put']
          >
        },
      ) =>
        parseResponse(
          client['data-integrations'][':slug']['client-credentials'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataIntegrationsSlugClientCredentialsKey() {
  return ['data-integrations', '/data-integrations/:slug/client-credentials', 'POST'] as const
}

export function usePostDataIntegrationsSlugClientCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['data-integrations'][':slug']['client-credentials']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations'][':slug']['client-credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataIntegrationsSlugClientCredentialsKey()
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
            (typeof client)['data-integrations'][':slug']['client-credentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client['data-integrations'][':slug']['client-credentials'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataIntegrationsSlugCredentialsKey() {
  return ['data-integrations', '/data-integrations/:slug/credentials', 'POST'] as const
}

export function usePostDataIntegrationsSlugCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations'][':slug']['credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataIntegrationsSlugCredentialsKey()
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
            (typeof client)['data-integrations'][':slug']['credentials']['$post']
          >
        },
      ) =>
        parseResponse(client['data-integrations'][':slug'].credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDataIntegrationsSlugOrganizationKey(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$get']>,
) {
  return ['data-integrations', '/data-integrations/:slug/organization', args] as const
}

export function useGetDataIntegrationsSlugOrganization<TError = unknown>(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataIntegrationsSlugOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-integrations'][':slug'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataIntegrationsSlugOrganization<TError = unknown>(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataIntegrationsSlugOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['data-integrations'][':slug'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDataIntegrationsSlugOrganizationKey() {
  return ['data-integrations', '/data-integrations/:slug/organization', 'PUT'] as const
}

export function usePutDataIntegrationsSlugOrganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDataIntegrationsSlugOrganizationKey()
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
            (typeof client)['data-integrations'][':slug']['organization']['$put']
          >
        },
      ) =>
        parseResponse(client['data-integrations'][':slug'].organization.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDataIntegrationsSlugOrganizationKey() {
  return ['data-integrations', '/data-integrations/:slug/organization', 'DELETE'] as const
}

export function useDeleteDataIntegrationsSlugOrganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDataIntegrationsSlugOrganizationKey()
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
            (typeof client)['data-integrations'][':slug']['organization']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['data-integrations'][':slug'].organization.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDataIntegrationsSlugTokenKey() {
  return ['data-integrations', '/data-integrations/:slug/token', 'POST'] as const
}

export function usePostDataIntegrationsSlugToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['data-integrations'][':slug']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataIntegrationsSlugTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['data-integrations'][':slug']['token']['$post']>
        },
      ) => parseResponse(client['data-integrations'][':slug'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDirectoriesKey(args: InferRequestType<typeof client.directories.$get>) {
  return ['directories', '/directories', args] as const
}

export function useGetDirectories<TError = unknown>(
  args: InferRequestType<typeof client.directories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDirectoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectories<TError = unknown>(
  args: InferRequestType<typeof client.directories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDirectoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDirectoriesDirectoryIdGroupsKey(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups']['$get']>,
) {
  return ['directories', '/directories/:directoryId/groups', args] as const
}

export function useGetDirectoriesDirectoryIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directories)[':directoryId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoriesDirectoryIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directories)[':directoryId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.directories[':directoryId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectoriesDirectoryIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directories)[':directoryId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoriesDirectoryIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directories)[':directoryId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.directories[':directoryId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDirectoriesDirectoryIdGroupsGroupIdKey(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>,
) {
  return ['directories', '/directories/:directoryId/groups/:groupId', args] as const
}

export function useGetDirectoriesDirectoryIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoriesDirectoryIdGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.directories[':directoryId'].groups[':groupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectoriesDirectoryIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoriesDirectoryIdGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.directories[':directoryId'].groups[':groupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDirectoriesDirectoryIdUsersKey(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users']['$get']>,
) {
  return ['directories', '/directories/:directoryId/users', args] as const
}

export function useGetDirectoriesDirectoryIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directories)[':directoryId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoriesDirectoryIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directories)[':directoryId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directories[':directoryId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectoriesDirectoryIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directories)[':directoryId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoriesDirectoryIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directories)[':directoryId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directories[':directoryId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDirectoriesDirectoryIdUsersUserIdKey(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>,
) {
  return ['directories', '/directories/:directoryId/users/:userId', args] as const
}

export function useGetDirectoriesDirectoryIdUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoriesDirectoryIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.directories[':directoryId'].users[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectoriesDirectoryIdUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoriesDirectoryIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.directories[':directoryId'].users[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDirectoriesIdKey(
  args: InferRequestType<(typeof client.directories)[':id']['$get']>,
) {
  return ['directories', '/directories/:id', args] as const
}

export function useGetDirectoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.directories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDirectoriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.directories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDirectoriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDirectoriesIdKey() {
  return ['directories', '/directories/:id', 'DELETE'] as const
}

export function useDeleteDirectoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.directories)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDirectoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.directories)[':id']['$delete']> },
      ) => parseResponse(client.directories[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDirectoriesIdSyncKey() {
  return ['directories', '/directories/:id/sync', 'POST'] as const
}

export function usePostDirectoriesIdSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.directories)[':id']['sync']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.directories)[':id']['sync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDirectoriesIdSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.directories)[':id']['sync']['$post']> },
      ) => parseResponse(client.directories[':id'].sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDirectoryGroupsKey(
  args: InferRequestType<typeof client.directory_groups.$get>,
) {
  return ['directory_groups', '/directory_groups', args] as const
}

export function useGetDirectoryGroups<TError = unknown>(
  args: InferRequestType<typeof client.directory_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoryGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directory_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectoryGroups<TError = unknown>(
  args: InferRequestType<typeof client.directory_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoryGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directory_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDirectoryGroupsIdKey(
  args: InferRequestType<(typeof client.directory_groups)[':id']['$get']>,
) {
  return ['directory_groups', '/directory_groups/:id', args] as const
}

export function useGetDirectoryGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.directory_groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoryGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directory_groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectoryGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.directory_groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoryGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directory_groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDirectoryUsersKey(
  args: InferRequestType<typeof client.directory_users.$get>,
) {
  return ['directory_users', '/directory_users', args] as const
}

export function useGetDirectoryUsers<TError = unknown>(
  args: InferRequestType<typeof client.directory_users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDirectoryUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directory_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectoryUsers<TError = unknown>(
  args: InferRequestType<typeof client.directory_users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDirectoryUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directory_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDirectoryUsersIdKey(
  args: InferRequestType<(typeof client.directory_users)[':id']['$get']>,
) {
  return ['directory_users', '/directory_users/:id', args] as const
}

export function useGetDirectoryUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.directory_users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoryUsersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directory_users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectoryUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.directory_users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoryUsersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directory_users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function useGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetFeatureFlagsKey(
  args: InferRequestType<(typeof client)['feature-flags']['$get']>,
) {
  return ['feature-flags', '/feature-flags', args] as const
}

export function useGetFeatureFlags<TError = unknown>(
  args: InferRequestType<(typeof client)['feature-flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeatureFlagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['feature-flags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureFlags<TError = unknown>(
  args: InferRequestType<(typeof client)['feature-flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeatureFlagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['feature-flags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeatureFlagsSlugKey(
  args: InferRequestType<(typeof client)['feature-flags'][':slug']['$get']>,
) {
  return ['feature-flags', '/feature-flags/:slug', args] as const
}

export function useGetFeatureFlagsSlug<TError = unknown>(
  args: InferRequestType<(typeof client)['feature-flags'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFeatureFlagsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['feature-flags'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureFlagsSlug<TError = unknown>(
  args: InferRequestType<(typeof client)['feature-flags'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFeatureFlagsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['feature-flags'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFeatureFlagsSlugDisableKey() {
  return ['feature-flags', '/feature-flags/:slug/disable', 'PUT'] as const
}

export function usePutFeatureFlagsSlugDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['disable']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['feature-flags'][':slug']['disable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFeatureFlagsSlugDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['feature-flags'][':slug']['disable']['$put']> },
      ) => parseResponse(client['feature-flags'][':slug'].disable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFeatureFlagsSlugEnableKey() {
  return ['feature-flags', '/feature-flags/:slug/enable', 'PUT'] as const
}

export function usePutFeatureFlagsSlugEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['enable']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['feature-flags'][':slug']['enable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFeatureFlagsSlugEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['feature-flags'][':slug']['enable']['$put']> },
      ) => parseResponse(client['feature-flags'][':slug'].enable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeatureFlagsSlugTargetsResourceIdKey() {
  return ['feature-flags', '/feature-flags/:slug/targets/:resourceId', 'POST'] as const
}

export function usePostFeatureFlagsSlugTargetsResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeatureFlagsSlugTargetsResourceIdKey()
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
            (typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['feature-flags'][':slug'].targets[':resourceId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFeatureFlagsSlugTargetsResourceIdKey() {
  return ['feature-flags', '/feature-flags/:slug/targets/:resourceId', 'DELETE'] as const
}

export function useDeleteFeatureFlagsSlugTargetsResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFeatureFlagsSlugTargetsResourceIdKey()
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
            (typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['feature-flags'][':slug'].targets[':resourceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationDomainsKey() {
  return ['organization_domains', '/organization_domains', 'POST'] as const
}

export function usePostOrganizationDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization_domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization_domains.$post> },
      ) => parseResponse(client.organization_domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationDomainsIdKey(
  args: InferRequestType<(typeof client.organization_domains)[':id']['$get']>,
) {
  return ['organization_domains', '/organization_domains/:id', args] as const
}

export function useGetOrganizationDomainsId<TError = unknown>(
  args: InferRequestType<(typeof client.organization_domains)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationDomainsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_domains[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationDomainsId<TError = unknown>(
  args: InferRequestType<(typeof client.organization_domains)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationDomainsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_domains[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationDomainsIdKey() {
  return ['organization_domains', '/organization_domains/:id', 'DELETE'] as const
}

export function useDeleteOrganizationDomainsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_domains)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.organization_domains)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationDomainsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organization_domains)[':id']['$delete']> },
      ) => parseResponse(client.organization_domains[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationDomainsIdVerifyKey() {
  return ['organization_domains', '/organization_domains/:id/verify', 'POST'] as const
}

export function usePostOrganizationDomainsIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization_domains)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization_domains)[':id']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationDomainsIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organization_domains)[':id']['verify']['$post']>
        },
      ) => parseResponse(client.organization_domains[':id'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsKey(args: InferRequestType<typeof client.organizations.$get>) {
  return ['organizations', '/organizations', args] as const
}

export function useGetOrganizations<TError = unknown>(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizations<TError = unknown>(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(args, clientOptions)),
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

export function getGetOrganizationsExternalIdExternalIdKey(
  args: InferRequestType<(typeof client.organizations.external_id)[':external_id']['$get']>,
) {
  return ['organizations', '/organizations/external_id/:external_id', args] as const
}

export function useGetOrganizationsExternalIdExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations.external_id)[':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsExternalIdExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations.external_id[':external_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsExternalIdExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations.external_id)[':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsExternalIdExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations.external_id[':external_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdKey(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
) {
  return ['organizations', '/organizations/:id', args] as const
}

export function useGetOrganizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsIdKey() {
  return ['organizations', '/organizations/:id', 'PUT'] as const
}

export function usePutOrganizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':id']['$put']> },
      ) => parseResponse(client.organizations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdKey() {
  return ['organizations', '/organizations/:id', 'DELETE'] as const
}

export function useDeleteOrganizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':id']['$delete']> },
      ) => parseResponse(client.organizations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdAuditLogConfigurationKey(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>,
) {
  return ['organizations', '/organizations/:id/audit_log_configuration', args] as const
}

export function useGetOrganizationsIdAuditLogConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdAuditLogConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':id'].audit_log_configuration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdAuditLogConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdAuditLogConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':id'].audit_log_configuration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdAuditLogsRetentionKey(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>,
) {
  return ['organizations', '/organizations/:id/audit_logs_retention', args] as const
}

export function useGetOrganizationsIdAuditLogsRetention<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdAuditLogsRetentionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':id'].audit_logs_retention.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdAuditLogsRetention<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdAuditLogsRetentionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':id'].audit_logs_retention.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsIdAuditLogsRetentionKey() {
  return ['organizations', '/organizations/:id/audit_logs_retention', 'PUT'] as const
}

export function usePutOrganizationsIdAuditLogsRetention<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdAuditLogsRetentionKey()
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
            (typeof client.organizations)[':id']['audit_logs_retention']['$put']
          >
        },
      ) => parseResponse(client.organizations[':id'].audit_logs_retention.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdApiKeysKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/api_keys', args] as const
}

export function useGetOrganizationsOrganizationIdApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdApiKeysKey() {
  return ['organizations', '/organizations/:organizationId/api_keys', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdApiKeysKey()
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
            (typeof client.organizations)[':organizationId']['api_keys']['$post']
          >
        },
      ) =>
        parseResponse(client.organizations[':organizationId'].api_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdDataIntegrationConfigurationsKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/data_integration_configurations',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdDataIntegrationConfigurations<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdDataIntegrationConfigurationsKey(args)
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
                (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].data_integration_configurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdDataIntegrationConfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdDataIntegrationConfigurationsKey(args)
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
                (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].data_integration_configurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdDataIntegrationConfigurationsSlugKey() {
  return [
    'organizations',
    '/organizations/:organizationId/data_integration_configurations/:slug',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdDataIntegrationConfigurationsSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['data_integration_configurations'][':slug']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['data_integration_configurations'][':slug']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOrganizationsOrganizationIdDataIntegrationConfigurationsSlugKey()
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
            (typeof client.organizations)[':organizationId']['data_integration_configurations'][':slug']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].data_integration_configurations[':slug'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdFeatureFlagsKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/feature-flags', args] as const
}

export function useGetOrganizationsOrganizationIdFeatureFlags<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdFeatureFlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId']['feature-flags'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdFeatureFlags<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdFeatureFlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId']['feature-flags'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdGroupsKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/groups', args] as const
}

export function useGetOrganizationsOrganizationIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organizationId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdGroupsKey() {
  return ['organizations', '/organizations/:organizationId/groups', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$post']>
        },
      ) => parseResponse(client.organizations[':organizationId'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdGroupsGroupIdKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/groups/:groupId', args] as const
}

export function useGetOrganizationsOrganizationIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdGroupsGroupIdKey(args)
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
                (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].groups[':groupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdGroupsGroupIdKey(args)
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
                (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].groups[':groupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdGroupsGroupIdKey() {
  return ['organizations', '/organizations/:organizationId/groups/:groupId', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationIdGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['groups'][':groupId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdGroupsGroupIdKey()
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
            (typeof client.organizations)[':organizationId']['groups'][':groupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].groups[':groupId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdGroupsGroupIdKey() {
  return ['organizations', '/organizations/:organizationId/groups/:groupId', 'PATCH'] as const
}

export function usePatchOrganizationsOrganizationIdGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['groups'][':groupId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdGroupsGroupIdKey()
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
            (typeof client.organizations)[':organizationId']['groups'][':groupId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].groups[':groupId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/groups/:groupId/organization-memberships',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdGroupsGroupIdOrganizationMemberships<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsKey(args)
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
                (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].groups[':groupId'][
            'organization-memberships'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdGroupsGroupIdOrganizationMemberships<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsKey(args)
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
                (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organizationId'].groups[':groupId'][
            'organization-memberships'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsKey() {
  return [
    'organizations',
    '/organizations/:organizationId/groups/:groupId/organization-memberships',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdGroupsGroupIdOrganizationMemberships<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsKey()
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
            (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].groups[':groupId'][
            'organization-memberships'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsKey() {
  return [
    'organizations',
    '/organizations/:organizationId/groups/:groupId/organization-memberships',
    'PATCH',
  ] as const
}

export function usePatchOrganizationsOrganizationIdGroupsGroupIdOrganizationMemberships<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsKey()
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
            (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].groups[':groupId'][
            'organization-memberships'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmIdKey() {
  return [
    'organizations',
    '/organizations/:organizationId/groups/:groupId/organization-memberships/:omId',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships'][':omId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships'][':omId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmIdKey()
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
            (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships'][':omId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organizationId'].groups[':groupId']['organization-memberships'][
            ':omId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdAuthorizedApplicationsKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/authorized_applications', args] as const
}

export function useGetOrganizationsOrganizationIdAuthorizedApplications<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdAuthorizedApplicationsKey(args)
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
                (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].authorized_applications.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdAuthorizedApplications<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdAuthorizedApplicationsKey(args)
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
                (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].authorized_applications.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdConnectedAccountsSlugKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id/connected_accounts/:slug',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdConnectedAccountsSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdConnectedAccountsSlugKey(args)
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
                (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].connected_accounts[':slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdConnectedAccountsSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdConnectedAccountsSlugKey(args)
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
                (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].connected_accounts[':slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdConnectedAccountsSlugKey() {
  return [
    'organizations',
    '/organizations/:organization_id/connected_accounts/:slug',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdConnectedAccountsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdConnectedAccountsSlugKey()
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
            (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].connected_accounts[':slug'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdConnectedAccountsSlugKey() {
  return [
    'organizations',
    '/organizations/:organization_id/connected_accounts/:slug',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdConnectedAccountsSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdConnectedAccountsSlugKey()
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
            (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].connected_accounts[':slug'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdConnectedAccountsSlugKey() {
  return [
    'organizations',
    '/organizations/:organization_id/connected_accounts/:slug',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdConnectedAccountsSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdConnectedAccountsSlugKey()
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
            (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].connected_accounts[':slug'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdDataProvidersKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['data_providers']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/data_providers', args] as const
}

export function useGetOrganizationsOrganizationIdDataProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['data_providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['data_providers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdDataProvidersKey(args)
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
                (typeof client.organizations)[':organization_id']['data_providers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].data_providers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdDataProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['data_providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['data_providers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdDataProvidersKey(args)
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
                (typeof client.organizations)[':organization_id']['data_providers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].data_providers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdIssuerTrustsKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['issuer_trusts']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/issuer_trusts', args] as const
}

export function useGetOrganizationsOrganizationIdIssuerTrusts<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['issuer_trusts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['issuer_trusts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdIssuerTrustsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['issuer_trusts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].issuer_trusts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdIssuerTrusts<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['issuer_trusts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['issuer_trusts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdIssuerTrustsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['issuer_trusts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].issuer_trusts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdIssuerTrustsKey() {
  return ['organizations', '/organizations/:organization_id/issuer_trusts', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdIssuerTrusts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organization_id']['issuer_trusts']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id']['issuer_trusts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdIssuerTrustsKey()
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
            (typeof client.organizations)[':organization_id']['issuer_trusts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].issuer_trusts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdIssuerTrustsIdKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/issuer_trusts/:id', args] as const
}

export function useGetOrganizationsOrganizationIdIssuerTrustsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdIssuerTrustsIdKey(args)
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
                (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].issuer_trusts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdIssuerTrustsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdIssuerTrustsIdKey(args)
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
                (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].issuer_trusts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdIssuerTrustsIdKey() {
  return ['organizations', '/organizations/:organization_id/issuer_trusts/:id', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationIdIssuerTrustsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdIssuerTrustsIdKey()
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
            (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].issuer_trusts[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdIssuerTrustsIdKey() {
  return ['organizations', '/organizations/:organization_id/issuer_trusts/:id', 'PATCH'] as const
}

export function usePatchOrganizationsOrganizationIdIssuerTrustsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdIssuerTrustsIdKey()
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
            (typeof client.organizations)[':organization_id']['issuer_trusts'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].issuer_trusts[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdItContactsKey(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>,
) {
  return ['organizations', '/organizations/:organization_id/it_contacts', args] as const
}

export function useGetOrganizationsOrganizationIdItContacts<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdItContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].it_contacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdItContacts<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdItContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].it_contacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdItContactsKey() {
  return ['organizations', '/organizations/:organization_id/it_contacts', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdItContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organization_id']['it_contacts']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdItContactsKey()
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
            (typeof client.organizations)[':organization_id']['it_contacts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].it_contacts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdItContactsContactIdKey() {
  return [
    'organizations',
    '/organizations/:organization_id/it_contacts/:contact_id',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdItContactsContactId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdItContactsContactIdKey()
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
            (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].it_contacts[':contact_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdItContactsContactIdInviteKey() {
  return [
    'organizations',
    '/organizations/:organization_id/it_contacts/:contact_id/invite',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdItContactsContactIdInvite<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['invite']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['invite']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdItContactsContactIdInviteKey()
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
            (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['invite']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].it_contacts[':contact_id'].invite.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdItContactsContactIdRevokeKey() {
  return [
    'organizations',
    '/organizations/:organization_id/it_contacts/:contact_id/revoke',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdItContactsContactIdRevoke<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['revoke']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdItContactsContactIdRevokeKey()
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
            (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].it_contacts[':contact_id'].revoke.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPlatformTeamsKey() {
  return ['platform', '/platform/teams', 'POST'] as const
}

export function usePostPlatformTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.teams.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.platform.teams.$post> }) =>
        parseResponse(client.platform.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformTeamsTeamIdKey(
  args: InferRequestType<(typeof client.platform.teams)[':team_id']['$get']>,
) {
  return ['platform', '/platform/teams/:team_id', args] as const
}

export function useGetPlatformTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.platform.teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformTeamsTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.platform.teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformTeamsTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPortalGenerateLinkKey() {
  return ['portal', '/portal/generate_link', 'POST'] as const
}

export function usePostPortalGenerateLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portal.generate_link.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portal.generate_link.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortalGenerateLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.portal.generate_link.$post> },
      ) => parseResponse(client.portal.generate_link.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortalRevokeLinkKey() {
  return ['portal', '/portal/revoke_link', 'POST'] as const
}

export function usePostPortalRevokeLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portal.revoke_link.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.portal.revoke_link.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortalRevokeLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.portal.revoke_link.$post> }) =>
        parseResponse(client.portal.revoke_link.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRadarAttemptsKey() {
  return ['radar', '/radar/attempts', 'POST'] as const
}

export function usePostRadarAttempts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.attempts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.radar.attempts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRadarAttemptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.radar.attempts.$post> }) =>
        parseResponse(client.radar.attempts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRadarAttemptsIdKey() {
  return ['radar', '/radar/attempts/:id', 'PUT'] as const
}

export function usePutRadarAttemptsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.attempts)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.radar.attempts)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRadarAttemptsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.radar.attempts)[':id']['$put']> },
      ) => parseResponse(client.radar.attempts[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRadarDetectionsIdKey(
  args: InferRequestType<(typeof client.radar.detections)[':id']['$get']>,
) {
  return ['radar', '/radar/detections/:id', args] as const
}

export function useGetRadarDetectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.radar.detections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.detections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadarDetectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.detections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.detections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadarDetectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.radar.detections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.detections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadarDetectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.detections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.radar.detections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRadarListsTypeActionKey() {
  return ['radar', '/radar/lists/:type/:action', 'POST'] as const
}

export function usePostRadarListsTypeAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.lists)[':type'][':action']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.radar.lists)[':type'][':action']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRadarListsTypeActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.radar.lists)[':type'][':action']['$post']> },
      ) => parseResponse(client.radar.lists[':type'][':action'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRadarListsTypeActionKey() {
  return ['radar', '/radar/lists/:type/:action', 'DELETE'] as const
}

export function useDeleteRadarListsTypeAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.lists)[':type'][':action']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.radar.lists)[':type'][':action']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRadarListsTypeActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.radar.lists)[':type'][':action']['$delete']> },
      ) => parseResponse(client.radar.lists[':type'][':action'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSsoAuthorizeKey(args: InferRequestType<typeof client.sso.authorize.$get>) {
  return ['sso', '/sso/authorize', args] as const
}

export function useGetSsoAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.sso.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSsoAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSsoAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.sso.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSsoAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSsoJwksClientIdKey(
  args: InferRequestType<(typeof client.sso.jwks)[':clientId']['$get']>,
) {
  return ['sso', '/sso/jwks/:clientId', args] as const
}

export function useGetSsoJwksClientId<TError = unknown>(
  args: InferRequestType<(typeof client.sso.jwks)[':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSsoJwksClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.jwks[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSsoJwksClientId<TError = unknown>(
  args: InferRequestType<(typeof client.sso.jwks)[':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSsoJwksClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.jwks[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSsoLogoutKey(args: InferRequestType<typeof client.sso.logout.$get>) {
  return ['sso', '/sso/logout', args] as const
}

export function useGetSsoLogout<TError = unknown>(
  args: InferRequestType<typeof client.sso.logout.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSsoLogoutKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.logout.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSsoLogout<TError = unknown>(
  args: InferRequestType<typeof client.sso.logout.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSsoLogoutKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.logout.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSsoLogoutAuthorizeKey() {
  return ['sso', '/sso/logout/authorize', 'POST'] as const
}

export function usePostSsoLogoutAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.authorize.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sso.logout.authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSsoLogoutAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sso.logout.authorize.$post> },
      ) => parseResponse(client.sso.logout.authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSsoProfileKey() {
  return ['sso', '/sso/profile'] as const
}

export function useGetSsoProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSsoProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSsoProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSsoProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sso.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSsoTokenKey() {
  return ['sso', '/sso/token', 'POST'] as const
}

export function usePostSsoToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sso.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSsoTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sso.token.$post> }) =>
        parseResponse(client.sso.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementAuthenticateKey() {
  return ['user_management', '/user_management/authenticate', 'POST'] as const
}

export function usePostUserManagementAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_management.authenticate.$post> },
      ) => parseResponse(client.user_management.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementAuthkitOauthResourcesKey(
  args: InferRequestType<typeof client.user_management.authkit_oauth_resources.$get>,
) {
  return ['user_management', '/user_management/authkit_oauth_resources', args] as const
}

export function useGetUserManagementAuthkitOauthResources<TError = unknown>(
  args: InferRequestType<typeof client.user_management.authkit_oauth_resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementAuthkitOauthResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.authkit_oauth_resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementAuthkitOauthResources<TError = unknown>(
  args: InferRequestType<typeof client.user_management.authkit_oauth_resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementAuthkitOauthResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.authkit_oauth_resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementAuthkitOauthResourcesKey() {
  return ['user_management', '/user_management/authkit_oauth_resources', 'POST'] as const
}

export function usePostUserManagementAuthkitOauthResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.authkit_oauth_resources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementAuthkitOauthResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.user_management.authkit_oauth_resources.$post> },
      ) => parseResponse(client.user_management.authkit_oauth_resources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserManagementAuthkitOauthResourcesIdKey() {
  return ['user_management', '/user_management/authkit_oauth_resources/:id', 'DELETE'] as const
}

export function useDeleteUserManagementAuthkitOauthResourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.authkit_oauth_resources)[':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.authkit_oauth_resources)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserManagementAuthkitOauthResourcesIdKey()
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
            (typeof client.user_management.authkit_oauth_resources)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.user_management.authkit_oauth_resources[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementAuthorizeKey(
  args: InferRequestType<typeof client.user_management.authorize.$get>,
) {
  return ['user_management', '/user_management/authorize', args] as const
}

export function useGetUserManagementAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.user_management.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementAuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.user_management.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementAuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementAuthorizeDeviceKey() {
  return ['user_management', '/user_management/authorize/device', 'POST'] as const
}

export function usePostUserManagementAuthorizeDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.authorize.device.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.authorize.device.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementAuthorizeDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_management.authorize.device.$post> },
      ) => parseResponse(client.user_management.authorize.device.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementCorsOriginsKey(
  args: InferRequestType<typeof client.user_management.cors_origins.$get>,
) {
  return ['user_management', '/user_management/cors_origins', args] as const
}

export function useGetUserManagementCorsOrigins<TError = unknown>(
  args: InferRequestType<typeof client.user_management.cors_origins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementCorsOriginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.cors_origins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementCorsOrigins<TError = unknown>(
  args: InferRequestType<typeof client.user_management.cors_origins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementCorsOriginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.cors_origins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementCorsOriginsKey() {
  return ['user_management', '/user_management/cors_origins', 'POST'] as const
}

export function usePostUserManagementCorsOrigins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.cors_origins.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementCorsOriginsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_management.cors_origins.$post> },
      ) => parseResponse(client.user_management.cors_origins.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserManagementCorsOriginsIdKey() {
  return ['user_management', '/user_management/cors_origins/:id', 'DELETE'] as const
}

export function useDeleteUserManagementCorsOriginsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.cors_origins)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.cors_origins)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserManagementCorsOriginsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user_management.cors_origins)[':id']['$delete']>
        },
      ) => parseResponse(client.user_management.cors_origins[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementEmailVerificationIdKey(
  args: InferRequestType<(typeof client.user_management.email_verification)[':id']['$get']>,
) {
  return ['user_management', '/user_management/email_verification/:id', args] as const
}

export function useGetUserManagementEmailVerificationId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.email_verification)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementEmailVerificationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.email_verification[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementEmailVerificationId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.email_verification)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementEmailVerificationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.email_verification[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementInvitationsKey(
  args: InferRequestType<typeof client.user_management.invitations.$get>,
) {
  return ['user_management', '/user_management/invitations', args] as const
}

export function useGetUserManagementInvitations<TError = unknown>(
  args: InferRequestType<typeof client.user_management.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementInvitations<TError = unknown>(
  args: InferRequestType<typeof client.user_management.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementInvitationsKey() {
  return ['user_management', '/user_management/invitations', 'POST'] as const
}

export function usePostUserManagementInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.invitations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementInvitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_management.invitations.$post> },
      ) => parseResponse(client.user_management.invitations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementInvitationsByTokenTokenKey(
  args: InferRequestType<(typeof client.user_management.invitations.by_token)[':token']['$get']>,
) {
  return ['user_management', '/user_management/invitations/by_token/:token', args] as const
}

export function useGetUserManagementInvitationsByTokenToken<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.invitations.by_token)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.invitations.by_token)[':token']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementInvitationsByTokenTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.invitations.by_token)[':token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.invitations.by_token[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementInvitationsByTokenToken<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.invitations.by_token)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.invitations.by_token)[':token']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementInvitationsByTokenTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.invitations.by_token)[':token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.invitations.by_token[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementInvitationsIdKey(
  args: InferRequestType<(typeof client.user_management.invitations)[':id']['$get']>,
) {
  return ['user_management', '/user_management/invitations/:id', args] as const
}

export function useGetUserManagementInvitationsId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.invitations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementInvitationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.invitations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementInvitationsId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.invitations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementInvitationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.invitations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementInvitationsIdAcceptKey() {
  return ['user_management', '/user_management/invitations/:id/accept', 'POST'] as const
}

export function usePostUserManagementInvitationsIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.invitations)[':id']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementInvitationsIdAcceptKey()
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
            (typeof client.user_management.invitations)[':id']['accept']['$post']
          >
        },
      ) =>
        parseResponse(client.user_management.invitations[':id'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementInvitationsIdResendKey() {
  return ['user_management', '/user_management/invitations/:id/resend', 'POST'] as const
}

export function usePostUserManagementInvitationsIdResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['resend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.invitations)[':id']['resend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementInvitationsIdResendKey()
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
            (typeof client.user_management.invitations)[':id']['resend']['$post']
          >
        },
      ) =>
        parseResponse(client.user_management.invitations[':id'].resend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementInvitationsIdRevokeKey() {
  return ['user_management', '/user_management/invitations/:id/revoke', 'POST'] as const
}

export function usePostUserManagementInvitationsIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.invitations)[':id']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementInvitationsIdRevokeKey()
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
            (typeof client.user_management.invitations)[':id']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(client.user_management.invitations[':id'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementJwtTemplateKey() {
  return ['user_management', '/user_management/jwt_template'] as const
}

export function useGetUserManagementJwtTemplate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>>
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
        ? getGetUserManagementJwtTemplateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.jwt_template.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementJwtTemplate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>>
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
        ? getGetUserManagementJwtTemplateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.jwt_template.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserManagementJwtTemplateKey() {
  return ['user_management', '/user_management/jwt_template', 'PUT'] as const
}

export function usePutUserManagementJwtTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.jwt_template.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.jwt_template.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserManagementJwtTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_management.jwt_template.$put> },
      ) => parseResponse(client.user_management.jwt_template.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementMagicAuthKey() {
  return ['user_management', '/user_management/magic_auth', 'POST'] as const
}

export function usePostUserManagementMagicAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.magic_auth.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.magic_auth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementMagicAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_management.magic_auth.$post> },
      ) => parseResponse(client.user_management.magic_auth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementMagicAuthIdKey(
  args: InferRequestType<(typeof client.user_management.magic_auth)[':id']['$get']>,
) {
  return ['user_management', '/user_management/magic_auth/:id', args] as const
}

export function useGetUserManagementMagicAuthId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.magic_auth)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.magic_auth)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementMagicAuthIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.magic_auth)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.magic_auth[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementMagicAuthId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.magic_auth)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.magic_auth)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementMagicAuthIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.magic_auth)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.magic_auth[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementOrganizationMembershipsKey(
  args: InferRequestType<typeof client.user_management.organization_memberships.$get>,
) {
  return ['user_management', '/user_management/organization_memberships', args] as const
}

export function useGetUserManagementOrganizationMemberships<TError = unknown>(
  args: InferRequestType<typeof client.user_management.organization_memberships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.organization_memberships.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementOrganizationMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.organization_memberships.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.organization_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementOrganizationMemberships<TError = unknown>(
  args: InferRequestType<typeof client.user_management.organization_memberships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.organization_memberships.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementOrganizationMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.organization_memberships.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.organization_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementOrganizationMembershipsKey() {
  return ['user_management', '/user_management/organization_memberships', 'POST'] as const
}

export function usePostUserManagementOrganizationMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.organization_memberships.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.organization_memberships.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementOrganizationMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.user_management.organization_memberships.$post> },
      ) => parseResponse(client.user_management.organization_memberships.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementOrganizationMembershipsIdKey(
  args: InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$get']>,
) {
  return ['user_management', '/user_management/organization_memberships/:id', args] as const
}

export function useGetUserManagementOrganizationMembershipsId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.organization_memberships)[':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementOrganizationMembershipsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.organization_memberships)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.organization_memberships[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementOrganizationMembershipsId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.organization_memberships)[':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementOrganizationMembershipsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.organization_memberships)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.organization_memberships[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserManagementOrganizationMembershipsIdKey() {
  return ['user_management', '/user_management/organization_memberships/:id', 'PUT'] as const
}

export function usePutUserManagementOrganizationMembershipsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user_management.organization_memberships)[':id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserManagementOrganizationMembershipsIdKey()
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
            (typeof client.user_management.organization_memberships)[':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.user_management.organization_memberships[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserManagementOrganizationMembershipsIdKey() {
  return ['user_management', '/user_management/organization_memberships/:id', 'DELETE'] as const
}

export function useDeleteUserManagementOrganizationMembershipsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user_management.organization_memberships)[':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserManagementOrganizationMembershipsIdKey()
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
            (typeof client.user_management.organization_memberships)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.user_management.organization_memberships[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUserManagementOrganizationMembershipsIdDeactivateKey() {
  return [
    'user_management',
    '/user_management/organization_memberships/:id/deactivate',
    'PUT',
  ] as const
}

export function usePutUserManagementOrganizationMembershipsIdDeactivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user_management.organization_memberships)[':id']['deactivate']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.user_management.organization_memberships)[':id']['deactivate']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserManagementOrganizationMembershipsIdDeactivateKey()
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
            (typeof client.user_management.organization_memberships)[':id']['deactivate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.user_management.organization_memberships[':id'].deactivate.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUserManagementOrganizationMembershipsIdReactivateKey() {
  return [
    'user_management',
    '/user_management/organization_memberships/:id/reactivate',
    'PUT',
  ] as const
}

export function usePutUserManagementOrganizationMembershipsIdReactivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user_management.organization_memberships)[':id']['reactivate']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.user_management.organization_memberships)[':id']['reactivate']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserManagementOrganizationMembershipsIdReactivateKey()
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
            (typeof client.user_management.organization_memberships)[':id']['reactivate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.user_management.organization_memberships[':id'].reactivate.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementOrganizationMembershipsOmIdGroupsKey(
  args: InferRequestType<
    (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
  >,
) {
  return [
    'user_management',
    '/user_management/organization_memberships/:omId/groups',
    args,
  ] as const
}

export function useGetUserManagementOrganizationMembershipsOmIdGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementOrganizationMembershipsOmIdGroupsKey(args)
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
                (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.organization_memberships[':omId'].groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementOrganizationMembershipsOmIdGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementOrganizationMembershipsOmIdGroupsKey(args)
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
                (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.organization_memberships[':omId'].groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementPasswordResetKey() {
  return ['user_management', '/user_management/password_reset', 'POST'] as const
}

export function usePostUserManagementPasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.password_reset.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.password_reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementPasswordResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_management.password_reset.$post> },
      ) => parseResponse(client.user_management.password_reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementPasswordResetConfirmKey() {
  return ['user_management', '/user_management/password_reset/confirm', 'POST'] as const
}

export function usePostUserManagementPasswordResetConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.password_reset.confirm.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.password_reset.confirm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementPasswordResetConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.user_management.password_reset.confirm.$post> },
      ) => parseResponse(client.user_management.password_reset.confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementPasswordResetIdKey(
  args: InferRequestType<(typeof client.user_management.password_reset)[':id']['$get']>,
) {
  return ['user_management', '/user_management/password_reset/:id', args] as const
}

export function useGetUserManagementPasswordResetId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.password_reset)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.password_reset)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementPasswordResetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.password_reset)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.password_reset[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementPasswordResetId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.password_reset)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.password_reset)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementPasswordResetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.password_reset)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.password_reset[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementRadarChallengesKey() {
  return ['user_management', '/user_management/radar_challenges', 'POST'] as const
}

export function usePostUserManagementRadarChallenges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.radar_challenges.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.radar_challenges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementRadarChallengesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_management.radar_challenges.$post> },
      ) => parseResponse(client.user_management.radar_challenges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementRadarChallengesIdKey(
  args: InferRequestType<(typeof client.user_management.radar_challenges)[':id']['$get']>,
) {
  return ['user_management', '/user_management/radar_challenges/:id', args] as const
}

export function useGetUserManagementRadarChallengesId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.radar_challenges)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.radar_challenges)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementRadarChallengesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.radar_challenges)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.radar_challenges[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementRadarChallengesId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.radar_challenges)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.radar_challenges)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementRadarChallengesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.radar_challenges)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.radar_challenges[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementRedirectUrisKey(
  args: InferRequestType<typeof client.user_management.redirect_uris.$get>,
) {
  return ['user_management', '/user_management/redirect_uris', args] as const
}

export function useGetUserManagementRedirectUris<TError = unknown>(
  args: InferRequestType<typeof client.user_management.redirect_uris.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementRedirectUrisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.redirect_uris.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementRedirectUris<TError = unknown>(
  args: InferRequestType<typeof client.user_management.redirect_uris.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementRedirectUrisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.redirect_uris.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementRedirectUrisKey() {
  return ['user_management', '/user_management/redirect_uris', 'POST'] as const
}

export function usePostUserManagementRedirectUris<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.redirect_uris.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.redirect_uris.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementRedirectUrisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_management.redirect_uris.$post> },
      ) => parseResponse(client.user_management.redirect_uris.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserManagementRedirectUrisIdKey() {
  return ['user_management', '/user_management/redirect_uris/:id', 'DELETE'] as const
}

export function useDeleteUserManagementRedirectUrisId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.redirect_uris)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.redirect_uris)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserManagementRedirectUrisIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user_management.redirect_uris)[':id']['$delete']>
        },
      ) => parseResponse(client.user_management.redirect_uris[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementSessionsLogoutKey(
  args: InferRequestType<typeof client.user_management.sessions.logout.$get>,
) {
  return ['user_management', '/user_management/sessions/logout', args] as const
}

export function useGetUserManagementSessionsLogout<TError = unknown>(
  args: InferRequestType<typeof client.user_management.sessions.logout.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementSessionsLogoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.sessions.logout.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementSessionsLogout<TError = unknown>(
  args: InferRequestType<typeof client.user_management.sessions.logout.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementSessionsLogoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.sessions.logout.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementSessionsRevokeKey() {
  return ['user_management', '/user_management/sessions/revoke', 'POST'] as const
}

export function usePostUserManagementSessionsRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.sessions.revoke.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.sessions.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementSessionsRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_management.sessions.revoke.$post> },
      ) => parseResponse(client.user_management.sessions.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementUsersKey(
  args: InferRequestType<typeof client.user_management.users.$get>,
) {
  return ['user_management', '/user_management/users', args] as const
}

export function useGetUserManagementUsers<TError = unknown>(
  args: InferRequestType<typeof client.user_management.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsers<TError = unknown>(
  args: InferRequestType<typeof client.user_management.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementUsersKey() {
  return ['user_management', '/user_management/users', 'POST'] as const
}

export function usePostUserManagementUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_management.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_management.users.$post> },
      ) => parseResponse(client.user_management.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementUsersExternalIdExternalIdKey(
  args: InferRequestType<(typeof client.user_management.users.external_id)[':external_id']['$get']>,
) {
  return ['user_management', '/user_management/users/external_id/:external_id', args] as const
}

export function useGetUserManagementUsersExternalIdExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users.external_id)[':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users.external_id)[':external_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersExternalIdExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users.external_id)[':external_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users.external_id[':external_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsersExternalIdExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users.external_id)[':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users.external_id)[':external_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersExternalIdExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users.external_id)[':external_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users.external_id[':external_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementUsersIdentitiesProviderIdpIdKey(
  args: InferRequestType<
    (typeof client.user_management.users.identities)[':provider'][':idp_id']['$get']
  >,
) {
  return ['user_management', '/user_management/users/identities/:provider/:idp_id', args] as const
}

export function useGetUserManagementUsersIdentitiesProviderIdpId<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.users.identities)[':provider'][':idp_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users.identities)[':provider'][':idp_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersIdentitiesProviderIdpIdKey(args)
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
                (typeof client.user_management.users.identities)[':provider'][':idp_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users.identities[':provider'][':idp_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsersIdentitiesProviderIdpId<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.users.identities)[':provider'][':idp_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users.identities)[':provider'][':idp_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersIdentitiesProviderIdpIdKey(args)
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
                (typeof client.user_management.users.identities)[':provider'][':idp_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users.identities[':provider'][':idp_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementUsersIdKey(
  args: InferRequestType<(typeof client.user_management.users)[':id']['$get']>,
) {
  return ['user_management', '/user_management/users/:id', args] as const
}

export function useGetUserManagementUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserManagementUsersIdKey() {
  return ['user_management', '/user_management/users/:id', 'PUT'] as const
}

export function usePutUserManagementUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.users)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.users)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserManagementUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user_management.users)[':id']['$put']> },
      ) => parseResponse(client.user_management.users[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserManagementUsersIdKey() {
  return ['user_management', '/user_management/users/:id', 'DELETE'] as const
}

export function useDeleteUserManagementUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.users)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.users)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserManagementUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user_management.users)[':id']['$delete']> },
      ) => parseResponse(client.user_management.users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementUsersIdEmailChangeConfirmKey() {
  return ['user_management', '/user_management/users/:id/email_change/confirm', 'POST'] as const
}

export function usePostUserManagementUsersIdEmailChangeConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user_management.users)[':id']['email_change']['confirm']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.user_management.users)[':id']['email_change']['confirm']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementUsersIdEmailChangeConfirmKey()
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
            (typeof client.user_management.users)[':id']['email_change']['confirm']['$post']
          >
        },
      ) =>
        parseResponse(
          client.user_management.users[':id'].email_change.confirm.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementUsersIdEmailChangeSendKey() {
  return ['user_management', '/user_management/users/:id/email_change/send', 'POST'] as const
}

export function usePostUserManagementUsersIdEmailChangeSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user_management.users)[':id']['email_change']['send']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.users)[':id']['email_change']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementUsersIdEmailChangeSendKey()
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
            (typeof client.user_management.users)[':id']['email_change']['send']['$post']
          >
        },
      ) =>
        parseResponse(
          client.user_management.users[':id'].email_change.send.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementUsersIdEmailVerificationConfirmKey() {
  return [
    'user_management',
    '/user_management/users/:id/email_verification/confirm',
    'POST',
  ] as const
}

export function usePostUserManagementUsersIdEmailVerificationConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user_management.users)[':id']['email_verification']['confirm']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.user_management.users)[':id']['email_verification']['confirm']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementUsersIdEmailVerificationConfirmKey()
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
            (typeof client.user_management.users)[':id']['email_verification']['confirm']['$post']
          >
        },
      ) =>
        parseResponse(
          client.user_management.users[':id'].email_verification.confirm.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementUsersIdEmailVerificationSendKey() {
  return ['user_management', '/user_management/users/:id/email_verification/send', 'POST'] as const
}

export function usePostUserManagementUsersIdEmailVerificationSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user_management.users)[':id']['email_verification']['send']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.user_management.users)[':id']['email_verification']['send']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementUsersIdEmailVerificationSendKey()
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
            (typeof client.user_management.users)[':id']['email_verification']['send']['$post']
          >
        },
      ) =>
        parseResponse(
          client.user_management.users[':id'].email_verification.send.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementUsersIdIdentitiesKey(
  args: InferRequestType<(typeof client.user_management.users)[':id']['identities']['$get']>,
) {
  return ['user_management', '/user_management/users/:id/identities', args] as const
}

export function useGetUserManagementUsersIdIdentities<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['identities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['identities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersIdIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['identities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.users[':id'].identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsersIdIdentities<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['identities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['identities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersIdIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['identities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.users[':id'].identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementUsersIdSessionsKey(
  args: InferRequestType<(typeof client.user_management.users)[':id']['sessions']['$get']>,
) {
  return ['user_management', '/user_management/users/:id/sessions', args] as const
}

export function useGetUserManagementUsersIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.users[':id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsersIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.users[':id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementUsersUserIdApiKeysKey(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>,
) {
  return ['user_management', '/user_management/users/:userId/api_keys', args] as const
}

export function useGetUserManagementUsersUserIdApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserIdApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.users[':userId'].api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsersUserIdApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserIdApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.users[':userId'].api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementUsersUserIdApiKeysKey() {
  return ['user_management', '/user_management/users/:userId/api_keys', 'POST'] as const
}

export function usePostUserManagementUsersUserIdApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementUsersUserIdApiKeysKey()
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
            (typeof client.user_management.users)[':userId']['api_keys']['$post']
          >
        },
      ) =>
        parseResponse(client.user_management.users[':userId'].api_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementUsersUserIdFeatureFlagsKey(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>,
) {
  return ['user_management', '/user_management/users/:userId/feature-flags', args] as const
}

export function useGetUserManagementUsersUserIdFeatureFlags<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserIdFeatureFlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users[':userId']['feature-flags'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsersUserIdFeatureFlags<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserIdFeatureFlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users[':userId']['feature-flags'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementUsersUserIdAuthorizedApplicationsKey(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
  >,
) {
  return [
    'user_management',
    '/user_management/users/:user_id/authorized_applications',
    args,
  ] as const
}

export function useGetUserManagementUsersUserIdAuthorizedApplications<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserIdAuthorizedApplicationsKey(args)
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
                (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users[':user_id'].authorized_applications.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsersUserIdAuthorizedApplications<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserIdAuthorizedApplicationsKey(args)
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
                (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users[':user_id'].authorized_applications.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserManagementUsersUserIdAuthorizedApplicationsApplicationIdKey() {
  return [
    'user_management',
    '/user_management/users/:user_id/authorized_applications/:application_id',
    'DELETE',
  ] as const
}

export function useDeleteUserManagementUsersUserIdAuthorizedApplicationsApplicationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users)[':user_id']['authorized_applications'][':application_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['authorized_applications'][':application_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteUserManagementUsersUserIdAuthorizedApplicationsApplicationIdKey()
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
            (typeof client.user_management.users)[':user_id']['authorized_applications'][':application_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.user_management.users[':user_id'].authorized_applications[
            ':application_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementUsersUserIdConnectedAccountsSlugKey(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
  >,
) {
  return [
    'user_management',
    '/user_management/users/:user_id/connected_accounts/:slug',
    args,
  ] as const
}

export function useGetUserManagementUsersUserIdConnectedAccountsSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserIdConnectedAccountsSlugKey(args)
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
                (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users[':user_id'].connected_accounts[':slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsersUserIdConnectedAccountsSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserIdConnectedAccountsSlugKey(args)
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
                (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users[':user_id'].connected_accounts[':slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserManagementUsersUserIdConnectedAccountsSlugKey() {
  return [
    'user_management',
    '/user_management/users/:user_id/connected_accounts/:slug',
    'PUT',
  ] as const
}

export function usePutUserManagementUsersUserIdConnectedAccountsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserManagementUsersUserIdConnectedAccountsSlugKey()
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
            (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$put']
          >
        },
      ) =>
        parseResponse(
          client.user_management.users[':user_id'].connected_accounts[':slug'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementUsersUserIdConnectedAccountsSlugKey() {
  return [
    'user_management',
    '/user_management/users/:user_id/connected_accounts/:slug',
    'POST',
  ] as const
}

export function usePostUserManagementUsersUserIdConnectedAccountsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementUsersUserIdConnectedAccountsSlugKey()
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
            (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$post']
          >
        },
      ) =>
        parseResponse(
          client.user_management.users[':user_id'].connected_accounts[':slug'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserManagementUsersUserIdConnectedAccountsSlugKey() {
  return [
    'user_management',
    '/user_management/users/:user_id/connected_accounts/:slug',
    'DELETE',
  ] as const
}

export function useDeleteUserManagementUsersUserIdConnectedAccountsSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserManagementUsersUserIdConnectedAccountsSlugKey()
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
            (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.user_management.users[':user_id'].connected_accounts[':slug'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementUsersUserIdDataProvidersKey(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['data_providers']['$get']
  >,
) {
  return ['user_management', '/user_management/users/:user_id/data_providers', args] as const
}

export function useGetUserManagementUsersUserIdDataProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['data_providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users)[':user_id']['data_providers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserIdDataProvidersKey(args)
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
                (typeof client.user_management.users)[':user_id']['data_providers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users[':user_id'].data_providers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsersUserIdDataProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['data_providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users)[':user_id']['data_providers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserIdDataProvidersKey(args)
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
                (typeof client.user_management.users)[':user_id']['data_providers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users[':user_id'].data_providers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementUsersUserlandUserIdAuthFactorsKey(
  args: InferRequestType<
    (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
  >,
) {
  return ['user_management', '/user_management/users/:userlandUserId/auth_factors', args] as const
}

export function useGetUserManagementUsersUserlandUserIdAuthFactors<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserlandUserIdAuthFactorsKey(args)
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
                (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users[':userlandUserId'].auth_factors.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementUsersUserlandUserIdAuthFactors<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementUsersUserlandUserIdAuthFactorsKey(args)
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
                (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_management.users[':userlandUserId'].auth_factors.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementUsersUserlandUserIdAuthFactorsKey() {
  return ['user_management', '/user_management/users/:userlandUserId/auth_factors', 'POST'] as const
}

export function usePostUserManagementUsersUserlandUserIdAuthFactors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementUsersUserlandUserIdAuthFactorsKey()
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
            (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$post']
          >
        },
      ) =>
        parseResponse(
          client.user_management.users[':userlandUserId'].auth_factors.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserManagementWaitlistEntriesIdKey() {
  return ['user_management', '/user_management/waitlist_entries/:id', 'DELETE'] as const
}

export function useDeleteUserManagementWaitlistEntriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.waitlist_entries)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserManagementWaitlistEntriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['$delete']>
        },
      ) =>
        parseResponse(client.user_management.waitlist_entries[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementWaitlistEntriesIdApproveKey() {
  return ['user_management', '/user_management/waitlist_entries/:id/approve', 'POST'] as const
}

export function usePostUserManagementWaitlistEntriesIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user_management.waitlist_entries)[':id']['approve']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementWaitlistEntriesIdApproveKey()
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
            (typeof client.user_management.waitlist_entries)[':id']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.user_management.waitlist_entries[':id'].approve.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserManagementWaitlistEntriesIdDenyKey() {
  return ['user_management', '/user_management/waitlist_entries/:id/deny', 'POST'] as const
}

export function usePostUserManagementWaitlistEntriesIdDeny<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user_management.waitlist_entries)[':id']['deny']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['deny']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementWaitlistEntriesIdDenyKey()
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
            (typeof client.user_management.waitlist_entries)[':id']['deny']['$post']
          >
        },
      ) =>
        parseResponse(
          client.user_management.waitlist_entries[':id'].deny.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserManagementWaitlistsKey() {
  return ['user_management', '/user_management/waitlists'] as const
}

export function useGetUserManagementWaitlists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.waitlists.$get>>>
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
        ? getGetUserManagementWaitlistsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.waitlists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.waitlists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementWaitlists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.waitlists.$get>>>
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
        ? getGetUserManagementWaitlistsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_management.waitlists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.waitlists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementWaitlistsIdKey(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['$get']>,
) {
  return ['user_management', '/user_management/waitlists/:id', args] as const
}

export function useGetUserManagementWaitlistsId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementWaitlistsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.waitlists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementWaitlistsId<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementWaitlistsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_management.waitlists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserManagementWaitlistsIdEntriesKey(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>,
) {
  return ['user_management', '/user_management/waitlists/:id/entries', args] as const
}

export function useGetUserManagementWaitlistsIdEntries<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementWaitlistsIdEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.waitlists[':id'].entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserManagementWaitlistsIdEntries<TError = unknown>(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserManagementWaitlistsIdEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_management.waitlists[':id'].entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserManagementWaitlistsIdEntriesKey() {
  return ['user_management', '/user_management/waitlists/:id/entries', 'POST'] as const
}

export function usePostUserManagementWaitlistsIdEntries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserManagementWaitlistsIdEntriesKey()
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
            (typeof client.user_management.waitlists)[':id']['entries']['$post']
          >
        },
      ) => parseResponse(client.user_management.waitlists[':id'].entries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVaultV1KeysDataKeyKey() {
  return ['vault', '/vault/v1/keys/data-key', 'POST'] as const
}

export function usePostVaultV1KeysDataKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vault.v1.keys)['data-key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vault.v1.keys)['data-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultV1KeysDataKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vault.v1.keys)['data-key']['$post']> },
      ) => parseResponse(client.vault.v1.keys['data-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVaultV1KeysDecryptKey() {
  return ['vault', '/vault/v1/keys/decrypt', 'POST'] as const
}

export function usePostVaultV1KeysDecrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.keys.decrypt.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.vault.v1.keys.decrypt.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultV1KeysDecryptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.vault.v1.keys.decrypt.$post> },
      ) => parseResponse(client.vault.v1.keys.decrypt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVaultV1KeysRekeyKey() {
  return ['vault', '/vault/v1/keys/rekey', 'POST'] as const
}

export function usePostVaultV1KeysRekey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.keys.rekey.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.vault.v1.keys.rekey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultV1KeysRekeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vault.v1.keys.rekey.$post> }) =>
        parseResponse(client.vault.v1.keys.rekey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVaultV1KvKey(args: InferRequestType<typeof client.vault.v1.kv.$get>) {
  return ['vault', '/vault/v1/kv', args] as const
}

export function useGetVaultV1Kv<TError = unknown>(
  args: InferRequestType<typeof client.vault.v1.kv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultV1KvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.v1.kv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultV1Kv<TError = unknown>(
  args: InferRequestType<typeof client.vault.v1.kv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultV1KvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.v1.kv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVaultV1KvKey() {
  return ['vault', '/vault/v1/kv', 'POST'] as const
}

export function usePostVaultV1Kv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.vault.v1.kv.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultV1KvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vault.v1.kv.$post> }) =>
        parseResponse(client.vault.v1.kv.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVaultV1KvNameNameKey(
  args: InferRequestType<(typeof client.vault.v1.kv.name)[':name']['$get']>,
) {
  return ['vault', '/vault/v1/kv/name/:name', args] as const
}

export function useGetVaultV1KvNameName<TError = unknown>(
  args: InferRequestType<(typeof client.vault.v1.kv.name)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultV1KvNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.v1.kv.name[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultV1KvNameName<TError = unknown>(
  args: InferRequestType<(typeof client.vault.v1.kv.name)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultV1KvNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.v1.kv.name[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVaultV1KvIdKey(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$get']>,
) {
  return ['vault', '/vault/v1/kv/:id', args] as const
}

export function useGetVaultV1KvId<TError = unknown>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultV1KvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.v1.kv[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultV1KvId<TError = unknown>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultV1KvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.v1.kv[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVaultV1KvIdKey() {
  return ['vault', '/vault/v1/kv/:id', 'PUT'] as const
}

export function usePutVaultV1KvId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vault.v1.kv)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVaultV1KvIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vault.v1.kv)[':id']['$put']> },
      ) => parseResponse(client.vault.v1.kv[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVaultV1KvIdKey() {
  return ['vault', '/vault/v1/kv/:id', 'DELETE'] as const
}

export function useDeleteVaultV1KvId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vault.v1.kv)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVaultV1KvIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vault.v1.kv)[':id']['$delete']> },
      ) => parseResponse(client.vault.v1.kv[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVaultV1KvIdMetadataKey(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>,
) {
  return ['vault', '/vault/v1/kv/:id/metadata', args] as const
}

export function useGetVaultV1KvIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultV1KvIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.v1.kv[':id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultV1KvIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultV1KvIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.v1.kv[':id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVaultV1KvIdVersionsKey(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>,
) {
  return ['vault', '/vault/v1/kv/:id/versions', args] as const
}

export function useGetVaultV1KvIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultV1KvIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.v1.kv[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultV1KvIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultV1KvIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.v1.kv[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhookEndpointsKey(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
) {
  return ['webhook_endpoints', '/webhook_endpoints', args] as const
}

export function useGetWebhookEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhookEndpointsKey() {
  return ['webhook_endpoints', '/webhook_endpoints', 'POST'] as const
}

export function usePostWebhookEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhook_endpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhook_endpoints.$post> }) =>
        parseResponse(client.webhook_endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookEndpointsIdKey(
  args: InferRequestType<(typeof client.webhook_endpoints)[':id']['$get']>,
) {
  return ['webhook_endpoints', '/webhook_endpoints/:id', args] as const
}

export function useGetWebhookEndpointsId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_endpoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookEndpointsId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_endpoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhookEndpointsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhookEndpointsIdKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:id', 'DELETE'] as const
}

export function useDeleteWebhookEndpointsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_endpoints)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhookEndpointsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhook_endpoints)[':id']['$delete']> },
      ) => parseResponse(client.webhook_endpoints[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhookEndpointsIdKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:id', 'PATCH'] as const
}

export function usePatchWebhookEndpointsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_endpoints)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhookEndpointsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhook_endpoints)[':id']['$patch']> },
      ) => parseResponse(client.webhook_endpoints[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWidgetsTokenKey() {
  return ['widgets', '/widgets/token', 'POST'] as const
}

export function usePostWidgetsToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.widgets.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.widgets.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWidgetsTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.widgets.token.$post> }) =>
        parseResponse(client.widgets.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
