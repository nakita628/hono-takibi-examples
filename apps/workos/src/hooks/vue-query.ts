import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.blueprints.$get>>,
) {
  return ['agents', '/agents/blueprints', toValue(args)] as const
}

export function getAgentsBlueprintsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.blueprints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsBlueprintsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.blueprints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsBlueprints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.blueprints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>
            >
          >,
          ReturnType<typeof getAgentsBlueprintsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.blueprints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsBlueprintsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsBlueprintsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.blueprints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>
  >,
) {
  return ['agents', '/agents/blueprints/:agent_blueprint_id', toValue(args)] as const
}

export function getAgentsBlueprintsAgentBlueprintIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsBlueprintsAgentBlueprintIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.blueprints[':agent_blueprint_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAgentsBlueprintsAgentBlueprintIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsBlueprintsAgentBlueprintIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.blueprints[':agent_blueprint_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.instances.$get>>,
) {
  return ['agents', '/agents/instances', toValue(args)] as const
}

export function getAgentsInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>
            >
          >,
          ReturnType<typeof getAgentsInstancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsInstancesAgentInstanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$get']>
  >,
) {
  return ['agents', '/agents/instances/:agent_instance_id', toValue(args)] as const
}

export function getAgentsInstancesAgentInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsInstancesAgentInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.instances[':agent_instance_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.instances)[':agent_instance_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentsInstancesAgentInstanceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsInstancesAgentInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.instances[':agent_instance_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents.registrations)[':id']['$get']>>,
) {
  return ['agents', '/agents/registrations/:id', toValue(args)] as const
}

export function getAgentsRegistrationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents.registrations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsRegistrationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.registrations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsRegistrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents.registrations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.registrations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentsRegistrationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsRegistrationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.registrations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.sessions.$get>>,
) {
  return ['agents', '/agents/sessions', toValue(args)] as const
}

export function getAgentsSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.sessions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.sessions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>
            >
          >,
          ReturnType<typeof getAgentsSessionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsSessionsAgentInstanceSessionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>
  >,
) {
  return ['agents', '/agents/sessions/:agent_instance_session_id', toValue(args)] as const
}

export function getAgentsSessionsAgentInstanceSessionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSessionsAgentInstanceSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.sessions[':agent_instance_session_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAgentsSessionsAgentInstanceSessionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSessionsAgentInstanceSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.sessions[':agent_instance_session_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api_keys)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api_keys)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.audit_logs.actions.$get>>,
) {
  return ['audit_logs', '/audit_logs/actions', toValue(args)] as const
}

export function getAuditLogsActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audit_logs.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditLogsActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit_logs.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditLogsActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audit_logs.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>
            >
          >,
          ReturnType<typeof getAuditLogsActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit_logs.actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuditLogsActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditLogsActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit_logs.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuditLogsActionsActionNameSchemasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>
  >,
) {
  return ['audit_logs', '/audit_logs/actions/:actionName/schemas', toValue(args)] as const
}

export function getAuditLogsActionsActionNameSchemasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditLogsActionsActionNameSchemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit_logs.actions[':actionName'].schemas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAuditLogsActionsActionNameSchemasQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditLogsActionsActionNameSchemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit_logs.actions[':actionName'].schemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>
  >,
) {
  return ['audit_logs', '/audit_logs/exports/:auditLogExportId', toValue(args)] as const
}

export function getAuditLogsExportsAuditLogExportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditLogsExportsAuditLogExportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit_logs.exports[':auditLogExportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuditLogsExportsAuditLogExportIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditLogsExportsAuditLogExportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit_logs.exports[':auditLogExportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.auth.factors)[':id']['$get']>>,
) {
  return ['auth', '/auth/factors/:id', toValue(args)] as const
}

export function getAuthFactorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.auth.factors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthFactorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.factors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthFactorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.auth.factors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAuthFactorsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth.factors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthFactorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthFactorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.factors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.authorization.groups)[':group_id']['role_assignments']['$get']>
  >,
) {
  return [
    'authorization',
    '/authorization/groups/:group_id/role_assignments',
    toValue(args),
  ] as const
}

export function getAuthorizationGroupsGroupIdRoleAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.authorization.groups)[':group_id']['role_assignments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationGroupsGroupIdRoleAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.groups[':group_id'].role_assignments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.authorization.groups)[':group_id']['role_assignments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAuthorizationGroupsGroupIdRoleAssignmentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationGroupsGroupIdRoleAssignmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.groups[':group_id'].role_assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/groups/:group_id/role_assignments/:role_assignment_id',
    toValue(args),
  ] as const
}

