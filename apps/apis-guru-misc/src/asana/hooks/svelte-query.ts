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

export function getAttachmentsQueryKey(args: InferRequestType<typeof client.attachments.$get>) {
  return ['attachments', '/attachments', args] as const
}

export function getAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.attachments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAttachmentsQueryKey>
  >({
    queryKey: getAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attachments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAttachments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.attachments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAttachmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAttachmentsMutationKey() {
  return ['attachments', '/attachments', 'POST'] as const
}

export function getPostAttachmentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$post>>>>>,
    TError,
    InferRequestType<typeof client.attachments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAttachmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.attachments.$post>) {
      return parseResponse(client.attachments.$post(args, options))
    },
  })
}

export function createPostAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.attachments.$post>,
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
    const mutationDefaults = getPostAttachmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAttachmentsAttachmentGidQueryKey(
  args: InferRequestType<(typeof client.attachments)[':attachment_gid']['$get']>,
) {
  return ['attachments', '/attachments/:attachment_gid', args] as const
}

export function getAttachmentsAttachmentGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attachments)[':attachment_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attachments)[':attachment_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachments)[':attachment_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttachmentsAttachmentGidQueryKey>
  >({
    queryKey: getAttachmentsAttachmentGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attachments[':attachment_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttachmentsAttachmentGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attachments)[':attachment_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.attachments)[':attachment_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attachments)[':attachment_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttachmentsAttachmentGidQueryKey>
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
      ...getAttachmentsAttachmentGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAttachmentsAttachmentGidMutationKey() {
  return ['attachments', '/attachments/:attachment_gid', 'DELETE'] as const
}

export function getDeleteAttachmentsAttachmentGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachments)[':attachment_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attachments)[':attachment_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttachmentsAttachmentGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attachments)[':attachment_gid']['$delete']>,
    ) {
      return parseResponse(client.attachments[':attachment_gid'].$delete(args, options))
    },
  })
}

export function createDeleteAttachmentsAttachmentGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attachments)[':attachment_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.attachments)[':attachment_gid']['$delete']>,
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
    const mutationDefaults = getDeleteAttachmentsAttachmentGidMutationOptions<
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

export function getPostBatchMutationKey() {
  return ['batch', '/batch', 'POST'] as const
}

export function getPostBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
    TError,
    InferRequestType<typeof client.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.batch.$post>) {
      return parseResponse(client.batch.$post(args, options))
    },
  })
}

export function createPostBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
        TError,
        InferRequestType<typeof client.batch.$post>,
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
    const mutationDefaults = getPostBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCustomFieldsMutationKey() {
  return ['custom_fields', '/custom_fields', 'POST'] as const
}

export function getPostCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_fields.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.custom_fields.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomFieldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.custom_fields.$post>) {
      return parseResponse(client.custom_fields.$post(args, options))
    },
  })
}

export function createPostCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_fields.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.custom_fields.$post>,
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
    const mutationDefaults = getPostCustomFieldsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomFieldsCustomFieldGidQueryKey(
  args: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$get']>,
) {
  return ['custom_fields', '/custom_fields/:custom_field_gid', args] as const
}

export function getCustomFieldsCustomFieldGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomFieldsCustomFieldGidQueryKey>
  >({
    queryKey: getCustomFieldsCustomFieldGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custom_fields[':custom_field_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomFieldsCustomFieldGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomFieldsCustomFieldGidQueryKey>
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
      ...getCustomFieldsCustomFieldGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomFieldsCustomFieldGidMutationKey() {
  return ['custom_fields', '/custom_fields/:custom_field_gid', 'PUT'] as const
}

export function getPutCustomFieldsCustomFieldGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomFieldsCustomFieldGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$put']>,
    ) {
      return parseResponse(client.custom_fields[':custom_field_gid'].$put(args, options))
    },
  })
}

export function createPutCustomFieldsCustomFieldGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$put']>,
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
    const mutationDefaults = getPutCustomFieldsCustomFieldGidMutationOptions<
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

export function getDeleteCustomFieldsCustomFieldGidMutationKey() {
  return ['custom_fields', '/custom_fields/:custom_field_gid', 'DELETE'] as const
}

export function getDeleteCustomFieldsCustomFieldGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomFieldsCustomFieldGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$delete']>,
    ) {
      return parseResponse(client.custom_fields[':custom_field_gid'].$delete(args, options))
    },
  })
}

export function createDeleteCustomFieldsCustomFieldGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.custom_fields)[':custom_field_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$delete']>,
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
    const mutationDefaults = getDeleteCustomFieldsCustomFieldGidMutationOptions<
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

export function getPostCustomFieldsCustomFieldGidEnumOptionsMutationKey() {
  return ['custom_fields', '/custom_fields/:custom_field_gid/enum_options', 'POST'] as const
}

export function getPostCustomFieldsCustomFieldGidEnumOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['enum_options']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomFieldsCustomFieldGidEnumOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.custom_fields)[':custom_field_gid']['enum_options']['$post']
      >,
    ) {
      return parseResponse(
        client.custom_fields[':custom_field_gid'].enum_options.$post(args, options),
      )
    },
  })
}

export function createPostCustomFieldsCustomFieldGidEnumOptions<
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
                  (typeof client.custom_fields)[':custom_field_gid']['enum_options']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.custom_fields)[':custom_field_gid']['enum_options']['$post']
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
    const mutationDefaults = getPostCustomFieldsCustomFieldGidEnumOptionsMutationOptions<
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

export function getPostCustomFieldsCustomFieldGidEnumOptionsInsertMutationKey() {
  return ['custom_fields', '/custom_fields/:custom_field_gid/enum_options/insert', 'POST'] as const
}

export function getPostCustomFieldsCustomFieldGidEnumOptionsInsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.custom_fields)[':custom_field_gid']['enum_options']['insert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCustomFieldsCustomFieldGidEnumOptionsInsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.custom_fields)[':custom_field_gid']['enum_options']['insert']['$post']
      >,
    ) {
      return parseResponse(
        client.custom_fields[':custom_field_gid'].enum_options.insert.$post(args, options),
      )
    },
  })
}

export function createPostCustomFieldsCustomFieldGidEnumOptionsInsert<
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
                  (typeof client.custom_fields)[':custom_field_gid']['enum_options']['insert']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.custom_fields)[':custom_field_gid']['enum_options']['insert']['$post']
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
    const mutationDefaults = getPostCustomFieldsCustomFieldGidEnumOptionsInsertMutationOptions<
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

export function getPutEnumOptionsEnumOptionGidMutationKey() {
  return ['enum_options', '/enum_options/:enum_option_gid', 'PUT'] as const
}

export function getPutEnumOptionsEnumOptionGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enum_options)[':enum_option_gid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enum_options)[':enum_option_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEnumOptionsEnumOptionGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.enum_options)[':enum_option_gid']['$put']>,
    ) {
      return parseResponse(client.enum_options[':enum_option_gid'].$put(args, options))
    },
  })
}

export function createPutEnumOptionsEnumOptionGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enum_options)[':enum_option_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.enum_options)[':enum_option_gid']['$put']>,
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
    const mutationDefaults = getPutEnumOptionsEnumOptionGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGoalRelationshipsQueryKey(
  args: InferRequestType<typeof client.goal_relationships.$get>,
) {
  return ['goal_relationships', '/goal_relationships', args] as const
}

export function getGoalRelationshipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goal_relationships.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.goal_relationships.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goal_relationships.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGoalRelationshipsQueryKey>
  >({
    queryKey: getGoalRelationshipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.goal_relationships.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGoalRelationships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goal_relationships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.goal_relationships.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.goal_relationships.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoalRelationshipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGoalRelationshipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGoalRelationshipsGoalRelationshipGidQueryKey(
  args: InferRequestType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>,
) {
  return ['goal_relationships', '/goal_relationships/:goal_relationship_gid', args] as const
}

export function getGoalRelationshipsGoalRelationshipGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGoalRelationshipsGoalRelationshipGidQueryKey>
  >({
    queryKey: getGoalRelationshipsGoalRelationshipGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.goal_relationships[':goal_relationship_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGoalRelationshipsGoalRelationshipGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.goal_relationships)[':goal_relationship_gid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoalRelationshipsGoalRelationshipGidQueryKey>
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
      ...getGoalRelationshipsGoalRelationshipGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutGoalRelationshipsGoalRelationshipGidMutationKey() {
  return ['goal_relationships', '/goal_relationships/:goal_relationship_gid', 'PUT'] as const
}

export function getPutGoalRelationshipsGoalRelationshipGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goal_relationships)[':goal_relationship_gid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.goal_relationships)[':goal_relationship_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGoalRelationshipsGoalRelationshipGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.goal_relationships)[':goal_relationship_gid']['$put']>,
    ) {
      return parseResponse(client.goal_relationships[':goal_relationship_gid'].$put(args, options))
    },
  })
}

export function createPutGoalRelationshipsGoalRelationshipGid<
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
                ReturnType<(typeof client.goal_relationships)[':goal_relationship_gid']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.goal_relationships)[':goal_relationship_gid']['$put']>,
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
    const mutationDefaults = getPutGoalRelationshipsGoalRelationshipGidMutationOptions<
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

export function getGoalsQueryKey(args: InferRequestType<typeof client.goals.$get>) {
  return ['goals', '/goals', args] as const
}

export function getGoalsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.goals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGoalsQueryKey>
  >({
    queryKey: getGoalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.goals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGoals<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.goals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGoalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGoalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostGoalsMutationKey() {
  return ['goals', '/goals', 'POST'] as const
}

export function getPostGoalsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$post>>>>>,
    TError,
    InferRequestType<typeof client.goals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGoalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.goals.$post>) {
      return parseResponse(client.goals.$post(args, options))
    },
  })
}

export function createPostGoals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.goals.$post>>>>>,
        TError,
        InferRequestType<typeof client.goals.$post>,
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
    const mutationDefaults = getPostGoalsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGoalsGoalGidQueryKey(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['$get']>,
) {
  return ['goals', '/goals/:goal_gid', args] as const
}

