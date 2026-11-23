import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAttachmentsKey() {
  return ['attachments'] as const
}

export function getBatchKey() {
  return ['batch'] as const
}

export function getCustomFieldsKey() {
  return ['custom_fields'] as const
}

export function getEnumOptionsKey() {
  return ['enum_options'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getGoalRelationshipsKey() {
  return ['goal_relationships'] as const
}

export function getGoalsKey() {
  return ['goals'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getOrganizationExportsKey() {
  return ['organization_exports'] as const
}

export function getPortfolioMembershipsKey() {
  return ['portfolio_memberships'] as const
}

export function getPortfoliosKey() {
  return ['portfolios'] as const
}

export function getProjectBriefsKey() {
  return ['project_briefs'] as const
}

export function getProjectMembershipsKey() {
  return ['project_memberships'] as const
}

export function getProjectStatusesKey() {
  return ['project_statuses'] as const
}

export function getProjectTemplatesKey() {
  return ['project_templates'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getSectionsKey() {
  return ['sections'] as const
}

export function getStatusUpdatesKey() {
  return ['status_updates'] as const
}

export function getStoriesKey() {
  return ['stories'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getTeamMembershipsKey() {
  return ['team_memberships'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTimePeriodsKey() {
  return ['time_periods'] as const
}

export function getUserTaskListsKey() {
  return ['user_task_lists'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getWorkspaceMembershipsKey() {
  return ['workspace_memberships'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getGetAttachmentsKey(args: InferRequestType<typeof client.attachments.$get>) {
  return ['attachments', '/attachments', args] as const
}

export function useGetAttachments<TError = unknown>(
  args: InferRequestType<typeof client.attachments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttachmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttachments<TError = unknown>(
  args: InferRequestType<typeof client.attachments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttachmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAttachmentsKey() {
  return ['attachments', '/attachments', 'POST'] as const
}

export function usePostAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.attachments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.attachments.$post> }) =>
        parseResponse(client.attachments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAttachmentsAttachmentGidKey(
  args: InferRequestType<(typeof client.attachments)[':attachment_gid']['$get']>,
) {
  return ['attachments', '/attachments/:attachment_gid', args] as const
}

export function useGetAttachmentsAttachmentGid<TError = unknown>(
  args: InferRequestType<(typeof client.attachments)[':attachment_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attachments)[':attachment_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttachmentsAttachmentGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attachments)[':attachment_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments[':attachment_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttachmentsAttachmentGid<TError = unknown>(
  args: InferRequestType<(typeof client.attachments)[':attachment_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attachments)[':attachment_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttachmentsAttachmentGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attachments)[':attachment_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments[':attachment_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAttachmentsAttachmentGidKey() {
  return ['attachments', '/attachments/:attachment_gid', 'DELETE'] as const
}

export function useDeleteAttachmentsAttachmentGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachments)[':attachment_gid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attachments)[':attachment_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAttachmentsAttachmentGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.attachments)[':attachment_gid']['$delete']> },
      ) => parseResponse(client.attachments[':attachment_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBatchKey() {
  return ['batch', '/batch', 'POST'] as const
}

export function usePostBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.batch.$post> }) =>
        parseResponse(client.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomFieldsKey() {
  return ['custom_fields', '/custom_fields', 'POST'] as const
}

export function usePostCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_fields.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.custom_fields.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.custom_fields.$post> }) =>
        parseResponse(client.custom_fields.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomFieldsCustomFieldGidKey(
  args: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$get']>,
) {
  return ['custom_fields', '/custom_fields/:custom_field_gid', args] as const
}

export function useGetCustomFieldsCustomFieldGid<TError = unknown>(
  args: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomFieldsCustomFieldGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.custom_fields[':custom_field_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomFieldsCustomFieldGid<TError = unknown>(
  args: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomFieldsCustomFieldGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.custom_fields[':custom_field_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomFieldsCustomFieldGidKey() {
  return ['custom_fields', '/custom_fields/:custom_field_gid', 'PUT'] as const
}

export function usePutCustomFieldsCustomFieldGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomFieldsCustomFieldGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$put']> },
      ) => parseResponse(client.custom_fields[':custom_field_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomFieldsCustomFieldGidKey() {
  return ['custom_fields', '/custom_fields/:custom_field_gid', 'DELETE'] as const
}

export function useDeleteCustomFieldsCustomFieldGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomFieldsCustomFieldGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$delete']> },
      ) => parseResponse(client.custom_fields[':custom_field_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomFieldsCustomFieldGidEnumOptionsKey() {
  return ['custom_fields', '/custom_fields/:custom_field_gid/enum_options', 'POST'] as const
}

export function usePostCustomFieldsCustomFieldGidEnumOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.custom_fields)[':custom_field_gid']['enum_options']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['enum_options']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomFieldsCustomFieldGidEnumOptionsKey()
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
            (typeof client.custom_fields)[':custom_field_gid']['enum_options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.custom_fields[':custom_field_gid'].enum_options.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomFieldsCustomFieldGidEnumOptionsInsertKey() {
  return ['custom_fields', '/custom_fields/:custom_field_gid/enum_options/insert', 'POST'] as const
}

export function usePostCustomFieldsCustomFieldGidEnumOptionsInsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.custom_fields)[':custom_field_gid']['enum_options']['insert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.custom_fields)[':custom_field_gid']['enum_options']['insert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomFieldsCustomFieldGidEnumOptionsInsertKey()
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
            (typeof client.custom_fields)[':custom_field_gid']['enum_options']['insert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.custom_fields[':custom_field_gid'].enum_options.insert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutEnumOptionsEnumOptionGidKey() {
  return ['enum_options', '/enum_options/:enum_option_gid', 'PUT'] as const
}

export function usePutEnumOptionsEnumOptionGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enum_options)[':enum_option_gid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enum_options)[':enum_option_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnumOptionsEnumOptionGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.enum_options)[':enum_option_gid']['$put']> },
      ) => parseResponse(client.enum_options[':enum_option_gid'].$put(arg, clientOptions)),
      restMutationOptions,
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

export function getGetGoalRelationshipsKey(
  args: InferRequestType<typeof client.goal_relationships.$get>,
) {
  return ['goal_relationships', '/goal_relationships', args] as const
}

export function useGetGoalRelationships<TError = unknown>(
  args: InferRequestType<typeof client.goal_relationships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goal_relationships.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoalRelationshipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goal_relationships.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.goal_relationships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGoalRelationships<TError = unknown>(
  args: InferRequestType<typeof client.goal_relationships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goal_relationships.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoalRelationshipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goal_relationships.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.goal_relationships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGoalRelationshipsGoalRelationshipGidKey(
  args: InferRequestType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>,
) {
  return ['goal_relationships', '/goal_relationships/:goal_relationship_gid', args] as const
}

export function useGetGoalRelationshipsGoalRelationshipGid<TError = unknown>(
  args: InferRequestType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoalRelationshipsGoalRelationshipGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.goal_relationships[':goal_relationship_gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGoalRelationshipsGoalRelationshipGid<TError = unknown>(
  args: InferRequestType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoalRelationshipsGoalRelationshipGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.goal_relationships[':goal_relationship_gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGoalRelationshipsGoalRelationshipGidKey() {
  return ['goal_relationships', '/goal_relationships/:goal_relationship_gid', 'PUT'] as const
}

export function usePutGoalRelationshipsGoalRelationshipGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goal_relationships)[':goal_relationship_gid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.goal_relationships)[':goal_relationship_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGoalRelationshipsGoalRelationshipGidKey()
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
            (typeof client.goal_relationships)[':goal_relationship_gid']['$put']
          >
        },
      ) =>
        parseResponse(client.goal_relationships[':goal_relationship_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGoalsKey(args: InferRequestType<typeof client.goals.$get>) {
  return ['goals', '/goals', args] as const
}

export function useGetGoals<TError = unknown>(
  args: InferRequestType<typeof client.goals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGoalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.goals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGoals<TError = unknown>(
  args: InferRequestType<typeof client.goals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGoalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.goals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostGoalsKey() {
  return ['goals', '/goals', 'POST'] as const
}

export function usePostGoals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.goals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGoalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.goals.$post> }) =>
        parseResponse(client.goals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGoalsGoalGidKey(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['$get']>,
) {
  return ['goals', '/goals/:goal_gid', args] as const
}

export function useGetGoalsGoalGid<TError = unknown>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGoalsGoalGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.goals[':goal_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGoalsGoalGid<TError = unknown>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGoalsGoalGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.goals[':goal_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGoalsGoalGidKey() {
  return ['goals', '/goals/:goal_gid', 'PUT'] as const
}

export function usePutGoalsGoalGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.goals)[':goal_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGoalsGoalGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.goals)[':goal_gid']['$put']> },
      ) => parseResponse(client.goals[':goal_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGoalsGoalGidKey() {
  return ['goals', '/goals/:goal_gid', 'DELETE'] as const
}

export function useDeleteGoalsGoalGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.goals)[':goal_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGoalsGoalGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.goals)[':goal_gid']['$delete']> },
      ) => parseResponse(client.goals[':goal_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGoalsGoalGidAddFollowersKey() {
  return ['goals', '/goals/:goal_gid/addFollowers', 'POST'] as const
}

export function usePostGoalsGoalGidAddFollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['addFollowers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.goals)[':goal_gid']['addFollowers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGoalsGoalGidAddFollowersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.goals)[':goal_gid']['addFollowers']['$post']> },
      ) => parseResponse(client.goals[':goal_gid'].addFollowers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGoalsGoalGidAddSupportingRelationshipKey() {
  return ['goals', '/goals/:goal_gid/addSupportingRelationship', 'POST'] as const
}

export function usePostGoalsGoalGidAddSupportingRelationship<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.goals)[':goal_gid']['addSupportingRelationship']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.goals)[':goal_gid']['addSupportingRelationship']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGoalsGoalGidAddSupportingRelationshipKey()
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
            (typeof client.goals)[':goal_gid']['addSupportingRelationship']['$post']
          >
        },
      ) =>
        parseResponse(
          client.goals[':goal_gid'].addSupportingRelationship.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGoalsGoalGidParentGoalsKey(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>,
) {
  return ['goals', '/goals/:goal_gid/parentGoals', args] as const
}

export function useGetGoalsGoalGidParentGoals<TError = unknown>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoalsGoalGidParentGoalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.goals[':goal_gid'].parentGoals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGoalsGoalGidParentGoals<TError = unknown>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGoalsGoalGidParentGoalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.goals[':goal_gid'].parentGoals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGoalsGoalGidRemoveFollowersKey() {
  return ['goals', '/goals/:goal_gid/removeFollowers', 'POST'] as const
}

export function usePostGoalsGoalGidRemoveFollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['removeFollowers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.goals)[':goal_gid']['removeFollowers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGoalsGoalGidRemoveFollowersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.goals)[':goal_gid']['removeFollowers']['$post']>
        },
      ) => parseResponse(client.goals[':goal_gid'].removeFollowers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGoalsGoalGidRemoveSupportingRelationshipKey() {
  return ['goals', '/goals/:goal_gid/removeSupportingRelationship', 'POST'] as const
}

export function usePostGoalsGoalGidRemoveSupportingRelationship<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.goals)[':goal_gid']['removeSupportingRelationship']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.goals)[':goal_gid']['removeSupportingRelationship']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGoalsGoalGidRemoveSupportingRelationshipKey()
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
            (typeof client.goals)[':goal_gid']['removeSupportingRelationship']['$post']
          >
        },
      ) =>
        parseResponse(
          client.goals[':goal_gid'].removeSupportingRelationship.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGoalsGoalGidSetMetricKey() {
  return ['goals', '/goals/:goal_gid/setMetric', 'POST'] as const
}

export function usePostGoalsGoalGidSetMetric<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['setMetric']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.goals)[':goal_gid']['setMetric']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGoalsGoalGidSetMetricKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.goals)[':goal_gid']['setMetric']['$post']> },
      ) => parseResponse(client.goals[':goal_gid'].setMetric.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGoalsGoalGidSetMetricCurrentValueKey() {
  return ['goals', '/goals/:goal_gid/setMetricCurrentValue', 'POST'] as const
}

export function usePostGoalsGoalGidSetMetricCurrentValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['setMetricCurrentValue']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.goals)[':goal_gid']['setMetricCurrentValue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGoalsGoalGidSetMetricCurrentValueKey()
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
            (typeof client.goals)[':goal_gid']['setMetricCurrentValue']['$post']
          >
        },
      ) => parseResponse(client.goals[':goal_gid'].setMetricCurrentValue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsJobGidKey(
  args: InferRequestType<(typeof client.jobs)[':job_gid']['$get']>,
) {
  return ['jobs', '/jobs/:job_gid', args] as const
}

export function useGetJobsJobGid<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':job_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsJobGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':job_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsJobGid<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':job_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsJobGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':job_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationExportsKey() {
  return ['organization_exports', '/organization_exports', 'POST'] as const
}

export function usePostOrganizationExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_exports.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization_exports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization_exports.$post> },
      ) => parseResponse(client.organization_exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationExportsOrganizationExportGidKey(
  args: InferRequestType<(typeof client.organization_exports)[':organization_export_gid']['$get']>,
) {
  return ['organization_exports', '/organization_exports/:organization_export_gid', args] as const
}

export function useGetOrganizationExportsOrganizationExportGid<TError = unknown>(
  args: InferRequestType<(typeof client.organization_exports)[':organization_export_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization_exports)[':organization_export_gid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationExportsOrganizationExportGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization_exports)[':organization_export_gid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization_exports[':organization_export_gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationExportsOrganizationExportGid<TError = unknown>(
  args: InferRequestType<(typeof client.organization_exports)[':organization_export_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization_exports)[':organization_export_gid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationExportsOrganizationExportGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organization_exports)[':organization_export_gid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organization_exports[':organization_export_gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPortfolioMembershipsKey(
  args: InferRequestType<typeof client.portfolio_memberships.$get>,
) {
  return ['portfolio_memberships', '/portfolio_memberships', args] as const
}

export function useGetPortfolioMemberships<TError = unknown>(
  args: InferRequestType<typeof client.portfolio_memberships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.portfolio_memberships.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortfolioMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.portfolio_memberships.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portfolio_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortfolioMemberships<TError = unknown>(
  args: InferRequestType<typeof client.portfolio_memberships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.portfolio_memberships.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortfolioMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.portfolio_memberships.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portfolio_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPortfolioMembershipsPortfolioMembershipGidKey(
  args: InferRequestType<
    (typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']
  >,
) {
  return [
    'portfolio_memberships',
    '/portfolio_memberships/:portfolio_membership_gid',
    args,
  ] as const
}

export function useGetPortfolioMembershipsPortfolioMembershipGid<TError = unknown>(
  args: InferRequestType<
    (typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortfolioMembershipsPortfolioMembershipGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.portfolio_memberships[':portfolio_membership_gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortfolioMembershipsPortfolioMembershipGid<TError = unknown>(
  args: InferRequestType<
    (typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortfolioMembershipsPortfolioMembershipGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.portfolio_memberships[':portfolio_membership_gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPortfoliosKey(args: InferRequestType<typeof client.portfolios.$get>) {
  return ['portfolios', '/portfolios', args] as const
}

export function useGetPortfolios<TError = unknown>(
  args: InferRequestType<typeof client.portfolios.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortfoliosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portfolios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortfolios<TError = unknown>(
  args: InferRequestType<typeof client.portfolios.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortfoliosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portfolios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPortfoliosKey() {
  return ['portfolios', '/portfolios', 'POST'] as const
}

export function usePostPortfolios<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.portfolios.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfoliosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.portfolios.$post> }) =>
        parseResponse(client.portfolios.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPortfoliosPortfolioGidKey(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$get']>,
) {
  return ['portfolios', '/portfolios/:portfolio_gid', args] as const
}

export function useGetPortfoliosPortfolioGid<TError = unknown>(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortfoliosPortfolioGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portfolios[':portfolio_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortfoliosPortfolioGid<TError = unknown>(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortfoliosPortfolioGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portfolios[':portfolio_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPortfoliosPortfolioGidKey() {
  return ['portfolios', '/portfolios/:portfolio_gid', 'PUT'] as const
}

export function usePutPortfoliosPortfolioGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPortfoliosPortfolioGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$put']> },
      ) => parseResponse(client.portfolios[':portfolio_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePortfoliosPortfolioGidKey() {
  return ['portfolios', '/portfolios/:portfolio_gid', 'DELETE'] as const
}

export function useDeletePortfoliosPortfolioGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePortfoliosPortfolioGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$delete']> },
      ) => parseResponse(client.portfolios[':portfolio_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfoliosPortfolioGidAddCustomFieldSettingKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/addCustomFieldSetting', 'POST'] as const
}

export function usePostPortfoliosPortfolioGidAddCustomFieldSetting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolios)[':portfolio_gid']['addCustomFieldSetting']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addCustomFieldSetting']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfoliosPortfolioGidAddCustomFieldSettingKey()
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
            (typeof client.portfolios)[':portfolio_gid']['addCustomFieldSetting']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolios[':portfolio_gid'].addCustomFieldSetting.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfoliosPortfolioGidAddItemKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/addItem', 'POST'] as const
}

export function usePostPortfoliosPortfolioGidAddItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['addItem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addItem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfoliosPortfolioGidAddItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addItem']['$post']>
        },
      ) => parseResponse(client.portfolios[':portfolio_gid'].addItem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfoliosPortfolioGidAddMembersKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/addMembers', 'POST'] as const
}

export function usePostPortfoliosPortfolioGidAddMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['addMembers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addMembers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfoliosPortfolioGidAddMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addMembers']['$post']>
        },
      ) => parseResponse(client.portfolios[':portfolio_gid'].addMembers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPortfoliosPortfolioGidCustomFieldSettingsKey(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']
  >,
) {
  return ['portfolios', '/portfolios/:portfolio_gid/custom_field_settings', args] as const
}

export function useGetPortfoliosPortfolioGidCustomFieldSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']
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
        ? getGetPortfoliosPortfolioGidCustomFieldSettingsKey(args)
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
                (typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']
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
          client.portfolios[':portfolio_gid'].custom_field_settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortfoliosPortfolioGidCustomFieldSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']
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
        ? getGetPortfoliosPortfolioGidCustomFieldSettingsKey(args)
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
                (typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']
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
          client.portfolios[':portfolio_gid'].custom_field_settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPortfoliosPortfolioGidItemsKey(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>,
) {
  return ['portfolios', '/portfolios/:portfolio_gid/items', args] as const
}

export function useGetPortfoliosPortfolioGidItems<TError = unknown>(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortfoliosPortfolioGidItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.portfolios[':portfolio_gid'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortfoliosPortfolioGidItems<TError = unknown>(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPortfoliosPortfolioGidItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.portfolios[':portfolio_gid'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPortfoliosPortfolioGidPortfolioMembershipsKey(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']
  >,
) {
  return ['portfolios', '/portfolios/:portfolio_gid/portfolio_memberships', args] as const
}

export function useGetPortfoliosPortfolioGidPortfolioMemberships<TError = unknown>(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']
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
        ? getGetPortfoliosPortfolioGidPortfolioMembershipsKey(args)
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
                (typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']
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
          client.portfolios[':portfolio_gid'].portfolio_memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortfoliosPortfolioGidPortfolioMemberships<TError = unknown>(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']
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
        ? getGetPortfoliosPortfolioGidPortfolioMembershipsKey(args)
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
                (typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']
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
          client.portfolios[':portfolio_gid'].portfolio_memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPortfoliosPortfolioGidRemoveCustomFieldSettingKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/removeCustomFieldSetting', 'POST'] as const
}

export function usePostPortfoliosPortfolioGidRemoveCustomFieldSetting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolios)[':portfolio_gid']['removeCustomFieldSetting']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.portfolios)[':portfolio_gid']['removeCustomFieldSetting']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfoliosPortfolioGidRemoveCustomFieldSettingKey()
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
            (typeof client.portfolios)[':portfolio_gid']['removeCustomFieldSetting']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolios[':portfolio_gid'].removeCustomFieldSetting.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfoliosPortfolioGidRemoveItemKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/removeItem', 'POST'] as const
}

export function usePostPortfoliosPortfolioGidRemoveItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['removeItem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['removeItem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfoliosPortfolioGidRemoveItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['removeItem']['$post']>
        },
      ) => parseResponse(client.portfolios[':portfolio_gid'].removeItem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfoliosPortfolioGidRemoveMembersKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/removeMembers', 'POST'] as const
}

export function usePostPortfoliosPortfolioGidRemoveMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolios)[':portfolio_gid']['removeMembers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['removeMembers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfoliosPortfolioGidRemoveMembersKey()
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
            (typeof client.portfolios)[':portfolio_gid']['removeMembers']['$post']
          >
        },
      ) =>
        parseResponse(client.portfolios[':portfolio_gid'].removeMembers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectBriefsProjectBriefGidKey(
  args: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$get']>,
) {
  return ['project_briefs', '/project_briefs/:project_brief_gid', args] as const
}

export function useGetProjectBriefsProjectBriefGid<TError = unknown>(
  args: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectBriefsProjectBriefGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project_briefs[':project_brief_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectBriefsProjectBriefGid<TError = unknown>(
  args: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectBriefsProjectBriefGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project_briefs[':project_brief_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProjectBriefsProjectBriefGidKey() {
  return ['project_briefs', '/project_briefs/:project_brief_gid', 'PUT'] as const
}

export function usePutProjectBriefsProjectBriefGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectBriefsProjectBriefGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$put']> },
      ) => parseResponse(client.project_briefs[':project_brief_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectBriefsProjectBriefGidKey() {
  return ['project_briefs', '/project_briefs/:project_brief_gid', 'DELETE'] as const
}

export function useDeleteProjectBriefsProjectBriefGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectBriefsProjectBriefGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$delete']>
        },
      ) => parseResponse(client.project_briefs[':project_brief_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectMembershipsProjectMembershipGidKey(
  args: InferRequestType<(typeof client.project_memberships)[':project_membership_gid']['$get']>,
) {
  return ['project_memberships', '/project_memberships/:project_membership_gid', args] as const
}

export function useGetProjectMembershipsProjectMembershipGid<TError = unknown>(
  args: InferRequestType<(typeof client.project_memberships)[':project_membership_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project_memberships)[':project_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectMembershipsProjectMembershipGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project_memberships)[':project_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.project_memberships[':project_membership_gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectMembershipsProjectMembershipGid<TError = unknown>(
  args: InferRequestType<(typeof client.project_memberships)[':project_membership_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project_memberships)[':project_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectMembershipsProjectMembershipGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project_memberships)[':project_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.project_memberships[':project_membership_gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectStatusesProjectStatusGidKey(
  args: InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$get']>,
) {
  return ['project_statuses', '/project_statuses/:project_status_gid', args] as const
}

export function useGetProjectStatusesProjectStatusGid<TError = unknown>(
  args: InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_statuses)[':project_status_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectStatusesProjectStatusGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_statuses)[':project_status_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project_statuses[':project_status_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectStatusesProjectStatusGid<TError = unknown>(
  args: InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_statuses)[':project_status_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectStatusesProjectStatusGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_statuses)[':project_status_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project_statuses[':project_status_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectStatusesProjectStatusGidKey() {
  return ['project_statuses', '/project_statuses/:project_status_gid', 'DELETE'] as const
}

export function useDeleteProjectStatusesProjectStatusGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project_statuses)[':project_status_gid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectStatusesProjectStatusGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$delete']>
        },
      ) =>
        parseResponse(client.project_statuses[':project_status_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectTemplatesKey(
  args: InferRequestType<typeof client.project_templates.$get>,
) {
  return ['project_templates', '/project_templates', args] as const
}

export function useGetProjectTemplates<TError = unknown>(
  args: InferRequestType<typeof client.project_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.project_templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.project_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectTemplates<TError = unknown>(
  args: InferRequestType<typeof client.project_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.project_templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.project_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectTemplatesProjectTemplateGidKey(
  args: InferRequestType<(typeof client.project_templates)[':project_template_gid']['$get']>,
) {
  return ['project_templates', '/project_templates/:project_template_gid', args] as const
}

export function useGetProjectTemplatesProjectTemplateGid<TError = unknown>(
  args: InferRequestType<(typeof client.project_templates)[':project_template_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_templates)[':project_template_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectTemplatesProjectTemplateGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_templates)[':project_template_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project_templates[':project_template_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectTemplatesProjectTemplateGid<TError = unknown>(
  args: InferRequestType<(typeof client.project_templates)[':project_template_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_templates)[':project_template_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectTemplatesProjectTemplateGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project_templates)[':project_template_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project_templates[':project_template_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectTemplatesProjectTemplateGidInstantiateProjectKey() {
  return [
    'project_templates',
    '/project_templates/:project_template_gid/instantiateProject',
    'POST',
  ] as const
}

export function usePostProjectTemplatesProjectTemplateGidInstantiateProject<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project_templates)[':project_template_gid']['instantiateProject']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.project_templates)[':project_template_gid']['instantiateProject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectTemplatesProjectTemplateGidInstantiateProjectKey()
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
            (typeof client.project_templates)[':project_template_gid']['instantiateProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client.project_templates[':project_template_gid'].instantiateProject.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
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

export function getGetProjectsProjectGidKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['$get']>,
) {
  return ['projects', '/projects/:project_gid', args] as const
}

export function useGetProjectsProjectGid<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectGid<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectGidKey() {
  return ['projects', '/projects/:project_gid', 'PUT'] as const
}

export function usePutProjectsProjectGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_gid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':project_gid']['$put']> },
      ) => parseResponse(client.projects[':project_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectGidKey() {
  return ['projects', '/projects/:project_gid', 'DELETE'] as const
}

export function useDeleteProjectsProjectGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':project_gid']['$delete']> },
      ) => parseResponse(client.projects[':project_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectGidAddCustomFieldSettingKey() {
  return ['projects', '/projects/:project_gid/addCustomFieldSetting', 'POST'] as const
}

export function usePostProjectsProjectGidAddCustomFieldSetting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_gid']['addCustomFieldSetting']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['addCustomFieldSetting']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidAddCustomFieldSettingKey()
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
            (typeof client.projects)[':project_gid']['addCustomFieldSetting']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_gid'].addCustomFieldSetting.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectGidAddFollowersKey() {
  return ['projects', '/projects/:project_gid/addFollowers', 'POST'] as const
}

export function usePostProjectsProjectGidAddFollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['addFollowers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['addFollowers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidAddFollowersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':project_gid']['addFollowers']['$post']>
        },
      ) => parseResponse(client.projects[':project_gid'].addFollowers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectGidAddMembersKey() {
  return ['projects', '/projects/:project_gid/addMembers', 'POST'] as const
}

export function usePostProjectsProjectGidAddMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['addMembers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['addMembers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidAddMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':project_gid']['addMembers']['$post']>
        },
      ) => parseResponse(client.projects[':project_gid'].addMembers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectGidCustomFieldSettingsKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>,
) {
  return ['projects', '/projects/:project_gid/custom_field_settings', args] as const
}

export function useGetProjectsProjectGidCustomFieldSettings<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidCustomFieldSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':project_gid'].custom_field_settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectGidCustomFieldSettings<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidCustomFieldSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':project_gid'].custom_field_settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectGidDuplicateKey() {
  return ['projects', '/projects/:project_gid/duplicate', 'POST'] as const
}

export function usePostProjectsProjectGidDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':project_gid']['duplicate']['$post']>
        },
      ) => parseResponse(client.projects[':project_gid'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectGidProjectBriefsKey() {
  return ['projects', '/projects/:project_gid/project_briefs', 'POST'] as const
}

export function usePostProjectsProjectGidProjectBriefs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['project_briefs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['project_briefs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidProjectBriefsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':project_gid']['project_briefs']['$post']>
        },
      ) => parseResponse(client.projects[':project_gid'].project_briefs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectGidProjectMembershipsKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>,
) {
  return ['projects', '/projects/:project_gid/project_memberships', args] as const
}

export function useGetProjectsProjectGidProjectMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidProjectMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':project_gid'].project_memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectGidProjectMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidProjectMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':project_gid'].project_memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectGidProjectStatusesKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>,
) {
  return ['projects', '/projects/:project_gid/project_statuses', args] as const
}

export function useGetProjectsProjectGidProjectStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidProjectStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':project_gid'].project_statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectGidProjectStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidProjectStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':project_gid'].project_statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectGidProjectStatusesKey() {
  return ['projects', '/projects/:project_gid/project_statuses', 'POST'] as const
}

export function usePostProjectsProjectGidProjectStatuses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['project_statuses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['project_statuses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidProjectStatusesKey()
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
            (typeof client.projects)[':project_gid']['project_statuses']['$post']
          >
        },
      ) =>
        parseResponse(client.projects[':project_gid'].project_statuses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectGidRemoveCustomFieldSettingKey() {
  return ['projects', '/projects/:project_gid/removeCustomFieldSetting', 'POST'] as const
}

export function usePostProjectsProjectGidRemoveCustomFieldSetting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_gid']['removeCustomFieldSetting']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['removeCustomFieldSetting']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidRemoveCustomFieldSettingKey()
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
            (typeof client.projects)[':project_gid']['removeCustomFieldSetting']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_gid'].removeCustomFieldSetting.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectGidRemoveFollowersKey() {
  return ['projects', '/projects/:project_gid/removeFollowers', 'POST'] as const
}

export function usePostProjectsProjectGidRemoveFollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['removeFollowers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['removeFollowers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidRemoveFollowersKey()
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
            (typeof client.projects)[':project_gid']['removeFollowers']['$post']
          >
        },
      ) => parseResponse(client.projects[':project_gid'].removeFollowers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectGidRemoveMembersKey() {
  return ['projects', '/projects/:project_gid/removeMembers', 'POST'] as const
}

export function usePostProjectsProjectGidRemoveMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['removeMembers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['removeMembers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidRemoveMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':project_gid']['removeMembers']['$post']>
        },
      ) => parseResponse(client.projects[':project_gid'].removeMembers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectGidSaveAsTemplateKey() {
  return ['projects', '/projects/:project_gid/saveAsTemplate', 'POST'] as const
}

export function usePostProjectsProjectGidSaveAsTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['saveAsTemplate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['saveAsTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidSaveAsTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':project_gid']['saveAsTemplate']['$post']>
        },
      ) => parseResponse(client.projects[':project_gid'].saveAsTemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectGidSectionsKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['sections']['$get']>,
) {
  return ['projects', '/projects/:project_gid/sections', args] as const
}

export function useGetProjectsProjectGidSections<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['sections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['sections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidSectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['sections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_gid'].sections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectGidSections<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['sections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['sections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidSectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['sections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_gid'].sections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectGidSectionsKey() {
  return ['projects', '/projects/:project_gid/sections', 'POST'] as const
}

export function usePostProjectsProjectGidSections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['sections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['sections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidSectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.projects)[':project_gid']['sections']['$post']> },
      ) => parseResponse(client.projects[':project_gid'].sections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectGidSectionsInsertKey() {
  return ['projects', '/projects/:project_gid/sections/insert', 'POST'] as const
}

export function usePostProjectsProjectGidSectionsInsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_gid']['sections']['insert']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_gid']['sections']['insert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectGidSectionsInsertKey()
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
            (typeof client.projects)[':project_gid']['sections']['insert']['$post']
          >
        },
      ) => parseResponse(client.projects[':project_gid'].sections.insert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectGidTaskCountsKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['task_counts']['$get']>,
) {
  return ['projects', '/projects/:project_gid/task_counts', args] as const
}

export function useGetProjectsProjectGidTaskCounts<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['task_counts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['task_counts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidTaskCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['task_counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':project_gid'].task_counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectGidTaskCounts<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['task_counts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['task_counts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidTaskCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['task_counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':project_gid'].task_counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectGidTasksKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['tasks']['$get']>,
) {
  return ['projects', '/projects/:project_gid/tasks', args] as const
}

export function useGetProjectsProjectGidTasks<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_gid'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectGidTasks<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectGidTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':project_gid'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSectionsSectionGidKey(
  args: InferRequestType<(typeof client.sections)[':section_gid']['$get']>,
) {
  return ['sections', '/sections/:section_gid', args] as const
}

export function useGetSectionsSectionGid<TError = unknown>(
  args: InferRequestType<(typeof client.sections)[':section_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sections)[':section_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSectionsSectionGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sections)[':section_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sections[':section_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSectionsSectionGid<TError = unknown>(
  args: InferRequestType<(typeof client.sections)[':section_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sections)[':section_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSectionsSectionGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sections)[':section_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sections[':section_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSectionsSectionGidKey() {
  return ['sections', '/sections/:section_gid', 'PUT'] as const
}

export function usePutSectionsSectionGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':section_gid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sections)[':section_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSectionsSectionGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sections)[':section_gid']['$put']> },
      ) => parseResponse(client.sections[':section_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSectionsSectionGidKey() {
  return ['sections', '/sections/:section_gid', 'DELETE'] as const
}

export function useDeleteSectionsSectionGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sections)[':section_gid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sections)[':section_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSectionsSectionGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sections)[':section_gid']['$delete']> },
      ) => parseResponse(client.sections[':section_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSectionsSectionGidAddTaskKey() {
  return ['sections', '/sections/:section_gid/addTask', 'POST'] as const
}

export function usePostSectionsSectionGidAddTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sections)[':section_gid']['addTask']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sections)[':section_gid']['addTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSectionsSectionGidAddTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sections)[':section_gid']['addTask']['$post']> },
      ) => parseResponse(client.sections[':section_gid'].addTask.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSectionsSectionGidTasksKey(
  args: InferRequestType<(typeof client.sections)[':section_gid']['tasks']['$get']>,
) {
  return ['sections', '/sections/:section_gid/tasks', args] as const
}

export function useGetSectionsSectionGidTasks<TError = unknown>(
  args: InferRequestType<(typeof client.sections)[':section_gid']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sections)[':section_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSectionsSectionGidTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sections)[':section_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sections[':section_gid'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSectionsSectionGidTasks<TError = unknown>(
  args: InferRequestType<(typeof client.sections)[':section_gid']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sections)[':section_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSectionsSectionGidTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sections)[':section_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sections[':section_gid'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusUpdatesKey(args: InferRequestType<typeof client.status_updates.$get>) {
  return ['status_updates', '/status_updates', args] as const
}

export function useGetStatusUpdates<TError = unknown>(
  args: InferRequestType<typeof client.status_updates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusUpdatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusUpdates<TError = unknown>(
  args: InferRequestType<typeof client.status_updates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusUpdatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStatusUpdatesKey() {
  return ['status_updates', '/status_updates', 'POST'] as const
}

export function usePostStatusUpdates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.status_updates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatusUpdatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.status_updates.$post> }) =>
        parseResponse(client.status_updates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatusUpdatesStatusGidKey(
  args: InferRequestType<(typeof client.status_updates)[':status_gid']['$get']>,
) {
  return ['status_updates', '/status_updates/:status_gid', args] as const
}

export function useGetStatusUpdatesStatusGid<TError = unknown>(
  args: InferRequestType<(typeof client.status_updates)[':status_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_updates)[':status_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatusUpdatesStatusGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_updates)[':status_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_updates[':status_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusUpdatesStatusGid<TError = unknown>(
  args: InferRequestType<(typeof client.status_updates)[':status_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_updates)[':status_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatusUpdatesStatusGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.status_updates)[':status_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status_updates[':status_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteStatusUpdatesStatusGidKey() {
  return ['status_updates', '/status_updates/:status_gid', 'DELETE'] as const
}

export function useDeleteStatusUpdatesStatusGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.status_updates)[':status_gid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.status_updates)[':status_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStatusUpdatesStatusGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.status_updates)[':status_gid']['$delete']> },
      ) => parseResponse(client.status_updates[':status_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoriesStoryGidKey(
  args: InferRequestType<(typeof client.stories)[':story_gid']['$get']>,
) {
  return ['stories', '/stories/:story_gid', args] as const
}

export function useGetStoriesStoryGid<TError = unknown>(
  args: InferRequestType<(typeof client.stories)[':story_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoriesStoryGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stories[':story_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoriesStoryGid<TError = unknown>(
  args: InferRequestType<(typeof client.stories)[':story_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoriesStoryGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stories[':story_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStoriesStoryGidKey() {
  return ['stories', '/stories/:story_gid', 'PUT'] as const
}

export function usePutStoriesStoryGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stories)[':story_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStoriesStoryGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stories)[':story_gid']['$put']> },
      ) => parseResponse(client.stories[':story_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStoriesStoryGidKey() {
  return ['stories', '/stories/:story_gid', 'DELETE'] as const
}

export function useDeleteStoriesStoryGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stories)[':story_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStoriesStoryGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stories)[':story_gid']['$delete']> },
      ) => parseResponse(client.stories[':story_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsKey(args: InferRequestType<typeof client.tags.$get>) {
  return ['tags', '/tags', args] as const
}

export function useGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTagsKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function usePostTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.$post> }) =>
        parseResponse(client.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsTagGidKey(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['$get']>,
) {
  return ['tags', '/tags/:tag_gid', args] as const
}

export function useGetTagsTagGid<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsTagGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tag_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagGid<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsTagGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tag_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTagsTagGidKey() {
  return ['tags', '/tags/:tag_gid', 'PUT'] as const
}

export function usePutTagsTagGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tag_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTagsTagGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':tag_gid']['$put']> },
      ) => parseResponse(client.tags[':tag_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsTagGidKey() {
  return ['tags', '/tags/:tag_gid', 'DELETE'] as const
}

export function useDeleteTagsTagGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tag_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsTagGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':tag_gid']['$delete']> },
      ) => parseResponse(client.tags[':tag_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsTagGidTasksKey(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['tasks']['$get']>,
) {
  return ['tags', '/tags/:tag_gid/tasks', args] as const
}

export function useGetTagsTagGidTasks<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsTagGidTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tag_gid'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagGidTasks<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsTagGidTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag_gid']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tag_gid'].tasks.$get(args, clientOptions)),
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

export function getPostTasksKey() {
  return ['tasks', '/tasks', 'POST'] as const
}

export function usePostTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tasks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tasks.$post> }) =>
        parseResponse(client.tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskGidKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid', args] as const
}

export function useGetTasksTaskGid<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksTaskGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskGid<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksTaskGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTasksTaskGidKey() {
  return ['tasks', '/tasks/:task_gid', 'PUT'] as const
}

export function usePutTasksTaskGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksTaskGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['$put']> },
      ) => parseResponse(client.tasks[':task_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTasksTaskGidKey() {
  return ['tasks', '/tasks/:task_gid', 'DELETE'] as const
}

export function useDeleteTasksTaskGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTasksTaskGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['$delete']> },
      ) => parseResponse(client.tasks[':task_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskGidAddDependenciesKey() {
  return ['tasks', '/tasks/:task_gid/addDependencies', 'POST'] as const
}

export function usePostTasksTaskGidAddDependencies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addDependencies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['addDependencies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidAddDependenciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tasks)[':task_gid']['addDependencies']['$post']>
        },
      ) => parseResponse(client.tasks[':task_gid'].addDependencies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskGidAddDependentsKey() {
  return ['tasks', '/tasks/:task_gid/addDependents', 'POST'] as const
}

export function usePostTasksTaskGidAddDependents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addDependents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['addDependents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidAddDependentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['addDependents']['$post']> },
      ) => parseResponse(client.tasks[':task_gid'].addDependents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskGidAddFollowersKey() {
  return ['tasks', '/tasks/:task_gid/addFollowers', 'POST'] as const
}

export function usePostTasksTaskGidAddFollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addFollowers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['addFollowers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidAddFollowersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['addFollowers']['$post']> },
      ) => parseResponse(client.tasks[':task_gid'].addFollowers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskGidAddProjectKey() {
  return ['tasks', '/tasks/:task_gid/addProject', 'POST'] as const
}

export function usePostTasksTaskGidAddProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addProject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['addProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidAddProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['addProject']['$post']> },
      ) => parseResponse(client.tasks[':task_gid'].addProject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskGidAddTagKey() {
  return ['tasks', '/tasks/:task_gid/addTag', 'POST'] as const
}

export function usePostTasksTaskGidAddTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addTag']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['addTag']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidAddTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['addTag']['$post']> },
      ) => parseResponse(client.tasks[':task_gid'].addTag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskGidDependenciesKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/dependencies', args] as const
}

export function useGetTasksTaskGidDependencies<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidDependenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].dependencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskGidDependencies<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidDependenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].dependencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTasksTaskGidDependentsKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependents']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/dependents', args] as const
}

export function useGetTasksTaskGidDependents<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidDependentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].dependents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskGidDependents<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidDependentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].dependents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksTaskGidDuplicateKey() {
  return ['tasks', '/tasks/:task_gid/duplicate', 'POST'] as const
}