export function getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.groups[':group_id'].role_assignments[':role_assignment_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.groups[':group_id'].role_assignments[':role_assignment_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/resources',
    toValue(args),
  ] as const
}

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.organization_memberships[':organization_membership_id'].resources.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.organization_memberships[
            ':organization_membership_id'
          ].resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/resources/:resource_id/permissions',
    toValue(args),
  ] as const
}

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.organization_memberships[':organization_membership_id'].resources[
          ':resource_id'
        ].permissions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.organization_memberships[':organization_membership_id'].resources[
            ':resource_id'
          ].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/resources/:resource_type_slug/:external_id/permissions',
    toValue(args),
  ] as const
}

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.organization_memberships[':organization_membership_id'].resources[
          ':resource_type_slug'
        ][':external_id'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.organization_memberships[':organization_membership_id'].resources[
            ':resource_type_slug'
          ][':external_id'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/organization_memberships/:organization_membership_id/role_assignments',
    toValue(args),
  ] as const
}

export function getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.organization_memberships[
          ':organization_membership_id'
        ].role_assignments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.organization_memberships[
            ':organization_membership_id'
          ].role_assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles',
    toValue(args),
  ] as const
}

export function getAuthorizationOrganizationsOrganizationIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationOrganizationsOrganizationIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.organizations[':organizationId'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAuthorizationOrganizationsOrganizationIdRolesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationOrganizationsOrganizationIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.organizations[':organizationId'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/organizations/:organizationId/roles/:slug',
    toValue(args),
  ] as const
}

export function getAuthorizationOrganizationsOrganizationIdRolesSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationOrganizationsOrganizationIdRolesSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.organizations[':organizationId'].roles[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAuthorizationOrganizationsOrganizationIdRolesSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationOrganizationsOrganizationIdRolesSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.organizations[':organizationId'].roles[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id',
    toValue(args),
  ] as const
}

export function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
          ':external_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
            ':external_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id/organization_memberships',
    toValue(args),
  ] as const
}

export function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
          ':external_id'
        ].organization_memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
            ':external_id'
          ].organization_memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id/role_assignments',
    toValue(args),
  ] as const
}

export function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
          ':external_id'
        ].role_assignments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
            ':external_id'
          ].role_assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthorizationPermissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorization.permissions.$get>>,
) {
  return ['authorization', '/authorization/permissions', toValue(args)] as const
}

export function getAuthorizationPermissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorization.permissions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthorizationPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorization.permissions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.authorization.permissions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.authorization.permissions.$get>>
              >
            >
          >,
          ReturnType<typeof getAuthorizationPermissionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.permissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.authorization.permissions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.authorization.permissions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.authorization.permissions)[':slug']['$get']>
  >,
) {
  return ['authorization', '/authorization/permissions/:slug', toValue(args)] as const
}

export function getAuthorizationPermissionsSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.authorization.permissions)[':slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationPermissionsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.permissions[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.authorization.permissions)[':slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorization.permissions)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthorizationPermissionsSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationPermissionsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.permissions[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorization.resources.$get>>,
) {
  return ['authorization', '/authorization/resources', toValue(args)] as const
}

export function getAuthorizationResourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorization.resources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthorizationResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorization.resources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
            >
          >,
          ReturnType<typeof getAuthorizationResourcesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.resources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.authorization.resources)[':resource_id']['$get']>
  >,
) {
  return ['authorization', '/authorization/resources/:resource_id', toValue(args)] as const
}

export function getAuthorizationResourcesResourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.authorization.resources)[':resource_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationResourcesResourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.resources[':resource_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.authorization.resources)[':resource_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorization.resources)[':resource_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthorizationResourcesResourceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationResourcesResourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.resources[':resource_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.authorization.resources)[':resource_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.authorization.resources)[':resource_id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/resources/:resource_id/organization_memberships',
    toValue(args),
  ] as const
}

export function getAuthorizationResourcesResourceIdOrganizationMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAuthorizationResourcesResourceIdOrganizationMembershipsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.resources[':resource_id'].organization_memberships.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAuthorizationResourcesResourceIdOrganizationMembershipsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAuthorizationResourcesResourceIdOrganizationMembershipsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.resources[':resource_id'].organization_memberships.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAuthorizationResourcesResourceIdRoleAssignmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
    >
  >,
) {
  return [
    'authorization',
    '/authorization/resources/:resource_id/role_assignments',
    toValue(args),
  ] as const
}

export function getAuthorizationResourcesResourceIdRoleAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationResourcesResourceIdRoleAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.resources[':resource_id'].role_assignments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAuthorizationResourcesResourceIdRoleAssignmentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationResourcesResourceIdRoleAssignmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.resources[':resource_id'].role_assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthorizationRolesQueryKey() {
  return ['authorization', '/authorization/roles'] as const
}