export function getGoalsGoalGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGoalsGoalGidQueryKey>
  >({
    queryKey: getGoalsGoalGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.goals[':goal_gid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGoalsGoalGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.goals)[':goal_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoalsGoalGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGoalsGoalGidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutGoalsGoalGidMutationKey() {
  return ['goals', '/goals/:goal_gid', 'PUT'] as const
}

export function getPutGoalsGoalGidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.goals)[':goal_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGoalsGoalGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.goals)[':goal_gid']['$put']>) {
      return parseResponse(client.goals[':goal_gid'].$put(args, options))
    },
  })
}

export function createPutGoalsGoalGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.goals)[':goal_gid']['$put']>,
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
    const mutationDefaults = getPutGoalsGoalGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteGoalsGoalGidMutationKey() {
  return ['goals', '/goals/:goal_gid', 'DELETE'] as const
}

export function getDeleteGoalsGoalGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.goals)[':goal_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGoalsGoalGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.goals)[':goal_gid']['$delete']>) {
      return parseResponse(client.goals[':goal_gid'].$delete(args, options))
    },
  })
}

export function createDeleteGoalsGoalGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.goals)[':goal_gid']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.goals)[':goal_gid']['$delete']>,
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
    const mutationDefaults = getDeleteGoalsGoalGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGoalsGoalGidAddFollowersMutationKey() {
  return ['goals', '/goals/:goal_gid/addFollowers', 'POST'] as const
}

export function getPostGoalsGoalGidAddFollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['addFollowers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.goals)[':goal_gid']['addFollowers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGoalsGoalGidAddFollowersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.goals)[':goal_gid']['addFollowers']['$post']>,
    ) {
      return parseResponse(client.goals[':goal_gid'].addFollowers.$post(args, options))
    },
  })
}

export function createPostGoalsGoalGidAddFollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.goals)[':goal_gid']['addFollowers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.goals)[':goal_gid']['addFollowers']['$post']>,
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
    const mutationDefaults = getPostGoalsGoalGidAddFollowersMutationOptions<
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

export function getPostGoalsGoalGidAddSupportingRelationshipMutationKey() {
  return ['goals', '/goals/:goal_gid/addSupportingRelationship', 'POST'] as const
}

export function getPostGoalsGoalGidAddSupportingRelationshipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.goals)[':goal_gid']['addSupportingRelationship']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGoalsGoalGidAddSupportingRelationshipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.goals)[':goal_gid']['addSupportingRelationship']['$post']
      >,
    ) {
      return parseResponse(client.goals[':goal_gid'].addSupportingRelationship.$post(args, options))
    },
  })
}

export function createPostGoalsGoalGidAddSupportingRelationship<
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
                ReturnType<(typeof client.goals)[':goal_gid']['addSupportingRelationship']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.goals)[':goal_gid']['addSupportingRelationship']['$post']>,
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
    const mutationDefaults = getPostGoalsGoalGidAddSupportingRelationshipMutationOptions<
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

export function getGoalsGoalGidParentGoalsQueryKey(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>,
) {
  return ['goals', '/goals/:goal_gid/parentGoals', args] as const
}

export function getGoalsGoalGidParentGoalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGoalsGoalGidParentGoalsQueryKey>
  >({
    queryKey: getGoalsGoalGidParentGoalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.goals[':goal_gid'].parentGoals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGoalsGoalGidParentGoals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoalsGoalGidParentGoalsQueryKey>
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
      ...getGoalsGoalGidParentGoalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostGoalsGoalGidRemoveFollowersMutationKey() {
  return ['goals', '/goals/:goal_gid/removeFollowers', 'POST'] as const
}

export function getPostGoalsGoalGidRemoveFollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['removeFollowers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.goals)[':goal_gid']['removeFollowers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGoalsGoalGidRemoveFollowersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.goals)[':goal_gid']['removeFollowers']['$post']>,
    ) {
      return parseResponse(client.goals[':goal_gid'].removeFollowers.$post(args, options))
    },
  })
}

export function createPostGoalsGoalGidRemoveFollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.goals)[':goal_gid']['removeFollowers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.goals)[':goal_gid']['removeFollowers']['$post']>,
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
    const mutationDefaults = getPostGoalsGoalGidRemoveFollowersMutationOptions<
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

export function getPostGoalsGoalGidRemoveSupportingRelationshipMutationKey() {
  return ['goals', '/goals/:goal_gid/removeSupportingRelationship', 'POST'] as const
}

export function getPostGoalsGoalGidRemoveSupportingRelationshipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.goals)[':goal_gid']['removeSupportingRelationship']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGoalsGoalGidRemoveSupportingRelationshipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.goals)[':goal_gid']['removeSupportingRelationship']['$post']
      >,
    ) {
      return parseResponse(
        client.goals[':goal_gid'].removeSupportingRelationship.$post(args, options),
      )
    },
  })
}

export function createPostGoalsGoalGidRemoveSupportingRelationship<
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
                  (typeof client.goals)[':goal_gid']['removeSupportingRelationship']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.goals)[':goal_gid']['removeSupportingRelationship']['$post']
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
    const mutationDefaults = getPostGoalsGoalGidRemoveSupportingRelationshipMutationOptions<
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

export function getPostGoalsGoalGidSetMetricMutationKey() {
  return ['goals', '/goals/:goal_gid/setMetric', 'POST'] as const
}

export function getPostGoalsGoalGidSetMetricMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['setMetric']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.goals)[':goal_gid']['setMetric']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGoalsGoalGidSetMetricMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.goals)[':goal_gid']['setMetric']['$post']>,
    ) {
      return parseResponse(client.goals[':goal_gid'].setMetric.$post(args, options))
    },
  })
}

export function createPostGoalsGoalGidSetMetric<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.goals)[':goal_gid']['setMetric']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.goals)[':goal_gid']['setMetric']['$post']>,
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
    const mutationDefaults = getPostGoalsGoalGidSetMetricMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGoalsGoalGidSetMetricCurrentValueMutationKey() {
  return ['goals', '/goals/:goal_gid/setMetricCurrentValue', 'POST'] as const
}

export function getPostGoalsGoalGidSetMetricCurrentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.goals)[':goal_gid']['setMetricCurrentValue']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.goals)[':goal_gid']['setMetricCurrentValue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGoalsGoalGidSetMetricCurrentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.goals)[':goal_gid']['setMetricCurrentValue']['$post']>,
    ) {
      return parseResponse(client.goals[':goal_gid'].setMetricCurrentValue.$post(args, options))
    },
  })
}

export function createPostGoalsGoalGidSetMetricCurrentValue<
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
                ReturnType<(typeof client.goals)[':goal_gid']['setMetricCurrentValue']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.goals)[':goal_gid']['setMetricCurrentValue']['$post']>,
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
    const mutationDefaults = getPostGoalsGoalGidSetMetricCurrentValueMutationOptions<
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

export function getJobsJobGidQueryKey(
  args: InferRequestType<(typeof client.jobs)[':job_gid']['$get']>,
) {
  return ['jobs', '/jobs/:job_gid', args] as const
}

export function getJobsJobGidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_gid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':job_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobGidQueryKey>
  >({
    queryKey: getJobsJobGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':job_gid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJobsJobGid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_gid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':job_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsJobGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsJobGidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostOrganizationExportsMutationKey() {
  return ['organization_exports', '/organization_exports', 'POST'] as const
}

export function getPostOrganizationExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_exports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization_exports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationExportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization_exports.$post>) {
      return parseResponse(client.organization_exports.$post(args, options))
    },
  })
}

export function createPostOrganizationExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization_exports.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization_exports.$post>,
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
    const mutationDefaults = getPostOrganizationExportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationExportsOrganizationExportGidQueryKey(
  args: InferRequestType<(typeof client.organization_exports)[':organization_export_gid']['$get']>,
) {
  return ['organization_exports', '/organization_exports/:organization_export_gid', args] as const
}

export function getOrganizationExportsOrganizationExportGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization_exports)[':organization_export_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization_exports)[':organization_export_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organization_exports)[':organization_export_gid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationExportsOrganizationExportGidQueryKey>
  >({
    queryKey: getOrganizationExportsOrganizationExportGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization_exports[':organization_export_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationExportsOrganizationExportGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization_exports)[':organization_export_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organization_exports)[':organization_export_gid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organization_exports)[':organization_export_gid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationExportsOrganizationExportGidQueryKey>
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
      ...getOrganizationExportsOrganizationExportGidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPortfolioMembershipsQueryKey(
  args: InferRequestType<typeof client.portfolio_memberships.$get>,
) {
  return ['portfolio_memberships', '/portfolio_memberships', args] as const
}

export function getPortfolioMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio_memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.portfolio_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio_memberships.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortfolioMembershipsQueryKey>
  >({
    queryKey: getPortfolioMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.portfolio_memberships.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPortfolioMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio_memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.portfolio_memberships.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.portfolio_memberships.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortfolioMembershipsQueryKey>
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
      ...getPortfolioMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPortfolioMembershipsPortfolioMembershipGidQueryKey(
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

export function getPortfolioMembershipsPortfolioMembershipGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortfolioMembershipsPortfolioMembershipGidQueryKey>
  >({
    queryKey: getPortfolioMembershipsPortfolioMembershipGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.portfolio_memberships[':portfolio_membership_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPortfolioMembershipsPortfolioMembershipGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortfolioMembershipsPortfolioMembershipGidQueryKey>
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
      ...getPortfolioMembershipsPortfolioMembershipGidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPortfoliosQueryKey(args: InferRequestType<typeof client.portfolios.$get>) {
  return ['portfolios', '/portfolios', args] as const
}

export function getPortfoliosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.portfolios.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPortfoliosQueryKey>
  >({
    queryKey: getPortfoliosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.portfolios.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPortfolios<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.portfolios.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPortfoliosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPortfoliosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPortfoliosMutationKey() {
  return ['portfolios', '/portfolios', 'POST'] as const
}

export function getPostPortfoliosMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$post>>>>>,
    TError,
    InferRequestType<typeof client.portfolios.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfoliosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portfolios.$post>) {
      return parseResponse(client.portfolios.$post(args, options))
    },
  })
}

export function createPostPortfolios<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolios.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.portfolios.$post>,
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
    const mutationDefaults = getPostPortfoliosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPortfoliosPortfolioGidQueryKey(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$get']>,
) {
  return ['portfolios', '/portfolios/:portfolio_gid', args] as const
}

export function getPortfoliosPortfolioGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortfoliosPortfolioGidQueryKey>
  >({
    queryKey: getPortfoliosPortfolioGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.portfolios[':portfolio_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPortfoliosPortfolioGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortfoliosPortfolioGidQueryKey>
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
      ...getPortfoliosPortfolioGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutPortfoliosPortfolioGidMutationKey() {
  return ['portfolios', '/portfolios/:portfolio_gid', 'PUT'] as const
}

export function getPutPortfoliosPortfolioGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPortfoliosPortfolioGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$put']>) {
      return parseResponse(client.portfolios[':portfolio_gid'].$put(args, options))
    },
  })
}

export function createPutPortfoliosPortfolioGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$put']>,
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
    const mutationDefaults = getPutPortfoliosPortfolioGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeletePortfoliosPortfolioGidMutationKey() {
  return ['portfolios', '/portfolios/:portfolio_gid', 'DELETE'] as const
}

export function getDeletePortfoliosPortfolioGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePortfoliosPortfolioGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$delete']>,
    ) {
      return parseResponse(client.portfolios[':portfolio_gid'].$delete(args, options))
    },
  })
}

export function createDeletePortfoliosPortfolioGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$delete']>,
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
    const mutationDefaults = getDeletePortfoliosPortfolioGidMutationOptions<
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

export function getPostPortfoliosPortfolioGidAddCustomFieldSettingMutationKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/addCustomFieldSetting', 'POST'] as const
}

export function getPostPortfoliosPortfolioGidAddCustomFieldSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.portfolios)[':portfolio_gid']['addCustomFieldSetting']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfoliosPortfolioGidAddCustomFieldSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolios)[':portfolio_gid']['addCustomFieldSetting']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolios[':portfolio_gid'].addCustomFieldSetting.$post(args, options),
      )
    },
  })
}

