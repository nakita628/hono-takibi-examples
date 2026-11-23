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

export function getBlueprintsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blueprints.$get>>,
) {
  return ['blueprints', '/blueprints', toValue(args)] as const
}

export function getBlueprintsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blueprints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlueprintsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blueprints.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBlueprints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blueprints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>
          >,
          ReturnType<typeof getBlueprintsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlueprintsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlueprintsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blueprints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBlueprintsValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.validate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.blueprints.validate.$post>,
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
  const mutationDefaults = getPostBlueprintsValidateMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteOwnersOwnerIdMembersUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOwnersOwnerIdMembersUserIdMutationOptions<
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

export function usePatchOwnersOwnerIdMembersUserId<
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
                  ReturnType<(typeof client.owners)[':ownerId']['members'][':userId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$patch']>,
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
  const mutationDefaults = getPatchOwnersOwnerIdMembersUserIdMutationOptions<
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

export function getBlueprintsBlueprintIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blueprints)[':blueprintId']['$get']>>,
) {
  return ['blueprints', '/blueprints/:blueprintId', toValue(args)] as const
}

export function getBlueprintsBlueprintIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blueprints)[':blueprintId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlueprintsBlueprintIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blueprints[':blueprintId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlueprintsBlueprintId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blueprints)[':blueprintId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlueprintsBlueprintIdQueryKey>
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
          Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlueprintsBlueprintIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlueprintsBlueprintIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blueprints[':blueprintId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteBlueprintsBlueprintId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBlueprintsBlueprintIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchBlueprintsBlueprintId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBlueprintsBlueprintIdMutationOptions<TError, TOnMutateResult>(
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

export function getBlueprintsBlueprintIdSyncsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>
  >,
) {
  return ['blueprints', '/blueprints/:blueprintId/syncs', toValue(args)] as const
}

export function getBlueprintsBlueprintIdSyncsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlueprintsBlueprintIdSyncsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blueprints[':blueprintId'].syncs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlueprintsBlueprintIdSyncs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlueprintsBlueprintIdSyncsQueryKey>
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
          Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlueprintsBlueprintIdSyncsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlueprintsBlueprintIdSyncsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blueprints[':blueprintId'].syncs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDedicatedIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dedicated-ips']['$get']>>,
) {
  return ['dedicated-ips', '/dedicated-ips', toValue(args)] as const
}

export function getDedicatedIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dedicated-ips']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDedicatedIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dedicated-ips'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDedicatedIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dedicated-ips']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>
            >
          >,
          ReturnType<typeof getDedicatedIpsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDedicatedIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDedicatedIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dedicated-ips'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDedicatedIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['dedicated-ips']['$post']>,
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
  const mutationDefaults = getPostDedicatedIpsMutationOptions<TError, TOnMutateResult>(
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

export function getDedicatedIpsDedicatedIpIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>
  >,
) {
  return ['dedicated-ips', '/dedicated-ips/:dedicatedIpId', toValue(args)] as const
}

export function getDedicatedIpsDedicatedIpIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDedicatedIpsDedicatedIpIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dedicated-ips'][':dedicatedIpId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDedicatedIpsDedicatedIpId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDedicatedIpsDedicatedIpIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDedicatedIpsDedicatedIpIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDedicatedIpsDedicatedIpIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dedicated-ips'][':dedicatedIpId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDedicatedIpsDedicatedIpId<
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
                  Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$delete']>,
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
  const mutationDefaults = getDeleteDedicatedIpsDedicatedIpIdMutationOptions<
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

export function usePatchDedicatedIpsDedicatedIpId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDedicatedIpsDedicatedIpIdMutationOptions<
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

export function getDisksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.disks.$get>>,
) {
  return ['disks', '/disks', toValue(args)] as const
}

export function getDisksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.disks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDisksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.disks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDisks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.disks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
          ReturnType<typeof getDisksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDisksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDisksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.disks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDisks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$post>>>>>,
          TError,
          InferRequestType<typeof client.disks.$post>,
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
  const mutationDefaults = getPostDisksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDisksDiskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disks)[':diskId']['$get']>>,
) {
  return ['disks', '/disks/:diskId', toValue(args)] as const
}

export function getDisksDiskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disks)[':diskId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDisksDiskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.disks[':diskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDisksDiskId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disks)[':diskId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>
            >
          >,
          ReturnType<typeof getDisksDiskIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisksDiskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDisksDiskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.disks[':diskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDisksDiskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.disks)[':diskId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.disks)[':diskId']['$delete']>,
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
  const mutationDefaults = getDeleteDisksDiskIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchDisksDiskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.disks)[':diskId']['$patch']>,
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
  const mutationDefaults = getPatchDisksDiskIdMutationOptions<TError, TOnMutateResult>(
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

export function getDisksDiskIdSnapshotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disks)[':diskId']['snapshots']['$get']>>,
) {
  return ['disks', '/disks/:diskId/snapshots', toValue(args)] as const
}

export function getDisksDiskIdSnapshotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disks)[':diskId']['snapshots']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDisksDiskIdSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.disks[':diskId'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDisksDiskIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disks)[':diskId']['snapshots']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDisksDiskIdSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisksDiskIdSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDisksDiskIdSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.disks[':diskId'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDisksDiskIdSnapshotsRestore<
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
                  ReturnType<(typeof client.disks)[':diskId']['snapshots']['restore']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.disks)[':diskId']['snapshots']['restore']['$post']>,
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
  const mutationDefaults = getPostDisksDiskIdSnapshotsRestoreMutationOptions<
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

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOwnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.owners.$get>>,
) {
  return ['owners', '/owners', toValue(args)] as const
}

export function getOwnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.owners.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owners.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOwners<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.owners.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
          ReturnType<typeof getOwnersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOwnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.owners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOwnersOwnerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owners)[':ownerId']['$get']>>,
) {
  return ['owners', '/owners/:ownerId', toValue(args)] as const
}

export function getOwnersOwnerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owners)[':ownerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwnersOwnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owners[':ownerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOwnersOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owners)[':ownerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
            >
          >,
          ReturnType<typeof getOwnersOwnerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnersOwnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwnersOwnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.owners[':ownerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOwnersOwnerIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owners)[':ownerId']['members']['$get']>>,
) {
  return ['owners', '/owners/:ownerId/members', toValue(args)] as const
}

export function getOwnersOwnerIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owners)[':ownerId']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwnersOwnerIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owners[':ownerId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOwnersOwnerIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owners)[':ownerId']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOwnersOwnerIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnersOwnerIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwnersOwnerIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.owners[':ownerId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOwnersOwnerIdAuditLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>
  >,
) {
  return ['owners', '/owners/:ownerId/audit-logs', toValue(args)] as const
}

export function getOwnersOwnerIdAuditLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwnersOwnerIdAuditLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owners[':ownerId']['audit-logs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOwnersOwnerIdAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOwnersOwnerIdAuditLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnersOwnerIdAuditLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwnersOwnerIdAuditLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.owners[':ownerId']['audit-logs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrgIdAuditLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>
  >,
) {
  return ['organizations', '/organizations/:orgId/audit-logs', toValue(args)] as const
}

export function getOrganizationsOrgIdAuditLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrgIdAuditLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':orgId']['audit-logs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrgIdAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrgIdAuditLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdAuditLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrgIdAuditLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':orgId']['audit-logs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationSettingsOwnersOwnerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>
  >,
) {
  return ['notification-settings', '/notification-settings/owners/:ownerId', toValue(args)] as const
}

export function getNotificationSettingsOwnersOwnerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationSettingsOwnersOwnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['notification-settings'].owners[':ownerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationSettingsOwnersOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationSettingsOwnersOwnerIdQueryKey>
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
            ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsOwnersOwnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationSettingsOwnersOwnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['notification-settings'].owners[':ownerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchNotificationSettingsOwnersOwnerId<
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
                    (typeof client)['notification-settings']['owners'][':ownerId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['notification-settings']['owners'][':ownerId']['$patch']
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
  const mutationDefaults = getPatchNotificationSettingsOwnersOwnerIdMutationOptions<
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

export function getNotificationSettingsOverridesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['notification-settings']['overrides']['$get']>
  >,
) {
  return ['notification-settings', '/notification-settings/overrides', toValue(args)] as const
}

export function getNotificationSettingsOverridesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['notification-settings']['overrides']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationSettingsOverridesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['notification-settings'].overrides.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationSettingsOverrides<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['notification-settings']['overrides']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationSettingsOverridesQueryKey>
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
          Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsOverridesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationSettingsOverridesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['notification-settings'].overrides.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationSettingsOverridesServicesServiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
    >
  >,
) {
  return [
    'notification-settings',
    '/notification-settings/overrides/services/:serviceId',
    toValue(args),
  ] as const
}

export function getNotificationSettingsOverridesServicesServiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationSettingsOverridesServicesServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['notification-settings'].overrides.services[':serviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationSettingsOverridesServicesServiceId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
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
                    (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
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
                    (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotificationSettingsOverridesServicesServiceIdQueryKey>
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
              (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationSettingsOverridesServicesServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationSettingsOverridesServicesServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['notification-settings'].overrides.services[':serviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchNotificationSettingsOverridesServicesServiceId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNotificationSettingsOverridesServicesServiceIdMutationOptions<
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

export function getRegistrycredentialsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registrycredentials.$get>>,
) {
  return ['registrycredentials', '/registrycredentials', toValue(args)] as const
}

export function getRegistrycredentialsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registrycredentials.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrycredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrycredentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistrycredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registrycredentials.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>
            >
          >,
          ReturnType<typeof getRegistrycredentialsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrycredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrycredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrycredentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRegistrycredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.registrycredentials.$post>,
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
  const mutationDefaults = getPostRegistrycredentialsMutationOptions<TError, TOnMutateResult>(
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

export function getRegistrycredentialsRegistryCredentialIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>
  >,
) {
  return [
    'registrycredentials',
    '/registrycredentials/:registryCredentialId',
    toValue(args),
  ] as const
}

export function getRegistrycredentialsRegistryCredentialIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrycredentialsRegistryCredentialIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrycredentials[':registryCredentialId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistrycredentialsRegistryCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRegistrycredentialsRegistryCredentialIdQueryKey>
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
          Awaited<ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrycredentialsRegistryCredentialIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrycredentialsRegistryCredentialIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrycredentials[':registryCredentialId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRegistrycredentialsRegistryCredentialId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRegistrycredentialsRegistryCredentialIdMutationOptions<
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

export function usePatchRegistrycredentialsRegistryCredentialId<
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
                  ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$patch']>,
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
  const mutationDefaults = getPatchRegistrycredentialsRegistryCredentialIdMutationOptions<
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

export function getServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
) {
  return ['services', '/services', toValue(args)] as const
}

export function getServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          ReturnType<typeof getServicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.services.$post>,
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
  const mutationDefaults = getPostServicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getServicesServiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':serviceId']['$get']>>,
) {
  return ['services', '/services/:serviceId', toValue(args)] as const
}

export function getServicesServiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':serviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':serviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteServicesServiceIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchServicesServiceIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostServicesServiceIdCachePurge<
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
                  ReturnType<(typeof client.services)[':serviceId']['cache']['purge']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':serviceId']['cache']['purge']['$post']>,
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
  const mutationDefaults = getPostServicesServiceIdCachePurgeMutationOptions<
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

export function getServicesServiceIdDeploysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['deploys']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/deploys', toValue(args)] as const
}

export function getServicesServiceIdDeploysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['deploys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdDeploysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId'].deploys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdDeploys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['deploys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdDeploysQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdDeploysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdDeploysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId'].deploys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostServicesServiceIdDeploys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdDeploysMutationOptions<TError, TOnMutateResult>(
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

export function getServicesServiceIdDeploysDeployIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/deploys/:deployId', toValue(args)] as const
}

export function getServicesServiceIdDeploysDeployIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdDeploysDeployIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId'].deploys[':deployId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdDeploysDeployId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdDeploysDeployIdQueryKey>
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
            ReturnType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdDeploysDeployIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdDeploysDeployIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId'].deploys[':deployId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostServicesServiceIdDeploysDeployIdCancel<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdDeploysDeployIdCancelMutationOptions<
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

export function usePostServicesServiceIdRollback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdRollbackMutationOptions<TError, TOnMutateResult>(
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

export function getServicesServiceIdEnvVarsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/env-vars', toValue(args)] as const
}

export function getServicesServiceIdEnvVarsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdEnvVarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId']['env-vars'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdEnvVars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdEnvVarsQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdEnvVarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdEnvVarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId']['env-vars'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutServicesServiceIdEnvVars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutServicesServiceIdEnvVarsMutationOptions<TError, TOnMutateResult>(
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

export function getServicesServiceIdEnvVarsEnvVarKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/env-vars/:envVarKey', toValue(args)] as const
}

export function getServicesServiceIdEnvVarsEnvVarKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdEnvVarsEnvVarKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId']['env-vars'][':envVarKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdEnvVarsEnvVarKey<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
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
                    (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']
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
                    (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdEnvVarsEnvVarKeyQueryKey>
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
            ReturnType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdEnvVarsEnvVarKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdEnvVarsEnvVarKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId']['env-vars'][':envVarKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutServicesServiceIdEnvVarsEnvVarKey<
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
                    (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$put']
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
  const mutationDefaults = getPutServicesServiceIdEnvVarsEnvVarKeyMutationOptions<
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

export function useDeleteServicesServiceIdEnvVarsEnvVarKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteServicesServiceIdEnvVarsEnvVarKeyMutationOptions<
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

export function getServicesServiceIdSecretFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/secret-files', toValue(args)] as const
}

export function getServicesServiceIdSecretFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdSecretFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId']['secret-files'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdSecretFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdSecretFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdSecretFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdSecretFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId']['secret-files'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutServicesServiceIdSecretFiles<
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
                Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$put']>,
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
  const mutationDefaults = getPutServicesServiceIdSecretFilesMutationOptions<
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

export function getServicesServiceIdSecretFilesEnvVarKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/secret-files/:envVarKey', toValue(args)] as const
}

export function getServicesServiceIdSecretFilesEnvVarKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdSecretFilesEnvVarKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId']['secret-files'][':envVarKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdSecretFilesEnvVarKey<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']>
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
                    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
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
                    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdSecretFilesEnvVarKeyQueryKey>
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
            ReturnType<(typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdSecretFilesEnvVarKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdSecretFilesEnvVarKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId']['secret-files'][':envVarKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutServicesServiceIdSecretFilesEnvVarKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutServicesServiceIdSecretFilesEnvVarKeyMutationOptions<
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

export function useDeleteServicesServiceIdSecretFilesEnvVarKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteServicesServiceIdSecretFilesEnvVarKeyMutationOptions<
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

export function getServicesServiceIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['events']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/events', toValue(args)] as const
}

export function getServicesServiceIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesServiceIdHeadersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['headers']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/headers', toValue(args)] as const
}

export function getServicesServiceIdHeadersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['headers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdHeadersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId'].headers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdHeaders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['headers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdHeadersQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdHeadersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdHeadersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId'].headers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutServicesServiceIdHeaders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutServicesServiceIdHeadersMutationOptions<TError, TOnMutateResult>(
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

export function usePostServicesServiceIdHeaders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdHeadersMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteServicesServiceIdHeadersHeaderId<
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
                      (typeof client.services)[':serviceId']['headers'][':headerId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.services)[':serviceId']['headers'][':headerId']['$delete']
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
  const mutationDefaults = getDeleteServicesServiceIdHeadersHeaderIdMutationOptions<
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

export function getServicesServiceIdRoutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['routes']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/routes', toValue(args)] as const
}

export function getServicesServiceIdRoutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['routes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdRoutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId'].routes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['routes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdRoutesQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdRoutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId'].routes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutServicesServiceIdRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutServicesServiceIdRoutesMutationOptions<TError, TOnMutateResult>(
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

export function usePostServicesServiceIdRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdRoutesMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteServicesServiceIdRoutesRouteId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteServicesServiceIdRoutesRouteIdMutationOptions<
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

export function usePatchServicesServiceIdRoutesRouteId<
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
                  ReturnType<(typeof client.services)[':serviceId']['routes'][':routeId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':serviceId']['routes'][':routeId']['$patch']>,
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
  const mutationDefaults = getPatchServicesServiceIdRoutesRouteIdMutationOptions<
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

export function getServicesServiceIdCustomDomainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/custom-domains', toValue(args)] as const
}

export function getServicesServiceIdCustomDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdCustomDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId']['custom-domains'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdCustomDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>
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
                  ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdCustomDomainsQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdCustomDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdCustomDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId']['custom-domains'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostServicesServiceIdCustomDomains<
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
                  ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$post']>,
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
  const mutationDefaults = getPostServicesServiceIdCustomDomainsMutationOptions<
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

export function getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
    >
  >,
) {
  return [
    'services',
    '/services/:serviceId/custom-domains/:customDomainNameOrID',
    toValue(args),
  ] as const
}

export function getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useServicesServiceIdCustomDomainsCustomDomainNameOrID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
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
                    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
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
                    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryKey>
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
              (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdCustomDomainsCustomDomainNameOrIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteServicesServiceIdCustomDomainsCustomDomainNameOrID<
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
    getDeleteServicesServiceIdCustomDomainsCustomDomainNameOrIDMutationOptions<
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

export function usePostServicesServiceIdCustomDomainsCustomDomainNameOrIDVerify<
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
    getPostServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyMutationOptions<
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

export function usePostServicesServiceIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdSuspendMutationOptions<TError, TOnMutateResult>(
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

export function usePostServicesServiceIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdResumeMutationOptions<TError, TOnMutateResult>(
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

export function usePostServicesServiceIdRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdRestartMutationOptions<TError, TOnMutateResult>(
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

export function usePostServicesServiceIdScale<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdScaleMutationOptions<TError, TOnMutateResult>(
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

export function usePutServicesServiceIdAutoscaling<
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
                Awaited<ReturnType<(typeof client.services)[':serviceId']['autoscaling']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$put']>,
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
  const mutationDefaults = getPutServicesServiceIdAutoscalingMutationOptions<
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

export function useDeleteServicesServiceIdAutoscaling<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteServicesServiceIdAutoscalingMutationOptions<
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

export function usePostServicesServiceIdPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getServicesServiceIdJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':serviceId']['jobs']['$get']>>,
) {
  return ['services', '/services/:serviceId/jobs', toValue(args)] as const
}

export function getServicesServiceIdJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':serviceId']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':serviceId']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostServicesServiceIdJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdJobsMutationOptions<TError, TOnMutateResult>(
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

export function getServicesServiceIdJobsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/jobs/:jobId', toValue(args)] as const
}

export function getServicesServiceIdJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId'].jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>
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
                  ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdJobsJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId'].jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostServicesServiceIdJobsJobIdCancel<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesServiceIdJobsJobIdCancelMutationOptions<
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

export function getServicesServiceIdInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['instances']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/instances', toValue(args)] as const
}

export function getServicesServiceIdInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['instances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['instances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesServiceIdOutboundIpsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>
  >,
) {
  return ['services', '/services/:serviceId/outbound-ips', toValue(args)] as const
}

export function getServicesServiceIdOutboundIpsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdOutboundIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':serviceId']['outbound-ips'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdOutboundIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdOutboundIpsQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdOutboundIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdOutboundIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':serviceId']['outbound-ips'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCronJobsCronJobIdRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCronJobsCronJobIdRunsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteCronJobsCronJobIdRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCronJobsCronJobIdRunsMutationOptions<TError, TOnMutateResult>(
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

export function getEventsEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['$get']>>,
) {
  return ['events', '/events/:eventId', toValue(args)] as const
}

export function getEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':eventId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
            >
          >,
          ReturnType<typeof getEventsEventIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':eventId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>) {
  return ['logs', '/logs', toValue(args)] as const
}

export function getLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          ReturnType<typeof getLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsSubscribeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.subscribe.$get>>,
) {
  return ['logs', '/logs/subscribe', toValue(args)] as const
}

export function getLogsSubscribeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.subscribe.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsSubscribeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.subscribe.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsSubscribe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.subscribe.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
          >,
          ReturnType<typeof getLogsSubscribeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsSubscribeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsSubscribeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.subscribe.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsValuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.values.$get>>,
) {
  return ['logs', '/logs/values', toValue(args)] as const
}

