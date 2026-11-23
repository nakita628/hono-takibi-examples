import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBlueprintsKey() {
  return ['blueprints'] as const
}

export function getBuildSourcesKey() {
  return ['build-sources'] as const
}

export function getCronJobsKey() {
  return ['cron-jobs'] as const
}

export function getDedicatedIpsKey() {
  return ['dedicated-ips'] as const
}

export function getDisksKey() {
  return ['disks'] as const
}

export function getEnvGroupsKey() {
  return ['env-groups'] as const
}

export function getEnvironmentsKey() {
  return ['environments'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFlowRunsKey() {
  return ['flow-runs'] as const
}

export function getFlowsKey() {
  return ['flows'] as const
}

export function getKeyValueKey() {
  return ['key-value'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getMaintenanceKey() {
  return ['maintenance'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getMetricsStreamKey() {
  return ['metrics-stream'] as const
}

export function getNotificationSettingsKey() {
  return ['notification-settings'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getOwnersKey() {
  return ['owners'] as const
}

export function getPostgresKey() {
  return ['postgres'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getRedisKey() {
  return ['redis'] as const
}

export function getRegistrycredentialsKey() {
  return ['registrycredentials'] as const
}

export function getSandboxGroupsKey() {
  return ['sandbox-groups'] as const
}

export function getSandboxesKey() {
  return ['sandboxes'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getTaskRunsKey() {
  return ['task-runs'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getWorkflowsKey() {
  return ['workflows'] as const
}

export function getWorkflowversionsKey() {
  return ['workflowversions'] as const
}

export function getBlueprintsQueryKey(args: InferRequestType<typeof client.blueprints.$get>) {
  return ['blueprints', '/blueprints', args] as const
}

export function getBlueprintsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.blueprints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlueprintsQueryKey>
  >({
    queryKey: getBlueprintsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blueprints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlueprints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.blueprints.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBlueprintsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBlueprintsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBlueprintsValidateMutationKey() {
  return ['blueprints', '/blueprints/validate', 'POST'] as const
}

export function getPostBlueprintsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.validate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.blueprints.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBlueprintsValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.blueprints.validate.$post>) {
      return parseResponse(client.blueprints.validate.$post(args, options))
    },
  })
}

export function createPostBlueprintsValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.validate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.blueprints.validate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBlueprintsValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOwnersOwnerIdMembersUserIdMutationKey() {
  return ['owners', '/owners/:ownerId/members/:userId', 'DELETE'] as const
}

export function getDeleteOwnersOwnerIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owners)[':ownerId']['members'][':userId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOwnersOwnerIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$delete']>,
    ) {
      return parseResponse(client.owners[':ownerId'].members[':userId'].$delete(args, options))
    },
  })
}

export function createDeleteOwnersOwnerIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.owners)[':ownerId']['members'][':userId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOwnersOwnerIdMembersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchOwnersOwnerIdMembersUserIdMutationKey() {
  return ['owners', '/owners/:ownerId/members/:userId', 'PATCH'] as const
}

export function getPatchOwnersOwnerIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.owners)[':ownerId']['members'][':userId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOwnersOwnerIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$patch']>,
    ) {
      return parseResponse(client.owners[':ownerId'].members[':userId'].$patch(args, options))
    },
  })
}

export function createPatchOwnersOwnerIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.owners)[':ownerId']['members'][':userId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOwnersOwnerIdMembersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBlueprintsBlueprintIdQueryKey(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['$get']>,
) {
  return ['blueprints', '/blueprints/:blueprintId', args] as const
}

export function getBlueprintsBlueprintIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlueprintsBlueprintIdQueryKey>
  >({
    queryKey: getBlueprintsBlueprintIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blueprints[':blueprintId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlueprintsBlueprintId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blueprints)[':blueprintId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBlueprintsBlueprintIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBlueprintsBlueprintIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteBlueprintsBlueprintIdMutationKey() {
  return ['blueprints', '/blueprints/:blueprintId', 'DELETE'] as const
}

export function getDeleteBlueprintsBlueprintIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.blueprints)[':blueprintId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBlueprintsBlueprintIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.blueprints)[':blueprintId']['$delete']>,
    ) {
      return parseResponse(client.blueprints[':blueprintId'].$delete(args, options))
    },
  })
}

export function createDeleteBlueprintsBlueprintId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.blueprints)[':blueprintId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBlueprintsBlueprintIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchBlueprintsBlueprintIdMutationKey() {
  return ['blueprints', '/blueprints/:blueprintId', 'PATCH'] as const
}

export function getPatchBlueprintsBlueprintIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.blueprints)[':blueprintId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBlueprintsBlueprintIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.blueprints)[':blueprintId']['$patch']>) {
      return parseResponse(client.blueprints[':blueprintId'].$patch(args, options))
    },
  })
}

export function createPatchBlueprintsBlueprintId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.blueprints)[':blueprintId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBlueprintsBlueprintIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBlueprintsBlueprintIdSyncsQueryKey(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>,
) {
  return ['blueprints', '/blueprints/:blueprintId/syncs', args] as const
}

export function getBlueprintsBlueprintIdSyncsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlueprintsBlueprintIdSyncsQueryKey>
  >({
    queryKey: getBlueprintsBlueprintIdSyncsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blueprints[':blueprintId'].syncs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlueprintsBlueprintIdSyncs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBlueprintsBlueprintIdSyncsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBlueprintsBlueprintIdSyncsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDedicatedIpsQueryKey(
  args: InferRequestType<(typeof client)['dedicated-ips']['$get']>,
) {
  return ['dedicated-ips', '/dedicated-ips', args] as const
}

export function getDedicatedIpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['dedicated-ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDedicatedIpsQueryKey>
  >({
    queryKey: getDedicatedIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['dedicated-ips'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDedicatedIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['dedicated-ips']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDedicatedIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDedicatedIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostDedicatedIpsMutationKey() {
  return ['dedicated-ips', '/dedicated-ips', 'POST'] as const
}

export function getPostDedicatedIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dedicated-ips']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDedicatedIpsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dedicated-ips']['$post']>) {
      return parseResponse(client['dedicated-ips'].$post(args, options))
    },
  })
}

export function createPostDedicatedIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['dedicated-ips']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDedicatedIpsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDedicatedIpsDedicatedIpIdQueryKey(
  args: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>,
) {
  return ['dedicated-ips', '/dedicated-ips/:dedicatedIpId', args] as const
}

export function getDedicatedIpsDedicatedIpIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDedicatedIpsDedicatedIpIdQueryKey>
  >({
    queryKey: getDedicatedIpsDedicatedIpIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['dedicated-ips'][':dedicatedIpId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDedicatedIpsDedicatedIpId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDedicatedIpsDedicatedIpIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDedicatedIpsDedicatedIpIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteDedicatedIpsDedicatedIpIdMutationKey() {
  return ['dedicated-ips', '/dedicated-ips/:dedicatedIpId', 'DELETE'] as const
}

export function getDeleteDedicatedIpsDedicatedIpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDedicatedIpsDedicatedIpIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$delete']>,
    ) {
      return parseResponse(client['dedicated-ips'][':dedicatedIpId'].$delete(args, options))
    },
  })
}

export function createDeleteDedicatedIpsDedicatedIpId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDedicatedIpsDedicatedIpIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchDedicatedIpsDedicatedIpIdMutationKey() {
  return ['dedicated-ips', '/dedicated-ips/:dedicatedIpId', 'PATCH'] as const
}

export function getPatchDedicatedIpsDedicatedIpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDedicatedIpsDedicatedIpIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$patch']>,
    ) {
      return parseResponse(client['dedicated-ips'][':dedicatedIpId'].$patch(args, options))
    },
  })
}

export function createPatchDedicatedIpsDedicatedIpId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDedicatedIpsDedicatedIpIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDisksQueryKey(args: InferRequestType<typeof client.disks.$get>) {
  return ['disks', '/disks', args] as const
}

export function getDisksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.disks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDisksQueryKey>
  >({
    queryKey: getDisksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDisks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.disks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDisksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDisksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostDisksMutationKey() {
  return ['disks', '/disks', 'POST'] as const
}

export function getPostDisksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$post>>>>>,
    TError,
    InferRequestType<typeof client.disks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.disks.$post>) {
      return parseResponse(client.disks.$post(args, options))
    },
  })
}

export function createPostDisks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$post>>>>>,
        TError,
        InferRequestType<typeof client.disks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDisksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDisksDiskIdQueryKey(
  args: InferRequestType<(typeof client.disks)[':diskId']['$get']>,
) {
  return ['disks', '/disks/:diskId', args] as const
}

export function getDisksDiskIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.disks)[':diskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisksDiskIdQueryKey>
  >({
    queryKey: getDisksDiskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disks[':diskId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDisksDiskId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.disks)[':diskId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDisksDiskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDisksDiskIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteDisksDiskIdMutationKey() {
  return ['disks', '/disks/:diskId', 'DELETE'] as const
}

export function getDeleteDisksDiskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.disks)[':diskId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDisksDiskIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.disks)[':diskId']['$delete']>) {
      return parseResponse(client.disks[':diskId'].$delete(args, options))
    },
  })
}

export function createDeleteDisksDiskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.disks)[':diskId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDisksDiskIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchDisksDiskIdMutationKey() {
  return ['disks', '/disks/:diskId', 'PATCH'] as const
}

export function getPatchDisksDiskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.disks)[':diskId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDisksDiskIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.disks)[':diskId']['$patch']>) {
      return parseResponse(client.disks[':diskId'].$patch(args, options))
    },
  })
}

export function createPatchDisksDiskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.disks)[':diskId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDisksDiskIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDisksDiskIdSnapshotsQueryKey(
  args: InferRequestType<(typeof client.disks)[':diskId']['snapshots']['$get']>,
) {
  return ['disks', '/disks/:diskId/snapshots', args] as const
}

export function getDisksDiskIdSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.disks)[':diskId']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisksDiskIdSnapshotsQueryKey>
  >({
    queryKey: getDisksDiskIdSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disks[':diskId'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDisksDiskIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.disks)[':diskId']['snapshots']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDisksDiskIdSnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDisksDiskIdSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDisksDiskIdSnapshotsRestoreMutationKey() {
  return ['disks', '/disks/:diskId/snapshots/restore', 'POST'] as const
}

export function getPostDisksDiskIdSnapshotsRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.disks)[':diskId']['snapshots']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDisksDiskIdSnapshotsRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.disks)[':diskId']['snapshots']['restore']['$post']>,
    ) {
      return parseResponse(client.disks[':diskId'].snapshots.restore.$post(args, options))
    },
  })
}

export function createPostDisksDiskIdSnapshotsRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['restore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.disks)[':diskId']['snapshots']['restore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDisksDiskIdSnapshotsRestoreMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOwnersQueryKey(args: InferRequestType<typeof client.owners.$get>) {
  return ['owners', '/owners', args] as const
}

export function getOwnersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.owners.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOwnersQueryKey>
  >({
    queryKey: getOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owners.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOwners<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.owners.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOwnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOwnersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOwnersOwnerIdQueryKey(
  args: InferRequestType<(typeof client.owners)[':ownerId']['$get']>,
) {
  return ['owners', '/owners/:ownerId', args] as const
}

export function getOwnersOwnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.owners)[':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnersOwnerIdQueryKey>
  >({
    queryKey: getOwnersOwnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owners[':ownerId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOwnersOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.owners)[':ownerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnersOwnerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOwnersOwnerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOwnersOwnerIdMembersQueryKey(
  args: InferRequestType<(typeof client.owners)[':ownerId']['members']['$get']>,
) {
  return ['owners', '/owners/:ownerId/members', args] as const
}

export function getOwnersOwnerIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.owners)[':ownerId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnersOwnerIdMembersQueryKey>
  >({
    queryKey: getOwnersOwnerIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owners[':ownerId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOwnersOwnerIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.owners)[':ownerId']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnersOwnerIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOwnersOwnerIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOwnersOwnerIdAuditLogsQueryKey(
  args: InferRequestType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>,
) {
  return ['owners', '/owners/:ownerId/audit-logs', args] as const
}

export function getOwnersOwnerIdAuditLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnersOwnerIdAuditLogsQueryKey>
  >({
    queryKey: getOwnersOwnerIdAuditLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owners[':ownerId']['audit-logs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOwnersOwnerIdAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnersOwnerIdAuditLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOwnersOwnerIdAuditLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrgIdAuditLogsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>,
) {
  return ['organizations', '/organizations/:orgId/audit-logs', args] as const
}

export function getOrganizationsOrgIdAuditLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdAuditLogsQueryKey>
  >({
    queryKey: getOrganizationsOrgIdAuditLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':orgId']['audit-logs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrgIdAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdAuditLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsOrgIdAuditLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNotificationSettingsOwnersOwnerIdQueryKey(
  args: InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>,
) {
  return ['notification-settings', '/notification-settings/owners/:ownerId', args] as const
}

export function getNotificationSettingsOwnersOwnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsOwnersOwnerIdQueryKey>
  >({
    queryKey: getNotificationSettingsOwnersOwnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['notification-settings'].owners[':ownerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationSettingsOwnersOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['notification-settings']['owners'][':ownerId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationSettingsOwnersOwnerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationSettingsOwnersOwnerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchNotificationSettingsOwnersOwnerIdMutationKey() {
  return ['notification-settings', '/notification-settings/owners/:ownerId', 'PATCH'] as const
}

export function getPatchNotificationSettingsOwnersOwnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNotificationSettingsOwnersOwnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['notification-settings']['owners'][':ownerId']['$patch']
      >,
    ) {
      return parseResponse(client['notification-settings'].owners[':ownerId'].$patch(args, options))
    },
  })
}

export function createPatchNotificationSettingsOwnersOwnerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchNotificationSettingsOwnersOwnerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNotificationSettingsOverridesQueryKey(
  args: InferRequestType<(typeof client)['notification-settings']['overrides']['$get']>,
) {
  return ['notification-settings', '/notification-settings/overrides', args] as const
}

export function getNotificationSettingsOverridesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['notification-settings']['overrides']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsOverridesQueryKey>
  >({
    queryKey: getNotificationSettingsOverridesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['notification-settings'].overrides.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationSettingsOverrides<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['notification-settings']['overrides']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationSettingsOverridesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationSettingsOverridesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNotificationSettingsOverridesServicesServiceIdQueryKey(
  args: InferRequestType<
    (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
  >,
) {
  return [
    'notification-settings',
    '/notification-settings/overrides/services/:serviceId',
    args,
  ] as const
}

export function getNotificationSettingsOverridesServicesServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsOverridesServicesServiceIdQueryKey>
  >({
    queryKey: getNotificationSettingsOverridesServicesServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['notification-settings'].overrides.services[':serviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationSettingsOverridesServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationSettingsOverridesServicesServiceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationSettingsOverridesServicesServiceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPatchNotificationSettingsOverridesServicesServiceIdMutationKey() {
  return [
    'notification-settings',
    '/notification-settings/overrides/services/:serviceId',
    'PATCH',
  ] as const
}

export function getPatchNotificationSettingsOverridesServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchNotificationSettingsOverridesServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$patch']
      >,
    ) {
      return parseResponse(
        client['notification-settings'].overrides.services[':serviceId'].$patch(args, options),
      )
    },
  })
}

export function createPatchNotificationSettingsOverridesServicesServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchNotificationSettingsOverridesServicesServiceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRegistrycredentialsQueryKey(
  args: InferRequestType<typeof client.registrycredentials.$get>,
) {
  return ['registrycredentials', '/registrycredentials', args] as const
}

export function getRegistrycredentialsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.registrycredentials.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrycredentialsQueryKey>
  >({
    queryKey: getRegistrycredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrycredentials.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRegistrycredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.registrycredentials.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrycredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegistrycredentialsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRegistrycredentialsMutationKey() {
  return ['registrycredentials', '/registrycredentials', 'POST'] as const
}

export function getPostRegistrycredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.registrycredentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegistrycredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.registrycredentials.$post>) {
      return parseResponse(client.registrycredentials.$post(args, options))
    },
  })
}

export function createPostRegistrycredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.registrycredentials.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRegistrycredentialsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRegistrycredentialsRegistryCredentialIdQueryKey(
  args: InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>,
) {
  return ['registrycredentials', '/registrycredentials/:registryCredentialId', args] as const
}

export function getRegistrycredentialsRegistryCredentialIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrycredentialsRegistryCredentialIdQueryKey>
  >({
    queryKey: getRegistrycredentialsRegistryCredentialIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrycredentials[':registryCredentialId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrycredentialsRegistryCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrycredentials)[':registryCredentialId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrycredentialsRegistryCredentialIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRegistrycredentialsRegistryCredentialIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteRegistrycredentialsRegistryCredentialIdMutationKey() {
  return ['registrycredentials', '/registrycredentials/:registryCredentialId', 'DELETE'] as const
}

export function getDeleteRegistrycredentialsRegistryCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRegistrycredentialsRegistryCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.registrycredentials)[':registryCredentialId']['$delete']
      >,
    ) {
      return parseResponse(
        client.registrycredentials[':registryCredentialId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteRegistrycredentialsRegistryCredentialId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.registrycredentials)[':registryCredentialId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRegistrycredentialsRegistryCredentialIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchRegistrycredentialsRegistryCredentialIdMutationKey() {
  return ['registrycredentials', '/registrycredentials/:registryCredentialId', 'PATCH'] as const
}

export function getPatchRegistrycredentialsRegistryCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRegistrycredentialsRegistryCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.registrycredentials)[':registryCredentialId']['$patch']
      >,
    ) {
      return parseResponse(
        client.registrycredentials[':registryCredentialId'].$patch(args, options),
      )
    },
  })
}

export function createPatchRegistrycredentialsRegistryCredentialId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRegistrycredentialsRegistryCredentialIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesQueryKey(args: InferRequestType<typeof client.services.$get>) {
  return ['services', '/services', args] as const
}

export function getServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesQueryKey>
  >({
    queryKey: getServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.services.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostServicesMutationKey() {
  return ['services', '/services', 'POST'] as const
}

export function getPostServicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$post>>>>>,
    TError,
    InferRequestType<typeof client.services.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.services.$post>) {
      return parseResponse(client.services.$post(args, options))
    },
  })
}

export function createPostServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.services.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['$get']>,
) {
  return ['services', '/services/:serviceId', args] as const
}

export function getServicesServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdQueryKey>
  >({
    queryKey: getServicesServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServicesServiceIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteServicesServiceIdMutationKey() {
  return ['services', '/services/:serviceId', 'DELETE'] as const
}

export function getDeleteServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesServiceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.services)[':serviceId']['$delete']>) {
      return parseResponse(client.services[':serviceId'].$delete(args, options))
    },
  })
}

export function createDeleteServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServicesServiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchServicesServiceIdMutationKey() {
  return ['services', '/services/:serviceId', 'PATCH'] as const
}

export function getPatchServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':serviceId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchServicesServiceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.services)[':serviceId']['$patch']>) {
      return parseResponse(client.services[':serviceId'].$patch(args, options))
    },
  })
}

export function createPatchServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchServicesServiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServicesServiceIdCachePurgeMutationKey() {
  return ['services', '/services/:serviceId/cache/purge', 'POST'] as const
}

export function getPostServicesServiceIdCachePurgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['cache']['purge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['cache']['purge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdCachePurgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['cache']['purge']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId'].cache.purge.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdCachePurge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['cache']['purge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['cache']['purge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdCachePurgeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdDeploysQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys']['$get']>,
) {
  return ['services', '/services/:serviceId/deploys', args] as const
}

export function getServicesServiceIdDeploysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdDeploysQueryKey>
  >({
    queryKey: getServicesServiceIdDeploysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId'].deploys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdDeploys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['deploys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdDeploysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdDeploysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostServicesServiceIdDeploysMutationKey() {
  return ['services', '/services/:serviceId/deploys', 'POST'] as const
}

export function getPostServicesServiceIdDeploysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['deploys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdDeploysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['deploys']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId'].deploys.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdDeploys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['deploys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdDeploysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdDeploysDeployIdQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>,
) {
  return ['services', '/services/:serviceId/deploys/:deployId', args] as const
}

export function getServicesServiceIdDeploysDeployIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdDeploysDeployIdQueryKey>
  >({
    queryKey: getServicesServiceIdDeploysDeployIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId'].deploys[':deployId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdDeploysDeployId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.services)[':serviceId']['deploys'][':deployId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdDeploysDeployIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdDeploysDeployIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostServicesServiceIdDeploysDeployIdCancelMutationKey() {
  return ['services', '/services/:serviceId/deploys/:deployId/cancel', 'POST'] as const
}

export function getPostServicesServiceIdDeploysDeployIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services)[':serviceId']['deploys'][':deployId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.services)[':serviceId']['deploys'][':deployId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdDeploysDeployIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':serviceId']['deploys'][':deployId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.services[':serviceId'].deploys[':deployId'].cancel.$post(args, options),
      )
    },
  })
}

export function createPostServicesServiceIdDeploysDeployIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.services)[':serviceId']['deploys'][':deployId']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.services)[':serviceId']['deploys'][':deployId']['cancel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdDeploysDeployIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServicesServiceIdRollbackMutationKey() {
  return ['services', '/services/:serviceId/rollback', 'POST'] as const
}

export function getPostServicesServiceIdRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['rollback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['rollback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdRollbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['rollback']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId'].rollback.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdRollback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['rollback']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['rollback']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdRollbackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdEnvVarsQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$get']>,
) {
  return ['services', '/services/:serviceId/env-vars', args] as const
}

export function getServicesServiceIdEnvVarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdEnvVarsQueryKey>
  >({
    queryKey: getServicesServiceIdEnvVarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId']['env-vars'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdEnvVars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdEnvVarsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdEnvVarsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutServicesServiceIdEnvVarsMutationKey() {
  return ['services', '/services/:serviceId/env-vars', 'PUT'] as const
}

export function getPutServicesServiceIdEnvVarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServicesServiceIdEnvVarsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$put']>,
    ) {
      return parseResponse(client.services[':serviceId']['env-vars'].$put(args, options))
    },
  })
}

export function createPutServicesServiceIdEnvVars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServicesServiceIdEnvVarsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdEnvVarsEnvVarKeyQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>,
) {
  return ['services', '/services/:serviceId/env-vars/:envVarKey', args] as const
}

export function getServicesServiceIdEnvVarsEnvVarKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdEnvVarsEnvVarKeyQueryKey>
  >({
    queryKey: getServicesServiceIdEnvVarsEnvVarKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId']['env-vars'][':envVarKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdEnvVarsEnvVarKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdEnvVarsEnvVarKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdEnvVarsEnvVarKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutServicesServiceIdEnvVarsEnvVarKeyMutationKey() {
  return ['services', '/services/:serviceId/env-vars/:envVarKey', 'PUT'] as const
}

export function getPutServicesServiceIdEnvVarsEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServicesServiceIdEnvVarsEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$put']
      >,
    ) {
      return parseResponse(
        client.services[':serviceId']['env-vars'][':envVarKey'].$put(args, options),
      )
    },
  })
}

export function createPutServicesServiceIdEnvVarsEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServicesServiceIdEnvVarsEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteServicesServiceIdEnvVarsEnvVarKeyMutationKey() {
  return ['services', '/services/:serviceId/env-vars/:envVarKey', 'DELETE'] as const
}

export function getDeleteServicesServiceIdEnvVarsEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesServiceIdEnvVarsEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.services[':serviceId']['env-vars'][':envVarKey'].$delete(args, options),
      )
    },
  })
}

export function createDeleteServicesServiceIdEnvVarsEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServicesServiceIdEnvVarsEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdSecretFilesQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$get']>,
) {
  return ['services', '/services/:serviceId/secret-files', args] as const
}

export function getServicesServiceIdSecretFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdSecretFilesQueryKey>
  >({
    queryKey: getServicesServiceIdSecretFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId']['secret-files'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdSecretFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdSecretFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdSecretFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutServicesServiceIdSecretFilesMutationKey() {
  return ['services', '/services/:serviceId/secret-files', 'PUT'] as const
}

export function getPutServicesServiceIdSecretFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServicesServiceIdSecretFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$put']>,
    ) {
      return parseResponse(client.services[':serviceId']['secret-files'].$put(args, options))
    },
  })
}

export function createPutServicesServiceIdSecretFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServicesServiceIdSecretFilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdSecretFilesEnvVarKeyQueryKey(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
  >,
) {
  return ['services', '/services/:serviceId/secret-files/:envVarKey', args] as const
}

export function getServicesServiceIdSecretFilesEnvVarKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdSecretFilesEnvVarKeyQueryKey>
  >({
    queryKey: getServicesServiceIdSecretFilesEnvVarKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId']['secret-files'][':envVarKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdSecretFilesEnvVarKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdSecretFilesEnvVarKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdSecretFilesEnvVarKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutServicesServiceIdSecretFilesEnvVarKeyMutationKey() {
  return ['services', '/services/:serviceId/secret-files/:envVarKey', 'PUT'] as const
}

export function getPutServicesServiceIdSecretFilesEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServicesServiceIdSecretFilesEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$put']
      >,
    ) {
      return parseResponse(
        client.services[':serviceId']['secret-files'][':envVarKey'].$put(args, options),
      )
    },
  })
}

export function createPutServicesServiceIdSecretFilesEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServicesServiceIdSecretFilesEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteServicesServiceIdSecretFilesEnvVarKeyMutationKey() {
  return ['services', '/services/:serviceId/secret-files/:envVarKey', 'DELETE'] as const
}

export function getDeleteServicesServiceIdSecretFilesEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesServiceIdSecretFilesEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.services[':serviceId']['secret-files'][':envVarKey'].$delete(args, options),
      )
    },
  })
}

export function createDeleteServicesServiceIdSecretFilesEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServicesServiceIdSecretFilesEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdEventsQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['events']['$get']>,
) {
  return ['services', '/services/:serviceId/events', args] as const
}