export function createPostPortfoliosPortfolioGidAddCustomFieldSetting<
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
                  (typeof client.portfolios)[':portfolio_gid']['addCustomFieldSetting']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.portfolios)[':portfolio_gid']['addCustomFieldSetting']['$post']
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
    const mutationDefaults = getPostPortfoliosPortfolioGidAddCustomFieldSettingMutationOptions<
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

export function getPostPortfoliosPortfolioGidAddItemMutationKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/addItem', 'POST'] as const
}

export function getPostPortfoliosPortfolioGidAddItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['addItem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addItem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfoliosPortfolioGidAddItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addItem']['$post']>,
    ) {
      return parseResponse(client.portfolios[':portfolio_gid'].addItem.$post(args, options))
    },
  })
}

export function createPostPortfoliosPortfolioGidAddItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['addItem']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addItem']['$post']>,
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
    const mutationDefaults = getPostPortfoliosPortfolioGidAddItemMutationOptions<
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

export function getPostPortfoliosPortfolioGidAddMembersMutationKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/addMembers', 'POST'] as const
}

export function getPostPortfoliosPortfolioGidAddMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['addMembers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addMembers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfoliosPortfolioGidAddMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addMembers']['$post']>,
    ) {
      return parseResponse(client.portfolios[':portfolio_gid'].addMembers.$post(args, options))
    },
  })
}

export function createPostPortfoliosPortfolioGidAddMembers<
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
                ReturnType<(typeof client.portfolios)[':portfolio_gid']['addMembers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addMembers']['$post']>,
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
    const mutationDefaults = getPostPortfoliosPortfolioGidAddMembersMutationOptions<
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

export function getPortfoliosPortfolioGidCustomFieldSettingsQueryKey(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']
  >,
) {
  return ['portfolios', '/portfolios/:portfolio_gid/custom_field_settings', args] as const
}

export function getPortfoliosPortfolioGidCustomFieldSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPortfoliosPortfolioGidCustomFieldSettingsQueryKey>
  >({
    queryKey: getPortfoliosPortfolioGidCustomFieldSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.portfolios[':portfolio_gid'].custom_field_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPortfoliosPortfolioGidCustomFieldSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPortfoliosPortfolioGidCustomFieldSettingsQueryKey>
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
      ...getPortfoliosPortfolioGidCustomFieldSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPortfoliosPortfolioGidItemsQueryKey(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>,
) {
  return ['portfolios', '/portfolios/:portfolio_gid/items', args] as const
}

export function getPortfoliosPortfolioGidItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortfoliosPortfolioGidItemsQueryKey>
  >({
    queryKey: getPortfoliosPortfolioGidItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.portfolios[':portfolio_gid'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPortfoliosPortfolioGidItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortfoliosPortfolioGidItemsQueryKey>
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
      ...getPortfoliosPortfolioGidItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPortfoliosPortfolioGidPortfolioMembershipsQueryKey(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']
  >,
) {
  return ['portfolios', '/portfolios/:portfolio_gid/portfolio_memberships', args] as const
}

export function getPortfoliosPortfolioGidPortfolioMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPortfoliosPortfolioGidPortfolioMembershipsQueryKey>
  >({
    queryKey: getPortfoliosPortfolioGidPortfolioMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.portfolios[':portfolio_gid'].portfolio_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPortfoliosPortfolioGidPortfolioMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPortfoliosPortfolioGidPortfolioMembershipsQueryKey>
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
      ...getPortfoliosPortfolioGidPortfolioMembershipsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostPortfoliosPortfolioGidRemoveCustomFieldSettingMutationKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/removeCustomFieldSetting', 'POST'] as const
}

export function getPostPortfoliosPortfolioGidRemoveCustomFieldSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.portfolios)[':portfolio_gid']['removeCustomFieldSetting']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfoliosPortfolioGidRemoveCustomFieldSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolios)[':portfolio_gid']['removeCustomFieldSetting']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolios[':portfolio_gid'].removeCustomFieldSetting.$post(args, options),
      )
    },
  })
}

export function createPostPortfoliosPortfolioGidRemoveCustomFieldSetting<
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
                  (typeof client.portfolios)[':portfolio_gid']['removeCustomFieldSetting']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.portfolios)[':portfolio_gid']['removeCustomFieldSetting']['$post']
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
    const mutationDefaults = getPostPortfoliosPortfolioGidRemoveCustomFieldSettingMutationOptions<
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

export function getPostPortfoliosPortfolioGidRemoveItemMutationKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/removeItem', 'POST'] as const
}

export function getPostPortfoliosPortfolioGidRemoveItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolios)[':portfolio_gid']['removeItem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['removeItem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfoliosPortfolioGidRemoveItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['removeItem']['$post']>,
    ) {
      return parseResponse(client.portfolios[':portfolio_gid'].removeItem.$post(args, options))
    },
  })
}

export function createPostPortfoliosPortfolioGidRemoveItem<
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
                ReturnType<(typeof client.portfolios)[':portfolio_gid']['removeItem']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.portfolios)[':portfolio_gid']['removeItem']['$post']>,
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
    const mutationDefaults = getPostPortfoliosPortfolioGidRemoveItemMutationOptions<
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

export function getPostPortfoliosPortfolioGidRemoveMembersMutationKey() {
  return ['portfolios', '/portfolios/:portfolio_gid/removeMembers', 'POST'] as const
}

export function getPostPortfoliosPortfolioGidRemoveMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.portfolios)[':portfolio_gid']['removeMembers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfoliosPortfolioGidRemoveMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolios)[':portfolio_gid']['removeMembers']['$post']
      >,
    ) {
      return parseResponse(client.portfolios[':portfolio_gid'].removeMembers.$post(args, options))
    },
  })
}

export function createPostPortfoliosPortfolioGidRemoveMembers<
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
                ReturnType<(typeof client.portfolios)[':portfolio_gid']['removeMembers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.portfolios)[':portfolio_gid']['removeMembers']['$post']>,
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
    const mutationDefaults = getPostPortfoliosPortfolioGidRemoveMembersMutationOptions<
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

export function getProjectBriefsProjectBriefGidQueryKey(
  args: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$get']>,
) {
  return ['project_briefs', '/project_briefs/:project_brief_gid', args] as const
}

export function getProjectBriefsProjectBriefGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectBriefsProjectBriefGidQueryKey>
  >({
    queryKey: getProjectBriefsProjectBriefGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project_briefs[':project_brief_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectBriefsProjectBriefGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectBriefsProjectBriefGidQueryKey>
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
      ...getProjectBriefsProjectBriefGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectBriefsProjectBriefGidMutationKey() {
  return ['project_briefs', '/project_briefs/:project_brief_gid', 'PUT'] as const
}

export function getPutProjectBriefsProjectBriefGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectBriefsProjectBriefGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$put']>,
    ) {
      return parseResponse(client.project_briefs[':project_brief_gid'].$put(args, options))
    },
  })
}

export function createPutProjectBriefsProjectBriefGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$put']>,
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
    const mutationDefaults = getPutProjectBriefsProjectBriefGidMutationOptions<
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

export function getDeleteProjectBriefsProjectBriefGidMutationKey() {
  return ['project_briefs', '/project_briefs/:project_brief_gid', 'DELETE'] as const
}

export function getDeleteProjectBriefsProjectBriefGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectBriefsProjectBriefGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$delete']>,
    ) {
      return parseResponse(client.project_briefs[':project_brief_gid'].$delete(args, options))
    },
  })
}

export function createDeleteProjectBriefsProjectBriefGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project_briefs)[':project_brief_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$delete']>,
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
    const mutationDefaults = getDeleteProjectBriefsProjectBriefGidMutationOptions<
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

export function getProjectMembershipsProjectMembershipGidQueryKey(
  args: InferRequestType<(typeof client.project_memberships)[':project_membership_gid']['$get']>,
) {
  return ['project_memberships', '/project_memberships/:project_membership_gid', args] as const
}

export function getProjectMembershipsProjectMembershipGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project_memberships)[':project_membership_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project_memberships)[':project_membership_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.project_memberships)[':project_membership_gid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectMembershipsProjectMembershipGidQueryKey>
  >({
    queryKey: getProjectMembershipsProjectMembershipGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project_memberships[':project_membership_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectMembershipsProjectMembershipGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project_memberships)[':project_membership_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.project_memberships)[':project_membership_gid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.project_memberships)[':project_membership_gid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectMembershipsProjectMembershipGidQueryKey>
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
      ...getProjectMembershipsProjectMembershipGidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectStatusesProjectStatusGidQueryKey(
  args: InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$get']>,
) {
  return ['project_statuses', '/project_statuses/:project_status_gid', args] as const
}

export function getProjectStatusesProjectStatusGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project_statuses)[':project_status_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project_statuses)[':project_status_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectStatusesProjectStatusGidQueryKey>
  >({
    queryKey: getProjectStatusesProjectStatusGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project_statuses[':project_status_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectStatusesProjectStatusGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project_statuses)[':project_status_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project_statuses)[':project_status_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectStatusesProjectStatusGidQueryKey>
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
      ...getProjectStatusesProjectStatusGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteProjectStatusesProjectStatusGidMutationKey() {
  return ['project_statuses', '/project_statuses/:project_status_gid', 'DELETE'] as const
}

export function getDeleteProjectStatusesProjectStatusGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project_statuses)[':project_status_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectStatusesProjectStatusGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$delete']>,
    ) {
      return parseResponse(client.project_statuses[':project_status_gid'].$delete(args, options))
    },
  })
}

export function createDeleteProjectStatusesProjectStatusGid<
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
                ReturnType<(typeof client.project_statuses)[':project_status_gid']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$delete']>,
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
    const mutationDefaults = getDeleteProjectStatusesProjectStatusGidMutationOptions<
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

export function getProjectTemplatesQueryKey(
  args: InferRequestType<typeof client.project_templates.$get>,
) {
  return ['project_templates', '/project_templates', args] as const
}

export function getProjectTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.project_templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.project_templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.project_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectTemplatesQueryKey>
  >({
    queryKey: getProjectTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project_templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.project_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.project_templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.project_templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectTemplatesProjectTemplateGidQueryKey(
  args: InferRequestType<(typeof client.project_templates)[':project_template_gid']['$get']>,
) {
  return ['project_templates', '/project_templates/:project_template_gid', args] as const
}

export function getProjectTemplatesProjectTemplateGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project_templates)[':project_template_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project_templates)[':project_template_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project_templates)[':project_template_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectTemplatesProjectTemplateGidQueryKey>
  >({
    queryKey: getProjectTemplatesProjectTemplateGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project_templates[':project_template_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectTemplatesProjectTemplateGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project_templates)[':project_template_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.project_templates)[':project_template_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.project_templates)[':project_template_gid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectTemplatesProjectTemplateGidQueryKey>
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
      ...getProjectTemplatesProjectTemplateGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectTemplatesProjectTemplateGidInstantiateProjectMutationKey() {
  return [
    'project_templates',
    '/project_templates/:project_template_gid/instantiateProject',
    'POST',
  ] as const
}

export function getPostProjectTemplatesProjectTemplateGidInstantiateProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.project_templates)[':project_template_gid']['instantiateProject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectTemplatesProjectTemplateGidInstantiateProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project_templates)[':project_template_gid']['instantiateProject']['$post']
      >,
    ) {
      return parseResponse(
        client.project_templates[':project_template_gid'].instantiateProject.$post(args, options),
      )
    },
  })
}

export function createPostProjectTemplatesProjectTemplateGidInstantiateProject<
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
                  (typeof client.project_templates)[':project_template_gid']['instantiateProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.project_templates)[':project_template_gid']['instantiateProject']['$post']
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
      getPostProjectTemplatesProjectTemplateGidInstantiateProjectMutationOptions<
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

export function getProjectsProjectGidQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['$get']>,
) {
  return ['projects', '/projects/:project_gid', args] as const
}

export function getProjectsProjectGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectGidQueryKey>
  >({
    queryKey: getProjectsProjectGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsProjectGidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutProjectsProjectGidMutationKey() {
  return ['projects', '/projects/:project_gid', 'PUT'] as const
}

export function getPutProjectsProjectGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':project_gid']['$put']>) {
      return parseResponse(client.projects[':project_gid'].$put(args, options))
    },
  })
}

export function createPutProjectsProjectGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['$put']>,
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
    const mutationDefaults = getPutProjectsProjectGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteProjectsProjectGidMutationKey() {
  return ['projects', '/projects/:project_gid', 'DELETE'] as const
}

export function getDeleteProjectsProjectGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':project_gid']['$delete']>) {
      return parseResponse(client.projects[':project_gid'].$delete(args, options))
    },
  })
}

export function createDeleteProjectsProjectGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['$delete']>,
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
    const mutationDefaults = getDeleteProjectsProjectGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProjectsProjectGidAddCustomFieldSettingMutationKey() {
  return ['projects', '/projects/:project_gid/addCustomFieldSetting', 'POST'] as const
}

export function getPostProjectsProjectGidAddCustomFieldSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.projects)[':project_gid']['addCustomFieldSetting']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidAddCustomFieldSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_gid']['addCustomFieldSetting']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_gid'].addCustomFieldSetting.$post(args, options),
      )
    },
  })
}

export function createPostProjectsProjectGidAddCustomFieldSetting<
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
                  (typeof client.projects)[':project_gid']['addCustomFieldSetting']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_gid']['addCustomFieldSetting']['$post']
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
    const mutationDefaults = getPostProjectsProjectGidAddCustomFieldSettingMutationOptions<
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

export function getPostProjectsProjectGidAddFollowersMutationKey() {
  return ['projects', '/projects/:project_gid/addFollowers', 'POST'] as const
}

export function getPostProjectsProjectGidAddFollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['addFollowers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['addFollowers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidAddFollowersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_gid']['addFollowers']['$post']>,
    ) {
      return parseResponse(client.projects[':project_gid'].addFollowers.$post(args, options))
    },
  })
}

export function createPostProjectsProjectGidAddFollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_gid']['addFollowers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['addFollowers']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectGidAddFollowersMutationOptions<
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

export function getPostProjectsProjectGidAddMembersMutationKey() {
  return ['projects', '/projects/:project_gid/addMembers', 'POST'] as const
}

export function getPostProjectsProjectGidAddMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['addMembers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['addMembers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidAddMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_gid']['addMembers']['$post']>,
    ) {
      return parseResponse(client.projects[':project_gid'].addMembers.$post(args, options))
    },
  })
}

export function createPostProjectsProjectGidAddMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_gid']['addMembers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['addMembers']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectGidAddMembersMutationOptions<
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

export function getProjectsProjectGidCustomFieldSettingsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>,
) {
  return ['projects', '/projects/:project_gid/custom_field_settings', args] as const
}

export function getProjectsProjectGidCustomFieldSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectGidCustomFieldSettingsQueryKey>
  >({
    queryKey: getProjectsProjectGidCustomFieldSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_gid'].custom_field_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectGidCustomFieldSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':project_gid']['custom_field_settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_gid']['custom_field_settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectGidCustomFieldSettingsQueryKey>
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
      ...getProjectsProjectGidCustomFieldSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsProjectGidDuplicateMutationKey() {
  return ['projects', '/projects/:project_gid/duplicate', 'POST'] as const
}

export function getPostProjectsProjectGidDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_gid']['duplicate']['$post']>,
    ) {
      return parseResponse(client.projects[':project_gid'].duplicate.$post(args, options))
    },
  })
}

export function createPostProjectsProjectGidDuplicate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_gid']['duplicate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['duplicate']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectGidDuplicateMutationOptions<
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

export function getPostProjectsProjectGidProjectBriefsMutationKey() {
  return ['projects', '/projects/:project_gid/project_briefs', 'POST'] as const
}

export function getPostProjectsProjectGidProjectBriefsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['project_briefs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['project_briefs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidProjectBriefsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_gid']['project_briefs']['$post']>,
    ) {
      return parseResponse(client.projects[':project_gid'].project_briefs.$post(args, options))
    },
  })
}

export function createPostProjectsProjectGidProjectBriefs<
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
                ReturnType<(typeof client.projects)[':project_gid']['project_briefs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['project_briefs']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectGidProjectBriefsMutationOptions<
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

export function getProjectsProjectGidProjectMembershipsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>,
) {
  return ['projects', '/projects/:project_gid/project_memberships', args] as const
}

export function getProjectsProjectGidProjectMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectGidProjectMembershipsQueryKey>
  >({
    queryKey: getProjectsProjectGidProjectMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_gid'].project_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectGidProjectMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':project_gid']['project_memberships']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectGidProjectMembershipsQueryKey>
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
      ...getProjectsProjectGidProjectMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectGidProjectStatusesQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>,
) {
  return ['projects', '/projects/:project_gid/project_statuses', args] as const
}

export function getProjectsProjectGidProjectStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectGidProjectStatusesQueryKey>
  >({
    queryKey: getProjectsProjectGidProjectStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_gid'].project_statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectGidProjectStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':project_gid']['project_statuses']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectGidProjectStatusesQueryKey>
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
      ...getProjectsProjectGidProjectStatusesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsProjectGidProjectStatusesMutationKey() {
  return ['projects', '/projects/:project_gid/project_statuses', 'POST'] as const
}

export function getPostProjectsProjectGidProjectStatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['project_statuses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['project_statuses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidProjectStatusesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_gid']['project_statuses']['$post']>,
    ) {
      return parseResponse(client.projects[':project_gid'].project_statuses.$post(args, options))
    },
  })
}

export function createPostProjectsProjectGidProjectStatuses<
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
                ReturnType<(typeof client.projects)[':project_gid']['project_statuses']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['project_statuses']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectGidProjectStatusesMutationOptions<
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

export function getPostProjectsProjectGidRemoveCustomFieldSettingMutationKey() {
  return ['projects', '/projects/:project_gid/removeCustomFieldSetting', 'POST'] as const
}