export function getLogsValuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.values.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.values.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogsValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.values.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>
          >,
          ReturnType<typeof getLogsValuesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsStreamsOwnerOwnerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>,
) {
  return ['logs', '/logs/streams/owner/:ownerId', toValue(args)] as const
}

export function getLogsStreamsOwnerOwnerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsStreamsOwnerOwnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.streams.owner[':ownerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsStreamsOwnerOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLogsStreamsOwnerOwnerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsStreamsOwnerOwnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsStreamsOwnerOwnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.streams.owner[':ownerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutLogsStreamsOwnerOwnerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLogsStreamsOwnerOwnerIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteLogsStreamsOwnerOwnerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLogsStreamsOwnerOwnerIdMutationOptions<TError, TOnMutateResult>(
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

export function getLogsStreamsResourceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.streams.resource.$get>>,
) {
  return ['logs', '/logs/streams/resource', toValue(args)] as const
}

export function getLogsStreamsResourceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.streams.resource.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsStreamsResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.streams.resource.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsStreamsResource<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.streams.resource.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>
            >
          >,
          ReturnType<typeof getLogsStreamsResourceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsStreamsResourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsStreamsResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.streams.resource.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsStreamsResourceResourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$get']>
  >,
) {
  return ['logs', '/logs/streams/resource/:resourceId', toValue(args)] as const
}

export function getLogsStreamsResourceResourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsStreamsResourceResourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.streams.resource[':resourceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsStreamsResourceResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLogsStreamsResourceResourceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsStreamsResourceResourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsStreamsResourceResourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.streams.resource[':resourceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutLogsStreamsResourceResourceId<
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
                Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$put']>,
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
  const mutationDefaults = getPutLogsStreamsResourceResourceIdMutationOptions<
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

export function useDeleteLogsStreamsResourceResourceId<
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
                    ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$delete']>,
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
  const mutationDefaults = getDeleteLogsStreamsResourceResourceIdMutationOptions<
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

export function getMetricsStreamOwnerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$get']>>,
) {
  return ['metrics-stream', '/metrics-stream/:ownerId', toValue(args)] as const
}

export function getMetricsStreamOwnerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsStreamOwnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['metrics-stream'][':ownerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsStreamOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsStreamOwnerIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsStreamOwnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsStreamOwnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['metrics-stream'][':ownerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMetricsStreamOwnerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMetricsStreamOwnerIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteMetricsStreamOwnerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMetricsStreamOwnerIdMutationOptions<TError, TOnMutateResult>(
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

export function getMetricsCpuQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.cpu.$get>>,
) {
  return ['metrics', '/metrics/cpu', toValue(args)] as const
}

export function getMetricsCpuQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.cpu.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsCpuQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.cpu.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetricsCpu<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.cpu.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>
          >,
          ReturnType<typeof getMetricsCpuQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsCpuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsCpuQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.cpu.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsCpuLimitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['cpu-limit']['$get']>>,
) {
  return ['metrics', '/metrics/cpu-limit', toValue(args)] as const
}