export function getAuthorizationRolesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthorizationRolesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.roles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthorizationRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>
            >
          >,
          ReturnType<typeof getAuthorizationRolesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthorizationRolesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.roles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authorization.roles)[':slug']['$get']>>,
) {
  return ['authorization', '/authorization/roles/:slug', toValue(args)] as const
}

export function getAuthorizationRolesSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authorization.roles)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationRolesSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorization.roles[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authorization.roles)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorization.roles)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthorizationRolesSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationRolesSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorization.roles[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.client.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.client.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.connect.applications.$get>>,
) {
  return ['connect', '/connect/applications', toValue(args)] as const
}

export function getConnectApplicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connect.applications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connect.applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connect.applications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>
            >
          >,
          ReturnType<typeof getConnectApplicationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConnectApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connect.applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connect.applications)[':id']['$get']>>,
) {
  return ['connect', '/connect/applications/:id', toValue(args)] as const
}

export function getConnectApplicationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connect.applications)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectApplicationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connect.applications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connect.applications)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connect.applications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectApplicationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectApplicationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connect.applications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>
  >,
) {
  return ['connect', '/connect/applications/:id/client_secrets', toValue(args)] as const
}

export function getConnectApplicationsIdClientSecretsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectApplicationsIdClientSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connect.applications[':id'].client_secrets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConnectApplicationsIdClientSecretsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectApplicationsIdClientSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connect.applications[':id'].client_secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
) {
  return ['connections', '/connections', toValue(args)] as const
}

export function getConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          ReturnType<typeof getConnectionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.connections.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']>
  >,
) {
  return [
    'connections',
    '/connections/:connectionId/saml_idp_signing_certs',
    toValue(args),
  ] as const
}

export function getConnectionsConnectionIdSamlIdpSigningCertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdSamlIdpSigningCertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connectionId'].saml_idp_signing_certs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getConnectionsConnectionIdSamlIdpSigningCertsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdSamlIdpSigningCertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connectionId'].saml_idp_signing_certs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
    >
  >,
) {
  return [
    'connections',
    '/connections/:connectionId/saml_sp_encryption_certs',
    toValue(args),
  ] as const
}

export function getConnectionsConnectionIdSamlSpEncryptionCertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdSamlSpEncryptionCertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connectionId'].saml_sp_encryption_certs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getConnectionsConnectionIdSamlSpEncryptionCertsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdSamlSpEncryptionCertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connectionId'].saml_sp_encryption_certs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']>
  >,
) {
  return ['connections', '/connections/:connectionId/saml_sp_signing_cert', toValue(args)] as const
}

export function getConnectionsConnectionIdSamlSpSigningCertQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdSamlSpSigningCertQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connectionId'].saml_sp_signing_cert.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getConnectionsConnectionIdSamlSpSigningCertQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdSamlSpSigningCertQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connectionId'].saml_sp_signing_cert.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':id']['$get']>>,
) {
  return ['connections', '/connections/:id', toValue(args)] as const
}

export function getConnectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getConnectionsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['data-integrations']['$get']>>,
) {
  return ['data-integrations', '/data-integrations', toValue(args)] as const
}

export function getDataIntegrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['data-integrations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-integrations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['data-integrations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataIntegrationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['data-integrations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-integrations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-integrations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-integrations']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['data-integrations'][':slug']['$get']>>,
) {
  return ['data-integrations', '/data-integrations/:slug', toValue(args)] as const
}

export function getDataIntegrationsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['data-integrations'][':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataIntegrationsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-integrations'][':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['data-integrations'][':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['data-integrations'][':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataIntegrationsSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataIntegrationsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-integrations'][':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-integrations'][':slug']['api-key']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-integrations'][':slug']['api-key']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$get']>
  >,
) {
  return ['data-integrations', '/data-integrations/:slug/organization', toValue(args)] as const
}

export function getDataIntegrationsSlugOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataIntegrationsSlugOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['data-integrations'][':slug'].organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['data-integrations'][':slug']['organization']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDataIntegrationsSlugOrganizationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataIntegrationsSlugOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['data-integrations'][':slug'].organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client)['data-integrations'][':slug']['organization']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getDirectoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.directories.$get>>,
) {
  return ['directories', '/directories', toValue(args)] as const
}

export function getDirectoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.directories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.directories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>
          >,
          ReturnType<typeof getDirectoriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDirectoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.directories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDirectoriesDirectoryIdGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['groups']['$get']>
  >,
) {
  return ['directories', '/directories/:directoryId/groups', toValue(args)] as const
}

export function getDirectoriesDirectoryIdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectoriesDirectoryIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directories[':directoryId'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.directories)[':directoryId']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDirectoriesDirectoryIdGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectoriesDirectoryIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.directories[':directoryId'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDirectoriesDirectoryIdGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>
  >,
) {
  return ['directories', '/directories/:directoryId/groups/:groupId', toValue(args)] as const
}

export function getDirectoriesDirectoryIdGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectoriesDirectoryIdGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directories[':directoryId'].groups[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getDirectoriesDirectoryIdGroupsGroupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectoriesDirectoryIdGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.directories[':directoryId'].groups[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDirectoriesDirectoryIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['users']['$get']>
  >,
) {
  return ['directories', '/directories/:directoryId/users', toValue(args)] as const
}

export function getDirectoriesDirectoryIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectoriesDirectoryIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directories[':directoryId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.directories)[':directoryId']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDirectoriesDirectoryIdUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectoriesDirectoryIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.directories[':directoryId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDirectoriesDirectoryIdUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>
  >,
) {
  return ['directories', '/directories/:directoryId/users/:userId', toValue(args)] as const
}

export function getDirectoriesDirectoryIdUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectoriesDirectoryIdUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directories[':directoryId'].users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.directories)[':directoryId']['users'][':userId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.directories)[':directoryId']['users'][':userId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDirectoriesDirectoryIdUsersUserIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectoriesDirectoryIdUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.directories[':directoryId'].users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDirectoriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directories)[':id']['$get']>>,
) {
  return ['directories', '/directories/:id', toValue(args)] as const
}

export function getDirectoriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directories)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directories)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDirectoriesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.directories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.directories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.directories)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.directories)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.directory_groups.$get>>,
) {
  return ['directory_groups', '/directory_groups', toValue(args)] as const
}

export function getDirectoryGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.directory_groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectoryGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directory_groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDirectoryGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.directory_groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>
            >
          >,
          ReturnType<typeof getDirectoryGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoryGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectoryGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.directory_groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDirectoryGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directory_groups)[':id']['$get']>>,
) {
  return ['directory_groups', '/directory_groups/:id', toValue(args)] as const
}

export function getDirectoryGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directory_groups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectoryGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directory_groups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDirectoryGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directory_groups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDirectoryGroupsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.directory_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoryGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectoryGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.directory_groups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDirectoryUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.directory_users.$get>>,
) {
  return ['directory_users', '/directory_users', toValue(args)] as const
}

export function getDirectoryUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.directory_users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectoryUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directory_users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDirectoryUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.directory_users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>
            >
          >,
          ReturnType<typeof getDirectoryUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directory_users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoryUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectoryUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.directory_users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDirectoryUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directory_users)[':id']['$get']>>,
) {
  return ['directory_users', '/directory_users/:id', toValue(args)] as const
}

export function getDirectoryUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directory_users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectoryUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directory_users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDirectoryUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directory_users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDirectoryUsersIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.directory_users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoryUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectoryUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.directory_users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeatureFlagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['feature-flags']['$get']>>,
) {
  return ['feature-flags', '/feature-flags', toValue(args)] as const
}

export function getFeatureFlagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['feature-flags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeatureFlagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['feature-flags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeatureFlags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['feature-flags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>
            >
          >,
          ReturnType<typeof getFeatureFlagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureFlagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeatureFlagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['feature-flags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeatureFlagsSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['feature-flags'][':slug']['$get']>>,
) {
  return ['feature-flags', '/feature-flags/:slug', toValue(args)] as const
}

export function getFeatureFlagsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['feature-flags'][':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeatureFlagsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['feature-flags'][':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeatureFlagsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['feature-flags'][':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFeatureFlagsSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-flags'][':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureFlagsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeatureFlagsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['feature-flags'][':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization_domains)[':id']['$get']>>,
) {
  return ['organization_domains', '/organization_domains/:id', toValue(args)] as const
}

export function getOrganizationDomainsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization_domains)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationDomainsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization_domains[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationDomainsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization_domains)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization_domains)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationDomainsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationDomainsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization_domains[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getOrganizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
) {
  return ['organizations', '/organizations', toValue(args)] as const
}

export function getOrganizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          ReturnType<typeof getOrganizationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organizations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations.external_id)[':external_id']['$get']>
  >,
) {
  return ['organizations', '/organizations/external_id/:external_id', toValue(args)] as const
}

export function getOrganizationsExternalIdExternalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations.external_id)[':external_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsExternalIdExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations.external_id[':external_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations.external_id)[':external_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations.external_id)[':external_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsExternalIdExternalIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsExternalIdExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations.external_id[':external_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['$get']>>,
) {
  return ['organizations', '/organizations/:id', toValue(args)] as const
}

export function getOrganizationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/audit_log_configuration', toValue(args)] as const
}

export function getOrganizationsIdAuditLogConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdAuditLogConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].audit_log_configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':id']['audit_log_configuration']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':id']['audit_log_configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdAuditLogConfigurationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdAuditLogConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].audit_log_configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdAuditLogsRetentionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/audit_logs_retention', toValue(args)] as const
}

export function getOrganizationsIdAuditLogsRetentionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdAuditLogsRetentionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].audit_logs_retention.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdAuditLogsRetentionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdAuditLogsRetentionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].audit_logs_retention.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/api_keys', toValue(args)] as const
}

export function getOrganizationsOrganizationIdApiKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].api_keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdApiKeysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].api_keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/data_integration_configurations',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].data_integration_configurations.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdDataIntegrationConfigurationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].data_integration_configurations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/feature-flags', toValue(args)] as const
}

export function getOrganizationsOrganizationIdFeatureFlagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdFeatureFlagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId']['feature-flags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getOrganizationsOrganizationIdFeatureFlagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdFeatureFlagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId']['feature-flags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/groups', toValue(args)] as const
}

export function getOrganizationsOrganizationIdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['groups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/groups/:groupId', toValue(args)] as const
}

export function getOrganizationsOrganizationIdGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].groups[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getOrganizationsOrganizationIdGroupsGroupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].groups[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationId/groups/:groupId/organization-memberships',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].groups[':groupId']['organization-memberships'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].groups[':groupId'][
            'organization-memberships'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id/authorized_applications',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdAuthorizedApplicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdAuthorizedApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].authorized_applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getOrganizationsOrganizationIdAuthorizedApplicationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdAuthorizedApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].authorized_applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdConnectedAccountsSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id/connected_accounts/:slug',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdConnectedAccountsSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdConnectedAccountsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].connected_accounts[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getOrganizationsOrganizationIdConnectedAccountsSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdConnectedAccountsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].connected_accounts[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['data_providers']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organization_id/data_providers', toValue(args)] as const
}

export function getOrganizationsOrganizationIdDataProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['data_providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdDataProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].data_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['data_providers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getOrganizationsOrganizationIdDataProvidersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdDataProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].data_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdItContactsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organization_id/it_contacts', toValue(args)] as const
}

export function getOrganizationsOrganizationIdItContactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdItContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].it_contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':organization_id']['it_contacts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':organization_id']['it_contacts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdItContactsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdItContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].it_contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id']['it_contacts']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.platform.teams.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.platform.teams.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform.teams)[':team_id']['$get']>>,
) {
  return ['platform', '/platform/teams/:team_id', toValue(args)] as const
}

export function getPlatformTeamsTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform.teams)[':team_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformTeamsTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.teams[':team_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformTeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform.teams)[':team_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.teams)[':team_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformTeamsTeamIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformTeamsTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.teams[':team_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.radar.attempts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.radar.attempts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSsoAuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.authorize.$get>>,
) {
  return ['sso', '/sso/authorize', toValue(args)] as const
}

export function getSsoAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSsoAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sso.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSsoAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
          >,
          ReturnType<typeof getSsoAuthorizeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSsoAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSsoAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sso.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSsoJwksClientIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sso.jwks)[':clientId']['$get']>>,
) {
  return ['sso', '/sso/jwks/:clientId', toValue(args)] as const
}

export function getSsoJwksClientIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sso.jwks)[':clientId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSsoJwksClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sso.jwks[':clientId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSsoJwksClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sso.jwks)[':clientId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSsoJwksClientIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sso.jwks)[':clientId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSsoJwksClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSsoJwksClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sso.jwks[':clientId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSsoLogoutQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.logout.$get>>,
) {
  return ['sso', '/sso/logout', toValue(args)] as const
}

export function getSsoLogoutQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.logout.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSsoLogoutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sso.logout.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSsoLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.logout.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>
          >,
          ReturnType<typeof getSsoLogoutQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSsoLogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSsoLogoutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sso.logout.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSsoProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSsoProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sso.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSsoProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>
          >,
          ReturnType<typeof getSsoProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSsoProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSsoProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sso.profile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sso.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.user_management.authkit_oauth_resources.$get>
  >,
) {
  return ['user_management', '/user_management/authkit_oauth_resources', toValue(args)] as const
}

export function getUserManagementAuthkitOauthResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.user_management.authkit_oauth_resources.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementAuthkitOauthResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.authkit_oauth_resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.user_management.authkit_oauth_resources.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_management.authkit_oauth_resources.$get>>
              >
            >
          >,
          ReturnType<typeof getUserManagementAuthkitOauthResourcesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementAuthkitOauthResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.authkit_oauth_resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.user_management.authkit_oauth_resources)[':id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.authorize.$get>>,
) {
  return ['user_management', '/user_management/authorize', toValue(args)] as const
}

export function getUserManagementAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserManagementAuthorize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_management.authorize.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_management.authorize.$get>>
              >
            >
          >,
          ReturnType<typeof getUserManagementAuthorizeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.authorize.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.cors_origins.$get>>,
) {
  return ['user_management', '/user_management/cors_origins', toValue(args)] as const
}

export function getUserManagementCorsOriginsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.cors_origins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementCorsOriginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.cors_origins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserManagementCorsOrigins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.cors_origins.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>
              >
            >
          >,
          ReturnType<typeof getUserManagementCorsOriginsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.cors_origins.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementCorsOriginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementCorsOriginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.cors_origins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.email_verification)[':id']['$get']>
  >,
) {
  return ['user_management', '/user_management/email_verification/:id', toValue(args)] as const
}

export function getUserManagementEmailVerificationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.email_verification)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementEmailVerificationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.email_verification[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.email_verification)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_management.email_verification)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserManagementEmailVerificationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementEmailVerificationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.email_verification[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserManagementInvitationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.invitations.$get>>,
) {
  return ['user_management', '/user_management/invitations', toValue(args)] as const
}

export function getUserManagementInvitationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.invitations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.invitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserManagementInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.invitations.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_management.invitations.$get>>
              >
            >
          >,
          ReturnType<typeof getUserManagementInvitationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.invitations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.invitations.by_token)[':token']['$get']>
  >,
) {
  return ['user_management', '/user_management/invitations/by_token/:token', toValue(args)] as const
}

export function getUserManagementInvitationsByTokenTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.invitations.by_token)[':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementInvitationsByTokenTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.invitations.by_token[':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.invitations.by_token)[':token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_management.invitations.by_token)[':token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserManagementInvitationsByTokenTokenQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementInvitationsByTokenTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.invitations.by_token[':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserManagementInvitationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.invitations)[':id']['$get']>
  >,
) {
  return ['user_management', '/user_management/invitations/:id', toValue(args)] as const
}

export function getUserManagementInvitationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.invitations)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementInvitationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.invitations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.invitations)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user_management.invitations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserManagementInvitationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementInvitationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.invitations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUserManagementJwtTemplateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserManagementJwtTemplateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.jwt_template.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>
              >
            >
          >,
          ReturnType<typeof getUserManagementJwtTemplateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.jwt_template.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementJwtTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserManagementJwtTemplateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.jwt_template.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.magic_auth)[':id']['$get']>
  >,
) {
  return ['user_management', '/user_management/magic_auth/:id', toValue(args)] as const
}

export function getUserManagementMagicAuthIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.magic_auth)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementMagicAuthIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.magic_auth[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.magic_auth)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user_management.magic_auth)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserManagementMagicAuthIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementMagicAuthIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.magic_auth[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserManagementOrganizationMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.user_management.organization_memberships.$get>
  >,
) {
  return ['user_management', '/user_management/organization_memberships', toValue(args)] as const
}

export function getUserManagementOrganizationMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.user_management.organization_memberships.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementOrganizationMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.organization_memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.user_management.organization_memberships.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_management.organization_memberships.$get>>
              >
            >
          >,
          ReturnType<typeof getUserManagementOrganizationMembershipsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementOrganizationMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.organization_memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$get']>
  >,
) {
  return [
    'user_management',
    '/user_management/organization_memberships/:id',
    toValue(args),
  ] as const
}

export function getUserManagementOrganizationMembershipsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementOrganizationMembershipsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.organization_memberships[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.user_management.organization_memberships)[':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.user_management.organization_memberships)[':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserManagementOrganizationMembershipsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementOrganizationMembershipsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.organization_memberships[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.user_management.organization_memberships)[':id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
    >
  >,
) {
  return [
    'user_management',
    '/user_management/organization_memberships/:omId/groups',
    toValue(args),
  ] as const
}

export function getUserManagementOrganizationMembershipsOmIdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementOrganizationMembershipsOmIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.organization_memberships[':omId'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUserManagementOrganizationMembershipsOmIdGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementOrganizationMembershipsOmIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.organization_memberships[':omId'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.password_reset)[':id']['$get']>
  >,
) {
  return ['user_management', '/user_management/password_reset/:id', toValue(args)] as const
}

export function getUserManagementPasswordResetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.password_reset)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementPasswordResetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.password_reset[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.password_reset)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user_management.password_reset)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserManagementPasswordResetIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementPasswordResetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.password_reset[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.radar_challenges)[':id']['$get']>
  >,
) {
  return ['user_management', '/user_management/radar_challenges/:id', toValue(args)] as const
}

export function getUserManagementRadarChallengesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.radar_challenges)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementRadarChallengesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.radar_challenges[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.radar_challenges)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user_management.radar_challenges)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserManagementRadarChallengesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementRadarChallengesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.radar_challenges[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserManagementRedirectUrisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.redirect_uris.$get>>,
) {
  return ['user_management', '/user_management/redirect_uris', toValue(args)] as const
}

export function getUserManagementRedirectUrisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.redirect_uris.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementRedirectUrisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.redirect_uris.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserManagementRedirectUris<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.redirect_uris.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>
              >
            >
          >,
          ReturnType<typeof getUserManagementRedirectUrisQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.redirect_uris.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementRedirectUrisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementRedirectUrisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.redirect_uris.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.user_management.redirect_uris)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.user_management.redirect_uris)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.sessions.logout.$get>>,
) {
  return ['user_management', '/user_management/sessions/logout', toValue(args)] as const
}

export function getUserManagementSessionsLogoutQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.sessions.logout.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementSessionsLogoutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.sessions.logout.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserManagementSessionsLogout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.sessions.logout.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_management.sessions.logout.$get>>
              >
            >
          >,
          ReturnType<typeof getUserManagementSessionsLogoutQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementSessionsLogoutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.sessions.logout.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.users.$get>>,
) {
  return ['user_management', '/user_management/users', toValue(args)] as const
}

export function getUserManagementUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserManagementUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_management.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>
            >
          >,
          ReturnType<typeof getUserManagementUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.users.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users.external_id)[':external_id']['$get']>
  >,
) {
  return [
    'user_management',
    '/user_management/users/external_id/:external_id',
    toValue(args),
  ] as const
}

export function getUserManagementUsersExternalIdExternalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users.external_id)[':external_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementUsersExternalIdExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.users.external_id[':external_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users.external_id)[':external_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUserManagementUsersExternalIdExternalIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementUsersExternalIdExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.users.external_id[':external_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserManagementUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user_management.users)[':id']['$get']>>,
) {
  return ['user_management', '/user_management/users/:id', toValue(args)] as const
}

export function getUserManagementUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user_management.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user_management.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user_management.users)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserManagementUsersIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':id']['identities']['$get']>
  >,
) {
  return ['user_management', '/user_management/users/:id/identities', toValue(args)] as const
}

export function getUserManagementUsersIdIdentitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':id']['identities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementUsersIdIdentitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.users[':id'].identities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':id']['identities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_management.users)[':id']['identities']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserManagementUsersIdIdentitiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementUsersIdIdentitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.users[':id'].identities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserManagementUsersIdSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':id']['sessions']['$get']>
  >,
) {
  return ['user_management', '/user_management/users/:id/sessions', toValue(args)] as const
}

export function getUserManagementUsersIdSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':id']['sessions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementUsersIdSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.users[':id'].sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':id']['sessions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_management.users)[':id']['sessions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserManagementUsersIdSessionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementUsersIdSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.users[':id'].sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserManagementUsersUserIdApiKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>
  >,
) {
  return ['user_management', '/user_management/users/:userId/api_keys', toValue(args)] as const
}

export function getUserManagementUsersUserIdApiKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementUsersUserIdApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.users[':userId'].api_keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserManagementUsersUserIdApiKeysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementUsersUserIdApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.users[':userId'].api_keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>
  >,
) {
  return ['user_management', '/user_management/users/:userId/feature-flags', toValue(args)] as const
}

export function getUserManagementUsersUserIdFeatureFlagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementUsersUserIdFeatureFlagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.users[':userId']['feature-flags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUserManagementUsersUserIdFeatureFlagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementUsersUserIdFeatureFlagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.users[':userId']['feature-flags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserManagementUsersUserIdAuthorizedApplicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
    >
  >,
) {
  return [
    'user_management',
    '/user_management/users/:user_id/authorized_applications',
    toValue(args),
  ] as const
}

export function getUserManagementUsersUserIdAuthorizedApplicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementUsersUserIdAuthorizedApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.users[':user_id'].authorized_applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUserManagementUsersUserIdAuthorizedApplicationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementUsersUserIdAuthorizedApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.users[':user_id'].authorized_applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
    >
  >,
) {
  return [
    'user_management',
    '/user_management/users/:user_id/connected_accounts/:slug',
    toValue(args),
  ] as const
}

