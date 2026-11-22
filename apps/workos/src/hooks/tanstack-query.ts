import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function getAgentsBlueprintsQueryKey(
  args: InferRequestType<typeof client.agents.blueprints.$get>,
) {
  return ['agents', '/agents/blueprints', args] as const
}

export function getAgentsBlueprintsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agents.blueprints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsBlueprintsQueryKey>
  >({
    queryKey: getAgentsBlueprintsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.blueprints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentsBlueprints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agents.blueprints.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsBlueprintsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentsBlueprintsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentsBlueprints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agents.blueprints.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsBlueprintsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentsBlueprintsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAgentsBlueprintsMutationKey() {
  return ['agents', '/agents/blueprints', 'POST'] as const
}

export function getPostAgentsBlueprintsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.agents.blueprints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsBlueprintsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agents.blueprints.$post>) {
      return parseResponse(client.agents.blueprints.$post(args, options))
    },
  })
}

export function usePostAgentsBlueprints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.agents.blueprints.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentsBlueprintsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAgentsBlueprintsAgentBlueprintIdQueryKey(
  args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>,
) {
  return ['agents', '/agents/blueprints/:agent_blueprint_id', args] as const
}

export function getAgentsBlueprintsAgentBlueprintIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsBlueprintsAgentBlueprintIdQueryKey>
  >({
    queryKey: getAgentsBlueprintsAgentBlueprintIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.blueprints[':agent_blueprint_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgentsBlueprintsAgentBlueprintId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsBlueprintsAgentBlueprintIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAgentsBlueprintsAgentBlueprintIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentsBlueprintsAgentBlueprintId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsBlueprintsAgentBlueprintIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAgentsBlueprintsAgentBlueprintIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAgentsBlueprintsAgentBlueprintIdMutationKey() {
  return ['agents', '/agents/blueprints/:agent_blueprint_id', 'DELETE'] as const
}

export function getDeleteAgentsBlueprintsAgentBlueprintIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentsBlueprintsAgentBlueprintIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$delete']>,
    ) {
      return parseResponse(client.agents.blueprints[':agent_blueprint_id'].$delete(args, options))
    },
  })
}

export function useDeleteAgentsBlueprintsAgentBlueprintId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAgentsBlueprintsAgentBlueprintIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAgentsBlueprintsAgentBlueprintIdMutationKey() {
  return ['agents', '/agents/blueprints/:agent_blueprint_id', 'PATCH'] as const
}

export function getPatchAgentsBlueprintsAgentBlueprintIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAgentsBlueprintsAgentBlueprintIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$patch']>,
    ) {
      return parseResponse(client.agents.blueprints[':agent_blueprint_id'].$patch(args, options))
    },
  })
}

export function usePatchAgentsBlueprintsAgentBlueprintId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAgentsBlueprintsAgentBlueprintIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAgentsBlueprintsAgentBlueprintIdTokensMutationKey() {
  return ['agents', '/agents/blueprints/:agent_blueprint_id/tokens', 'POST'] as const
}

export function getPostAgentsBlueprintsAgentBlueprintIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsBlueprintsAgentBlueprintIdTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['$post']
      >,
    ) {
      return parseResponse(
        client.agents.blueprints[':agent_blueprint_id'].tokens.$post(args, options),
      )
    },
  })
}

export function usePostAgentsBlueprintsAgentBlueprintIdTokens<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentsBlueprintsAgentBlueprintIdTokensMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAgentsBlueprintsAgentBlueprintIdTokensValidateMutationKey() {
  return ['agents', '/agents/blueprints/:agent_blueprint_id/tokens/validate', 'POST'] as const
}

export function getPostAgentsBlueprintsAgentBlueprintIdTokensValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsBlueprintsAgentBlueprintIdTokensValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.agents.blueprints[':agent_blueprint_id'].tokens.validate.$post(args, options),
      )
    },
  })
}

export function usePostAgentsBlueprintsAgentBlueprintIdTokensValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['validate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentsBlueprintsAgentBlueprintIdTokensValidateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAgentsClaimsAttemptsMutationKey() {
  return ['agents', '/agents/claims/attempts', 'PATCH'] as const
}

export function getPatchAgentsClaimsAttemptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.agents.claims.attempts.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.agents.claims.attempts.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAgentsClaimsAttemptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agents.claims.attempts.$patch>) {
      return parseResponse(client.agents.claims.attempts.$patch(args, options))
    },
  })
}

export function usePatchAgentsClaimsAttempts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agents.claims.attempts.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.agents.claims.attempts.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAgentsClaimsAttemptsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAgentsCredentialsValidateMutationKey() {
  return ['agents', '/agents/credentials/validate', 'POST'] as const
}

export function getPostAgentsCredentialsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.agents.credentials.validate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.agents.credentials.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsCredentialsValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agents.credentials.validate.$post>) {
      return parseResponse(client.agents.credentials.validate.$post(args, options))
    },
  })
}

export function usePostAgentsCredentialsValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.agents.credentials.validate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.agents.credentials.validate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentsCredentialsValidateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAgentsInstancesQueryKey(
  args: InferRequestType<typeof client.agents.instances.$get>,
) {
  return ['agents', '/agents/instances', args] as const
}

export function getAgentsInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agents.instances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsInstancesQueryKey>
  >({
    queryKey: getAgentsInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentsInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agents.instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentsInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentsInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agents.instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentsInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAgentsInstancesAgentInstanceIdQueryKey(
  args: InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$get']>,
) {
  return ['agents', '/agents/instances/:agent_instance_id', args] as const
}

export function getAgentsInstancesAgentInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsInstancesAgentInstanceIdQueryKey>
  >({
    queryKey: getAgentsInstancesAgentInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.instances[':agent_instance_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgentsInstancesAgentInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsInstancesAgentInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAgentsInstancesAgentInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentsInstancesAgentInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsInstancesAgentInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAgentsInstancesAgentInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAgentsInstancesAgentInstanceIdMutationKey() {
  return ['agents', '/agents/instances/:agent_instance_id', 'DELETE'] as const
}

export function getDeleteAgentsInstancesAgentInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentsInstancesAgentInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$delete']>,
    ) {
      return parseResponse(client.agents.instances[':agent_instance_id'].$delete(args, options))
    },
  })
}

export function useDeleteAgentsInstancesAgentInstanceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAgentsInstancesAgentInstanceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAgentsRegistrationsIdQueryKey(
  args: InferRequestType<(typeof client.agents.registrations)[':id']['$get']>,
) {
  return ['agents', '/agents/registrations/:id', args] as const
}

export function getAgentsRegistrationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.registrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsRegistrationsIdQueryKey>
  >({
    queryKey: getAgentsRegistrationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.registrations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgentsRegistrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.registrations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsRegistrationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAgentsRegistrationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentsRegistrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.registrations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsRegistrationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAgentsRegistrationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAgentsRegistrationsIdRevokeMutationKey() {
  return ['agents', '/agents/registrations/:id/revoke', 'POST'] as const
}

export function getPostAgentsRegistrationsIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.registrations)[':id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agents.registrations)[':id']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsRegistrationsIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agents.registrations)[':id']['revoke']['$post']>,
    ) {
      return parseResponse(client.agents.registrations[':id'].revoke.$post(args, options))
    },
  })
}

export function usePostAgentsRegistrationsIdRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agents.registrations)[':id']['revoke']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.agents.registrations)[':id']['revoke']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentsRegistrationsIdRevokeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAgentsSessionsQueryKey(
  args: InferRequestType<typeof client.agents.sessions.$get>,
) {
  return ['agents', '/agents/sessions', args] as const
}

export function getAgentsSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agents.sessions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsQueryKey>
  >({
    queryKey: getAgentsSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentsSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agents.sessions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentsSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentsSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agents.sessions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentsSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAgentsSessionsAgentInstanceSessionIdQueryKey(
  args: InferRequestType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>,
) {
  return ['agents', '/agents/sessions/:agent_instance_session_id', args] as const
}

export function getAgentsSessionsAgentInstanceSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsAgentInstanceSessionIdQueryKey>
  >({
    queryKey: getAgentsSessionsAgentInstanceSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.sessions[':agent_instance_session_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgentsSessionsAgentInstanceSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsSessionsAgentInstanceSessionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAgentsSessionsAgentInstanceSessionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentsSessionsAgentInstanceSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsSessionsAgentInstanceSessionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAgentsSessionsAgentInstanceSessionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAgentsSessionsAgentInstanceSessionIdRevokeMutationKey() {
  return ['agents', '/agents/sessions/:agent_instance_session_id/revoke', 'POST'] as const
}

export function getPostAgentsSessionsAgentInstanceSessionIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.agents.sessions)[':agent_instance_session_id']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsSessionsAgentInstanceSessionIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agents.sessions)[':agent_instance_session_id']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.agents.sessions[':agent_instance_session_id'].revoke.$post(args, options),
      )
    },
  })
}

export function usePostAgentsSessionsAgentInstanceSessionIdRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.agents.sessions)[':agent_instance_session_id']['revoke']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentsSessionsAgentInstanceSessionIdRevokeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiKeysValidationsMutationKey() {
  return ['api_keys', '/api_keys/validations', 'POST'] as const
}

export function getPostApiKeysValidationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.validations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api_keys.validations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysValidationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api_keys.validations.$post>) {
      return parseResponse(client.api_keys.validations.$post(args, options))
    },
  })
}

export function usePostApiKeysValidations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.validations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api_keys.validations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiKeysValidationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiKeysIdMutationKey() {
  return ['api_keys', '/api_keys/:id', 'DELETE'] as const
}

export function getDeleteApiKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api_keys)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_keys)[':id']['$delete']>) {
      return parseResponse(client.api_keys[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api_keys)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiKeysIdExpireMutationKey() {
  return ['api_keys', '/api_keys/:id/expire', 'POST'] as const
}

export function getPostApiKeysIdExpireMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api_keys)[':id']['expire']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api_keys)[':id']['expire']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysIdExpireMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_keys)[':id']['expire']['$post']>) {
      return parseResponse(client.api_keys[':id'].expire.$post(args, options))
    },
  })
}

export function usePostApiKeysIdExpire<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api_keys)[':id']['expire']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api_keys)[':id']['expire']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiKeysIdExpireMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuditLogsActionsQueryKey(
  args: InferRequestType<typeof client.audit_logs.actions.$get>,
) {
  return ['audit_logs', '/audit_logs/actions', args] as const
}

export function getAuditLogsActionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.audit_logs.actions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuditLogsActionsQueryKey>
  >({
    queryKey: getAuditLogsActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit_logs.actions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuditLogsActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.audit_logs.actions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditLogsActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuditLogsActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuditLogsActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.audit_logs.actions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditLogsActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuditLogsActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAuditLogsActionsActionNameSchemasQueryKey(
  args: InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>,
) {
  return ['audit_logs', '/audit_logs/actions/:actionName/schemas', args] as const
}

export function getAuditLogsActionsActionNameSchemasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditLogsActionsActionNameSchemasQueryKey>
  >({
    queryKey: getAuditLogsActionsActionNameSchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit_logs.actions[':actionName'].schemas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuditLogsActionsActionNameSchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditLogsActionsActionNameSchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuditLogsActionsActionNameSchemasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuditLogsActionsActionNameSchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditLogsActionsActionNameSchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuditLogsActionsActionNameSchemasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAuditLogsActionsActionNameSchemasMutationKey() {
  return ['audit_logs', '/audit_logs/actions/:actionName/schemas', 'POST'] as const
}

export function getPostAuditLogsActionsActionNameSchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditLogsActionsActionNameSchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$post']>,
    ) {
      return parseResponse(client.audit_logs.actions[':actionName'].schemas.$post(args, options))
    },
  })
}

export function usePostAuditLogsActionsActionNameSchemas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditLogsActionsActionNameSchemasMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuditLogsEventsMutationKey() {
  return ['audit_logs', '/audit_logs/events', 'POST'] as const
}

export function getPostAuditLogsEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.events.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.audit_logs.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditLogsEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit_logs.events.$post>) {
      return parseResponse(client.audit_logs.events.$post(args, options))
    },
  })
}

export function usePostAuditLogsEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.events.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.audit_logs.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditLogsEventsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuditLogsExportsMutationKey() {
  return ['audit_logs', '/audit_logs/exports', 'POST'] as const
}

export function getPostAuditLogsExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.exports.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.audit_logs.exports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditLogsExportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit_logs.exports.$post>) {
      return parseResponse(client.audit_logs.exports.$post(args, options))
    },
  })
}

export function usePostAuditLogsExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.exports.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.audit_logs.exports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditLogsExportsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuditLogsExportsAuditLogExportIdQueryKey(
  args: InferRequestType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>,
) {
  return ['audit_logs', '/audit_logs/exports/:auditLogExportId', args] as const
}

export function getAuditLogsExportsAuditLogExportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditLogsExportsAuditLogExportIdQueryKey>
  >({
    queryKey: getAuditLogsExportsAuditLogExportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit_logs.exports[':auditLogExportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuditLogsExportsAuditLogExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditLogsExportsAuditLogExportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuditLogsExportsAuditLogExportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuditLogsExportsAuditLogExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditLogsExportsAuditLogExportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuditLogsExportsAuditLogExportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAuthChallengesIdVerifyMutationKey() {
  return ['auth', '/auth/challenges/:id/verify', 'POST'] as const
}

export function getPostAuthChallengesIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.challenges)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.challenges)[':id']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthChallengesIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.challenges)[':id']['verify']['$post']>,
    ) {
      return parseResponse(client.auth.challenges[':id'].verify.$post(args, options))
    },
  })
}

export function usePostAuthChallengesIdVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.challenges)[':id']['verify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.challenges)[':id']['verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthChallengesIdVerifyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthFactorsEnrollMutationKey() {
  return ['auth', '/auth/factors/enroll', 'POST'] as const
}

export function getPostAuthFactorsEnrollMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.factors.enroll.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.factors.enroll.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthFactorsEnrollMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.factors.enroll.$post>) {
      return parseResponse(client.auth.factors.enroll.$post(args, options))
    },
  })
}

export function usePostAuthFactorsEnroll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.factors.enroll.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.factors.enroll.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthFactorsEnrollMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthFactorsIdQueryKey(
  args: InferRequestType<(typeof client.auth.factors)[':id']['$get']>,
) {
  return ['auth', '/auth/factors/:id', args] as const
}

export function getAuthFactorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth.factors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthFactorsIdQueryKey>
  >({
    queryKey: getAuthFactorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.factors[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthFactorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth.factors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthFactorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthFactorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuthFactorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth.factors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthFactorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthFactorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAuthFactorsIdMutationKey() {
  return ['auth', '/auth/factors/:id', 'DELETE'] as const
}

export function getDeleteAuthFactorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.auth.factors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthFactorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth.factors)[':id']['$delete']>) {
      return parseResponse(client.auth.factors[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAuthFactorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.factors)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.auth.factors)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthFactorsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthFactorsIdChallengeMutationKey() {
  return ['auth', '/auth/factors/:id/challenge', 'POST'] as const
}

export function getPostAuthFactorsIdChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.factors)[':id']['challenge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.factors)[':id']['challenge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthFactorsIdChallengeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.factors)[':id']['challenge']['$post']>,
    ) {
      return parseResponse(client.auth.factors[':id'].challenge.$post(args, options))
    },
  })
}

export function usePostAuthFactorsIdChallenge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.factors)[':id']['challenge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.factors)[':id']['challenge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthFactorsIdChallengeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthkitOauth2CompleteMutationKey() {
  return ['authkit', '/authkit/oauth2/complete', 'POST'] as const
}

export function getPostAuthkitOauth2CompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authkit.oauth2.complete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authkit.oauth2.complete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthkitOauth2CompleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authkit.oauth2.complete.$post>) {
      return parseResponse(client.authkit.oauth2.complete.$post(args, options))
    },
  })
}