export function getPostProjectsProjectGidRemoveCustomFieldSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.projects)[':project_gid']['removeCustomFieldSetting']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidRemoveCustomFieldSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_gid']['removeCustomFieldSetting']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_gid'].removeCustomFieldSetting.$post(args, options),
      )
    },
  })
}

export function createPostProjectsProjectGidRemoveCustomFieldSetting<
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
                  (typeof client.projects)[':project_gid']['removeCustomFieldSetting']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_gid']['removeCustomFieldSetting']['$post']
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
    const mutationDefaults = getPostProjectsProjectGidRemoveCustomFieldSettingMutationOptions<
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

export function getPostProjectsProjectGidRemoveFollowersMutationKey() {
  return ['projects', '/projects/:project_gid/removeFollowers', 'POST'] as const
}

export function getPostProjectsProjectGidRemoveFollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['removeFollowers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['removeFollowers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidRemoveFollowersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_gid']['removeFollowers']['$post']>,
    ) {
      return parseResponse(client.projects[':project_gid'].removeFollowers.$post(args, options))
    },
  })
}

export function createPostProjectsProjectGidRemoveFollowers<
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
                ReturnType<(typeof client.projects)[':project_gid']['removeFollowers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['removeFollowers']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectGidRemoveFollowersMutationOptions<
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

export function getPostProjectsProjectGidRemoveMembersMutationKey() {
  return ['projects', '/projects/:project_gid/removeMembers', 'POST'] as const
}

export function getPostProjectsProjectGidRemoveMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['removeMembers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['removeMembers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidRemoveMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_gid']['removeMembers']['$post']>,
    ) {
      return parseResponse(client.projects[':project_gid'].removeMembers.$post(args, options))
    },
  })
}

export function createPostProjectsProjectGidRemoveMembers<
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
                ReturnType<(typeof client.projects)[':project_gid']['removeMembers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['removeMembers']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectGidRemoveMembersMutationOptions<
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

export function getPostProjectsProjectGidSaveAsTemplateMutationKey() {
  return ['projects', '/projects/:project_gid/saveAsTemplate', 'POST'] as const
}

export function getPostProjectsProjectGidSaveAsTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['saveAsTemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['saveAsTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidSaveAsTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_gid']['saveAsTemplate']['$post']>,
    ) {
      return parseResponse(client.projects[':project_gid'].saveAsTemplate.$post(args, options))
    },
  })
}

export function createPostProjectsProjectGidSaveAsTemplate<
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
                ReturnType<(typeof client.projects)[':project_gid']['saveAsTemplate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['saveAsTemplate']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectGidSaveAsTemplateMutationOptions<
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

export function getProjectsProjectGidSectionsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['sections']['$get']>,
) {
  return ['projects', '/projects/:project_gid/sections', args] as const
}

export function getProjectsProjectGidSectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_gid']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectGidSectionsQueryKey>
  >({
    queryKey: getProjectsProjectGidSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_gid'].sections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectGidSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_gid']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_gid']['sections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_gid']['sections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectGidSectionsQueryKey>
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
      ...getProjectsProjectGidSectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsProjectGidSectionsMutationKey() {
  return ['projects', '/projects/:project_gid/sections', 'POST'] as const
}

export function getPostProjectsProjectGidSectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['sections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_gid']['sections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidSectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_gid']['sections']['$post']>,
    ) {
      return parseResponse(client.projects[':project_gid'].sections.$post(args, options))
    },
  })
}

export function createPostProjectsProjectGidSections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_gid']['sections']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['sections']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectGidSectionsMutationOptions<
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

export function getPostProjectsProjectGidSectionsInsertMutationKey() {
  return ['projects', '/projects/:project_gid/sections/insert', 'POST'] as const
}

export function getPostProjectsProjectGidSectionsInsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.projects)[':project_gid']['sections']['insert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectGidSectionsInsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_gid']['sections']['insert']['$post']
      >,
    ) {
      return parseResponse(client.projects[':project_gid'].sections.insert.$post(args, options))
    },
  })
}

export function createPostProjectsProjectGidSectionsInsert<
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
                ReturnType<(typeof client.projects)[':project_gid']['sections']['insert']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_gid']['sections']['insert']['$post']>,
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
    const mutationDefaults = getPostProjectsProjectGidSectionsInsertMutationOptions<
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

export function getProjectsProjectGidTaskCountsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['task_counts']['$get']>,
) {
  return ['projects', '/projects/:project_gid/task_counts', args] as const
}

export function getProjectsProjectGidTaskCountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_gid']['task_counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['task_counts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['task_counts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectGidTaskCountsQueryKey>
  >({
    queryKey: getProjectsProjectGidTaskCountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_gid'].task_counts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectGidTaskCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_gid']['task_counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_gid']['task_counts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_gid']['task_counts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectGidTaskCountsQueryKey>
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
      ...getProjectsProjectGidTaskCountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectGidTasksQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_gid']['tasks']['$get']>,
) {
  return ['projects', '/projects/:project_gid/tasks', args] as const
}

export function getProjectsProjectGidTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_gid']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_gid']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_gid']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectGidTasksQueryKey>
  >({
    queryKey: getProjectsProjectGidTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_gid'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectGidTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_gid']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_gid']['tasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_gid']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectGidTasksQueryKey>
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
      ...getProjectsProjectGidTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSectionsSectionGidQueryKey(
  args: InferRequestType<(typeof client.sections)[':section_gid']['$get']>,
) {
  return ['sections', '/sections/:section_gid', args] as const
}

export function getSectionsSectionGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':section_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':section_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':section_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSectionsSectionGidQueryKey>
  >({
    queryKey: getSectionsSectionGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sections[':section_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSectionsSectionGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':section_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sections)[':section_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sections)[':section_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSectionsSectionGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSectionsSectionGidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutSectionsSectionGidMutationKey() {
  return ['sections', '/sections/:section_gid', 'PUT'] as const
}

export function getPutSectionsSectionGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sections)[':section_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sections)[':section_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSectionsSectionGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sections)[':section_gid']['$put']>) {
      return parseResponse(client.sections[':section_gid'].$put(args, options))
    },
  })
}

export function createPutSectionsSectionGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sections)[':section_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sections)[':section_gid']['$put']>,
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
    const mutationDefaults = getPutSectionsSectionGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSectionsSectionGidMutationKey() {
  return ['sections', '/sections/:section_gid', 'DELETE'] as const
}

export function getDeleteSectionsSectionGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sections)[':section_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sections)[':section_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSectionsSectionGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sections)[':section_gid']['$delete']>) {
      return parseResponse(client.sections[':section_gid'].$delete(args, options))
    },
  })
}

export function createDeleteSectionsSectionGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sections)[':section_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sections)[':section_gid']['$delete']>,
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
    const mutationDefaults = getDeleteSectionsSectionGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSectionsSectionGidAddTaskMutationKey() {
  return ['sections', '/sections/:section_gid/addTask', 'POST'] as const
}

export function getPostSectionsSectionGidAddTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sections)[':section_gid']['addTask']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sections)[':section_gid']['addTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSectionsSectionGidAddTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sections)[':section_gid']['addTask']['$post']>,
    ) {
      return parseResponse(client.sections[':section_gid'].addTask.$post(args, options))
    },
  })
}

export function createPostSectionsSectionGidAddTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sections)[':section_gid']['addTask']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sections)[':section_gid']['addTask']['$post']>,
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
    const mutationDefaults = getPostSectionsSectionGidAddTaskMutationOptions<
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

export function getSectionsSectionGidTasksQueryKey(
  args: InferRequestType<(typeof client.sections)[':section_gid']['tasks']['$get']>,
) {
  return ['sections', '/sections/:section_gid/tasks', args] as const
}

export function getSectionsSectionGidTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sections)[':section_gid']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sections)[':section_gid']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sections)[':section_gid']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSectionsSectionGidTasksQueryKey>
  >({
    queryKey: getSectionsSectionGidTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sections[':section_gid'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSectionsSectionGidTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sections)[':section_gid']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sections)[':section_gid']['tasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sections)[':section_gid']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSectionsSectionGidTasksQueryKey>
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
      ...getSectionsSectionGidTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatusUpdatesQueryKey(
  args: InferRequestType<typeof client.status_updates.$get>,
) {
  return ['status_updates', '/status_updates', args] as const
}

export function getStatusUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.status_updates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusUpdatesQueryKey>
  >({
    queryKey: getStatusUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.status_updates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatusUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.status_updates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatusUpdatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusUpdatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostStatusUpdatesMutationKey() {
  return ['status_updates', '/status_updates', 'POST'] as const
}

export function getPostStatusUpdatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.status_updates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStatusUpdatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.status_updates.$post>) {
      return parseResponse(client.status_updates.$post(args, options))
    },
  })
}

export function createPostStatusUpdates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status_updates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.status_updates.$post>,
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
    const mutationDefaults = getPostStatusUpdatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatusUpdatesStatusGidQueryKey(
  args: InferRequestType<(typeof client.status_updates)[':status_gid']['$get']>,
) {
  return ['status_updates', '/status_updates/:status_gid', args] as const
}

export function getStatusUpdatesStatusGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.status_updates)[':status_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.status_updates)[':status_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.status_updates)[':status_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatusUpdatesStatusGidQueryKey>
  >({
    queryKey: getStatusUpdatesStatusGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.status_updates[':status_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatusUpdatesStatusGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.status_updates)[':status_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.status_updates)[':status_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.status_updates)[':status_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatusUpdatesStatusGidQueryKey>
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
      ...getStatusUpdatesStatusGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteStatusUpdatesStatusGidMutationKey() {
  return ['status_updates', '/status_updates/:status_gid', 'DELETE'] as const
}

export function getDeleteStatusUpdatesStatusGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.status_updates)[':status_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.status_updates)[':status_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStatusUpdatesStatusGidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.status_updates)[':status_gid']['$delete']>,
    ) {
      return parseResponse(client.status_updates[':status_gid'].$delete(args, options))
    },
  })
}