export function getMetricsCpuLimitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['cpu-limit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsCpuLimitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['cpu-limit'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsCpuLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['cpu-limit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsCpuLimitQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsCpuLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsCpuLimitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['cpu-limit'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsCpuTargetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['cpu-target']['$get']>>,
) {
  return ['metrics', '/metrics/cpu-target', toValue(args)] as const
}

export function getMetricsCpuTargetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['cpu-target']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsCpuTargetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['cpu-target'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsCpuTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['cpu-target']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsCpuTargetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsCpuTargetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsCpuTargetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['cpu-target'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsMemoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.memory.$get>>,
) {
  return ['metrics', '/metrics/memory', toValue(args)] as const
}

export function getMetricsMemoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.memory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMemoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.memory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsMemory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.memory.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
          >,
          ReturnType<typeof getMetricsMemoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMemoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsMemoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.memory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsMemoryLimitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['memory-limit']['$get']>>,
) {
  return ['metrics', '/metrics/memory-limit', toValue(args)] as const
}

export function getMetricsMemoryLimitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['memory-limit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMemoryLimitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['memory-limit'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsMemoryLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['memory-limit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsMemoryLimitQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMemoryLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsMemoryLimitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['memory-limit'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsMemoryTargetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['memory-target']['$get']>>,
) {
  return ['metrics', '/metrics/memory-target', toValue(args)] as const
}

export function getMetricsMemoryTargetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['memory-target']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsMemoryTargetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['memory-target'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsMemoryTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['memory-target']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsMemoryTargetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsMemoryTargetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsMemoryTargetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['memory-target'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsHttpRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['http-requests']['$get']>>,
) {
  return ['metrics', '/metrics/http-requests', toValue(args)] as const
}

export function getMetricsHttpRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['http-requests']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsHttpRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['http-requests'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsHttpRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['http-requests']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsHttpRequestsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsHttpRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsHttpRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['http-requests'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsHttpLatencyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['http-latency']['$get']>>,
) {
  return ['metrics', '/metrics/http-latency', toValue(args)] as const
}

export function getMetricsHttpLatencyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['http-latency']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsHttpLatencyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['http-latency'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsHttpLatency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['http-latency']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsHttpLatencyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsHttpLatencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsHttpLatencyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['http-latency'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsBandwidthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.bandwidth.$get>>,
) {
  return ['metrics', '/metrics/bandwidth', toValue(args)] as const
}

export function getMetricsBandwidthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.bandwidth.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsBandwidthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.bandwidth.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsBandwidth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.bandwidth.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>
            >
          >,
          ReturnType<typeof getMetricsBandwidthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsBandwidthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsBandwidthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.bandwidth.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsBandwidthSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['bandwidth-sources']['$get']>>,
) {
  return ['metrics', '/metrics/bandwidth-sources', toValue(args)] as const
}

export function getMetricsBandwidthSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['bandwidth-sources']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsBandwidthSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['bandwidth-sources'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsBandwidthSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['bandwidth-sources']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsBandwidthSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsBandwidthSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsBandwidthSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['bandwidth-sources'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsDiskUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['disk-usage']['$get']>>,
) {
  return ['metrics', '/metrics/disk-usage', toValue(args)] as const
}

export function getMetricsDiskUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['disk-usage']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsDiskUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['disk-usage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsDiskUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['disk-usage']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsDiskUsageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsDiskUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsDiskUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['disk-usage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsDiskCapacityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['disk-capacity']['$get']>>,
) {
  return ['metrics', '/metrics/disk-capacity', toValue(args)] as const
}

export function getMetricsDiskCapacityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['disk-capacity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsDiskCapacityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['disk-capacity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsDiskCapacity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['disk-capacity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsDiskCapacityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsDiskCapacityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsDiskCapacityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['disk-capacity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsInstanceCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['instance-count']['$get']>>,
) {
  return ['metrics', '/metrics/instance-count', toValue(args)] as const
}

export function getMetricsInstanceCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['instance-count']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsInstanceCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['instance-count'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsInstanceCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['instance-count']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsInstanceCountQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsInstanceCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsInstanceCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['instance-count'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsActiveConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['active-connections']['$get']>>,
) {
  return ['metrics', '/metrics/active-connections', toValue(args)] as const
}

export function getMetricsActiveConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['active-connections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsActiveConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['active-connections'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsActiveConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['active-connections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsActiveConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsActiveConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsActiveConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['active-connections'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsReplicationLagQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['replication-lag']['$get']>>,
) {
  return ['metrics', '/metrics/replication-lag', toValue(args)] as const
}

export function getMetricsReplicationLagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['replication-lag']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsReplicationLagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['replication-lag'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsReplicationLag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['replication-lag']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsReplicationLagQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsReplicationLagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsReplicationLagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['replication-lag'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsFiltersApplicationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.filters.application.$get>>,
) {
  return ['metrics', '/metrics/filters/application', toValue(args)] as const
}

export function getMetricsFiltersApplicationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.filters.application.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsFiltersApplicationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.filters.application.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsFiltersApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.application.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.filters.application.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metrics.filters.application.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metrics.filters.application.$get>>
              >
            >
          >,
          ReturnType<typeof getMetricsFiltersApplicationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.application.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsFiltersApplicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsFiltersApplicationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.filters.application.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsFiltersHttpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.filters.http.$get>>,
) {
  return ['metrics', '/metrics/filters/http', toValue(args)] as const
}

export function getMetricsFiltersHttpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.filters.http.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsFiltersHttpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.filters.http.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsFiltersHttp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.filters.http.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>
            >
          >,
          ReturnType<typeof getMetricsFiltersHttpQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsFiltersHttpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsFiltersHttpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.filters.http.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsFiltersPathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.filters.path.$get>>,
) {
  return ['metrics', '/metrics/filters/path', toValue(args)] as const
}

export function getMetricsFiltersPathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.filters.path.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsFiltersPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.filters.path.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsFiltersPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.filters.path.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>
            >
          >,
          ReturnType<typeof getMetricsFiltersPathQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsFiltersPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsFiltersPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.filters.path.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsTaskRunsQueuedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['task-runs-queued']['$get']>>,
) {
  return ['metrics', '/metrics/task-runs-queued', toValue(args)] as const
}

export function getMetricsTaskRunsQueuedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['task-runs-queued']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsTaskRunsQueuedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['task-runs-queued'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsTaskRunsQueued<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['task-runs-queued']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsTaskRunsQueuedQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsTaskRunsQueuedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsTaskRunsQueuedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['task-runs-queued'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsTaskRunsCompletedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['task-runs-completed']['$get']>>,
) {
  return ['metrics', '/metrics/task-runs-completed', toValue(args)] as const
}

export function getMetricsTaskRunsCompletedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['task-runs-completed']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsTaskRunsCompletedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics['task-runs-completed'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsTaskRunsCompleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metrics)['task-runs-completed']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetricsTaskRunsCompletedQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsTaskRunsCompletedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsTaskRunsCompletedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics['task-runs-completed'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKeyValueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['key-value']['$get']>>,
) {
  return ['key-value', '/key-value', toValue(args)] as const
}

export function getKeyValueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['key-value']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeyValueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['key-value'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeyValue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['key-value']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>
            >
          >,
          ReturnType<typeof getKeyValueQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeyValueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeyValueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['key-value'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostKeyValue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['key-value']['$post']>,
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
  const mutationDefaults = getPostKeyValueMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKeyValueRedisIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['key-value'][':redisId']['$get']>>,
) {
  return ['key-value', '/key-value/:redisId', toValue(args)] as const
}

export function getKeyValueRedisIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['key-value'][':redisId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeyValueRedisIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['key-value'][':redisId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeyValueRedisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['key-value'][':redisId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeyValueRedisIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeyValueRedisIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeyValueRedisIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['key-value'][':redisId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteKeyValueRedisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteKeyValueRedisIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchKeyValueRedisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchKeyValueRedisIdMutationOptions<TError, TOnMutateResult>(
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

export function getKeyValueRedisIdConnectionInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>
  >,
) {
  return ['key-value', '/key-value/:redisId/connection-info', toValue(args)] as const
}

export function getKeyValueRedisIdConnectionInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeyValueRedisIdConnectionInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['key-value'][':redisId']['connection-info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeyValueRedisIdConnectionInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKeyValueRedisIdConnectionInfoQueryKey>
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
          Awaited<ReturnType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeyValueRedisIdConnectionInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeyValueRedisIdConnectionInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['key-value'][':redisId']['connection-info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostKeyValueRedisIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKeyValueRedisIdSuspendMutationOptions<TError, TOnMutateResult>(
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

export function usePostKeyValueRedisIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKeyValueRedisIdResumeMutationOptions<TError, TOnMutateResult>(
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

export function getRedisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.redis.$get>>,
) {
  return ['redis', '/redis', toValue(args)] as const
}

export function getRedisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.redis.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRedisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.redis.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRedis<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.redis.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
          ReturnType<typeof getRedisQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRedisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRedisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.redis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRedis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$post>>>>>,
          TError,
          InferRequestType<typeof client.redis.$post>,
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
  const mutationDefaults = getPostRedisMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRedisRedisIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.redis)[':redisId']['$get']>>,
) {
  return ['redis', '/redis/:redisId', toValue(args)] as const
}

export function getRedisRedisIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.redis)[':redisId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRedisRedisIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.redis[':redisId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRedisRedisId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.redis)[':redisId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>
            >
          >,
          ReturnType<typeof getRedisRedisIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRedisRedisIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRedisRedisIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.redis[':redisId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRedisRedisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRedisRedisIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchRedisRedisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.redis)[':redisId']['$patch']>,
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
  const mutationDefaults = getPatchRedisRedisIdMutationOptions<TError, TOnMutateResult>(
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

export function getRedisRedisIdConnectionInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.redis)[':redisId']['connection-info']['$get']>
  >,
) {
  return ['redis', '/redis/:redisId/connection-info', toValue(args)] as const
}

export function getRedisRedisIdConnectionInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.redis)[':redisId']['connection-info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRedisRedisIdConnectionInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.redis[':redisId']['connection-info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRedisRedisIdConnectionInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.redis)[':redisId']['connection-info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRedisRedisIdConnectionInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRedisRedisIdConnectionInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRedisRedisIdConnectionInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.redis[':redisId']['connection-info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRedisRedisIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRedisRedisIdSuspendMutationOptions<TError, TOnMutateResult>(
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

export function usePostRedisRedisIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRedisRedisIdResumeMutationOptions<TError, TOnMutateResult>(
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

export function getPostgresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.postgres.$get>>,
) {
  return ['postgres', '/postgres', toValue(args)] as const
}

export function getPostgresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.postgres.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostgresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postgres.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePostgres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.postgres.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>
          >,
          ReturnType<typeof getPostgresQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostgresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostgresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postgres.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPostgres<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.postgres.$post>,
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
  const mutationDefaults = getPostPostgresMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostgresPostgresIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.postgres)[':postgresId']['$get']>>,
) {
  return ['postgres', '/postgres/:postgresId', toValue(args)] as const
}

export function getPostgresPostgresIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.postgres)[':postgresId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostgresPostgresIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postgres[':postgresId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostgresPostgresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.postgres)[':postgresId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostgresPostgresIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostgresPostgresIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postgres[':postgresId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePostgresPostgresId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePostgresPostgresIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPostgresPostgresId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPostgresPostgresIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostgresPostgresIdConnectionInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>
  >,
) {
  return ['postgres', '/postgres/:postgresId/connection-info', toValue(args)] as const
}

export function getPostgresPostgresIdConnectionInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostgresPostgresIdConnectionInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postgres[':postgresId']['connection-info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostgresPostgresIdConnectionInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPostgresPostgresIdConnectionInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdConnectionInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostgresPostgresIdConnectionInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postgres[':postgresId']['connection-info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostgresPostgresIdRecoveryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$get']>
  >,
) {
  return ['postgres', '/postgres/:postgresId/recovery', toValue(args)] as const
}

export function getPostgresPostgresIdRecoveryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostgresPostgresIdRecoveryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postgres[':postgresId'].recovery.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostgresPostgresIdRecovery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostgresPostgresIdRecoveryQueryKey>
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
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdRecoveryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostgresPostgresIdRecoveryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postgres[':postgresId'].recovery.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPostgresPostgresIdRecovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostgresPostgresIdRecoveryMutationOptions<
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

export function usePostPostgresPostgresIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostgresPostgresIdSuspendMutationOptions<TError, TOnMutateResult>(
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

export function usePostPostgresPostgresIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostgresPostgresIdResumeMutationOptions<TError, TOnMutateResult>(
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

export function usePostPostgresPostgresIdRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostgresPostgresIdRestartMutationOptions<TError, TOnMutateResult>(
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

export function usePostPostgresPostgresIdFailover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostgresPostgresIdFailoverMutationOptions<
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

export function getPostgresPostgresIdExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['export']['$get']>
  >,
) {
  return ['postgres', '/postgres/:postgresId/export', toValue(args)] as const
}

export function getPostgresPostgresIdExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['export']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostgresPostgresIdExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postgres[':postgresId'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostgresPostgresIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['export']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostgresPostgresIdExportQueryKey>
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
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostgresPostgresIdExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postgres[':postgresId'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPostgresPostgresIdExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostgresPostgresIdExportMutationOptions<TError, TOnMutateResult>(
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

export function getPostgresPostgresIdCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$get']>
  >,
) {
  return ['postgres', '/postgres/:postgresId/credentials', toValue(args)] as const
}

export function getPostgresPostgresIdCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostgresPostgresIdCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postgres[':postgresId'].credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostgresPostgresIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostgresPostgresIdCredentialsQueryKey>
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
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostgresPostgresIdCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postgres[':postgresId'].credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPostgresPostgresIdCredentials<
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
                Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$post']>,
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
  const mutationDefaults = getPostPostgresPostgresIdCredentialsMutationOptions<
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

export function useDeletePostgresPostgresIdCredentialsUsername<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePostgresPostgresIdCredentialsUsernameMutationOptions<
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

export function getPostgresPostgresIdQueryProcessesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>
  >,
) {
  return ['postgres', '/postgres/:postgresId/query/processes', toValue(args)] as const
}

export function getPostgresPostgresIdQueryProcessesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostgresPostgresIdQueryProcessesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postgres[':postgresId'].query.processes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostgresPostgresIdQueryProcesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPostgresPostgresIdQueryProcessesQueryKey>
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
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdQueryProcessesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostgresPostgresIdQueryProcessesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postgres[':postgresId'].query.processes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostgresPostgresIdQueryTopQueriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>
  >,
) {
  return ['postgres', '/postgres/:postgresId/query/top-queries', toValue(args)] as const
}

export function getPostgresPostgresIdQueryTopQueriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostgresPostgresIdQueryTopQueriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postgres[':postgresId'].query['top-queries'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostgresPostgresIdQueryTopQueries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>
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
                    (typeof client.postgres)[':postgresId']['query']['top-queries']['$get']
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
                    (typeof client.postgres)[':postgresId']['query']['top-queries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPostgresPostgresIdQueryTopQueriesQueryKey>
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
            ReturnType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdQueryTopQueriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostgresPostgresIdQueryTopQueriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postgres[':postgresId'].query['top-queries'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostgresPostgresIdQuerySizesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>
  >,
) {
  return ['postgres', '/postgres/:postgresId/query/sizes', toValue(args)] as const
}

export function getPostgresPostgresIdQuerySizesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostgresPostgresIdQuerySizesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postgres[':postgresId'].query.sizes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostgresPostgresIdQuerySizes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>
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
                  ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPostgresPostgresIdQuerySizesQueryKey>
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
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdQuerySizesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostgresPostgresIdQuerySizesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postgres[':postgresId'].query.sizes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostgresPostgresIdQueryTableScansQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>
  >,
) {
  return ['postgres', '/postgres/:postgresId/query/table-scans', toValue(args)] as const
}

export function getPostgresPostgresIdQueryTableScansQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostgresPostgresIdQueryTableScansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postgres[':postgresId'].query['table-scans'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostgresPostgresIdQueryTableScans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>
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
                    (typeof client.postgres)[':postgresId']['query']['table-scans']['$get']
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
                    (typeof client.postgres)[':postgresId']['query']['table-scans']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPostgresPostgresIdQueryTableScansQueryKey>
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
            ReturnType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostgresPostgresIdQueryTableScansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostgresPostgresIdQueryTableScansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postgres[':postgresId'].query['table-scans'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
) {
  return ['projects', '/projects', toValue(args)] as const
}

export function getProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          ReturnType<typeof getProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
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
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['$get']>>,
) {
  return ['projects', '/projects/:projectId', toValue(args)] as const
}

export function getProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getEnvironmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.environments.$get>>,
) {
  return ['environments', '/environments', toValue(args)] as const
}

export function getEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.environments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.environments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.environments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
          >,
          ReturnType<typeof getEnvironmentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.environments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.environments.$post>,
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
  const mutationDefaults = getPostEnvironmentsMutationOptions<TError, TOnMutateResult>(
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

export function getEnvironmentsEnvironmentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.environments)[':environmentId']['$get']>>,
) {
  return ['environments', '/environments/:environmentId', toValue(args)] as const
}

export function getEnvironmentsEnvironmentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.environments)[':environmentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnvironmentsEnvironmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.environments[':environmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.environments)[':environmentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnvironmentsEnvironmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsEnvironmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnvironmentsEnvironmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.environments[':environmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteEnvironmentsEnvironmentId<
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
                  Awaited<ReturnType<(typeof client.environments)[':environmentId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.environments)[':environmentId']['$delete']>,
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
  const mutationDefaults = getDeleteEnvironmentsEnvironmentIdMutationOptions<
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

export function usePatchEnvironmentsEnvironmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchEnvironmentsEnvironmentIdMutationOptions<
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

export function usePostEnvironmentsEnvironmentIdResources<
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
                  ReturnType<(typeof client.environments)[':environmentId']['resources']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.environments)[':environmentId']['resources']['$post']>,
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
  const mutationDefaults = getPostEnvironmentsEnvironmentIdResourcesMutationOptions<
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

export function useDeleteEnvironmentsEnvironmentIdResources<
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
                      (typeof client.environments)[':environmentId']['resources']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.environments)[':environmentId']['resources']['$delete']>,
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
  const mutationDefaults = getDeleteEnvironmentsEnvironmentIdResourcesMutationOptions<
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

export function getEnvGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['env-groups']['$get']>>,
) {
  return ['env-groups', '/env-groups', toValue(args)] as const
}

export function getEnvGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['env-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnvGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['env-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['env-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>
            >
          >,
          ReturnType<typeof getEnvGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEnvGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnvGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['env-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostEnvGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['env-groups']['$post']>,
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
  const mutationDefaults = getPostEnvGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEnvGroupsEnvGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['env-groups'][':envGroupId']['$get']>>,
) {
  return ['env-groups', '/env-groups/:envGroupId', toValue(args)] as const
}

export function getEnvGroupsEnvGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['env-groups'][':envGroupId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnvGroupsEnvGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['env-groups'][':envGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvGroupsEnvGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['env-groups'][':envGroupId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnvGroupsEnvGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvGroupsEnvGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnvGroupsEnvGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['env-groups'][':envGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteEnvGroupsEnvGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEnvGroupsEnvGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchEnvGroupsEnvGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchEnvGroupsEnvGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostEnvGroupsEnvGroupIdServicesServiceId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnvGroupsEnvGroupIdServicesServiceIdMutationOptions<
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

export function useDeleteEnvGroupsEnvGroupIdServicesServiceId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEnvGroupsEnvGroupIdServicesServiceIdMutationOptions<
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

export function getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']>
  >,
) {
  return ['env-groups', '/env-groups/:envGroupId/env-vars/:envVarKey', toValue(args)] as const
}

export function getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvGroupsEnvGroupIdEnvVarsEnvVarKey<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']>
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
                    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
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
                    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryKey>
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
              (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutEnvGroupsEnvGroupIdEnvVarsEnvVarKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEnvGroupsEnvGroupIdEnvVarsEnvVarKeyMutationOptions<
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

export function useDeleteEnvGroupsEnvGroupIdEnvVarsEnvVarKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyMutationOptions<
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

export function getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
    >
  >,
) {
  return ['env-groups', '/env-groups/:envGroupId/secret-files/:envVarKey', toValue(args)] as const
}

export function getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvGroupsEnvGroupIdSecretFilesEnvVarKey<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
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
                    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
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
                    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryKey>
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
              (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutEnvGroupsEnvGroupIdSecretFilesEnvVarKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEnvGroupsEnvGroupIdSecretFilesEnvVarKeyMutationOptions<
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

export function useDeleteEnvGroupsEnvGroupIdSecretFilesEnvVarKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyMutationOptions<
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

export function getMaintenanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.maintenance.$get>>,
) {
  return ['maintenance', '/maintenance', toValue(args)] as const
}

export function getMaintenanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.maintenance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMaintenanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.maintenance.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMaintenance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.maintenance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>
          >,
          ReturnType<typeof getMaintenanceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMaintenanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMaintenanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.maintenance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMaintenanceMaintenanceRunIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$get']>
  >,
) {
  return ['maintenance', '/maintenance/:maintenanceRunID', toValue(args)] as const
}

export function getMaintenanceMaintenanceRunIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMaintenanceMaintenanceRunIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.maintenance[':maintenanceRunID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMaintenanceMaintenanceRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMaintenanceMaintenanceRunIDQueryKey>
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
          Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMaintenanceMaintenanceRunIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMaintenanceMaintenanceRunIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.maintenance[':maintenanceRunID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchMaintenanceMaintenanceRunID<
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
                Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$patch']>,
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
  const mutationDefaults = getPatchMaintenanceMaintenanceRunIDMutationOptions<
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

export function usePostMaintenanceMaintenanceRunIDTrigger<
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
                  ReturnType<(typeof client.maintenance)[':maintenanceRunID']['trigger']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['trigger']['$post']>,
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
  const mutationDefaults = getPostMaintenanceMaintenanceRunIDTriggerMutationOptions<
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

export function getBuildSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['build-sources']['$get']>>,
) {
  return ['build-sources', '/build-sources', toValue(args)] as const
}

export function getBuildSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['build-sources']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['build-sources'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildSources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['build-sources']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>
            >
          >,
          ReturnType<typeof getBuildSourcesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['build-sources'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBuildSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['build-sources']['$post']>,
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
  const mutationDefaults = getPostBuildSourcesMutationOptions<TError, TOnMutateResult>(
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

export function getBuildSourcesBuildSourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$get']>
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId', toValue(args)] as const
}

export function getBuildSourcesBuildSourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildSourcesBuildSourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['build-sources'][':buildSourceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildSourcesBuildSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBuildSourcesBuildSourceIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildSourcesBuildSourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['build-sources'][':buildSourceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteBuildSourcesBuildSourceId<
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
                  Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$delete']>,
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
  const mutationDefaults = getDeleteBuildSourcesBuildSourceIdMutationOptions<
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

export function usePatchBuildSourcesBuildSourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBuildSourcesBuildSourceIdMutationOptions<
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

export function getBuildSourcesBuildSourceIdBuildsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/builds', toValue(args)] as const
}

export function getBuildSourcesBuildSourceIdBuildsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildSourcesBuildSourceIdBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['build-sources'][':buildSourceId'].builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildSourcesBuildSourceIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBuildSourcesBuildSourceIdBuildsQueryKey>
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
          Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildSourcesBuildSourceIdBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['build-sources'][':buildSourceId'].builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBuildSourcesBuildSourceIdBuilds<
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
                  ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$post']>,
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
  const mutationDefaults = getPostBuildSourcesBuildSourceIdBuildsMutationOptions<
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

export function getBuildSourcesBuildSourceIdBuildsBuildIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
    >
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/builds/:buildId', toValue(args)] as const
}

export function getBuildSourcesBuildSourceIdBuildsBuildIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildSourcesBuildSourceIdBuildsBuildIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['build-sources'][':buildSourceId'].builds[':buildId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildSourcesBuildSourceIdBuildsBuildId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
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
                    (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
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
                    (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBuildSourcesBuildSourceIdBuildsBuildIdQueryKey>
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
              (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdBuildsBuildIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildSourcesBuildSourceIdBuildsBuildIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['build-sources'][':buildSourceId'].builds[':buildId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildSourcesBuildSourceIdEnvVarsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/env-vars', toValue(args)] as const
}

export function getBuildSourcesBuildSourceIdEnvVarsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildSourcesBuildSourceIdEnvVarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['env-vars'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildSourcesBuildSourceIdEnvVars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBuildSourcesBuildSourceIdEnvVarsQueryKey>
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
            ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdEnvVarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildSourcesBuildSourceIdEnvVarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['build-sources'][':buildSourceId']['env-vars'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBuildSourcesBuildSourceIdEnvVars<
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
                  ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$put']>,
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
  const mutationDefaults = getPutBuildSourcesBuildSourceIdEnvVarsMutationOptions<
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

export function getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
    >
  >,
) {
  return [
    'build-sources',
    '/build-sources/:buildSourceId/env-vars/:envVarKey',
    toValue(args),
  ] as const
}

export function getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildSourcesBuildSourceIdEnvVarsEnvVarKey<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
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
                    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
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
                    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryKey>
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
              (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBuildSourcesBuildSourceIdEnvVarsEnvVarKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBuildSourcesBuildSourceIdEnvVarsEnvVarKeyMutationOptions<
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

export function useDeleteBuildSourcesBuildSourceIdEnvVarsEnvVarKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyMutationOptions<
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

export function getBuildSourcesBuildSourceIdSecretFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']>
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/secret-files', toValue(args)] as const
}

export function getBuildSourcesBuildSourceIdSecretFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildSourcesBuildSourceIdSecretFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['secret-files'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildSourcesBuildSourceIdSecretFiles<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']>
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
                    (typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']
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
                    (typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBuildSourcesBuildSourceIdSecretFilesQueryKey>
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
            ReturnType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdSecretFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildSourcesBuildSourceIdSecretFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['build-sources'][':buildSourceId']['secret-files'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBuildSourcesBuildSourceIdSecretFiles<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBuildSourcesBuildSourceIdSecretFilesMutationOptions<
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

export function getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
    >
  >,
) {
  return [
    'build-sources',
    '/build-sources/:buildSourceId/secret-files/:envVarKey',
    toValue(args),
  ] as const
}

export function getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBuildSourcesBuildSourceIdSecretFilesEnvVarKey<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
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
                    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
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
                    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryKey>
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
              (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutBuildSourcesBuildSourceIdSecretFilesEnvVarKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBuildSourcesBuildSourceIdSecretFilesEnvVarKeyMutationOptions<
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

export function useDeleteBuildSourcesBuildSourceIdSecretFilesEnvVarKey<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyMutationOptions<
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

export function usePostBuildSourcesBuildSourceIdEnvGroupsEnvGroupId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdMutationOptions<
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

export function useDeleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdMutationOptions<
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

export function getWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
) {
  return ['webhooks', '/webhooks', toValue(args)] as const
}

export function getWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          ReturnType<typeof getWebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
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
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
) {
  return ['webhooks', '/webhooks/:webhookId', toValue(args)] as const
}

export function getWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhookId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhookId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksWebhookIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhookId']['events']['$get']>
  >,
) {
  return ['webhooks', '/webhooks/:webhookId/events', toValue(args)] as const
}

export function getWebhooksWebhookIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhookId']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhookId'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhookId']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhookId'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkflowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
) {
  return ['workflows', '/workflows', toValue(args)] as const
}

export function getWorkflowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
          >,
          ReturnType<typeof getWorkflowsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkflowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkflows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.workflows.$post>,
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
  const mutationDefaults = getPostWorkflowsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkflowsWorkflowIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':workflowId']['$get']>>,
) {
  return ['workflows', '/workflows/:workflowId', toValue(args)] as const
}

export function getWorkflowsWorkflowIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':workflowId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsWorkflowIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows[':workflowId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':workflowId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsWorkflowIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsWorkflowIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsWorkflowIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows[':workflowId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
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

export function getWorkflowversionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflowversions.$get>>,
) {
  return ['workflowversions', '/workflowversions', toValue(args)] as const
}

export function getWorkflowversionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflowversions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowversionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflowversions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowversions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflowversions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>
            >
          >,
          ReturnType<typeof getWorkflowversionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowversionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowversionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflowversions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkflowversions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.workflowversions.$post>,
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
  const mutationDefaults = getPostWorkflowversionsMutationOptions<TError, TOnMutateResult>(
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

export function getWorkflowversionsWorkflowVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflowversions)[':workflowVersionId']['$get']>
  >,
) {
  return ['workflowversions', '/workflowversions/:workflowVersionId', toValue(args)] as const
}

export function getWorkflowversionsWorkflowVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflowversions)[':workflowVersionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowversionsWorkflowVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflowversions[':workflowVersionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowversionsWorkflowVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflowversions)[':workflowVersionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowversionsWorkflowVersionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowversionsWorkflowVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowversionsWorkflowVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflowversions[':workflowVersionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
) {
  return ['tasks', '/tasks', toValue(args)] as const
}

export function getTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
          ReturnType<typeof getTasksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['$get']>>,
) {
  return ['tasks', '/tasks/:taskId', toValue(args)] as const
}

export function getTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
            >
          >,
          ReturnType<typeof getTasksTaskIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['task-runs']['$get']>>,
) {
  return ['task-runs', '/task-runs', toValue(args)] as const
}

export function getTaskRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['task-runs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['task-runs'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTaskRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['task-runs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>
            >
          >,
          ReturnType<typeof getTaskRunsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaskRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['task-runs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTaskRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['task-runs']['$post']>,
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
  const mutationDefaults = getPostTaskRunsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaskRunsEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['task-runs']['events']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['task-runs', '/task-runs/events', keyArgs] as const
}

export function getTaskRunsEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['task-runs']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskRunsEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['task-runs'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskRunsEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['task-runs']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskRunsEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskRunsEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskRunsEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['task-runs'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaskRunsTaskRunIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['task-runs'][':taskRunId']['$get']>>,
) {
  return ['task-runs', '/task-runs/:taskRunId', toValue(args)] as const
}

export function getTaskRunsTaskRunIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['task-runs'][':taskRunId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaskRunsTaskRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['task-runs'][':taskRunId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaskRunsTaskRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['task-runs'][':taskRunId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaskRunsTaskRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaskRunsTaskRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaskRunsTaskRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['task-runs'][':taskRunId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteTaskRunsTaskRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTaskRunsTaskRunIdMutationOptions<TError, TOnMutateResult>(
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

export function getFlowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.flows.$get>>,
) {
  return ['flows', '/flows', toValue(args)] as const
}

export function getFlowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.flows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.flows.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFlows<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.flows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
          ReturnType<typeof getFlowsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFlowsFlowIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.flows)[':flowId']['$get']>>,
) {
  return ['flows', '/flows/:flowId', toValue(args)] as const
}

export function getFlowsFlowIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.flows)[':flowId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFlowsFlowIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.flows[':flowId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFlowsFlowId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.flows)[':flowId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>
            >
          >,
          ReturnType<typeof getFlowsFlowIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFlowsFlowIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFlowsFlowIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.flows[':flowId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFlowRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['flow-runs']['$get']>>,
) {
  return ['flow-runs', '/flow-runs', toValue(args)] as const
}

export function getFlowRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['flow-runs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFlowRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['flow-runs'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFlowRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['flow-runs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>
            >
          >,
          ReturnType<typeof getFlowRunsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFlowRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFlowRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['flow-runs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFlowRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['flow-runs']['$post']>,
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
  const mutationDefaults = getPostFlowRunsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFlowRunsFlowRunIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$get']>>,
) {
  return ['flow-runs', '/flow-runs/:flowRunId', toValue(args)] as const
}

export function getFlowRunsFlowRunIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFlowRunsFlowRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['flow-runs'][':flowRunId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFlowRunsFlowRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFlowRunsFlowRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFlowRunsFlowRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFlowRunsFlowRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['flow-runs'][':flowRunId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteFlowRunsFlowRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFlowRunsFlowRunIdMutationOptions<TError, TOnMutateResult>(
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

export function getFlowRunsFlowRunIdStepsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>
  >,
) {
  return ['flow-runs', '/flow-runs/:flowRunId/steps', toValue(args)] as const
}

export function getFlowRunsFlowRunIdStepsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFlowRunsFlowRunIdStepsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['flow-runs'][':flowRunId'].steps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFlowRunsFlowRunIdSteps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFlowRunsFlowRunIdStepsQueryKey>
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
          Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFlowRunsFlowRunIdStepsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFlowRunsFlowRunIdStepsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['flow-runs'][':flowRunId'].steps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFlowRunsFlowRunIdStepsStepSeqQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>
  >,
) {
  return ['flow-runs', '/flow-runs/:flowRunId/steps/:stepSeq', toValue(args)] as const
}

export function getFlowRunsFlowRunIdStepsStepSeqQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFlowRunsFlowRunIdStepsStepSeqQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['flow-runs'][':flowRunId'].steps[':stepSeq'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFlowRunsFlowRunIdStepsStepSeq<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>
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
                    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']
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
                    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFlowRunsFlowRunIdStepsStepSeqQueryKey>
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
            ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFlowRunsFlowRunIdStepsStepSeqQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFlowRunsFlowRunIdStepsStepSeqQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['flow-runs'][':flowRunId'].steps[':stepSeq'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
    >
  >,
) {
  return [
    'flow-runs',
    '/flow-runs/:flowRunId/steps/:stepSeq/attempts/:attempt',
    toValue(args),
  ] as const
}

export function getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['flow-runs'][':flowRunId'].steps[':stepSeq'].attempts[':attempt'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFlowRunsFlowRunIdStepsStepSeqAttemptsAttempt<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
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
                    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
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
                    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryKey>
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
              (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['flow-runs'][':flowRunId'].steps[':stepSeq'].attempts[':attempt'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sandboxes.$get>>,
) {
  return ['sandboxes', '/sandboxes', toValue(args)] as const
}

export function getSandboxesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sandboxes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandboxes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSandboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sandboxes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>
          >,
          ReturnType<typeof getSandboxesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSandboxesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandboxes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSandboxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sandboxes.$post>,
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
  const mutationDefaults = getPostSandboxesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSandboxGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sandbox-groups']['$get']>>,
) {
  return ['sandbox-groups', '/sandbox-groups', toValue(args)] as const
}

export function getSandboxGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sandbox-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sandbox-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sandbox-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>
            >
          >,
          ReturnType<typeof getSandboxGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sandbox-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSandboxGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['sandbox-groups']['$post']>,
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
  const mutationDefaults = getPostSandboxGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getSandboxesSandboxIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sandboxes)[':sandboxId']['$get']>>,
) {
  return ['sandboxes', '/sandboxes/:sandboxId', toValue(args)] as const
}

export function getSandboxesSandboxIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sandboxes)[':sandboxId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxesSandboxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandboxes[':sandboxId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxesSandboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sandboxes)[':sandboxId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSandboxesSandboxIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxesSandboxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxesSandboxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandboxes[':sandboxId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxesSandboxIdExecsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>
  >,
) {
  return ['sandboxes', '/sandboxes/:sandboxId/execs', toValue(args)] as const
}

export function getSandboxesSandboxIdExecsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxesSandboxIdExecsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandboxes[':sandboxId'].execs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxesSandboxIdExecs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSandboxesSandboxIdExecsQueryKey>
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
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxesSandboxIdExecsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxesSandboxIdExecsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandboxes[':sandboxId'].execs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxesSandboxIdExecsExecIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>
  >,
) {
  return ['sandboxes', '/sandboxes/:sandboxId/execs/:execId', toValue(args)] as const
}

export function getSandboxesSandboxIdExecsExecIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxesSandboxIdExecsExecIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandboxes[':sandboxId'].execs[':execId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxesSandboxIdExecsExecId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSandboxesSandboxIdExecsExecIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxesSandboxIdExecsExecIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxesSandboxIdExecsExecIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandboxes[':sandboxId'].execs[':execId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSandboxesSandboxIdTerminate<
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
                  Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['terminate']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sandboxes)[':sandboxId']['terminate']['$post']>,
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
  const mutationDefaults = getPostSandboxesSandboxIdTerminateMutationOptions<
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

export function usePostSandboxesSandboxIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxesSandboxIdSuspendMutationOptions<TError, TOnMutateResult>(
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

export function usePostSandboxesSandboxIdSnapshots<
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
                Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['snapshots']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandboxes)[':sandboxId']['snapshots']['$post']>,
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
  const mutationDefaults = getPostSandboxesSandboxIdSnapshotsMutationOptions<
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

export function getSandboxGroupsSandboxGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>
  >,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId', toValue(args)] as const
}

export function getSandboxGroupsSandboxGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxGroupsSandboxGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxGroupsSandboxGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSandboxGroupsSandboxGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxGroupsSandboxGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchSandboxGroupsSandboxGroupId<
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
                Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$patch']>,
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
  const mutationDefaults = getPatchSandboxGroupsSandboxGroupIdMutationOptions<
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

export function getSandboxGroupsSandboxGroupIdCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']>
  >,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/credentials', toValue(args)] as const
}

export function getSandboxGroupsSandboxGroupIdCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxGroupsSandboxGroupIdCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxGroupsSandboxGroupIdCredentials<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']>
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsQueryKey>
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
            ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxGroupsSandboxGroupIdCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSandboxGroupsSandboxGroupIdCredentials<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxGroupsSandboxGroupIdCredentialsMutationOptions<
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

export function getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
    >
  >,
) {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId',
    toValue(args),
  ] as const
}

export function getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSandboxGroupsSandboxGroupIdCredentialsCredentialId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryKey>
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
              (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxGroupsSandboxGroupIdCredentialsCredentialIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSandboxGroupsSandboxGroupIdCredentialsCredentialId<
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
    getDeleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdMutationOptions<
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

export function usePatchSandboxGroupsSandboxGroupIdCredentialsCredentialId<
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
    getPatchSandboxGroupsSandboxGroupIdCredentialsCredentialIdMutationOptions<
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

export function getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
    >
  >,
) {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId/versions',
    toValue(args),
  ] as const
}

export function getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].versions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryKey>
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
              (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].versions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestore<
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
    getPostSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreMutationOptions<
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

export function getSandboxGroupsSandboxGroupIdBuildsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>
  >,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/builds', toValue(args)] as const
}

export function getSandboxGroupsSandboxGroupIdBuildsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxGroupsSandboxGroupIdBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxGroupsSandboxGroupIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSandboxGroupsSandboxGroupIdBuildsQueryKey>
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
            ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxGroupsSandboxGroupIdBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSandboxGroupsSandboxGroupIdBuilds<
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$post']>,
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
  const mutationDefaults = getPostSandboxGroupsSandboxGroupIdBuildsMutationOptions<
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

export function getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
    >
  >,
) {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/builds/:buildId',
    toValue(args),
  ] as const
}