export function getServicesServiceIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdEventsQueryKey>
  >({
    queryKey: getServicesServiceIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getServicesServiceIdHeadersQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['headers']['$get']>,
) {
  return ['services', '/services/:serviceId/headers', args] as const
}

export function getServicesServiceIdHeadersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['headers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdHeadersQueryKey>
  >({
    queryKey: getServicesServiceIdHeadersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId'].headers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdHeaders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['headers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdHeadersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdHeadersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutServicesServiceIdHeadersMutationKey() {
  return ['services', '/services/:serviceId/headers', 'PUT'] as const
}

export function getPutServicesServiceIdHeadersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['headers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServicesServiceIdHeadersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['headers']['$put']>,
    ) {
      return parseResponse(client.services[':serviceId'].headers.$put(args, options))
    },
  })
}

export function createPutServicesServiceIdHeaders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['headers']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServicesServiceIdHeadersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServicesServiceIdHeadersMutationKey() {
  return ['services', '/services/:serviceId/headers', 'POST'] as const
}

export function getPostServicesServiceIdHeadersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['headers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdHeadersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['headers']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId'].headers.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdHeaders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['headers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdHeadersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteServicesServiceIdHeadersHeaderIdMutationKey() {
  return ['services', '/services/:serviceId/headers/:headerId', 'DELETE'] as const
}

export function getDeleteServicesServiceIdHeadersHeaderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':serviceId']['headers'][':headerId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['headers'][':headerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesServiceIdHeadersHeaderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':serviceId']['headers'][':headerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.services[':serviceId'].headers[':headerId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteServicesServiceIdHeadersHeaderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.services)[':serviceId']['headers'][':headerId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['headers'][':headerId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServicesServiceIdHeadersHeaderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdRoutesQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['routes']['$get']>,
) {
  return ['services', '/services/:serviceId/routes', args] as const
}

export function getServicesServiceIdRoutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdRoutesQueryKey>
  >({
    queryKey: getServicesServiceIdRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId'].routes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['routes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdRoutesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdRoutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutServicesServiceIdRoutesMutationKey() {
  return ['services', '/services/:serviceId/routes', 'PUT'] as const
}

export function getPutServicesServiceIdRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['routes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServicesServiceIdRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['routes']['$put']>,
    ) {
      return parseResponse(client.services[':serviceId'].routes.$put(args, options))
    },
  })
}

export function createPutServicesServiceIdRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['routes']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServicesServiceIdRoutesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServicesServiceIdRoutesMutationKey() {
  return ['services', '/services/:serviceId/routes', 'POST'] as const
}

export function getPostServicesServiceIdRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['routes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['routes']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId'].routes.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['routes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdRoutesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteServicesServiceIdRoutesRouteIdMutationKey() {
  return ['services', '/services/:serviceId/routes/:routeId', 'DELETE'] as const
}

export function getDeleteServicesServiceIdRoutesRouteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':serviceId']['routes'][':routeId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['routes'][':routeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesServiceIdRoutesRouteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':serviceId']['routes'][':routeId']['$delete']
      >,
    ) {
      return parseResponse(client.services[':serviceId'].routes[':routeId'].$delete(args, options))
    },
  })
}

export function createDeleteServicesServiceIdRoutesRouteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.services)[':serviceId']['routes'][':routeId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['routes'][':routeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServicesServiceIdRoutesRouteIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchServicesServiceIdRoutesRouteIdMutationKey() {
  return ['services', '/services/:serviceId/routes/:routeId', 'PATCH'] as const
}

export function getPatchServicesServiceIdRoutesRouteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.services)[':serviceId']['routes'][':routeId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['routes'][':routeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchServicesServiceIdRoutesRouteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':serviceId']['routes'][':routeId']['$patch']
      >,
    ) {
      return parseResponse(client.services[':serviceId'].routes[':routeId'].$patch(args, options))
    },
  })
}

export function createPatchServicesServiceIdRoutesRouteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.services)[':serviceId']['routes'][':routeId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['routes'][':routeId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchServicesServiceIdRoutesRouteIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdCustomDomainsQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$get']>,
) {
  return ['services', '/services/:serviceId/custom-domains', args] as const
}

export function getServicesServiceIdCustomDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdCustomDomainsQueryKey>
  >({
    queryKey: getServicesServiceIdCustomDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId']['custom-domains'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdCustomDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdCustomDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdCustomDomainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostServicesServiceIdCustomDomainsMutationKey() {
  return ['services', '/services/:serviceId/custom-domains', 'POST'] as const
}

export function getPostServicesServiceIdCustomDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdCustomDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId']['custom-domains'].$post(args, options))
    },
  })
}

export function createPostServicesServiceIdCustomDomains<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdCustomDomainsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryKey(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
  >,
) {
  return ['services', '/services/:serviceId/custom-domains/:customDomainNameOrID', args] as const
}

export function getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryKey>
  >({
    queryKey: getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdCustomDomainsCustomDomainNameOrID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteServicesServiceIdCustomDomainsCustomDomainNameOrIDMutationKey() {
  return [
    'services',
    '/services/:serviceId/custom-domains/:customDomainNameOrID',
    'DELETE',
  ] as const
}

export function getDeleteServicesServiceIdCustomDomainsCustomDomainNameOrIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesServiceIdCustomDomainsCustomDomainNameOrIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$delete']
      >,
    ) {
      return parseResponse(
        client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteServicesServiceIdCustomDomainsCustomDomainNameOrID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteServicesServiceIdCustomDomainsCustomDomainNameOrIDMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyMutationKey() {
  return [
    'services',
    '/services/:serviceId/custom-domains/:customDomainNameOrID/verify',
    'POST',
  ] as const
}

export function getPostServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['verify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['verify']['$post']
      >,
    ) {
      return parseResponse(
        client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].verify.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostServicesServiceIdCustomDomainsCustomDomainNameOrIDVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['verify']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['verify']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServicesServiceIdSuspendMutationKey() {
  return ['services', '/services/:serviceId/suspend', 'POST'] as const
}

export function getPostServicesServiceIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['suspend']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId'].suspend.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdSuspend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['suspend']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['suspend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdSuspendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServicesServiceIdResumeMutationKey() {
  return ['services', '/services/:serviceId/resume', 'POST'] as const
}

export function getPostServicesServiceIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['resume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['resume']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId'].resume.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['resume']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdResumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServicesServiceIdRestartMutationKey() {
  return ['services', '/services/:serviceId/restart', 'POST'] as const
}

export function getPostServicesServiceIdRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['restart']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['restart']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['restart']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId'].restart.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdRestart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['restart']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['restart']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdRestartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServicesServiceIdScaleMutationKey() {
  return ['services', '/services/:serviceId/scale', 'POST'] as const
}

export function getPostServicesServiceIdScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['scale']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['scale']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['scale']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId'].scale.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdScale<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['scale']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['scale']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdScaleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutServicesServiceIdAutoscalingMutationKey() {
  return ['services', '/services/:serviceId/autoscaling', 'PUT'] as const
}

export function getPutServicesServiceIdAutoscalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['autoscaling']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServicesServiceIdAutoscalingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$put']>,
    ) {
      return parseResponse(client.services[':serviceId'].autoscaling.$put(args, options))
    },
  })
}

export function createPutServicesServiceIdAutoscaling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['autoscaling']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServicesServiceIdAutoscalingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteServicesServiceIdAutoscalingMutationKey() {
  return ['services', '/services/:serviceId/autoscaling', 'DELETE'] as const
}

export function getDeleteServicesServiceIdAutoscalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['autoscaling']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesServiceIdAutoscalingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$delete']>,
    ) {
      return parseResponse(client.services[':serviceId'].autoscaling.$delete(args, options))
    },
  })
}

export function createDeleteServicesServiceIdAutoscaling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.services)[':serviceId']['autoscaling']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServicesServiceIdAutoscalingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServicesServiceIdPreviewMutationKey() {
  return ['services', '/services/:serviceId/preview', 'POST'] as const
}

export function getPostServicesServiceIdPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['preview']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['preview']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId'].preview.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['preview']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['preview']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdPreviewMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdJobsQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs']['$get']>,
) {
  return ['services', '/services/:serviceId/jobs', args] as const
}

export function getServicesServiceIdJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdJobsQueryKey>
  >({
    queryKey: getServicesServiceIdJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdJobsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostServicesServiceIdJobsMutationKey() {
  return ['services', '/services/:serviceId/jobs', 'POST'] as const
}

export function getPostServicesServiceIdJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':serviceId']['jobs']['$post']>,
    ) {
      return parseResponse(client.services[':serviceId'].jobs.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':serviceId']['jobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>,
) {
  return ['services', '/services/:serviceId/jobs/:jobId', args] as const
}

export function getServicesServiceIdJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdJobsJobIdQueryKey>
  >({
    queryKey: getServicesServiceIdJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId'].jobs[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdJobsJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostServicesServiceIdJobsJobIdCancelMutationKey() {
  return ['services', '/services/:serviceId/jobs/:jobId/cancel', 'POST'] as const
}

export function getPostServicesServiceIdJobsJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdJobsJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':serviceId']['jobs'][':jobId']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.services[':serviceId'].jobs[':jobId'].cancel.$post(args, options))
    },
  })
}

export function createPostServicesServiceIdJobsJobIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.services)[':serviceId']['jobs'][':jobId']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.services)[':serviceId']['jobs'][':jobId']['cancel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdJobsJobIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServicesServiceIdInstancesQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['instances']['$get']>,
) {
  return ['services', '/services/:serviceId/instances', args] as const
}

export function getServicesServiceIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdInstancesQueryKey>
  >({
    queryKey: getServicesServiceIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['instances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getServicesServiceIdOutboundIpsQueryKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>,
) {
  return ['services', '/services/:serviceId/outbound-ips', args] as const
}

export function getServicesServiceIdOutboundIpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdOutboundIpsQueryKey>
  >({
    queryKey: getServicesServiceIdOutboundIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':serviceId']['outbound-ips'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServicesServiceIdOutboundIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesServiceIdOutboundIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServicesServiceIdOutboundIpsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCronJobsCronJobIdRunsMutationKey() {
  return ['cron-jobs', '/cron-jobs/:cronJobId/runs', 'POST'] as const
}

export function getPostCronJobsCronJobIdRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCronJobsCronJobIdRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$post']>,
    ) {
      return parseResponse(client['cron-jobs'][':cronJobId'].runs.$post(args, options))
    },
  })
}

export function createPostCronJobsCronJobIdRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCronJobsCronJobIdRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCronJobsCronJobIdRunsMutationKey() {
  return ['cron-jobs', '/cron-jobs/:cronJobId/runs', 'DELETE'] as const
}

export function getDeleteCronJobsCronJobIdRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCronJobsCronJobIdRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$delete']>,
    ) {
      return parseResponse(client['cron-jobs'][':cronJobId'].runs.$delete(args, options))
    },
  })
}

export function createDeleteCronJobsCronJobIdRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCronJobsCronJobIdRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsEventIdQueryKey(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
) {
  return ['events', '/events/:eventId', args] as const
}

export function getEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >({
    queryKey: getEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':eventId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsEventIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLogsQueryKey(args: InferRequestType<typeof client.logs.$get>) {
  return ['logs', '/logs', args] as const
}

export function getLogsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >({
    queryKey: getLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.logs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLogsSubscribeQueryKey(
  args: InferRequestType<typeof client.logs.subscribe.$get>,
) {
  return ['logs', '/logs/subscribe', args] as const
}

export function getLogsSubscribeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logs.subscribe.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsSubscribeQueryKey>
  >({
    queryKey: getLogsSubscribeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.subscribe.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogsSubscribe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.logs.subscribe.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogsSubscribeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsSubscribeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLogsValuesQueryKey(args: InferRequestType<typeof client.logs.values.$get>) {
  return ['logs', '/logs/values', args] as const
}

export function getLogsValuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logs.values.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsValuesQueryKey>
  >({
    queryKey: getLogsValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.values.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogsValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.logs.values.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogsValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsValuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLogsStreamsOwnerOwnerIdQueryKey(
  args: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$get']>,
) {
  return ['logs', '/logs/streams/owner/:ownerId', args] as const
}

export function getLogsStreamsOwnerOwnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsStreamsOwnerOwnerIdQueryKey>
  >({
    queryKey: getLogsStreamsOwnerOwnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.streams.owner[':ownerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLogsStreamsOwnerOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsStreamsOwnerOwnerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLogsStreamsOwnerOwnerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutLogsStreamsOwnerOwnerIdMutationKey() {
  return ['logs', '/logs/streams/owner/:ownerId', 'PUT'] as const
}

export function getPutLogsStreamsOwnerOwnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLogsStreamsOwnerOwnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$put']>,
    ) {
      return parseResponse(client.logs.streams.owner[':ownerId'].$put(args, options))
    },
  })
}

export function createPutLogsStreamsOwnerOwnerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLogsStreamsOwnerOwnerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteLogsStreamsOwnerOwnerIdMutationKey() {
  return ['logs', '/logs/streams/owner/:ownerId', 'DELETE'] as const
}

export function getDeleteLogsStreamsOwnerOwnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLogsStreamsOwnerOwnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$delete']>,
    ) {
      return parseResponse(client.logs.streams.owner[':ownerId'].$delete(args, options))
    },
  })
}

export function createDeleteLogsStreamsOwnerOwnerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLogsStreamsOwnerOwnerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLogsStreamsResourceQueryKey(
  args: InferRequestType<typeof client.logs.streams.resource.$get>,
) {
  return ['logs', '/logs/streams/resource', args] as const
}

export function getLogsStreamsResourceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.logs.streams.resource.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsStreamsResourceQueryKey>
  >({
    queryKey: getLogsStreamsResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.streams.resource.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogsStreamsResource<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.logs.streams.resource.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsStreamsResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsStreamsResourceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLogsStreamsResourceResourceIdQueryKey(
  args: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$get']>,
) {
  return ['logs', '/logs/streams/resource/:resourceId', args] as const
}

export function getLogsStreamsResourceResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsStreamsResourceResourceIdQueryKey>
  >({
    queryKey: getLogsStreamsResourceResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.streams.resource[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLogsStreamsResourceResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsStreamsResourceResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLogsStreamsResourceResourceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutLogsStreamsResourceResourceIdMutationKey() {
  return ['logs', '/logs/streams/resource/:resourceId', 'PUT'] as const
}

export function getPutLogsStreamsResourceResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLogsStreamsResourceResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.logs.streams.resource[':resourceId'].$put(args, options))
    },
  })
}

export function createPutLogsStreamsResourceResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLogsStreamsResourceResourceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteLogsStreamsResourceResourceIdMutationKey() {
  return ['logs', '/logs/streams/resource/:resourceId', 'DELETE'] as const
}

export function getDeleteLogsStreamsResourceResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLogsStreamsResourceResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$delete']>,
    ) {
      return parseResponse(client.logs.streams.resource[':resourceId'].$delete(args, options))
    },
  })
}

export function createDeleteLogsStreamsResourceResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLogsStreamsResourceResourceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetricsStreamOwnerIdQueryKey(
  args: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$get']>,
) {
  return ['metrics-stream', '/metrics-stream/:ownerId', args] as const
}

export function getMetricsStreamOwnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsStreamOwnerIdQueryKey>
  >({
    queryKey: getMetricsStreamOwnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['metrics-stream'][':ownerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsStreamOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsStreamOwnerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMetricsStreamOwnerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMetricsStreamOwnerIdMutationKey() {
  return ['metrics-stream', '/metrics-stream/:ownerId', 'PUT'] as const
}

export function getPutMetricsStreamOwnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMetricsStreamOwnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$put']>,
    ) {
      return parseResponse(client['metrics-stream'][':ownerId'].$put(args, options))
    },
  })
}

export function createPutMetricsStreamOwnerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMetricsStreamOwnerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteMetricsStreamOwnerIdMutationKey() {
  return ['metrics-stream', '/metrics-stream/:ownerId', 'DELETE'] as const
}

export function getDeleteMetricsStreamOwnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMetricsStreamOwnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$delete']>,
    ) {
      return parseResponse(client['metrics-stream'][':ownerId'].$delete(args, options))
    },
  })
}

export function createDeleteMetricsStreamOwnerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMetricsStreamOwnerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetricsCpuQueryKey(args: InferRequestType<typeof client.metrics.cpu.$get>) {
  return ['metrics', '/metrics/cpu', args] as const
}

export function getMetricsCpuQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.cpu.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsCpuQueryKey>
  >({
    queryKey: getMetricsCpuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.cpu.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsCpu<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.cpu.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsCpuQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsCpuQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsCpuLimitQueryKey(
  args: InferRequestType<(typeof client.metrics)['cpu-limit']['$get']>,
) {
  return ['metrics', '/metrics/cpu-limit', args] as const
}

export function getMetricsCpuLimitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['cpu-limit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsCpuLimitQueryKey>
  >({
    queryKey: getMetricsCpuLimitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['cpu-limit'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsCpuLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['cpu-limit']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsCpuLimitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsCpuLimitQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsCpuTargetQueryKey(
  args: InferRequestType<(typeof client.metrics)['cpu-target']['$get']>,
) {
  return ['metrics', '/metrics/cpu-target', args] as const
}

export function getMetricsCpuTargetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['cpu-target']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsCpuTargetQueryKey>
  >({
    queryKey: getMetricsCpuTargetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['cpu-target'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsCpuTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['cpu-target']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsCpuTargetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsCpuTargetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsMemoryQueryKey(
  args: InferRequestType<typeof client.metrics.memory.$get>,
) {
  return ['metrics', '/metrics/memory', args] as const
}

export function getMetricsMemoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.memory.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMemoryQueryKey>
  >({
    queryKey: getMetricsMemoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.memory.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsMemory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.memory.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsMemoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsMemoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsMemoryLimitQueryKey(
  args: InferRequestType<(typeof client.metrics)['memory-limit']['$get']>,
) {
  return ['metrics', '/metrics/memory-limit', args] as const
}

export function getMetricsMemoryLimitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['memory-limit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMemoryLimitQueryKey>
  >({
    queryKey: getMetricsMemoryLimitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['memory-limit'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsMemoryLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['memory-limit']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsMemoryLimitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsMemoryLimitQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsMemoryTargetQueryKey(
  args: InferRequestType<(typeof client.metrics)['memory-target']['$get']>,
) {
  return ['metrics', '/metrics/memory-target', args] as const
}

export function getMetricsMemoryTargetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['memory-target']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMemoryTargetQueryKey>
  >({
    queryKey: getMetricsMemoryTargetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['memory-target'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsMemoryTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['memory-target']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsMemoryTargetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsMemoryTargetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsHttpRequestsQueryKey(
  args: InferRequestType<(typeof client.metrics)['http-requests']['$get']>,
) {
  return ['metrics', '/metrics/http-requests', args] as const
}

export function getMetricsHttpRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['http-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsHttpRequestsQueryKey>
  >({
    queryKey: getMetricsHttpRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['http-requests'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsHttpRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['http-requests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsHttpRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsHttpRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsHttpLatencyQueryKey(
  args: InferRequestType<(typeof client.metrics)['http-latency']['$get']>,
) {
  return ['metrics', '/metrics/http-latency', args] as const
}

export function getMetricsHttpLatencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['http-latency']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsHttpLatencyQueryKey>
  >({
    queryKey: getMetricsHttpLatencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['http-latency'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsHttpLatency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['http-latency']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsHttpLatencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsHttpLatencyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsBandwidthQueryKey(
  args: InferRequestType<typeof client.metrics.bandwidth.$get>,
) {
  return ['metrics', '/metrics/bandwidth', args] as const
}

export function getMetricsBandwidthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.bandwidth.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsBandwidthQueryKey>
  >({
    queryKey: getMetricsBandwidthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.bandwidth.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsBandwidth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.bandwidth.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsBandwidthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsBandwidthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsBandwidthSourcesQueryKey(
  args: InferRequestType<(typeof client.metrics)['bandwidth-sources']['$get']>,
) {
  return ['metrics', '/metrics/bandwidth-sources', args] as const
}

export function getMetricsBandwidthSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['bandwidth-sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsBandwidthSourcesQueryKey>
  >({
    queryKey: getMetricsBandwidthSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['bandwidth-sources'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsBandwidthSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['bandwidth-sources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsBandwidthSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMetricsBandwidthSourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsDiskUsageQueryKey(
  args: InferRequestType<(typeof client.metrics)['disk-usage']['$get']>,
) {
  return ['metrics', '/metrics/disk-usage', args] as const
}

export function getMetricsDiskUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['disk-usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsDiskUsageQueryKey>
  >({
    queryKey: getMetricsDiskUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['disk-usage'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsDiskUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['disk-usage']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsDiskUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsDiskUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsDiskCapacityQueryKey(
  args: InferRequestType<(typeof client.metrics)['disk-capacity']['$get']>,
) {
  return ['metrics', '/metrics/disk-capacity', args] as const
}

export function getMetricsDiskCapacityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['disk-capacity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsDiskCapacityQueryKey>
  >({
    queryKey: getMetricsDiskCapacityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['disk-capacity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsDiskCapacity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['disk-capacity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsDiskCapacityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsDiskCapacityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsInstanceCountQueryKey(
  args: InferRequestType<(typeof client.metrics)['instance-count']['$get']>,
) {
  return ['metrics', '/metrics/instance-count', args] as const
}

export function getMetricsInstanceCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['instance-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsInstanceCountQueryKey>
  >({
    queryKey: getMetricsInstanceCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['instance-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsInstanceCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['instance-count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsInstanceCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMetricsInstanceCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsActiveConnectionsQueryKey(
  args: InferRequestType<(typeof client.metrics)['active-connections']['$get']>,
) {
  return ['metrics', '/metrics/active-connections', args] as const
}

export function getMetricsActiveConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['active-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsActiveConnectionsQueryKey>
  >({
    queryKey: getMetricsActiveConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['active-connections'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsActiveConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['active-connections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsActiveConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMetricsActiveConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsReplicationLagQueryKey(
  args: InferRequestType<(typeof client.metrics)['replication-lag']['$get']>,
) {
  return ['metrics', '/metrics/replication-lag', args] as const
}

export function getMetricsReplicationLagQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['replication-lag']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsReplicationLagQueryKey>
  >({
    queryKey: getMetricsReplicationLagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['replication-lag'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsReplicationLag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['replication-lag']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsReplicationLagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMetricsReplicationLagQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsFiltersApplicationQueryKey(
  args: InferRequestType<typeof client.metrics.filters.application.$get>,
) {
  return ['metrics', '/metrics/filters/application', args] as const
}

export function getMetricsFiltersApplicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.application.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.filters.application.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.application.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsFiltersApplicationQueryKey>
  >({
    queryKey: getMetricsFiltersApplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.filters.application.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsFiltersApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.application.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.filters.application.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.metrics.filters.application.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsFiltersApplicationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMetricsFiltersApplicationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsFiltersHttpQueryKey(
  args: InferRequestType<typeof client.metrics.filters.http.$get>,
) {
  return ['metrics', '/metrics/filters/http', args] as const
}

export function getMetricsFiltersHttpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.filters.http.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsFiltersHttpQueryKey>
  >({
    queryKey: getMetricsFiltersHttpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.filters.http.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsFiltersHttp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.filters.http.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsFiltersHttpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsFiltersHttpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsFiltersPathQueryKey(
  args: InferRequestType<typeof client.metrics.filters.path.$get>,
) {
  return ['metrics', '/metrics/filters/path', args] as const
}

export function getMetricsFiltersPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.filters.path.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsFiltersPathQueryKey>
  >({
    queryKey: getMetricsFiltersPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.filters.path.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsFiltersPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.filters.path.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsFiltersPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsFiltersPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsTaskRunsQueuedQueryKey(
  args: InferRequestType<(typeof client.metrics)['task-runs-queued']['$get']>,
) {
  return ['metrics', '/metrics/task-runs-queued', args] as const
}

export function getMetricsTaskRunsQueuedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['task-runs-queued']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsTaskRunsQueuedQueryKey>
  >({
    queryKey: getMetricsTaskRunsQueuedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['task-runs-queued'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsTaskRunsQueued<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['task-runs-queued']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsTaskRunsQueuedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMetricsTaskRunsQueuedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetricsTaskRunsCompletedQueryKey(
  args: InferRequestType<(typeof client.metrics)['task-runs-completed']['$get']>,
) {
  return ['metrics', '/metrics/task-runs-completed', args] as const
}

export function getMetricsTaskRunsCompletedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metrics)['task-runs-completed']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsTaskRunsCompletedQueryKey>
  >({
    queryKey: getMetricsTaskRunsCompletedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics['task-runs-completed'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsTaskRunsCompleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metrics)['task-runs-completed']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsTaskRunsCompletedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMetricsTaskRunsCompletedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKeyValueQueryKey(args: InferRequestType<(typeof client)['key-value']['$get']>) {
  return ['key-value', '/key-value', args] as const
}

export function getKeyValueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['key-value']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeyValueQueryKey>
  >({
    queryKey: getKeyValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['key-value'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKeyValue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['key-value']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeyValueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeyValueQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostKeyValueMutationKey() {
  return ['key-value', '/key-value', 'POST'] as const
}

export function getPostKeyValueMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['key-value']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKeyValueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['key-value']['$post']>) {
      return parseResponse(client['key-value'].$post(args, options))
    },
  })
}

export function createPostKeyValue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['key-value']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKeyValueMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKeyValueRedisIdQueryKey(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['$get']>,
) {
  return ['key-value', '/key-value/:redisId', args] as const
}

export function getKeyValueRedisIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeyValueRedisIdQueryKey>
  >({
    queryKey: getKeyValueRedisIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['key-value'][':redisId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKeyValueRedisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['key-value'][':redisId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeyValueRedisIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeyValueRedisIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteKeyValueRedisIdMutationKey() {
  return ['key-value', '/key-value/:redisId', 'DELETE'] as const
}

export function getDeleteKeyValueRedisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['key-value'][':redisId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeyValueRedisIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['key-value'][':redisId']['$delete']>) {
      return parseResponse(client['key-value'][':redisId'].$delete(args, options))
    },
  })
}

export function createDeleteKeyValueRedisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['key-value'][':redisId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKeyValueRedisIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchKeyValueRedisIdMutationKey() {
  return ['key-value', '/key-value/:redisId', 'PATCH'] as const
}

export function getPatchKeyValueRedisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['key-value'][':redisId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchKeyValueRedisIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['key-value'][':redisId']['$patch']>) {
      return parseResponse(client['key-value'][':redisId'].$patch(args, options))
    },
  })
}

export function createPatchKeyValueRedisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['key-value'][':redisId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchKeyValueRedisIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKeyValueRedisIdConnectionInfoQueryKey(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>,
) {
  return ['key-value', '/key-value/:redisId/connection-info', args] as const
}

export function getKeyValueRedisIdConnectionInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeyValueRedisIdConnectionInfoQueryKey>
  >({
    queryKey: getKeyValueRedisIdConnectionInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['key-value'][':redisId']['connection-info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKeyValueRedisIdConnectionInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeyValueRedisIdConnectionInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getKeyValueRedisIdConnectionInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostKeyValueRedisIdSuspendMutationKey() {
  return ['key-value', '/key-value/:redisId/suspend', 'POST'] as const
}

export function getPostKeyValueRedisIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['key-value'][':redisId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['key-value'][':redisId']['suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKeyValueRedisIdSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['key-value'][':redisId']['suspend']['$post']>,
    ) {
      return parseResponse(client['key-value'][':redisId'].suspend.$post(args, options))
    },
  })
}

export function createPostKeyValueRedisIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['key-value'][':redisId']['suspend']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['key-value'][':redisId']['suspend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKeyValueRedisIdSuspendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostKeyValueRedisIdResumeMutationKey() {
  return ['key-value', '/key-value/:redisId/resume', 'POST'] as const
}

export function getPostKeyValueRedisIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['key-value'][':redisId']['resume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['key-value'][':redisId']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKeyValueRedisIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['key-value'][':redisId']['resume']['$post']>,
    ) {
      return parseResponse(client['key-value'][':redisId'].resume.$post(args, options))
    },
  })
}

export function createPostKeyValueRedisIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['key-value'][':redisId']['resume']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['key-value'][':redisId']['resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKeyValueRedisIdResumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRedisQueryKey(args: InferRequestType<typeof client.redis.$get>) {
  return ['redis', '/redis', args] as const
}

export function getRedisQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.redis.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRedisQueryKey>
  >({
    queryKey: getRedisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.redis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRedis<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.redis.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRedisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRedisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRedisMutationKey() {
  return ['redis', '/redis', 'POST'] as const
}

export function getPostRedisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$post>>>>>,
    TError,
    InferRequestType<typeof client.redis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRedisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.redis.$post>) {
      return parseResponse(client.redis.$post(args, options))
    },
  })
}

export function createPostRedis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$post>>>>>,
        TError,
        InferRequestType<typeof client.redis.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRedisMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRedisRedisIdQueryKey(
  args: InferRequestType<(typeof client.redis)[':redisId']['$get']>,
) {
  return ['redis', '/redis/:redisId', args] as const
}

export function getRedisRedisIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.redis)[':redisId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRedisRedisIdQueryKey>
  >({
    queryKey: getRedisRedisIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.redis[':redisId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRedisRedisId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.redis)[':redisId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRedisRedisIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRedisRedisIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteRedisRedisIdMutationKey() {
  return ['redis', '/redis/:redisId', 'DELETE'] as const
}

export function getDeleteRedisRedisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.redis)[':redisId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRedisRedisIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.redis)[':redisId']['$delete']>) {
      return parseResponse(client.redis[':redisId'].$delete(args, options))
    },
  })
}

export function createDeleteRedisRedisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.redis)[':redisId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.redis)[':redisId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRedisRedisIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchRedisRedisIdMutationKey() {
  return ['redis', '/redis/:redisId', 'PATCH'] as const
}

export function getPatchRedisRedisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.redis)[':redisId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRedisRedisIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.redis)[':redisId']['$patch']>) {
      return parseResponse(client.redis[':redisId'].$patch(args, options))
    },
  })
}

export function createPatchRedisRedisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.redis)[':redisId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRedisRedisIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRedisRedisIdConnectionInfoQueryKey(
  args: InferRequestType<(typeof client.redis)[':redisId']['connection-info']['$get']>,
) {
  return ['redis', '/redis/:redisId/connection-info', args] as const
}

export function getRedisRedisIdConnectionInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.redis)[':redisId']['connection-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRedisRedisIdConnectionInfoQueryKey>
  >({
    queryKey: getRedisRedisIdConnectionInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.redis[':redisId']['connection-info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRedisRedisIdConnectionInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.redis)[':redisId']['connection-info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRedisRedisIdConnectionInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRedisRedisIdConnectionInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostRedisRedisIdSuspendMutationKey() {
  return ['redis', '/redis/:redisId/suspend', 'POST'] as const
}

export function getPostRedisRedisIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.redis)[':redisId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.redis)[':redisId']['suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRedisRedisIdSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.redis)[':redisId']['suspend']['$post']>,
    ) {
      return parseResponse(client.redis[':redisId'].suspend.$post(args, options))
    },
  })
}

export function createPostRedisRedisIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.redis)[':redisId']['suspend']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.redis)[':redisId']['suspend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRedisRedisIdSuspendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRedisRedisIdResumeMutationKey() {
  return ['redis', '/redis/:redisId/resume', 'POST'] as const
}

export function getPostRedisRedisIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.redis)[':redisId']['resume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.redis)[':redisId']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRedisRedisIdResumeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.redis)[':redisId']['resume']['$post']>) {
      return parseResponse(client.redis[':redisId'].resume.$post(args, options))
    },
  })
}

export function createPostRedisRedisIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.redis)[':redisId']['resume']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.redis)[':redisId']['resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRedisRedisIdResumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostgresQueryKey(args: InferRequestType<typeof client.postgres.$get>) {
  return ['postgres', '/postgres', args] as const
}

export function getPostgresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.postgres.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostgresQueryKey>
  >({
    queryKey: getPostgresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postgres.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPostgres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.postgres.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPostgresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostgresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPostgresMutationKey() {
  return ['postgres', '/postgres', 'POST'] as const
}

export function getPostPostgresMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$post>>>>>,
    TError,
    InferRequestType<typeof client.postgres.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPostgresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.postgres.$post>) {
      return parseResponse(client.postgres.$post(args, options))
    },
  })
}

export function createPostPostgres<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.postgres.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostgresMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostgresPostgresIdQueryKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId', args] as const
}

export function getPostgresPostgresIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdQueryKey>
  >({
    queryKey: getPostgresPostgresIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postgres[':postgresId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostgresPostgresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.postgres)[':postgresId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostgresPostgresIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostgresPostgresIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeletePostgresPostgresIdMutationKey() {
  return ['postgres', '/postgres/:postgresId', 'DELETE'] as const
}

export function getDeletePostgresPostgresIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.postgres)[':postgresId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePostgresPostgresIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.postgres)[':postgresId']['$delete']>) {
      return parseResponse(client.postgres[':postgresId'].$delete(args, options))
    },
  })
}

export function createDeletePostgresPostgresId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.postgres)[':postgresId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePostgresPostgresIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchPostgresPostgresIdMutationKey() {
  return ['postgres', '/postgres/:postgresId', 'PATCH'] as const
}

export function getPatchPostgresPostgresIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.postgres)[':postgresId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPostgresPostgresIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.postgres)[':postgresId']['$patch']>) {
      return parseResponse(client.postgres[':postgresId'].$patch(args, options))
    },
  })
}

export function createPatchPostgresPostgresId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.postgres)[':postgresId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPostgresPostgresIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostgresPostgresIdConnectionInfoQueryKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/connection-info', args] as const
}

export function getPostgresPostgresIdConnectionInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdConnectionInfoQueryKey>
  >({
    queryKey: getPostgresPostgresIdConnectionInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postgres[':postgresId']['connection-info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostgresPostgresIdConnectionInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostgresPostgresIdConnectionInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPostgresPostgresIdConnectionInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostgresPostgresIdRecoveryQueryKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/recovery', args] as const
}

export function getPostgresPostgresIdRecoveryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdRecoveryQueryKey>
  >({
    queryKey: getPostgresPostgresIdRecoveryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postgres[':postgresId'].recovery.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostgresPostgresIdRecovery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostgresPostgresIdRecoveryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPostgresPostgresIdRecoveryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPostgresPostgresIdRecoveryMutationKey() {
  return ['postgres', '/postgres/:postgresId/recovery', 'POST'] as const
}

export function getPostPostgresPostgresIdRecoveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostgresPostgresIdRecoveryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$post']>,
    ) {
      return parseResponse(client.postgres[':postgresId'].recovery.$post(args, options))
    },
  })
}

export function createPostPostgresPostgresIdRecovery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostgresPostgresIdRecoveryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPostgresPostgresIdSuspendMutationKey() {
  return ['postgres', '/postgres/:postgresId/suspend', 'POST'] as const
}

export function getPostPostgresPostgresIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.postgres)[':postgresId']['suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostgresPostgresIdSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.postgres)[':postgresId']['suspend']['$post']>,
    ) {
      return parseResponse(client.postgres[':postgresId'].suspend.$post(args, options))
    },
  })
}

export function createPostPostgresPostgresIdSuspend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['suspend']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.postgres)[':postgresId']['suspend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostgresPostgresIdSuspendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPostgresPostgresIdResumeMutationKey() {
  return ['postgres', '/postgres/:postgresId/resume', 'POST'] as const
}

export function getPostPostgresPostgresIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['resume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.postgres)[':postgresId']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostgresPostgresIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.postgres)[':postgresId']['resume']['$post']>,
    ) {
      return parseResponse(client.postgres[':postgresId'].resume.$post(args, options))
    },
  })
}

export function createPostPostgresPostgresIdResume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['resume']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.postgres)[':postgresId']['resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostgresPostgresIdResumeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPostgresPostgresIdRestartMutationKey() {
  return ['postgres', '/postgres/:postgresId/restart', 'POST'] as const
}

export function getPostPostgresPostgresIdRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['restart']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.postgres)[':postgresId']['restart']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostgresPostgresIdRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.postgres)[':postgresId']['restart']['$post']>,
    ) {
      return parseResponse(client.postgres[':postgresId'].restart.$post(args, options))
    },
  })
}

export function createPostPostgresPostgresIdRestart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['restart']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.postgres)[':postgresId']['restart']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostgresPostgresIdRestartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPostgresPostgresIdFailoverMutationKey() {
  return ['postgres', '/postgres/:postgresId/failover', 'POST'] as const
}

export function getPostPostgresPostgresIdFailoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['failover']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.postgres)[':postgresId']['failover']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostgresPostgresIdFailoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.postgres)[':postgresId']['failover']['$post']>,
    ) {
      return parseResponse(client.postgres[':postgresId'].failover.$post(args, options))
    },
  })
}