export function getUserManagementUsersUserIdConnectedAccountsSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementUsersUserIdConnectedAccountsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.users[':user_id'].connected_accounts[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUserManagementUsersUserIdConnectedAccountsSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementUsersUserIdConnectedAccountsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.users[':user_id'].connected_accounts[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':user_id']['data_providers']['$get']>
  >,
) {
  return [
    'user_management',
    '/user_management/users/:user_id/data_providers',
    toValue(args),
  ] as const
}

export function getUserManagementUsersUserIdDataProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':user_id']['data_providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementUsersUserIdDataProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.users[':user_id'].data_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.users)[':user_id']['data_providers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUserManagementUsersUserIdDataProvidersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementUsersUserIdDataProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.users[':user_id'].data_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserManagementUsersUserlandUserIdAuthFactorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
    >
  >,
) {
  return [
    'user_management',
    '/user_management/users/:userlandUserId/auth_factors',
    toValue(args),
  ] as const
}

export function getUserManagementUsersUserlandUserIdAuthFactorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementUsersUserlandUserIdAuthFactorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.users[':userlandUserId'].auth_factors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUserManagementUsersUserlandUserIdAuthFactorsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementUsersUserlandUserIdAuthFactorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.users[':userlandUserId'].auth_factors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.user_management.waitlist_entries)[':id']['deny']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.user_management.waitlist_entries)[':id']['deny']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getUserManagementWaitlistsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserManagementWaitlistsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.waitlists.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_management.waitlists.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_management.waitlists.$get>>
              >
            >
          >,
          ReturnType<typeof getUserManagementWaitlistsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_management.waitlists.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserManagementWaitlistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserManagementWaitlistsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.waitlists.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserManagementWaitlistsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.waitlists)[':id']['$get']>
  >,
) {
  return ['user_management', '/user_management/waitlists/:id', toValue(args)] as const
}

export function getUserManagementWaitlistsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.waitlists)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementWaitlistsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.waitlists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.waitlists)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user_management.waitlists)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserManagementWaitlistsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementWaitlistsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.waitlists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserManagementWaitlistsIdEntriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>
  >,
) {
  return ['user_management', '/user_management/waitlists/:id/entries', toValue(args)] as const
}

export function getUserManagementWaitlistsIdEntriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserManagementWaitlistsIdEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_management.waitlists[':id'].entries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserManagementWaitlistsIdEntriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserManagementWaitlistsIdEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_management.waitlists[':id'].entries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getVaultV1KvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.v1.kv.$get>>,
) {
  return ['vault', '/vault/v1/kv', toValue(args)] as const
}

export function getVaultV1KvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.v1.kv.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultV1KvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.v1.kv.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVaultV1Kv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.v1.kv.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>
          >,
          ReturnType<typeof getVaultV1KvQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVaultV1KvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultV1KvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.v1.kv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.v1.kv.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.vault.v1.kv.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv.name)[':name']['$get']>>,
) {
  return ['vault', '/vault/v1/kv/name/:name', toValue(args)] as const
}

export function getVaultV1KvNameNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv.name)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultV1KvNameNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.v1.kv.name[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultV1KvNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv.name)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVaultV1KvNameNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv.name)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultV1KvNameNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultV1KvNameNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.v1.kv.name[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultV1KvIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv)[':id']['$get']>>,
) {
  return ['vault', '/vault/v1/kv/:id', toValue(args)] as const
}

export function getVaultV1KvIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultV1KvIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.v1.kv[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultV1KvId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getVaultV1KvIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultV1KvIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultV1KvIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.v1.kv[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vault.v1.kv)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>,
) {
  return ['vault', '/vault/v1/kv/:id/metadata', toValue(args)] as const
}

export function getVaultV1KvIdMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultV1KvIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.v1.kv[':id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVaultV1KvIdMetadataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultV1KvIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.v1.kv[':id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultV1KvIdVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>,
) {
  return ['vault', '/vault/v1/kv/:id/versions', toValue(args)] as const
}

export function getVaultV1KvIdVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultV1KvIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.v1.kv[':id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVaultV1KvIdVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultV1KvIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.v1.kv[':id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhookEndpointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook_endpoints.$get>>,
) {
  return ['webhook_endpoints', '/webhook_endpoints', toValue(args)] as const
}

export function getWebhookEndpointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook_endpoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhookEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhook_endpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhookEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook_endpoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>
            >
          >,
          ReturnType<typeof getWebhookEndpointsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhookEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhook_endpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.widgets.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.widgets.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