export function usePostTasksTaskGidDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['duplicate']['$post']> },
      ) => parseResponse(client.tasks[':task_gid'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskGidProjectsKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['projects']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/projects', args] as const
}

export function useGetTasksTaskGidProjects<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskGidProjects<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksTaskGidRemoveDependenciesKey() {
  return ['tasks', '/tasks/:task_gid/removeDependencies', 'POST'] as const
}

export function usePostTasksTaskGidRemoveDependencies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeDependencies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['removeDependencies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidRemoveDependenciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tasks)[':task_gid']['removeDependencies']['$post']>
        },
      ) => parseResponse(client.tasks[':task_gid'].removeDependencies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskGidRemoveDependentsKey() {
  return ['tasks', '/tasks/:task_gid/removeDependents', 'POST'] as const
}

export function usePostTasksTaskGidRemoveDependents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeDependents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['removeDependents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidRemoveDependentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tasks)[':task_gid']['removeDependents']['$post']>
        },
      ) => parseResponse(client.tasks[':task_gid'].removeDependents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskGidRemoveFollowersKey() {
  return ['tasks', '/tasks/:task_gid/removeFollowers', 'POST'] as const
}

export function usePostTasksTaskGidRemoveFollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeFollowers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['removeFollowers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidRemoveFollowersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tasks)[':task_gid']['removeFollowers']['$post']>
        },
      ) => parseResponse(client.tasks[':task_gid'].removeFollowers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskGidRemoveProjectKey() {
  return ['tasks', '/tasks/:task_gid/removeProject', 'POST'] as const
}

export function usePostTasksTaskGidRemoveProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeProject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['removeProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidRemoveProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['removeProject']['$post']> },
      ) => parseResponse(client.tasks[':task_gid'].removeProject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskGidRemoveTagKey() {
  return ['tasks', '/tasks/:task_gid/removeTag', 'POST'] as const
}

export function usePostTasksTaskGidRemoveTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeTag']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['removeTag']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidRemoveTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['removeTag']['$post']> },
      ) => parseResponse(client.tasks[':task_gid'].removeTag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskGidSetParentKey() {
  return ['tasks', '/tasks/:task_gid/setParent', 'POST'] as const
}

export function usePostTasksTaskGidSetParent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['setParent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['setParent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidSetParentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['setParent']['$post']> },
      ) => parseResponse(client.tasks[':task_gid'].setParent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskGidStoriesKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/stories', args] as const
}

export function useGetTasksTaskGidStories<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['stories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidStoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['stories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].stories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskGidStories<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['stories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidStoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['stories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].stories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksTaskGidStoriesKey() {
  return ['tasks', '/tasks/:task_gid/stories', 'POST'] as const
}

export function usePostTasksTaskGidStories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['stories']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidStoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$post']> },
      ) => parseResponse(client.tasks[':task_gid'].stories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskGidSubtasksKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/subtasks', args] as const
}

