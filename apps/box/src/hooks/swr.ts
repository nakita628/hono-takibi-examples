import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAiKey() {
  return ['ai'] as const
}

export function getAiAgentDefaultKey() {
  return ['ai_agent_default'] as const
}

export function getAiAgentsKey() {
  return ['ai_agents'] as const
}

export function getAuthorizeKey() {
  return ['authorize'] as const
}

export function getCollaborationWhitelistEntriesKey() {
  return ['collaboration_whitelist_entries'] as const
}

export function getCollaborationWhitelistExemptTargetsKey() {
  return ['collaboration_whitelist_exempt_targets'] as const
}

export function getCollaborationsKey() {
  return ['collaborations'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getCommentsKey() {
  return ['comments'] as const
}

export function getDevicePinnersKey() {
  return ['device_pinners'] as const
}

export function getEnterprisesKey() {
  return ['enterprises'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFileRequestsKey() {
  return ['file_requests'] as const
}

export function getFileVersionLegalHoldsKey() {
  return ['file_version_legal_holds'] as const
}

export function getFileVersionRetentionsKey() {
  return ['file_version_retentions'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getFolderLocksKey() {
  return ['folder_locks'] as const
}

export function getFoldersKey() {
  return ['folders'] as const
}

export function getGroupMembershipsKey() {
  return ['group_memberships'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getIntegrationMappingsKey() {
  return ['integration_mappings'] as const
}

export function getInvitesKey() {
  return ['invites'] as const
}

export function getLegalHoldPoliciesKey() {
  return ['legal_hold_policies'] as const
}

export function getLegalHoldPolicyAssignmentsKey() {
  return ['legal_hold_policy_assignments'] as const
}

export function getMetadataCascadePoliciesKey() {
  return ['metadata_cascade_policies'] as const
}

export function getMetadataQueriesKey() {
  return ['metadata_queries'] as const
}

export function getMetadataTaxonomiesKey() {
  return ['metadata_taxonomies'] as const
}

export function getMetadataTemplatesKey() {
  return ['metadata_templates'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getRecentItemsKey() {
  return ['recent_items'] as const
}

export function getRetentionPoliciesKey() {
  return ['retention_policies'] as const
}

export function getRetentionPolicyAssignmentsKey() {
  return ['retention_policy_assignments'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSharedItemsKey() {
  return ['shared_items'] as const
}

export function getSharedItemsAppItemsKey() {
  return ['shared_items#app_items'] as const
}

export function getSharedItemsFoldersKey() {
  return ['shared_items#folders'] as const
}

export function getSharedItemsWebLinksKey() {
  return ['shared_items#web_links'] as const
}

export function getShieldInformationBarrierReportsKey() {
  return ['shield_information_barrier_reports'] as const
}

export function getShieldInformationBarrierSegmentMembersKey() {
  return ['shield_information_barrier_segment_members'] as const
}

export function getShieldInformationBarrierSegmentRestrictionsKey() {
  return ['shield_information_barrier_segment_restrictions'] as const
}

export function getShieldInformationBarrierSegmentsKey() {
  return ['shield_information_barrier_segments'] as const
}

export function getShieldInformationBarriersKey() {
  return ['shield_information_barriers'] as const
}

export function getSignRequestsKey() {
  return ['sign_requests'] as const
}

export function getSignTemplatesKey() {
  return ['sign_templates'] as const
}

export function getSkillInvocationsKey() {
  return ['skill_invocations'] as const
}

export function getStoragePoliciesKey() {
  return ['storage_policies'] as const
}

export function getStoragePolicyAssignmentsKey() {
  return ['storage_policy_assignments'] as const
}

export function getTaskAssignmentsKey() {
  return ['task_assignments'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getTermsOfServiceUserStatusesKey() {
  return ['terms_of_service_user_statuses'] as const
}

export function getTermsOfServicesKey() {
  return ['terms_of_services'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebLinksKey() {
  return ['web_links'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getWorkflowsKey() {
  return ['workflows'] as const
}

export function getZipDownloadsKey() {
  return ['zip_downloads'] as const
}

export function getGetAuthorizeKey(args: InferRequestType<typeof client.authorize.$get>) {
  return ['authorize', '/authorize', args] as const
}

export function useGetAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauth2TokenKey() {
  return ['oauth2', '/oauth2/token', 'POST'] as const
}

export function usePostOauth2Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.token.$post> }) =>
        parseResponse(client.oauth2.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth2TokenRefreshKey() {
  return ['oauth2', '/oauth2/token#refresh', 'POST'] as const
}

export function usePostOauth2TokenRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['token#refresh']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)['token#refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2TokenRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2)['token#refresh']['$post']> },
      ) => parseResponse(client.oauth2['token#refresh'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth2RevokeKey() {
  return ['oauth2', '/oauth2/revoke', 'POST'] as const
}

export function usePostOauth2Revoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2RevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.revoke.$post> }) =>
        parseResponse(client.oauth2.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdKey(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files/:file_id', keyArgs] as const
}

export function useGetFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFilesFileIdKey() {
  return ['files', '/files/:file_id', 'PUT'] as const
}

export function usePutFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':file_id']['$put']> },
      ) => parseResponse(client.files[':file_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFilesFileIdKey() {
  return ['files', '/files/:file_id', 'POST'] as const
}

export function usePostFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':file_id']['$post']> },
      ) => parseResponse(client.files[':file_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFilesFileIdKey() {
  return ['files', '/files/:file_id', 'DELETE'] as const
}

export function useDeleteFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':file_id']['$delete']> },
      ) => parseResponse(client.files[':file_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdAppItemAssociationsKey(
  args: InferRequestType<(typeof client.files)[':file_id']['app_item_associations']['$get']>,
) {
  return ['files', '/files/:file_id/app_item_associations', args] as const
}

export function useGetFilesFileIdAppItemAssociations<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['app_item_associations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['app_item_associations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdAppItemAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['app_item_associations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files[':file_id'].app_item_associations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdAppItemAssociations<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['app_item_associations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['app_item_associations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdAppItemAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['app_item_associations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files[':file_id'].app_item_associations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdContentKey(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files/:file_id/content', keyArgs] as const
}

export function useGetFilesFileIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilesFileIdContentKey() {
  return ['files', '/files/:file_id/content', 'POST'] as const
}

export function usePostFilesFileIdContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['content']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['content']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':file_id']['content']['$post']> },
      ) => parseResponse(client.files[':file_id'].content.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFilesContentKey() {
  return ['files', '/files/content', 'POST'] as const
}

export function usePostFilesContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.content.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.files.content.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.files.content.$post> }) =>
        parseResponse(client.files.content.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsFilesContentKey() {
  return ['files', '/files/content', 'OPTIONS'] as const
}

export function useOptionsFilesContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.content.$options>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.files.content.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsFilesContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.files.content.$options> }) =>
        parseResponse(client.files.content.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFilesUploadSessionsKey() {
  return ['files', '/files/upload_sessions', 'POST'] as const
}

export function usePostFilesUploadSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.files.upload_sessions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.files.upload_sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesUploadSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.files.upload_sessions.$post> },
      ) => parseResponse(client.files.upload_sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFilesFileIdUploadSessionsKey() {
  return ['files', '/files/:file_id/upload_sessions', 'POST'] as const
}

export function usePostFilesFileIdUploadSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['upload_sessions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['upload_sessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdUploadSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.files)[':file_id']['upload_sessions']['$post']> },
      ) => parseResponse(client.files[':file_id'].upload_sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesUploadSessionsUploadSessionIdKey(
  args: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>,
) {
  return ['files', '/files/upload_sessions/:upload_session_id', args] as const
}

export function useGetFilesUploadSessionsUploadSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesUploadSessionsUploadSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files.upload_sessions[':upload_session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesUploadSessionsUploadSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesUploadSessionsUploadSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files.upload_sessions[':upload_session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFilesUploadSessionsUploadSessionIdKey() {
  return ['files', '/files/upload_sessions/:upload_session_id', 'PUT'] as const
}

export function usePutFilesUploadSessionsUploadSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFilesUploadSessionsUploadSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$put']>
        },
      ) =>
        parseResponse(client.files.upload_sessions[':upload_session_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFilesUploadSessionsUploadSessionIdKey() {
  return ['files', '/files/upload_sessions/:upload_session_id', 'DELETE'] as const
}

export function useDeleteFilesUploadSessionsUploadSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesUploadSessionsUploadSessionIdKey()
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
            (typeof client.files.upload_sessions)[':upload_session_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.files.upload_sessions[':upload_session_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFilesUploadSessionsUploadSessionIdPartsKey(
  args: InferRequestType<
    (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
  >,
) {
  return ['files', '/files/upload_sessions/:upload_session_id/parts', args] as const
}

export function useGetFilesUploadSessionsUploadSessionIdParts<TError = unknown>(
  args: InferRequestType<
    (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
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
        ? getGetFilesUploadSessionsUploadSessionIdPartsKey(args)
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
                (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
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
          client.files.upload_sessions[':upload_session_id'].parts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesUploadSessionsUploadSessionIdParts<TError = unknown>(
  args: InferRequestType<
    (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
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
        ? getGetFilesUploadSessionsUploadSessionIdPartsKey(args)
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
                (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
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
          client.files.upload_sessions[':upload_session_id'].parts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostFilesUploadSessionsUploadSessionIdPlanKey() {
  return ['files', '/files/upload_sessions/:upload_session_id/plan', 'POST'] as const
}

export function usePostFilesUploadSessionsUploadSessionIdPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files.upload_sessions)[':upload_session_id']['plan']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['plan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesUploadSessionsUploadSessionIdPlanKey()
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
            (typeof client.files.upload_sessions)[':upload_session_id']['plan']['$post']
          >
        },
      ) =>
        parseResponse(
          client.files.upload_sessions[':upload_session_id'].plan.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFilesUploadSessionsUploadSessionIdCommitKey() {
  return ['files', '/files/upload_sessions/:upload_session_id/commit', 'POST'] as const
}

export function usePostFilesUploadSessionsUploadSessionIdCommit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files.upload_sessions)[':upload_session_id']['commit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['commit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesUploadSessionsUploadSessionIdCommitKey()
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
            (typeof client.files.upload_sessions)[':upload_session_id']['commit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.files.upload_sessions[':upload_session_id'].commit.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFilesFileIdCopyKey() {
  return ['files', '/files/:file_id/copy', 'POST'] as const
}

export function usePostFilesFileIdCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['copy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['copy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':file_id']['copy']['$post']> },
      ) => parseResponse(client.files[':file_id'].copy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdThumbnailExtensionKey(
  args: InferRequestType<(typeof client.files)[':file_id']['thumbnail.:extension']['$get']>,
) {
  return ['files', '/files/:file_id/thumbnail.:extension', args] as const
}

export function useGetFilesFileIdThumbnailExtension<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['thumbnail.:extension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['thumbnail.:extension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdThumbnailExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['thumbnail.:extension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files[':file_id']['thumbnail.:extension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdThumbnailExtension<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['thumbnail.:extension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['thumbnail.:extension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdThumbnailExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['thumbnail.:extension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files[':file_id']['thumbnail.:extension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdCollaborationsKey(
  args: InferRequestType<(typeof client.files)[':file_id']['collaborations']['$get']>,
) {
  return ['files', '/files/:file_id/collaborations', args] as const
}

export function useGetFilesFileIdCollaborations<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['collaborations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdCollaborationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdCollaborations<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['collaborations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdCollaborationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdCommentsKey(
  args: InferRequestType<(typeof client.files)[':file_id']['comments']['$get']>,
) {
  return ['files', '/files/:file_id/comments', args] as const
}

export function useGetFilesFileIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdTasksKey(
  args: InferRequestType<(typeof client.files)[':file_id']['tasks']['$get']>,
) {
  return ['files', '/files/:file_id/tasks', args] as const
}

export function useGetFilesFileIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdTrashKey(
  args: InferRequestType<(typeof client.files)[':file_id']['trash']['$get']>,
) {
  return ['files', '/files/:file_id/trash', args] as const
}

export function useGetFilesFileIdTrash<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['trash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdTrashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].trash.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdTrash<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['trash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdTrashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].trash.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFilesFileIdTrashKey() {
  return ['files', '/files/:file_id/trash', 'DELETE'] as const
}

export function useDeleteFilesFileIdTrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['trash']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['trash']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdTrashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':file_id']['trash']['$delete']> },
      ) => parseResponse(client.files[':file_id'].trash.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdVersionsKey(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['$get']>,
) {
  return ['files', '/files/:file_id/versions', args] as const
}

export function useGetFilesFileIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdVersionsFileVersionIdKey(
  args: InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>,
) {
  return ['files', '/files/:file_id/versions/:file_version_id', args] as const
}

export function useGetFilesFileIdVersionsFileVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdVersionsFileVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.files[':file_id'].versions[':file_version_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdVersionsFileVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdVersionsFileVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.files[':file_id'].versions[':file_version_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutFilesFileIdVersionsFileVersionIdKey() {
  return ['files', '/files/:file_id/versions/:file_version_id', 'PUT'] as const
}

export function usePutFilesFileIdVersionsFileVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFilesFileIdVersionsFileVersionIdKey()
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
            (typeof client.files)[':file_id']['versions'][':file_version_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.files[':file_id'].versions[':file_version_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFilesFileIdVersionsFileVersionIdKey() {
  return ['files', '/files/:file_id/versions/:file_version_id', 'DELETE'] as const
}

export function useDeleteFilesFileIdVersionsFileVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['versions'][':file_version_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdVersionsFileVersionIdKey()
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
            (typeof client.files)[':file_id']['versions'][':file_version_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.files[':file_id'].versions[':file_version_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFilesFileIdVersionsCurrentKey() {
  return ['files', '/files/:file_id/versions/current', 'POST'] as const
}

export function usePostFilesFileIdVersionsCurrent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['current']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['versions']['current']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdVersionsCurrentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.files)[':file_id']['versions']['current']['$post']>
        },
      ) => parseResponse(client.files[':file_id'].versions.current.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdMetadataKey(
  args: InferRequestType<(typeof client.files)[':file_id']['metadata']['$get']>,
) {
  return ['files', '/files/:file_id/metadata', args] as const
}

export function useGetFilesFileIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
) {
  return [
    'files',
    '/files/:file_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    args,
  ] as const
}

export function useGetFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
        ? getGetFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey(args)
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
                (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
          client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
        ? getGetFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey(args)
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
                (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
          client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey() {
  return [
    'files',
    '/files/:file_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'PUT',
  ] as const
}

export function usePutFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey()
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
            (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
          >
        },
      ) =>
        parseResponse(
          client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey() {
  return [
    'files',
    '/files/:file_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'POST',
  ] as const
}

export function usePostFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey()
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
            (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
          >
        },
      ) =>
        parseResponse(
          client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey() {
  return [
    'files',
    '/files/:file_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'DELETE',
  ] as const
}

export function useDeleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey()
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
            (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.files[':file_id'].metadata.enterprise[
            'securityClassification-6VMVochwUWo'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdMetadataScopeTemplateKeyKey(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
  >,
) {
  return ['files', '/files/:file_id/metadata/:scope/:template_key', args] as const
}

export function useGetFilesFileIdMetadataScopeTemplateKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
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
        ? getGetFilesFileIdMetadataScopeTemplateKeyKey(args)
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
                (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
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
          client.files[':file_id'].metadata[':scope'][':template_key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdMetadataScopeTemplateKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
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
        ? getGetFilesFileIdMetadataScopeTemplateKeyKey(args)
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
                (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
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
          client.files[':file_id'].metadata[':scope'][':template_key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutFilesFileIdMetadataScopeTemplateKeyKey() {
  return ['files', '/files/:file_id/metadata/:scope/:template_key', 'PUT'] as const
}

export function usePutFilesFileIdMetadataScopeTemplateKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFilesFileIdMetadataScopeTemplateKeyKey()
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
            (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.files[':file_id'].metadata[':scope'][':template_key'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFilesFileIdMetadataScopeTemplateKeyKey() {
  return ['files', '/files/:file_id/metadata/:scope/:template_key', 'POST'] as const
}

export function usePostFilesFileIdMetadataScopeTemplateKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdMetadataScopeTemplateKeyKey()
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
            (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.files[':file_id'].metadata[':scope'][':template_key'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFilesFileIdMetadataScopeTemplateKeyKey() {
  return ['files', '/files/:file_id/metadata/:scope/:template_key', 'DELETE'] as const
}

export function useDeleteFilesFileIdMetadataScopeTemplateKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdMetadataScopeTemplateKeyKey()
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
            (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.files[':file_id'].metadata[':scope'][':template_key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdMetadataGlobalBoxSkillsCardsKey(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
  >,
) {
  return ['files', '/files/:file_id/metadata/global/boxSkillsCards', args] as const
}

export function useGetFilesFileIdMetadataGlobalBoxSkillsCards<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
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
        ? getGetFilesFileIdMetadataGlobalBoxSkillsCardsKey(args)
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
                (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
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
          client.files[':file_id'].metadata.global.boxSkillsCards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdMetadataGlobalBoxSkillsCards<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
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
        ? getGetFilesFileIdMetadataGlobalBoxSkillsCardsKey(args)
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
                (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
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
          client.files[':file_id'].metadata.global.boxSkillsCards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutFilesFileIdMetadataGlobalBoxSkillsCardsKey() {
  return ['files', '/files/:file_id/metadata/global/boxSkillsCards', 'PUT'] as const
}

export function usePutFilesFileIdMetadataGlobalBoxSkillsCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFilesFileIdMetadataGlobalBoxSkillsCardsKey()
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
            (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$put']
          >
        },
      ) =>
        parseResponse(
          client.files[':file_id'].metadata.global.boxSkillsCards.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFilesFileIdMetadataGlobalBoxSkillsCardsKey() {
  return ['files', '/files/:file_id/metadata/global/boxSkillsCards', 'POST'] as const
}

export function usePostFilesFileIdMetadataGlobalBoxSkillsCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdMetadataGlobalBoxSkillsCardsKey()
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
            (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$post']
          >
        },
      ) =>
        parseResponse(
          client.files[':file_id'].metadata.global.boxSkillsCards.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFilesFileIdMetadataGlobalBoxSkillsCardsKey() {
  return ['files', '/files/:file_id/metadata/global/boxSkillsCards', 'DELETE'] as const
}

export function useDeleteFilesFileIdMetadataGlobalBoxSkillsCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdMetadataGlobalBoxSkillsCardsKey()
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
            (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.files[':file_id'].metadata.global.boxSkillsCards.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdWatermarkKey(
  args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$get']>,
) {
  return ['files', '/files/:file_id/watermark', args] as const
}

export function useGetFilesFileIdWatermark<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdWatermarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].watermark.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdWatermark<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdWatermarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].watermark.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFilesFileIdWatermarkKey() {
  return ['files', '/files/:file_id/watermark', 'PUT'] as const
}

export function usePutFilesFileIdWatermark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['watermark']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFilesFileIdWatermarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':file_id']['watermark']['$put']> },
      ) => parseResponse(client.files[':file_id'].watermark.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFilesFileIdWatermarkKey() {
  return ['files', '/files/:file_id/watermark', 'DELETE'] as const
}

export function useDeleteFilesFileIdWatermark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id']['watermark']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id']['watermark']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdWatermarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.files)[':file_id']['watermark']['$delete']> },
      ) => parseResponse(client.files[':file_id'].watermark.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFileRequestsFileRequestIdKey(
  args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$get']>,
) {
  return ['file_requests', '/file_requests/:file_request_id', args] as const
}

export function useGetFileRequestsFileRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileRequestsFileRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_requests[':file_request_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileRequestsFileRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileRequestsFileRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_requests[':file_request_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFileRequestsFileRequestIdKey() {
  return ['file_requests', '/file_requests/:file_request_id', 'PUT'] as const
}

export function usePutFileRequestsFileRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.file_requests)[':file_request_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFileRequestsFileRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.file_requests)[':file_request_id']['$put']> },
      ) => parseResponse(client.file_requests[':file_request_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFileRequestsFileRequestIdKey() {
  return ['file_requests', '/file_requests/:file_request_id', 'DELETE'] as const
}

export function useDeleteFileRequestsFileRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.file_requests)[':file_request_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFileRequestsFileRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.file_requests)[':file_request_id']['$delete']> },
      ) => parseResponse(client.file_requests[':file_request_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileRequestsFileRequestIdCopyKey() {
  return ['file_requests', '/file_requests/:file_request_id/copy', 'POST'] as const
}

export function usePostFileRequestsFileRequestIdCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.file_requests)[':file_request_id']['copy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.file_requests)[':file_request_id']['copy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileRequestsFileRequestIdCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.file_requests)[':file_request_id']['copy']['$post']>
        },
      ) => parseResponse(client.file_requests[':file_request_id'].copy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersFolderIdKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['folders', '/folders/:folder_id', keyArgs] as const
}

export function useGetFoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFoldersFolderIdKey() {
  return ['folders', '/folders/:folder_id', 'PUT'] as const
}

export function usePutFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.folders)[':folder_id']['$put']> },
      ) => parseResponse(client.folders[':folder_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFoldersFolderIdKey() {
  return ['folders', '/folders/:folder_id', 'POST'] as const
}

export function usePostFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.folders)[':folder_id']['$post']> },
      ) => parseResponse(client.folders[':folder_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFoldersFolderIdKey() {
  return ['folders', '/folders/:folder_id', 'DELETE'] as const
}

export function useDeleteFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.folders)[':folder_id']['$delete']> },
      ) => parseResponse(client.folders[':folder_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersFolderIdAppItemAssociationsKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>,
) {
  return ['folders', '/folders/:folder_id/app_item_associations', args] as const
}

export function useGetFoldersFolderIdAppItemAssociations<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdAppItemAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.folders[':folder_id'].app_item_associations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderIdAppItemAssociations<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdAppItemAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.folders)[':folder_id']['app_item_associations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.folders[':folder_id'].app_item_associations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoldersFolderIdItemsKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['folders', '/folders/:folder_id/items', keyArgs] as const
}

export function useGetFoldersFolderIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFoldersKey() {
  return ['folders', '/folders', 'POST'] as const
}

export function usePostFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.folders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.folders.$post> }) =>
        parseResponse(client.folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFoldersFolderIdCopyKey() {
  return ['folders', '/folders/:folder_id/copy', 'POST'] as const
}

export function usePostFoldersFolderIdCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['copy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id']['copy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoldersFolderIdCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.folders)[':folder_id']['copy']['$post']> },
      ) => parseResponse(client.folders[':folder_id'].copy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersFolderIdCollaborationsKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['collaborations']['$get']>,
) {
  return ['folders', '/folders/:folder_id/collaborations', args] as const
}

export function useGetFoldersFolderIdCollaborations<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['collaborations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdCollaborationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.folders[':folder_id'].collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderIdCollaborations<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['collaborations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdCollaborationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.folders[':folder_id'].collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoldersFolderIdTrashKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['trash']['$get']>,
) {
  return ['folders', '/folders/:folder_id/trash', args] as const
}

export function useGetFoldersFolderIdTrash<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['trash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdTrashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_id'].trash.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderIdTrash<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['trash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdTrashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_id'].trash.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFoldersFolderIdTrashKey() {
  return ['folders', '/folders/:folder_id/trash', 'DELETE'] as const
}

export function useDeleteFoldersFolderIdTrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['trash']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id']['trash']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFoldersFolderIdTrashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.folders)[':folder_id']['trash']['$delete']> },
      ) => parseResponse(client.folders[':folder_id'].trash.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersFolderIdMetadataKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['metadata']['$get']>,
) {
  return ['folders', '/folders/:folder_id/metadata', args] as const
}

export function useGetFoldersFolderIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
) {
  return [
    'folders',
    '/folders/:folder_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    args,
  ] as const
}

export function useGetFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
        ? getGetFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey(args)
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
                (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
          client.folders[':folder_id'].metadata.enterprise[
            'securityClassification-6VMVochwUWo'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
        ? getGetFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey(args)
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
                (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
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
          client.folders[':folder_id'].metadata.enterprise[
            'securityClassification-6VMVochwUWo'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey() {
  return [
    'folders',
    '/folders/:folder_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'PUT',
  ] as const
}

export function usePutFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey()
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
            (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
          >
        },
      ) =>
        parseResponse(
          client.folders[':folder_id'].metadata.enterprise[
            'securityClassification-6VMVochwUWo'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey() {
  return [
    'folders',
    '/folders/:folder_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'POST',
  ] as const
}

export function usePostFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey()
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
            (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
          >
        },
      ) =>
        parseResponse(
          client.folders[':folder_id'].metadata.enterprise[
            'securityClassification-6VMVochwUWo'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey() {
  return [
    'folders',
    '/folders/:folder_id/metadata/enterprise/securityClassification-6VMVochwUWo',
    'DELETE',
  ] as const
}

export function useDeleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoKey()
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
            (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.folders[':folder_id'].metadata.enterprise[
            'securityClassification-6VMVochwUWo'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersFolderIdMetadataScopeTemplateKeyKey(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
  >,
) {
  return ['folders', '/folders/:folder_id/metadata/:scope/:template_key', args] as const
}

export function useGetFoldersFolderIdMetadataScopeTemplateKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
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
        ? getGetFoldersFolderIdMetadataScopeTemplateKeyKey(args)
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
                (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
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
          client.folders[':folder_id'].metadata[':scope'][':template_key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderIdMetadataScopeTemplateKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
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
        ? getGetFoldersFolderIdMetadataScopeTemplateKeyKey(args)
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
                (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
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
          client.folders[':folder_id'].metadata[':scope'][':template_key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutFoldersFolderIdMetadataScopeTemplateKeyKey() {
  return ['folders', '/folders/:folder_id/metadata/:scope/:template_key', 'PUT'] as const
}

export function usePutFoldersFolderIdMetadataScopeTemplateKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFoldersFolderIdMetadataScopeTemplateKeyKey()
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
            (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.folders[':folder_id'].metadata[':scope'][':template_key'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFoldersFolderIdMetadataScopeTemplateKeyKey() {
  return ['folders', '/folders/:folder_id/metadata/:scope/:template_key', 'POST'] as const
}

export function usePostFoldersFolderIdMetadataScopeTemplateKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoldersFolderIdMetadataScopeTemplateKeyKey()
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
            (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.folders[':folder_id'].metadata[':scope'][':template_key'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFoldersFolderIdMetadataScopeTemplateKeyKey() {
  return ['folders', '/folders/:folder_id/metadata/:scope/:template_key', 'DELETE'] as const
}

export function useDeleteFoldersFolderIdMetadataScopeTemplateKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFoldersFolderIdMetadataScopeTemplateKeyKey()
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
            (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.folders[':folder_id'].metadata[':scope'][':template_key'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersTrashItemsKey(
  args: InferRequestType<typeof client.folders.trash.items.$get>,
) {
  return ['folders', '/folders/trash/items', args] as const
}

export function useGetFoldersTrashItems<TError = unknown>(
  args: InferRequestType<typeof client.folders.trash.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersTrashItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders.trash.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersTrashItems<TError = unknown>(
  args: InferRequestType<typeof client.folders.trash.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersTrashItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.folders.trash.items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders.trash.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoldersFolderIdWatermarkKey(
  args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$get']>,
) {
  return ['folders', '/folders/:folder_id/watermark', args] as const
}

export function useGetFoldersFolderIdWatermark<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdWatermarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_id'].watermark.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderIdWatermark<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdWatermarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_id'].watermark.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFoldersFolderIdWatermarkKey() {
  return ['folders', '/folders/:folder_id/watermark', 'PUT'] as const
}

export function usePutFoldersFolderIdWatermark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFoldersFolderIdWatermarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$put']> },
      ) => parseResponse(client.folders[':folder_id'].watermark.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFoldersFolderIdWatermarkKey() {
  return ['folders', '/folders/:folder_id/watermark', 'DELETE'] as const
}

export function useDeleteFoldersFolderIdWatermark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id']['watermark']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFoldersFolderIdWatermarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$delete']> },
      ) => parseResponse(client.folders[':folder_id'].watermark.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFolderLocksKey(args: InferRequestType<typeof client.folder_locks.$get>) {
  return ['folder_locks', '/folder_locks', args] as const
}

export function useGetFolderLocks<TError = unknown>(
  args: InferRequestType<typeof client.folder_locks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFolderLocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folder_locks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFolderLocks<TError = unknown>(
  args: InferRequestType<typeof client.folder_locks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFolderLocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folder_locks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFolderLocksKey() {
  return ['folder_locks', '/folder_locks', 'POST'] as const
}

export function usePostFolderLocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folder_locks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.folder_locks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFolderLocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.folder_locks.$post> }) =>
        parseResponse(client.folder_locks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFolderLocksFolderLockIdKey() {
  return ['folder_locks', '/folder_locks/:folder_lock_id', 'DELETE'] as const
}

export function useDeleteFolderLocksFolderLockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folder_locks)[':folder_lock_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.folder_locks)[':folder_lock_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFolderLocksFolderLockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.folder_locks)[':folder_lock_id']['$delete']> },
      ) => parseResponse(client.folder_locks[':folder_lock_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataTemplatesKey(
  args: InferRequestType<typeof client.metadata_templates.$get>,
) {
  return ['metadata_templates', '/metadata_templates', args] as const
}

export function useGetMetadataTemplates<TError = unknown>(
  args: InferRequestType<typeof client.metadata_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTemplates<TError = unknown>(
  args: InferRequestType<typeof client.metadata_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaKey() {
  return [
    'metadata_templates',
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema',
  ] as const
}

export function useGetMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchema<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema']['$get']
            >
          >
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
        ? getGetMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaKey()
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
                (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema']['$get']
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
          client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'].schema.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchema<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema']['$get']
            >
          >
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
        ? getGetMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaKey()
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
                (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema']['$get']
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
          client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'].schema.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddKey() {
  return [
    'metadata_templates',
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#add',
    'PUT',
  ] as const
}

export function usePutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAdd<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#add']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#add']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddKey()
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
            (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#add']['$put']
          >
        },
      ) =>
        parseResponse(
          client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'][
            'schema#add'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateKey() {
  return [
    'metadata_templates',
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update',
    'PUT',
  ] as const
}

export function usePutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#update']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#update']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateKey()
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
            (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#update']['$put']
          >
        },
      ) =>
        parseResponse(
          client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'][
            'schema#update'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataTemplatesScopeTemplateKeySchemaKey(
  args: InferRequestType<
    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
  >,
) {
  return ['metadata_templates', '/metadata_templates/:scope/:template_key/schema', args] as const
}

export function useGetMetadataTemplatesScopeTemplateKeySchema<TError = unknown>(
  args: InferRequestType<
    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
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
        ? getGetMetadataTemplatesScopeTemplateKeySchemaKey(args)
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
                (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
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
          client.metadata_templates[':scope'][':template_key'].schema.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTemplatesScopeTemplateKeySchema<TError = unknown>(
  args: InferRequestType<
    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
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
        ? getGetMetadataTemplatesScopeTemplateKeySchemaKey(args)
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
                (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
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
          client.metadata_templates[':scope'][':template_key'].schema.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMetadataTemplatesScopeTemplateKeySchemaKey() {
  return ['metadata_templates', '/metadata_templates/:scope/:template_key/schema', 'PUT'] as const
}

export function usePutMetadataTemplatesScopeTemplateKeySchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMetadataTemplatesScopeTemplateKeySchemaKey()
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
            (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$put']
          >
        },
      ) =>
        parseResponse(
          client.metadata_templates[':scope'][':template_key'].schema.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMetadataTemplatesScopeTemplateKeySchemaKey() {
  return [
    'metadata_templates',
    '/metadata_templates/:scope/:template_key/schema',
    'DELETE',
  ] as const
}

export function useDeleteMetadataTemplatesScopeTemplateKeySchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMetadataTemplatesScopeTemplateKeySchemaKey()
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
            (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.metadata_templates[':scope'][':template_key'].schema.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.metadata_templates)[':template_id']['$get']>,
) {
  return ['metadata_templates', '/metadata_templates/:template_id', args] as const
}

export function useGetMetadataTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.metadata_templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metadata_templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.metadata_templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metadata_templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetadataTemplatesGlobalKey(
  args: InferRequestType<typeof client.metadata_templates.global.$get>,
) {
  return ['metadata_templates', '/metadata_templates/global', args] as const
}

export function useGetMetadataTemplatesGlobal<TError = unknown>(
  args: InferRequestType<typeof client.metadata_templates.global.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTemplatesGlobalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata_templates.global.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTemplatesGlobal<TError = unknown>(
  args: InferRequestType<typeof client.metadata_templates.global.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTemplatesGlobalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.global.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata_templates.global.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetadataTemplatesEnterpriseKey(
  args: InferRequestType<typeof client.metadata_templates.enterprise.$get>,
) {
  return ['metadata_templates', '/metadata_templates/enterprise', args] as const
}

export function useGetMetadataTemplatesEnterprise<TError = unknown>(
  args: InferRequestType<typeof client.metadata_templates.enterprise.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTemplatesEnterpriseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata_templates.enterprise.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTemplatesEnterprise<TError = unknown>(
  args: InferRequestType<typeof client.metadata_templates.enterprise.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTemplatesEnterpriseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.metadata_templates.enterprise.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata_templates.enterprise.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMetadataTemplatesSchemaKey() {
  return ['metadata_templates', '/metadata_templates/schema', 'POST'] as const
}

export function usePostMetadataTemplatesSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_templates.schema.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata_templates.schema.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataTemplatesSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.metadata_templates.schema.$post> },
      ) => parseResponse(client.metadata_templates.schema.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataTemplatesSchemaClassificationsKey() {
  return ['metadata_templates', '/metadata_templates/schema#classifications', 'POST'] as const
}

export function usePostMetadataTemplatesSchemaClassifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata_templates)['schema#classifications']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metadata_templates)['schema#classifications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataTemplatesSchemaClassificationsKey()
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
            (typeof client.metadata_templates)['schema#classifications']['$post']
          >
        },
      ) =>
        parseResponse(
          client.metadata_templates['schema#classifications'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataCascadePoliciesKey(
  args: InferRequestType<typeof client.metadata_cascade_policies.$get>,
) {
  return ['metadata_cascade_policies', '/metadata_cascade_policies', args] as const
}

export function useGetMetadataCascadePolicies<TError = unknown>(
  args: InferRequestType<typeof client.metadata_cascade_policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataCascadePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata_cascade_policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataCascadePolicies<TError = unknown>(
  args: InferRequestType<typeof client.metadata_cascade_policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataCascadePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata_cascade_policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMetadataCascadePoliciesKey() {
  return ['metadata_cascade_policies', '/metadata_cascade_policies', 'POST'] as const
}

export function usePostMetadataCascadePolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_cascade_policies.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata_cascade_policies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataCascadePoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.metadata_cascade_policies.$post> },
      ) => parseResponse(client.metadata_cascade_policies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataCascadePoliciesMetadataCascadePolicyIdKey(
  args: InferRequestType<
    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
  >,
) {
  return [
    'metadata_cascade_policies',
    '/metadata_cascade_policies/:metadata_cascade_policy_id',
    args,
  ] as const
}

export function useGetMetadataCascadePoliciesMetadataCascadePolicyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
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
        ? getGetMetadataCascadePoliciesMetadataCascadePolicyIdKey(args)
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
                (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
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
          client.metadata_cascade_policies[':metadata_cascade_policy_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataCascadePoliciesMetadataCascadePolicyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
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
        ? getGetMetadataCascadePoliciesMetadataCascadePolicyIdKey(args)
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
                (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
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
          client.metadata_cascade_policies[':metadata_cascade_policy_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMetadataCascadePoliciesMetadataCascadePolicyIdKey() {
  return [
    'metadata_cascade_policies',
    '/metadata_cascade_policies/:metadata_cascade_policy_id',
    'DELETE',
  ] as const
}

export function useDeleteMetadataCascadePoliciesMetadataCascadePolicyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMetadataCascadePoliciesMetadataCascadePolicyIdKey()
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
            (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.metadata_cascade_policies[':metadata_cascade_policy_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataCascadePoliciesMetadataCascadePolicyIdApplyKey() {
  return [
    'metadata_cascade_policies',
    '/metadata_cascade_policies/:metadata_cascade_policy_id/apply',
    'POST',
  ] as const
}

export function usePostMetadataCascadePoliciesMetadataCascadePolicyIdApply<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['apply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataCascadePoliciesMetadataCascadePolicyIdApplyKey()
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
            (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['apply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.metadata_cascade_policies[':metadata_cascade_policy_id'].apply.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataQueriesExecuteReadKey() {
  return ['metadata_queries', '/metadata_queries/execute_read', 'POST'] as const
}

export function usePostMetadataQueriesExecuteRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata_queries.execute_read.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata_queries.execute_read.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataQueriesExecuteReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.metadata_queries.execute_read.$post> },
      ) => parseResponse(client.metadata_queries.execute_read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCommentsCommentIdKey(
  args: InferRequestType<(typeof client.comments)[':comment_id']['$get']>,
) {
  return ['comments', '/comments/:comment_id', args] as const
}

export function useGetCommentsCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':comment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':comment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':comment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':comment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCommentsCommentIdKey() {
  return ['comments', '/comments/:comment_id', 'PUT'] as const
}

export function usePutCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':comment_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':comment_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCommentsCommentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.comments)[':comment_id']['$put']> },
      ) => parseResponse(client.comments[':comment_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCommentsCommentIdKey() {
  return ['comments', '/comments/:comment_id', 'DELETE'] as const
}

export function useDeleteCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':comment_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':comment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCommentsCommentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.comments)[':comment_id']['$delete']> },
      ) => parseResponse(client.comments[':comment_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsKey() {
  return ['comments', '/comments', 'POST'] as const
}

export function usePostComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.comments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.comments.$post> }) =>
        parseResponse(client.comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollaborationsCollaborationIdKey(
  args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$get']>,
) {
  return ['collaborations', '/collaborations/:collaboration_id', args] as const
}

export function useGetCollaborationsCollaborationId<TError = unknown>(
  args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollaborationsCollaborationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collaborations[':collaboration_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollaborationsCollaborationId<TError = unknown>(
  args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollaborationsCollaborationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collaborations[':collaboration_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCollaborationsCollaborationIdKey() {
  return ['collaborations', '/collaborations/:collaboration_id', 'PUT'] as const
}

export function usePutCollaborationsCollaborationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.collaborations)[':collaboration_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCollaborationsCollaborationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$put']> },
      ) => parseResponse(client.collaborations[':collaboration_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollaborationsCollaborationIdKey() {
  return ['collaborations', '/collaborations/:collaboration_id', 'DELETE'] as const
}

export function useDeleteCollaborationsCollaborationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collaborations)[':collaboration_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.collaborations)[':collaboration_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollaborationsCollaborationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$delete']>
        },
      ) => parseResponse(client.collaborations[':collaboration_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollaborationsKey(args: InferRequestType<typeof client.collaborations.$get>) {
  return ['collaborations', '/collaborations', args] as const
}

export function useGetCollaborations<TError = unknown>(
  args: InferRequestType<typeof client.collaborations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollaborationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollaborations<TError = unknown>(
  args: InferRequestType<typeof client.collaborations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollaborationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollaborationsKey() {
  return ['collaborations', '/collaborations', 'POST'] as const
}

export function usePostCollaborations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.collaborations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollaborationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.collaborations.$post> }) =>
        parseResponse(client.collaborations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function useGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
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

export function getGetTasksTaskIdKey(
  args: InferRequestType<(typeof client.tasks)[':task_id']['$get']>,
) {
  return ['tasks', '/tasks/:task_id', args] as const
}

export function useGetTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>
        >
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>
        >
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTasksTaskIdKey() {
  return ['tasks', '/tasks/:task_id', 'PUT'] as const
}

export function usePutTasksTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':task_id']['$put']> },
      ) => parseResponse(client.tasks[':task_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTasksTaskIdKey() {
  return ['tasks', '/tasks/:task_id', 'DELETE'] as const
}

export function useDeleteTasksTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':task_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':task_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTasksTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':task_id']['$delete']> },
      ) => parseResponse(client.tasks[':task_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIdAssignmentsKey(
  args: InferRequestType<(typeof client.tasks)[':task_id']['assignments']['$get']>,
) {
  return ['tasks', '/tasks/:task_id/assignments', args] as const
}

export function useGetTasksTaskIdAssignments<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_id']['assignments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskIdAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_id'].assignments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIdAssignments<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':task_id']['assignments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTasksTaskIdAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':task_id']['assignments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':task_id'].assignments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTaskAssignmentsKey() {
  return ['task_assignments', '/task_assignments', 'POST'] as const
}

export function usePostTaskAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.task_assignments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.task_assignments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaskAssignmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.task_assignments.$post> }) =>
        parseResponse(client.task_assignments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaskAssignmentsTaskAssignmentIdKey(
  args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$get']>,
) {
  return ['task_assignments', '/task_assignments/:task_assignment_id', args] as const
}

export function useGetTaskAssignmentsTaskAssignmentId<TError = unknown>(
  args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskAssignmentsTaskAssignmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.task_assignments[':task_assignment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaskAssignmentsTaskAssignmentId<TError = unknown>(
  args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaskAssignmentsTaskAssignmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.task_assignments[':task_assignment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTaskAssignmentsTaskAssignmentIdKey() {
  return ['task_assignments', '/task_assignments/:task_assignment_id', 'PUT'] as const
}

export function usePutTaskAssignmentsTaskAssignmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTaskAssignmentsTaskAssignmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$put']>
        },
      ) => parseResponse(client.task_assignments[':task_assignment_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTaskAssignmentsTaskAssignmentIdKey() {
  return ['task_assignments', '/task_assignments/:task_assignment_id', 'DELETE'] as const
}

export function useDeleteTaskAssignmentsTaskAssignmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.task_assignments)[':task_assignment_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTaskAssignmentsTaskAssignmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$delete']>
        },
      ) =>
        parseResponse(client.task_assignments[':task_assignment_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSharedItemsKey(args: InferRequestType<typeof client.shared_items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shared_items', '/shared_items', keyArgs] as const
}

export function useGetSharedItems<TError = unknown>(
  args: InferRequestType<typeof client.shared_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSharedItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shared_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSharedItems<TError = unknown>(
  args: InferRequestType<typeof client.shared_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSharedItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shared_items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shared_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdGetSharedLinkKey(
  args: InferRequestType<(typeof client.files)[':file_id#get_shared_link']['$get']>,
) {
  return ['files', '/files/:file_id#get_shared_link', args] as const
}

export function useGetFilesFileIdGetSharedLink<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id#get_shared_link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdGetSharedLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id#get_shared_link'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdGetSharedLink<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id#get_shared_link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFilesFileIdGetSharedLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':file_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id#get_shared_link'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFilesFileIdAddSharedLinkKey() {
  return ['files', '/files/:file_id#add_shared_link', 'PUT'] as const
}

export function usePutFilesFileIdAddSharedLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id#add_shared_link']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id#add_shared_link']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFilesFileIdAddSharedLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.files)[':file_id#add_shared_link']['$put']> },
      ) => parseResponse(client.files[':file_id#add_shared_link'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFilesFileIdUpdateSharedLinkKey() {
  return ['files', '/files/:file_id#update_shared_link', 'PUT'] as const
}

export function usePutFilesFileIdUpdateSharedLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id#update_shared_link']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id#update_shared_link']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFilesFileIdUpdateSharedLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.files)[':file_id#update_shared_link']['$put']> },
      ) => parseResponse(client.files[':file_id#update_shared_link'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFilesFileIdRemoveSharedLinkKey() {
  return ['files', '/files/:file_id#remove_shared_link', 'PUT'] as const
}

export function usePutFilesFileIdRemoveSharedLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id#remove_shared_link']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':file_id#remove_shared_link']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFilesFileIdRemoveSharedLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.files)[':file_id#remove_shared_link']['$put']> },
      ) => parseResponse(client.files[':file_id#remove_shared_link'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSharedItemsFoldersKey(
  args: InferRequestType<(typeof client)['shared_items#folders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shared_items#folders', '/shared_items#folders', keyArgs] as const
}

export function useGetSharedItemsFolders<TError = unknown>(
  args: InferRequestType<(typeof client)['shared_items#folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSharedItemsFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shared_items#folders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSharedItemsFolders<TError = unknown>(
  args: InferRequestType<(typeof client)['shared_items#folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSharedItemsFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['shared_items#folders']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shared_items#folders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoldersFolderIdGetSharedLinkKey(
  args: InferRequestType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>,
) {
  return ['folders', '/folders/:folder_id#get_shared_link', args] as const
}

export function useGetFoldersFolderIdGetSharedLink<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdGetSharedLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.folders[':folder_id#get_shared_link'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderIdGetSharedLink<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderIdGetSharedLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.folders[':folder_id#get_shared_link'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFoldersFolderIdAddSharedLinkKey() {
  return ['folders', '/folders/:folder_id#add_shared_link', 'PUT'] as const
}

export function usePutFoldersFolderIdAddSharedLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id#add_shared_link']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id#add_shared_link']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFoldersFolderIdAddSharedLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.folders)[':folder_id#add_shared_link']['$put']> },
      ) => parseResponse(client.folders[':folder_id#add_shared_link'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFoldersFolderIdUpdateSharedLinkKey() {
  return ['folders', '/folders/:folder_id#update_shared_link', 'PUT'] as const
}

export function usePutFoldersFolderIdUpdateSharedLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id#update_shared_link']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id#update_shared_link']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFoldersFolderIdUpdateSharedLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.folders)[':folder_id#update_shared_link']['$put']>
        },
      ) => parseResponse(client.folders[':folder_id#update_shared_link'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFoldersFolderIdRemoveSharedLinkKey() {
  return ['folders', '/folders/:folder_id#remove_shared_link', 'PUT'] as const
}

export function usePutFoldersFolderIdRemoveSharedLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_id#remove_shared_link']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_id#remove_shared_link']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFoldersFolderIdRemoveSharedLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.folders)[':folder_id#remove_shared_link']['$put']>
        },
      ) => parseResponse(client.folders[':folder_id#remove_shared_link'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebLinksKey() {
  return ['web_links', '/web_links', 'POST'] as const
}

export function usePostWebLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.web_links.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.web_links.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.web_links.$post> }) =>
        parseResponse(client.web_links.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebLinksWebLinkIdKey(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['web_links', '/web_links/:web_link_id', keyArgs] as const
}

export function useGetWebLinksWebLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebLinksWebLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.web_links[':web_link_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebLinksWebLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebLinksWebLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.web_links[':web_link_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebLinksWebLinkIdKey() {
  return ['web_links', '/web_links/:web_link_id', 'PUT'] as const
}

export function usePutWebLinksWebLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.web_links)[':web_link_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebLinksWebLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.web_links)[':web_link_id']['$put']> },
      ) => parseResponse(client.web_links[':web_link_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebLinksWebLinkIdKey() {
  return ['web_links', '/web_links/:web_link_id', 'POST'] as const
}

export function usePostWebLinksWebLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.web_links)[':web_link_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebLinksWebLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.web_links)[':web_link_id']['$post']> },
      ) => parseResponse(client.web_links[':web_link_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebLinksWebLinkIdKey() {
  return ['web_links', '/web_links/:web_link_id', 'DELETE'] as const
}

export function useDeleteWebLinksWebLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.web_links)[':web_link_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebLinksWebLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.web_links)[':web_link_id']['$delete']> },
      ) => parseResponse(client.web_links[':web_link_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebLinksWebLinkIdTrashKey(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$get']>,
) {
  return ['web_links', '/web_links/:web_link_id/trash', args] as const
}

export function useGetWebLinksWebLinkIdTrash<TError = unknown>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebLinksWebLinkIdTrashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.web_links[':web_link_id'].trash.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebLinksWebLinkIdTrash<TError = unknown>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebLinksWebLinkIdTrashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.web_links[':web_link_id'].trash.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebLinksWebLinkIdTrashKey() {
  return ['web_links', '/web_links/:web_link_id/trash', 'DELETE'] as const
}

export function useDeleteWebLinksWebLinkIdTrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id']['trash']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebLinksWebLinkIdTrashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$delete']> },
      ) => parseResponse(client.web_links[':web_link_id'].trash.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSharedItemsWebLinksKey(
  args: InferRequestType<(typeof client)['shared_items#web_links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shared_items#web_links', '/shared_items#web_links', keyArgs] as const
}

export function useGetSharedItemsWebLinks<TError = unknown>(
  args: InferRequestType<(typeof client)['shared_items#web_links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSharedItemsWebLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shared_items#web_links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSharedItemsWebLinks<TError = unknown>(
  args: InferRequestType<(typeof client)['shared_items#web_links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSharedItemsWebLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shared_items#web_links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shared_items#web_links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebLinksWebLinkIdGetSharedLinkKey(
  args: InferRequestType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>,
) {
  return ['web_links', '/web_links/:web_link_id#get_shared_link', args] as const
}

export function useGetWebLinksWebLinkIdGetSharedLink<TError = unknown>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebLinksWebLinkIdGetSharedLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.web_links[':web_link_id#get_shared_link'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebLinksWebLinkIdGetSharedLink<TError = unknown>(
  args: InferRequestType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebLinksWebLinkIdGetSharedLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.web_links[':web_link_id#get_shared_link'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebLinksWebLinkIdAddSharedLinkKey() {
  return ['web_links', '/web_links/:web_link_id#add_shared_link', 'PUT'] as const
}

export function usePutWebLinksWebLinkIdAddSharedLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id#add_shared_link']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.web_links)[':web_link_id#add_shared_link']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebLinksWebLinkIdAddSharedLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.web_links)[':web_link_id#add_shared_link']['$put']>
        },
      ) => parseResponse(client.web_links[':web_link_id#add_shared_link'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWebLinksWebLinkIdUpdateSharedLinkKey() {
  return ['web_links', '/web_links/:web_link_id#update_shared_link', 'PUT'] as const
}

export function usePutWebLinksWebLinkIdUpdateSharedLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id#update_shared_link']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.web_links)[':web_link_id#update_shared_link']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebLinksWebLinkIdUpdateSharedLinkKey()
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
            (typeof client.web_links)[':web_link_id#update_shared_link']['$put']
          >
        },
      ) =>
        parseResponse(client.web_links[':web_link_id#update_shared_link'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWebLinksWebLinkIdRemoveSharedLinkKey() {
  return ['web_links', '/web_links/:web_link_id#remove_shared_link', 'PUT'] as const
}

export function usePutWebLinksWebLinkIdRemoveSharedLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.web_links)[':web_link_id#remove_shared_link']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.web_links)[':web_link_id#remove_shared_link']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebLinksWebLinkIdRemoveSharedLinkKey()
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
            (typeof client.web_links)[':web_link_id#remove_shared_link']['$put']
          >
        },
      ) =>
        parseResponse(client.web_links[':web_link_id#remove_shared_link'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSharedItemsAppItemsKey(
  args: InferRequestType<(typeof client)['shared_items#app_items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shared_items#app_items', '/shared_items#app_items', keyArgs] as const
}

export function useGetSharedItemsAppItems<TError = unknown>(
  args: InferRequestType<(typeof client)['shared_items#app_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shared_items#app_items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSharedItemsAppItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shared_items#app_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shared_items#app_items'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSharedItemsAppItems<TError = unknown>(
  args: InferRequestType<(typeof client)['shared_items#app_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shared_items#app_items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSharedItemsAppItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shared_items#app_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shared_items#app_items'].$get(args, clientOptions)),
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

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeKey(args: InferRequestType<typeof client.users.me.$get>) {
  return ['users', '/users/me', args] as const
}

export function useGetUsersMe<TError = unknown>(
  args: InferRequestType<typeof client.users.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsersMe<TError = unknown>(
  args: InferRequestType<typeof client.users.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersTerminateSessionsKey() {
  return ['users', '/users/terminate_sessions', 'POST'] as const
}

export function usePostUsersTerminateSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.terminate_sessions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.terminate_sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersTerminateSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.terminate_sessions.$post> },
      ) => parseResponse(client.users.terminate_sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdKey() {
  return ['users', '/users/:user_id', 'PUT'] as const
}

export function usePutUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['$put']> },
      ) => parseResponse(client.users[':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdKey() {
  return ['users', '/users/:user_id', 'DELETE'] as const
}

export function useDeleteUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['$delete']> },
      ) => parseResponse(client.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdAvatarKey(
  args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$get']>,
) {
  return ['users', '/users/:user_id/avatar', args] as const
}

export function useGetUsersUserIdAvatar<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdAvatarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].avatar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdAvatar<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdAvatarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].avatar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdAvatarKey() {
  return ['users', '/users/:user_id/avatar', 'POST'] as const
}

export function usePostUsersUserIdAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['avatar']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['avatar']['$post']> },
      ) => parseResponse(client.users[':user_id'].avatar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdAvatarKey() {
  return ['users', '/users/:user_id/avatar', 'DELETE'] as const
}

export function useDeleteUsersUserIdAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['avatar']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['avatar']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['avatar']['$delete']> },
      ) => parseResponse(client.users[':user_id'].avatar.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUserIdFolders0Key() {
  return ['users', '/users/:user_id/folders/0', 'PUT'] as const
}

export function usePutUsersUserIdFolders0<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['folders']['0']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['folders']['0']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdFolders0Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['folders']['0']['$put']> },
      ) => parseResponse(client.users[':user_id'].folders['0'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdEmailAliasesKey(
  args: InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$get']>,
) {
  return ['users', '/users/:user_id/email_aliases', args] as const
}

export function useGetUsersUserIdEmailAliases<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdEmailAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].email_aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdEmailAliases<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdEmailAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].email_aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdEmailAliasesKey() {
  return ['users', '/users/:user_id/email_aliases', 'POST'] as const
}

export function usePostUsersUserIdEmailAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['email_aliases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdEmailAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$post']> },
      ) => parseResponse(client.users[':user_id'].email_aliases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdEmailAliasesEmailAliasIdKey() {
  return ['users', '/users/:user_id/email_aliases/:email_alias_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdEmailAliasesEmailAliasId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':user_id']['email_aliases'][':email_alias_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['email_aliases'][':email_alias_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdEmailAliasesEmailAliasIdKey()
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
            (typeof client.users)[':user_id']['email_aliases'][':email_alias_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].email_aliases[':email_alias_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdMembershipsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['memberships']['$get']>,
) {
  return ['users', '/users/:user_id/memberships', args] as const
}

export function useGetUsersUserIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvitesKey() {
  return ['invites', '/invites', 'POST'] as const
}

export function usePostInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.invites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invites.$post> }) =>
        parseResponse(client.invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvitesInviteIdKey(
  args: InferRequestType<(typeof client.invites)[':invite_id']['$get']>,
) {
  return ['invites', '/invites/:invite_id', args] as const
}

export function useGetInvitesInviteId<TError = unknown>(
  args: InferRequestType<(typeof client.invites)[':invite_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvitesInviteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invites[':invite_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvitesInviteId<TError = unknown>(
  args: InferRequestType<(typeof client.invites)[':invite_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvitesInviteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invites[':invite_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
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

export function getPostGroupsTerminateSessionsKey() {
  return ['groups', '/groups/terminate_sessions', 'POST'] as const
}

export function usePostGroupsTerminateSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.groups.terminate_sessions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.groups.terminate_sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsTerminateSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.groups.terminate_sessions.$post> },
      ) => parseResponse(client.groups.terminate_sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
) {
  return ['groups', '/groups/:group_id', args] as const
}

export function useGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsGroupIdKey() {
  return ['groups', '/groups/:group_id', 'PUT'] as const
}

export function usePutGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':group_id']['$put']> },
      ) => parseResponse(client.groups[':group_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdKey() {
  return ['groups', '/groups/:group_id', 'DELETE'] as const
}

export function useDeleteGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':group_id']['$delete']> },
      ) => parseResponse(client.groups[':group_id'].$delete(arg, clientOptions)),
      restMutationOptions,
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

export function getGetGroupsGroupIdCollaborationsKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['collaborations']['$get']>,
) {
  return ['groups', '/groups/:group_id/collaborations', args] as const
}

export function useGetGroupsGroupIdCollaborations<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['collaborations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsGroupIdCollaborationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.groups[':group_id'].collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdCollaborations<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['collaborations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsGroupIdCollaborationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':group_id']['collaborations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.groups[':group_id'].collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupMembershipsKey() {
  return ['group_memberships', '/group_memberships', 'POST'] as const
}

export function usePostGroupMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group_memberships.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.group_memberships.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.group_memberships.$post> }) =>
        parseResponse(client.group_memberships.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupMembershipsGroupMembershipIdKey(
  args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$get']>,
) {
  return ['group_memberships', '/group_memberships/:group_membership_id', args] as const
}

export function useGetGroupMembershipsGroupMembershipId<TError = unknown>(
  args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupMembershipsGroupMembershipIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.group_memberships[':group_membership_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupMembershipsGroupMembershipId<TError = unknown>(
  args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupMembershipsGroupMembershipIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.group_memberships[':group_membership_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupMembershipsGroupMembershipIdKey() {
  return ['group_memberships', '/group_memberships/:group_membership_id', 'PUT'] as const
}

export function usePutGroupMembershipsGroupMembershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group_memberships)[':group_membership_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupMembershipsGroupMembershipIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$put']>
        },
      ) => parseResponse(client.group_memberships[':group_membership_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupMembershipsGroupMembershipIdKey() {
  return ['group_memberships', '/group_memberships/:group_membership_id', 'DELETE'] as const
}

export function useDeleteGroupMembershipsGroupMembershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.group_memberships)[':group_membership_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupMembershipsGroupMembershipIdKey()
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
            (typeof client.group_memberships)[':group_membership_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.group_memberships[':group_membership_id'].$delete(arg, clientOptions)),
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
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id', args] as const
}

export function useGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'PUT'] as const
}

export function usePutWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhook_id']['$put']> },
      ) => parseResponse(client.webhooks[':webhook_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDeleteWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>
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
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']> },
      ) => parseResponse(client.webhooks[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSkillInvocationsSkillIdKey() {
  return ['skill_invocations', '/skill_invocations/:skill_id', 'PUT'] as const
}

export function usePutSkillInvocationsSkillId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.skill_invocations)[':skill_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.skill_invocations)[':skill_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSkillInvocationsSkillIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.skill_invocations)[':skill_id']['$put']> },
      ) => parseResponse(client.skill_invocations[':skill_id'].$put(arg, clientOptions)),
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

export function getOptionsEventsKey() {
  return ['events', '/events', 'OPTIONS'] as const
}

export function useOptionsEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$options>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.events.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsKey(args: InferRequestType<typeof client.collections.$get>) {
  return ['collections', '/collections', args] as const
}

export function useGetCollections<TError = unknown>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollections<TError = unknown>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdItemsKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['items']['$get']>,
) {
  return ['collections', '/collections/:collection_id/items', args] as const
}

export function useGetCollectionsCollectionIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsCollectionIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsCollectionIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collections[':collection_id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionsCollectionIdKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
) {
  return ['collections', '/collections/:collection_id', args] as const
}

export function useGetCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecentItemsKey(args: InferRequestType<typeof client.recent_items.$get>) {
  return ['recent_items', '/recent_items', args] as const
}

export function useGetRecentItems<TError = unknown>(
  args: InferRequestType<typeof client.recent_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecentItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recent_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecentItems<TError = unknown>(
  args: InferRequestType<typeof client.recent_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecentItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recent_items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recent_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRetentionPoliciesKey(
  args: InferRequestType<typeof client.retention_policies.$get>,
) {
  return ['retention_policies', '/retention_policies', args] as const
}

export function useGetRetentionPolicies<TError = unknown>(
  args: InferRequestType<typeof client.retention_policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetentionPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retention_policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetentionPolicies<TError = unknown>(
  args: InferRequestType<typeof client.retention_policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetentionPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retention_policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRetentionPoliciesKey() {
  return ['retention_policies', '/retention_policies', 'POST'] as const
}

export function usePostRetentionPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retention_policies.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.retention_policies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRetentionPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.retention_policies.$post> }) =>
        parseResponse(client.retention_policies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRetentionPoliciesRetentionPolicyIdKey(
  args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$get']>,
) {
  return ['retention_policies', '/retention_policies/:retention_policy_id', args] as const
}

export function useGetRetentionPoliciesRetentionPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetentionPoliciesRetentionPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.retention_policies[':retention_policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetentionPoliciesRetentionPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetentionPoliciesRetentionPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.retention_policies[':retention_policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRetentionPoliciesRetentionPolicyIdKey() {
  return ['retention_policies', '/retention_policies/:retention_policy_id', 'PUT'] as const
}

export function usePutRetentionPoliciesRetentionPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRetentionPoliciesRetentionPolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$put']>
        },
      ) =>
        parseResponse(client.retention_policies[':retention_policy_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRetentionPoliciesRetentionPolicyIdKey() {
  return ['retention_policies', '/retention_policies/:retention_policy_id', 'DELETE'] as const
}

export function useDeleteRetentionPoliciesRetentionPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.retention_policies)[':retention_policy_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRetentionPoliciesRetentionPolicyIdKey()
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
            (typeof client.retention_policies)[':retention_policy_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.retention_policies[':retention_policy_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRetentionPoliciesRetentionPolicyIdAssignmentsKey(
  args: InferRequestType<
    (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
  >,
) {
  return [
    'retention_policies',
    '/retention_policies/:retention_policy_id/assignments',
    args,
  ] as const
}

export function useGetRetentionPoliciesRetentionPolicyIdAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
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
        ? getGetRetentionPoliciesRetentionPolicyIdAssignmentsKey(args)
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
                (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
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
          client.retention_policies[':retention_policy_id'].assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetentionPoliciesRetentionPolicyIdAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
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
        ? getGetRetentionPoliciesRetentionPolicyIdAssignmentsKey(args)
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
                (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
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
          client.retention_policies[':retention_policy_id'].assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRetentionPolicyAssignmentsKey() {
  return ['retention_policy_assignments', '/retention_policy_assignments', 'POST'] as const
}

export function usePostRetentionPolicyAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.retention_policy_assignments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.retention_policy_assignments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRetentionPolicyAssignmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.retention_policy_assignments.$post> },
      ) => parseResponse(client.retention_policy_assignments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdKey(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
  >,
) {
  return [
    'retention_policy_assignments',
    '/retention_policy_assignments/:retention_policy_assignment_id',
    args,
  ] as const
}

export function useGetRetentionPolicyAssignmentsRetentionPolicyAssignmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
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
        ? getGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdKey(args)
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
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
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
          client.retention_policy_assignments[':retention_policy_assignment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetentionPolicyAssignmentsRetentionPolicyAssignmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
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
        ? getGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdKey(args)
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
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
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
          client.retention_policy_assignments[':retention_policy_assignment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdKey() {
  return [
    'retention_policy_assignments',
    '/retention_policy_assignments/:retention_policy_assignment_id',
    'DELETE',
  ] as const
}

export function useDeleteRetentionPolicyAssignmentsRetentionPolicyAssignmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdKey()
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
            (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.retention_policy_assignments[':retention_policy_assignment_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionKey(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
  >,
) {
  return [
    'retention_policy_assignments',
    '/retention_policy_assignments/:retention_policy_assignment_id/files_under_retention',
    args,
  ] as const
}

export function useGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetention<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
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
        ? getGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionKey(args)
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
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
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
          client.retention_policy_assignments[
            ':retention_policy_assignment_id'
          ].files_under_retention.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetention<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
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
        ? getGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionKey(args)
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
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
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
          client.retention_policy_assignments[
            ':retention_policy_assignment_id'
          ].files_under_retention.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionKey(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
  >,
) {
  return [
    'retention_policy_assignments',
    '/retention_policy_assignments/:retention_policy_assignment_id/file_versions_under_retention',
    args,
  ] as const
}

export function useGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetention<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
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
        ? getGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionKey(
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
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
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
          client.retention_policy_assignments[
            ':retention_policy_assignment_id'
          ].file_versions_under_retention.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetention<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
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
        ? getGetRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionKey(
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
                (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
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
          client.retention_policy_assignments[
            ':retention_policy_assignment_id'
          ].file_versions_under_retention.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLegalHoldPoliciesKey(
  args: InferRequestType<typeof client.legal_hold_policies.$get>,
) {
  return ['legal_hold_policies', '/legal_hold_policies', args] as const
}

export function useGetLegalHoldPolicies<TError = unknown>(
  args: InferRequestType<typeof client.legal_hold_policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalHoldPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.legal_hold_policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalHoldPolicies<TError = unknown>(
  args: InferRequestType<typeof client.legal_hold_policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalHoldPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.legal_hold_policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLegalHoldPoliciesKey() {
  return ['legal_hold_policies', '/legal_hold_policies', 'POST'] as const
}

export function usePostLegalHoldPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policies.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.legal_hold_policies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalHoldPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.legal_hold_policies.$post> }) =>
        parseResponse(client.legal_hold_policies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLegalHoldPoliciesLegalHoldPolicyIdKey(
  args: InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>,
) {
  return ['legal_hold_policies', '/legal_hold_policies/:legal_hold_policy_id', args] as const
}

export function useGetLegalHoldPoliciesLegalHoldPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalHoldPoliciesLegalHoldPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.legal_hold_policies[':legal_hold_policy_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalHoldPoliciesLegalHoldPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalHoldPoliciesLegalHoldPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.legal_hold_policies[':legal_hold_policy_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutLegalHoldPoliciesLegalHoldPolicyIdKey() {
  return ['legal_hold_policies', '/legal_hold_policies/:legal_hold_policy_id', 'PUT'] as const
}

export function usePutLegalHoldPoliciesLegalHoldPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLegalHoldPoliciesLegalHoldPolicyIdKey()
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
            (typeof client.legal_hold_policies)[':legal_hold_policy_id']['$put']
          >
        },
      ) =>
        parseResponse(client.legal_hold_policies[':legal_hold_policy_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLegalHoldPoliciesLegalHoldPolicyIdKey() {
  return ['legal_hold_policies', '/legal_hold_policies/:legal_hold_policy_id', 'DELETE'] as const
}

export function useDeleteLegalHoldPoliciesLegalHoldPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLegalHoldPoliciesLegalHoldPolicyIdKey()
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
            (typeof client.legal_hold_policies)[':legal_hold_policy_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.legal_hold_policies[':legal_hold_policy_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLegalHoldPolicyAssignmentsKey(
  args: InferRequestType<typeof client.legal_hold_policy_assignments.$get>,
) {
  return ['legal_hold_policy_assignments', '/legal_hold_policy_assignments', args] as const
}

export function useGetLegalHoldPolicyAssignments<TError = unknown>(
  args: InferRequestType<typeof client.legal_hold_policy_assignments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalHoldPolicyAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.legal_hold_policy_assignments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalHoldPolicyAssignments<TError = unknown>(
  args: InferRequestType<typeof client.legal_hold_policy_assignments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalHoldPolicyAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.legal_hold_policy_assignments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLegalHoldPolicyAssignmentsKey() {
  return ['legal_hold_policy_assignments', '/legal_hold_policy_assignments', 'POST'] as const
}

export function usePostLegalHoldPolicyAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.legal_hold_policy_assignments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.legal_hold_policy_assignments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalHoldPolicyAssignmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.legal_hold_policy_assignments.$post> },
      ) => parseResponse(client.legal_hold_policy_assignments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdKey(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
  >,
) {
  return [
    'legal_hold_policy_assignments',
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id',
    args,
  ] as const
}

export function useGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
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
        ? getGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdKey(args)
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
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
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
          client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
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
        ? getGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdKey(args)
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
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
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
          client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdKey() {
  return [
    'legal_hold_policy_assignments',
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id',
    'DELETE',
  ] as const
}

export function useDeleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdKey()
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
            (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldKey(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
  >,
) {
  return [
    'legal_hold_policy_assignments',
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id/files_on_hold',
    args,
  ] as const
}

export function useGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHold<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
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
        ? getGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldKey(args)
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
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
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
          client.legal_hold_policy_assignments[
            ':legal_hold_policy_assignment_id'
          ].files_on_hold.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHold<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
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
        ? getGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldKey(args)
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
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
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
          client.legal_hold_policy_assignments[
            ':legal_hold_policy_assignment_id'
          ].files_on_hold.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFileVersionRetentionsKey(
  args: InferRequestType<typeof client.file_version_retentions.$get>,
) {
  return ['file_version_retentions', '/file_version_retentions', args] as const
}

export function useGetFileVersionRetentions<TError = unknown>(
  args: InferRequestType<typeof client.file_version_retentions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileVersionRetentionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_version_retentions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileVersionRetentions<TError = unknown>(
  args: InferRequestType<typeof client.file_version_retentions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileVersionRetentionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.file_version_retentions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_version_retentions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldKey(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
  >,
) {
  return [
    'legal_hold_policy_assignments',
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id/file_versions_on_hold',
    args,
  ] as const
}

export function useGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHold<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
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
        ? getGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldKey(args)
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
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
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
          client.legal_hold_policy_assignments[
            ':legal_hold_policy_assignment_id'
          ].file_versions_on_hold.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHold<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
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
        ? getGetLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldKey(args)
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
                (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
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
          client.legal_hold_policy_assignments[
            ':legal_hold_policy_assignment_id'
          ].file_versions_on_hold.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFileVersionRetentionsFileVersionRetentionIdKey(
  args: InferRequestType<
    (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
  >,
) {
  return [
    'file_version_retentions',
    '/file_version_retentions/:file_version_retention_id',
    args,
  ] as const
}

export function useGetFileVersionRetentionsFileVersionRetentionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
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
        ? getGetFileVersionRetentionsFileVersionRetentionIdKey(args)
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
                (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
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
          client.file_version_retentions[':file_version_retention_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileVersionRetentionsFileVersionRetentionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
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
        ? getGetFileVersionRetentionsFileVersionRetentionIdKey(args)
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
                (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
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
          client.file_version_retentions[':file_version_retention_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFileVersionLegalHoldsFileVersionLegalHoldIdKey(
  args: InferRequestType<
    (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
  >,
) {
  return [
    'file_version_legal_holds',
    '/file_version_legal_holds/:file_version_legal_hold_id',
    args,
  ] as const
}

export function useGetFileVersionLegalHoldsFileVersionLegalHoldId<TError = unknown>(
  args: InferRequestType<
    (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
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
        ? getGetFileVersionLegalHoldsFileVersionLegalHoldIdKey(args)
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
                (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
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
          client.file_version_legal_holds[':file_version_legal_hold_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileVersionLegalHoldsFileVersionLegalHoldId<TError = unknown>(
  args: InferRequestType<
    (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
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
        ? getGetFileVersionLegalHoldsFileVersionLegalHoldIdKey(args)
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
                (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
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
          client.file_version_legal_holds[':file_version_legal_hold_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFileVersionLegalHoldsKey(
  args: InferRequestType<typeof client.file_version_legal_holds.$get>,
) {
  return ['file_version_legal_holds', '/file_version_legal_holds', args] as const
}

export function useGetFileVersionLegalHolds<TError = unknown>(
  args: InferRequestType<typeof client.file_version_legal_holds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileVersionLegalHoldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_version_legal_holds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFileVersionLegalHolds<TError = unknown>(
  args: InferRequestType<typeof client.file_version_legal_holds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFileVersionLegalHoldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.file_version_legal_holds.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.file_version_legal_holds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShieldInformationBarriersShieldInformationBarrierIdKey(
  args: InferRequestType<
    (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
  >,
) {
  return [
    'shield_information_barriers',
    '/shield_information_barriers/:shield_information_barrier_id',
    args,
  ] as const
}

export function useGetShieldInformationBarriersShieldInformationBarrierId<TError = unknown>(
  args: InferRequestType<
    (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
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
        ? getGetShieldInformationBarriersShieldInformationBarrierIdKey(args)
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
                (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
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
          client.shield_information_barriers[':shield_information_barrier_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldInformationBarriersShieldInformationBarrierId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
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
        ? getGetShieldInformationBarriersShieldInformationBarrierIdKey(args)
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
                (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
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
          client.shield_information_barriers[':shield_information_barrier_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostShieldInformationBarriersChangeStatusKey() {
  return [
    'shield_information_barriers',
    '/shield_information_barriers/change_status',
    'POST',
  ] as const
}

export function usePostShieldInformationBarriersChangeStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barriers.change_status.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shield_information_barriers.change_status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShieldInformationBarriersChangeStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.shield_information_barriers.change_status.$post> },
      ) =>
        parseResponse(client.shield_information_barriers.change_status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShieldInformationBarriersKey(
  args: InferRequestType<typeof client.shield_information_barriers.$get>,
) {
  return ['shield_information_barriers', '/shield_information_barriers', args] as const
}

export function useGetShieldInformationBarriers<TError = unknown>(
  args: InferRequestType<typeof client.shield_information_barriers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShieldInformationBarriersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shield_information_barriers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldInformationBarriers<TError = unknown>(
  args: InferRequestType<typeof client.shield_information_barriers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShieldInformationBarriersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shield_information_barriers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShieldInformationBarriersKey() {
  return ['shield_information_barriers', '/shield_information_barriers', 'POST'] as const
}

export function usePostShieldInformationBarriers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shield_information_barriers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shield_information_barriers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShieldInformationBarriersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.shield_information_barriers.$post> },
      ) => parseResponse(client.shield_information_barriers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShieldInformationBarrierReportsKey(
  args: InferRequestType<typeof client.shield_information_barrier_reports.$get>,
) {
  return [
    'shield_information_barrier_reports',
    '/shield_information_barrier_reports',
    args,
  ] as const
}

export function useGetShieldInformationBarrierReports<TError = unknown>(
  args: InferRequestType<typeof client.shield_information_barrier_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShieldInformationBarrierReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shield_information_barrier_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldInformationBarrierReports<TError = unknown>(
  args: InferRequestType<typeof client.shield_information_barrier_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShieldInformationBarrierReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_reports.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shield_information_barrier_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShieldInformationBarrierReportsKey() {
  return [
    'shield_information_barrier_reports',
    '/shield_information_barrier_reports',
    'POST',
  ] as const
}

export function usePostShieldInformationBarrierReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_reports.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shield_information_barrier_reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShieldInformationBarrierReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.shield_information_barrier_reports.$post> },
      ) => parseResponse(client.shield_information_barrier_reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShieldInformationBarrierReportsShieldInformationBarrierReportIdKey(
  args: InferRequestType<
    (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
  >,
) {
  return [
    'shield_information_barrier_reports',
    '/shield_information_barrier_reports/:shield_information_barrier_report_id',
    args,
  ] as const
}

export function useGetShieldInformationBarrierReportsShieldInformationBarrierReportId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
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
        ? getGetShieldInformationBarrierReportsShieldInformationBarrierReportIdKey(args)
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
                (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
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
          client.shield_information_barrier_reports[':shield_information_barrier_report_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldInformationBarrierReportsShieldInformationBarrierReportId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
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
        ? getGetShieldInformationBarrierReportsShieldInformationBarrierReportIdKey(args)
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
                (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
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
          client.shield_information_barrier_reports[':shield_information_barrier_report_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdKey(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
  >,
) {
  return [
    'shield_information_barrier_segments',
    '/shield_information_barrier_segments/:shield_information_barrier_segment_id',
    args,
  ] as const
}

export function useGetShieldInformationBarrierSegmentsShieldInformationBarrierSegmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
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
        ? getGetShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdKey(args)
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
                (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
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
          client.shield_information_barrier_segments[':shield_information_barrier_segment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldInformationBarrierSegmentsShieldInformationBarrierSegmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
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
        ? getGetShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdKey(args)
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
                (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
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
          client.shield_information_barrier_segments[':shield_information_barrier_segment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdKey() {
  return [
    'shield_information_barrier_segments',
    '/shield_information_barrier_segments/:shield_information_barrier_segment_id',
    'PUT',
  ] as const
}

export function usePutShieldInformationBarrierSegmentsShieldInformationBarrierSegmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdKey()
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
            (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.shield_information_barrier_segments[':shield_information_barrier_segment_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdKey() {
  return [
    'shield_information_barrier_segments',
    '/shield_information_barrier_segments/:shield_information_barrier_segment_id',
    'DELETE',
  ] as const
}

export function useDeleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdKey()
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
            (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.shield_information_barrier_segments[
            ':shield_information_barrier_segment_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetShieldInformationBarrierSegmentsKey(
  args: InferRequestType<typeof client.shield_information_barrier_segments.$get>,
) {
  return [
    'shield_information_barrier_segments',
    '/shield_information_barrier_segments',
    args,
  ] as const
}

export function useGetShieldInformationBarrierSegments<TError = unknown>(
  args: InferRequestType<typeof client.shield_information_barrier_segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShieldInformationBarrierSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shield_information_barrier_segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldInformationBarrierSegments<TError = unknown>(
  args: InferRequestType<typeof client.shield_information_barrier_segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShieldInformationBarrierSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segments.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shield_information_barrier_segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShieldInformationBarrierSegmentsKey() {
  return [
    'shield_information_barrier_segments',
    '/shield_information_barrier_segments',
    'POST',
  ] as const
}

export function usePostShieldInformationBarrierSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_segments.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shield_information_barrier_segments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShieldInformationBarrierSegmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.shield_information_barrier_segments.$post> },
      ) => parseResponse(client.shield_information_barrier_segments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdKey(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
  >,
) {
  return [
    'shield_information_barrier_segment_members',
    '/shield_information_barrier_segment_members/:shield_information_barrier_segment_member_id',
    args,
  ] as const
}

export function useGetShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
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
        ? getGetShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdKey(
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
                (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
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
          client.shield_information_barrier_segment_members[
            ':shield_information_barrier_segment_member_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
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
        ? getGetShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdKey(
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
                (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
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
          client.shield_information_barrier_segment_members[
            ':shield_information_barrier_segment_member_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdKey() {
  return [
    'shield_information_barrier_segment_members',
    '/shield_information_barrier_segment_members/:shield_information_barrier_segment_member_id',
    'DELETE',
  ] as const
}

export function useDeleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdKey()
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
            (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.shield_information_barrier_segment_members[
            ':shield_information_barrier_segment_member_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetShieldInformationBarrierSegmentMembersKey(
  args: InferRequestType<typeof client.shield_information_barrier_segment_members.$get>,
) {
  return [
    'shield_information_barrier_segment_members',
    '/shield_information_barrier_segment_members',
    args,
  ] as const
}

export function useGetShieldInformationBarrierSegmentMembers<TError = unknown>(
  args: InferRequestType<typeof client.shield_information_barrier_segment_members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShieldInformationBarrierSegmentMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shield_information_barrier_segment_members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldInformationBarrierSegmentMembers<TError = unknown>(
  args: InferRequestType<typeof client.shield_information_barrier_segment_members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShieldInformationBarrierSegmentMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shield_information_barrier_segment_members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShieldInformationBarrierSegmentMembersKey() {
  return [
    'shield_information_barrier_segment_members',
    '/shield_information_barrier_segment_members',
    'POST',
  ] as const
}

export function usePostShieldInformationBarrierSegmentMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_segment_members.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shield_information_barrier_segment_members.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShieldInformationBarrierSegmentMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.shield_information_barrier_segment_members.$post>
        },
      ) =>
        parseResponse(client.shield_information_barrier_segment_members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdKey(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
  >,
) {
  return [
    'shield_information_barrier_segment_restrictions',
    '/shield_information_barrier_segment_restrictions/:shield_information_barrier_segment_restriction_id',
    args,
  ] as const
}

export function useGetShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
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
        ? getGetShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdKey(
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
                (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
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
          client.shield_information_barrier_segment_restrictions[
            ':shield_information_barrier_segment_restriction_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
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
        ? getGetShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdKey(
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
                (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
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
          client.shield_information_barrier_segment_restrictions[
            ':shield_information_barrier_segment_restriction_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdKey() {
  return [
    'shield_information_barrier_segment_restrictions',
    '/shield_information_barrier_segment_restrictions/:shield_information_barrier_segment_restriction_id',
    'DELETE',
  ] as const
}

export function useDeleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdKey()
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
            (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.shield_information_barrier_segment_restrictions[
            ':shield_information_barrier_segment_restriction_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetShieldInformationBarrierSegmentRestrictionsKey(
  args: InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$get>,
) {
  return [
    'shield_information_barrier_segment_restrictions',
    '/shield_information_barrier_segment_restrictions',
    args,
  ] as const
}

export function useGetShieldInformationBarrierSegmentRestrictions<TError = unknown>(
  args: InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShieldInformationBarrierSegmentRestrictionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shield_information_barrier_segment_restrictions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldInformationBarrierSegmentRestrictions<TError = unknown>(
  args: InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShieldInformationBarrierSegmentRestrictionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.shield_information_barrier_segment_restrictions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shield_information_barrier_segment_restrictions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostShieldInformationBarrierSegmentRestrictionsKey() {
  return [
    'shield_information_barrier_segment_restrictions',
    '/shield_information_barrier_segment_restrictions',
    'POST',
  ] as const
}

export function usePostShieldInformationBarrierSegmentRestrictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shield_information_barrier_segment_restrictions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShieldInformationBarrierSegmentRestrictionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$post>
        },
      ) =>
        parseResponse(
          client.shield_information_barrier_segment_restrictions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDevicePinnersDevicePinnerIdKey(
  args: InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$get']>,
) {
  return ['device_pinners', '/device_pinners/:device_pinner_id', args] as const
}

export function useGetDevicePinnersDevicePinnerId<TError = unknown>(
  args: InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicePinnersDevicePinnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.device_pinners[':device_pinner_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicePinnersDevicePinnerId<TError = unknown>(
  args: InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDevicePinnersDevicePinnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.device_pinners[':device_pinner_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDevicePinnersDevicePinnerIdKey() {
  return ['device_pinners', '/device_pinners/:device_pinner_id', 'DELETE'] as const
}

export function useDeleteDevicePinnersDevicePinnerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.device_pinners)[':device_pinner_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDevicePinnersDevicePinnerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$delete']>
        },
      ) => parseResponse(client.device_pinners[':device_pinner_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnterprisesEnterpriseIdDevicePinnersKey(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>,
) {
  return ['enterprises', '/enterprises/:enterprise_id/device_pinners', args] as const
}

export function useGetEnterprisesEnterpriseIdDevicePinners<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesEnterpriseIdDevicePinnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.enterprises[':enterprise_id'].device_pinners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesEnterpriseIdDevicePinners<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesEnterpriseIdDevicePinnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.enterprises[':enterprise_id'].device_pinners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTermsOfServicesKey(
  args: InferRequestType<typeof client.terms_of_services.$get>,
) {
  return ['terms_of_services', '/terms_of_services', args] as const
}

export function useGetTermsOfServices<TError = unknown>(
  args: InferRequestType<typeof client.terms_of_services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTermsOfServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.terms_of_services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTermsOfServices<TError = unknown>(
  args: InferRequestType<typeof client.terms_of_services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTermsOfServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.terms_of_services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTermsOfServicesKey() {
  return ['terms_of_services', '/terms_of_services', 'POST'] as const
}

export function usePostTermsOfServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms_of_services.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.terms_of_services.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTermsOfServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.terms_of_services.$post> }) =>
        parseResponse(client.terms_of_services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTermsOfServicesTermsOfServiceIdKey(
  args: InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>,
) {
  return ['terms_of_services', '/terms_of_services/:terms_of_service_id', args] as const
}

export function useGetTermsOfServicesTermsOfServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTermsOfServicesTermsOfServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.terms_of_services[':terms_of_service_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTermsOfServicesTermsOfServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTermsOfServicesTermsOfServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.terms_of_services[':terms_of_service_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTermsOfServicesTermsOfServiceIdKey() {
  return ['terms_of_services', '/terms_of_services/:terms_of_service_id', 'PUT'] as const
}

export function usePutTermsOfServicesTermsOfServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.terms_of_services)[':terms_of_service_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTermsOfServicesTermsOfServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$put']>
        },
      ) => parseResponse(client.terms_of_services[':terms_of_service_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTermsOfServiceUserStatusesKey(
  args: InferRequestType<typeof client.terms_of_service_user_statuses.$get>,
) {
  return ['terms_of_service_user_statuses', '/terms_of_service_user_statuses', args] as const
}

export function useGetTermsOfServiceUserStatuses<TError = unknown>(
  args: InferRequestType<typeof client.terms_of_service_user_statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTermsOfServiceUserStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.terms_of_service_user_statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTermsOfServiceUserStatuses<TError = unknown>(
  args: InferRequestType<typeof client.terms_of_service_user_statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTermsOfServiceUserStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.terms_of_service_user_statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTermsOfServiceUserStatusesKey() {
  return ['terms_of_service_user_statuses', '/terms_of_service_user_statuses', 'POST'] as const
}

export function usePostTermsOfServiceUserStatuses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.terms_of_service_user_statuses.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.terms_of_service_user_statuses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTermsOfServiceUserStatusesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.terms_of_service_user_statuses.$post> },
      ) => parseResponse(client.terms_of_service_user_statuses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTermsOfServiceUserStatusesTermsOfServiceUserStatusIdKey() {
  return [
    'terms_of_service_user_statuses',
    '/terms_of_service_user_statuses/:terms_of_service_user_status_id',
    'PUT',
  ] as const
}

export function usePutTermsOfServiceUserStatusesTermsOfServiceUserStatusId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.terms_of_service_user_statuses)[':terms_of_service_user_status_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.terms_of_service_user_statuses)[':terms_of_service_user_status_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTermsOfServiceUserStatusesTermsOfServiceUserStatusIdKey()
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
            (typeof client.terms_of_service_user_statuses)[':terms_of_service_user_status_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.terms_of_service_user_statuses[':terms_of_service_user_status_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollaborationWhitelistEntriesKey(
  args: InferRequestType<typeof client.collaboration_whitelist_entries.$get>,
) {
  return ['collaboration_whitelist_entries', '/collaboration_whitelist_entries', args] as const
}

export function useGetCollaborationWhitelistEntries<TError = unknown>(
  args: InferRequestType<typeof client.collaboration_whitelist_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollaborationWhitelistEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collaboration_whitelist_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollaborationWhitelistEntries<TError = unknown>(
  args: InferRequestType<typeof client.collaboration_whitelist_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollaborationWhitelistEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collaboration_whitelist_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollaborationWhitelistEntriesKey() {
  return ['collaboration_whitelist_entries', '/collaboration_whitelist_entries', 'POST'] as const
}

export function usePostCollaborationWhitelistEntries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.collaboration_whitelist_entries.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.collaboration_whitelist_entries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollaborationWhitelistEntriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.collaboration_whitelist_entries.$post> },
      ) => parseResponse(client.collaboration_whitelist_entries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollaborationWhitelistEntriesCollaborationWhitelistEntryIdKey(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
  >,
) {
  return [
    'collaboration_whitelist_entries',
    '/collaboration_whitelist_entries/:collaboration_whitelist_entry_id',
    args,
  ] as const
}

export function useGetCollaborationWhitelistEntriesCollaborationWhitelistEntryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
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
        ? getGetCollaborationWhitelistEntriesCollaborationWhitelistEntryIdKey(args)
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
                (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
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
          client.collaboration_whitelist_entries[':collaboration_whitelist_entry_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollaborationWhitelistEntriesCollaborationWhitelistEntryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
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
        ? getGetCollaborationWhitelistEntriesCollaborationWhitelistEntryIdKey(args)
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
                (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
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
          client.collaboration_whitelist_entries[':collaboration_whitelist_entry_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdKey() {
  return [
    'collaboration_whitelist_entries',
    '/collaboration_whitelist_entries/:collaboration_whitelist_entry_id',
    'DELETE',
  ] as const
}

export function useDeleteCollaborationWhitelistEntriesCollaborationWhitelistEntryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdKey()
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
            (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.collaboration_whitelist_entries[':collaboration_whitelist_entry_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollaborationWhitelistExemptTargetsKey(
  args: InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$get>,
) {
  return [
    'collaboration_whitelist_exempt_targets',
    '/collaboration_whitelist_exempt_targets',
    args,
  ] as const
}

export function useGetCollaborationWhitelistExemptTargets<TError = unknown>(
  args: InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollaborationWhitelistExemptTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collaboration_whitelist_exempt_targets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollaborationWhitelistExemptTargets<TError = unknown>(
  args: InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollaborationWhitelistExemptTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.collaboration_whitelist_exempt_targets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollaborationWhitelistExemptTargetsKey() {
  return [
    'collaboration_whitelist_exempt_targets',
    '/collaboration_whitelist_exempt_targets',
    'POST',
  ] as const
}

export function usePostCollaborationWhitelistExemptTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.collaboration_whitelist_exempt_targets.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollaborationWhitelistExemptTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$post> },
      ) => parseResponse(client.collaboration_whitelist_exempt_targets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdKey(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
  >,
) {
  return [
    'collaboration_whitelist_exempt_targets',
    '/collaboration_whitelist_exempt_targets/:collaboration_whitelist_exempt_target_id',
    args,
  ] as const
}

export function useGetCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
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
        ? getGetCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdKey(args)
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
                (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
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
          client.collaboration_whitelist_exempt_targets[
            ':collaboration_whitelist_exempt_target_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
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
        ? getGetCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdKey(args)
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
                (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
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
          client.collaboration_whitelist_exempt_targets[
            ':collaboration_whitelist_exempt_target_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdKey() {
  return [
    'collaboration_whitelist_exempt_targets',
    '/collaboration_whitelist_exempt_targets/:collaboration_whitelist_exempt_target_id',
    'DELETE',
  ] as const
}

export function useDeleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdKey()
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
            (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.collaboration_whitelist_exempt_targets[
            ':collaboration_whitelist_exempt_target_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStoragePoliciesKey(
  args: InferRequestType<typeof client.storage_policies.$get>,
) {
  return ['storage_policies', '/storage_policies', args] as const
}

export function useGetStoragePolicies<TError = unknown>(
  args: InferRequestType<typeof client.storage_policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoragePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storage_policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoragePolicies<TError = unknown>(
  args: InferRequestType<typeof client.storage_policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoragePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage_policies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storage_policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoragePoliciesStoragePolicyIdKey(
  args: InferRequestType<(typeof client.storage_policies)[':storage_policy_id']['$get']>,
) {
  return ['storage_policies', '/storage_policies/:storage_policy_id', args] as const
}

export function useGetStoragePoliciesStoragePolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.storage_policies)[':storage_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoragePoliciesStoragePolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.storage_policies[':storage_policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoragePoliciesStoragePolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.storage_policies)[':storage_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoragePoliciesStoragePolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage_policies)[':storage_policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.storage_policies[':storage_policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoragePolicyAssignmentsKey(
  args: InferRequestType<typeof client.storage_policy_assignments.$get>,
) {
  return ['storage_policy_assignments', '/storage_policy_assignments', args] as const
}

export function useGetStoragePolicyAssignments<TError = unknown>(
  args: InferRequestType<typeof client.storage_policy_assignments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoragePolicyAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storage_policy_assignments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoragePolicyAssignments<TError = unknown>(
  args: InferRequestType<typeof client.storage_policy_assignments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoragePolicyAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storage_policy_assignments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStoragePolicyAssignmentsKey() {
  return ['storage_policy_assignments', '/storage_policy_assignments', 'POST'] as const
}

export function usePostStoragePolicyAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.storage_policy_assignments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.storage_policy_assignments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoragePolicyAssignmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.storage_policy_assignments.$post> },
      ) => parseResponse(client.storage_policy_assignments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoragePolicyAssignmentsStoragePolicyAssignmentIdKey(
  args: InferRequestType<
    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
  >,
) {
  return [
    'storage_policy_assignments',
    '/storage_policy_assignments/:storage_policy_assignment_id',
    args,
  ] as const
}

export function useGetStoragePolicyAssignmentsStoragePolicyAssignmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
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
        ? getGetStoragePolicyAssignmentsStoragePolicyAssignmentIdKey(args)
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
                (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
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
          client.storage_policy_assignments[':storage_policy_assignment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoragePolicyAssignmentsStoragePolicyAssignmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
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
        ? getGetStoragePolicyAssignmentsStoragePolicyAssignmentIdKey(args)
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
                (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
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
          client.storage_policy_assignments[':storage_policy_assignment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutStoragePolicyAssignmentsStoragePolicyAssignmentIdKey() {
  return [
    'storage_policy_assignments',
    '/storage_policy_assignments/:storage_policy_assignment_id',
    'PUT',
  ] as const
}

export function usePutStoragePolicyAssignmentsStoragePolicyAssignmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStoragePolicyAssignmentsStoragePolicyAssignmentIdKey()
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
            (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.storage_policy_assignments[':storage_policy_assignment_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteStoragePolicyAssignmentsStoragePolicyAssignmentIdKey() {
  return [
    'storage_policy_assignments',
    '/storage_policy_assignments/:storage_policy_assignment_id',
    'DELETE',
  ] as const
}

export function useDeleteStoragePolicyAssignmentsStoragePolicyAssignmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStoragePolicyAssignmentsStoragePolicyAssignmentIdKey()
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
            (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.storage_policy_assignments[':storage_policy_assignment_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostZipDownloadsKey() {
  return ['zip_downloads', '/zip_downloads', 'POST'] as const
}

export function usePostZipDownloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zip_downloads.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.zip_downloads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostZipDownloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.zip_downloads.$post> }) =>
        parseResponse(client.zip_downloads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetZipDownloadsZipDownloadIdContentKey(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>,
) {
  return ['zip_downloads', '/zip_downloads/:zip_download_id/content', args] as const
}

export function useGetZipDownloadsZipDownloadIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZipDownloadsZipDownloadIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.zip_downloads[':zip_download_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetZipDownloadsZipDownloadIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZipDownloadsZipDownloadIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.zip_downloads[':zip_download_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetZipDownloadsZipDownloadIdStatusKey(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>,
) {
  return ['zip_downloads', '/zip_downloads/:zip_download_id/status', args] as const
}

export function useGetZipDownloadsZipDownloadIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZipDownloadsZipDownloadIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.zip_downloads[':zip_download_id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetZipDownloadsZipDownloadIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetZipDownloadsZipDownloadIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.zip_downloads[':zip_download_id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSignRequestsSignRequestIdCancelKey() {
  return ['sign_requests', '/sign_requests/:sign_request_id/cancel', 'POST'] as const
}

export function usePostSignRequestsSignRequestIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sign_requests)[':sign_request_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignRequestsSignRequestIdCancelKey()
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
            (typeof client.sign_requests)[':sign_request_id']['cancel']['$post']
          >
        },
      ) => parseResponse(client.sign_requests[':sign_request_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignRequestsSignRequestIdResendKey() {
  return ['sign_requests', '/sign_requests/:sign_request_id/resend', 'POST'] as const
}

export function usePostSignRequestsSignRequestIdResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['resend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sign_requests)[':sign_request_id']['resend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignRequestsSignRequestIdResendKey()
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
            (typeof client.sign_requests)[':sign_request_id']['resend']['$post']
          >
        },
      ) => parseResponse(client.sign_requests[':sign_request_id'].resend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSignRequestsSignRequestIdKey(
  args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['$get']>,
) {
  return ['sign_requests', '/sign_requests/:sign_request_id', args] as const
}

export function useGetSignRequestsSignRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSignRequestsSignRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sign_requests[':sign_request_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignRequestsSignRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSignRequestsSignRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sign_requests)[':sign_request_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sign_requests[':sign_request_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSignRequestsKey(args: InferRequestType<typeof client.sign_requests.$get>) {
  return ['sign_requests', '/sign_requests', args] as const
}

export function useGetSignRequests<TError = unknown>(
  args: InferRequestType<typeof client.sign_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSignRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sign_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignRequests<TError = unknown>(
  args: InferRequestType<typeof client.sign_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSignRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sign_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSignRequestsKey() {
  return ['sign_requests', '/sign_requests', 'POST'] as const
}

export function usePostSignRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_requests.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sign_requests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sign_requests.$post> }) =>
        parseResponse(client.sign_requests.$post(arg, clientOptions)),
      restMutationOptions,
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

export function getPostWorkflowsWorkflowIdStartKey() {
  return ['workflows', '/workflows/:workflow_id/start', 'POST'] as const
}

export function usePostWorkflowsWorkflowIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflow_id']['start']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.workflows)[':workflow_id']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowsWorkflowIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.workflows)[':workflow_id']['start']['$post']> },
      ) => parseResponse(client.workflows[':workflow_id'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSignTemplatesKey(args: InferRequestType<typeof client.sign_templates.$get>) {
  return ['sign_templates', '/sign_templates', args] as const
}

export function useGetSignTemplates<TError = unknown>(
  args: InferRequestType<typeof client.sign_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSignTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sign_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignTemplates<TError = unknown>(
  args: InferRequestType<typeof client.sign_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSignTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sign_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSignTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.sign_templates)[':template_id']['$get']>,
) {
  return ['sign_templates', '/sign_templates/:template_id', args] as const
}

export function useGetSignTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.sign_templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sign_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSignTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sign_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sign_templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.sign_templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sign_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSignTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sign_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sign_templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationMappingsSlackKey(
  args: InferRequestType<typeof client.integration_mappings.slack.$get>,
) {
  return ['integration_mappings', '/integration_mappings/slack', args] as const
}

export function useGetIntegrationMappingsSlack<TError = unknown>(
  args: InferRequestType<typeof client.integration_mappings.slack.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntegrationMappingsSlackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integration_mappings.slack.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationMappingsSlack<TError = unknown>(
  args: InferRequestType<typeof client.integration_mappings.slack.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntegrationMappingsSlackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integration_mappings.slack.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIntegrationMappingsSlackKey() {
  return ['integration_mappings', '/integration_mappings/slack', 'POST'] as const
}

export function usePostIntegrationMappingsSlack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.slack.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.integration_mappings.slack.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationMappingsSlackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.integration_mappings.slack.$post> },
      ) => parseResponse(client.integration_mappings.slack.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutIntegrationMappingsSlackIntegrationMappingIdKey() {
  return [
    'integration_mappings',
    '/integration_mappings/slack/:integration_mapping_id',
    'PUT',
  ] as const
}

export function usePutIntegrationMappingsSlackIntegrationMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.integration_mappings.slack)[':integration_mapping_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integration_mappings.slack)[':integration_mapping_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIntegrationMappingsSlackIntegrationMappingIdKey()
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
            (typeof client.integration_mappings.slack)[':integration_mapping_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.integration_mappings.slack[':integration_mapping_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIntegrationMappingsSlackIntegrationMappingIdKey() {
  return [
    'integration_mappings',
    '/integration_mappings/slack/:integration_mapping_id',
    'DELETE',
  ] as const
}

export function useDeleteIntegrationMappingsSlackIntegrationMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.integration_mappings.slack)[':integration_mapping_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.integration_mappings.slack)[':integration_mapping_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIntegrationMappingsSlackIntegrationMappingIdKey()
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
            (typeof client.integration_mappings.slack)[':integration_mapping_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.integration_mappings.slack[':integration_mapping_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationMappingsTeamsKey(
  args: InferRequestType<typeof client.integration_mappings.teams.$get>,
) {
  return ['integration_mappings', '/integration_mappings/teams', args] as const
}

export function useGetIntegrationMappingsTeams<TError = unknown>(
  args: InferRequestType<typeof client.integration_mappings.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntegrationMappingsTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integration_mappings.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationMappingsTeams<TError = unknown>(
  args: InferRequestType<typeof client.integration_mappings.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntegrationMappingsTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integration_mappings.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIntegrationMappingsTeamsKey() {
  return ['integration_mappings', '/integration_mappings/teams', 'POST'] as const
}

export function usePostIntegrationMappingsTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integration_mappings.teams.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.integration_mappings.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationMappingsTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.integration_mappings.teams.$post> },
      ) => parseResponse(client.integration_mappings.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutIntegrationMappingsTeamsIntegrationMappingIdKey() {
  return [
    'integration_mappings',
    '/integration_mappings/teams/:integration_mapping_id',
    'PUT',
  ] as const
}

export function usePutIntegrationMappingsTeamsIntegrationMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.integration_mappings.teams)[':integration_mapping_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integration_mappings.teams)[':integration_mapping_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIntegrationMappingsTeamsIntegrationMappingIdKey()
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
            (typeof client.integration_mappings.teams)[':integration_mapping_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.integration_mappings.teams[':integration_mapping_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIntegrationMappingsTeamsIntegrationMappingIdKey() {
  return [
    'integration_mappings',
    '/integration_mappings/teams/:integration_mapping_id',
    'DELETE',
  ] as const
}

export function useDeleteIntegrationMappingsTeamsIntegrationMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.integration_mappings.teams)[':integration_mapping_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.integration_mappings.teams)[':integration_mapping_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIntegrationMappingsTeamsIntegrationMappingIdKey()
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
            (typeof client.integration_mappings.teams)[':integration_mapping_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.integration_mappings.teams[':integration_mapping_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAiAskKey() {
  return ['ai', '/ai/ask', 'POST'] as const
}

export function usePostAiAsk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.ask.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.ai.ask.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiAskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ai.ask.$post> }) =>
        parseResponse(client.ai.ask.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAiTextGenKey() {
  return ['ai', '/ai/text_gen', 'POST'] as const
}

export function usePostAiTextGen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.text_gen.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ai.text_gen.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiTextGenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ai.text_gen.$post> }) =>
        parseResponse(client.ai.text_gen.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiAgentDefaultKey(
  args: InferRequestType<typeof client.ai_agent_default.$get>,
) {
  return ['ai_agent_default', '/ai_agent_default', args] as const
}

export function useGetAiAgentDefault<TError = unknown>(
  args: InferRequestType<typeof client.ai_agent_default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agent_default.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiAgentDefaultKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agent_default.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai_agent_default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiAgentDefault<TError = unknown>(
  args: InferRequestType<typeof client.ai_agent_default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agent_default.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiAgentDefaultKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agent_default.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai_agent_default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAiExtractKey() {
  return ['ai', '/ai/extract', 'POST'] as const
}

export function usePostAiExtract<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.extract.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ai.extract.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiExtractKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ai.extract.$post> }) =>
        parseResponse(client.ai.extract.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAiExtractStructuredKey() {
  return ['ai', '/ai/extract_structured', 'POST'] as const
}

export function usePostAiExtractStructured<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ai.extract_structured.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ai.extract_structured.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiExtractStructuredKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ai.extract_structured.$post> },
      ) => parseResponse(client.ai.extract_structured.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiAgentsKey(args: InferRequestType<typeof client.ai_agents.$get>) {
  return ['ai_agents', '/ai_agents', args] as const
}

export function useGetAiAgents<TError = unknown>(
  args: InferRequestType<typeof client.ai_agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiAgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai_agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiAgents<TError = unknown>(
  args: InferRequestType<typeof client.ai_agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiAgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai_agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAiAgentsKey() {
  return ['ai_agents', '/ai_agents', 'POST'] as const
}

export function usePostAiAgents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_agents.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ai_agents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiAgentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ai_agents.$post> }) =>
        parseResponse(client.ai_agents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiAgentsAgentIdKey(
  args: InferRequestType<(typeof client.ai_agents)[':agent_id']['$get']>,
) {
  return ['ai_agents', '/ai_agents/:agent_id', args] as const
}

export function useGetAiAgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.ai_agents)[':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAiAgentsAgentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai_agents[':agent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiAgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.ai_agents)[':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAiAgentsAgentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai_agents[':agent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAiAgentsAgentIdKey() {
  return ['ai_agents', '/ai_agents/:agent_id', 'PUT'] as const
}

export function usePutAiAgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai_agents)[':agent_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAiAgentsAgentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ai_agents)[':agent_id']['$put']> },
      ) => parseResponse(client.ai_agents[':agent_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAiAgentsAgentIdKey() {
  return ['ai_agents', '/ai_agents/:agent_id', 'DELETE'] as const
}

export function useDeleteAiAgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai_agents)[':agent_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ai_agents)[':agent_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiAgentsAgentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ai_agents)[':agent_id']['$delete']> },
      ) => parseResponse(client.ai_agents[':agent_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataTaxonomiesKey() {
  return ['metadata_taxonomies', '/metadata_taxonomies', 'POST'] as const
}

export function usePostMetadataTaxonomies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata_taxonomies.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata_taxonomies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataTaxonomiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metadata_taxonomies.$post> }) =>
        parseResponse(client.metadata_taxonomies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataTaxonomiesNamespaceKey(
  args: InferRequestType<(typeof client.metadata_taxonomies)[':namespace']['$get']>,
) {
  return ['metadata_taxonomies', '/metadata_taxonomies/:namespace', args] as const
}

export function useGetMetadataTaxonomiesNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.metadata_taxonomies)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata_taxonomies)[':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTaxonomiesNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata_taxonomies)[':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata_taxonomies[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTaxonomiesNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.metadata_taxonomies)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata_taxonomies)[':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTaxonomiesNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata_taxonomies)[':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata_taxonomies[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetadataTaxonomiesNamespaceTaxonomyKeyKey(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']
  >,
) {
  return ['metadata_taxonomies', '/metadata_taxonomies/:namespace/:taxonomy_key', args] as const
}

export function useGetMetadataTaxonomiesNamespaceTaxonomyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTaxonomiesNamespaceTaxonomyKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTaxonomiesNamespaceTaxonomyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataTaxonomiesNamespaceTaxonomyKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyKey() {
  return ['metadata_taxonomies', '/metadata_taxonomies/:namespace/:taxonomy_key', 'DELETE'] as const
}

export function useDeleteMetadataTaxonomiesNamespaceTaxonomyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyKey()
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
            (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMetadataTaxonomiesNamespaceTaxonomyKeyKey() {
  return ['metadata_taxonomies', '/metadata_taxonomies/:namespace/:taxonomy_key', 'PATCH'] as const
}

export function usePatchMetadataTaxonomiesNamespaceTaxonomyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMetadataTaxonomiesNamespaceTaxonomyKeyKey()
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
            (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels',
    'POST',
  ] as const
}

export function usePostMetadataTaxonomiesNamespaceTaxonomyKeyLevels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsKey()
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
            (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels']['$post']
          >
        },
      ) =>
        parseResponse(
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].levels.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels/:level_index',
    'PATCH',
  ] as const
}

export function usePatchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels'][':level_index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels'][':level_index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexKey()
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
            (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels'][':level_index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].levels[':level_index'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels:append',
    'POST',
  ] as const
}

export function usePostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:append']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:append']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendKey()
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
            (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:append']['$post']
          >
        },
      ) =>
        parseResponse(
          client.metadata_taxonomies[':namespace'][':taxonomy_key']['levels:append'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels:trim',
    'POST',
  ] as const
}

export function usePostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrim<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:trim']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:trim']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimKey()
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
            (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['levels:trim']['$post']
          >
        },
      ) =>
        parseResponse(
          client.metadata_taxonomies[':namespace'][':taxonomy_key']['levels:trim'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataTaxonomiesNamespaceTaxonomyKeyNodesKey(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$get']
  >,
) {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/nodes',
    args,
  ] as const
}

export function useGetMetadataTaxonomiesNamespaceTaxonomyKeyNodes<TError = unknown>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$get']
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
        ? getGetMetadataTaxonomiesNamespaceTaxonomyKeyNodesKey(args)
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
                (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$get']
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
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTaxonomiesNamespaceTaxonomyKeyNodes<TError = unknown>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$get']
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
        ? getGetMetadataTaxonomiesNamespaceTaxonomyKeyNodesKey(args)
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
                (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$get']
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
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMetadataTaxonomiesNamespaceTaxonomyKeyNodesKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/nodes',
    'POST',
  ] as const
}

export function usePostMetadataTaxonomiesNamespaceTaxonomyKeyNodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataTaxonomiesNamespaceTaxonomyKeyNodesKey()
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
            (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdKey(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$get']
  >,
) {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/nodes/:node_id',
    args,
  ] as const
}

export function useGetMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$get']
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
        ? getGetMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdKey(args)
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
                (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$get']
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
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes[':node_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$get']
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
        ? getGetMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdKey(args)
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
                (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$get']
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
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes[':node_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/nodes/:node_id',
    'DELETE',
  ] as const
}

export function useDeleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdKey()
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
            (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes[':node_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdKey() {
  return [
    'metadata_taxonomies',
    '/metadata_taxonomies/:namespace/:taxonomy_key/nodes/:node_id',
    'PATCH',
  ] as const
}

export function usePatchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdKey()
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
            (typeof client.metadata_taxonomies)[':namespace'][':taxonomy_key']['nodes'][':node_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.metadata_taxonomies[':namespace'][':taxonomy_key'].nodes[':node_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsKey(
  args: InferRequestType<
    (typeof client.metadata_templates)[':namespace'][':template_key']['fields'][':field_key']['options']['$get']
  >,
) {
  return [
    'metadata_templates',
    '/metadata_templates/:namespace/:template_key/fields/:field_key/options',
    args,
  ] as const
}

export function useGetMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.metadata_templates)[':namespace'][':template_key']['fields'][':field_key']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_templates)[':namespace'][':template_key']['fields'][':field_key']['options']['$get']
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
        ? getGetMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsKey(args)
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
                (typeof client.metadata_templates)[':namespace'][':template_key']['fields'][':field_key']['options']['$get']
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
          client.metadata_templates[':namespace'][':template_key'].fields[
            ':field_key'
          ].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.metadata_templates)[':namespace'][':template_key']['fields'][':field_key']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.metadata_templates)[':namespace'][':template_key']['fields'][':field_key']['options']['$get']
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
        ? getGetMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsKey(args)
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
                (typeof client.metadata_templates)[':namespace'][':template_key']['fields'][':field_key']['options']['$get']
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
          client.metadata_templates[':namespace'][':template_key'].fields[
            ':field_key'
          ].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