export function createDeleteStatusUpdatesStatusGid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.status_updates)[':status_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.status_updates)[':status_gid']['$delete']>,
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
    const mutationDefaults = getDeleteStatusUpdatesStatusGidMutationOptions<
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

export function getStoriesStoryGidQueryKey(
  args: InferRequestType<(typeof client.stories)[':story_gid']['$get']>,
) {
  return ['stories', '/stories/:story_gid', args] as const
}

export function getStoriesStoryGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stories)[':story_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoriesStoryGidQueryKey>
  >({
    queryKey: getStoriesStoryGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stories[':story_gid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStoriesStoryGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stories)[':story_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoriesStoryGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStoriesStoryGidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutStoriesStoryGidMutationKey() {
  return ['stories', '/stories/:story_gid', 'PUT'] as const
}

export function getPutStoriesStoryGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.stories)[':story_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStoriesStoryGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stories)[':story_gid']['$put']>) {
      return parseResponse(client.stories[':story_gid'].$put(args, options))
    },
  })
}

export function createPutStoriesStoryGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.stories)[':story_gid']['$put']>,
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
    const mutationDefaults = getPutStoriesStoryGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteStoriesStoryGidMutationKey() {
  return ['stories', '/stories/:story_gid', 'DELETE'] as const
}

export function getDeleteStoriesStoryGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_gid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.stories)[':story_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStoriesStoryGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stories)[':story_gid']['$delete']>) {
      return parseResponse(client.stories[':story_gid'].$delete(args, options))
    },
  })
}

export function createDeleteStoriesStoryGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stories)[':story_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.stories)[':story_gid']['$delete']>,
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
    const mutationDefaults = getDeleteStoriesStoryGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsQueryKey(args: InferRequestType<typeof client.tags.$get>) {
  return ['tags', '/tags', args] as const
}

export function getTagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >({
    queryKey: getTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsMutationKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function getPostTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.$post>) {
      return parseResponse(client.tags.$post(args, options))
    },
  })
}

export function createPostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
        TError,
        InferRequestType<typeof client.tags.$post>,
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
    const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsTagGidQueryKey(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['$get']>,
) {
  return ['tags', '/tags/:tag_gid', args] as const
}

export function getTagsTagGidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagGidQueryKey>
  >({
    queryKey: getTagsTagGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tag_gid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsTagGid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tag_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsTagGidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutTagsTagGidMutationKey() {
  return ['tags', '/tags/:tag_gid', 'PUT'] as const
}

export function getPutTagsTagGidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':tag_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTagsTagGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tag_gid']['$put']>) {
      return parseResponse(client.tags[':tag_gid'].$put(args, options))
    },
  })
}

export function createPutTagsTagGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':tag_gid']['$put']>,
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
    const mutationDefaults = getPutTagsTagGidMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTagsTagGidMutationKey() {
  return ['tags', '/tags/:tag_gid', 'DELETE'] as const
}

export function getDeleteTagsTagGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':tag_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsTagGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tag_gid']['$delete']>) {
      return parseResponse(client.tags[':tag_gid'].$delete(args, options))
    },
  })
}

export function createDeleteTagsTagGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':tag_gid']['$delete']>,
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
    const mutationDefaults = getDeleteTagsTagGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsTagGidTasksQueryKey(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['tasks']['$get']>,
) {
  return ['tags', '/tags/:tag_gid/tasks', args] as const
}

export function getTagsTagGidTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['tasks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagGidTasksQueryKey>
  >({
    queryKey: getTagsTagGidTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tag_gid'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTagsTagGidTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag_gid']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tag_gid']['tasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tag_gid']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagGidTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsTagGidTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
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

export function getPostTasksMutationKey() {
  return ['tasks', '/tasks', 'POST'] as const
}

export function getPostTasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
    TError,
    InferRequestType<typeof client.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tasks.$post>) {
      return parseResponse(client.tasks.$post(args, options))
    },
  })
}

export function createPostTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
        TError,
        InferRequestType<typeof client.tasks.$post>,
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
    const mutationDefaults = getPostTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksTaskGidQueryKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid', args] as const
}

export function getTasksTaskGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskGidQueryKey>
  >({
    queryKey: getTasksTaskGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':task_gid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTasksTaskGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':task_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskGidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutTasksTaskGidMutationKey() {
  return ['tasks', '/tasks/:task_gid', 'PUT'] as const
}

export function getPutTasksTaskGidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksTaskGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':task_gid']['$put']>) {
      return parseResponse(client.tasks[':task_gid'].$put(args, options))
    },
  })
}

export function createPutTasksTaskGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['$put']>,
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
    const mutationDefaults = getPutTasksTaskGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTasksTaskGidMutationKey() {
  return ['tasks', '/tasks/:task_gid', 'DELETE'] as const
}

export function getDeleteTasksTaskGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksTaskGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':task_gid']['$delete']>) {
      return parseResponse(client.tasks[':task_gid'].$delete(args, options))
    },
  })
}

export function createDeleteTasksTaskGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['$delete']>,
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
    const mutationDefaults = getDeleteTasksTaskGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTasksTaskGidAddDependenciesMutationKey() {
  return ['tasks', '/tasks/:task_gid/addDependencies', 'POST'] as const
}

export function getPostTasksTaskGidAddDependenciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addDependencies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['addDependencies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidAddDependenciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['addDependencies']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].addDependencies.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidAddDependencies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addDependencies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['addDependencies']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidAddDependenciesMutationOptions<
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

export function getPostTasksTaskGidAddDependentsMutationKey() {
  return ['tasks', '/tasks/:task_gid/addDependents', 'POST'] as const
}

export function getPostTasksTaskGidAddDependentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addDependents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['addDependents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidAddDependentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['addDependents']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].addDependents.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidAddDependents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addDependents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['addDependents']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidAddDependentsMutationOptions<
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

export function getPostTasksTaskGidAddFollowersMutationKey() {
  return ['tasks', '/tasks/:task_gid/addFollowers', 'POST'] as const
}

export function getPostTasksTaskGidAddFollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addFollowers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['addFollowers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidAddFollowersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['addFollowers']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].addFollowers.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidAddFollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addFollowers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['addFollowers']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidAddFollowersMutationOptions<
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

export function getPostTasksTaskGidAddProjectMutationKey() {
  return ['tasks', '/tasks/:task_gid/addProject', 'POST'] as const
}

export function getPostTasksTaskGidAddProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addProject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['addProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidAddProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['addProject']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].addProject.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidAddProject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addProject']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['addProject']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidAddProjectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTasksTaskGidAddTagMutationKey() {
  return ['tasks', '/tasks/:task_gid/addTag', 'POST'] as const
}

export function getPostTasksTaskGidAddTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addTag']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['addTag']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidAddTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['addTag']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].addTag.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidAddTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['addTag']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['addTag']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidAddTagMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksTaskGidDependenciesQueryKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/dependencies', args] as const
}

export function getTasksTaskGidDependenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskGidDependenciesQueryKey>
  >({
    queryKey: getTasksTaskGidDependenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':task_gid'].dependencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskGidDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskGidDependenciesQueryKey>
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
      ...getTasksTaskGidDependenciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTasksTaskGidDependentsQueryKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependents']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/dependents', args] as const
}

export function getTasksTaskGidDependentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskGidDependentsQueryKey>
  >({
    queryKey: getTasksTaskGidDependentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':task_gid'].dependents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskGidDependents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':task_gid']['dependents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['dependents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskGidDependentsQueryKey>
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
      ...getTasksTaskGidDependentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTasksTaskGidDuplicateMutationKey() {
  return ['tasks', '/tasks/:task_gid/duplicate', 'POST'] as const
}

export function getPostTasksTaskGidDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['duplicate']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].duplicate.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['duplicate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['duplicate']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidDuplicateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksTaskGidProjectsQueryKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['projects']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/projects', args] as const
}