export function getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].builds[':buildId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxGroupsSandboxGroupIdBuildsBuildId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryKey>
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
              (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxGroupsSandboxGroupIdBuildsBuildIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].builds[':buildId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSandboxGroupsSandboxGroupIdBuildsBuildId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSandboxGroupsSandboxGroupIdBuildsBuildIdMutationOptions<
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

export function getSandboxGroupsSandboxGroupIdSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>
  >,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/snapshots', toValue(args)] as const
}

export function getSandboxGroupsSandboxGroupIdSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxGroupsSandboxGroupIdSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxGroupsSandboxGroupIdSnapshots<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSandboxGroupsSandboxGroupIdSnapshotsQueryKey>
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
            ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxGroupsSandboxGroupIdSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
    >
  >,
) {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/snapshots/:snapshotId',
    toValue(args),
  ] as const
}

export function getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sandbox-groups'][':sandboxGroupId'].snapshots[':snapshotId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxGroupsSandboxGroupIdSnapshotsSnapshotId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
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
                    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryKey>
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
              (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].snapshots[':snapshotId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdMutationOptions<
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

export function usePostSandboxesSandboxIdRunsOperationToken<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxesSandboxIdRunsOperationTokenMutationOptions<
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

export function usePostSandboxesSandboxIdFilesOperationToken<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxesSandboxIdFilesOperationTokenMutationOptions<
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