export function usePostAuthkitOauth2Complete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authkit.oauth2.complete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authkit.oauth2.complete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthkitOauth2CompleteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationGroupsGroupIdRoleAssignmentsQueryKey(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
  >,
) {
  return ['authorization', '/authorization/groups/:group_id/role_assignments', args] as const
}

export function getAuthorizationGroupsGroupIdRoleAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.authorization.groups)[':group_id']['role_assignments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAuthorizationGroupsGroupIdRoleAssignmentsQueryKey>
  >({
    queryKey: getAuthorizationGroupsGroupIdRoleAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.groups[':group_id'].role_assignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationGroupsGroupIdRoleAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.authorization.groups)[':group_id']['role_assignments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationGroupsGroupIdRoleAssignmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationGroupsGroupIdRoleAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationGroupsGroupIdRoleAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.authorization.groups)[':group_id']['role_assignments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationGroupsGroupIdRoleAssignmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationGroupsGroupIdRoleAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAuthorizationGroupsGroupIdRoleAssignmentsMutationKey() {
  return ['authorization', '/authorization/groups/:group_id/role_assignments', 'PUT'] as const
}

export function getPutAuthorizationGroupsGroupIdRoleAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.authorization.groups)[':group_id']['role_assignments']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthorizationGroupsGroupIdRoleAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.groups)[':group_id']['role_assignments']['$put']
      >,
    ) {
      return parseResponse(
        client.authorization.groups[':group_id'].role_assignments.$put(args, options),
      )
    },
  })
}

export function usePutAuthorizationGroupsGroupIdRoleAssignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.groups)[':group_id']['role_assignments']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuthorizationGroupsGroupIdRoleAssignmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthorizationGroupsGroupIdRoleAssignmentsMutationKey() {
  return ['authorization', '/authorization/groups/:group_id/role_assignments', 'POST'] as const
}

export function getPostAuthorizationGroupsGroupIdRoleAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.groups)[':group_id']['role_assignments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationGroupsGroupIdRoleAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.groups)[':group_id']['role_assignments']['$post']
      >,
    ) {
      return parseResponse(
        client.authorization.groups[':group_id'].role_assignments.$post(args, options),
      )
    },
  })
}

export function usePostAuthorizationGroupsGroupIdRoleAssignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.groups)[':group_id']['role_assignments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthorizationGroupsGroupIdRoleAssignmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthorizationGroupsGroupIdRoleAssignmentsMutationKey() {
  return ['authorization', '/authorization/groups/:group_id/role_assignments', 'DELETE'] as const
}

export function getDeleteAuthorizationGroupsGroupIdRoleAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.groups)[':group_id']['role_assignments']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthorizationGroupsGroupIdRoleAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.groups)[':group_id']['role_assignments']['$delete']
      >,
    ) {
      return parseResponse(
        client.authorization.groups[':group_id'].role_assignments.$delete(args, options),
      )
    },
  })
}

export function useDeleteAuthorizationGroupsGroupIdRoleAssignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.groups)[':group_id']['role_assignments']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthorizationGroupsGroupIdRoleAssignmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAuthorizationGroupsGroupIdRoleAssignmentsMutationKey() {
  return ['authorization', '/authorization/groups/:group_id/role_assignments', 'PATCH'] as const
}

export function getPatchAuthorizationGroupsGroupIdRoleAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.groups)[':group_id']['role_assignments']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthorizationGroupsGroupIdRoleAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.groups)[':group_id']['role_assignments']['$patch']
      >,
    ) {
      return parseResponse(
        client.authorization.groups[':group_id'].role_assignments.$patch(args, options),
      )
    },
  })
}

export function usePatchAuthorizationGroupsGroupIdRoleAssignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.groups)[':group_id']['role_assignments']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthorizationGroupsGroupIdRoleAssignmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryKey(
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

export function getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryKey>
  >({
    queryKey: getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.groups[':group_id'].role_assignments[':role_assignment_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdMutationKey() {
  return [
    'authorization',
    '/authorization/groups/:group_id/role_assignments/:role_assignment_id',
    'DELETE',
  ] as const
}

export function getDeleteAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.authorization.groups[':group_id'].role_assignments[':role_assignment_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdCheckMutationKey() {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/check',
    'POST',
  ] as const
}

export function getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['check']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organization_memberships)[':organization_membership_id']['check']['$post']
      >,
    ) {
      return parseResponse(
        client.authorization.organization_memberships[':organization_membership_id'].check.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAuthorizationOrganizationMembershipsOrganizationMembershipIdCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organization_memberships)[':organization_membership_id']['check']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdCheckMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryKey(
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

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryKey
    >
  >({
    queryKey:
      getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.organization_memberships[':organization_membership_id'].resources.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useAuthorizationOrganizationMembershipsOrganizationMembershipIdResources<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationOrganizationMembershipsOrganizationMembershipIdResources<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryKey(
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

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryKey
    >
  >({
    queryKey:
      getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.organization_memberships[':organization_membership_id'].resources[
          ':resource_id'
        ].permissions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryKey(
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

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryKey
    >
  >({
    queryKey:
      getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.organization_memberships[':organization_membership_id'].resources[
          ':resource_type_slug'
        ][':external_id'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryKey(
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

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryKey
    >
  >({
    queryKey:
      getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.organization_memberships[
          ':organization_membership_id'
        ].role_assignments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationKey() {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/role_assignments',
    'POST',
  ] as const
}

export function getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$post']
      >,
    ) {
      return parseResponse(
        client.authorization.organization_memberships[
          ':organization_membership_id'
        ].role_assignments.$post(args, options),
      )
    },
  })
}

export function usePostAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationKey() {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/role_assignments',
    'DELETE',
  ] as const
}

export function getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$delete']
      >,
    ) {
      return parseResponse(
        client.authorization.organization_memberships[
          ':organization_membership_id'
        ].role_assignments.$delete(args, options),
      )
    },
  })
}

export function useDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationKey() {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/role_assignments',
    'PATCH',
  ] as const
}

export function getPatchAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$patch']
      >,
    ) {
      return parseResponse(
        client.authorization.organization_memberships[
          ':organization_membership_id'
        ].role_assignments.$patch(args, options),
      )
    },
  })
}

export function usePatchAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoleAssignmentIdMutationKey() {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/role_assignments/:role_assignment_id',
    'DELETE',
  ] as const
}

export function getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoleAssignmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments'][':role_assignment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoleAssignmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments'][':role_assignment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.authorization.organization_memberships[
          ':organization_membership_id'
        ].role_assignments[':role_assignment_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoleAssignmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments'][':role_assignment_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoleAssignmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationsOrganizationIdRolesQueryKey(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
  >,
) {
  return ['authorization', '/authorization/organizations/:organizationId/roles', args] as const
}

export function getAuthorizationOrganizationsOrganizationIdRolesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAuthorizationOrganizationsOrganizationIdRolesQueryKey>
  >({
    queryKey: getAuthorizationOrganizationsOrganizationIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.organizations[':organizationId'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationOrganizationsOrganizationIdRoles<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationOrganizationsOrganizationIdRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationOrganizationsOrganizationIdRolesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationOrganizationsOrganizationIdRoles<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationOrganizationsOrganizationIdRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationOrganizationsOrganizationIdRolesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAuthorizationOrganizationsOrganizationIdRolesMutationKey() {
  return ['authorization', '/authorization/organizations/:organizationId/roles', 'POST'] as const
}

export function getPostAuthorizationOrganizationsOrganizationIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationOrganizationsOrganizationIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organizations)[':organizationId']['roles']['$post']
      >,
    ) {
      return parseResponse(
        client.authorization.organizations[':organizationId'].roles.$post(args, options),
      )
    },
  })
}

export function usePostAuthorizationOrganizationsOrganizationIdRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organizations)[':organizationId']['roles']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthorizationOrganizationsOrganizationIdRolesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationsOrganizationIdRolesSlugQueryKey(
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

export function getAuthorizationOrganizationsOrganizationIdRolesSlugQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAuthorizationOrganizationsOrganizationIdRolesSlugQueryKey>
  >({
    queryKey: getAuthorizationOrganizationsOrganizationIdRolesSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.organizations[':organizationId'].roles[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationOrganizationsOrganizationIdRolesSlug<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationOrganizationsOrganizationIdRolesSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationOrganizationsOrganizationIdRolesSlugQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationOrganizationsOrganizationIdRolesSlug<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationOrganizationsOrganizationIdRolesSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationOrganizationsOrganizationIdRolesSlugQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugMutationKey() {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug',
    'DELETE',
  ] as const
}

export function getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$delete']
      >,
    ) {
      return parseResponse(
        client.authorization.organizations[':organizationId'].roles[':slug'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAuthorizationOrganizationsOrganizationIdRolesSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAuthorizationOrganizationsOrganizationIdRolesSlugMutationKey() {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug',
    'PATCH',
  ] as const
}

export function getPatchAuthorizationOrganizationsOrganizationIdRolesSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthorizationOrganizationsOrganizationIdRolesSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$patch']
      >,
    ) {
      return parseResponse(
        client.authorization.organizations[':organizationId'].roles[':slug'].$patch(args, options),
      )
    },
  })
}

export function usePatchAuthorizationOrganizationsOrganizationIdRolesSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthorizationOrganizationsOrganizationIdRolesSlugMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsMutationKey() {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug/permissions',
    'PUT',
  ] as const
}

export function getPutAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client.authorization.organizations[':organizationId'].roles[':slug'].permissions.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAuthorizationOrganizationsOrganizationIdRolesSlugPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsMutationKey() {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug/permissions',
    'POST',
  ] as const
}

export function getPostAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$post']
      >,
    ) {
      return parseResponse(
        client.authorization.organizations[':organizationId'].roles[':slug'].permissions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAuthorizationOrganizationsOrganizationIdRolesSlugPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsPermissionSlugMutationKey() {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug/permissions/:permissionSlug',
    'DELETE',
  ] as const
}

export function getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsPermissionSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions'][':permissionSlug']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsPermissionSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions'][':permissionSlug']['$delete']
      >,
    ) {
      return parseResponse(
        client.authorization.organizations[':organizationId'].roles[':slug'].permissions[
          ':permissionSlug'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsPermissionSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions'][':permissionSlug']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsPermissionSlugMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryKey(
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

export function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryKey
    >
  >({
    queryKey:
      getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
          ':external_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdMutationKey() {
  return [
    'authorization',
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id',
    'DELETE',
  ] as const
}

export function getDeleteAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
          ':external_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdMutationKey() {
  return [
    'authorization',
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id',
    'PATCH',
  ] as const
}

export function getPatchAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
          ':external_id'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryKey(
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

export function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryKey
    >
  >({
    queryKey:
      getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
          ':external_id'
        ].organization_memberships.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMemberships<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMemberships<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryKey(
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

export function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryKey
    >
  >({
    queryKey:
      getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
          ':external_id'
        ].role_assignments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAuthorizationPermissionsQueryKey(
  args: InferRequestType<typeof client.authorization.permissions.$get>,
) {
  return ['authorization', '/authorization/permissions', args] as const
}

export function getAuthorizationPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authorization.permissions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationPermissionsQueryKey>
  >({
    queryKey: getAuthorizationPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authorization.permissions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authorization.permissions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAuthorizationPermissionsMutationKey() {
  return ['authorization', '/authorization/permissions', 'POST'] as const
}

export function getPostAuthorizationPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authorization.permissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationPermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorization.permissions.$post>) {
      return parseResponse(client.authorization.permissions.$post(args, options))
    },
  })
}

export function usePostAuthorizationPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authorization.permissions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthorizationPermissionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationPermissionsSlugQueryKey(
  args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$get']>,
) {
  return ['authorization', '/authorization/permissions/:slug', args] as const
}

export function getAuthorizationPermissionsSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationPermissionsSlugQueryKey>
  >({
    queryKey: getAuthorizationPermissionsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.permissions[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationPermissionsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationPermissionsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationPermissionsSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationPermissionsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationPermissionsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationPermissionsSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAuthorizationPermissionsSlugMutationKey() {
  return ['authorization', '/authorization/permissions/:slug', 'DELETE'] as const
}

export function getDeleteAuthorizationPermissionsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.authorization.permissions)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthorizationPermissionsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$delete']>,
    ) {
      return parseResponse(client.authorization.permissions[':slug'].$delete(args, options))
    },
  })
}

export function useDeleteAuthorizationPermissionsSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.authorization.permissions)[':slug']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthorizationPermissionsSlugMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAuthorizationPermissionsSlugMutationKey() {
  return ['authorization', '/authorization/permissions/:slug', 'PATCH'] as const
}

export function getPatchAuthorizationPermissionsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authorization.permissions)[':slug']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthorizationPermissionsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$patch']>,
    ) {
      return parseResponse(client.authorization.permissions[':slug'].$patch(args, options))
    },
  })
}

export function usePatchAuthorizationPermissionsSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.authorization.permissions)[':slug']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthorizationPermissionsSlugMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationResourcesQueryKey(
  args: InferRequestType<typeof client.authorization.resources.$get>,
) {
  return ['authorization', '/authorization/resources', args] as const
}

export function getAuthorizationResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authorization.resources.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationResourcesQueryKey>
  >({
    queryKey: getAuthorizationResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authorization.resources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authorization.resources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAuthorizationResourcesMutationKey() {
  return ['authorization', '/authorization/resources', 'POST'] as const
}

export function getPostAuthorizationResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authorization.resources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorization.resources.$post>) {
      return parseResponse(client.authorization.resources.$post(args, options))
    },
  })
}

export function usePostAuthorizationResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authorization.resources.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthorizationResourcesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationResourcesResourceIdQueryKey(
  args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$get']>,
) {
  return ['authorization', '/authorization/resources/:resource_id', args] as const
}

export function getAuthorizationResourcesResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationResourcesResourceIdQueryKey>
  >({
    queryKey: getAuthorizationResourcesResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.resources[':resource_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationResourcesResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationResourcesResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationResourcesResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationResourcesResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationResourcesResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationResourcesResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAuthorizationResourcesResourceIdMutationKey() {
  return ['authorization', '/authorization/resources/:resource_id', 'DELETE'] as const
}

export function getDeleteAuthorizationResourcesResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.authorization.resources)[':resource_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthorizationResourcesResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$delete']>,
    ) {
      return parseResponse(client.authorization.resources[':resource_id'].$delete(args, options))
    },
  })
}

export function useDeleteAuthorizationResourcesResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.authorization.resources)[':resource_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.authorization.resources)[':resource_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthorizationResourcesResourceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAuthorizationResourcesResourceIdMutationKey() {
  return ['authorization', '/authorization/resources/:resource_id', 'PATCH'] as const
}

export function getPatchAuthorizationResourcesResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authorization.resources)[':resource_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthorizationResourcesResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$patch']>,
    ) {
      return parseResponse(client.authorization.resources[':resource_id'].$patch(args, options))
    },
  })
}

export function usePatchAuthorizationResourcesResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.authorization.resources)[':resource_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthorizationResourcesResourceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationResourcesResourceIdOrganizationMembershipsQueryKey(
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

export function getAuthorizationResourcesResourceIdOrganizationMembershipsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAuthorizationResourcesResourceIdOrganizationMembershipsQueryKey>
  >({
    queryKey: getAuthorizationResourcesResourceIdOrganizationMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.resources[':resource_id'].organization_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationResourcesResourceIdOrganizationMemberships<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationResourcesResourceIdOrganizationMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationResourcesResourceIdOrganizationMembershipsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationResourcesResourceIdOrganizationMemberships<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationResourcesResourceIdOrganizationMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationResourcesResourceIdOrganizationMembershipsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAuthorizationResourcesResourceIdRoleAssignmentsQueryKey(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
  >,
) {
  return ['authorization', '/authorization/resources/:resource_id/role_assignments', args] as const
}

export function getAuthorizationResourcesResourceIdRoleAssignmentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAuthorizationResourcesResourceIdRoleAssignmentsQueryKey>
  >({
    queryKey: getAuthorizationResourcesResourceIdRoleAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.resources[':resource_id'].role_assignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationResourcesResourceIdRoleAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationResourcesResourceIdRoleAssignmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationResourcesResourceIdRoleAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationResourcesResourceIdRoleAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAuthorizationResourcesResourceIdRoleAssignmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationResourcesResourceIdRoleAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAuthorizationRolesQueryKey() {
  return ['authorization', '/authorization/roles'] as const
}

export function getAuthorizationRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationRolesQueryKey>
  >({
    queryKey: getAuthorizationRolesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.roles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthorizationRolesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuthorizationRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthorizationRolesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAuthorizationRolesMutationKey() {
  return ['authorization', '/authorization/roles', 'POST'] as const
}

export function getPostAuthorizationRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.authorization.roles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationRolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorization.roles.$post>) {
      return parseResponse(client.authorization.roles.$post(args, options))
    },
  })
}

export function usePostAuthorizationRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authorization.roles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthorizationRolesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizationRolesSlugQueryKey(
  args: InferRequestType<(typeof client.authorization.roles)[':slug']['$get']>,
) {
  return ['authorization', '/authorization/roles/:slug', args] as const
}

export function getAuthorizationRolesSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authorization.roles)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationRolesSlugQueryKey>
  >({
    queryKey: getAuthorizationRolesSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorization.roles[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthorizationRolesSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authorization.roles)[':slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationRolesSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthorizationRolesSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthorizationRolesSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authorization.roles)[':slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationRolesSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthorizationRolesSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchAuthorizationRolesSlugMutationKey() {
  return ['authorization', '/authorization/roles/:slug', 'PATCH'] as const
}

export function getPatchAuthorizationRolesSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authorization.roles)[':slug']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthorizationRolesSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authorization.roles)[':slug']['$patch']>,
    ) {
      return parseResponse(client.authorization.roles[':slug'].$patch(args, options))
    },
  })
}

export function usePatchAuthorizationRolesSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.authorization.roles)[':slug']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthorizationRolesSlugMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAuthorizationRolesSlugPermissionsMutationKey() {
  return ['authorization', '/authorization/roles/:slug/permissions', 'PUT'] as const
}

export function getPutAuthorizationRolesSlugPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['permissions']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authorization.roles)[':slug']['permissions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthorizationRolesSlugPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authorization.roles)[':slug']['permissions']['$put']>,
    ) {
      return parseResponse(client.authorization.roles[':slug'].permissions.$put(args, options))
    },
  })
}

export function usePutAuthorizationRolesSlugPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.authorization.roles)[':slug']['permissions']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.authorization.roles)[':slug']['permissions']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuthorizationRolesSlugPermissionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthorizationRolesSlugPermissionsMutationKey() {
  return ['authorization', '/authorization/roles/:slug/permissions', 'POST'] as const
}

export function getPostAuthorizationRolesSlugPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['permissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authorization.roles)[':slug']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationRolesSlugPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authorization.roles)[':slug']['permissions']['$post']>,
    ) {
      return parseResponse(client.authorization.roles[':slug'].permissions.$post(args, options))
    },
  })
}

export function usePostAuthorizationRolesSlugPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.authorization.roles)[':slug']['permissions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.authorization.roles)[':slug']['permissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthorizationRolesSlugPermissionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostClientTokenMutationKey() {
  return ['client', '/client/token', 'POST'] as const
}

export function getPostClientTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.client.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClientTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.client.token.$post>) {
      return parseResponse(client.client.token.$post(args, options))
    },
  })
}

export function usePostClientToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.client.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClientTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectApplicationsQueryKey(
  args: InferRequestType<typeof client.connect.applications.$get>,
) {
  return ['connect', '/connect/applications', args] as const
}

export function getConnectApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connect.applications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConnectApplicationsQueryKey>
  >({
    queryKey: getConnectApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connect.applications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConnectApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.connect.applications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConnectApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConnectApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.connect.applications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConnectApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostConnectApplicationsMutationKey() {
  return ['connect', '/connect/applications', 'POST'] as const
}

export function getPostConnectApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.connect.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connect.applications.$post>) {
      return parseResponse(client.connect.applications.$post(args, options))
    },
  })
}

export function usePostConnectApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.connect.applications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConnectApplicationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectApplicationsIdQueryKey(
  args: InferRequestType<(typeof client.connect.applications)[':id']['$get']>,
) {
  return ['connect', '/connect/applications/:id', args] as const
}

export function getConnectApplicationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connect.applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectApplicationsIdQueryKey>
  >({
    queryKey: getConnectApplicationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connect.applications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connect.applications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectApplicationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConnectApplicationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConnectApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connect.applications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectApplicationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConnectApplicationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutConnectApplicationsIdMutationKey() {
  return ['connect', '/connect/applications/:id', 'PUT'] as const
}

export function getPutConnectApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connect.applications)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connect.applications)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectApplicationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.connect.applications)[':id']['$put']>) {
      return parseResponse(client.connect.applications[':id'].$put(args, options))
    },
  })
}

export function usePutConnectApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connect.applications)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connect.applications)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConnectApplicationsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteConnectApplicationsIdMutationKey() {
  return ['connect', '/connect/applications/:id', 'DELETE'] as const
}

export function getDeleteConnectApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connect.applications)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.connect.applications)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectApplicationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connect.applications)[':id']['$delete']>,
    ) {
      return parseResponse(client.connect.applications[':id'].$delete(args, options))
    },
  })
}

export function useDeleteConnectApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connect.applications)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.connect.applications)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConnectApplicationsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectApplicationsIdClientSecretsQueryKey(
  args: InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>,
) {
  return ['connect', '/connect/applications/:id/client_secrets', args] as const
}

export function getConnectApplicationsIdClientSecretsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectApplicationsIdClientSecretsQueryKey>
  >({
    queryKey: getConnectApplicationsIdClientSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connect.applications[':id'].client_secrets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectApplicationsIdClientSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectApplicationsIdClientSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConnectApplicationsIdClientSecretsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConnectApplicationsIdClientSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectApplicationsIdClientSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConnectApplicationsIdClientSecretsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostConnectApplicationsIdClientSecretsMutationKey() {
  return ['connect', '/connect/applications/:id/client_secrets', 'POST'] as const
}

export function getPostConnectApplicationsIdClientSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectApplicationsIdClientSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connect.applications)[':id']['client_secrets']['$post']
      >,
    ) {
      return parseResponse(client.connect.applications[':id'].client_secrets.$post(args, options))
    },
  })
}

export function usePostConnectApplicationsIdClientSecrets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConnectApplicationsIdClientSecretsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteConnectClientSecretsIdMutationKey() {
  return ['connect', '/connect/client_secrets/:id', 'DELETE'] as const
}

export function getDeleteConnectClientSecretsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connect.client_secrets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.connect.client_secrets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectClientSecretsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connect.client_secrets)[':id']['$delete']>,
    ) {
      return parseResponse(client.connect.client_secrets[':id'].$delete(args, options))
    },
  })
}

export function useDeleteConnectClientSecretsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connect.client_secrets)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.connect.client_secrets)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConnectClientSecretsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectionsQueryKey(args: InferRequestType<typeof client.connections.$get>) {
  return ['connections', '/connections', args] as const
}

export function getConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >({
    queryKey: getConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostConnectionsMutationKey() {
  return ['connections', '/connections', 'POST'] as const
}

export function getPostConnectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>>,
    TError,
    InferRequestType<typeof client.connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connections.$post>) {
      return parseResponse(client.connections.$post(args, options))
    },
  })
}

export function usePostConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.connections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConnectionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectionsConnectionIdSamlIdpSigningCertsQueryKey(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
  >,
) {
  return ['connections', '/connections/:connectionId/saml_idp_signing_certs', args] as const
}

export function getConnectionsConnectionIdSamlIdpSigningCertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdSamlIdpSigningCertsQueryKey>
  >({
    queryKey: getConnectionsConnectionIdSamlIdpSigningCertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connectionId'].saml_idp_signing_certs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectionsConnectionIdSamlIdpSigningCerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdSamlIdpSigningCertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConnectionsConnectionIdSamlIdpSigningCertsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConnectionsConnectionIdSamlIdpSigningCerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdSamlIdpSigningCertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConnectionsConnectionIdSamlIdpSigningCertsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostConnectionsConnectionIdSamlIdpSigningCertsMutationKey() {
  return ['connections', '/connections/:connectionId/saml_idp_signing_certs', 'POST'] as const
}

export function getPostConnectionsConnectionIdSamlIdpSigningCertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsConnectionIdSamlIdpSigningCertsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$post']
      >,
    ) {
      return parseResponse(
        client.connections[':connectionId'].saml_idp_signing_certs.$post(args, options),
      )
    },
  })
}

export function usePostConnectionsConnectionIdSamlIdpSigningCerts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConnectionsConnectionIdSamlIdpSigningCertsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteConnectionsConnectionIdSamlIdpSigningCertsCertificateIdMutationKey() {
  return [
    'connections',
    '/connections/:connectionId/saml_idp_signing_certs/:certificateId',
    'DELETE',
  ] as const
}

export function getDeleteConnectionsConnectionIdSamlIdpSigningCertsCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_idp_signing_certs'][':certificateId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsConnectionIdSamlIdpSigningCertsCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':connectionId']['saml_idp_signing_certs'][':certificateId']['$delete']
      >,
    ) {
      return parseResponse(
        client.connections[':connectionId'].saml_idp_signing_certs[':certificateId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteConnectionsConnectionIdSamlIdpSigningCertsCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.connections)[':connectionId']['saml_idp_signing_certs'][':certificateId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteConnectionsConnectionIdSamlIdpSigningCertsCertificateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectionsConnectionIdSamlSpEncryptionCertsQueryKey(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
  >,
) {
  return ['connections', '/connections/:connectionId/saml_sp_encryption_certs', args] as const
}

export function getConnectionsConnectionIdSamlSpEncryptionCertsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdSamlSpEncryptionCertsQueryKey>
  >({
    queryKey: getConnectionsConnectionIdSamlSpEncryptionCertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connectionId'].saml_sp_encryption_certs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectionsConnectionIdSamlSpEncryptionCerts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdSamlSpEncryptionCertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConnectionsConnectionIdSamlSpEncryptionCertsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConnectionsConnectionIdSamlSpEncryptionCerts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdSamlSpEncryptionCertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConnectionsConnectionIdSamlSpEncryptionCertsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostConnectionsConnectionIdSamlSpEncryptionCertsMutationKey() {
  return ['connections', '/connections/:connectionId/saml_sp_encryption_certs', 'POST'] as const
}

export function getPostConnectionsConnectionIdSamlSpEncryptionCertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsConnectionIdSamlSpEncryptionCertsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$post']
      >,
    ) {
      return parseResponse(
        client.connections[':connectionId'].saml_sp_encryption_certs.$post(args, options),
      )
    },
  })
}

export function usePostConnectionsConnectionIdSamlSpEncryptionCerts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConnectionsConnectionIdSamlSpEncryptionCertsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteConnectionsConnectionIdSamlSpEncryptionCertsCertificateIdMutationKey() {
  return [
    'connections',
    '/connections/:connectionId/saml_sp_encryption_certs/:certificateId',
    'DELETE',
  ] as const
}

export function getDeleteConnectionsConnectionIdSamlSpEncryptionCertsCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_sp_encryption_certs'][':certificateId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsConnectionIdSamlSpEncryptionCertsCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':connectionId']['saml_sp_encryption_certs'][':certificateId']['$delete']
      >,
    ) {
      return parseResponse(
        client.connections[':connectionId'].saml_sp_encryption_certs[':certificateId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteConnectionsConnectionIdSamlSpEncryptionCertsCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.connections)[':connectionId']['saml_sp_encryption_certs'][':certificateId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteConnectionsConnectionIdSamlSpEncryptionCertsCertificateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectionsConnectionIdSamlSpSigningCertQueryKey(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
  >,
) {
  return ['connections', '/connections/:connectionId/saml_sp_signing_cert', args] as const
}

export function getConnectionsConnectionIdSamlSpSigningCertQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdSamlSpSigningCertQueryKey>
  >({
    queryKey: getConnectionsConnectionIdSamlSpSigningCertQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connectionId'].saml_sp_signing_cert.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectionsConnectionIdSamlSpSigningCert<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdSamlSpSigningCertQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConnectionsConnectionIdSamlSpSigningCertQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConnectionsConnectionIdSamlSpSigningCert<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdSamlSpSigningCertQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConnectionsConnectionIdSamlSpSigningCertQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostConnectionsConnectionIdSamlSpSigningCertMutationKey() {
  return ['connections', '/connections/:connectionId/saml_sp_signing_cert', 'POST'] as const
}

export function getPostConnectionsConnectionIdSamlSpSigningCertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsConnectionIdSamlSpSigningCertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$post']
      >,
    ) {
      return parseResponse(
        client.connections[':connectionId'].saml_sp_signing_cert.$post(args, options),
      )
    },
  })
}

export function usePostConnectionsConnectionIdSamlSpSigningCert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConnectionsConnectionIdSamlSpSigningCertMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteConnectionsConnectionIdSamlSpSigningCertCertificateIdMutationKey() {
  return [
    'connections',
    '/connections/:connectionId/saml_sp_signing_cert/:certificateId',
    'DELETE',
  ] as const
}

export function getDeleteConnectionsConnectionIdSamlSpSigningCertCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_sp_signing_cert'][':certificateId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsConnectionIdSamlSpSigningCertCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':connectionId']['saml_sp_signing_cert'][':certificateId']['$delete']
      >,
    ) {
      return parseResponse(
        client.connections[':connectionId'].saml_sp_signing_cert[':certificateId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteConnectionsConnectionIdSamlSpSigningCertCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.connections)[':connectionId']['saml_sp_signing_cert'][':certificateId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteConnectionsConnectionIdSamlSpSigningCertCertificateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectionsIdQueryKey(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
) {
  return ['connections', '/connections/:id', args] as const
}

export function getConnectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsIdQueryKey>
  >({
    queryKey: getConnectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConnectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConnectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteConnectionsIdMutationKey() {
  return ['connections', '/connections/:id', 'DELETE'] as const
}

export function getDeleteConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.connections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.connections)[':id']['$delete']>) {
      return parseResponse(client.connections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.connections)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConnectionsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchConnectionsIdMutationKey() {
  return ['connections', '/connections/:id', 'PATCH'] as const
}

export function getPatchConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchConnectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.connections)[':id']['$patch']>) {
      return parseResponse(client.connections[':id'].$patch(args, options))
    },
  })
}

export function usePatchConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.connections)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchConnectionsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDataIntegrationsQueryKey(
  args: InferRequestType<(typeof client)['data-integrations']['$get']>,
) {
  return ['data-integrations', '/data-integrations', args] as const
}

export function getDataIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataIntegrationsQueryKey>
  >({
    queryKey: getDataIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-integrations'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-integrations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataIntegrationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-integrations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataIntegrationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDataIntegrationsMutationKey() {
  return ['data-integrations', '/data-integrations', 'POST'] as const
}

export function getPostDataIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-integrations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataIntegrationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['data-integrations']['$post']>) {
      return parseResponse(client['data-integrations'].$post(args, options))
    },
  })
}

export function usePostDataIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['data-integrations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataIntegrationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDataIntegrationsFinishMutationKey() {
  return ['data-integrations', '/data-integrations/finish', 'POST'] as const
}

export function getPostDataIntegrationsFinishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations']['finish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-integrations']['finish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataIntegrationsFinishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-integrations']['finish']['$post']>,
    ) {
      return parseResponse(client['data-integrations'].finish.$post(args, options))
    },
  })
}

export function usePostDataIntegrationsFinish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['data-integrations']['finish']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['data-integrations']['finish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataIntegrationsFinishMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDataIntegrationsSlugQueryKey(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['$get']>,
) {
  return ['data-integrations', '/data-integrations/:slug', args] as const
}

export function getDataIntegrationsSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataIntegrationsSlugQueryKey>
  >({
    queryKey: getDataIntegrationsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-integrations'][':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataIntegrationsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataIntegrationsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataIntegrationsSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataIntegrationsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataIntegrationsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataIntegrationsSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutDataIntegrationsSlugMutationKey() {
  return ['data-integrations', '/data-integrations/:slug', 'PUT'] as const
}

export function getPutDataIntegrationsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-integrations'][':slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataIntegrationsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-integrations'][':slug']['$put']>,
    ) {
      return parseResponse(client['data-integrations'][':slug'].$put(args, options))
    },
  })
}

export function usePutDataIntegrationsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['data-integrations'][':slug']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDataIntegrationsSlugMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDataIntegrationsSlugMutationKey() {
  return ['data-integrations', '/data-integrations/:slug', 'DELETE'] as const
}

export function getDeleteDataIntegrationsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['data-integrations'][':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataIntegrationsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-integrations'][':slug']['$delete']>,
    ) {
      return parseResponse(client['data-integrations'][':slug'].$delete(args, options))
    },
  })
}

export function useDeleteDataIntegrationsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['data-integrations'][':slug']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDataIntegrationsSlugMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutDataIntegrationsSlugApiKeyMutationKey() {
  return ['data-integrations', '/data-integrations/:slug/api-key', 'PUT'] as const
}

export function getPutDataIntegrationsSlugApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['api-key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataIntegrationsSlugApiKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$put']>,
    ) {
      return parseResponse(client['data-integrations'][':slug']['api-key'].$put(args, options))
    },
  })
}

export function usePutDataIntegrationsSlugApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['api-key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDataIntegrationsSlugApiKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDataIntegrationsSlugApiKeyMutationKey() {
  return ['data-integrations', '/data-integrations/:slug/api-key', 'POST'] as const
}

export function getPostDataIntegrationsSlugApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['api-key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataIntegrationsSlugApiKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$post']>,
    ) {
      return parseResponse(client['data-integrations'][':slug']['api-key'].$post(args, options))
    },
  })
}

export function usePostDataIntegrationsSlugApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['api-key']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataIntegrationsSlugApiKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDataIntegrationsSlugAuthorizeMutationKey() {
  return ['data-integrations', '/data-integrations/:slug/authorize', 'POST'] as const
}

export function getPostDataIntegrationsSlugAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['authorize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-integrations'][':slug']['authorize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataIntegrationsSlugAuthorizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-integrations'][':slug']['authorize']['$post']>,
    ) {
      return parseResponse(client['data-integrations'][':slug'].authorize.$post(args, options))
    },
  })
}

export function usePostDataIntegrationsSlugAuthorize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['data-integrations'][':slug']['authorize']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['data-integrations'][':slug']['authorize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataIntegrationsSlugAuthorizeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutDataIntegrationsSlugClientCredentialsMutationKey() {
  return ['data-integrations', '/data-integrations/:slug/client-credentials', 'PUT'] as const
}

export function getPutDataIntegrationsSlugClientCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['data-integrations'][':slug']['client-credentials']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataIntegrationsSlugClientCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-integrations'][':slug']['client-credentials']['$put']
      >,
    ) {
      return parseResponse(
        client['data-integrations'][':slug']['client-credentials'].$put(args, options),
      )
    },
  })
}

export function usePutDataIntegrationsSlugClientCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['data-integrations'][':slug']['client-credentials']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['data-integrations'][':slug']['client-credentials']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDataIntegrationsSlugClientCredentialsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDataIntegrationsSlugClientCredentialsMutationKey() {
  return ['data-integrations', '/data-integrations/:slug/client-credentials', 'POST'] as const
}

export function getPostDataIntegrationsSlugClientCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['data-integrations'][':slug']['client-credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataIntegrationsSlugClientCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-integrations'][':slug']['client-credentials']['$post']
      >,
    ) {
      return parseResponse(
        client['data-integrations'][':slug']['client-credentials'].$post(args, options),
      )
    },
  })
}

export function usePostDataIntegrationsSlugClientCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['data-integrations'][':slug']['client-credentials']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['data-integrations'][':slug']['client-credentials']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataIntegrationsSlugClientCredentialsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDataIntegrationsSlugCredentialsMutationKey() {
  return ['data-integrations', '/data-integrations/:slug/credentials', 'POST'] as const
}

export function getPostDataIntegrationsSlugCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['credentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-integrations'][':slug']['credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataIntegrationsSlugCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-integrations'][':slug']['credentials']['$post']>,
    ) {
      return parseResponse(client['data-integrations'][':slug'].credentials.$post(args, options))
    },
  })
}

export function usePostDataIntegrationsSlugCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['data-integrations'][':slug']['credentials']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['data-integrations'][':slug']['credentials']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataIntegrationsSlugCredentialsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDataIntegrationsSlugOrganizationQueryKey(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$get']>,
) {
  return ['data-integrations', '/data-integrations/:slug/organization', args] as const
}

export function getDataIntegrationsSlugOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataIntegrationsSlugOrganizationQueryKey>
  >({
    queryKey: getDataIntegrationsSlugOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['data-integrations'][':slug'].organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDataIntegrationsSlugOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataIntegrationsSlugOrganizationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDataIntegrationsSlugOrganizationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataIntegrationsSlugOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataIntegrationsSlugOrganizationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDataIntegrationsSlugOrganizationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDataIntegrationsSlugOrganizationMutationKey() {
  return ['data-integrations', '/data-integrations/:slug/organization', 'PUT'] as const
}

export function getPutDataIntegrationsSlugOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDataIntegrationsSlugOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$put']>,
    ) {
      return parseResponse(client['data-integrations'][':slug'].organization.$put(args, options))
    },
  })
}

export function usePutDataIntegrationsSlugOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDataIntegrationsSlugOrganizationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDataIntegrationsSlugOrganizationMutationKey() {
  return ['data-integrations', '/data-integrations/:slug/organization', 'DELETE'] as const
}

export function getDeleteDataIntegrationsSlugOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataIntegrationsSlugOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['data-integrations'][':slug']['organization']['$delete']
      >,
    ) {
      return parseResponse(client['data-integrations'][':slug'].organization.$delete(args, options))
    },
  })
}

export function useDeleteDataIntegrationsSlugOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['data-integrations'][':slug']['organization']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDataIntegrationsSlugOrganizationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDataIntegrationsSlugTokenMutationKey() {
  return ['data-integrations', '/data-integrations/:slug/token', 'POST'] as const
}

export function getPostDataIntegrationsSlugTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['data-integrations'][':slug']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataIntegrationsSlugTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['data-integrations'][':slug']['token']['$post']>,
    ) {
      return parseResponse(client['data-integrations'][':slug'].token.$post(args, options))
    },
  })
}

export function usePostDataIntegrationsSlugToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['data-integrations'][':slug']['token']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDataIntegrationsSlugTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDirectoriesQueryKey(args: InferRequestType<typeof client.directories.$get>) {
  return ['directories', '/directories', args] as const
}

export function getDirectoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.directories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDirectoriesQueryKey>
  >({
    queryKey: getDirectoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.directories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.directories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDirectoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.directories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDirectoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDirectoriesDirectoryIdGroupsQueryKey(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups']['$get']>,
) {
  return ['directories', '/directories/:directoryId/groups', args] as const
}

export function getDirectoriesDirectoryIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.directories)[':directoryId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.directories)[':directoryId']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoriesDirectoryIdGroupsQueryKey>
  >({
    queryKey: getDirectoriesDirectoryIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.directories[':directoryId'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDirectoriesDirectoryIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.directories)[':directoryId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directories)[':directoryId']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesDirectoryIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDirectoriesDirectoryIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDirectoriesDirectoryIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.directories)[':directoryId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directories)[':directoryId']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesDirectoryIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDirectoriesDirectoryIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDirectoriesDirectoryIdGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>,
) {
  return ['directories', '/directories/:directoryId/groups/:groupId', args] as const
}

export function getDirectoriesDirectoryIdGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoriesDirectoryIdGroupsGroupIdQueryKey>
  >({
    queryKey: getDirectoriesDirectoryIdGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.directories[':directoryId'].groups[':groupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDirectoriesDirectoryIdGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.directories)[':directoryId']['groups'][':groupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesDirectoryIdGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDirectoriesDirectoryIdGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDirectoriesDirectoryIdGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.directories)[':directoryId']['groups'][':groupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesDirectoryIdGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDirectoriesDirectoryIdGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDirectoriesDirectoryIdUsersQueryKey(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users']['$get']>,
) {
  return ['directories', '/directories/:directoryId/users', args] as const
}

export function getDirectoriesDirectoryIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.directories)[':directoryId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.directories)[':directoryId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoriesDirectoryIdUsersQueryKey>
  >({
    queryKey: getDirectoriesDirectoryIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.directories[':directoryId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDirectoriesDirectoryIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.directories)[':directoryId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directories)[':directoryId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesDirectoryIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDirectoriesDirectoryIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDirectoriesDirectoryIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.directories)[':directoryId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directories)[':directoryId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesDirectoryIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDirectoriesDirectoryIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDirectoriesDirectoryIdUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>,
) {
  return ['directories', '/directories/:directoryId/users/:userId', args] as const
}

export function getDirectoriesDirectoryIdUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoriesDirectoryIdUsersUserIdQueryKey>
  >({
    queryKey: getDirectoriesDirectoryIdUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.directories[':directoryId'].users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDirectoriesDirectoryIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesDirectoryIdUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDirectoriesDirectoryIdUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDirectoriesDirectoryIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesDirectoryIdUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDirectoriesDirectoryIdUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDirectoriesIdQueryKey(
  args: InferRequestType<(typeof client.directories)[':id']['$get']>,
) {
  return ['directories', '/directories/:id', args] as const
}

export function getDirectoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoriesIdQueryKey>
  >({
    queryKey: getDirectoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.directories[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDirectoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directories)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDirectoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteDirectoriesIdMutationKey() {
  return ['directories', '/directories/:id', 'DELETE'] as const
}

export function getDeleteDirectoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.directories)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDirectoriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.directories)[':id']['$delete']>) {
      return parseResponse(client.directories[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDirectoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.directories)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDirectoriesIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDirectoriesIdSyncMutationKey() {
  return ['directories', '/directories/:id/sync', 'POST'] as const
}

export function getPostDirectoriesIdSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.directories)[':id']['sync']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.directories)[':id']['sync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDirectoriesIdSyncMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.directories)[':id']['sync']['$post']>) {
      return parseResponse(client.directories[':id'].sync.$post(args, options))
    },
  })
}

export function usePostDirectoriesIdSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directories)[':id']['sync']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.directories)[':id']['sync']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDirectoriesIdSyncMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDirectoryGroupsQueryKey(
  args: InferRequestType<typeof client.directory_groups.$get>,
) {
  return ['directory_groups', '/directory_groups', args] as const
}

export function getDirectoryGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.directory_groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoryGroupsQueryKey>
  >({
    queryKey: getDirectoryGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.directory_groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDirectoryGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.directory_groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoryGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDirectoryGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDirectoryGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.directory_groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoryGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDirectoryGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDirectoryGroupsIdQueryKey(
  args: InferRequestType<(typeof client.directory_groups)[':id']['$get']>,
) {
  return ['directory_groups', '/directory_groups/:id', args] as const
}

export function getDirectoryGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directory_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoryGroupsIdQueryKey>
  >({
    queryKey: getDirectoryGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.directory_groups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDirectoryGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directory_groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoryGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDirectoryGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDirectoryGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directory_groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoryGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDirectoryGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDirectoryUsersQueryKey(
  args: InferRequestType<typeof client.directory_users.$get>,
) {
  return ['directory_users', '/directory_users', args] as const
}

export function getDirectoryUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.directory_users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoryUsersQueryKey>
  >({
    queryKey: getDirectoryUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.directory_users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDirectoryUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.directory_users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoryUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDirectoryUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDirectoryUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.directory_users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoryUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDirectoryUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDirectoryUsersIdQueryKey(
  args: InferRequestType<(typeof client.directory_users)[':id']['$get']>,
) {
  return ['directory_users', '/directory_users/:id', args] as const
}

export function getDirectoryUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directory_users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoryUsersIdQueryKey>
  >({
    queryKey: getDirectoryUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.directory_users[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDirectoryUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directory_users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoryUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDirectoryUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDirectoryUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directory_users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoryUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDirectoryUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFeatureFlagsQueryKey(
  args: InferRequestType<(typeof client)['feature-flags']['$get']>,
) {
  return ['feature-flags', '/feature-flags', args] as const
}

export function getFeatureFlagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['feature-flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureFlagsQueryKey>
  >({
    queryKey: getFeatureFlagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['feature-flags'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFeatureFlags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['feature-flags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFeatureFlagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFeatureFlagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFeatureFlags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['feature-flags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFeatureFlagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFeatureFlagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFeatureFlagsSlugQueryKey(
  args: InferRequestType<(typeof client)['feature-flags'][':slug']['$get']>,
) {
  return ['feature-flags', '/feature-flags/:slug', args] as const
}

export function getFeatureFlagsSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['feature-flags'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureFlagsSlugQueryKey>
  >({
    queryKey: getFeatureFlagsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['feature-flags'][':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFeatureFlagsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['feature-flags'][':slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFeatureFlagsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFeatureFlagsSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFeatureFlagsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['feature-flags'][':slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFeatureFlagsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFeatureFlagsSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutFeatureFlagsSlugDisableMutationKey() {
  return ['feature-flags', '/feature-flags/:slug/disable', 'PUT'] as const
}

export function getPutFeatureFlagsSlugDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['disable']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['feature-flags'][':slug']['disable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFeatureFlagsSlugDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['feature-flags'][':slug']['disable']['$put']>,
    ) {
      return parseResponse(client['feature-flags'][':slug'].disable.$put(args, options))
    },
  })
}

export function usePutFeatureFlagsSlugDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['disable']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['feature-flags'][':slug']['disable']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFeatureFlagsSlugDisableMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutFeatureFlagsSlugEnableMutationKey() {
  return ['feature-flags', '/feature-flags/:slug/enable', 'PUT'] as const
}

export function getPutFeatureFlagsSlugEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['enable']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['feature-flags'][':slug']['enable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFeatureFlagsSlugEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['feature-flags'][':slug']['enable']['$put']>,
    ) {
      return parseResponse(client['feature-flags'][':slug'].enable.$put(args, options))
    },
  })
}

export function usePutFeatureFlagsSlugEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['enable']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['feature-flags'][':slug']['enable']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFeatureFlagsSlugEnableMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFeatureFlagsSlugTargetsResourceIdMutationKey() {
  return ['feature-flags', '/feature-flags/:slug/targets/:resourceId', 'POST'] as const
}

export function getPostFeatureFlagsSlugTargetsResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFeatureFlagsSlugTargetsResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$post']
      >,
    ) {
      return parseResponse(
        client['feature-flags'][':slug'].targets[':resourceId'].$post(args, options),
      )
    },
  })
}

export function usePostFeatureFlagsSlugTargetsResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFeatureFlagsSlugTargetsResourceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFeatureFlagsSlugTargetsResourceIdMutationKey() {
  return ['feature-flags', '/feature-flags/:slug/targets/:resourceId', 'DELETE'] as const
}

export function getDeleteFeatureFlagsSlugTargetsResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFeatureFlagsSlugTargetsResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$delete']
      >,
    ) {
      return parseResponse(
        client['feature-flags'][':slug'].targets[':resourceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFeatureFlagsSlugTargetsResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFeatureFlagsSlugTargetsResourceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOrganizationDomainsMutationKey() {
  return ['organization_domains', '/organization_domains', 'POST'] as const
}

export function getPostOrganizationDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization_domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization_domains.$post>) {
      return parseResponse(client.organization_domains.$post(args, options))
    },
  })
}

export function usePostOrganizationDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization_domains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationDomainsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationDomainsIdQueryKey(
  args: InferRequestType<(typeof client.organization_domains)[':id']['$get']>,
) {
  return ['organization_domains', '/organization_domains/:id', args] as const
}

export function getOrganizationDomainsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization_domains)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationDomainsIdQueryKey>
  >({
    queryKey: getOrganizationDomainsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization_domains[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationDomainsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization_domains)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationDomainsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationDomainsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationDomainsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization_domains)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationDomainsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationDomainsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOrganizationDomainsIdMutationKey() {
  return ['organization_domains', '/organization_domains/:id', 'DELETE'] as const
}

export function getDeleteOrganizationDomainsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_domains)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organization_domains)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationDomainsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization_domains)[':id']['$delete']>,
    ) {
      return parseResponse(client.organization_domains[':id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationDomainsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization_domains)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.organization_domains)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationDomainsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOrganizationDomainsIdVerifyMutationKey() {
  return ['organization_domains', '/organization_domains/:id/verify', 'POST'] as const
}

export function getPostOrganizationDomainsIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization_domains)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization_domains)[':id']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationDomainsIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization_domains)[':id']['verify']['$post']>,
    ) {
      return parseResponse(client.organization_domains[':id'].verify.$post(args, options))
    },
  })
}

export function usePostOrganizationDomainsIdVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organization_domains)[':id']['verify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organization_domains)[':id']['verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationDomainsIdVerifyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationsQueryKey(args: InferRequestType<typeof client.organizations.$get>) {
  return ['organizations', '/organizations', args] as const
}

export function getOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organizations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >({
    queryKey: getOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrganizationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrganizationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrganizationsMutationKey() {
  return ['organizations', '/organizations', 'POST'] as const
}

export function getPostOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.$post>) {
      return parseResponse(client.organizations.$post(args, options))
    },
  })
}

export function usePostOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.organizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationsExternalIdExternalIdQueryKey(
  args: InferRequestType<(typeof client.organizations.external_id)[':external_id']['$get']>,
) {
  return ['organizations', '/organizations/external_id/:external_id', args] as const
}

export function getOrganizationsExternalIdExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations.external_id)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsExternalIdExternalIdQueryKey>
  >({
    queryKey: getOrganizationsExternalIdExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.external_id[':external_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsExternalIdExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations.external_id)[':external_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsExternalIdExternalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsExternalIdExternalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsExternalIdExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations.external_id)[':external_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsExternalIdExternalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsExternalIdExternalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsIdQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
) {
  return ['organizations', '/organizations/:id', args] as const
}

export function getOrganizationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdQueryKey>
  >({
    queryKey: getOrganizationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrganizationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrganizationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutOrganizationsIdMutationKey() {
  return ['organizations', '/organizations/:id', 'PUT'] as const
}

export function getPutOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organizations)[':id']['$put']>) {
      return parseResponse(client.organizations[':id'].$put(args, options))
    },
  })
}

export function usePutOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteOrganizationsIdMutationKey() {
  return ['organizations', '/organizations/:id', 'DELETE'] as const
}

export function getDeleteOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organizations)[':id']['$delete']>) {
      return parseResponse(client.organizations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationsIdAuditLogConfigurationQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>,
) {
  return ['organizations', '/organizations/:id/audit_log_configuration', args] as const
}

export function getOrganizationsIdAuditLogConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdAuditLogConfigurationQueryKey>
  >({
    queryKey: getOrganizationsIdAuditLogConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].audit_log_configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdAuditLogConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdAuditLogConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsIdAuditLogConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdAuditLogConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdAuditLogConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsIdAuditLogConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsIdAuditLogsRetentionQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>,
) {
  return ['organizations', '/organizations/:id/audit_logs_retention', args] as const
}

export function getOrganizationsIdAuditLogsRetentionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdAuditLogsRetentionQueryKey>
  >({
    queryKey: getOrganizationsIdAuditLogsRetentionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].audit_logs_retention.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdAuditLogsRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdAuditLogsRetentionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsIdAuditLogsRetentionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdAuditLogsRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdAuditLogsRetentionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsIdAuditLogsRetentionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganizationsIdAuditLogsRetentionMutationKey() {
  return ['organizations', '/organizations/:id/audit_logs_retention', 'PUT'] as const
}

export function getPutOrganizationsIdAuditLogsRetentionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdAuditLogsRetentionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$put']>,
    ) {
      return parseResponse(client.organizations[':id'].audit_logs_retention.$put(args, options))
    },
  })
}

export function usePutOrganizationsIdAuditLogsRetention<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationsIdAuditLogsRetentionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdApiKeysQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/api_keys', args] as const
}

export function getOrganizationsOrganizationIdApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdApiKeysQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].api_keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrganizationIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsOrganizationIdApiKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrganizationIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsOrganizationIdApiKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdApiKeysMutationKey() {
  return ['organizations', '/organizations/:organizationId/api_keys', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdApiKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$post']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].api_keys.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrganizationIdApiKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrganizationIdApiKeysMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryKey(
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

export function getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].data_integration_configurations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrganizationIdDataIntegrationConfigurations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrganizationIdDataIntegrationConfigurations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganizationsOrganizationIdDataIntegrationConfigurationsSlugMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/data_integration_configurations/:slug',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdDataIntegrationConfigurationsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organizationId']['data_integration_configurations'][':slug']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdDataIntegrationConfigurationsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['data_integration_configurations'][':slug']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].data_integration_configurations[':slug'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutOrganizationsOrganizationIdDataIntegrationConfigurationsSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organizationId']['data_integration_configurations'][':slug']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutOrganizationsOrganizationIdDataIntegrationConfigurationsSlugMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdFeatureFlagsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/feature-flags', args] as const
}

export function getOrganizationsOrganizationIdFeatureFlagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdFeatureFlagsQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdFeatureFlagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId']['feature-flags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrganizationIdFeatureFlags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':organizationId']['feature-flags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdFeatureFlagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsOrganizationIdFeatureFlagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrganizationIdFeatureFlags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':organizationId']['feature-flags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdFeatureFlagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsOrganizationIdFeatureFlagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdGroupsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/groups', args] as const
}

export function getOrganizationsOrganizationIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdGroupsQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrganizationIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':organizationId']['groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsOrganizationIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrganizationIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':organizationId']['groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsOrganizationIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdGroupsMutationKey() {
  return ['organizations', '/organizations/:organizationId/groups', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$post']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].groups.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrganizationIdGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':organizationId']['groups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrganizationIdGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdGroupsGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationId/groups/:groupId', args] as const
}

export function getOrganizationsOrganizationIdGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdGroupsGroupIdQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].groups[':groupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrganizationIdGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsOrganizationIdGroupsGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrganizationIdGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsOrganizationIdGroupsGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOrganizationsOrganizationIdGroupsGroupIdMutationKey() {
  return ['organizations', '/organizations/:organizationId/groups/:groupId', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['groups'][':groupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].groups[':groupId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationIdGroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organizationId']['groups'][':groupId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsOrganizationIdGroupsGroupIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchOrganizationsOrganizationIdGroupsGroupIdMutationKey() {
  return ['organizations', '/organizations/:organizationId/groups/:groupId', 'PATCH'] as const
}

export function getPatchOrganizationsOrganizationIdGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['groups'][':groupId']['$patch']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].groups[':groupId'].$patch(args, options),
      )
    },
  })
}

export function usePatchOrganizationsOrganizationIdGroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organizationId']['groups'][':groupId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOrganizationsOrganizationIdGroupsGroupIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryKey(
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

export function getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].groups[':groupId']['organization-memberships'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useOrganizationsOrganizationIdGroupsGroupIdOrganizationMemberships<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrganizationIdGroupsGroupIdOrganizationMemberships<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/groups/:groupId/organization-memberships',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].groups[':groupId'][
          'organization-memberships'
        ].$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdGroupsGroupIdOrganizationMemberships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/groups/:groupId/organization-memberships',
    'PATCH',
  ] as const
}

export function getPatchOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$patch']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].groups[':groupId'][
          'organization-memberships'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchOrganizationsOrganizationIdGroupsGroupIdOrganizationMemberships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmIdMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/groups/:groupId/organization-memberships/:omId',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships'][':omId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships'][':omId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].groups[':groupId']['organization-memberships'][
          ':omId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships'][':omId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdAuthorizedApplicationsQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/authorized_applications', args] as const
}

export function getOrganizationsOrganizationIdAuthorizedApplicationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdAuthorizedApplicationsQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdAuthorizedApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].authorized_applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrganizationIdAuthorizedApplications<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdAuthorizedApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsOrganizationIdAuthorizedApplicationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrganizationIdAuthorizedApplications<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdAuthorizedApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsOrganizationIdAuthorizedApplicationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdConnectedAccountsSlugQueryKey(
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

export function getOrganizationsOrganizationIdConnectedAccountsSlugQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdConnectedAccountsSlugQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdConnectedAccountsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].connected_accounts[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrganizationIdConnectedAccountsSlug<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdConnectedAccountsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsOrganizationIdConnectedAccountsSlugQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrganizationIdConnectedAccountsSlug<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdConnectedAccountsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsOrganizationIdConnectedAccountsSlugQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganizationsOrganizationIdConnectedAccountsSlugMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id/connected_accounts/:slug',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdConnectedAccountsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdConnectedAccountsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].connected_accounts[':slug'].$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsOrganizationIdConnectedAccountsSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationsOrganizationIdConnectedAccountsSlugMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdConnectedAccountsSlugMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id/connected_accounts/:slug',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdConnectedAccountsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdConnectedAccountsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].connected_accounts[':slug'].$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdConnectedAccountsSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrganizationIdConnectedAccountsSlugMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteOrganizationsOrganizationIdConnectedAccountsSlugMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id/connected_accounts/:slug',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdConnectedAccountsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdConnectedAccountsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].connected_accounts[':slug'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationIdConnectedAccountsSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsOrganizationIdConnectedAccountsSlugMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdDataProvidersQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['data_providers']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/data_providers', args] as const
}

export function getOrganizationsOrganizationIdDataProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organization_id']['data_providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['data_providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organization_id']['data_providers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdDataProvidersQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdDataProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].data_providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrganizationIdDataProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organization_id']['data_providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['data_providers']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdDataProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsOrganizationIdDataProvidersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrganizationIdDataProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organization_id']['data_providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['data_providers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdDataProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsOrganizationIdDataProvidersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdItContactsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>,
) {
  return ['organizations', '/organizations/:organization_id/it_contacts', args] as const
}

export function getOrganizationsOrganizationIdItContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdItContactsQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdItContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].it_contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrganizationIdItContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdItContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOrganizationsOrganizationIdItContactsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrganizationIdItContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrganizationIdItContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOrganizationsOrganizationIdItContactsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdItContactsMutationKey() {
  return ['organizations', '/organizations/:organization_id/it_contacts', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdItContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdItContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['it_contacts']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].it_contacts.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdItContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':organization_id']['it_contacts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrganizationIdItContactsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteOrganizationsOrganizationIdItContactsContactIdMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id/it_contacts/:contact_id',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdItContactsContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdItContactsContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].it_contacts[':contact_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationIdItContactsContactId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsOrganizationIdItContactsContactIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdItContactsContactIdInviteMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id/it_contacts/:contact_id/invite',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdItContactsContactIdInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['invite']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdItContactsContactIdInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['invite']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].it_contacts[':contact_id'].invite.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdItContactsContactIdInvite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['invite']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostOrganizationsOrganizationIdItContactsContactIdInviteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdItContactsContactIdRevokeMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id/it_contacts/:contact_id/revoke',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdItContactsContactIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdItContactsContactIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].it_contacts[':contact_id'].revoke.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdItContactsContactIdRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['revoke']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostOrganizationsOrganizationIdItContactsContactIdRevokeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPlatformTeamsMutationKey() {
  return ['platform', '/platform/teams', 'POST'] as const
}

export function getPostPlatformTeamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.teams.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.platform.teams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformTeamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.teams.$post>) {
      return parseResponse(client.platform.teams.$post(args, options))
    },
  })
}

export function usePostPlatformTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.teams.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.platform.teams.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformTeamsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlatformTeamsTeamIdQueryKey(
  args: InferRequestType<(typeof client.platform.teams)[':team_id']['$get']>,
) {
  return ['platform', '/platform/teams/:team_id', args] as const
}

export function getPlatformTeamsTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformTeamsTeamIdQueryKey>
  >({
    queryKey: getPlatformTeamsTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.teams[':team_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformTeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.teams)[':team_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformTeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformTeamsTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformTeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.teams)[':team_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformTeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformTeamsTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPortalGenerateLinkMutationKey() {
  return ['portal', '/portal/generate_link', 'POST'] as const
}

export function getPostPortalGenerateLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portal.generate_link.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.portal.generate_link.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortalGenerateLinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portal.generate_link.$post>) {
      return parseResponse(client.portal.generate_link.$post(args, options))
    },
  })
}

export function usePostPortalGenerateLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.portal.generate_link.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.portal.generate_link.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortalGenerateLinkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPortalRevokeLinkMutationKey() {
  return ['portal', '/portal/revoke_link', 'POST'] as const
}

export function getPostPortalRevokeLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portal.revoke_link.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.portal.revoke_link.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortalRevokeLinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portal.revoke_link.$post>) {
      return parseResponse(client.portal.revoke_link.$post(args, options))
    },
  })
}

export function usePostPortalRevokeLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.portal.revoke_link.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.portal.revoke_link.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortalRevokeLinkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRadarAttemptsMutationKey() {
  return ['radar', '/radar/attempts', 'POST'] as const
}

export function getPostRadarAttemptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.attempts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.radar.attempts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRadarAttemptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.radar.attempts.$post>) {
      return parseResponse(client.radar.attempts.$post(args, options))
    },
  })
}

export function usePostRadarAttempts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.radar.attempts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.radar.attempts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRadarAttemptsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutRadarAttemptsIdMutationKey() {
  return ['radar', '/radar/attempts/:id', 'PUT'] as const
}

export function getPutRadarAttemptsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.radar.attempts)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.radar.attempts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRadarAttemptsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.radar.attempts)[':id']['$put']>) {
      return parseResponse(client.radar.attempts[':id'].$put(args, options))
    },
  })
}

export function usePutRadarAttemptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.attempts)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.radar.attempts)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRadarAttemptsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRadarListsTypeActionMutationKey() {
  return ['radar', '/radar/lists/:type/:action', 'POST'] as const
}

export function getPostRadarListsTypeActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.lists)[':type'][':action']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.radar.lists)[':type'][':action']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRadarListsTypeActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.radar.lists)[':type'][':action']['$post']>,
    ) {
      return parseResponse(client.radar.lists[':type'][':action'].$post(args, options))
    },
  })
}

export function usePostRadarListsTypeAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.lists)[':type'][':action']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.radar.lists)[':type'][':action']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRadarListsTypeActionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRadarListsTypeActionMutationKey() {
  return ['radar', '/radar/lists/:type/:action', 'DELETE'] as const
}

export function getDeleteRadarListsTypeActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.radar.lists)[':type'][':action']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.radar.lists)[':type'][':action']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRadarListsTypeActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.radar.lists)[':type'][':action']['$delete']>,
    ) {
      return parseResponse(client.radar.lists[':type'][':action'].$delete(args, options))
    },
  })
}

export function useDeleteRadarListsTypeAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.radar.lists)[':type'][':action']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.radar.lists)[':type'][':action']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRadarListsTypeActionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSsoAuthorizeQueryKey(args: InferRequestType<typeof client.sso.authorize.$get>) {
  return ['sso', '/sso/authorize', args] as const
}

export function getSsoAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sso.authorize.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSsoAuthorizeQueryKey>
  >({
    queryKey: getSsoAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sso.authorize.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSsoAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sso.authorize.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSsoAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSsoAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSsoAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sso.authorize.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSsoAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSsoAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSsoJwksClientIdQueryKey(
  args: InferRequestType<(typeof client.sso.jwks)[':clientId']['$get']>,
) {
  return ['sso', '/sso/jwks/:clientId', args] as const
}

export function getSsoJwksClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sso.jwks)[':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSsoJwksClientIdQueryKey>
  >({
    queryKey: getSsoJwksClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sso.jwks[':clientId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSsoJwksClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sso.jwks)[':clientId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSsoJwksClientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSsoJwksClientIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSsoJwksClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sso.jwks)[':clientId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSsoJwksClientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSsoJwksClientIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSsoLogoutQueryKey(args: InferRequestType<typeof client.sso.logout.$get>) {
  return ['sso', '/sso/logout', args] as const
}

export function getSsoLogoutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sso.logout.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSsoLogoutQueryKey>
  >({
    queryKey: getSsoLogoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sso.logout.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSsoLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sso.logout.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSsoLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSsoLogoutQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSsoLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sso.logout.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSsoLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSsoLogoutQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSsoLogoutAuthorizeMutationKey() {
  return ['sso', '/sso/logout/authorize', 'POST'] as const
}

export function getPostSsoLogoutAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.authorize.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sso.logout.authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSsoLogoutAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sso.logout.authorize.$post>) {
      return parseResponse(client.sso.logout.authorize.$post(args, options))
    },
  })
}

export function usePostSsoLogoutAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.authorize.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sso.logout.authorize.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSsoLogoutAuthorizeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSsoProfileQueryKey() {
  return ['sso', '/sso/profile'] as const
}

export function getSsoProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSsoProfileQueryKey>
  >({
    queryKey: getSsoProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sso.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSsoProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSsoProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSsoProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSsoProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSsoProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSsoProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSsoTokenMutationKey() {
  return ['sso', '/sso/token', 'POST'] as const
}

export function getPostSsoTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.sso.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSsoTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sso.token.$post>) {
      return parseResponse(client.sso.token.$post(args, options))
    },
  })
}

export function usePostSsoToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sso.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSsoTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementAuthenticateMutationKey() {
  return ['user_management', '/user_management/authenticate', 'POST'] as const
}

export function getPostUserManagementAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_management.authenticate.$post>) {
      return parseResponse(client.user_management.authenticate.$post(args, options))
    },
  })
}

export function usePostUserManagementAuthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.authenticate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementAuthenticateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementAuthkitOauthResourcesQueryKey(
  args: InferRequestType<typeof client.user_management.authkit_oauth_resources.$get>,
) {
  return ['user_management', '/user_management/authkit_oauth_resources', args] as const
}

export function getUserManagementAuthkitOauthResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.authkit_oauth_resources.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementAuthkitOauthResourcesQueryKey>
  >({
    queryKey: getUserManagementAuthkitOauthResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.authkit_oauth_resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementAuthkitOauthResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.authkit_oauth_resources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementAuthkitOauthResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementAuthkitOauthResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementAuthkitOauthResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.authkit_oauth_resources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementAuthkitOauthResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementAuthkitOauthResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementAuthkitOauthResourcesMutationKey() {
  return ['user_management', '/user_management/authkit_oauth_resources', 'POST'] as const
}

export function getPostUserManagementAuthkitOauthResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.authkit_oauth_resources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementAuthkitOauthResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.user_management.authkit_oauth_resources.$post>,
    ) {
      return parseResponse(client.user_management.authkit_oauth_resources.$post(args, options))
    },
  })
}

export function usePostUserManagementAuthkitOauthResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.authkit_oauth_resources.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementAuthkitOauthResourcesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserManagementAuthkitOauthResourcesIdMutationKey() {
  return ['user_management', '/user_management/authkit_oauth_resources/:id', 'DELETE'] as const
}

export function getDeleteUserManagementAuthkitOauthResourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.user_management.authkit_oauth_resources)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserManagementAuthkitOauthResourcesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.authkit_oauth_resources)[':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.user_management.authkit_oauth_resources[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUserManagementAuthkitOauthResourcesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.user_management.authkit_oauth_resources)[':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.user_management.authkit_oauth_resources)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserManagementAuthkitOauthResourcesIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementAuthorizeQueryKey(
  args: InferRequestType<typeof client.user_management.authorize.$get>,
) {
  return ['user_management', '/user_management/authorize', args] as const
}

export function getUserManagementAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementAuthorizeQueryKey>
  >({
    queryKey: getUserManagementAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.authorize.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementAuthorize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.authorize.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementAuthorizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementAuthorize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.authorize.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementAuthorizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementAuthorizeDeviceMutationKey() {
  return ['user_management', '/user_management/authorize/device', 'POST'] as const
}

export function getPostUserManagementAuthorizeDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.authorize.device.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.authorize.device.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementAuthorizeDeviceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_management.authorize.device.$post>) {
      return parseResponse(client.user_management.authorize.device.$post(args, options))
    },
  })
}

export function usePostUserManagementAuthorizeDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.authorize.device.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.authorize.device.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementAuthorizeDeviceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementCorsOriginsQueryKey(
  args: InferRequestType<typeof client.user_management.cors_origins.$get>,
) {
  return ['user_management', '/user_management/cors_origins', args] as const
}

export function getUserManagementCorsOriginsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.cors_origins.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementCorsOriginsQueryKey>
  >({
    queryKey: getUserManagementCorsOriginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.cors_origins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementCorsOrigins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.cors_origins.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementCorsOriginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementCorsOriginsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementCorsOrigins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.cors_origins.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementCorsOriginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementCorsOriginsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementCorsOriginsMutationKey() {
  return ['user_management', '/user_management/cors_origins', 'POST'] as const
}

export function getPostUserManagementCorsOriginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.cors_origins.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementCorsOriginsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_management.cors_origins.$post>) {
      return parseResponse(client.user_management.cors_origins.$post(args, options))
    },
  })
}

export function usePostUserManagementCorsOrigins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.cors_origins.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.cors_origins.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementCorsOriginsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementEmailVerificationIdQueryKey(
  args: InferRequestType<(typeof client.user_management.email_verification)[':id']['$get']>,
) {
  return ['user_management', '/user_management/email_verification/:id', args] as const
}

export function getUserManagementEmailVerificationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.email_verification)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementEmailVerificationIdQueryKey>
  >({
    queryKey: getUserManagementEmailVerificationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.email_verification[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementEmailVerificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.email_verification)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementEmailVerificationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementEmailVerificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementEmailVerificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.email_verification)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementEmailVerificationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementEmailVerificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserManagementInvitationsQueryKey(
  args: InferRequestType<typeof client.user_management.invitations.$get>,
) {
  return ['user_management', '/user_management/invitations', args] as const
}

export function getUserManagementInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.invitations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementInvitationsQueryKey>
  >({
    queryKey: getUserManagementInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.invitations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.invitations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementInvitationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.invitations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.invitations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementInvitationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementInvitationsMutationKey() {
  return ['user_management', '/user_management/invitations', 'POST'] as const
}

export function getPostUserManagementInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.invitations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementInvitationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_management.invitations.$post>) {
      return parseResponse(client.user_management.invitations.$post(args, options))
    },
  })
}

export function usePostUserManagementInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.invitations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.invitations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementInvitationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementInvitationsByTokenTokenQueryKey(
  args: InferRequestType<(typeof client.user_management.invitations.by_token)[':token']['$get']>,
) {
  return ['user_management', '/user_management/invitations/by_token/:token', args] as const
}

export function getUserManagementInvitationsByTokenTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.invitations.by_token)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.invitations.by_token)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user_management.invitations.by_token)[':token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementInvitationsByTokenTokenQueryKey>
  >({
    queryKey: getUserManagementInvitationsByTokenTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.invitations.by_token[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementInvitationsByTokenToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.invitations.by_token)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.invitations.by_token)[':token']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.invitations.by_token)[':token']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementInvitationsByTokenTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementInvitationsByTokenTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementInvitationsByTokenToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.invitations.by_token)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.invitations.by_token)[':token']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.invitations.by_token)[':token']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementInvitationsByTokenTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementInvitationsByTokenTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserManagementInvitationsIdQueryKey(
  args: InferRequestType<(typeof client.user_management.invitations)[':id']['$get']>,
) {
  return ['user_management', '/user_management/invitations/:id', args] as const
}

export function getUserManagementInvitationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.invitations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementInvitationsIdQueryKey>
  >({
    queryKey: getUserManagementInvitationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.invitations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementInvitationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.invitations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementInvitationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementInvitationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementInvitationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.invitations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementInvitationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementInvitationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementInvitationsIdAcceptMutationKey() {
  return ['user_management', '/user_management/invitations/:id/accept', 'POST'] as const
}

export function getPostUserManagementInvitationsIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_management.invitations)[':id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementInvitationsIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_management.invitations)[':id']['accept']['$post']>,
    ) {
      return parseResponse(client.user_management.invitations[':id'].accept.$post(args, options))
    },
  })
}

export function usePostUserManagementInvitationsIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.invitations)[':id']['accept']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user_management.invitations)[':id']['accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementInvitationsIdAcceptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementInvitationsIdResendMutationKey() {
  return ['user_management', '/user_management/invitations/:id/resend', 'POST'] as const
}

export function getPostUserManagementInvitationsIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['resend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_management.invitations)[':id']['resend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementInvitationsIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_management.invitations)[':id']['resend']['$post']>,
    ) {
      return parseResponse(client.user_management.invitations[':id'].resend.$post(args, options))
    },
  })
}

export function usePostUserManagementInvitationsIdResend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.invitations)[':id']['resend']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user_management.invitations)[':id']['resend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementInvitationsIdResendMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementInvitationsIdRevokeMutationKey() {
  return ['user_management', '/user_management/invitations/:id/revoke', 'POST'] as const
}

export function getPostUserManagementInvitationsIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_management.invitations)[':id']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementInvitationsIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_management.invitations)[':id']['revoke']['$post']>,
    ) {
      return parseResponse(client.user_management.invitations[':id'].revoke.$post(args, options))
    },
  })
}

export function usePostUserManagementInvitationsIdRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.invitations)[':id']['revoke']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user_management.invitations)[':id']['revoke']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementInvitationsIdRevokeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementJwtTemplateQueryKey() {
  return ['user_management', '/user_management/jwt_template'] as const
}

export function getUserManagementJwtTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementJwtTemplateQueryKey>
  >({
    queryKey: getUserManagementJwtTemplateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.jwt_template.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementJwtTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementJwtTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserManagementJwtTemplateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserManagementJwtTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementJwtTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserManagementJwtTemplateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUserManagementJwtTemplateMutationKey() {
  return ['user_management', '/user_management/jwt_template', 'PUT'] as const
}

export function getPutUserManagementJwtTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.jwt_template.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.jwt_template.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserManagementJwtTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_management.jwt_template.$put>) {
      return parseResponse(client.user_management.jwt_template.$put(args, options))
    },
  })
}

export function usePutUserManagementJwtTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.jwt_template.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.jwt_template.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserManagementJwtTemplateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementMagicAuthMutationKey() {
  return ['user_management', '/user_management/magic_auth', 'POST'] as const
}

export function getPostUserManagementMagicAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.magic_auth.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.magic_auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementMagicAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_management.magic_auth.$post>) {
      return parseResponse(client.user_management.magic_auth.$post(args, options))
    },
  })
}

export function usePostUserManagementMagicAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.magic_auth.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.magic_auth.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementMagicAuthMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementMagicAuthIdQueryKey(
  args: InferRequestType<(typeof client.user_management.magic_auth)[':id']['$get']>,
) {
  return ['user_management', '/user_management/magic_auth/:id', args] as const
}

export function getUserManagementMagicAuthIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.magic_auth)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.magic_auth)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.magic_auth)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementMagicAuthIdQueryKey>
  >({
    queryKey: getUserManagementMagicAuthIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.magic_auth[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementMagicAuthId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.magic_auth)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.magic_auth)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.magic_auth)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementMagicAuthIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementMagicAuthIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementMagicAuthId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.magic_auth)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.magic_auth)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.magic_auth)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementMagicAuthIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementMagicAuthIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserManagementOrganizationMembershipsQueryKey(
  args: InferRequestType<typeof client.user_management.organization_memberships.$get>,
) {
  return ['user_management', '/user_management/organization_memberships', args] as const
}

export function getUserManagementOrganizationMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_management.organization_memberships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.organization_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.organization_memberships.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementOrganizationMembershipsQueryKey>
  >({
    queryKey: getUserManagementOrganizationMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.organization_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementOrganizationMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_management.organization_memberships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.organization_memberships.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.organization_memberships.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementOrganizationMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementOrganizationMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementOrganizationMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_management.organization_memberships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.organization_memberships.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.organization_memberships.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementOrganizationMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementOrganizationMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementOrganizationMembershipsMutationKey() {
  return ['user_management', '/user_management/organization_memberships', 'POST'] as const
}

export function getPostUserManagementOrganizationMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.organization_memberships.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.organization_memberships.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementOrganizationMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.user_management.organization_memberships.$post>,
    ) {
      return parseResponse(client.user_management.organization_memberships.$post(args, options))
    },
  })
}

export function usePostUserManagementOrganizationMemberships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.organization_memberships.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.organization_memberships.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementOrganizationMembershipsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementOrganizationMembershipsIdQueryKey(
  args: InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$get']>,
) {
  return ['user_management', '/user_management/organization_memberships/:id', args] as const
}

export function getUserManagementOrganizationMembershipsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.organization_memberships)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user_management.organization_memberships)[':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementOrganizationMembershipsIdQueryKey>
  >({
    queryKey: getUserManagementOrganizationMembershipsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.organization_memberships[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementOrganizationMembershipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.organization_memberships)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.organization_memberships)[':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementOrganizationMembershipsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementOrganizationMembershipsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementOrganizationMembershipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.organization_memberships)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.organization_memberships)[':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementOrganizationMembershipsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementOrganizationMembershipsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUserManagementOrganizationMembershipsIdMutationKey() {
  return ['user_management', '/user_management/organization_memberships/:id', 'PUT'] as const
}

export function getPutUserManagementOrganizationMembershipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserManagementOrganizationMembershipsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.organization_memberships)[':id']['$put']
      >,
    ) {
      return parseResponse(
        client.user_management.organization_memberships[':id'].$put(args, options),
      )
    },
  })
}

export function usePutUserManagementOrganizationMembershipsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserManagementOrganizationMembershipsIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserManagementOrganizationMembershipsIdMutationKey() {
  return ['user_management', '/user_management/organization_memberships/:id', 'DELETE'] as const
}

export function getDeleteUserManagementOrganizationMembershipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserManagementOrganizationMembershipsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.organization_memberships)[':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.user_management.organization_memberships[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUserManagementOrganizationMembershipsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.user_management.organization_memberships)[':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.user_management.organization_memberships)[':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserManagementOrganizationMembershipsIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUserManagementOrganizationMembershipsIdDeactivateMutationKey() {
  return [
    'user_management',
    '/user_management/organization_memberships/:id/deactivate',
    'PUT',
  ] as const
}

export function getPutUserManagementOrganizationMembershipsIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.user_management.organization_memberships)[':id']['deactivate']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUserManagementOrganizationMembershipsIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.organization_memberships)[':id']['deactivate']['$put']
      >,
    ) {
      return parseResponse(
        client.user_management.organization_memberships[':id'].deactivate.$put(args, options),
      )
    },
  })
}

export function usePutUserManagementOrganizationMembershipsIdDeactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.user_management.organization_memberships)[':id']['deactivate']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserManagementOrganizationMembershipsIdDeactivateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUserManagementOrganizationMembershipsIdReactivateMutationKey() {
  return [
    'user_management',
    '/user_management/organization_memberships/:id/reactivate',
    'PUT',
  ] as const
}

export function getPutUserManagementOrganizationMembershipsIdReactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.user_management.organization_memberships)[':id']['reactivate']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUserManagementOrganizationMembershipsIdReactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.organization_memberships)[':id']['reactivate']['$put']
      >,
    ) {
      return parseResponse(
        client.user_management.organization_memberships[':id'].reactivate.$put(args, options),
      )
    },
  })
}

export function usePutUserManagementOrganizationMembershipsIdReactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.user_management.organization_memberships)[':id']['reactivate']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserManagementOrganizationMembershipsIdReactivateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementOrganizationMembershipsOmIdGroupsQueryKey(
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

export function getUserManagementOrganizationMembershipsOmIdGroupsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserManagementOrganizationMembershipsOmIdGroupsQueryKey>
  >({
    queryKey: getUserManagementOrganizationMembershipsOmIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.organization_memberships[':omId'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementOrganizationMembershipsOmIdGroups<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserManagementOrganizationMembershipsOmIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementOrganizationMembershipsOmIdGroupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementOrganizationMembershipsOmIdGroups<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserManagementOrganizationMembershipsOmIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementOrganizationMembershipsOmIdGroupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementPasswordResetMutationKey() {
  return ['user_management', '/user_management/password_reset', 'POST'] as const
}

export function getPostUserManagementPasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.password_reset.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.password_reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementPasswordResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_management.password_reset.$post>) {
      return parseResponse(client.user_management.password_reset.$post(args, options))
    },
  })
}

export function usePostUserManagementPasswordReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.password_reset.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.password_reset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementPasswordResetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementPasswordResetConfirmMutationKey() {
  return ['user_management', '/user_management/password_reset/confirm', 'POST'] as const
}

export function getPostUserManagementPasswordResetConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.password_reset.confirm.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.password_reset.confirm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementPasswordResetConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.user_management.password_reset.confirm.$post>,
    ) {
      return parseResponse(client.user_management.password_reset.confirm.$post(args, options))
    },
  })
}

export function usePostUserManagementPasswordResetConfirm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.password_reset.confirm.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.password_reset.confirm.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementPasswordResetConfirmMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementPasswordResetIdQueryKey(
  args: InferRequestType<(typeof client.user_management.password_reset)[':id']['$get']>,
) {
  return ['user_management', '/user_management/password_reset/:id', args] as const
}

export function getUserManagementPasswordResetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.password_reset)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.password_reset)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.password_reset)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementPasswordResetIdQueryKey>
  >({
    queryKey: getUserManagementPasswordResetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.password_reset[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementPasswordResetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.password_reset)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.password_reset)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.password_reset)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementPasswordResetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementPasswordResetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementPasswordResetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.password_reset)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.password_reset)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.password_reset)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementPasswordResetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementPasswordResetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementRadarChallengesMutationKey() {
  return ['user_management', '/user_management/radar_challenges', 'POST'] as const
}

export function getPostUserManagementRadarChallengesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.radar_challenges.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.radar_challenges.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementRadarChallengesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_management.radar_challenges.$post>) {
      return parseResponse(client.user_management.radar_challenges.$post(args, options))
    },
  })
}

export function usePostUserManagementRadarChallenges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.radar_challenges.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.radar_challenges.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementRadarChallengesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementRadarChallengesIdQueryKey(
  args: InferRequestType<(typeof client.user_management.radar_challenges)[':id']['$get']>,
) {
  return ['user_management', '/user_management/radar_challenges/:id', args] as const
}

export function getUserManagementRadarChallengesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.radar_challenges)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.radar_challenges)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.radar_challenges)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementRadarChallengesIdQueryKey>
  >({
    queryKey: getUserManagementRadarChallengesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.radar_challenges[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementRadarChallengesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.radar_challenges)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.radar_challenges)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.radar_challenges)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementRadarChallengesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementRadarChallengesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementRadarChallengesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.radar_challenges)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.radar_challenges)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.radar_challenges)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementRadarChallengesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementRadarChallengesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserManagementRedirectUrisQueryKey(
  args: InferRequestType<typeof client.user_management.redirect_uris.$get>,
) {
  return ['user_management', '/user_management/redirect_uris', args] as const
}

export function getUserManagementRedirectUrisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.redirect_uris.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementRedirectUrisQueryKey>
  >({
    queryKey: getUserManagementRedirectUrisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.redirect_uris.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementRedirectUris<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.redirect_uris.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementRedirectUrisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementRedirectUrisQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementRedirectUris<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.redirect_uris.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementRedirectUrisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementRedirectUrisQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementRedirectUrisMutationKey() {
  return ['user_management', '/user_management/redirect_uris', 'POST'] as const
}

export function getPostUserManagementRedirectUrisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.redirect_uris.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.redirect_uris.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementRedirectUrisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_management.redirect_uris.$post>) {
      return parseResponse(client.user_management.redirect_uris.$post(args, options))
    },
  })
}

export function usePostUserManagementRedirectUris<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.redirect_uris.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.redirect_uris.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementRedirectUrisMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserManagementRedirectUrisIdMutationKey() {
  return ['user_management', '/user_management/redirect_uris/:id', 'DELETE'] as const
}

export function getDeleteUserManagementRedirectUrisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.redirect_uris)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.user_management.redirect_uris)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserManagementRedirectUrisIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_management.redirect_uris)[':id']['$delete']>,
    ) {
      return parseResponse(client.user_management.redirect_uris[':id'].$delete(args, options))
    },
  })
}

export function useDeleteUserManagementRedirectUrisId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user_management.redirect_uris)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.user_management.redirect_uris)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserManagementRedirectUrisIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementSessionsLogoutQueryKey(
  args: InferRequestType<typeof client.user_management.sessions.logout.$get>,
) {
  return ['user_management', '/user_management/sessions/logout', args] as const
}

export function getUserManagementSessionsLogoutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.sessions.logout.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementSessionsLogoutQueryKey>
  >({
    queryKey: getUserManagementSessionsLogoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.sessions.logout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementSessionsLogout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.sessions.logout.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementSessionsLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementSessionsLogoutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementSessionsLogout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.sessions.logout.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementSessionsLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementSessionsLogoutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementSessionsRevokeMutationKey() {
  return ['user_management', '/user_management/sessions/revoke', 'POST'] as const
}

export function getPostUserManagementSessionsRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_management.sessions.revoke.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.sessions.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementSessionsRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_management.sessions.revoke.$post>) {
      return parseResponse(client.user_management.sessions.revoke.$post(args, options))
    },
  })
}

export function usePostUserManagementSessionsRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.user_management.sessions.revoke.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.sessions.revoke.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementSessionsRevokeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementUsersQueryKey(
  args: InferRequestType<typeof client.user_management.users.$get>,
) {
  return ['user_management', '/user_management/users', args] as const
}

export function getUserManagementUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.users.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersQueryKey>
  >({
    queryKey: getUserManagementUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUserManagementUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserManagementUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserManagementUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user_management.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserManagementUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUserManagementUsersMutationKey() {
  return ['user_management', '/user_management/users', 'POST'] as const
}

export function getPostUserManagementUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user_management.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_management.users.$post>) {
      return parseResponse(client.user_management.users.$post(args, options))
    },
  })
}

export function usePostUserManagementUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user_management.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementUsersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementUsersExternalIdExternalIdQueryKey(
  args: InferRequestType<(typeof client.user_management.users.external_id)[':external_id']['$get']>,
) {
  return ['user_management', '/user_management/users/external_id/:external_id', args] as const
}

export function getUserManagementUsersExternalIdExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user_management.users.external_id)[':external_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users.external_id)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user_management.users.external_id)[':external_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersExternalIdExternalIdQueryKey>
  >({
    queryKey: getUserManagementUsersExternalIdExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.users.external_id[':external_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementUsersExternalIdExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user_management.users.external_id)[':external_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users.external_id)[':external_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.user_management.users.external_id)[':external_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersExternalIdExternalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementUsersExternalIdExternalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementUsersExternalIdExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user_management.users.external_id)[':external_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users.external_id)[':external_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.user_management.users.external_id)[':external_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersExternalIdExternalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementUsersExternalIdExternalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserManagementUsersIdQueryKey(
  args: InferRequestType<(typeof client.user_management.users)[':id']['$get']>,
) {
  return ['user_management', '/user_management/users/:id', args] as const
}

export function getUserManagementUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.users)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersIdQueryKey>
  >({
    queryKey: getUserManagementUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.users[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.users)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementUsersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.users)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementUsersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUserManagementUsersIdMutationKey() {
  return ['user_management', '/user_management/users/:id', 'PUT'] as const
}

export function getPutUserManagementUsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.users)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_management.users)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserManagementUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user_management.users)[':id']['$put']>) {
      return parseResponse(client.user_management.users[':id'].$put(args, options))
    },
  })
}

export function usePutUserManagementUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.users)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user_management.users)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserManagementUsersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserManagementUsersIdMutationKey() {
  return ['user_management', '/user_management/users/:id', 'DELETE'] as const
}

export function getDeleteUserManagementUsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.users)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_management.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserManagementUsersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_management.users)[':id']['$delete']>,
    ) {
      return parseResponse(client.user_management.users[':id'].$delete(args, options))
    },
  })
}

export function useDeleteUserManagementUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.users)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user_management.users)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserManagementUsersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementUsersIdEmailChangeConfirmMutationKey() {
  return ['user_management', '/user_management/users/:id/email_change/confirm', 'POST'] as const
}

export function getPostUserManagementUsersIdEmailChangeConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.user_management.users)[':id']['email_change']['confirm']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementUsersIdEmailChangeConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.users)[':id']['email_change']['confirm']['$post']
      >,
    ) {
      return parseResponse(
        client.user_management.users[':id'].email_change.confirm.$post(args, options),
      )
    },
  })
}

export function usePostUserManagementUsersIdEmailChangeConfirm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.user_management.users)[':id']['email_change']['confirm']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementUsersIdEmailChangeConfirmMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementUsersIdEmailChangeSendMutationKey() {
  return ['user_management', '/user_management/users/:id/email_change/send', 'POST'] as const
}

export function getPostUserManagementUsersIdEmailChangeSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.user_management.users)[':id']['email_change']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementUsersIdEmailChangeSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.users)[':id']['email_change']['send']['$post']
      >,
    ) {
      return parseResponse(
        client.user_management.users[':id'].email_change.send.$post(args, options),
      )
    },
  })
}

export function usePostUserManagementUsersIdEmailChangeSend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.user_management.users)[':id']['email_change']['send']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementUsersIdEmailChangeSendMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementUsersIdEmailVerificationConfirmMutationKey() {
  return [
    'user_management',
    '/user_management/users/:id/email_verification/confirm',
    'POST',
  ] as const
}

export function getPostUserManagementUsersIdEmailVerificationConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.user_management.users)[':id']['email_verification']['confirm']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementUsersIdEmailVerificationConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.users)[':id']['email_verification']['confirm']['$post']
      >,
    ) {
      return parseResponse(
        client.user_management.users[':id'].email_verification.confirm.$post(args, options),
      )
    },
  })
}

export function usePostUserManagementUsersIdEmailVerificationConfirm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.user_management.users)[':id']['email_verification']['confirm']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementUsersIdEmailVerificationConfirmMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementUsersIdEmailVerificationSendMutationKey() {
  return ['user_management', '/user_management/users/:id/email_verification/send', 'POST'] as const
}

export function getPostUserManagementUsersIdEmailVerificationSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.user_management.users)[':id']['email_verification']['send']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementUsersIdEmailVerificationSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.users)[':id']['email_verification']['send']['$post']
      >,
    ) {
      return parseResponse(
        client.user_management.users[':id'].email_verification.send.$post(args, options),
      )
    },
  })
}

export function usePostUserManagementUsersIdEmailVerificationSend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.user_management.users)[':id']['email_verification']['send']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementUsersIdEmailVerificationSendMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementUsersIdIdentitiesQueryKey(
  args: InferRequestType<(typeof client.user_management.users)[':id']['identities']['$get']>,
) {
  return ['user_management', '/user_management/users/:id/identities', args] as const
}

export function getUserManagementUsersIdIdentitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':id']['identities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['identities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.users)[':id']['identities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersIdIdentitiesQueryKey>
  >({
    queryKey: getUserManagementUsersIdIdentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.users[':id'].identities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementUsersIdIdentities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':id']['identities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['identities']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.users)[':id']['identities']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersIdIdentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementUsersIdIdentitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementUsersIdIdentities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':id']['identities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['identities']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.users)[':id']['identities']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersIdIdentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementUsersIdIdentitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserManagementUsersIdSessionsQueryKey(
  args: InferRequestType<(typeof client.user_management.users)[':id']['sessions']['$get']>,
) {
  return ['user_management', '/user_management/users/:id/sessions', args] as const
}

export function getUserManagementUsersIdSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersIdSessionsQueryKey>
  >({
    queryKey: getUserManagementUsersIdSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.users[':id'].sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementUsersIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['sessions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersIdSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementUsersIdSessionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementUsersIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':id']['sessions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersIdSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementUsersIdSessionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserManagementUsersUserIdApiKeysQueryKey(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>,
) {
  return ['user_management', '/user_management/users/:userId/api_keys', args] as const
}

export function getUserManagementUsersUserIdApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersUserIdApiKeysQueryKey>
  >({
    queryKey: getUserManagementUsersUserIdApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.users[':userId'].api_keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementUsersUserIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserIdApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementUsersUserIdApiKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementUsersUserIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserIdApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementUsersUserIdApiKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementUsersUserIdApiKeysMutationKey() {
  return ['user_management', '/user_management/users/:userId/api_keys', 'POST'] as const
}

export function getPostUserManagementUsersUserIdApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementUsersUserIdApiKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$post']>,
    ) {
      return parseResponse(client.user_management.users[':userId'].api_keys.$post(args, options))
    },
  })
}

export function usePostUserManagementUsersUserIdApiKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementUsersUserIdApiKeysMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementUsersUserIdFeatureFlagsQueryKey(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>,
) {
  return ['user_management', '/user_management/users/:userId/feature-flags', args] as const
}

export function getUserManagementUsersUserIdFeatureFlagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersUserIdFeatureFlagsQueryKey>
  >({
    queryKey: getUserManagementUsersUserIdFeatureFlagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.users[':userId']['feature-flags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementUsersUserIdFeatureFlags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.user_management.users)[':userId']['feature-flags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserIdFeatureFlagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementUsersUserIdFeatureFlagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementUsersUserIdFeatureFlags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.user_management.users)[':userId']['feature-flags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserIdFeatureFlagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementUsersUserIdFeatureFlagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserManagementUsersUserIdAuthorizedApplicationsQueryKey(
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

export function getUserManagementUsersUserIdAuthorizedApplicationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersUserIdAuthorizedApplicationsQueryKey>
  >({
    queryKey: getUserManagementUsersUserIdAuthorizedApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.users[':user_id'].authorized_applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementUsersUserIdAuthorizedApplications<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserIdAuthorizedApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementUsersUserIdAuthorizedApplicationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementUsersUserIdAuthorizedApplications<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserIdAuthorizedApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementUsersUserIdAuthorizedApplicationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUserManagementUsersUserIdAuthorizedApplicationsApplicationIdMutationKey() {
  return [
    'user_management',
    '/user_management/users/:user_id/authorized_applications/:application_id',
    'DELETE',
  ] as const
}

export function getDeleteUserManagementUsersUserIdAuthorizedApplicationsApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['authorized_applications'][':application_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserManagementUsersUserIdAuthorizedApplicationsApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.users)[':user_id']['authorized_applications'][':application_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.user_management.users[':user_id'].authorized_applications[':application_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUserManagementUsersUserIdAuthorizedApplicationsApplicationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.user_management.users)[':user_id']['authorized_applications'][':application_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteUserManagementUsersUserIdAuthorizedApplicationsApplicationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementUsersUserIdConnectedAccountsSlugQueryKey(
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

export function getUserManagementUsersUserIdConnectedAccountsSlugQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersUserIdConnectedAccountsSlugQueryKey>
  >({
    queryKey: getUserManagementUsersUserIdConnectedAccountsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.users[':user_id'].connected_accounts[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementUsersUserIdConnectedAccountsSlug<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserIdConnectedAccountsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementUsersUserIdConnectedAccountsSlugQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementUsersUserIdConnectedAccountsSlug<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserIdConnectedAccountsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementUsersUserIdConnectedAccountsSlugQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUserManagementUsersUserIdConnectedAccountsSlugMutationKey() {
  return [
    'user_management',
    '/user_management/users/:user_id/connected_accounts/:slug',
    'PUT',
  ] as const
}

export function getPutUserManagementUsersUserIdConnectedAccountsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUserManagementUsersUserIdConnectedAccountsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$put']
      >,
    ) {
      return parseResponse(
        client.user_management.users[':user_id'].connected_accounts[':slug'].$put(args, options),
      )
    },
  })
}

export function usePutUserManagementUsersUserIdConnectedAccountsSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserManagementUsersUserIdConnectedAccountsSlugMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementUsersUserIdConnectedAccountsSlugMutationKey() {
  return [
    'user_management',
    '/user_management/users/:user_id/connected_accounts/:slug',
    'POST',
  ] as const
}

export function getPostUserManagementUsersUserIdConnectedAccountsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementUsersUserIdConnectedAccountsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$post']
      >,
    ) {
      return parseResponse(
        client.user_management.users[':user_id'].connected_accounts[':slug'].$post(args, options),
      )
    },
  })
}

export function usePostUserManagementUsersUserIdConnectedAccountsSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementUsersUserIdConnectedAccountsSlugMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserManagementUsersUserIdConnectedAccountsSlugMutationKey() {
  return [
    'user_management',
    '/user_management/users/:user_id/connected_accounts/:slug',
    'DELETE',
  ] as const
}

export function getDeleteUserManagementUsersUserIdConnectedAccountsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserManagementUsersUserIdConnectedAccountsSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$delete']
      >,
    ) {
      return parseResponse(
        client.user_management.users[':user_id'].connected_accounts[':slug'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUserManagementUsersUserIdConnectedAccountsSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserManagementUsersUserIdConnectedAccountsSlugMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementUsersUserIdDataProvidersQueryKey(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['data_providers']['$get']
  >,
) {
  return ['user_management', '/user_management/users/:user_id/data_providers', args] as const
}

export function getUserManagementUsersUserIdDataProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user_management.users)[':user_id']['data_providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['data_providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user_management.users)[':user_id']['data_providers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersUserIdDataProvidersQueryKey>
  >({
    queryKey: getUserManagementUsersUserIdDataProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.users[':user_id'].data_providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementUsersUserIdDataProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user_management.users)[':user_id']['data_providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['data_providers']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserIdDataProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementUsersUserIdDataProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementUsersUserIdDataProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user_management.users)[':user_id']['data_providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['data_providers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserIdDataProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementUsersUserIdDataProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserManagementUsersUserlandUserIdAuthFactorsQueryKey(
  args: InferRequestType<
    (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
  >,
) {
  return ['user_management', '/user_management/users/:userlandUserId/auth_factors', args] as const
}

export function getUserManagementUsersUserlandUserIdAuthFactorsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersUserlandUserIdAuthFactorsQueryKey>
  >({
    queryKey: getUserManagementUsersUserlandUserIdAuthFactorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.users[':userlandUserId'].auth_factors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementUsersUserlandUserIdAuthFactors<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserlandUserIdAuthFactorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementUsersUserlandUserIdAuthFactorsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementUsersUserlandUserIdAuthFactors<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserManagementUsersUserlandUserIdAuthFactorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementUsersUserlandUserIdAuthFactorsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementUsersUserlandUserIdAuthFactorsMutationKey() {
  return ['user_management', '/user_management/users/:userlandUserId/auth_factors', 'POST'] as const
}

export function getPostUserManagementUsersUserlandUserIdAuthFactorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementUsersUserlandUserIdAuthFactorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$post']
      >,
    ) {
      return parseResponse(
        client.user_management.users[':userlandUserId'].auth_factors.$post(args, options),
      )
    },
  })
}

export function usePostUserManagementUsersUserlandUserIdAuthFactors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementUsersUserlandUserIdAuthFactorsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserManagementWaitlistEntriesIdMutationKey() {
  return ['user_management', '/user_management/waitlist_entries/:id', 'DELETE'] as const
}

export function getDeleteUserManagementWaitlistEntriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_management.waitlist_entries)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserManagementWaitlistEntriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['$delete']>,
    ) {
      return parseResponse(client.user_management.waitlist_entries[':id'].$delete(args, options))
    },
  })
}

export function useDeleteUserManagementWaitlistEntriesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_management.waitlist_entries)[':id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserManagementWaitlistEntriesIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementWaitlistEntriesIdApproveMutationKey() {
  return ['user_management', '/user_management/waitlist_entries/:id/approve', 'POST'] as const
}

export function getPostUserManagementWaitlistEntriesIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementWaitlistEntriesIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.waitlist_entries)[':id']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.user_management.waitlist_entries[':id'].approve.$post(args, options),
      )
    },
  })
}

export function usePostUserManagementWaitlistEntriesIdApprove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.user_management.waitlist_entries)[':id']['approve']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.user_management.waitlist_entries)[':id']['approve']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementWaitlistEntriesIdApproveMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserManagementWaitlistEntriesIdDenyMutationKey() {
  return ['user_management', '/user_management/waitlist_entries/:id/deny', 'POST'] as const
}

export function getPostUserManagementWaitlistEntriesIdDenyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['deny']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementWaitlistEntriesIdDenyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_management.waitlist_entries)[':id']['deny']['$post']
      >,
    ) {
      return parseResponse(client.user_management.waitlist_entries[':id'].deny.$post(args, options))
    },
  })
}

export function usePostUserManagementWaitlistEntriesIdDeny<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['deny']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementWaitlistEntriesIdDenyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserManagementWaitlistsQueryKey() {
  return ['user_management', '/user_management/waitlists'] as const
}

export function getUserManagementWaitlistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.waitlists.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.waitlists.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementWaitlistsQueryKey>
  >({
    queryKey: getUserManagementWaitlistsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.waitlists.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementWaitlists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.waitlists.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_management.waitlists.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementWaitlistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserManagementWaitlistsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserManagementWaitlists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.waitlists.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user_management.waitlists.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementWaitlistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserManagementWaitlistsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUserManagementWaitlistsIdQueryKey(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['$get']>,
) {
  return ['user_management', '/user_management/waitlists/:id', args] as const
}

export function getUserManagementWaitlistsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementWaitlistsIdQueryKey>
  >({
    queryKey: getUserManagementWaitlistsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.waitlists[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementWaitlistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementWaitlistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementWaitlistsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementWaitlistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementWaitlistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementWaitlistsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserManagementWaitlistsIdEntriesQueryKey(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>,
) {
  return ['user_management', '/user_management/waitlists/:id/entries', args] as const
}

export function getUserManagementWaitlistsIdEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementWaitlistsIdEntriesQueryKey>
  >({
    queryKey: getUserManagementWaitlistsIdEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_management.waitlists[':id'].entries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserManagementWaitlistsIdEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementWaitlistsIdEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserManagementWaitlistsIdEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserManagementWaitlistsIdEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserManagementWaitlistsIdEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserManagementWaitlistsIdEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserManagementWaitlistsIdEntriesMutationKey() {
  return ['user_management', '/user_management/waitlists/:id/entries', 'POST'] as const
}

export function getPostUserManagementWaitlistsIdEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserManagementWaitlistsIdEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$post']>,
    ) {
      return parseResponse(client.user_management.waitlists[':id'].entries.$post(args, options))
    },
  })
}

export function usePostUserManagementWaitlistsIdEntries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserManagementWaitlistsIdEntriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVaultV1KeysDataKeyMutationKey() {
  return ['vault', '/vault/v1/keys/data-key', 'POST'] as const
}

export function getPostVaultV1KeysDataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vault.v1.keys)['data-key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vault.v1.keys)['data-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultV1KeysDataKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vault.v1.keys)['data-key']['$post']>) {
      return parseResponse(client.vault.v1.keys['data-key'].$post(args, options))
    },
  })
}

export function usePostVaultV1KeysDataKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vault.v1.keys)['data-key']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vault.v1.keys)['data-key']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVaultV1KeysDataKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVaultV1KeysDecryptMutationKey() {
  return ['vault', '/vault/v1/keys/decrypt', 'POST'] as const
}

export function getPostVaultV1KeysDecryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.keys.decrypt.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.vault.v1.keys.decrypt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultV1KeysDecryptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vault.v1.keys.decrypt.$post>) {
      return parseResponse(client.vault.v1.keys.decrypt.$post(args, options))
    },
  })
}

export function usePostVaultV1KeysDecrypt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.keys.decrypt.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.vault.v1.keys.decrypt.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVaultV1KeysDecryptMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVaultV1KeysRekeyMutationKey() {
  return ['vault', '/vault/v1/keys/rekey', 'POST'] as const
}

export function getPostVaultV1KeysRekeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.keys.rekey.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vault.v1.keys.rekey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultV1KeysRekeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vault.v1.keys.rekey.$post>) {
      return parseResponse(client.vault.v1.keys.rekey.$post(args, options))
    },
  })
}

export function usePostVaultV1KeysRekey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.keys.rekey.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.vault.v1.keys.rekey.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVaultV1KeysRekeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVaultV1KvQueryKey(args: InferRequestType<typeof client.vault.v1.kv.$get>) {
  return ['vault', '/vault/v1/kv', args] as const
}

export function getVaultV1KvQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vault.v1.kv.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVaultV1KvQueryKey>
  >({
    queryKey: getVaultV1KvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.v1.kv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVaultV1Kv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vault.v1.kv.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVaultV1KvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVaultV1KvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVaultV1Kv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vault.v1.kv.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVaultV1KvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVaultV1KvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVaultV1KvMutationKey() {
  return ['vault', '/vault/v1/kv', 'POST'] as const
}

export function getPostVaultV1KvMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$post>>>>>,
    TError,
    InferRequestType<typeof client.vault.v1.kv.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultV1KvMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vault.v1.kv.$post>) {
      return parseResponse(client.vault.v1.kv.$post(args, options))
    },
  })
}

export function usePostVaultV1Kv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.vault.v1.kv.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVaultV1KvMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVaultV1KvNameNameQueryKey(
  args: InferRequestType<(typeof client.vault.v1.kv.name)[':name']['$get']>,
) {
  return ['vault', '/vault/v1/kv/name/:name', args] as const
}

export function getVaultV1KvNameNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv.name)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultV1KvNameNameQueryKey>
  >({
    queryKey: getVaultV1KvNameNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.v1.kv.name[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVaultV1KvNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv.name)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultV1KvNameNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVaultV1KvNameNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVaultV1KvNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv.name)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultV1KvNameNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVaultV1KvNameNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVaultV1KvIdQueryKey(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$get']>,
) {
  return ['vault', '/vault/v1/kv/:id', args] as const
}

export function getVaultV1KvIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultV1KvIdQueryKey>
  >({
    queryKey: getVaultV1KvIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.v1.kv[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVaultV1KvId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultV1KvIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVaultV1KvIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVaultV1KvId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultV1KvIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVaultV1KvIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutVaultV1KvIdMutationKey() {
  return ['vault', '/vault/v1/kv/:id', 'PUT'] as const
}

export function getPutVaultV1KvIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.vault.v1.kv)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVaultV1KvIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$put']>) {
      return parseResponse(client.vault.v1.kv[':id'].$put(args, options))
    },
  })
}

export function usePutVaultV1KvId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.vault.v1.kv)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVaultV1KvIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteVaultV1KvIdMutationKey() {
  return ['vault', '/vault/v1/kv/:id', 'DELETE'] as const
}

export function getDeleteVaultV1KvIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.vault.v1.kv)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVaultV1KvIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$delete']>) {
      return parseResponse(client.vault.v1.kv[':id'].$delete(args, options))
    },
  })
}

export function useDeleteVaultV1KvId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.vault.v1.kv)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVaultV1KvIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVaultV1KvIdMetadataQueryKey(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>,
) {
  return ['vault', '/vault/v1/kv/:id/metadata', args] as const
}

export function getVaultV1KvIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultV1KvIdMetadataQueryKey>
  >({
    queryKey: getVaultV1KvIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.v1.kv[':id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVaultV1KvIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultV1KvIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVaultV1KvIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVaultV1KvIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultV1KvIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVaultV1KvIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVaultV1KvIdVersionsQueryKey(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>,
) {
  return ['vault', '/vault/v1/kv/:id/versions', args] as const
}

export function getVaultV1KvIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultV1KvIdVersionsQueryKey>
  >({
    queryKey: getVaultV1KvIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.v1.kv[':id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVaultV1KvIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultV1KvIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVaultV1KvIdVersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVaultV1KvIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultV1KvIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVaultV1KvIdVersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWebhookEndpointsQueryKey(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
) {
  return ['webhook_endpoints', '/webhook_endpoints', args] as const
}

export function getWebhookEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhook_endpoints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEndpointsQueryKey>
  >({
    queryKey: getWebhookEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook_endpoints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhookEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhookEndpointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhookEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhookEndpointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWebhookEndpointsMutationKey() {
  return ['webhook_endpoints', '/webhook_endpoints', 'POST'] as const
}

export function getPostWebhookEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhook_endpoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhook_endpoints.$post>) {
      return parseResponse(client.webhook_endpoints.$post(args, options))
    },
  })
}

export function usePostWebhookEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.webhook_endpoints.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhookEndpointsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWebhookEndpointsIdMutationKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:id', 'DELETE'] as const
}

export function getDeleteWebhookEndpointsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhook_endpoints)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhookEndpointsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhook_endpoints)[':id']['$delete']>) {
      return parseResponse(client.webhook_endpoints[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhookEndpointsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhook_endpoints)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.webhook_endpoints)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhookEndpointsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchWebhookEndpointsIdMutationKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:id', 'PATCH'] as const
}

export function getPatchWebhookEndpointsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook_endpoints)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhookEndpointsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhook_endpoints)[':id']['$patch']>) {
      return parseResponse(client.webhook_endpoints[':id'].$patch(args, options))
    },
  })
}

export function usePatchWebhookEndpointsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook_endpoints)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhook_endpoints)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWebhookEndpointsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWidgetsTokenMutationKey() {
  return ['widgets', '/widgets/token', 'POST'] as const
}

export function getPostWidgetsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.widgets.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.widgets.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWidgetsTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.widgets.token.$post>) {
      return parseResponse(client.widgets.token.$post(args, options))
    },
  })
}

export function usePostWidgetsToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.widgets.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.widgets.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWidgetsTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