export function createPostPostgresPostgresIdFailover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['failover']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.postgres)[':postgresId']['failover']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostgresPostgresIdFailoverMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostgresPostgresIdExportQueryKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['export']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/export', args] as const
}

export function getPostgresPostgresIdExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdExportQueryKey>
  >({
    queryKey: getPostgresPostgresIdExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postgres[':postgresId'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostgresPostgresIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.postgres)[':postgresId']['export']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostgresPostgresIdExportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPostgresPostgresIdExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPostgresPostgresIdExportMutationKey() {
  return ['postgres', '/postgres/:postgresId/export', 'POST'] as const
}

export function getPostPostgresPostgresIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.postgres)[':postgresId']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostgresPostgresIdExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.postgres)[':postgresId']['export']['$post']>,
    ) {
      return parseResponse(client.postgres[':postgresId'].export.$post(args, options))
    },
  })
}

export function createPostPostgresPostgresIdExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.postgres)[':postgresId']['export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostgresPostgresIdExportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostgresPostgresIdCredentialsQueryKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/credentials', args] as const
}

export function getPostgresPostgresIdCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdCredentialsQueryKey>
  >({
    queryKey: getPostgresPostgresIdCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postgres[':postgresId'].credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostgresPostgresIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostgresPostgresIdCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPostgresPostgresIdCredentialsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPostgresPostgresIdCredentialsMutationKey() {
  return ['postgres', '/postgres/:postgresId/credentials', 'POST'] as const
}

export function getPostPostgresPostgresIdCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostgresPostgresIdCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$post']>,
    ) {
      return parseResponse(client.postgres[':postgresId'].credentials.$post(args, options))
    },
  })
}

export function createPostPostgresPostgresIdCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostgresPostgresIdCredentialsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeletePostgresPostgresIdCredentialsUsernameMutationKey() {
  return ['postgres', '/postgres/:postgresId/credentials/:username', 'DELETE'] as const
}

export function getDeletePostgresPostgresIdCredentialsUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.postgres)[':postgresId']['credentials'][':username']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.postgres)[':postgresId']['credentials'][':username']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePostgresPostgresIdCredentialsUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.postgres)[':postgresId']['credentials'][':username']['$delete']
      >,
    ) {
      return parseResponse(
        client.postgres[':postgresId'].credentials[':username'].$delete(args, options),
      )
    },
  })
}

export function createDeletePostgresPostgresIdCredentialsUsername<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.postgres)[':postgresId']['credentials'][':username']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.postgres)[':postgresId']['credentials'][':username']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePostgresPostgresIdCredentialsUsernameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostgresPostgresIdQueryProcessesQueryKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/query/processes', args] as const
}

export function getPostgresPostgresIdQueryProcessesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdQueryProcessesQueryKey>
  >({
    queryKey: getPostgresPostgresIdQueryProcessesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postgres[':postgresId'].query.processes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostgresPostgresIdQueryProcesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.postgres)[':postgresId']['query']['processes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostgresPostgresIdQueryProcessesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPostgresPostgresIdQueryProcessesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostgresPostgresIdQueryTopQueriesQueryKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/query/top-queries', args] as const
}

export function getPostgresPostgresIdQueryTopQueriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdQueryTopQueriesQueryKey>
  >({
    queryKey: getPostgresPostgresIdQueryTopQueriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postgres[':postgresId'].query['top-queries'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostgresPostgresIdQueryTopQueries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.postgres)[':postgresId']['query']['top-queries']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostgresPostgresIdQueryTopQueriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPostgresPostgresIdQueryTopQueriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostgresPostgresIdQuerySizesQueryKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/query/sizes', args] as const
}

export function getPostgresPostgresIdQuerySizesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdQuerySizesQueryKey>
  >({
    queryKey: getPostgresPostgresIdQuerySizesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postgres[':postgresId'].query.sizes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostgresPostgresIdQuerySizes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostgresPostgresIdQuerySizesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPostgresPostgresIdQuerySizesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostgresPostgresIdQueryTableScansQueryKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/query/table-scans', args] as const
}

export function getPostgresPostgresIdQueryTableScansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdQueryTableScansQueryKey>
  >({
    queryKey: getPostgresPostgresIdQueryTableScansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postgres[':postgresId'].query['table-scans'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostgresPostgresIdQueryTableScans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.postgres)[':postgresId']['query']['table-scans']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostgresPostgresIdQueryTableScansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPostgresPostgresIdQueryTableScansQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsQueryKey(args: InferRequestType<typeof client.projects.$get>) {
  return ['projects', '/projects', args] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostProjectsMutationKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.$post>) {
      return parseResponse(client.projects.$post(args, options))
    },
  })
}

export function createPostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
) {
  return ['projects', '/projects/:projectId', args] as const
}

export function getProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >({
    queryKey: getProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsProjectIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteProjectsProjectIdMutationKey() {
  return ['projects', '/projects/:projectId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':projectId']['$delete']>) {
      return parseResponse(client.projects[':projectId'].$delete(args, options))
    },
  })
}

export function createDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchProjectsProjectIdMutationKey() {
  return ['projects', '/projects/:projectId', 'PATCH'] as const
}

export function getPatchProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':projectId']['$patch']>) {
      return parseResponse(client.projects[':projectId'].$patch(args, options))
    },
  })
}

export function createPatchProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnvironmentsQueryKey(args: InferRequestType<typeof client.environments.$get>) {
  return ['environments', '/environments', args] as const
}

export function getEnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.environments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsQueryKey>
  >({
    queryKey: getEnvironmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.environments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.environments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnvironmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostEnvironmentsMutationKey() {
  return ['environments', '/environments', 'POST'] as const
}

export function getPostEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.environments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnvironmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.environments.$post>) {
      return parseResponse(client.environments.$post(args, options))
    },
  })
}

export function createPostEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.environments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnvironmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnvironmentsEnvironmentIdQueryKey(
  args: InferRequestType<(typeof client.environments)[':environmentId']['$get']>,
) {
  return ['environments', '/environments/:environmentId', args] as const
}

export function getEnvironmentsEnvironmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.environments)[':environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsEnvironmentIdQueryKey>
  >({
    queryKey: getEnvironmentsEnvironmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.environments[':environmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.environments)[':environmentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentsEnvironmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnvironmentsEnvironmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteEnvironmentsEnvironmentIdMutationKey() {
  return ['environments', '/environments/:environmentId', 'DELETE'] as const
}

export function getDeleteEnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.environments)[':environmentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.environments)[':environmentId']['$delete']>,
    ) {
      return parseResponse(client.environments[':environmentId'].$delete(args, options))
    },
  })
}

export function createDeleteEnvironmentsEnvironmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.environments)[':environmentId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.environments)[':environmentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEnvironmentsEnvironmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchEnvironmentsEnvironmentIdMutationKey() {
  return ['environments', '/environments/:environmentId', 'PATCH'] as const
}

export function getPatchEnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environmentId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.environments)[':environmentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.environments)[':environmentId']['$patch']>,
    ) {
      return parseResponse(client.environments[':environmentId'].$patch(args, options))
    },
  })
}

export function createPatchEnvironmentsEnvironmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.environments)[':environmentId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.environments)[':environmentId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEnvironmentsEnvironmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEnvironmentsEnvironmentIdResourcesMutationKey() {
  return ['environments', '/environments/:environmentId/resources', 'POST'] as const
}

export function getPostEnvironmentsEnvironmentIdResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environmentId']['resources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.environments)[':environmentId']['resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEnvironmentsEnvironmentIdResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.environments)[':environmentId']['resources']['$post']>,
    ) {
      return parseResponse(client.environments[':environmentId'].resources.$post(args, options))
    },
  })
}

export function createPostEnvironmentsEnvironmentIdResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.environments)[':environmentId']['resources']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.environments)[':environmentId']['resources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnvironmentsEnvironmentIdResourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteEnvironmentsEnvironmentIdResourcesMutationKey() {
  return ['environments', '/environments/:environmentId/resources', 'DELETE'] as const
}

export function getDeleteEnvironmentsEnvironmentIdResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.environments)[':environmentId']['resources']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.environments)[':environmentId']['resources']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnvironmentsEnvironmentIdResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.environments)[':environmentId']['resources']['$delete']
      >,
    ) {
      return parseResponse(client.environments[':environmentId'].resources.$delete(args, options))
    },
  })
}

export function createDeleteEnvironmentsEnvironmentIdResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.environments)[':environmentId']['resources']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.environments)[':environmentId']['resources']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEnvironmentsEnvironmentIdResourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnvGroupsQueryKey(
  args: InferRequestType<(typeof client)['env-groups']['$get']>,
) {
  return ['env-groups', '/env-groups', args] as const
}

export function getEnvGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['env-groups']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEnvGroupsQueryKey>
  >({
    queryKey: getEnvGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['env-groups'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEnvGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['env-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnvGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostEnvGroupsMutationKey() {
  return ['env-groups', '/env-groups', 'POST'] as const
}

export function getPostEnvGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['env-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEnvGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['env-groups']['$post']>) {
      return parseResponse(client['env-groups'].$post(args, options))
    },
  })
}

export function createPostEnvGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['env-groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnvGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnvGroupsEnvGroupIdQueryKey(
  args: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$get']>,
) {
  return ['env-groups', '/env-groups/:envGroupId', args] as const
}

export function getEnvGroupsEnvGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvGroupsEnvGroupIdQueryKey>
  >({
    queryKey: getEnvGroupsEnvGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['env-groups'][':envGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvGroupsEnvGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['env-groups'][':envGroupId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvGroupsEnvGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnvGroupsEnvGroupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteEnvGroupsEnvGroupIdMutationKey() {
  return ['env-groups', '/env-groups/:envGroupId', 'DELETE'] as const
}

export function getDeleteEnvGroupsEnvGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['env-groups'][':envGroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnvGroupsEnvGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$delete']>,
    ) {
      return parseResponse(client['env-groups'][':envGroupId'].$delete(args, options))
    },
  })
}

export function createDeleteEnvGroupsEnvGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['env-groups'][':envGroupId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEnvGroupsEnvGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchEnvGroupsEnvGroupIdMutationKey() {
  return ['env-groups', '/env-groups/:envGroupId', 'PATCH'] as const
}

export function getPatchEnvGroupsEnvGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['env-groups'][':envGroupId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEnvGroupsEnvGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$patch']>,
    ) {
      return parseResponse(client['env-groups'][':envGroupId'].$patch(args, options))
    },
  })
}

export function createPatchEnvGroupsEnvGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['env-groups'][':envGroupId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEnvGroupsEnvGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEnvGroupsEnvGroupIdServicesServiceIdMutationKey() {
  return ['env-groups', '/env-groups/:envGroupId/services/:serviceId', 'POST'] as const
}

export function getPostEnvGroupsEnvGroupIdServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEnvGroupsEnvGroupIdServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$post']
      >,
    ) {
      return parseResponse(
        client['env-groups'][':envGroupId'].services[':serviceId'].$post(args, options),
      )
    },
  })
}

export function createPostEnvGroupsEnvGroupIdServicesServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnvGroupsEnvGroupIdServicesServiceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteEnvGroupsEnvGroupIdServicesServiceIdMutationKey() {
  return ['env-groups', '/env-groups/:envGroupId/services/:serviceId', 'DELETE'] as const
}

export function getDeleteEnvGroupsEnvGroupIdServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnvGroupsEnvGroupIdServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$delete']
      >,
    ) {
      return parseResponse(
        client['env-groups'][':envGroupId'].services[':serviceId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteEnvGroupsEnvGroupIdServicesServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEnvGroupsEnvGroupIdServicesServiceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryKey(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
  >,
) {
  return ['env-groups', '/env-groups/:envGroupId/env-vars/:envVarKey', args] as const
}

export function getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryKey>
  >({
    queryKey: getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvGroupsEnvGroupIdEnvVarsEnvVarKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutEnvGroupsEnvGroupIdEnvVarsEnvVarKeyMutationKey() {
  return ['env-groups', '/env-groups/:envGroupId/env-vars/:envVarKey', 'PUT'] as const
}

export function getPutEnvGroupsEnvGroupIdEnvVarsEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEnvGroupsEnvGroupIdEnvVarsEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$put']
      >,
    ) {
      return parseResponse(
        client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$put(args, options),
      )
    },
  })
}

export function createPutEnvGroupsEnvGroupIdEnvVarsEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEnvGroupsEnvGroupIdEnvVarsEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyMutationKey() {
  return ['env-groups', '/env-groups/:envGroupId/env-vars/:envVarKey', 'DELETE'] as const
}

export function getDeleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$delete']
      >,
    ) {
      return parseResponse(
        client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$delete(args, options),
      )
    },
  })
}

export function createDeleteEnvGroupsEnvGroupIdEnvVarsEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryKey(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
  >,
) {
  return ['env-groups', '/env-groups/:envGroupId/secret-files/:envVarKey', args] as const
}

export function getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryKey>
  >({
    queryKey: getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvGroupsEnvGroupIdSecretFilesEnvVarKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutEnvGroupsEnvGroupIdSecretFilesEnvVarKeyMutationKey() {
  return ['env-groups', '/env-groups/:envGroupId/secret-files/:envVarKey', 'PUT'] as const
}

export function getPutEnvGroupsEnvGroupIdSecretFilesEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEnvGroupsEnvGroupIdSecretFilesEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$put']
      >,
    ) {
      return parseResponse(
        client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$put(args, options),
      )
    },
  })
}

export function createPutEnvGroupsEnvGroupIdSecretFilesEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEnvGroupsEnvGroupIdSecretFilesEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyMutationKey() {
  return ['env-groups', '/env-groups/:envGroupId/secret-files/:envVarKey', 'DELETE'] as const
}

export function getDeleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$delete']
      >,
    ) {
      return parseResponse(
        client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$delete(args, options),
      )
    },
  })
}

export function createDeleteEnvGroupsEnvGroupIdSecretFilesEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMaintenanceQueryKey(args: InferRequestType<typeof client.maintenance.$get>) {
  return ['maintenance', '/maintenance', args] as const
}

export function getMaintenanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.maintenance.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMaintenanceQueryKey>
  >({
    queryKey: getMaintenanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.maintenance.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMaintenance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.maintenance.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMaintenanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMaintenanceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMaintenanceMaintenanceRunIDQueryKey(
  args: InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$get']>,
) {
  return ['maintenance', '/maintenance/:maintenanceRunID', args] as const
}

export function getMaintenanceMaintenanceRunIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMaintenanceMaintenanceRunIDQueryKey>
  >({
    queryKey: getMaintenanceMaintenanceRunIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.maintenance[':maintenanceRunID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMaintenanceMaintenanceRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMaintenanceMaintenanceRunIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMaintenanceMaintenanceRunIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchMaintenanceMaintenanceRunIDMutationKey() {
  return ['maintenance', '/maintenance/:maintenanceRunID', 'PATCH'] as const
}

export function getPatchMaintenanceMaintenanceRunIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMaintenanceMaintenanceRunIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$patch']>,
    ) {
      return parseResponse(client.maintenance[':maintenanceRunID'].$patch(args, options))
    },
  })
}

export function createPatchMaintenanceMaintenanceRunID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMaintenanceMaintenanceRunIDMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMaintenanceMaintenanceRunIDTriggerMutationKey() {
  return ['maintenance', '/maintenance/:maintenanceRunID/trigger', 'POST'] as const
}

export function getPostMaintenanceMaintenanceRunIDTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['trigger']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['trigger']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMaintenanceMaintenanceRunIDTriggerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['trigger']['$post']>,
    ) {
      return parseResponse(client.maintenance[':maintenanceRunID'].trigger.$post(args, options))
    },
  })
}

export function createPostMaintenanceMaintenanceRunIDTrigger<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.maintenance)[':maintenanceRunID']['trigger']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['trigger']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMaintenanceMaintenanceRunIDTriggerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBuildSourcesQueryKey(
  args: InferRequestType<(typeof client)['build-sources']['$get']>,
) {
  return ['build-sources', '/build-sources', args] as const
}

export function getBuildSourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['build-sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesQueryKey>
  >({
    queryKey: getBuildSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['build-sources'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBuildSources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['build-sources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBuildSourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBuildSourcesMutationKey() {
  return ['build-sources', '/build-sources', 'POST'] as const
}

export function getPostBuildSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['build-sources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBuildSourcesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['build-sources']['$post']>) {
      return parseResponse(client['build-sources'].$post(args, options))
    },
  })
}

export function createPostBuildSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['build-sources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBuildSourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBuildSourcesBuildSourceIdQueryKey(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$get']>,
) {
  return ['build-sources', '/build-sources/:buildSourceId', args] as const
}

export function getBuildSourcesBuildSourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdQueryKey>
  >({
    queryKey: getBuildSourcesBuildSourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['build-sources'][':buildSourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBuildSourcesBuildSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildSourcesBuildSourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBuildSourcesBuildSourceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteBuildSourcesBuildSourceIdMutationKey() {
  return ['build-sources', '/build-sources/:buildSourceId', 'DELETE'] as const
}

export function getDeleteBuildSourcesBuildSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBuildSourcesBuildSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$delete']>,
    ) {
      return parseResponse(client['build-sources'][':buildSourceId'].$delete(args, options))
    },
  })
}

export function createDeleteBuildSourcesBuildSourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBuildSourcesBuildSourceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchBuildSourcesBuildSourceIdMutationKey() {
  return ['build-sources', '/build-sources/:buildSourceId', 'PATCH'] as const
}

export function getPatchBuildSourcesBuildSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBuildSourcesBuildSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$patch']>,
    ) {
      return parseResponse(client['build-sources'][':buildSourceId'].$patch(args, options))
    },
  })
}

export function createPatchBuildSourcesBuildSourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBuildSourcesBuildSourceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBuildSourcesBuildSourceIdBuildsQueryKey(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>,
) {
  return ['build-sources', '/build-sources/:buildSourceId/builds', args] as const
}

export function getBuildSourcesBuildSourceIdBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdBuildsQueryKey>
  >({
    queryKey: getBuildSourcesBuildSourceIdBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['build-sources'][':buildSourceId'].builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBuildSourcesBuildSourceIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['builds']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildSourcesBuildSourceIdBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBuildSourcesBuildSourceIdBuildsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostBuildSourcesBuildSourceIdBuildsMutationKey() {
  return ['build-sources', '/build-sources/:buildSourceId/builds', 'POST'] as const
}

export function getPostBuildSourcesBuildSourceIdBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBuildSourcesBuildSourceIdBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$post']>,
    ) {
      return parseResponse(client['build-sources'][':buildSourceId'].builds.$post(args, options))
    },
  })
}

export function createPostBuildSourcesBuildSourceIdBuilds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBuildSourcesBuildSourceIdBuildsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBuildSourcesBuildSourceIdBuildsBuildIdQueryKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/builds/:buildId', args] as const
}

export function getBuildSourcesBuildSourceIdBuildsBuildIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdBuildsBuildIdQueryKey>
  >({
    queryKey: getBuildSourcesBuildSourceIdBuildsBuildIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['build-sources'][':buildSourceId'].builds[':buildId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBuildSourcesBuildSourceIdBuildsBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildSourcesBuildSourceIdBuildsBuildIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBuildSourcesBuildSourceIdBuildsBuildIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getBuildSourcesBuildSourceIdEnvVarsQueryKey(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>,
) {
  return ['build-sources', '/build-sources/:buildSourceId/env-vars', args] as const
}

export function getBuildSourcesBuildSourceIdEnvVarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdEnvVarsQueryKey>
  >({
    queryKey: getBuildSourcesBuildSourceIdEnvVarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['env-vars'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBuildSourcesBuildSourceIdEnvVars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildSourcesBuildSourceIdEnvVarsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBuildSourcesBuildSourceIdEnvVarsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBuildSourcesBuildSourceIdEnvVarsMutationKey() {
  return ['build-sources', '/build-sources/:buildSourceId/env-vars', 'PUT'] as const
}

export function getPutBuildSourcesBuildSourceIdEnvVarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBuildSourcesBuildSourceIdEnvVarsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['build-sources'][':buildSourceId']['env-vars']['$put']
      >,
    ) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['env-vars'].$put(args, options),
      )
    },
  })
}

export function createPutBuildSourcesBuildSourceIdEnvVars<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBuildSourcesBuildSourceIdEnvVarsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/env-vars/:envVarKey', args] as const
}

export function getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryKey>
  >({
    queryKey: getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBuildSourcesBuildSourceIdEnvVarsEnvVarKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutBuildSourcesBuildSourceIdEnvVarsEnvVarKeyMutationKey() {
  return ['build-sources', '/build-sources/:buildSourceId/env-vars/:envVarKey', 'PUT'] as const
}

export function getPutBuildSourcesBuildSourceIdEnvVarsEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBuildSourcesBuildSourceIdEnvVarsEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$put']
      >,
    ) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$put(args, options),
      )
    },
  })
}

export function createPutBuildSourcesBuildSourceIdEnvVarsEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBuildSourcesBuildSourceIdEnvVarsEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyMutationKey() {
  return ['build-sources', '/build-sources/:buildSourceId/env-vars/:envVarKey', 'DELETE'] as const
}

export function getDeleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$delete']
      >,
    ) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$delete(args, options),
      )
    },
  })
}

export function createDeleteBuildSourcesBuildSourceIdEnvVarsEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBuildSourcesBuildSourceIdSecretFilesQueryKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/secret-files', args] as const
}

export function getBuildSourcesBuildSourceIdSecretFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdSecretFilesQueryKey>
  >({
    queryKey: getBuildSourcesBuildSourceIdSecretFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['secret-files'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBuildSourcesBuildSourceIdSecretFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildSourcesBuildSourceIdSecretFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBuildSourcesBuildSourceIdSecretFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutBuildSourcesBuildSourceIdSecretFilesMutationKey() {
  return ['build-sources', '/build-sources/:buildSourceId/secret-files', 'PUT'] as const
}

export function getPutBuildSourcesBuildSourceIdSecretFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBuildSourcesBuildSourceIdSecretFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['build-sources'][':buildSourceId']['secret-files']['$put']
      >,
    ) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['secret-files'].$put(args, options),
      )
    },
  })
}

export function createPutBuildSourcesBuildSourceIdSecretFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['build-sources'][':buildSourceId']['secret-files']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['build-sources'][':buildSourceId']['secret-files']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBuildSourcesBuildSourceIdSecretFilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/secret-files/:envVarKey', args] as const
}

export function getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryKey>
  >({
    queryKey: getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBuildSourcesBuildSourceIdSecretFilesEnvVarKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutBuildSourcesBuildSourceIdSecretFilesEnvVarKeyMutationKey() {
  return ['build-sources', '/build-sources/:buildSourceId/secret-files/:envVarKey', 'PUT'] as const
}

export function getPutBuildSourcesBuildSourceIdSecretFilesEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBuildSourcesBuildSourceIdSecretFilesEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$put']
      >,
    ) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$put(args, options),
      )
    },
  })
}

export function createPutBuildSourcesBuildSourceIdSecretFilesEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBuildSourcesBuildSourceIdSecretFilesEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyMutationKey() {
  return [
    'build-sources',
    '/build-sources/:buildSourceId/secret-files/:envVarKey',
    'DELETE',
  ] as const
}

export function getDeleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$delete']
      >,
    ) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteBuildSourcesBuildSourceIdSecretFilesEnvVarKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdMutationKey() {
  return ['build-sources', '/build-sources/:buildSourceId/env-groups/:envGroupId', 'POST'] as const
}

export function getPostBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$post']
      >,
    ) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['env-groups'][':envGroupId'].$post(args, options),
      )
    },
  })
}

export function createPostBuildSourcesBuildSourceIdEnvGroupsEnvGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdMutationKey() {
  return [
    'build-sources',
    '/build-sources/:buildSourceId/env-groups/:envGroupId',
    'DELETE',
  ] as const
}

export function getDeleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['env-groups'][':envGroupId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhooksQueryKey(args: InferRequestType<typeof client.webhooks.$get>) {
  return ['webhooks', '/webhooks', args] as const
}

export function getWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >({
    queryKey: getWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function createPostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhookId', args] as const
}

export function getWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >({
    queryKey: getWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>) {
      return parseResponse(client.webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function createDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhookId', 'PATCH'] as const
}

export function getPatchWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhookId']['$patch']>) {
      return parseResponse(client.webhooks[':webhookId'].$patch(args, options))
    },
  })
}

export function createPatchWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':webhookId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhooksWebhookIdEventsQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['events']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhookId/events', args] as const
}

export function getWebhooksWebhookIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdEventsQueryKey>
  >({
    queryKey: getWebhooksWebhookIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhookId'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksWebhookIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':webhookId']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebhooksWebhookIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkflowsQueryKey(args: InferRequestType<typeof client.workflows.$get>) {
  return ['workflows', '/workflows', args] as const
}

export function getWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.workflows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkflowsQueryKey>
  >({
    queryKey: getWorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.workflows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkflowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostWorkflowsMutationKey() {
  return ['workflows', '/workflows', 'POST'] as const
}

export function getPostWorkflowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$post>>>>>,
    TError,
    InferRequestType<typeof client.workflows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workflows.$post>) {
      return parseResponse(client.workflows.$post(args, options))
    },
  })
}

export function createPostWorkflows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.workflows.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkflowsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkflowsWorkflowIdQueryKey(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$get']>,
) {
  return ['workflows', '/workflows/:workflowId', args] as const
}

export function getWorkflowsWorkflowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsWorkflowIdQueryKey>
  >({
    queryKey: getWorkflowsWorkflowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflows[':workflowId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkflowsWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workflows)[':workflowId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowsWorkflowIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkflowsWorkflowIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteWorkflowsWorkflowIdMutationKey() {
  return ['workflows', '/workflows/:workflowId', 'DELETE'] as const
}

export function getDeleteWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.workflows)[':workflowId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkflowsWorkflowIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflows)[':workflowId']['$delete']>) {
      return parseResponse(client.workflows[':workflowId'].$delete(args, options))
    },
  })
}

export function createDeleteWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.workflows)[':workflowId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchWorkflowsWorkflowIdMutationKey() {
  return ['workflows', '/workflows/:workflowId', 'PATCH'] as const
}

export function getPatchWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows)[':workflowId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWorkflowsWorkflowIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflows)[':workflowId']['$patch']>) {
      return parseResponse(client.workflows[':workflowId'].$patch(args, options))
    },
  })
}

export function createPatchWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workflows)[':workflowId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkflowversionsQueryKey(
  args: InferRequestType<typeof client.workflowversions.$get>,
) {
  return ['workflowversions', '/workflowversions', args] as const
}

export function getWorkflowversionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.workflowversions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowversionsQueryKey>
  >({
    queryKey: getWorkflowversionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflowversions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkflowversions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.workflowversions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowversionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkflowversionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostWorkflowversionsMutationKey() {
  return ['workflowversions', '/workflowversions', 'POST'] as const
}

export function getPostWorkflowversionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.workflowversions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowversionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workflowversions.$post>) {
      return parseResponse(client.workflowversions.$post(args, options))
    },
  })
}

export function createPostWorkflowversions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.workflowversions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkflowversionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkflowversionsWorkflowVersionIdQueryKey(
  args: InferRequestType<(typeof client.workflowversions)[':workflowVersionId']['$get']>,
) {
  return ['workflowversions', '/workflowversions/:workflowVersionId', args] as const
}

export function getWorkflowversionsWorkflowVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workflowversions)[':workflowVersionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowversionsWorkflowVersionIdQueryKey>
  >({
    queryKey: getWorkflowversionsWorkflowVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflowversions[':workflowVersionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkflowversionsWorkflowVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workflowversions)[':workflowVersionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowversionsWorkflowVersionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWorkflowversionsWorkflowVersionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTasksQueryKey(args: InferRequestType<typeof client.tasks.$get>) {
  return ['tasks', '/tasks', args] as const
}

export function getTasksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksQueryKey>
  >({
    queryKey: getTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
) {
  return ['tasks', '/tasks/:taskId', args] as const
}

export function getTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdQueryKey>
  >({
    queryKey: getTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTasksTaskId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTaskRunsQueryKey(args: InferRequestType<(typeof client)['task-runs']['$get']>) {
  return ['task-runs', '/task-runs', args] as const
}

export function getTaskRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['task-runs']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskRunsQueryKey>
  >({
    queryKey: getTaskRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['task-runs'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTaskRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['task-runs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTaskRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTaskRunsMutationKey() {
  return ['task-runs', '/task-runs', 'POST'] as const
}

export function getPostTaskRunsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['task-runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTaskRunsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['task-runs']['$post']>) {
      return parseResponse(client['task-runs'].$post(args, options))
    },
  })
}

export function createPostTaskRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['task-runs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTaskRunsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTaskRunsEventsQueryKey(
  args: InferRequestType<(typeof client)['task-runs']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['task-runs', '/task-runs/events', keyArgs] as const
}

export function getTaskRunsEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['task-runs']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskRunsEventsQueryKey>
  >({
    queryKey: getTaskRunsEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['task-runs'].events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTaskRunsEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['task-runs']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskRunsEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTaskRunsEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTaskRunsTaskRunIdQueryKey(
  args: InferRequestType<(typeof client)['task-runs'][':taskRunId']['$get']>,
) {
  return ['task-runs', '/task-runs/:taskRunId', args] as const
}

export function getTaskRunsTaskRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['task-runs'][':taskRunId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskRunsTaskRunIdQueryKey>
  >({
    queryKey: getTaskRunsTaskRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['task-runs'][':taskRunId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTaskRunsTaskRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['task-runs'][':taskRunId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaskRunsTaskRunIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTaskRunsTaskRunIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteTaskRunsTaskRunIdMutationKey() {
  return ['task-runs', '/task-runs/:taskRunId', 'DELETE'] as const
}

export function getDeleteTaskRunsTaskRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['task-runs'][':taskRunId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTaskRunsTaskRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['task-runs'][':taskRunId']['$delete']>,
    ) {
      return parseResponse(client['task-runs'][':taskRunId'].$delete(args, options))
    },
  })
}

export function createDeleteTaskRunsTaskRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['task-runs'][':taskRunId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTaskRunsTaskRunIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFlowsQueryKey(args: InferRequestType<typeof client.flows.$get>) {
  return ['flows', '/flows', args] as const
}

export function getFlowsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.flows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFlowsQueryKey>
  >({
    queryKey: getFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.flows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFlows<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.flows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFlowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFlowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFlowsFlowIdQueryKey(
  args: InferRequestType<(typeof client.flows)[':flowId']['$get']>,
) {
  return ['flows', '/flows/:flowId', args] as const
}

export function getFlowsFlowIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.flows)[':flowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFlowsFlowIdQueryKey>
  >({
    queryKey: getFlowsFlowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.flows[':flowId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFlowsFlowId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.flows)[':flowId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFlowsFlowIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFlowsFlowIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFlowRunsQueryKey(args: InferRequestType<(typeof client)['flow-runs']['$get']>) {
  return ['flow-runs', '/flow-runs', args] as const
}

export function getFlowRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['flow-runs']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFlowRunsQueryKey>
  >({
    queryKey: getFlowRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['flow-runs'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFlowRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['flow-runs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFlowRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFlowRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostFlowRunsMutationKey() {
  return ['flow-runs', '/flow-runs', 'POST'] as const
}

export function getPostFlowRunsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['flow-runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFlowRunsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['flow-runs']['$post']>) {
      return parseResponse(client['flow-runs'].$post(args, options))
    },
  })
}

export function createPostFlowRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['flow-runs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFlowRunsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFlowRunsFlowRunIdQueryKey(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$get']>,
) {
  return ['flow-runs', '/flow-runs/:flowRunId', args] as const
}

export function getFlowRunsFlowRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFlowRunsFlowRunIdQueryKey>
  >({
    queryKey: getFlowRunsFlowRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['flow-runs'][':flowRunId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFlowRunsFlowRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFlowRunsFlowRunIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFlowRunsFlowRunIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteFlowRunsFlowRunIdMutationKey() {
  return ['flow-runs', '/flow-runs/:flowRunId', 'DELETE'] as const
}

export function getDeleteFlowRunsFlowRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFlowRunsFlowRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$delete']>,
    ) {
      return parseResponse(client['flow-runs'][':flowRunId'].$delete(args, options))
    },
  })
}

export function createDeleteFlowRunsFlowRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFlowRunsFlowRunIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFlowRunsFlowRunIdStepsQueryKey(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>,
) {
  return ['flow-runs', '/flow-runs/:flowRunId/steps', args] as const
}

export function getFlowRunsFlowRunIdStepsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFlowRunsFlowRunIdStepsQueryKey>
  >({
    queryKey: getFlowRunsFlowRunIdStepsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['flow-runs'][':flowRunId'].steps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFlowRunsFlowRunIdSteps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFlowRunsFlowRunIdStepsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFlowRunsFlowRunIdStepsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFlowRunsFlowRunIdStepsStepSeqQueryKey(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>,
) {
  return ['flow-runs', '/flow-runs/:flowRunId/steps/:stepSeq', args] as const
}

export function getFlowRunsFlowRunIdStepsStepSeqQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFlowRunsFlowRunIdStepsStepSeqQueryKey>
  >({
    queryKey: getFlowRunsFlowRunIdStepsStepSeqQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['flow-runs'][':flowRunId'].steps[':stepSeq'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFlowRunsFlowRunIdStepsStepSeq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFlowRunsFlowRunIdStepsStepSeqQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFlowRunsFlowRunIdStepsStepSeqQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryKey(
  args: InferRequestType<
    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
  >,
) {
  return ['flow-runs', '/flow-runs/:flowRunId/steps/:stepSeq/attempts/:attempt', args] as const
}

export function getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryKey>
  >({
    queryKey: getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['flow-runs'][':flowRunId'].steps[':stepSeq'].attempts[':attempt'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFlowRunsFlowRunIdStepsStepSeqAttemptsAttempt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSandboxesQueryKey(args: InferRequestType<typeof client.sandboxes.$get>) {
  return ['sandboxes', '/sandboxes', args] as const
}

export function getSandboxesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sandboxes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSandboxesQueryKey>
  >({
    queryKey: getSandboxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandboxes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSandboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sandboxes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSandboxesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSandboxesMutationKey() {
  return ['sandboxes', '/sandboxes', 'POST'] as const
}

export function getPostSandboxesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$post>>>>>,
    TError,
    InferRequestType<typeof client.sandboxes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandboxes.$post>) {
      return parseResponse(client.sandboxes.$post(args, options))
    },
  })
}

export function createPostSandboxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sandboxes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxGroupsQueryKey(
  args: InferRequestType<(typeof client)['sandbox-groups']['$get']>,
) {
  return ['sandbox-groups', '/sandbox-groups', args] as const
}

export function getSandboxGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sandbox-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsQueryKey>
  >({
    queryKey: getSandboxGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sandbox-groups'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSandboxGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['sandbox-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSandboxGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSandboxGroupsMutationKey() {
  return ['sandbox-groups', '/sandbox-groups', 'POST'] as const
}

export function getPostSandboxGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['sandbox-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['sandbox-groups']['$post']>) {
      return parseResponse(client['sandbox-groups'].$post(args, options))
    },
  })
}

export function createPostSandboxGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['sandbox-groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxesSandboxIdQueryKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxId', args] as const
}

export function getSandboxesSandboxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxesSandboxIdQueryKey>
  >({
    queryKey: getSandboxesSandboxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandboxes[':sandboxId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxesSandboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandboxes)[':sandboxId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesSandboxIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSandboxesSandboxIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSandboxesSandboxIdExecsQueryKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxId/execs', args] as const
}

export function getSandboxesSandboxIdExecsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxesSandboxIdExecsQueryKey>
  >({
    queryKey: getSandboxesSandboxIdExecsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandboxes[':sandboxId'].execs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxesSandboxIdExecs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesSandboxIdExecsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxesSandboxIdExecsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSandboxesSandboxIdExecsExecIdQueryKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxId/execs/:execId', args] as const
}

export function getSandboxesSandboxIdExecsExecIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxesSandboxIdExecsExecIdQueryKey>
  >({
    queryKey: getSandboxesSandboxIdExecsExecIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandboxes[':sandboxId'].execs[':execId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxesSandboxIdExecsExecId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesSandboxIdExecsExecIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxesSandboxIdExecsExecIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSandboxesSandboxIdTerminateMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxId/terminate', 'POST'] as const
}

export function getPostSandboxesSandboxIdTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['terminate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['terminate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIdTerminateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['terminate']['$post']>,
    ) {
      return parseResponse(client.sandboxes[':sandboxId'].terminate.$post(args, options))
    },
  })
}

export function createPostSandboxesSandboxIdTerminate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['terminate']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxId']['terminate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxesSandboxIdTerminateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxesSandboxIdSuspendMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxId/suspend', 'POST'] as const
}

export function getPostSandboxesSandboxIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIdSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['suspend']['$post']>,
    ) {
      return parseResponse(client.sandboxes[':sandboxId'].suspend.$post(args, options))
    },
  })
}

export function createPostSandboxesSandboxIdSuspend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['suspend']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxId']['suspend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxesSandboxIdSuspendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxesSandboxIdSnapshotsMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxId/snapshots', 'POST'] as const
}

export function getPostSandboxesSandboxIdSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['snapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['snapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIdSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['snapshots']['$post']>,
    ) {
      return parseResponse(client.sandboxes[':sandboxId'].snapshots.$post(args, options))
    },
  })
}

export function createPostSandboxesSandboxIdSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['snapshots']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxId']['snapshots']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxesSandboxIdSnapshotsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxGroupsSandboxGroupIdQueryKey(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId', args] as const
}

export function getSandboxGroupsSandboxGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdQueryKey>
  >({
    queryKey: getSandboxGroupsSandboxGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxGroupsSandboxGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxGroupsSandboxGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxGroupsSandboxGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchSandboxGroupsSandboxGroupIdMutationKey() {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId', 'PATCH'] as const
}

export function getPatchSandboxGroupsSandboxGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSandboxGroupsSandboxGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$patch']>,
    ) {
      return parseResponse(client['sandbox-groups'][':sandboxGroupId'].$patch(args, options))
    },
  })
}

export function createPatchSandboxGroupsSandboxGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSandboxGroupsSandboxGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxGroupsSandboxGroupIdCredentialsQueryKey(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
  >,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/credentials', args] as const
}

export function getSandboxGroupsSandboxGroupIdCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsQueryKey>
  >({
    queryKey: getSandboxGroupsSandboxGroupIdCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxGroupsSandboxGroupIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxGroupsSandboxGroupIdCredentialsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostSandboxGroupsSandboxGroupIdCredentialsMutationKey() {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/credentials', 'POST'] as const
}

export function getPostSandboxGroupsSandboxGroupIdCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxGroupsSandboxGroupIdCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$post']
      >,
    ) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].credentials.$post(args, options),
      )
    },
  })
}

export function createPostSandboxGroupsSandboxGroupIdCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxGroupsSandboxGroupIdCredentialsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryKey(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
  >,
) {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId',
    args,
  ] as const
}

export function getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryKey>
  >({
    queryKey: getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxGroupsSandboxGroupIdCredentialsCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdMutationKey() {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId',
    'DELETE',
  ] as const
}

export function getDeleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$delete']
      >,
    ) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteSandboxGroupsSandboxGroupIdCredentialsCredentialId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchSandboxGroupsSandboxGroupIdCredentialsCredentialIdMutationKey() {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId',
    'PATCH',
  ] as const
}

export function getPatchSandboxGroupsSandboxGroupIdCredentialsCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSandboxGroupsSandboxGroupIdCredentialsCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$patch']
      >,
    ) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchSandboxGroupsSandboxGroupIdCredentialsCredentialId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchSandboxGroupsSandboxGroupIdCredentialsCredentialIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
  >,
) {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId/versions',
    args,
  ] as const
}

export function getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryKey>
  >({
    queryKey: getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].versions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreMutationKey() {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId/restore',
    'POST',
  ] as const
}

export function getPostSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].restore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['restore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxGroupsSandboxGroupIdBuildsQueryKey(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/builds', args] as const
}

export function getSandboxGroupsSandboxGroupIdBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdBuildsQueryKey>
  >({
    queryKey: getSandboxGroupsSandboxGroupIdBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxGroupsSandboxGroupIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxGroupsSandboxGroupIdBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxGroupsSandboxGroupIdBuildsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSandboxGroupsSandboxGroupIdBuildsMutationKey() {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/builds', 'POST'] as const
}

export function getPostSandboxGroupsSandboxGroupIdBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxGroupsSandboxGroupIdBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$post']
      >,
    ) {
      return parseResponse(client['sandbox-groups'][':sandboxGroupId'].builds.$post(args, options))
    },
  })
}

export function createPostSandboxGroupsSandboxGroupIdBuilds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxGroupsSandboxGroupIdBuildsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryKey(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
  >,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/builds/:buildId', args] as const
}

export function getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryKey>
  >({
    queryKey: getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].builds[':buildId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxGroupsSandboxGroupIdBuildsBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteSandboxGroupsSandboxGroupIdBuildsBuildIdMutationKey() {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/builds/:buildId', 'DELETE'] as const
}

export function getDeleteSandboxGroupsSandboxGroupIdBuildsBuildIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSandboxGroupsSandboxGroupIdBuildsBuildIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$delete']
      >,
    ) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].builds[':buildId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteSandboxGroupsSandboxGroupIdBuildsBuildId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSandboxGroupsSandboxGroupIdBuildsBuildIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxGroupsSandboxGroupIdSnapshotsQueryKey(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/snapshots', args] as const
}

export function getSandboxGroupsSandboxGroupIdSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdSnapshotsQueryKey>
  >({
    queryKey: getSandboxGroupsSandboxGroupIdSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxGroupsSandboxGroupIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxGroupsSandboxGroupIdSnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxGroupsSandboxGroupIdSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryKey(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
  >,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/snapshots/:snapshotId', args] as const
}

export function getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryKey>
  >({
    queryKey: getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].snapshots[':snapshotId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxGroupsSandboxGroupIdSnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdMutationKey() {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/snapshots/:snapshotId',
    'DELETE',
  ] as const
}

export function getDeleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$delete']
      >,
    ) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].snapshots[':snapshotId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxesSandboxIdRunsOperationTokenMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxId/runs/:operation/token', 'POST'] as const
}

export function getPostSandboxesSandboxIdRunsOperationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandboxes)[':sandboxId']['runs'][':operation']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sandboxes)[':sandboxId']['runs'][':operation']['token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIdRunsOperationTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sandboxes)[':sandboxId']['runs'][':operation']['token']['$post']
      >,
    ) {
      return parseResponse(
        client.sandboxes[':sandboxId'].runs[':operation'].token.$post(args, options),
      )
    },
  })
}

export function createPostSandboxesSandboxIdRunsOperationToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sandboxes)[':sandboxId']['runs'][':operation']['token']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sandboxes)[':sandboxId']['runs'][':operation']['token']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxesSandboxIdRunsOperationTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxesSandboxIdFilesOperationTokenMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxId/files/:operation/token', 'POST'] as const
}

export function getPostSandboxesSandboxIdFilesOperationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandboxes)[':sandboxId']['files'][':operation']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sandboxes)[':sandboxId']['files'][':operation']['token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIdFilesOperationTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sandboxes)[':sandboxId']['files'][':operation']['token']['$post']
      >,
    ) {
      return parseResponse(
        client.sandboxes[':sandboxId'].files[':operation'].token.$post(args, options),
      )
    },
  })
}

export function createPostSandboxesSandboxIdFilesOperationToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sandboxes)[':sandboxId']['files'][':operation']['token']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sandboxes)[':sandboxId']['files'][':operation']['token']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxesSandboxIdFilesOperationTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