export function getTasksTaskGidProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskGidProjectsQueryKey>
  >({
    queryKey: getTasksTaskGidProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':task_gid'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskGidProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':task_gid']['projects']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['projects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskGidProjectsQueryKey>
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
      ...getTasksTaskGidProjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTasksTaskGidRemoveDependenciesMutationKey() {
  return ['tasks', '/tasks/:task_gid/removeDependencies', 'POST'] as const
}

export function getPostTasksTaskGidRemoveDependenciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeDependencies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['removeDependencies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidRemoveDependenciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['removeDependencies']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].removeDependencies.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidRemoveDependencies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeDependencies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['removeDependencies']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidRemoveDependenciesMutationOptions<
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

export function getPostTasksTaskGidRemoveDependentsMutationKey() {
  return ['tasks', '/tasks/:task_gid/removeDependents', 'POST'] as const
}

export function getPostTasksTaskGidRemoveDependentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeDependents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['removeDependents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidRemoveDependentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['removeDependents']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].removeDependents.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidRemoveDependents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeDependents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['removeDependents']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidRemoveDependentsMutationOptions<
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

export function getPostTasksTaskGidRemoveFollowersMutationKey() {
  return ['tasks', '/tasks/:task_gid/removeFollowers', 'POST'] as const
}

export function getPostTasksTaskGidRemoveFollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeFollowers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['removeFollowers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidRemoveFollowersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['removeFollowers']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].removeFollowers.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidRemoveFollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeFollowers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['removeFollowers']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidRemoveFollowersMutationOptions<
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

export function getPostTasksTaskGidRemoveProjectMutationKey() {
  return ['tasks', '/tasks/:task_gid/removeProject', 'POST'] as const
}

export function getPostTasksTaskGidRemoveProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeProject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['removeProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidRemoveProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['removeProject']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].removeProject.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidRemoveProject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeProject']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['removeProject']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidRemoveProjectMutationOptions<
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

export function getPostTasksTaskGidRemoveTagMutationKey() {
  return ['tasks', '/tasks/:task_gid/removeTag', 'POST'] as const
}

export function getPostTasksTaskGidRemoveTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeTag']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['removeTag']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidRemoveTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['removeTag']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].removeTag.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidRemoveTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['removeTag']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['removeTag']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidRemoveTagMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTasksTaskGidSetParentMutationKey() {
  return ['tasks', '/tasks/:task_gid/setParent', 'POST'] as const
}

export function getPostTasksTaskGidSetParentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['setParent']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['setParent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidSetParentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['setParent']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].setParent.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidSetParent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['setParent']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['setParent']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidSetParentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksTaskGidStoriesQueryKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/stories', args] as const
}

export function getTasksTaskGidStoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['stories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['stories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskGidStoriesQueryKey>
  >({
    queryKey: getTasksTaskGidStoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':task_gid'].stories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskGidStories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['stories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['stories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskGidStoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskGidStoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTasksTaskGidStoriesMutationKey() {
  return ['tasks', '/tasks/:task_gid/stories', 'POST'] as const
}

export function getPostTasksTaskGidStoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['stories']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidStoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].stories.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidStories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['stories']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidStoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksTaskGidSubtasksQueryKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/subtasks', args] as const
}

export function getTasksTaskGidSubtasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskGidSubtasksQueryKey>
  >({
    queryKey: getTasksTaskGidSubtasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':task_gid'].subtasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskGidSubtasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskGidSubtasksQueryKey>
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
      ...getTasksTaskGidSubtasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTasksTaskGidSubtasksMutationKey() {
  return ['tasks', '/tasks/:task_gid/subtasks', 'POST'] as const
}

export function getPostTasksTaskGidSubtasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['subtasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskGidSubtasksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$post']>,
    ) {
      return parseResponse(client.tasks[':task_gid'].subtasks.$post(args, options))
    },
  })
}

export function createPostTasksTaskGidSubtasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['subtasks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$post']>,
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
    const mutationDefaults = getPostTasksTaskGidSubtasksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksTaskGidTagsQueryKey(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['tags']['$get']>,
) {
  return ['tasks', '/tasks/:task_gid/tags', args] as const
}

export function getTasksTaskGidTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':task_gid']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskGidTagsQueryKey>
  >({
    queryKey: getTasksTaskGidTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':task_gid'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTasksTaskGidTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_gid']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':task_gid']['tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':task_gid']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskGidTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskGidTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeamMembershipsQueryKey(
  args: InferRequestType<typeof client.team_memberships.$get>,
) {
  return ['team_memberships', '/team_memberships', args] as const
}

export function getTeamMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.team_memberships.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamMembershipsQueryKey>
  >({
    queryKey: getTeamMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team_memberships.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeamMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.team_memberships.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamMembershipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeamMembershipsTeamMembershipGidQueryKey(
  args: InferRequestType<(typeof client.team_memberships)[':team_membership_gid']['$get']>,
) {
  return ['team_memberships', '/team_memberships/:team_membership_gid', args] as const
}

export function getTeamMembershipsTeamMembershipGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team_memberships)[':team_membership_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team_memberships)[':team_membership_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team_memberships)[':team_membership_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamMembershipsTeamMembershipGidQueryKey>
  >({
    queryKey: getTeamMembershipsTeamMembershipGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team_memberships[':team_membership_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamMembershipsTeamMembershipGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team_memberships)[':team_membership_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team_memberships)[':team_membership_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team_memberships)[':team_membership_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamMembershipsTeamMembershipGidQueryKey>
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
      ...getTeamMembershipsTeamMembershipGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutTeamsMutationKey() {
  return ['teams', '/teams', 'PUT'] as const
}

export function getPutTeamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$put>>>>>,
    TError,
    InferRequestType<typeof client.teams.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.teams.$put>) {
      return parseResponse(client.teams.$put(args, options))
    },
  })
}

export function createPutTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$put>>>>>,
        TError,
        InferRequestType<typeof client.teams.$put>,
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
    const mutationDefaults = getPutTeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTeamsMutationKey() {
  return ['teams', '/teams', 'POST'] as const
}

export function getPostTeamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
    TError,
    InferRequestType<typeof client.teams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.teams.$post>) {
      return parseResponse(client.teams.$post(args, options))
    },
  })
}

export function createPostTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
        TError,
        InferRequestType<typeof client.teams.$post>,
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
    const mutationDefaults = getPostTeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeamsTeamGidQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_gid']['$get']>,
) {
  return ['teams', '/teams/:team_gid', args] as const
}

export function getTeamsTeamGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamGidQueryKey>
  >({
    queryKey: getTeamsTeamGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_gid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeamsTeamGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsTeamGidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTeamsTeamGidAddUserMutationKey() {
  return ['teams', '/teams/:team_gid/addUser', 'POST'] as const
}

export function getPostTeamsTeamGidAddUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_gid']['addUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':team_gid']['addUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamGidAddUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':team_gid']['addUser']['$post']>,
    ) {
      return parseResponse(client.teams[':team_gid'].addUser.$post(args, options))
    },
  })
}

export function createPostTeamsTeamGidAddUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_gid']['addUser']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':team_gid']['addUser']['$post']>,
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
    const mutationDefaults = getPostTeamsTeamGidAddUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeamsTeamGidProjectTemplatesQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_gid']['project_templates']['$get']>,
) {
  return ['teams', '/teams/:team_gid/project_templates', args] as const
}

export function getTeamsTeamGidProjectTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_gid']['project_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['project_templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_gid']['project_templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamGidProjectTemplatesQueryKey>
  >({
    queryKey: getTeamsTeamGidProjectTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_gid'].project_templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamGidProjectTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_gid']['project_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_gid']['project_templates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_gid']['project_templates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamGidProjectTemplatesQueryKey>
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
      ...getTeamsTeamGidProjectTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTeamsTeamGidProjectsQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_gid']['projects']['$get']>,
) {
  return ['teams', '/teams/:team_gid/projects', args] as const
}

export function getTeamsTeamGidProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_gid']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_gid']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamGidProjectsQueryKey>
  >({
    queryKey: getTeamsTeamGidProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_gid'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamGidProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_gid']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_gid']['projects']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_gid']['projects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamGidProjectsQueryKey>
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
      ...getTeamsTeamGidProjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTeamsTeamGidProjectsMutationKey() {
  return ['teams', '/teams/:team_gid/projects', 'POST'] as const
}

export function getPostTeamsTeamGidProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_gid']['projects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':team_gid']['projects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamGidProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':team_gid']['projects']['$post']>,
    ) {
      return parseResponse(client.teams[':team_gid'].projects.$post(args, options))
    },
  })
}

export function createPostTeamsTeamGidProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_gid']['projects']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':team_gid']['projects']['$post']>,
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
    const mutationDefaults = getPostTeamsTeamGidProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTeamsTeamGidRemoveUserMutationKey() {
  return ['teams', '/teams/:team_gid/removeUser', 'POST'] as const
}

export function getPostTeamsTeamGidRemoveUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_gid']['removeUser']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.teams)[':team_gid']['removeUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamGidRemoveUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':team_gid']['removeUser']['$post']>,
    ) {
      return parseResponse(client.teams[':team_gid'].removeUser.$post(args, options))
    },
  })
}

export function createPostTeamsTeamGidRemoveUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_gid']['removeUser']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.teams)[':team_gid']['removeUser']['$post']>,
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
    const mutationDefaults = getPostTeamsTeamGidRemoveUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeamsTeamGidTeamMembershipsQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>,
) {
  return ['teams', '/teams/:team_gid/team_memberships', args] as const
}

export function getTeamsTeamGidTeamMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamGidTeamMembershipsQueryKey>
  >({
    queryKey: getTeamsTeamGidTeamMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_gid'].team_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamGidTeamMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamGidTeamMembershipsQueryKey>
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
      ...getTeamsTeamGidTeamMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTeamsTeamGidUsersQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_gid']['users']['$get']>,
) {
  return ['teams', '/teams/:team_gid/users', args] as const
}

export function getTeamsTeamGidUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_gid']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_gid']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamGidUsersQueryKey>
  >({
    queryKey: getTeamsTeamGidUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_gid'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamGidUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_gid']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_gid']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_gid']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamGidUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsTeamGidUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTimePeriodsQueryKey(args: InferRequestType<typeof client.time_periods.$get>) {
  return ['time_periods', '/time_periods', args] as const
}