export function useGetTasksTaskGidSubtasks<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidSubtasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].subtasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskGidSubtasks<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidSubtasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].subtasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksTaskGidSubtasksKey() {
  return ['tasks', '/tasks/:task_gid/subtasks', 'POST'] as const
}

export function usePostTasksTaskGidSubtasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['subtasks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskGidSubtasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$post']> },
      ) => parseResponse(client.tasks[':task_gid'].subtasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskGidTagsKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['tags']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/tags', args] as const
}

export function useGetTasksTaskGidTags<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskGidTags<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskGidTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_gid']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_gid'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamMembershipsKey(
  args: InferRequestType<typeof client.team_memberships.$get>,
) {
  return ['team_memberships', '/team_memberships', args] as const
}

export function useGetTeamMemberships<TError = unknown>(
  args: InferRequestType<typeof client.team_memberships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamMemberships<TError = unknown>(
  args: InferRequestType<typeof client.team_memberships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamMembershipsTeamMembershipGidKey(
  args: InferRequestType<(typeof client.team_memberships)[':team_membership_gid']['$get']>,
) {
  return ['team_memberships', '/team_memberships/:team_membership_gid', args] as const
}

export function useGetTeamMembershipsTeamMembershipGid<TError = unknown>(
  args: InferRequestType<(typeof client.team_memberships)[':team_membership_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team_memberships)[':team_membership_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamMembershipsTeamMembershipGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team_memberships)[':team_membership_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team_memberships[':team_membership_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamMembershipsTeamMembershipGid<TError = unknown>(
  args: InferRequestType<(typeof client.team_memberships)[':team_membership_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team_memberships)[':team_membership_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamMembershipsTeamMembershipGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team_memberships)[':team_membership_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.team_memberships[':team_membership_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTeamsKey() {
  return ['teams', '/teams', 'PUT'] as const
}

export function usePutTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.teams.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.teams.$put> }) =>
        parseResponse(client.teams.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTeamsKey() {
  return ['teams', '/teams', 'POST'] as const
}

export function usePostTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.teams.$post> }) =>
        parseResponse(client.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsTeamGidKey(
  args: InferRequestType<(typeof client.teams)[':team_gid']['$get']>,
) {
  return ['teams', '/teams/:team_gid', args] as const
}

export function useGetTeamsTeamGid<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsTeamGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamGid<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsTeamGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamsTeamGidAddUserKey() {
  return ['teams', '/teams/:team_gid/addUser', 'POST'] as const
}

export function usePostTeamsTeamGidAddUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_gid']['addUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':team_gid']['addUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsTeamGidAddUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teams)[':team_gid']['addUser']['$post']> },
      ) => parseResponse(client.teams[':team_gid'].addUser.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsTeamGidProjectTemplatesKey(
  args: InferRequestType<(typeof client.teams)[':team_gid']['project_templates']['$get']>,
) {
  return ['teams', '/teams/:team_gid/project_templates', args] as const
}

export function useGetTeamsTeamGidProjectTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['project_templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['project_templates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamGidProjectTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['project_templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.teams[':team_gid'].project_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamGidProjectTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['project_templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['project_templates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamGidProjectTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['project_templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.teams[':team_gid'].project_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamGidProjectsKey(
  args: InferRequestType<(typeof client.teams)[':team_gid']['projects']['$get']>,
) {
  return ['teams', '/teams/:team_gid/projects', args] as const
}

export function useGetTeamsTeamGidProjects<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamGidProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_gid'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamGidProjects<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamGidProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_gid'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamsTeamGidProjectsKey() {
  return ['teams', '/teams/:team_gid/projects', 'POST'] as const
}

export function usePostTeamsTeamGidProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_gid']['projects']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':team_gid']['projects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsTeamGidProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teams)[':team_gid']['projects']['$post']> },
      ) => parseResponse(client.teams[':team_gid'].projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTeamsTeamGidRemoveUserKey() {
  return ['teams', '/teams/:team_gid/removeUser', 'POST'] as const
}

export function usePostTeamsTeamGidRemoveUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['removeUser']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':team_gid']['removeUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsTeamGidRemoveUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.teams)[':team_gid']['removeUser']['$post']> },
      ) => parseResponse(client.teams[':team_gid'].removeUser.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsTeamGidTeamMembershipsKey(
  args: InferRequestType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>,
) {
  return ['teams', '/teams/:team_gid/team_memberships', args] as const
}

export function useGetTeamsTeamGidTeamMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamGidTeamMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.teams[':team_gid'].team_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamGidTeamMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamGidTeamMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.teams[':team_gid'].team_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamGidUsersKey(
  args: InferRequestType<(typeof client.teams)[':team_gid']['users']['$get']>,
) {
  return ['teams', '/teams/:team_gid/users', args] as const
}

export function useGetTeamsTeamGidUsers<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamGidUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_gid'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamGidUsers<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamGidUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_gid'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimePeriodsKey(args: InferRequestType<typeof client.time_periods.$get>) {
  return ['time_periods', '/time_periods', args] as const
}

export function useGetTimePeriods<TError = unknown>(
  args: InferRequestType<typeof client.time_periods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_periods.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimePeriodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_periods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_periods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimePeriods<TError = unknown>(
  args: InferRequestType<typeof client.time_periods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_periods.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimePeriodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_periods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_periods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimePeriodsTimePeriodGidKey(
  args: InferRequestType<(typeof client.time_periods)[':time_period_gid']['$get']>,
) {
  return ['time_periods', '/time_periods/:time_period_gid', args] as const
}

export function useGetTimePeriodsTimePeriodGid<TError = unknown>(
  args: InferRequestType<(typeof client.time_periods)[':time_period_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_periods)[':time_period_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTimePeriodsTimePeriodGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_periods)[':time_period_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_periods[':time_period_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimePeriodsTimePeriodGid<TError = unknown>(
  args: InferRequestType<(typeof client.time_periods)[':time_period_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_periods)[':time_period_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTimePeriodsTimePeriodGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.time_periods)[':time_period_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_periods[':time_period_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserTaskListsUserTaskListGidKey(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>,
) {
  return ['user_task_lists', '/user_task_lists/:user_task_list_gid', args] as const
}

export function useGetUserTaskListsUserTaskListGid<TError = unknown>(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserTaskListsUserTaskListGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_task_lists[':user_task_list_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserTaskListsUserTaskListGid<TError = unknown>(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserTaskListsUserTaskListGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_task_lists[':user_task_list_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserTaskListsUserTaskListGidTasksKey(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>,
) {
  return ['user_task_lists', '/user_task_lists/:user_task_list_gid/tasks', args] as const
}

export function useGetUserTaskListsUserTaskListGidTasks<TError = unknown>(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserTaskListsUserTaskListGidTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_task_lists[':user_task_list_gid'].tasks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserTaskListsUserTaskListGidTasks<TError = unknown>(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserTaskListsUserTaskListGidTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user_task_lists[':user_task_list_gid'].tasks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetUsersUserGidKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['$get']>,
) {
  return ['users', '/users/:user_gid', args] as const
}

export function useGetUsersUserGid<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserGid<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserGidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserGidFavoritesKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['favorites']['$get']>,
) {
  return ['users', '/users/:user_gid/favorites', args] as const
}

export function useGetUsersUserGidFavorites<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['favorites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['favorites']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserGidFavoritesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['favorites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_gid'].favorites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserGidFavorites<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['favorites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['favorites']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserGidFavoritesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['favorites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_gid'].favorites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserGidTeamMembershipsKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['team_memberships']['$get']>,
) {
  return ['users', '/users/:user_gid/team_memberships', args] as const
}

export function useGetUsersUserGidTeamMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['team_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['team_memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserGidTeamMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['team_memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_gid'].team_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserGidTeamMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['team_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['team_memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserGidTeamMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['team_memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_gid'].team_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserGidTeamsKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['teams']['$get']>,
) {
  return ['users', '/users/:user_gid/teams', args] as const
}

export function useGetUsersUserGidTeams<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['teams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserGidTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_gid'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserGidTeams<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['teams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserGidTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_gid'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserGidUserTaskListKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['user_task_list']['$get']>,
) {
  return ['users', '/users/:user_gid/user_task_list', args] as const
}

export function useGetUsersUserGidUserTaskList<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['user_task_list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['user_task_list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserGidUserTaskListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['user_task_list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_gid'].user_task_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserGidUserTaskList<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['user_task_list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['user_task_list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserGidUserTaskListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['user_task_list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_gid'].user_task_list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserGidWorkspaceMembershipsKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>,
) {
  return ['users', '/users/:user_gid/workspace_memberships', args] as const
}

export function useGetUsersUserGidWorkspaceMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserGidWorkspaceMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_gid'].workspace_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserGidWorkspaceMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserGidWorkspaceMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_gid'].workspace_memberships.$get(args, clientOptions)),
      restSwrOptions,
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

export function getGetWebhooksWebhookGidKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_gid', args] as const
}

export function useGetWebhooksWebhookGid<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookGid<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhooksWebhookGidKey() {
  return ['webhooks', '/webhooks/:webhook_gid', 'PUT'] as const
}

export function usePutWebhooksWebhookGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksWebhookGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$put']> },
      ) => parseResponse(client.webhooks[':webhook_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksWebhookGidKey() {
  return ['webhooks', '/webhooks/:webhook_gid', 'DELETE'] as const
}

export function useDeleteWebhooksWebhookGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_gid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksWebhookGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$delete']> },
      ) => parseResponse(client.webhooks[':webhook_gid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspaceMembershipsWorkspaceMembershipGidKey(
  args: InferRequestType<
    (typeof client.workspace_memberships)[':workspace_membership_gid']['$get']
  >,
) {
  return [
    'workspace_memberships',
    '/workspace_memberships/:workspace_membership_gid',
    args,
  ] as const
}

export function useGetWorkspaceMembershipsWorkspaceMembershipGid<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspace_memberships)[':workspace_membership_gid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspace_memberships)[':workspace_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceMembershipsWorkspaceMembershipGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspace_memberships)[':workspace_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workspace_memberships[':workspace_membership_gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceMembershipsWorkspaceMembershipGid<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspace_memberships)[':workspace_membership_gid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspace_memberships)[':workspace_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceMembershipsWorkspaceMembershipGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspace_memberships)[':workspace_membership_gid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workspace_memberships[':workspace_membership_gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesKey(args: InferRequestType<typeof client.workspaces.$get>) {
  return ['workspaces', '/workspaces', args] as const
}

export function useGetWorkspaces<TError = unknown>(
  args: InferRequestType<typeof client.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkspacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaces<TError = unknown>(
  args: InferRequestType<typeof client.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkspacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceGidKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid', args] as const
}

export function useGetWorkspacesWorkspaceGid<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceGid<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace_gid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWorkspacesWorkspaceGidKey() {
  return ['workspaces', '/workspaces/:workspace_gid', 'PUT'] as const
}

export function usePutWorkspacesWorkspaceGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace_gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkspacesWorkspaceGidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workspaces)[':workspace_gid']['$put']> },
      ) => parseResponse(client.workspaces[':workspace_gid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWorkspacesWorkspaceGidAddUserKey() {
  return ['workspaces', '/workspaces/:workspace_gid/addUser', 'POST'] as const
}

export function usePostWorkspacesWorkspaceGidAddUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['addUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace_gid']['addUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspacesWorkspaceGidAddUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.workspaces)[':workspace_gid']['addUser']['$post']>
        },
      ) => parseResponse(client.workspaces[':workspace_gid'].addUser.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceGidAuditLogEventsKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/audit_log_events', args] as const
}

export function useGetWorkspacesWorkspaceGidAuditLogEvents<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidAuditLogEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workspaces[':workspace_gid'].audit_log_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceGidAuditLogEvents<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidAuditLogEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workspaces[':workspace_gid'].audit_log_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceGidCustomFieldsKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/custom_fields', args] as const
}

export function useGetWorkspacesWorkspaceGidCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].custom_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceGidCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].custom_fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceGidProjectsKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/projects', args] as const
}

export function useGetWorkspacesWorkspaceGidProjects<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceGidProjects<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspacesWorkspaceGidProjectsKey() {
  return ['workspaces', '/workspaces/:workspace_gid/projects', 'POST'] as const
}

export function usePostWorkspacesWorkspaceGidProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspacesWorkspaceGidProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$post']>
        },
      ) => parseResponse(client.workspaces[':workspace_gid'].projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWorkspacesWorkspaceGidRemoveUserKey() {
  return ['workspaces', '/workspaces/:workspace_gid/removeUser', 'POST'] as const
}

export function usePostWorkspacesWorkspaceGidRemoveUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspacesWorkspaceGidRemoveUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>
        },
      ) => parseResponse(client.workspaces[':workspace_gid'].removeUser.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceGidTagsKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/tags', args] as const
}

export function useGetWorkspacesWorkspaceGidTags<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace_gid'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceGidTags<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace_gid'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspacesWorkspaceGidTagsKey() {
  return ['workspaces', '/workspaces/:workspace_gid/tags', 'POST'] as const
}

export function usePostWorkspacesWorkspaceGidTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspacesWorkspaceGidTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$post']> },
      ) => parseResponse(client.workspaces[':workspace_gid'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceGidTasksSearchKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/tasks/search', args] as const
}

export function useGetWorkspacesWorkspaceGidTasksSearch<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidTasksSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].tasks.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceGidTasksSearch<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidTasksSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].tasks.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceGidTeamsKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/teams', args] as const
}

export function useGetWorkspacesWorkspaceGidTeams<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceGidTeams<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceGidTypeaheadKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/typeahead', args] as const
}

export function useGetWorkspacesWorkspaceGidTypeahead<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidTypeaheadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].typeahead.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceGidTypeahead<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidTypeaheadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].typeahead.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceGidUsersKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/users', args] as const
}

export function useGetWorkspacesWorkspaceGidUsers<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceGidUsers<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceGidUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace_gid'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceGidWorkspaceMembershipsKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace_gid/workspace_memberships', args] as const
}

export function useGetWorkspacesWorkspaceGidWorkspaceMemberships<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']
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
        ? getGetWorkspacesWorkspaceGidWorkspaceMembershipsKey(args)
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
                (typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']
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
          client.workspaces[':workspace_gid'].workspace_memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceGidWorkspaceMemberships<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']
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
        ? getGetWorkspacesWorkspaceGidWorkspaceMembershipsKey(args)
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
                (typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']
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
          client.workspaces[':workspace_gid'].workspace_memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
