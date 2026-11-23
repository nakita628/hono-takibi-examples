import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetBlueprintsKey(args: InferRequestType<typeof client.blueprints.$get>) {
  return ['blueprints', '/blueprints', args] as const
}

export function useGetBlueprints<TError = unknown>(
  args: InferRequestType<typeof client.blueprints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlueprintsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blueprints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlueprints<TError = unknown>(
  args: InferRequestType<typeof client.blueprints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlueprintsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blueprints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBlueprintsValidateKey() {
  return ['blueprints', '/blueprints/validate', 'POST'] as const
}

export function usePostBlueprintsValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blueprints.validate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.blueprints.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBlueprintsValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.blueprints.validate.$post> }) =>
        parseResponse(client.blueprints.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOwnersOwnerIdMembersUserIdKey() {
  return ['owners', '/owners/:ownerId/members/:userId', 'DELETE'] as const
}

export function useDeleteOwnersOwnerIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owners)[':ownerId']['members'][':userId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOwnersOwnerIdMembersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$delete']>
        },
      ) => parseResponse(client.owners[':ownerId'].members[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOwnersOwnerIdMembersUserIdKey() {
  return ['owners', '/owners/:ownerId/members/:userId', 'PATCH'] as const
}

export function usePatchOwnersOwnerIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.owners)[':ownerId']['members'][':userId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOwnersOwnerIdMembersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$patch']>
        },
      ) => parseResponse(client.owners[':ownerId'].members[':userId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlueprintsBlueprintIdKey(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['$get']>,
) {
  return ['blueprints', '/blueprints/:blueprintId', args] as const
}

export function useGetBlueprintsBlueprintId<TError = unknown>(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBlueprintsBlueprintIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blueprints[':blueprintId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlueprintsBlueprintId<TError = unknown>(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBlueprintsBlueprintIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blueprints[':blueprintId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBlueprintsBlueprintIdKey() {
  return ['blueprints', '/blueprints/:blueprintId', 'DELETE'] as const
}

export function useDeleteBlueprintsBlueprintId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.blueprints)[':blueprintId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBlueprintsBlueprintIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.blueprints)[':blueprintId']['$delete']> },
      ) => parseResponse(client.blueprints[':blueprintId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBlueprintsBlueprintIdKey() {
  return ['blueprints', '/blueprints/:blueprintId', 'PATCH'] as const
}

export function usePatchBlueprintsBlueprintId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.blueprints)[':blueprintId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBlueprintsBlueprintIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.blueprints)[':blueprintId']['$patch']> },
      ) => parseResponse(client.blueprints[':blueprintId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlueprintsBlueprintIdSyncsKey(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>,
) {
  return ['blueprints', '/blueprints/:blueprintId/syncs', args] as const
}

export function useGetBlueprintsBlueprintIdSyncs<TError = unknown>(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBlueprintsBlueprintIdSyncsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blueprints[':blueprintId'].syncs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlueprintsBlueprintIdSyncs<TError = unknown>(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBlueprintsBlueprintIdSyncsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blueprints[':blueprintId'].syncs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDedicatedIpsKey(
  args: InferRequestType<(typeof client)['dedicated-ips']['$get']>,
) {
  return ['dedicated-ips', '/dedicated-ips', args] as const
}

export function useGetDedicatedIps<TError = unknown>(
  args: InferRequestType<(typeof client)['dedicated-ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDedicatedIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dedicated-ips'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDedicatedIps<TError = unknown>(
  args: InferRequestType<(typeof client)['dedicated-ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDedicatedIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dedicated-ips'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDedicatedIpsKey() {
  return ['dedicated-ips', '/dedicated-ips', 'POST'] as const
}

export function usePostDedicatedIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dedicated-ips']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dedicated-ips']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDedicatedIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dedicated-ips']['$post']> },
      ) => parseResponse(client['dedicated-ips'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDedicatedIpsDedicatedIpIdKey(
  args: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>,
) {
  return ['dedicated-ips', '/dedicated-ips/:dedicatedIpId', args] as const
}

export function useGetDedicatedIpsDedicatedIpId<TError = unknown>(
  args: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDedicatedIpsDedicatedIpIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dedicated-ips'][':dedicatedIpId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDedicatedIpsDedicatedIpId<TError = unknown>(
  args: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDedicatedIpsDedicatedIpIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dedicated-ips'][':dedicatedIpId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDedicatedIpsDedicatedIpIdKey() {
  return ['dedicated-ips', '/dedicated-ips/:dedicatedIpId', 'DELETE'] as const
}

export function useDeleteDedicatedIpsDedicatedIpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDedicatedIpsDedicatedIpIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$delete']> },
      ) => parseResponse(client['dedicated-ips'][':dedicatedIpId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDedicatedIpsDedicatedIpIdKey() {
  return ['dedicated-ips', '/dedicated-ips/:dedicatedIpId', 'PATCH'] as const
}

export function usePatchDedicatedIpsDedicatedIpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDedicatedIpsDedicatedIpIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$patch']> },
      ) => parseResponse(client['dedicated-ips'][':dedicatedIpId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDisksKey(args: InferRequestType<typeof client.disks.$get>) {
  return ['disks', '/disks', args] as const
}

export function useGetDisks<TError = unknown>(
  args: InferRequestType<typeof client.disks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.disks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDisks<TError = unknown>(
  args: InferRequestType<typeof client.disks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.disks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDisksKey() {
  return ['disks', '/disks', 'POST'] as const
}

export function usePostDisks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.disks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.disks.$post> }) =>
        parseResponse(client.disks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDisksDiskIdKey(
  args: InferRequestType<(typeof client.disks)[':diskId']['$get']>,
) {
  return ['disks', '/disks/:diskId', args] as const
}

export function useGetDisksDiskId<TError = unknown>(
  args: InferRequestType<(typeof client.disks)[':diskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisksDiskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disks[':diskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisksDiskId<TError = unknown>(
  args: InferRequestType<(typeof client.disks)[':diskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisksDiskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disks[':diskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDisksDiskIdKey() {
  return ['disks', '/disks/:diskId', 'DELETE'] as const
}

export function useDeleteDisksDiskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.disks)[':diskId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDisksDiskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.disks)[':diskId']['$delete']> },
      ) => parseResponse(client.disks[':diskId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDisksDiskIdKey() {
  return ['disks', '/disks/:diskId', 'PATCH'] as const
}

export function usePatchDisksDiskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.disks)[':diskId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.disks)[':diskId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDisksDiskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.disks)[':diskId']['$patch']> },
      ) => parseResponse(client.disks[':diskId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDisksDiskIdSnapshotsKey(
  args: InferRequestType<(typeof client.disks)[':diskId']['snapshots']['$get']>,
) {
  return ['disks', '/disks/:diskId/snapshots', args] as const
}

export function useGetDisksDiskIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.disks)[':diskId']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDisksDiskIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disks[':diskId'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisksDiskIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.disks)[':diskId']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDisksDiskIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disks[':diskId'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDisksDiskIdSnapshotsRestoreKey() {
  return ['disks', '/disks/:diskId/snapshots/restore', 'POST'] as const
}

export function usePostDisksDiskIdSnapshotsRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.disks)[':diskId']['snapshots']['restore']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.disks)[':diskId']['snapshots']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisksDiskIdSnapshotsRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.disks)[':diskId']['snapshots']['restore']['$post']>
        },
      ) => parseResponse(client.disks[':diskId'].snapshots.restore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey() {
  return ['users', '/users'] as const
}

export function useGetUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOwnersKey(args: InferRequestType<typeof client.owners.$get>) {
  return ['owners', '/owners', args] as const
}

export function useGetOwners<TError = unknown>(
  args: InferRequestType<typeof client.owners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOwnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.owners.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOwners<TError = unknown>(
  args: InferRequestType<typeof client.owners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOwnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.owners.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.owners.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetOwnersOwnerIdKey(
  args: InferRequestType<(typeof client.owners)[':ownerId']['$get']>,
) {
  return ['owners', '/owners/:ownerId', args] as const
}

export function useGetOwnersOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client.owners)[':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOwnersOwnerIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.owners[':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwnersOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client.owners)[':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOwnersOwnerIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.owners)[':ownerId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.owners[':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOwnersOwnerIdMembersKey(
  args: InferRequestType<(typeof client.owners)[':ownerId']['members']['$get']>,
) {
  return ['owners', '/owners/:ownerId/members', args] as const
}

export function useGetOwnersOwnerIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.owners)[':ownerId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOwnersOwnerIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.owners[':ownerId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwnersOwnerIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.owners)[':ownerId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOwnersOwnerIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owners)[':ownerId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.owners[':ownerId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOwnersOwnerIdAuditLogsKey(
  args: InferRequestType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>,
) {
  return ['owners', '/owners/:ownerId/audit-logs', args] as const
}

export function useGetOwnersOwnerIdAuditLogs<TError = unknown>(
  args: InferRequestType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOwnersOwnerIdAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.owners[':ownerId']['audit-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwnersOwnerIdAuditLogs<TError = unknown>(
  args: InferRequestType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOwnersOwnerIdAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.owners[':ownerId']['audit-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrgIdAuditLogsKey(
  args: InferRequestType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>,
) {
  return ['organizations', '/organizations/:orgId/audit-logs', args] as const
}

export function useGetOrganizationsOrgIdAuditLogs<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrgIdAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':orgId']['audit-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrgIdAuditLogs<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrgIdAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':orgId']['audit-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationSettingsOwnersOwnerIdKey(
  args: InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>,
) {
  return ['notification-settings', '/notification-settings/owners/:ownerId', args] as const
}

export function useGetNotificationSettingsOwnersOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>
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
        ? getGetNotificationSettingsOwnersOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['notification-settings'].owners[':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationSettingsOwnersOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>
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
        ? getGetNotificationSettingsOwnersOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['notification-settings'].owners[':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchNotificationSettingsOwnersOwnerIdKey() {
  return ['notification-settings', '/notification-settings/owners/:ownerId', 'PATCH'] as const
}

export function usePatchNotificationSettingsOwnersOwnerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNotificationSettingsOwnersOwnerIdKey()
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
            (typeof client)['notification-settings']['owners'][':ownerId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['notification-settings'].owners[':ownerId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationSettingsOverridesKey(
  args: InferRequestType<(typeof client)['notification-settings']['overrides']['$get']>,
) {
  return ['notification-settings', '/notification-settings/overrides', args] as const
}

export function useGetNotificationSettingsOverrides<TError = unknown>(
  args: InferRequestType<(typeof client)['notification-settings']['overrides']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationSettingsOverridesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['notification-settings'].overrides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationSettingsOverrides<TError = unknown>(
  args: InferRequestType<(typeof client)['notification-settings']['overrides']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationSettingsOverridesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['notification-settings']['overrides']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['notification-settings'].overrides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationSettingsOverridesServicesServiceIdKey(
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

export function useGetNotificationSettingsOverridesServicesServiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationSettingsOverridesServicesServiceIdKey(args)
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
                (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
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
          client['notification-settings'].overrides.services[':serviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationSettingsOverridesServicesServiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationSettingsOverridesServicesServiceIdKey(args)
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
                (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
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
          client['notification-settings'].overrides.services[':serviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchNotificationSettingsOverridesServicesServiceIdKey() {
  return [
    'notification-settings',
    '/notification-settings/overrides/services/:serviceId',
    'PATCH',
  ] as const
}

export function usePatchNotificationSettingsOverridesServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNotificationSettingsOverridesServicesServiceIdKey()
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
            (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['notification-settings'].overrides.services[':serviceId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRegistrycredentialsKey(
  args: InferRequestType<typeof client.registrycredentials.$get>,
) {
  return ['registrycredentials', '/registrycredentials', args] as const
}

export function useGetRegistrycredentials<TError = unknown>(
  args: InferRequestType<typeof client.registrycredentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegistrycredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registrycredentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrycredentials<TError = unknown>(
  args: InferRequestType<typeof client.registrycredentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegistrycredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registrycredentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRegistrycredentialsKey() {
  return ['registrycredentials', '/registrycredentials', 'POST'] as const
}

export function usePostRegistrycredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrycredentials.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.registrycredentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegistrycredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.registrycredentials.$post> }) =>
        parseResponse(client.registrycredentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRegistrycredentialsRegistryCredentialIdKey(
  args: InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>,
) {
  return ['registrycredentials', '/registrycredentials/:registryCredentialId', args] as const
}

export function useGetRegistrycredentialsRegistryCredentialId<TError = unknown>(
  args: InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>
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
        ? getGetRegistrycredentialsRegistryCredentialIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.registrycredentials[':registryCredentialId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrycredentialsRegistryCredentialId<TError = unknown>(
  args: InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>
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
        ? getGetRegistrycredentialsRegistryCredentialIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.registrycredentials[':registryCredentialId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRegistrycredentialsRegistryCredentialIdKey() {
  return ['registrycredentials', '/registrycredentials/:registryCredentialId', 'DELETE'] as const
}

export function useDeleteRegistrycredentialsRegistryCredentialId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRegistrycredentialsRegistryCredentialIdKey()
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
            (typeof client.registrycredentials)[':registryCredentialId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.registrycredentials[':registryCredentialId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchRegistrycredentialsRegistryCredentialIdKey() {
  return ['registrycredentials', '/registrycredentials/:registryCredentialId', 'PATCH'] as const
}

export function usePatchRegistrycredentialsRegistryCredentialId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRegistrycredentialsRegistryCredentialIdKey()
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
            (typeof client.registrycredentials)[':registryCredentialId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.registrycredentials[':registryCredentialId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesKey(args: InferRequestType<typeof client.services.$get>) {
  return ['services', '/services', args] as const
}

export function useGetServices<TError = unknown>(
  args: InferRequestType<typeof client.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.services.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetServices<TError = unknown>(
  args: InferRequestType<typeof client.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.services.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostServicesKey() {
  return ['services', '/services', 'POST'] as const
}

export function usePostServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.services.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.services.$post> }) =>
        parseResponse(client.services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['$get']>,
) {
  return ['services', '/services/:serviceId', args] as const
}

export function useGetServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':serviceId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteServicesServiceIdKey() {
  return ['services', '/services/:serviceId', 'DELETE'] as const
}

export function useDeleteServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.services)[':serviceId']['$delete']> },
      ) => parseResponse(client.services[':serviceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchServicesServiceIdKey() {
  return ['services', '/services/:serviceId', 'PATCH'] as const
}

export function usePatchServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':serviceId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchServicesServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.services)[':serviceId']['$patch']> },
      ) => parseResponse(client.services[':serviceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServicesServiceIdCachePurgeKey() {
  return ['services', '/services/:serviceId/cache/purge', 'POST'] as const
}

export function usePostServicesServiceIdCachePurge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['cache']['purge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['cache']['purge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdCachePurgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.services)[':serviceId']['cache']['purge']['$post']>
        },
      ) => parseResponse(client.services[':serviceId'].cache.purge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdDeploysKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys']['$get']>,
) {
  return ['services', '/services/:serviceId/deploys', args] as const
}

export function useGetServicesServiceIdDeploys<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdDeploysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].deploys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdDeploys<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdDeploysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].deploys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServicesServiceIdDeploysKey() {
  return ['services', '/services/:serviceId/deploys', 'POST'] as const
}

export function usePostServicesServiceIdDeploys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['deploys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['deploys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdDeploysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['deploys']['$post']> },
      ) => parseResponse(client.services[':serviceId'].deploys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdDeploysDeployIdKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>,
) {
  return ['services', '/services/:serviceId/deploys/:deployId', args] as const
}

export function useGetServicesServiceIdDeploysDeployId<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>
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
        ? getGetServicesServiceIdDeploysDeployIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId'].deploys[':deployId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdDeploysDeployId<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>
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
        ? getGetServicesServiceIdDeploysDeployIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId'].deploys[':deployId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServicesServiceIdDeploysDeployIdCancelKey() {
  return ['services', '/services/:serviceId/deploys/:deployId/cancel', 'POST'] as const
}

export function usePostServicesServiceIdDeploysDeployIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.services)[':serviceId']['deploys'][':deployId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdDeploysDeployIdCancelKey()
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
            (typeof client.services)[':serviceId']['deploys'][':deployId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.services[':serviceId'].deploys[':deployId'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostServicesServiceIdRollbackKey() {
  return ['services', '/services/:serviceId/rollback', 'POST'] as const
}

export function usePostServicesServiceIdRollback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['rollback']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['rollback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdRollbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['rollback']['$post']> },
      ) => parseResponse(client.services[':serviceId'].rollback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdEnvVarsKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$get']>,
) {
  return ['services', '/services/:serviceId/env-vars', args] as const
}

export function useGetServicesServiceIdEnvVars<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdEnvVarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId']['env-vars'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdEnvVars<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdEnvVarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId']['env-vars'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutServicesServiceIdEnvVarsKey() {
  return ['services', '/services/:serviceId/env-vars', 'PUT'] as const
}

export function usePutServicesServiceIdEnvVars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['env-vars']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesServiceIdEnvVarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$put']> },
      ) => parseResponse(client.services[':serviceId']['env-vars'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdEnvVarsEnvVarKeyKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>,
) {
  return ['services', '/services/:serviceId/env-vars/:envVarKey', args] as const
}

export function useGetServicesServiceIdEnvVarsEnvVarKey<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
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
        ? getGetServicesServiceIdEnvVarsEnvVarKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.services[':serviceId']['env-vars'][':envVarKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdEnvVarsEnvVarKey<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
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
        ? getGetServicesServiceIdEnvVarsEnvVarKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.services[':serviceId']['env-vars'][':envVarKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutServicesServiceIdEnvVarsEnvVarKeyKey() {
  return ['services', '/services/:serviceId/env-vars/:envVarKey', 'PUT'] as const
}

export function usePutServicesServiceIdEnvVarsEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesServiceIdEnvVarsEnvVarKeyKey()
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
            (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.services[':serviceId']['env-vars'][':envVarKey'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesServiceIdEnvVarsEnvVarKeyKey() {
  return ['services', '/services/:serviceId/env-vars/:envVarKey', 'DELETE'] as const
}

export function useDeleteServicesServiceIdEnvVarsEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesServiceIdEnvVarsEnvVarKeyKey()
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
            (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.services[':serviceId']['env-vars'][':envVarKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdSecretFilesKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$get']>,
) {
  return ['services', '/services/:serviceId/secret-files', args] as const
}

export function useGetServicesServiceIdSecretFiles<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdSecretFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId']['secret-files'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdSecretFiles<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdSecretFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId']['secret-files'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutServicesServiceIdSecretFilesKey() {
  return ['services', '/services/:serviceId/secret-files', 'PUT'] as const
}

export function usePutServicesServiceIdSecretFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['secret-files']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesServiceIdSecretFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$put']>
        },
      ) => parseResponse(client.services[':serviceId']['secret-files'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdSecretFilesEnvVarKeyKey(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
  >,
) {
  return ['services', '/services/:serviceId/secret-files/:envVarKey', args] as const
}

export function useGetServicesServiceIdSecretFilesEnvVarKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdSecretFilesEnvVarKeyKey(args)
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
                (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
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
          client.services[':serviceId']['secret-files'][':envVarKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdSecretFilesEnvVarKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdSecretFilesEnvVarKeyKey(args)
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
                (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
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
          client.services[':serviceId']['secret-files'][':envVarKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutServicesServiceIdSecretFilesEnvVarKeyKey() {
  return ['services', '/services/:serviceId/secret-files/:envVarKey', 'PUT'] as const
}

export function usePutServicesServiceIdSecretFilesEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesServiceIdSecretFilesEnvVarKeyKey()
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
            (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.services[':serviceId']['secret-files'][':envVarKey'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesServiceIdSecretFilesEnvVarKeyKey() {
  return ['services', '/services/:serviceId/secret-files/:envVarKey', 'DELETE'] as const
}

export function useDeleteServicesServiceIdSecretFilesEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesServiceIdSecretFilesEnvVarKeyKey()
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
            (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.services[':serviceId']['secret-files'][':envVarKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdEventsKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['events']['$get']>,
) {
  return ['services', '/services/:serviceId/events', args] as const
}

export function useGetServicesServiceIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServicesServiceIdHeadersKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['headers']['$get']>,
) {
  return ['services', '/services/:serviceId/headers', args] as const
}

export function useGetServicesServiceIdHeaders<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['headers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdHeadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].headers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdHeaders<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['headers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdHeadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].headers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutServicesServiceIdHeadersKey() {
  return ['services', '/services/:serviceId/headers', 'PUT'] as const
}

export function usePutServicesServiceIdHeaders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['headers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesServiceIdHeadersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['headers']['$put']> },
      ) => parseResponse(client.services[':serviceId'].headers.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServicesServiceIdHeadersKey() {
  return ['services', '/services/:serviceId/headers', 'POST'] as const
}

export function usePostServicesServiceIdHeaders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['headers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['headers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdHeadersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['headers']['$post']> },
      ) => parseResponse(client.services[':serviceId'].headers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesServiceIdHeadersHeaderIdKey() {
  return ['services', '/services/:serviceId/headers/:headerId', 'DELETE'] as const
}

export function useDeleteServicesServiceIdHeadersHeaderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['headers'][':headerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesServiceIdHeadersHeaderIdKey()
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
            (typeof client.services)[':serviceId']['headers'][':headerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.services[':serviceId'].headers[':headerId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdRoutesKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['routes']['$get']>,
) {
  return ['services', '/services/:serviceId/routes', args] as const
}

export function useGetServicesServiceIdRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutServicesServiceIdRoutesKey() {
  return ['services', '/services/:serviceId/routes', 'PUT'] as const
}

export function usePutServicesServiceIdRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['routes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesServiceIdRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['routes']['$put']> },
      ) => parseResponse(client.services[':serviceId'].routes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServicesServiceIdRoutesKey() {
  return ['services', '/services/:serviceId/routes', 'POST'] as const
}

export function usePostServicesServiceIdRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['routes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['routes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['routes']['$post']> },
      ) => parseResponse(client.services[':serviceId'].routes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesServiceIdRoutesRouteIdKey() {
  return ['services', '/services/:serviceId/routes/:routeId', 'DELETE'] as const
}

export function useDeleteServicesServiceIdRoutesRouteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['routes'][':routeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesServiceIdRoutesRouteIdKey()
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
            (typeof client.services)[':serviceId']['routes'][':routeId']['$delete']
          >
        },
      ) =>
        parseResponse(client.services[':serviceId'].routes[':routeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchServicesServiceIdRoutesRouteIdKey() {
  return ['services', '/services/:serviceId/routes/:routeId', 'PATCH'] as const
}

export function usePatchServicesServiceIdRoutesRouteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['routes'][':routeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchServicesServiceIdRoutesRouteIdKey()
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
            (typeof client.services)[':serviceId']['routes'][':routeId']['$patch']
          >
        },
      ) =>
        parseResponse(client.services[':serviceId'].routes[':routeId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdCustomDomainsKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$get']>,
) {
  return ['services', '/services/:serviceId/custom-domains', args] as const
}

export function useGetServicesServiceIdCustomDomains<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdCustomDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId']['custom-domains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdCustomDomains<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdCustomDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId']['custom-domains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServicesServiceIdCustomDomainsKey() {
  return ['services', '/services/:serviceId/custom-domains', 'POST'] as const
}

export function usePostServicesServiceIdCustomDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['custom-domains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdCustomDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$post']>
        },
      ) => parseResponse(client.services[':serviceId']['custom-domains'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdCustomDomainsCustomDomainNameOrIDKey(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
  >,
) {
  return ['services', '/services/:serviceId/custom-domains/:customDomainNameOrID', args] as const
}

export function useGetServicesServiceIdCustomDomainsCustomDomainNameOrID<TError = unknown>(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdCustomDomainsCustomDomainNameOrIDKey(args)
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
                (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
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
          client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdCustomDomainsCustomDomainNameOrID<TError = unknown>(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdCustomDomainsCustomDomainNameOrIDKey(args)
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
                (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
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
          client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteServicesServiceIdCustomDomainsCustomDomainNameOrIDKey() {
  return [
    'services',
    '/services/:serviceId/custom-domains/:customDomainNameOrID',
    'DELETE',
  ] as const
}

export function useDeleteServicesServiceIdCustomDomainsCustomDomainNameOrID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesServiceIdCustomDomainsCustomDomainNameOrIDKey()
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
            (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyKey() {
  return [
    'services',
    '/services/:serviceId/custom-domains/:customDomainNameOrID/verify',
    'POST',
  ] as const
}

export function usePostServicesServiceIdCustomDomainsCustomDomainNameOrIDVerify<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyKey()
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
            (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].verify.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostServicesServiceIdSuspendKey() {
  return ['services', '/services/:serviceId/suspend', 'POST'] as const
}

export function usePostServicesServiceIdSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['suspend']['$post']> },
      ) => parseResponse(client.services[':serviceId'].suspend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServicesServiceIdResumeKey() {
  return ['services', '/services/:serviceId/resume', 'POST'] as const
}

export function usePostServicesServiceIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['resume']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['resume']['$post']> },
      ) => parseResponse(client.services[':serviceId'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServicesServiceIdRestartKey() {
  return ['services', '/services/:serviceId/restart', 'POST'] as const
}

export function usePostServicesServiceIdRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['restart']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['restart']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdRestartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['restart']['$post']> },
      ) => parseResponse(client.services[':serviceId'].restart.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServicesServiceIdScaleKey() {
  return ['services', '/services/:serviceId/scale', 'POST'] as const
}

export function usePostServicesServiceIdScale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['scale']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['scale']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdScaleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['scale']['$post']> },
      ) => parseResponse(client.services[':serviceId'].scale.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutServicesServiceIdAutoscalingKey() {
  return ['services', '/services/:serviceId/autoscaling', 'PUT'] as const
}

export function usePutServicesServiceIdAutoscaling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['autoscaling']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServicesServiceIdAutoscalingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$put']> },
      ) => parseResponse(client.services[':serviceId'].autoscaling.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteServicesServiceIdAutoscalingKey() {
  return ['services', '/services/:serviceId/autoscaling', 'DELETE'] as const
}

export function useDeleteServicesServiceIdAutoscaling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['autoscaling']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServicesServiceIdAutoscalingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$delete']>
        },
      ) => parseResponse(client.services[':serviceId'].autoscaling.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServicesServiceIdPreviewKey() {
  return ['services', '/services/:serviceId/preview', 'POST'] as const
}

export function usePostServicesServiceIdPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['preview']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['preview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.services)[':serviceId']['preview']['$post']> },
      ) => parseResponse(client.services[':serviceId'].preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdJobsKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs']['$get']>,
) {
  return ['services', '/services/:serviceId/jobs', args] as const
}

export function useGetServicesServiceIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServicesServiceIdJobsKey() {
  return ['services', '/services/:serviceId/jobs', 'POST'] as const
}

export function usePostServicesServiceIdJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.services)[':serviceId']['jobs']['$post']> },
      ) => parseResponse(client.services[':serviceId'].jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdJobsJobIdKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>,
) {
  return ['services', '/services/:serviceId/jobs/:jobId', args] as const
}

export function useGetServicesServiceIdJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServicesServiceIdJobsJobIdCancelKey() {
  return ['services', '/services/:serviceId/jobs/:jobId/cancel', 'POST'] as const
}

export function usePostServicesServiceIdJobsJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServicesServiceIdJobsJobIdCancelKey()
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
            (typeof client.services)[':serviceId']['jobs'][':jobId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.services[':serviceId'].jobs[':jobId'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesServiceIdInstancesKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['instances']['$get']>,
) {
  return ['services', '/services/:serviceId/instances', args] as const
}

export function useGetServicesServiceIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':serviceId'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServicesServiceIdOutboundIpsKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>,
) {
  return ['services', '/services/:serviceId/outbound-ips', args] as const
}

export function useGetServicesServiceIdOutboundIps<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdOutboundIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId']['outbound-ips'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesServiceIdOutboundIps<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServicesServiceIdOutboundIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.services[':serviceId']['outbound-ips'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCronJobsCronJobIdRunsKey() {
  return ['cron-jobs', '/cron-jobs/:cronJobId/runs', 'POST'] as const
}

export function usePostCronJobsCronJobIdRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCronJobsCronJobIdRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$post']> },
      ) => parseResponse(client['cron-jobs'][':cronJobId'].runs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCronJobsCronJobIdRunsKey() {
  return ['cron-jobs', '/cron-jobs/:cronJobId/runs', 'DELETE'] as const
}

export function useDeleteCronJobsCronJobIdRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCronJobsCronJobIdRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$delete']> },
      ) => parseResponse(client['cron-jobs'][':cronJobId'].runs.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsEventIdKey(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
) {
  return ['events', '/events/:eventId', args] as const
}

export function useGetEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
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

export function getGetLogsSubscribeKey(args: InferRequestType<typeof client.logs.subscribe.$get>) {
  return ['logs', '/logs/subscribe', args] as const
}

export function useGetLogsSubscribe<TError = unknown>(
  args: InferRequestType<typeof client.logs.subscribe.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsSubscribeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.subscribe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsSubscribe<TError = unknown>(
  args: InferRequestType<typeof client.logs.subscribe.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsSubscribeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.subscribe.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.subscribe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsValuesKey(args: InferRequestType<typeof client.logs.values.$get>) {
  return ['logs', '/logs/values', args] as const
}

export function useGetLogsValues<TError = unknown>(
  args: InferRequestType<typeof client.logs.values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsValuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsValues<TError = unknown>(
  args: InferRequestType<typeof client.logs.values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsValuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.values.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsStreamsOwnerOwnerIdKey(
  args: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$get']>,
) {
  return ['logs', '/logs/streams/owner/:ownerId', args] as const
}

export function useGetLogsStreamsOwnerOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLogsStreamsOwnerOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.streams.owner[':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsStreamsOwnerOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLogsStreamsOwnerOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.streams.owner[':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLogsStreamsOwnerOwnerIdKey() {
  return ['logs', '/logs/streams/owner/:ownerId', 'PUT'] as const
}

export function usePutLogsStreamsOwnerOwnerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLogsStreamsOwnerOwnerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$put']> },
      ) => parseResponse(client.logs.streams.owner[':ownerId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLogsStreamsOwnerOwnerIdKey() {
  return ['logs', '/logs/streams/owner/:ownerId', 'DELETE'] as const
}

export function useDeleteLogsStreamsOwnerOwnerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.owner)[':ownerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLogsStreamsOwnerOwnerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$delete']> },
      ) => parseResponse(client.logs.streams.owner[':ownerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogsStreamsResourceKey(
  args: InferRequestType<typeof client.logs.streams.resource.$get>,
) {
  return ['logs', '/logs/streams/resource', args] as const
}

export function useGetLogsStreamsResource<TError = unknown>(
  args: InferRequestType<typeof client.logs.streams.resource.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLogsStreamsResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.streams.resource.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsStreamsResource<TError = unknown>(
  args: InferRequestType<typeof client.logs.streams.resource.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLogsStreamsResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.logs.streams.resource.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.streams.resource.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsStreamsResourceResourceIdKey(
  args: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$get']>,
) {
  return ['logs', '/logs/streams/resource/:resourceId', args] as const
}

export function useGetLogsStreamsResourceResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLogsStreamsResourceResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.logs.streams.resource[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsStreamsResourceResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLogsStreamsResourceResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.logs.streams.resource[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLogsStreamsResourceResourceIdKey() {
  return ['logs', '/logs/streams/resource/:resourceId', 'PUT'] as const
}

export function usePutLogsStreamsResourceResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLogsStreamsResourceResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$put']> },
      ) => parseResponse(client.logs.streams.resource[':resourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLogsStreamsResourceResourceIdKey() {
  return ['logs', '/logs/streams/resource/:resourceId', 'DELETE'] as const
}

export function useDeleteLogsStreamsResourceResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.streams.resource)[':resourceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLogsStreamsResourceResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$delete']>
        },
      ) => parseResponse(client.logs.streams.resource[':resourceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetricsStreamOwnerIdKey(
  args: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$get']>,
) {
  return ['metrics-stream', '/metrics-stream/:ownerId', args] as const
}

export function useGetMetricsStreamOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsStreamOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metrics-stream'][':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsStreamOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsStreamOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metrics-stream'][':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMetricsStreamOwnerIdKey() {
  return ['metrics-stream', '/metrics-stream/:ownerId', 'PUT'] as const
}

export function usePutMetricsStreamOwnerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMetricsStreamOwnerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$put']> },
      ) => parseResponse(client['metrics-stream'][':ownerId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMetricsStreamOwnerIdKey() {
  return ['metrics-stream', '/metrics-stream/:ownerId', 'DELETE'] as const
}

export function useDeleteMetricsStreamOwnerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['metrics-stream'][':ownerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMetricsStreamOwnerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$delete']> },
      ) => parseResponse(client['metrics-stream'][':ownerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetricsCpuKey(args: InferRequestType<typeof client.metrics.cpu.$get>) {
  return ['metrics', '/metrics/cpu', args] as const
}

export function useGetMetricsCpu<TError = unknown>(
  args: InferRequestType<typeof client.metrics.cpu.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsCpuKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.cpu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsCpu<TError = unknown>(
  args: InferRequestType<typeof client.metrics.cpu.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsCpuKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cpu.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.cpu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsCpuLimitKey(
  args: InferRequestType<(typeof client.metrics)['cpu-limit']['$get']>,
) {
  return ['metrics', '/metrics/cpu-limit', args] as const
}

export function useGetMetricsCpuLimit<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['cpu-limit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsCpuLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['cpu-limit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsCpuLimit<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['cpu-limit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsCpuLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-limit']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['cpu-limit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsCpuTargetKey(
  args: InferRequestType<(typeof client.metrics)['cpu-target']['$get']>,
) {
  return ['metrics', '/metrics/cpu-target', args] as const
}

export function useGetMetricsCpuTarget<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['cpu-target']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsCpuTargetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['cpu-target'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsCpuTarget<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['cpu-target']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsCpuTargetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['cpu-target']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['cpu-target'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsMemoryKey(args: InferRequestType<typeof client.metrics.memory.$get>) {
  return ['metrics', '/metrics/memory', args] as const
}

export function useGetMetricsMemory<TError = unknown>(
  args: InferRequestType<typeof client.metrics.memory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsMemoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.memory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsMemory<TError = unknown>(
  args: InferRequestType<typeof client.metrics.memory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsMemoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.memory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.memory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsMemoryLimitKey(
  args: InferRequestType<(typeof client.metrics)['memory-limit']['$get']>,
) {
  return ['metrics', '/metrics/memory-limit', args] as const
}

export function useGetMetricsMemoryLimit<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['memory-limit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsMemoryLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['memory-limit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsMemoryLimit<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['memory-limit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsMemoryLimitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['memory-limit']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['memory-limit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsMemoryTargetKey(
  args: InferRequestType<(typeof client.metrics)['memory-target']['$get']>,
) {
  return ['metrics', '/metrics/memory-target', args] as const
}

export function useGetMetricsMemoryTarget<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['memory-target']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsMemoryTargetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['memory-target'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsMemoryTarget<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['memory-target']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsMemoryTargetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['memory-target']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['memory-target'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsHttpRequestsKey(
  args: InferRequestType<(typeof client.metrics)['http-requests']['$get']>,
) {
  return ['metrics', '/metrics/http-requests', args] as const
}

export function useGetMetricsHttpRequests<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['http-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsHttpRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['http-requests'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsHttpRequests<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['http-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsHttpRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['http-requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['http-requests'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsHttpLatencyKey(
  args: InferRequestType<(typeof client.metrics)['http-latency']['$get']>,
) {
  return ['metrics', '/metrics/http-latency', args] as const
}

export function useGetMetricsHttpLatency<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['http-latency']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsHttpLatencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['http-latency'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsHttpLatency<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['http-latency']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsHttpLatencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['http-latency']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['http-latency'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsBandwidthKey(
  args: InferRequestType<typeof client.metrics.bandwidth.$get>,
) {
  return ['metrics', '/metrics/bandwidth', args] as const
}

export function useGetMetricsBandwidth<TError = unknown>(
  args: InferRequestType<typeof client.metrics.bandwidth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsBandwidthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.bandwidth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsBandwidth<TError = unknown>(
  args: InferRequestType<typeof client.metrics.bandwidth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsBandwidthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.bandwidth.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.bandwidth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsBandwidthSourcesKey(
  args: InferRequestType<(typeof client.metrics)['bandwidth-sources']['$get']>,
) {
  return ['metrics', '/metrics/bandwidth-sources', args] as const
}

export function useGetMetricsBandwidthSources<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['bandwidth-sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsBandwidthSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['bandwidth-sources'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsBandwidthSources<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['bandwidth-sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsBandwidthSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['bandwidth-sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['bandwidth-sources'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsDiskUsageKey(
  args: InferRequestType<(typeof client.metrics)['disk-usage']['$get']>,
) {
  return ['metrics', '/metrics/disk-usage', args] as const
}

export function useGetMetricsDiskUsage<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['disk-usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsDiskUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['disk-usage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsDiskUsage<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['disk-usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsDiskUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.metrics)['disk-usage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['disk-usage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsDiskCapacityKey(
  args: InferRequestType<(typeof client.metrics)['disk-capacity']['$get']>,
) {
  return ['metrics', '/metrics/disk-capacity', args] as const
}

export function useGetMetricsDiskCapacity<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['disk-capacity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsDiskCapacityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['disk-capacity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsDiskCapacity<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['disk-capacity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsDiskCapacityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['disk-capacity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['disk-capacity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsInstanceCountKey(
  args: InferRequestType<(typeof client.metrics)['instance-count']['$get']>,
) {
  return ['metrics', '/metrics/instance-count', args] as const
}

export function useGetMetricsInstanceCount<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['instance-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsInstanceCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['instance-count'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsInstanceCount<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['instance-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsInstanceCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['instance-count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['instance-count'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsActiveConnectionsKey(
  args: InferRequestType<(typeof client.metrics)['active-connections']['$get']>,
) {
  return ['metrics', '/metrics/active-connections', args] as const
}

export function useGetMetricsActiveConnections<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['active-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsActiveConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['active-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsActiveConnections<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['active-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsActiveConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['active-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['active-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsReplicationLagKey(
  args: InferRequestType<(typeof client.metrics)['replication-lag']['$get']>,
) {
  return ['metrics', '/metrics/replication-lag', args] as const
}

export function useGetMetricsReplicationLag<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['replication-lag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsReplicationLagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['replication-lag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsReplicationLag<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['replication-lag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsReplicationLagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['replication-lag']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['replication-lag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsFiltersApplicationKey(
  args: InferRequestType<typeof client.metrics.filters.application.$get>,
) {
  return ['metrics', '/metrics/filters/application', args] as const
}

export function useGetMetricsFiltersApplication<TError = unknown>(
  args: InferRequestType<typeof client.metrics.filters.application.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.application.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsFiltersApplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.application.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.filters.application.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsFiltersApplication<TError = unknown>(
  args: InferRequestType<typeof client.metrics.filters.application.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.application.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsFiltersApplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.application.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.filters.application.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsFiltersHttpKey(
  args: InferRequestType<typeof client.metrics.filters.http.$get>,
) {
  return ['metrics', '/metrics/filters/http', args] as const
}

export function useGetMetricsFiltersHttp<TError = unknown>(
  args: InferRequestType<typeof client.metrics.filters.http.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsFiltersHttpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.filters.http.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsFiltersHttp<TError = unknown>(
  args: InferRequestType<typeof client.metrics.filters.http.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsFiltersHttpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.http.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.filters.http.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsFiltersPathKey(
  args: InferRequestType<typeof client.metrics.filters.path.$get>,
) {
  return ['metrics', '/metrics/filters/path', args] as const
}

export function useGetMetricsFiltersPath<TError = unknown>(
  args: InferRequestType<typeof client.metrics.filters.path.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsFiltersPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.filters.path.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsFiltersPath<TError = unknown>(
  args: InferRequestType<typeof client.metrics.filters.path.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsFiltersPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metrics.filters.path.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.filters.path.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsTaskRunsQueuedKey(
  args: InferRequestType<(typeof client.metrics)['task-runs-queued']['$get']>,
) {
  return ['metrics', '/metrics/task-runs-queued', args] as const
}

export function useGetMetricsTaskRunsQueued<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['task-runs-queued']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsTaskRunsQueuedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['task-runs-queued'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsTaskRunsQueued<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['task-runs-queued']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsTaskRunsQueuedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['task-runs-queued']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['task-runs-queued'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsTaskRunsCompletedKey(
  args: InferRequestType<(typeof client.metrics)['task-runs-completed']['$get']>,
) {
  return ['metrics', '/metrics/task-runs-completed', args] as const
}

export function useGetMetricsTaskRunsCompleted<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['task-runs-completed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsTaskRunsCompletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['task-runs-completed'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsTaskRunsCompleted<TError = unknown>(
  args: InferRequestType<(typeof client.metrics)['task-runs-completed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricsTaskRunsCompletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metrics)['task-runs-completed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics['task-runs-completed'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKeyValueKey(args: InferRequestType<(typeof client)['key-value']['$get']>) {
  return ['key-value', '/key-value', args] as const
}

export function useGetKeyValue<TError = unknown>(
  args: InferRequestType<(typeof client)['key-value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeyValueKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['key-value'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeyValue<TError = unknown>(
  args: InferRequestType<(typeof client)['key-value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeyValueKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['key-value'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKeyValueKey() {
  return ['key-value', '/key-value', 'POST'] as const
}

export function usePostKeyValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-value']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['key-value']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeyValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['key-value']['$post']> }) =>
        parseResponse(client['key-value'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeyValueRedisIdKey(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['$get']>,
) {
  return ['key-value', '/key-value/:redisId', args] as const
}

export function useGetKeyValueRedisId<TError = unknown>(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKeyValueRedisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['key-value'][':redisId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeyValueRedisId<TError = unknown>(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKeyValueRedisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['key-value'][':redisId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteKeyValueRedisIdKey() {
  return ['key-value', '/key-value/:redisId', 'DELETE'] as const
}

export function useDeleteKeyValueRedisId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['key-value'][':redisId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKeyValueRedisIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['key-value'][':redisId']['$delete']> },
      ) => parseResponse(client['key-value'][':redisId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchKeyValueRedisIdKey() {
  return ['key-value', '/key-value/:redisId', 'PATCH'] as const
}

export function usePatchKeyValueRedisId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['key-value'][':redisId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['key-value'][':redisId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchKeyValueRedisIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['key-value'][':redisId']['$patch']> },
      ) => parseResponse(client['key-value'][':redisId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeyValueRedisIdConnectionInfoKey(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>,
) {
  return ['key-value', '/key-value/:redisId/connection-info', args] as const
}

export function useGetKeyValueRedisIdConnectionInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKeyValueRedisIdConnectionInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['key-value'][':redisId']['connection-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeyValueRedisIdConnectionInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKeyValueRedisIdConnectionInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['key-value'][':redisId']['connection-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKeyValueRedisIdSuspendKey() {
  return ['key-value', '/key-value/:redisId/suspend', 'POST'] as const
}

export function usePostKeyValueRedisIdSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['key-value'][':redisId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['key-value'][':redisId']['suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeyValueRedisIdSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['key-value'][':redisId']['suspend']['$post']> },
      ) => parseResponse(client['key-value'][':redisId'].suspend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKeyValueRedisIdResumeKey() {
  return ['key-value', '/key-value/:redisId/resume', 'POST'] as const
}

export function usePostKeyValueRedisIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['key-value'][':redisId']['resume']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['key-value'][':redisId']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeyValueRedisIdResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['key-value'][':redisId']['resume']['$post']> },
      ) => parseResponse(client['key-value'][':redisId'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRedisKey(args: InferRequestType<typeof client.redis.$get>) {
  return ['redis', '/redis', args] as const
}

export function useGetRedis<TError = unknown>(
  args: InferRequestType<typeof client.redis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRedisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.redis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRedis<TError = unknown>(
  args: InferRequestType<typeof client.redis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRedisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.redis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRedisKey() {
  return ['redis', '/redis', 'POST'] as const
}

export function usePostRedis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redis.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.redis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRedisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.redis.$post> }) =>
        parseResponse(client.redis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRedisRedisIdKey(
  args: InferRequestType<(typeof client.redis)[':redisId']['$get']>,
) {
  return ['redis', '/redis/:redisId', args] as const
}

export function useGetRedisRedisId<TError = unknown>(
  args: InferRequestType<(typeof client.redis)[':redisId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRedisRedisIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.redis[':redisId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRedisRedisId<TError = unknown>(
  args: InferRequestType<(typeof client.redis)[':redisId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRedisRedisIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.redis[':redisId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRedisRedisIdKey() {
  return ['redis', '/redis/:redisId', 'DELETE'] as const
}

export function useDeleteRedisRedisId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.redis)[':redisId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRedisRedisIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.redis)[':redisId']['$delete']> },
      ) => parseResponse(client.redis[':redisId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRedisRedisIdKey() {
  return ['redis', '/redis/:redisId', 'PATCH'] as const
}

export function usePatchRedisRedisId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.redis)[':redisId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.redis)[':redisId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRedisRedisIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.redis)[':redisId']['$patch']> },
      ) => parseResponse(client.redis[':redisId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRedisRedisIdConnectionInfoKey(
  args: InferRequestType<(typeof client.redis)[':redisId']['connection-info']['$get']>,
) {
  return ['redis', '/redis/:redisId/connection-info', args] as const
}

export function useGetRedisRedisIdConnectionInfo<TError = unknown>(
  args: InferRequestType<(typeof client.redis)[':redisId']['connection-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRedisRedisIdConnectionInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.redis[':redisId']['connection-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRedisRedisIdConnectionInfo<TError = unknown>(
  args: InferRequestType<(typeof client.redis)[':redisId']['connection-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRedisRedisIdConnectionInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.redis)[':redisId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.redis[':redisId']['connection-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRedisRedisIdSuspendKey() {
  return ['redis', '/redis/:redisId/suspend', 'POST'] as const
}

export function usePostRedisRedisIdSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.redis)[':redisId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.redis)[':redisId']['suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRedisRedisIdSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.redis)[':redisId']['suspend']['$post']> },
      ) => parseResponse(client.redis[':redisId'].suspend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRedisRedisIdResumeKey() {
  return ['redis', '/redis/:redisId/resume', 'POST'] as const
}

export function usePostRedisRedisIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.redis)[':redisId']['resume']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.redis)[':redisId']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRedisRedisIdResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.redis)[':redisId']['resume']['$post']> },
      ) => parseResponse(client.redis[':redisId'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostgresKey(args: InferRequestType<typeof client.postgres.$get>) {
  return ['postgres', '/postgres', args] as const
}

export function useGetPostgres<TError = unknown>(
  args: InferRequestType<typeof client.postgres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostgresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.postgres.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPostgres<TError = unknown>(
  args: InferRequestType<typeof client.postgres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostgresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.postgres.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPostgresKey() {
  return ['postgres', '/postgres', 'POST'] as const
}

export function usePostPostgres<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.postgres.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.postgres.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostgresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.postgres.$post> }) =>
        parseResponse(client.postgres.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostgresPostgresIdKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId', args] as const
}

export function useGetPostgresPostgresId<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postgres[':postgresId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostgresPostgresId<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postgres[':postgresId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePostgresPostgresIdKey() {
  return ['postgres', '/postgres/:postgresId', 'DELETE'] as const
}

export function useDeletePostgresPostgresId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.postgres)[':postgresId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePostgresPostgresIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.postgres)[':postgresId']['$delete']> },
      ) => parseResponse(client.postgres[':postgresId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPostgresPostgresIdKey() {
  return ['postgres', '/postgres/:postgresId', 'PATCH'] as const
}

export function usePatchPostgresPostgresId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.postgres)[':postgresId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.postgres)[':postgresId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPostgresPostgresIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.postgres)[':postgresId']['$patch']> },
      ) => parseResponse(client.postgres[':postgresId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostgresPostgresIdConnectionInfoKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/connection-info', args] as const
}

export function useGetPostgresPostgresIdConnectionInfo<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdConnectionInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.postgres[':postgresId']['connection-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostgresPostgresIdConnectionInfo<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdConnectionInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.postgres[':postgresId']['connection-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostgresPostgresIdRecoveryKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/recovery', args] as const
}

export function useGetPostgresPostgresIdRecovery<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdRecoveryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postgres[':postgresId'].recovery.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostgresPostgresIdRecovery<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdRecoveryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postgres[':postgresId'].recovery.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPostgresPostgresIdRecoveryKey() {
  return ['postgres', '/postgres/:postgresId/recovery', 'POST'] as const
}

export function usePostPostgresPostgresIdRecovery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['recovery']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostgresPostgresIdRecoveryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$post']> },
      ) => parseResponse(client.postgres[':postgresId'].recovery.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostgresPostgresIdSuspendKey() {
  return ['postgres', '/postgres/:postgresId/suspend', 'POST'] as const
}

export function usePostPostgresPostgresIdSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.postgres)[':postgresId']['suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostgresPostgresIdSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.postgres)[':postgresId']['suspend']['$post']> },
      ) => parseResponse(client.postgres[':postgresId'].suspend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostgresPostgresIdResumeKey() {
  return ['postgres', '/postgres/:postgresId/resume', 'POST'] as const
}

export function usePostPostgresPostgresIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['resume']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.postgres)[':postgresId']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostgresPostgresIdResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.postgres)[':postgresId']['resume']['$post']> },
      ) => parseResponse(client.postgres[':postgresId'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostgresPostgresIdRestartKey() {
  return ['postgres', '/postgres/:postgresId/restart', 'POST'] as const
}

export function usePostPostgresPostgresIdRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['restart']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.postgres)[':postgresId']['restart']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostgresPostgresIdRestartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.postgres)[':postgresId']['restart']['$post']> },
      ) => parseResponse(client.postgres[':postgresId'].restart.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostgresPostgresIdFailoverKey() {
  return ['postgres', '/postgres/:postgresId/failover', 'POST'] as const
}

export function usePostPostgresPostgresIdFailover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['failover']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.postgres)[':postgresId']['failover']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostgresPostgresIdFailoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.postgres)[':postgresId']['failover']['$post']> },
      ) => parseResponse(client.postgres[':postgresId'].failover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostgresPostgresIdExportKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['export']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/export', args] as const
}

export function useGetPostgresPostgresIdExport<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postgres[':postgresId'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostgresPostgresIdExport<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postgres[':postgresId'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPostgresPostgresIdExportKey() {
  return ['postgres', '/postgres/:postgresId/export', 'POST'] as const
}

export function usePostPostgresPostgresIdExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['export']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.postgres)[':postgresId']['export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostgresPostgresIdExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.postgres)[':postgresId']['export']['$post']> },
      ) => parseResponse(client.postgres[':postgresId'].export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostgresPostgresIdCredentialsKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/credentials', args] as const
}

export function useGetPostgresPostgresIdCredentials<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.postgres[':postgresId'].credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostgresPostgresIdCredentials<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.postgres[':postgresId'].credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPostgresPostgresIdCredentialsKey() {
  return ['postgres', '/postgres/:postgresId/credentials', 'POST'] as const
}

export function usePostPostgresPostgresIdCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.postgres)[':postgresId']['credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostgresPostgresIdCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$post']>
        },
      ) => parseResponse(client.postgres[':postgresId'].credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePostgresPostgresIdCredentialsUsernameKey() {
  return ['postgres', '/postgres/:postgresId/credentials/:username', 'DELETE'] as const
}

export function useDeletePostgresPostgresIdCredentialsUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.postgres)[':postgresId']['credentials'][':username']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePostgresPostgresIdCredentialsUsernameKey()
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
            (typeof client.postgres)[':postgresId']['credentials'][':username']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.postgres[':postgresId'].credentials[':username'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPostgresPostgresIdQueryProcessesKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/query/processes', args] as const
}

export function useGetPostgresPostgresIdQueryProcesses<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>
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
        ? getGetPostgresPostgresIdQueryProcessesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.postgres[':postgresId'].query.processes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostgresPostgresIdQueryProcesses<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>
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
        ? getGetPostgresPostgresIdQueryProcessesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.postgres[':postgresId'].query.processes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostgresPostgresIdQueryTopQueriesKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/query/top-queries', args] as const
}

export function useGetPostgresPostgresIdQueryTopQueries<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>
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
        ? getGetPostgresPostgresIdQueryTopQueriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.postgres[':postgresId'].query['top-queries'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostgresPostgresIdQueryTopQueries<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>
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
        ? getGetPostgresPostgresIdQueryTopQueriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.postgres[':postgresId'].query['top-queries'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPostgresPostgresIdQuerySizesKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/query/sizes', args] as const
}

export function useGetPostgresPostgresIdQuerySizes<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdQuerySizesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.postgres[':postgresId'].query.sizes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostgresPostgresIdQuerySizes<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostgresPostgresIdQuerySizesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.postgres[':postgresId'].query.sizes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostgresPostgresIdQueryTableScansKey(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>,
) {
  return ['postgres', '/postgres/:postgresId/query/table-scans', args] as const
}

export function useGetPostgresPostgresIdQueryTableScans<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>
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
        ? getGetPostgresPostgresIdQueryTableScansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.postgres[':postgresId'].query['table-scans'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostgresPostgresIdQueryTableScans<TError = unknown>(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>
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
        ? getGetPostgresPostgresIdQueryTableScansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.postgres[':postgresId'].query['table-scans'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsKey(args: InferRequestType<typeof client.projects.$get>) {
  return ['projects', '/projects', args] as const
}

export function useGetProjects<TError = unknown>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.projects.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProjects<TError = unknown>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.projects.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostProjectsKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function usePostProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.projects.$post> }) =>
        parseResponse(client.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
) {
  return ['projects', '/projects/:projectId', args] as const
}

export function useGetProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdKey() {
  return ['projects', '/projects/:projectId', 'DELETE'] as const
}

export function useDeleteProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':projectId']['$delete']> },
      ) => parseResponse(client.projects[':projectId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchProjectsProjectIdKey() {
  return ['projects', '/projects/:projectId', 'PATCH'] as const
}

export function usePatchProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':projectId']['$patch']> },
      ) => parseResponse(client.projects[':projectId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnvironmentsKey(args: InferRequestType<typeof client.environments.$get>) {
  return ['environments', '/environments', args] as const
}

export function useGetEnvironments<TError = unknown>(
  args: InferRequestType<typeof client.environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvironmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironments<TError = unknown>(
  args: InferRequestType<typeof client.environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvironmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnvironmentsKey() {
  return ['environments', '/environments', 'POST'] as const
}

export function usePostEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.environments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.environments.$post> }) =>
        parseResponse(client.environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnvironmentsEnvironmentIdKey(
  args: InferRequestType<(typeof client.environments)[':environmentId']['$get']>,
) {
  return ['environments', '/environments/:environmentId', args] as const
}

export function useGetEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.environments)[':environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvironmentsEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments[':environmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.environments)[':environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvironmentsEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments[':environmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEnvironmentsEnvironmentIdKey() {
  return ['environments', '/environments/:environmentId', 'DELETE'] as const
}

export function useDeleteEnvironmentsEnvironmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.environments)[':environmentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnvironmentsEnvironmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.environments)[':environmentId']['$delete']> },
      ) => parseResponse(client.environments[':environmentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEnvironmentsEnvironmentIdKey() {
  return ['environments', '/environments/:environmentId', 'PATCH'] as const
}

export function usePatchEnvironmentsEnvironmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environmentId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.environments)[':environmentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEnvironmentsEnvironmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.environments)[':environmentId']['$patch']> },
      ) => parseResponse(client.environments[':environmentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEnvironmentsEnvironmentIdResourcesKey() {
  return ['environments', '/environments/:environmentId/resources', 'POST'] as const
}

export function usePostEnvironmentsEnvironmentIdResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environmentId']['resources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.environments)[':environmentId']['resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnvironmentsEnvironmentIdResourcesKey()
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
            (typeof client.environments)[':environmentId']['resources']['$post']
          >
        },
      ) => parseResponse(client.environments[':environmentId'].resources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnvironmentsEnvironmentIdResourcesKey() {
  return ['environments', '/environments/:environmentId/resources', 'DELETE'] as const
}

export function useDeleteEnvironmentsEnvironmentIdResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.environments)[':environmentId']['resources']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnvironmentsEnvironmentIdResourcesKey()
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
            (typeof client.environments)[':environmentId']['resources']['$delete']
          >
        },
      ) =>
        parseResponse(client.environments[':environmentId'].resources.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnvGroupsKey(args: InferRequestType<(typeof client)['env-groups']['$get']>) {
  return ['env-groups', '/env-groups', args] as const
}

export function useGetEnvGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['env-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['env-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['env-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['env-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnvGroupsKey() {
  return ['env-groups', '/env-groups', 'POST'] as const
}

export function usePostEnvGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['env-groups']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['env-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnvGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['env-groups']['$post']> }) =>
        parseResponse(client['env-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnvGroupsEnvGroupIdKey(
  args: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$get']>,
) {
  return ['env-groups', '/env-groups/:envGroupId', args] as const
}

export function useGetEnvGroupsEnvGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvGroupsEnvGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['env-groups'][':envGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvGroupsEnvGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvGroupsEnvGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['env-groups'][':envGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEnvGroupsEnvGroupIdKey() {
  return ['env-groups', '/env-groups/:envGroupId', 'DELETE'] as const
}

export function useDeleteEnvGroupsEnvGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['env-groups'][':envGroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnvGroupsEnvGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$delete']> },
      ) => parseResponse(client['env-groups'][':envGroupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEnvGroupsEnvGroupIdKey() {
  return ['env-groups', '/env-groups/:envGroupId', 'PATCH'] as const
}

export function usePatchEnvGroupsEnvGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['env-groups'][':envGroupId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['env-groups'][':envGroupId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEnvGroupsEnvGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$patch']> },
      ) => parseResponse(client['env-groups'][':envGroupId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEnvGroupsEnvGroupIdServicesServiceIdKey() {
  return ['env-groups', '/env-groups/:envGroupId/services/:serviceId', 'POST'] as const
}

export function usePostEnvGroupsEnvGroupIdServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnvGroupsEnvGroupIdServicesServiceIdKey()
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
            (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['env-groups'][':envGroupId'].services[':serviceId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnvGroupsEnvGroupIdServicesServiceIdKey() {
  return ['env-groups', '/env-groups/:envGroupId/services/:serviceId', 'DELETE'] as const
}

export function useDeleteEnvGroupsEnvGroupIdServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnvGroupsEnvGroupIdServicesServiceIdKey()
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
            (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['env-groups'][':envGroupId'].services[':serviceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEnvGroupsEnvGroupIdEnvVarsEnvVarKeyKey(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
  >,
) {
  return ['env-groups', '/env-groups/:envGroupId/env-vars/:envVarKey', args] as const
}

export function useGetEnvGroupsEnvGroupIdEnvVarsEnvVarKey<TError = unknown>(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvGroupsEnvGroupIdEnvVarsEnvVarKeyKey(args)
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
                (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
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
          client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvGroupsEnvGroupIdEnvVarsEnvVarKey<TError = unknown>(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvGroupsEnvGroupIdEnvVarsEnvVarKeyKey(args)
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
                (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
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
          client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEnvGroupsEnvGroupIdEnvVarsEnvVarKeyKey() {
  return ['env-groups', '/env-groups/:envGroupId/env-vars/:envVarKey', 'PUT'] as const
}

export function usePutEnvGroupsEnvGroupIdEnvVarsEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnvGroupsEnvGroupIdEnvVarsEnvVarKeyKey()
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
            (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyKey() {
  return ['env-groups', '/env-groups/:envGroupId/env-vars/:envVarKey', 'DELETE'] as const
}

export function useDeleteEnvGroupsEnvGroupIdEnvVarsEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyKey()
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
            (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEnvGroupsEnvGroupIdSecretFilesEnvVarKeyKey(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
  >,
) {
  return ['env-groups', '/env-groups/:envGroupId/secret-files/:envVarKey', args] as const
}

export function useGetEnvGroupsEnvGroupIdSecretFilesEnvVarKey<TError = unknown>(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvGroupsEnvGroupIdSecretFilesEnvVarKeyKey(args)
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
                (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
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
          client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvGroupsEnvGroupIdSecretFilesEnvVarKey<TError = unknown>(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnvGroupsEnvGroupIdSecretFilesEnvVarKeyKey(args)
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
                (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
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
          client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEnvGroupsEnvGroupIdSecretFilesEnvVarKeyKey() {
  return ['env-groups', '/env-groups/:envGroupId/secret-files/:envVarKey', 'PUT'] as const
}

export function usePutEnvGroupsEnvGroupIdSecretFilesEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnvGroupsEnvGroupIdSecretFilesEnvVarKeyKey()
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
            (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyKey() {
  return ['env-groups', '/env-groups/:envGroupId/secret-files/:envVarKey', 'DELETE'] as const
}

export function useDeleteEnvGroupsEnvGroupIdSecretFilesEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyKey()
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
            (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMaintenanceKey(args: InferRequestType<typeof client.maintenance.$get>) {
  return ['maintenance', '/maintenance', args] as const
}

export function useGetMaintenance<TError = unknown>(
  args: InferRequestType<typeof client.maintenance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaintenanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maintenance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMaintenance<TError = unknown>(
  args: InferRequestType<typeof client.maintenance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaintenanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maintenance.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maintenance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMaintenanceMaintenanceRunIDKey(
  args: InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$get']>,
) {
  return ['maintenance', '/maintenance/:maintenanceRunID', args] as const
}

export function useGetMaintenanceMaintenanceRunID<TError = unknown>(
  args: InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMaintenanceMaintenanceRunIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maintenance[':maintenanceRunID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMaintenanceMaintenanceRunID<TError = unknown>(
  args: InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMaintenanceMaintenanceRunIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maintenance[':maintenanceRunID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMaintenanceMaintenanceRunIDKey() {
  return ['maintenance', '/maintenance/:maintenanceRunID', 'PATCH'] as const
}

export function usePatchMaintenanceMaintenanceRunID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMaintenanceMaintenanceRunIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$patch']> },
      ) => parseResponse(client.maintenance[':maintenanceRunID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMaintenanceMaintenanceRunIDTriggerKey() {
  return ['maintenance', '/maintenance/:maintenanceRunID/trigger', 'POST'] as const
}

export function usePostMaintenanceMaintenanceRunIDTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maintenance)[':maintenanceRunID']['trigger']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['trigger']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMaintenanceMaintenanceRunIDTriggerKey()
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
            (typeof client.maintenance)[':maintenanceRunID']['trigger']['$post']
          >
        },
      ) => parseResponse(client.maintenance[':maintenanceRunID'].trigger.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBuildSourcesKey(
  args: InferRequestType<(typeof client)['build-sources']['$get']>,
) {
  return ['build-sources', '/build-sources', args] as const
}

export function useGetBuildSources<TError = unknown>(
  args: InferRequestType<(typeof client)['build-sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBuildSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['build-sources'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildSources<TError = unknown>(
  args: InferRequestType<(typeof client)['build-sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBuildSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['build-sources'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBuildSourcesKey() {
  return ['build-sources', '/build-sources', 'POST'] as const
}

export function usePostBuildSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['build-sources']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['build-sources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBuildSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['build-sources']['$post']> },
      ) => parseResponse(client['build-sources'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBuildSourcesBuildSourceIdKey(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$get']>,
) {
  return ['build-sources', '/build-sources/:buildSourceId', args] as const
}

export function useGetBuildSourcesBuildSourceId<TError = unknown>(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuildSourcesBuildSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['build-sources'][':buildSourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildSourcesBuildSourceId<TError = unknown>(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuildSourcesBuildSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['build-sources'][':buildSourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBuildSourcesBuildSourceIdKey() {
  return ['build-sources', '/build-sources/:buildSourceId', 'DELETE'] as const
}

export function useDeleteBuildSourcesBuildSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBuildSourcesBuildSourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$delete']> },
      ) => parseResponse(client['build-sources'][':buildSourceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBuildSourcesBuildSourceIdKey() {
  return ['build-sources', '/build-sources/:buildSourceId', 'PATCH'] as const
}

export function usePatchBuildSourcesBuildSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBuildSourcesBuildSourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$patch']> },
      ) => parseResponse(client['build-sources'][':buildSourceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBuildSourcesBuildSourceIdBuildsKey(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>,
) {
  return ['build-sources', '/build-sources/:buildSourceId/builds', args] as const
}

export function useGetBuildSourcesBuildSourceIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>
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
        ? getGetBuildSourcesBuildSourceIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['build-sources'][':buildSourceId'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildSourcesBuildSourceIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>
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
        ? getGetBuildSourcesBuildSourceIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['build-sources'][':buildSourceId'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBuildSourcesBuildSourceIdBuildsKey() {
  return ['build-sources', '/build-sources/:buildSourceId/builds', 'POST'] as const
}

export function usePostBuildSourcesBuildSourceIdBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['build-sources'][':buildSourceId']['builds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBuildSourcesBuildSourceIdBuildsKey()
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
            (typeof client)['build-sources'][':buildSourceId']['builds']['$post']
          >
        },
      ) =>
        parseResponse(client['build-sources'][':buildSourceId'].builds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBuildSourcesBuildSourceIdBuildsBuildIdKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/builds/:buildId', args] as const
}

export function useGetBuildSourcesBuildSourceIdBuildsBuildId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuildSourcesBuildSourceIdBuildsBuildIdKey(args)
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
                (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
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
          client['build-sources'][':buildSourceId'].builds[':buildId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildSourcesBuildSourceIdBuildsBuildId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuildSourcesBuildSourceIdBuildsBuildIdKey(args)
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
                (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
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
          client['build-sources'][':buildSourceId'].builds[':buildId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuildSourcesBuildSourceIdEnvVarsKey(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>,
) {
  return ['build-sources', '/build-sources/:buildSourceId/env-vars', args] as const
}

export function useGetBuildSourcesBuildSourceIdEnvVars<TError = unknown>(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>
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
        ? getGetBuildSourcesBuildSourceIdEnvVarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['build-sources'][':buildSourceId']['env-vars'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildSourcesBuildSourceIdEnvVars<TError = unknown>(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>
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
        ? getGetBuildSourcesBuildSourceIdEnvVarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['build-sources'][':buildSourceId']['env-vars'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBuildSourcesBuildSourceIdEnvVarsKey() {
  return ['build-sources', '/build-sources/:buildSourceId/env-vars', 'PUT'] as const
}

export function usePutBuildSourcesBuildSourceIdEnvVars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBuildSourcesBuildSourceIdEnvVarsKey()
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
            (typeof client)['build-sources'][':buildSourceId']['env-vars']['$put']
          >
        },
      ) =>
        parseResponse(
          client['build-sources'][':buildSourceId']['env-vars'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBuildSourcesBuildSourceIdEnvVarsEnvVarKeyKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/env-vars/:envVarKey', args] as const
}

export function useGetBuildSourcesBuildSourceIdEnvVarsEnvVarKey<TError = unknown>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuildSourcesBuildSourceIdEnvVarsEnvVarKeyKey(args)
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
                (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
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
          client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildSourcesBuildSourceIdEnvVarsEnvVarKey<TError = unknown>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuildSourcesBuildSourceIdEnvVarsEnvVarKeyKey(args)
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
                (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
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
          client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBuildSourcesBuildSourceIdEnvVarsEnvVarKeyKey() {
  return ['build-sources', '/build-sources/:buildSourceId/env-vars/:envVarKey', 'PUT'] as const
}

export function usePutBuildSourcesBuildSourceIdEnvVarsEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBuildSourcesBuildSourceIdEnvVarsEnvVarKeyKey()
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
            (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyKey() {
  return ['build-sources', '/build-sources/:buildSourceId/env-vars/:envVarKey', 'DELETE'] as const
}

export function useDeleteBuildSourcesBuildSourceIdEnvVarsEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyKey()
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
            (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBuildSourcesBuildSourceIdSecretFilesKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/secret-files', args] as const
}

export function useGetBuildSourcesBuildSourceIdSecretFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']>
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
        ? getGetBuildSourcesBuildSourceIdSecretFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['build-sources'][':buildSourceId']['secret-files'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildSourcesBuildSourceIdSecretFiles<TError = unknown>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']>
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
        ? getGetBuildSourcesBuildSourceIdSecretFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['build-sources'][':buildSourceId']['secret-files'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBuildSourcesBuildSourceIdSecretFilesKey() {
  return ['build-sources', '/build-sources/:buildSourceId/secret-files', 'PUT'] as const
}

export function usePutBuildSourcesBuildSourceIdSecretFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['build-sources'][':buildSourceId']['secret-files']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBuildSourcesBuildSourceIdSecretFilesKey()
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
            (typeof client)['build-sources'][':buildSourceId']['secret-files']['$put']
          >
        },
      ) =>
        parseResponse(
          client['build-sources'][':buildSourceId']['secret-files'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBuildSourcesBuildSourceIdSecretFilesEnvVarKeyKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
  >,
) {
  return ['build-sources', '/build-sources/:buildSourceId/secret-files/:envVarKey', args] as const
}

export function useGetBuildSourcesBuildSourceIdSecretFilesEnvVarKey<TError = unknown>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuildSourcesBuildSourceIdSecretFilesEnvVarKeyKey(args)
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
                (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
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
          client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildSourcesBuildSourceIdSecretFilesEnvVarKey<TError = unknown>(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBuildSourcesBuildSourceIdSecretFilesEnvVarKeyKey(args)
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
                (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
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
          client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBuildSourcesBuildSourceIdSecretFilesEnvVarKeyKey() {
  return ['build-sources', '/build-sources/:buildSourceId/secret-files/:envVarKey', 'PUT'] as const
}

export function usePutBuildSourcesBuildSourceIdSecretFilesEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBuildSourcesBuildSourceIdSecretFilesEnvVarKeyKey()
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
            (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyKey() {
  return [
    'build-sources',
    '/build-sources/:buildSourceId/secret-files/:envVarKey',
    'DELETE',
  ] as const
}

export function useDeleteBuildSourcesBuildSourceIdSecretFilesEnvVarKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyKey()
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
            (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdKey() {
  return ['build-sources', '/build-sources/:buildSourceId/env-groups/:envGroupId', 'POST'] as const
}

export function usePostBuildSourcesBuildSourceIdEnvGroupsEnvGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdKey()
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
            (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['build-sources'][':buildSourceId']['env-groups'][':envGroupId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdKey() {
  return [
    'build-sources',
    '/build-sources/:buildSourceId/env-groups/:envGroupId',
    'DELETE',
  ] as const
}

export function useDeleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdKey()
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
            (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['build-sources'][':buildSourceId']['env-groups'][':envGroupId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksKey(args: InferRequestType<typeof client.webhooks.$get>) {
  return ['webhooks', '/webhooks', args] as const
}

export function useGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostWebhooksKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function usePostWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.$post> }) =>
        parseResponse(client.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhookId', args] as const
}

export function useGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']> },
      ) => parseResponse(client.webhooks[':webhookId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhookId', 'PATCH'] as const
}

export function usePatchWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhookId']['$patch']> },
      ) => parseResponse(client.webhooks[':webhookId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdEventsKey(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['events']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhookId/events', args] as const
}

export function useGetWebhooksWebhookIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhookId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhookId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkflowsKey(args: InferRequestType<typeof client.workflows.$get>) {
  return ['workflows', '/workflows', args] as const
}

export function useGetWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkflowsKey() {
  return ['workflows', '/workflows', 'POST'] as const
}

export function usePostWorkflows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.workflows.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.workflows.$post> }) =>
        parseResponse(client.workflows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsWorkflowIdKey(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$get']>,
) {
  return ['workflows', '/workflows/:workflowId', args] as const
}

export function useGetWorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows[':workflowId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows[':workflowId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWorkflowsWorkflowIdKey() {
  return ['workflows', '/workflows/:workflowId', 'DELETE'] as const
}

export function useDeleteWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.workflows)[':workflowId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workflows)[':workflowId']['$delete']> },
      ) => parseResponse(client.workflows[':workflowId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWorkflowsWorkflowIdKey() {
  return ['workflows', '/workflows/:workflowId', 'PATCH'] as const
}

export function usePatchWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflows)[':workflowId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workflows)[':workflowId']['$patch']> },
      ) => parseResponse(client.workflows[':workflowId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowversionsKey(
  args: InferRequestType<typeof client.workflowversions.$get>,
) {
  return ['workflowversions', '/workflowversions', args] as const
}

export function useGetWorkflowversions<TError = unknown>(
  args: InferRequestType<typeof client.workflowversions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowversionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflowversions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowversions<TError = unknown>(
  args: InferRequestType<typeof client.workflowversions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowversionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflowversions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkflowversionsKey() {
  return ['workflowversions', '/workflowversions', 'POST'] as const
}

export function usePostWorkflowversions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflowversions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.workflowversions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowversionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.workflowversions.$post> }) =>
        parseResponse(client.workflowversions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowversionsWorkflowVersionIdKey(
  args: InferRequestType<(typeof client.workflowversions)[':workflowVersionId']['$get']>,
) {
  return ['workflowversions', '/workflowversions/:workflowVersionId', args] as const
}

export function useGetWorkflowversionsWorkflowVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.workflowversions)[':workflowVersionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowversionsWorkflowVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workflowversions[':workflowVersionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowversionsWorkflowVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.workflowversions)[':workflowVersionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowversionsWorkflowVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflowversions)[':workflowVersionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workflowversions[':workflowVersionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTasksKey(args: InferRequestType<typeof client.tasks.$get>) {
  return ['tasks', '/tasks', args] as const
}

export function useGetTasks<TError = unknown>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tasks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTasks<TError = unknown>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tasks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTasksTaskIdKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
) {
  return ['tasks', '/tasks/:taskId', args] as const
}

export function useGetTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksTaskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksTaskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskRunsKey(args: InferRequestType<(typeof client)['task-runs']['$get']>) {
  return ['task-runs', '/task-runs', args] as const
}

export function useGetTaskRuns<TError = unknown>(
  args: InferRequestType<(typeof client)['task-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaskRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['task-runs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskRuns<TError = unknown>(
  args: InferRequestType<(typeof client)['task-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaskRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['task-runs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTaskRunsKey() {
  return ['task-runs', '/task-runs', 'POST'] as const
}

export function usePostTaskRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['task-runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaskRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['task-runs']['$post']> }) =>
        parseResponse(client['task-runs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaskRunsEventsKey(
  args: InferRequestType<(typeof client)['task-runs']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['task-runs', '/task-runs/events', keyArgs] as const
}

export function useGetTaskRunsEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['task-runs']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaskRunsEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['task-runs'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskRunsEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['task-runs']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaskRunsEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['task-runs']['events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['task-runs'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaskRunsTaskRunIdKey(
  args: InferRequestType<(typeof client)['task-runs'][':taskRunId']['$get']>,
) {
  return ['task-runs', '/task-runs/:taskRunId', args] as const
}

export function useGetTaskRunsTaskRunId<TError = unknown>(
  args: InferRequestType<(typeof client)['task-runs'][':taskRunId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskRunsTaskRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['task-runs'][':taskRunId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskRunsTaskRunId<TError = unknown>(
  args: InferRequestType<(typeof client)['task-runs'][':taskRunId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskRunsTaskRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['task-runs'][':taskRunId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTaskRunsTaskRunIdKey() {
  return ['task-runs', '/task-runs/:taskRunId', 'DELETE'] as const
}

export function useDeleteTaskRunsTaskRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['task-runs'][':taskRunId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['task-runs'][':taskRunId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTaskRunsTaskRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['task-runs'][':taskRunId']['$delete']> },
      ) => parseResponse(client['task-runs'][':taskRunId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFlowsKey(args: InferRequestType<typeof client.flows.$get>) {
  return ['flows', '/flows', args] as const
}

export function useGetFlows<TError = unknown>(
  args: InferRequestType<typeof client.flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFlowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.flows.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFlows<TError = unknown>(
  args: InferRequestType<typeof client.flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFlowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.flows.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetFlowsFlowIdKey(
  args: InferRequestType<(typeof client.flows)[':flowId']['$get']>,
) {
  return ['flows', '/flows/:flowId', args] as const
}

export function useGetFlowsFlowId<TError = unknown>(
  args: InferRequestType<(typeof client.flows)[':flowId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFlowsFlowIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.flows[':flowId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFlowsFlowId<TError = unknown>(
  args: InferRequestType<(typeof client.flows)[':flowId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFlowsFlowIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':flowId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.flows[':flowId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFlowRunsKey(args: InferRequestType<(typeof client)['flow-runs']['$get']>) {
  return ['flow-runs', '/flow-runs', args] as const
}

export function useGetFlowRuns<TError = unknown>(
  args: InferRequestType<(typeof client)['flow-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFlowRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['flow-runs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFlowRuns<TError = unknown>(
  args: InferRequestType<(typeof client)['flow-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFlowRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['flow-runs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFlowRunsKey() {
  return ['flow-runs', '/flow-runs', 'POST'] as const
}

export function usePostFlowRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['flow-runs']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['flow-runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFlowRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['flow-runs']['$post']> }) =>
        parseResponse(client['flow-runs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFlowRunsFlowRunIdKey(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$get']>,
) {
  return ['flow-runs', '/flow-runs/:flowRunId', args] as const
}

export function useGetFlowRunsFlowRunId<TError = unknown>(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFlowRunsFlowRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['flow-runs'][':flowRunId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFlowRunsFlowRunId<TError = unknown>(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFlowRunsFlowRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['flow-runs'][':flowRunId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFlowRunsFlowRunIdKey() {
  return ['flow-runs', '/flow-runs/:flowRunId', 'DELETE'] as const
}

export function useDeleteFlowRunsFlowRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFlowRunsFlowRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$delete']> },
      ) => parseResponse(client['flow-runs'][':flowRunId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFlowRunsFlowRunIdStepsKey(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>,
) {
  return ['flow-runs', '/flow-runs/:flowRunId/steps', args] as const
}

export function useGetFlowRunsFlowRunIdSteps<TError = unknown>(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFlowRunsFlowRunIdStepsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['flow-runs'][':flowRunId'].steps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFlowRunsFlowRunIdSteps<TError = unknown>(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFlowRunsFlowRunIdStepsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['flow-runs'][':flowRunId'].steps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFlowRunsFlowRunIdStepsStepSeqKey(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>,
) {
  return ['flow-runs', '/flow-runs/:flowRunId/steps/:stepSeq', args] as const
}

export function useGetFlowRunsFlowRunIdStepsStepSeq<TError = unknown>(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>
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
        ? getGetFlowRunsFlowRunIdStepsStepSeqKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['flow-runs'][':flowRunId'].steps[':stepSeq'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFlowRunsFlowRunIdStepsStepSeq<TError = unknown>(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>
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
        ? getGetFlowRunsFlowRunIdStepsStepSeqKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['flow-runs'][':flowRunId'].steps[':stepSeq'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptKey(
  args: InferRequestType<
    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
  >,
) {
  return ['flow-runs', '/flow-runs/:flowRunId/steps/:stepSeq/attempts/:attempt', args] as const
}

export function useGetFlowRunsFlowRunIdStepsStepSeqAttemptsAttempt<TError = unknown>(
  args: InferRequestType<
    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptKey(args)
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
                (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
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
          client['flow-runs'][':flowRunId'].steps[':stepSeq'].attempts[':attempt'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFlowRunsFlowRunIdStepsStepSeqAttemptsAttempt<TError = unknown>(
  args: InferRequestType<
    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptKey(args)
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
                (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
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
          client['flow-runs'][':flowRunId'].steps[':stepSeq'].attempts[':attempt'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxesKey(args: InferRequestType<typeof client.sandboxes.$get>) {
  return ['sandboxes', '/sandboxes', args] as const
}

export function useGetSandboxes<TError = unknown>(
  args: InferRequestType<typeof client.sandboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSandboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxes<TError = unknown>(
  args: InferRequestType<typeof client.sandboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSandboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSandboxesKey() {
  return ['sandboxes', '/sandboxes', 'POST'] as const
}

export function usePostSandboxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sandboxes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sandboxes.$post> }) =>
        parseResponse(client.sandboxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxGroupsKey(
  args: InferRequestType<(typeof client)['sandbox-groups']['$get']>,
) {
  return ['sandbox-groups', '/sandbox-groups', args] as const
}

export function useGetSandboxGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['sandbox-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSandboxGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sandbox-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['sandbox-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSandboxGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sandbox-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSandboxGroupsKey() {
  return ['sandbox-groups', '/sandbox-groups', 'POST'] as const
}

export function usePostSandboxGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sandbox-groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sandbox-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['sandbox-groups']['$post']> },
      ) => parseResponse(client['sandbox-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxesSandboxIdKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxId', args] as const
}

export function useGetSandboxesSandboxId<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxesSandboxIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes[':sandboxId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxesSandboxId<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxesSandboxIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes[':sandboxId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxesSandboxIdExecsKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxId/execs', args] as const
}

export function useGetSandboxesSandboxIdExecs<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxesSandboxIdExecsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes[':sandboxId'].execs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxesSandboxIdExecs<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxesSandboxIdExecsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes[':sandboxId'].execs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxesSandboxIdExecsExecIdKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxId/execs/:execId', args] as const
}

export function useGetSandboxesSandboxIdExecsExecId<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxesSandboxIdExecsExecIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandboxes[':sandboxId'].execs[':execId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxesSandboxIdExecsExecId<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxesSandboxIdExecsExecIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sandboxes[':sandboxId'].execs[':execId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSandboxesSandboxIdTerminateKey() {
  return ['sandboxes', '/sandboxes/:sandboxId/terminate', 'POST'] as const
}

export function usePostSandboxesSandboxIdTerminate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['terminate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['terminate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIdTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxId']['terminate']['$post']> },
      ) => parseResponse(client.sandboxes[':sandboxId'].terminate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxesSandboxIdSuspendKey() {
  return ['sandboxes', '/sandboxes/:sandboxId/suspend', 'POST'] as const
}

export function usePostSandboxesSandboxIdSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['suspend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIdSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxId']['suspend']['$post']> },
      ) => parseResponse(client.sandboxes[':sandboxId'].suspend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxesSandboxIdSnapshotsKey() {
  return ['sandboxes', '/sandboxes/:sandboxId/snapshots', 'POST'] as const
}

export function usePostSandboxesSandboxIdSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxId']['snapshots']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxId']['snapshots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIdSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxId']['snapshots']['$post']> },
      ) => parseResponse(client.sandboxes[':sandboxId'].snapshots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxGroupsSandboxGroupIdKey(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId', args] as const
}

export function useGetSandboxGroupsSandboxGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['sandbox-groups'][':sandboxGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxGroupsSandboxGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['sandbox-groups'][':sandboxGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSandboxGroupsSandboxGroupIdKey() {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId', 'PATCH'] as const
}

export function usePatchSandboxGroupsSandboxGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSandboxGroupsSandboxGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$patch']>
        },
      ) => parseResponse(client['sandbox-groups'][':sandboxGroupId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxGroupsSandboxGroupIdCredentialsKey(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
  >,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/credentials', args] as const
}

export function useGetSandboxGroupsSandboxGroupIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdCredentialsKey(args)
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
                (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
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
          client['sandbox-groups'][':sandboxGroupId'].credentials.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxGroupsSandboxGroupIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdCredentialsKey(args)
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
                (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
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
          client['sandbox-groups'][':sandboxGroupId'].credentials.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSandboxGroupsSandboxGroupIdCredentialsKey() {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/credentials', 'POST'] as const
}

export function usePostSandboxGroupsSandboxGroupIdCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxGroupsSandboxGroupIdCredentialsKey()
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
            (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].credentials.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxGroupsSandboxGroupIdCredentialsCredentialIdKey(
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

export function useGetSandboxGroupsSandboxGroupIdCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdCredentialsCredentialIdKey(args)
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
                (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
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
          client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxGroupsSandboxGroupIdCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdCredentialsCredentialIdKey(args)
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
                (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
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
          client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdKey() {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId',
    'DELETE',
  ] as const
}

export function useDeleteSandboxGroupsSandboxGroupIdCredentialsCredentialId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdKey()
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
            (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSandboxGroupsSandboxGroupIdCredentialsCredentialIdKey() {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId',
    'PATCH',
  ] as const
}

export function usePatchSandboxGroupsSandboxGroupIdCredentialsCredentialId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSandboxGroupsSandboxGroupIdCredentialsCredentialIdKey()
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
            (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsKey(
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

export function useGetSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsKey(args)
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
                (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
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
          client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsKey(args)
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
                (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
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
          client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreKey() {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId/restore',
    'POST',
  ] as const
}

export function usePostSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreKey()
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
            (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].restore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxGroupsSandboxGroupIdBuildsKey(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/builds', args] as const
}

export function useGetSandboxGroupsSandboxGroupIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>
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
        ? getGetSandboxGroupsSandboxGroupIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['sandbox-groups'][':sandboxGroupId'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxGroupsSandboxGroupIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>
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
        ? getGetSandboxGroupsSandboxGroupIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['sandbox-groups'][':sandboxGroupId'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSandboxGroupsSandboxGroupIdBuildsKey() {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/builds', 'POST'] as const
}

export function usePostSandboxGroupsSandboxGroupIdBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxGroupsSandboxGroupIdBuildsKey()
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
            (typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$post']
          >
        },
      ) =>
        parseResponse(client['sandbox-groups'][':sandboxGroupId'].builds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxGroupsSandboxGroupIdBuildsBuildIdKey(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
  >,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/builds/:buildId', args] as const
}

export function useGetSandboxGroupsSandboxGroupIdBuildsBuildId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdBuildsBuildIdKey(args)
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
                (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
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
          client['sandbox-groups'][':sandboxGroupId'].builds[':buildId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxGroupsSandboxGroupIdBuildsBuildId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdBuildsBuildIdKey(args)
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
                (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
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
          client['sandbox-groups'][':sandboxGroupId'].builds[':buildId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSandboxGroupsSandboxGroupIdBuildsBuildIdKey() {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/builds/:buildId', 'DELETE'] as const
}

export function useDeleteSandboxGroupsSandboxGroupIdBuildsBuildId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSandboxGroupsSandboxGroupIdBuildsBuildIdKey()
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
            (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].builds[':buildId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxGroupsSandboxGroupIdSnapshotsKey(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/snapshots', args] as const
}

export function useGetSandboxGroupsSandboxGroupIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>
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
        ? getGetSandboxGroupsSandboxGroupIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].snapshots.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxGroupsSandboxGroupIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>
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
        ? getGetSandboxGroupsSandboxGroupIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].snapshots.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdKey(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
  >,
) {
  return ['sandbox-groups', '/sandbox-groups/:sandboxGroupId/snapshots/:snapshotId', args] as const
}

export function useGetSandboxGroupsSandboxGroupIdSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdKey(args)
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
                (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
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
          client['sandbox-groups'][':sandboxGroupId'].snapshots[':snapshotId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxGroupsSandboxGroupIdSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdKey(args)
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
                (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
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
          client['sandbox-groups'][':sandboxGroupId'].snapshots[':snapshotId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdKey() {
  return [
    'sandbox-groups',
    '/sandbox-groups/:sandboxGroupId/snapshots/:snapshotId',
    'DELETE',
  ] as const
}

export function useDeleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdKey()
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
            (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['sandbox-groups'][':sandboxGroupId'].snapshots[':snapshotId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxesSandboxIdRunsOperationTokenKey() {
  return ['sandboxes', '/sandboxes/:sandboxId/runs/:operation/token', 'POST'] as const
}

export function usePostSandboxesSandboxIdRunsOperationToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.sandboxes)[':sandboxId']['runs'][':operation']['token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIdRunsOperationTokenKey()
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
            (typeof client.sandboxes)[':sandboxId']['runs'][':operation']['token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sandboxes[':sandboxId'].runs[':operation'].token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxesSandboxIdFilesOperationTokenKey() {
  return ['sandboxes', '/sandboxes/:sandboxId/files/:operation/token', 'POST'] as const
}

export function usePostSandboxesSandboxIdFilesOperationToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.sandboxes)[':sandboxId']['files'][':operation']['token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIdFilesOperationTokenKey()
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
            (typeof client.sandboxes)[':sandboxId']['files'][':operation']['token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sandboxes[':sandboxId'].files[':operation'].token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