export function getTimePeriodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_periods.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.time_periods.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_periods.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimePeriodsQueryKey>
  >({
    queryKey: getTimePeriodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_periods.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTimePeriods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_periods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.time_periods.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_periods.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTimePeriodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimePeriodsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTimePeriodsTimePeriodGidQueryKey(
  args: InferRequestType<(typeof client.time_periods)[':time_period_gid']['$get']>,
) {
  return ['time_periods', '/time_periods/:time_period_gid', args] as const
}

export function getTimePeriodsTimePeriodGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.time_periods)[':time_period_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.time_periods)[':time_period_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.time_periods)[':time_period_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimePeriodsTimePeriodGidQueryKey>
  >({
    queryKey: getTimePeriodsTimePeriodGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_periods[':time_period_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTimePeriodsTimePeriodGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.time_periods)[':time_period_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.time_periods)[':time_period_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.time_periods)[':time_period_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimePeriodsTimePeriodGidQueryKey>
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
      ...getTimePeriodsTimePeriodGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserTaskListsUserTaskListGidQueryKey(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>,
) {
  return ['user_task_lists', '/user_task_lists/:user_task_list_gid', args] as const
}

export function getUserTaskListsUserTaskListGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserTaskListsUserTaskListGidQueryKey>
  >({
    queryKey: getUserTaskListsUserTaskListGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_task_lists[':user_task_list_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserTaskListsUserTaskListGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserTaskListsUserTaskListGidQueryKey>
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
      ...getUserTaskListsUserTaskListGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserTaskListsUserTaskListGidTasksQueryKey(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>,
) {
  return ['user_task_lists', '/user_task_lists/:user_task_list_gid/tasks', args] as const
}

export function getUserTaskListsUserTaskListGidTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserTaskListsUserTaskListGidTasksQueryKey>
  >({
    queryKey: getUserTaskListsUserTaskListGidTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_task_lists[':user_task_list_gid'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserTaskListsUserTaskListGidTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserTaskListsUserTaskListGidTasksQueryKey>
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
      ...getUserTaskListsUserTaskListGidTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
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
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserGidQueryKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['$get']>,
) {
  return ['users', '/users/:user_gid', args] as const
}

export function getUsersUserGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserGidQueryKey>
  >({
    queryKey: getUsersUserGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_gid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserGidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserGidFavoritesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['favorites']['$get']>,
) {
  return ['users', '/users/:user_gid/favorites', args] as const
}

export function getUsersUserGidFavoritesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_gid']['favorites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['favorites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_gid']['favorites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserGidFavoritesQueryKey>
  >({
    queryKey: getUsersUserGidFavoritesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_gid'].favorites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserGidFavorites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_gid']['favorites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_gid']['favorites']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_gid']['favorites']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserGidFavoritesQueryKey>
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
      ...getUsersUserGidFavoritesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserGidTeamMembershipsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['team_memberships']['$get']>,
) {
  return ['users', '/users/:user_gid/team_memberships', args] as const
}

export function getUsersUserGidTeamMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_gid']['team_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['team_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_gid']['team_memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserGidTeamMembershipsQueryKey>
  >({
    queryKey: getUsersUserGidTeamMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_gid'].team_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserGidTeamMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_gid']['team_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_gid']['team_memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_gid']['team_memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserGidTeamMembershipsQueryKey>
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
      ...getUsersUserGidTeamMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserGidTeamsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['teams']['$get']>,
) {
  return ['users', '/users/:user_gid/teams', args] as const
}

export function getUsersUserGidTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_gid']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserGidTeamsQueryKey>
  >({
    queryKey: getUsersUserGidTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_gid'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserGidTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_gid']['teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_gid']['teams']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_gid']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserGidTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserGidTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserGidUserTaskListQueryKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['user_task_list']['$get']>,
) {
  return ['users', '/users/:user_gid/user_task_list', args] as const
}

export function getUsersUserGidUserTaskListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_gid']['user_task_list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['user_task_list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_gid']['user_task_list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserGidUserTaskListQueryKey>
  >({
    queryKey: getUsersUserGidUserTaskListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_gid'].user_task_list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserGidUserTaskList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_gid']['user_task_list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_gid']['user_task_list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_gid']['user_task_list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserGidUserTaskListQueryKey>
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
      ...getUsersUserGidUserTaskListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserGidWorkspaceMembershipsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>,
) {
  return ['users', '/users/:user_gid/workspace_memberships', args] as const
}

export function getUsersUserGidWorkspaceMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserGidWorkspaceMembershipsQueryKey>
  >({
    queryKey: getUsersUserGidWorkspaceMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_gid'].workspace_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserGidWorkspaceMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserGidWorkspaceMembershipsQueryKey>
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
      ...getUsersUserGidWorkspaceMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
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

export function getWebhooksWebhookGidQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_gid', args] as const
}

export function getWebhooksWebhookGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookGidQueryKey>
  >({
    queryKey: getWebhooksWebhookGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhook_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksWebhookGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':webhook_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksWebhookGidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutWebhooksWebhookGidMutationKey() {
  return ['webhooks', '/webhooks/:webhook_gid', 'PUT'] as const
}

export function getPutWebhooksWebhookGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksWebhookGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$put']>) {
      return parseResponse(client.webhooks[':webhook_gid'].$put(args, options))
    },
  })
}

export function createPutWebhooksWebhookGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':webhook_gid']['$put']>,
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
    const mutationDefaults = getPutWebhooksWebhookGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteWebhooksWebhookGidMutationKey() {
  return ['webhooks', '/webhooks/:webhook_gid', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_gid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$delete']>) {
      return parseResponse(client.webhooks[':webhook_gid'].$delete(args, options))
    },
  })
}

export function createDeleteWebhooksWebhookGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_gid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':webhook_gid']['$delete']>,
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
    const mutationDefaults = getDeleteWebhooksWebhookGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkspaceMembershipsWorkspaceMembershipGidQueryKey(
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

export function getWorkspaceMembershipsWorkspaceMembershipGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspace_memberships)[':workspace_membership_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspace_memberships)[':workspace_membership_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspace_memberships)[':workspace_membership_gid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceMembershipsWorkspaceMembershipGidQueryKey>
  >({
    queryKey: getWorkspaceMembershipsWorkspaceMembershipGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspace_memberships[':workspace_membership_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceMembershipsWorkspaceMembershipGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspace_memberships)[':workspace_membership_gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workspace_memberships)[':workspace_membership_gid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workspace_memberships)[':workspace_membership_gid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspaceMembershipsWorkspaceMembershipGidQueryKey>
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
      ...getWorkspaceMembershipsWorkspaceMembershipGidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesQueryKey(args: InferRequestType<typeof client.workspaces.$get>) {
  return ['workspaces', '/workspaces', args] as const
}

export function getWorkspacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.workspaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkspacesQueryKey>
  >({
    queryKey: getWorkspacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.workspaces.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkspacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getWorkspacesWorkspaceGidQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid', args] as const
}

export function getWorkspacesWorkspaceGidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace_gid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidQueryKey>
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
      ...getWorkspacesWorkspaceGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutWorkspacesWorkspaceGidMutationKey() {
  return ['workspaces', '/workspaces/:workspace_gid', 'PUT'] as const
}

export function getPutWorkspacesWorkspaceGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace_gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspaceGidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['$put']>) {
      return parseResponse(client.workspaces[':workspace_gid'].$put(args, options))
    },
  })
}

export function createPutWorkspacesWorkspaceGid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspace_gid']['$put']>,
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
    const mutationDefaults = getPutWorkspacesWorkspaceGidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWorkspacesWorkspaceGidAddUserMutationKey() {
  return ['workspaces', '/workspaces/:workspace_gid/addUser', 'POST'] as const
}

export function getPostWorkspacesWorkspaceGidAddUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['addUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace_gid']['addUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceGidAddUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['addUser']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspace_gid'].addUser.$post(args, options))
    },
  })
}

export function createPostWorkspacesWorkspaceGidAddUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['addUser']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspace_gid']['addUser']['$post']>,
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
    const mutationDefaults = getPostWorkspacesWorkspaceGidAddUserMutationOptions<
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

export function getWorkspacesWorkspaceGidAuditLogEventsQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/audit_log_events', args] as const
}

export function getWorkspacesWorkspaceGidAuditLogEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidAuditLogEventsQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidAuditLogEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].audit_log_events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceGidAuditLogEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidAuditLogEventsQueryKey>
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
      ...getWorkspacesWorkspaceGidAuditLogEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceGidCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/custom_fields', args] as const
}

export function getWorkspacesWorkspaceGidCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidCustomFieldsQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].custom_fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceGidCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidCustomFieldsQueryKey>
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
      ...getWorkspacesWorkspaceGidCustomFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceGidProjectsQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/projects', args] as const
}

export function getWorkspacesWorkspaceGidProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidProjectsQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceGidProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidProjectsQueryKey>
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
      ...getWorkspacesWorkspaceGidProjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostWorkspacesWorkspaceGidProjectsMutationKey() {
  return ['workspaces', '/workspaces/:workspace_gid/projects', 'POST'] as const
}

export function getPostWorkspacesWorkspaceGidProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceGidProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspace_gid'].projects.$post(args, options))
    },
  })
}

export function createPostWorkspacesWorkspaceGidProjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['projects']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$post']>,
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
    const mutationDefaults = getPostWorkspacesWorkspaceGidProjectsMutationOptions<
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

export function getPostWorkspacesWorkspaceGidRemoveUserMutationKey() {
  return ['workspaces', '/workspaces/:workspace_gid/removeUser', 'POST'] as const
}

export function getPostWorkspacesWorkspaceGidRemoveUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceGidRemoveUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspace_gid'].removeUser.$post(args, options))
    },
  })
}

export function createPostWorkspacesWorkspaceGidRemoveUser<
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
                  ReturnType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>,
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
    const mutationDefaults = getPostWorkspacesWorkspaceGidRemoveUserMutationOptions<
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

export function getWorkspacesWorkspaceGidTagsQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/tags', args] as const
}

export function getWorkspacesWorkspaceGidTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidTagsQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceGidTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidTagsQueryKey>
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
      ...getWorkspacesWorkspaceGidTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostWorkspacesWorkspaceGidTagsMutationKey() {
  return ['workspaces', '/workspaces/:workspace_gid/tags', 'POST'] as const
}

export function getPostWorkspacesWorkspaceGidTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceGidTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspace_gid'].tags.$post(args, options))
    },
  })
}

export function createPostWorkspacesWorkspaceGidTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$post']>,
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
    const mutationDefaults = getPostWorkspacesWorkspaceGidTagsMutationOptions<
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

export function getWorkspacesWorkspaceGidTasksSearchQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/tasks/search', args] as const
}

export function getWorkspacesWorkspaceGidTasksSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidTasksSearchQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidTasksSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].tasks.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceGidTasksSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidTasksSearchQueryKey>
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
      ...getWorkspacesWorkspaceGidTasksSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceGidTeamsQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/teams', args] as const
}

export function getWorkspacesWorkspaceGidTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidTeamsQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceGidTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidTeamsQueryKey>
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
      ...getWorkspacesWorkspaceGidTeamsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceGidTypeaheadQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/typeahead', args] as const
}

export function getWorkspacesWorkspaceGidTypeaheadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidTypeaheadQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidTypeaheadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].typeahead.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceGidTypeahead<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidTypeaheadQueryKey>
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
      ...getWorkspacesWorkspaceGidTypeaheadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceGidUsersQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_gid/users', args] as const
}

export function getWorkspacesWorkspaceGidUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidUsersQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceGidUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidUsersQueryKey>
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
      ...getWorkspacesWorkspaceGidUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceGidWorkspaceMembershipsQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace_gid/workspace_memberships', args] as const
}

export function getWorkspacesWorkspaceGidWorkspaceMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceGidWorkspaceMembershipsQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceGidWorkspaceMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_gid'].workspace_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceGidWorkspaceMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceGidWorkspaceMembershipsQueryKey>
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
      ...getWorkspacesWorkspaceGidWorkspaceMembershipsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
